# Sessions — mémoire portable pour Claude

Un système minimal pour **garder le fil entre tes conversations avec Claude**. Tu sauvegardes
l'état d'un échange dans un fichier markdown, tu le recharges plus tard, et tu reprends où tu
t'étais arrêté — sans tout réexpliquer.

Tout est **local** : un seul dossier `sessions/` contenant des fichiers `.md`. Pas d'image,
pas de base de données, pas de git, pas d'appel réseau.

## Comment ça marche

Le fichier `SESSIONS.md` est un **prompt clef-en-main**. Tu le joins à une conversation (ou tu
colles son contenu), et Claude comprend alors trois commandes :

| Commande | Effet |
|---|---|
| `/save [nom]` | Écrit l'état de la conversation dans `sessions/<nom>.md`. Sans nom, réutilise la session active ou en génère un. |
| `/load <nom>` | Lit `sessions/<nom>.md` et te fait un briefing court pour reprendre. |
| `/sessions --list` | Affiche la liste des sessions (nom, date, sujet) dans le chat. N'écrit rien. |

## Installation

1. Récupère le fichier `SESSIONS.md`.
2. Au début d'une conversation, joins-le (ou colle-le).
3. Tape `/save`, `/load <nom>` ou `/sessions --list` selon le besoin.

Aucune autre configuration. N'importe qui peut réutiliser le système juste en partageant
`SESSIONS.md`.

## Format d'un fichier session

Chaque session est un `.md` lisible à l'œil nu :

```markdown
---
session: migration_api
updated: 2026-06-04
---

## Sujet
Bascule de l'API REST vers GraphQL.

## État
Étape 2/3 faite : schéma défini, resolvers en place. Reste la couche cache.

## À faire
Brancher le cache Redis, puis tester la charge.

## Tech / Fichiers
src/graphql/, schema.graphql
```

Le frontmatter ne contient que `session` et `updated`. Les sections `Sujet / État / À faire`
sont toujours présentes ; `Tech / Fichiers` est optionnelle.

## Bonnes pratiques

- **Un fichier = un nom stable.** On édite en place. Pas de `_v2`, `_final`, `_copie`.
- **Synthèse, pas transcription.** Écris ce qu'il faut pour reprendre vite, pas tout l'échange.
- **Versionne si tu veux** : `sessions/` est un dossier de texte ordinaire, parfait pour git de
  ton côté — mais le système lui-même ne pousse jamais rien.

## Limites

- Les commandes ne se déclenchent que si tu les tapes explicitement.
- Si tes sessions vivent dans un autre dossier que `sessions/`, signale-le à Claude en début de
  conversation.
