# Sessions Skills — `dir` · `load` · `save`

Trois skills légers pour donner à Claude une **mémoire de session** : sauvegarder l'état d'une conversation, le recharger plus tard, et lister ce qu'on a en stock. Tout vit dans un seul répertoire `sessions/`, sans base de données ni index — la liste des sessions, c'est simplement les fichiers présents.

---

## Installation

Dans **Cowork**, tapez `/skill-creator` et joignez le fichier [`prompt.md`](./prompt.md) en pièce jointe de la discussion. skill-creator génère les trois skills `dir`, `load`, `save` à partir du prompt.

Au premier `/save`, le répertoire `sessions/` est créé automatiquement s'il n'existe pas.

---

## Partie 1 — L'essentiel (pour 80 % des usages)

Trois commandes suffisent au quotidien.

### `/save` — sauvegarder la conversation en cours

À la fin d'une session, tapez `/save`. Claude résume l'échange dans un fichier du dossier `sessions/` pour pouvoir le reprendre plus tard. Si c'est une nouvelle session, il choisit lui-même un nom cohérent avec le sujet.

```
/save
→ session sauvegardée dans sessions/coach_vie.md
```

### `/load <nom>` — reprendre une session

Pour continuer une conversation précédente, chargez-la par son nom (sans `.md`). Claude lit le fichier et repart d'où vous en étiez.

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

`dir` et `load` acceptent le joker `*` (glob standard).

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

Donnez un nom pour forcer la destination, que ce soit pour écraser une session existante ou en créer une nommée.

```
/save projet_site
→ écrit/écrase sessions/projet_site.md
```

Sans nom, `/save` réécrit par défaut le(s) fichier(s) du dernier `/load`.

### `/save --close` — archiver une session

Le flag `--close` sauvegarde **puis** renomme le fichier `.md` → `.txt`. La session disparaît alors de `/dir` et n'est plus chargeable par `/load` (qui ne voient que les `.md`), mais **aucune donnée n'est perdue**.

```
/save --close              → ferme le(s) fichier(s) du dernier load
/save vieux_projet --close → sauvegarde puis archive vieux_projet.md → vieux_projet.txt
```

Pas de réouverture automatique : pour réactiver une session archivée, renommez manuellement le `.txt` en `.md`.

### Format de stockage « caveman »

Le contenu écrit dans les `.md` est volontairement **dense et télégraphique** (symboles, abréviations, listes compactes) afin d'**économiser des tokens** — ces fichiers ne sont relus que par Claude, pas par un humain. À l'inverse, **les réponses de Claude dans la conversation restent en langage naturel classique** : le style compact ne concerne que le fichier, jamais le dialogue.
