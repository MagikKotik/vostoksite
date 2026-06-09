# Prompt — créer 3 skills de gestion de sessions (`dir`, `load`, `save`)

> Colle ce prompt dans `skill-creator` (ou un assistant capable de scaffolder des skills) pour générer les trois skills décrits ci-dessous.

> **Important** : génère directement les 3 skills et package-les, sans lancer de phase d'évaluation/benchmark (pas d'evals, pas de tests comparatifs avec/sans skill).

---

Crée trois skills qui travaillent ensemble dans un répertoire `sessions/` (à créer s'il n'existe pas). Les sessions actives sont des fichiers `.md` à plat dans ce répertoire ; les sessions archivées sont des `.txt`. Il n'y a pas d'index : la liste des sessions = le contenu du dossier.

---

**Skill `dir`** — `/dir [motif]`
Liste le nom de tous les fichiers `.md` de `sessions/`, **sans l'extension**, un par ligne.
- Sans argument : motif = `*` par défaut (liste tout).
- Avec argument : filtre, joker `*` supporté. Ex. `/dir co*` → `coach_vie`, `coach_travail`.
- N'affiche jamais les `.txt` (sessions archivées).

---

**Skill `load`** — `/load <motif>`
Lit le ou les fichiers `.md` de `sessions/` correspondant au motif. Joker `*` supporté.
- Ex. `/load coach*` → lit `coach_vie.md` **et** `coach_travail.md`.
- Mémorise le ou les fichiers chargés : `save` les réutilise par défaut.
- **Si plusieurs fichiers sont chargés, avertir l'utilisateur** : « plusieurs sessions chargées — sans précision de fichier, le prochain `/save` créera une nouvelle session concaténant ces fichiers + la session en cours ».
- Le contenu chargé est en style dense/caveman : c'est un **format de mémoire interne**. Après lecture, Claude reprend la conversation en **langage classique** — il ne répond jamais à l'utilisateur en caveman.

---

**Skill `save`** — `/save [nom] [--close]`
Synthétise la session en cours pour la reprendre plus tard, écrit en `.md` dans `sessions/`.
- Contenu existant **mis à jour** ; le fichier peut être **entièrement réécrit** selon le contexte.
- **Cible par défaut** : le ou les fichiers mémorisés au dernier `load`.
- **Plusieurs fichiers chargés sans précision** : crée une **nouvelle** session concaténant les fichiers chargés + la session en cours (nom auto-généré cohérent avec le contexte).
- **Aucun fichier chargé (création)** : génère un nom cohérent avec le contexte.
- **Argument `nom`** : utilisé comme fichier cible.
- **Flag `--close`** : après sauvegarde, renomme le fichier cible `[nom].md` → `[nom].txt`. Sans `nom`, ferme le(s) fichier(s) du dernier `load`. La session sort de `dir`/`load` (archivée) ; aucune donnée perdue, pas de réouverture automatique (renommage manuel si besoin).

---

**Style du contenu sauvegardé** : structure libre. Objectif = mémoire **économe en tokens**, pas de la prose lisible par un humain. Privilégier style « caveman », symboles, abréviations, listes denses — seul Claude relira ces fichiers. Pas de remplissage verbeux.

**Registre** : le style caveman/symboles s'applique **uniquement au contenu écrit dans les `.md`**. Toute réponse à l'utilisateur (`dir`, `load`, `save`) reste en langage naturel classique.

**Contraintes communes** : opèrent uniquement dans `sessions/` ; noms toujours manipulés sans extension (le skill l'ajoute) ; joker `*` = glob standard.
