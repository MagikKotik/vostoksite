# Skill `sessions` — `/dir` · `/load` · `/save`

Un skill léger qui donne à Claude une **mémoire de session** : sauvegarder l'état d'une conversation, le recharger plus tard, et lister ce qu'on a en stock. Tout vit dans un seul répertoire `sessions/`, sans base de données ni index — la liste des sessions, c'est simplement les fichiers présents. Les trois commandes sont regroupées dans **un seul skill** : une seule install.

---

## Installation (≈ 1 minute, un seul clic)

Tu n'as rien à coder. Voici **exactement** ce qui va se passer, étape par étape, et ce qu'on va te demander.

### Ce qu'il te faut
- **Cowork** (l'app Claude desktop).
- Le fichier **`prompt.md`** de ce dossier (aie-le sous la main pour le joindre).

### Les étapes

1. **Ouvre une conversation Cowork.**

2. **Tape `/skill-creator` et joins `prompt.md`** en pièce jointe, puis envoie.
   - *Ce qui se passe :* skill-creator lit le prompt et écrit **un skill unique** `sessions` contenant les trois commandes.

3. **Laisse-le travailler.** Il ne lance **aucune** phase de tests (le prompt le lui interdit), donc c'est rapide.
   - *Ce qu'on va te demander :* en principe **rien**. S'il pose une question de précision, réponds simplement (ou « fais au plus simple »).

4. **Il te présente un fichier `sessions.skill`** sous forme de carte, avec un bouton **« Save skill »** (Enregistrer le skill).
   - *Ce que tu fais :* **clique sur « Save skill »**. ⚠️ **C'est CETTE étape qui installe réellement le skill** — pas la génération des fichiers, pas le redémarrage de Claude.

5. **Ouvre une nouvelle conversation** (si les commandes n'apparaissent pas tout de suite).

### Vérifier que ça marche
Tape **`/dir`**. Si l'install a réussi, Claude liste tes sessions (vide la première fois — c'est normal). Pour un test complet : `/save mon_test`, puis `/dir` → tu dois voir `mon_test`.

### Si ça coince
- **Pas de bouton « Save skill » à la fin ?** skill-creator s'est arrêté aux dossiers bruts. Redemande-lui simplement : *« empaquette le skill en un fichier `.skill` et présente-le »*.
- **`/dir` ne fait rien (commande inconnue) ?** Le skill n'est pas installé : tu as généré les fichiers mais **pas cliqué « Save skill »**. Relancer Claude ne suffit pas.
- **Tu veux l'avoir sur plusieurs PC ?** L'install vaut **par machine**. Garde le fichier `sessions.skill` (dans ton Drive par ex.) : sur un autre poste tu le réinstalles en un clic, sans repasser par skill-creator.

---

## Partie 1 — L'essentiel (pour 80 % des usages)

Trois commandes suffisent au quotidien.

### `/save` — sauvegarder la conversation en cours
À la fin d'une session, tape `/save`. Claude résume l'échange dans un fichier de `sessions/` pour pouvoir le reprendre plus tard. Nouvelle session → il choisit lui-même un nom cohérent avec le sujet.
```
/save
→ session sauvegardée dans sessions/coach_vie.md
```

### `/load <nom>` — reprendre une session
Pour continuer une conversation précédente, charge-la par son nom (sans `.md`). Claude lit le fichier et repart d'où vous en étiez.
```
/load coach_vie
→ contexte rechargé, on peut continuer
```

### `/dir` — voir ce qu'on a
Liste toutes les sessions disponibles.
```
/dir
→ coach_vie
  coach_travail
  projet_site
```

C'est tout ce qu'il faut savoir pour s'en servir. Le reste, ci-dessous, c'est du bonus.

---

## Partie 2 — Options avancées

### Jokers `*`
`/dir` et `/load` acceptent le joker `*` (glob standard).
```
/dir co*        → liste seulement coach_vie, coach_travail
/load coach*    → charge coach_vie.md ET coach_travail.md en même temps
```
`/dir` sans argument équivaut à `/dir *` (tout lister).

### Multi-fichiers et avertissement
Quand `/load` charge **plusieurs** fichiers d'un coup, Claude prévient :
> « Plusieurs sessions chargées — sans précision de fichier, le prochain `/save` créera une **nouvelle** session concaténant ces fichiers + la session en cours. »

Autrement dit :
- `/save` après un load multiple **sans préciser de nom** → crée une nouvelle session fusionnée (les sources ne sont pas écrasées).
- `/save coach_vie` → écrit explicitement dans la cible nommée.

### `/save [nom]` — cibler un fichier précis
Donne un nom pour forcer la destination (écraser une session existante ou en créer une nommée).
```
/save projet_site
→ écrit/écrase sessions/projet_site.md
```
Sans nom, `/save` réécrit par défaut le(s) fichier(s) du dernier `/load`.

### `/save --close` — archiver une session
Le flag `--close` sauvegarde **puis** renomme le fichier `.md` → `.txt`. La session disparaît de `/dir` et n'est plus chargeable par `/load` (qui ne voient que les `.md`), mais **aucune donnée n'est perdue**.
```
/save --close              → ferme le(s) fichier(s) du dernier load
/save vieux_projet --close → sauvegarde puis archive vieux_projet.md → vieux_projet.txt
```
Pas de réouverture automatique : pour réactiver une session archivée, renomme manuellement le `.txt` en `.md`.

### Format de stockage « caveman »
Le contenu écrit dans les `.md` est volontairement **dense et télégraphique** (symboles, abréviations, listes compactes) pour **économiser des tokens** — ces fichiers ne sont relus que par Claude, pas par un humain. À l'inverse, **les réponses de Claude dans la conversation restent en langage naturel classique** : le style compact ne concerne que le fichier, jamais le dialogue.
