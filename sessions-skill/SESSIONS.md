# Système de sessions — `/save`, `/load`, `/sessions --list`

> **Quoi ?** Un petit système de mémoire entre conversations. Tu sauvegardes l'état d'un
> échange dans un fichier markdown, et tu le recharges plus tard pour reprendre où tu en étais.
> **100 % local** : aucun fichier généré ailleurs que dans `sessions/`, aucune image, aucun git,
> aucun appel réseau.
>
> **Installation :** joins ce fichier `SESSIONS.md` à ta conversation (ou colle son contenu).
> Claude reconnaît alors les trois commandes ci-dessous. C'est tout.

---

## Dossier de travail

Toutes les sessions sont des fichiers `.md` rangés dans un dossier `sessions/`.

- Crée-le s'il n'existe pas (`sessions/` à la racine de ton espace de travail).
- Un fichier = une session, nommé `sessions/<nom>.md`.
- Aucun autre fichier n'est créé ou modifié par ce système.

> Si tu utilises un chemin différent, indique-le à Claude une fois (« mes sessions sont dans
> `docs/sessions/` ») et il s'y tiendra pour toute la conversation.

---

## Commande `/save [nom]`

Sauvegarde l'état de la conversation courante dans `sessions/<nom>.md`.

**Choix du nom :**

- `/save monprojet` → écrit/écrase `sessions/monprojet.md`.
- `/save` **après un `/load`** (ou un `/save` précédent dans la même conversation) → réutilise le
  nom de la session active, sans le redemander.
- `/save` **sans contexte** → génère un nom court automatique : 1 à 3 mots, minuscules, séparés
  par des underscores, décrivant le sujet (ex. `migration_api`, `budget_2026`, `bug_login`).

**Contenu écrit** (écrase intégralement le fichier à chaque save — pas de doublon, pas de suffixe
de version) :

```markdown
---
session: <nom>
updated: <AAAA-MM-JJ>
---

## Sujet
<de quoi parle la session, 1-2 lignes>

## État
<décisions prises, faits clés, où on en est — dense et factuel>

## À faire
<actions ouvertes / questions en suspens — ou "rien" si terminé>

## Tech / Fichiers
<chemins, commandes, liens utiles — uniquement si pertinent, sinon omettre la section>
```

**Règles :**

- Le frontmatter ne contient **que** `session` et `updated`. Pas d'`image_prompt`, pas
  d'`image_url`, aucun autre champ.
- `updated` = la date du jour au format `AAAA-MM-JJ`.
- Écris une synthèse **utile pour reprendre**, pas une transcription. Dense, va à l'essentiel.
- Après l'écriture, la session `<nom>` devient **active** : un `/save` suivant sans argument
  met à jour ce même fichier.

**Confirmation :** réponds simplement `✓ Session "<nom>" sauvegardée.`

---

## Commande `/load <nom>`

Recharge le contexte d'une session précédente.

1. Lis `sessions/<nom>.md`.
   - Si le fichier n'existe pas, réponds : `Session "<nom>" introuvable.` puis liste les
     sessions disponibles (comme `/sessions --list`). Arrête-toi là.
2. Présente un **briefing court** en langage naturel (pas le markdown brut) :

   > **Session : `<nom>`** *(mise à jour : `<date>`)*
   >
   > - **Sujet :** …
   > - **Où on en était :** …
   > - **À faire :** …

   Reste concis — le but est de se réorienter vite, pas de tout réciter.
3. Marque la session `<nom>` comme **active** : un `/save` ultérieur sans argument mettra à
   jour `sessions/<nom>.md`.

**Fin de réponse :** `Session active. /save mettra à jour <nom>.md.`

---

## Commande `/sessions --list`

Affiche la liste des sessions enregistrées **directement dans la conversation**. N'écrit
**aucun** fichier.

1. Liste les fichiers `sessions/*.md`.
2. Pour chacun, lis le frontmatter (`session`, `updated`) et la section `## Sujet`.
3. Affiche un tableau trié par date décroissante (plus récent en haut) :

   | Session | Mise à jour | Sujet |
   |---|---|---|
   | `migration_api` | 2026-06-04 | Bascule REST → GraphQL, étape 2/3 |
   | `budget_2026`   | 2026-05-30 | Prévisionnel annuel, en attente validation |

S'il n'y a aucune session, réponds : `Aucune session enregistrée dans sessions/.`

---

## Principes

- **Rien d'automatique.** Ces commandes ne se déclenchent que si l'utilisateur les tape
  explicitement (`/save`, `/load`, `/sessions --list`).
- **Un fichier = un nom stable.** On édite/écrase en place. Jamais de `_v2`, `_final`, `_old`.
- **Local et transparent.** Le seul effet de bord est l'écriture d'un `.md` dans `sessions/`.
  Tu peux ouvrir, lire et versionner ces fichiers toi-même comme n'importe quel texte.
