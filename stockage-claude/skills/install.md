# Install — the **sessions** skill for Claude

> **What is this file?** A plain, human-readable installer. No binary, no hidden code, nothing to trust blindly: everything that will be installed is written below in clear text, and you can read it before doing anything. Give this file to Claude (Cowork or claude.ai with skills enabled) and ask it to *"install the sessions skill from this file"*.

---

## What you are installing

**sessions** — a session-memory skill for Claude. It lets you pause a long conversation and resume it later in a fresh one, while spending far fewer tokens.

Three commands:

- `/save [name]` — snapshot the current conversation into `sessions/<name>.md`
- `/load <name>` — reopen a saved session (with `*` wildcards)
- `/dir [pattern]` — list your saved sessions

It is **scriptless**: a single Markdown instruction file, no Python, no executable, no network call. The whole skill is the text in the block at the bottom of this file.

---

## Requirements

- The **Claude Desktop app (Cowork mode)** with **Skills** enabled — this is what can build and install the skill file.
- A **connected folder** is needed later to *use* the skill (sessions are stored in a `sessions/` subfolder there), but it is **not** required to install it.

---

## Instructions for Claude (the installer)

When the user asks you to install this skill from this file, follow these steps **in order** — and narrate each step in the user's language so they always know what is happening.

### Step 0 — Pre-flight (run this first)

**0.1 — Model check.** This installer must be run by **Claude Sonnet or Claude Opus**. Smaller/faster models (e.g. Claude Haiku) tend to truncate the long block below and produce a broken skill. Determine which model you are. If you are **Claude Haiku**, or any model you **cannot confirm is at least Sonnet**, **STOP** and reply to the user in their language:

> ⚠️ For a reliable install, please run this with **Claude Sonnet or Opus** (not Haiku). Switch model, then ask me again — this avoids producing a corrupted skill file.

**0.2 — Capability check.** You also need two capabilities: (a) tools to create files, and (b) the ability to hand the user an installable `.skill` (the **Save skill** / **Enregistrer la compétence** card). These exist in the **Claude Desktop app (Cowork mode)**.

If you do **not** have both — for example a plain claude.ai web chat, the mobile app, or any environment without file-creation tools — **STOP, do not improvise**, and reply to the user in their language:

> ⚠️ To install the *sessions* skill, please open this file in the **Claude Desktop app** (Cowork mode) and ask me again there. This installer has to create a skill file, which isn't possible in the current environment.

Only go to Step 1 if **both** checks pass.

### Step 1 — Explain

Tell the user, briefly, what you will create: one skill named `sessions`, made of a single file `SKILL.md`, packaged as `sessions-share.skill`. No script, no network call, no side effect beyond writing that one file.

### Step 2 — Recreate the file (verbatim — this is the critical step)

Create a file `sessions/SKILL.md` (in a temporary/scratch working folder, **not** in the user's connected folder) whose content is **exactly** the fenced block in the section *"SKILL.md — content to write"* below.

- That block is delimited by a line of **four back-ticks** at the top (followed by the word `markdown`) and a line of **four back-ticks** at the bottom. Copy everything **between** those two lines. Do **not** copy the four-back-tick lines themselves.
- **Critical — do not stop early.** The block contains, inside it, lines made of **three back-ticks** (around the "File format" and "Example body" examples). Those three-back-tick lines are **part of the file — keep them.** A three-back-tick line is **NOT** the end of the block; only the **four-back-tick** lines mark the boundaries.
- The content **starts** with `---` then `name: sessions`, and **ends** with the line that finishes with `never leaks into the dialogue.`
- Copy it **character for character**. Do **not** summarize, translate, shorten, reflow, or "improve" anything.

### Step 3 — Package

Working in your temporary/scratch folder (not the user's connected folder), package the `sessions/` folder into a single archive whose root contains `sessions/SKILL.md`. The archive uses zip compression internally, but the delivered file **must** be named `sessions-share.skill` with the `.skill` extension — never hand the user a `.zip`.

### Step 4 — Deliver

Present the `sessions-share.skill` file to the user as a file card, so they can click **Save skill / Enregistrer la compétence** to install it.

(The same `.skill` can also be installed later on claude.ai web via *Customize → Skills → + → Upload a skill* — but it can only be **produced** here, in the Desktop app.)

### Step 5 — Self-check before delivering

The known failure mode is a **truncated** file. Before handing it over, verify the written `SKILL.md`:

- **ends** with exactly this text: `The compressed style never leaks into the dialogue.`
- is roughly **5378 bytes** / **105 lines** (small variations from line endings are fine).

If it is shorter, or cut off mid-sentence — a typical sign is that it stops right after `## File format` or `## Compression` — then you stopped at an inner three-back-tick fence. Rewrite it **in full** from this file, then re-check.

Once installed, the user can try it with `/dir` or `/save`.

---

## SKILL.md — content to write

Copy the content below **exactly** into `sessions/SKILL.md` — everything between the four-back-tick lines, not the four-back-tick lines themselves. (The three-back-tick blocks inside are part of the file; keep them.)

````markdown
---
name: sessions
description: Session memory for Claude — save, reload and list conversation contexts as compressed files in a sessions/ folder. Triggers on /save, /save XX, /save --close, /load XX (wildcard ok), /dir, /dir XX, or when the user asks to save the current session, resume a previous session, or list saved sessions.
---

# sessions — persistent session memory

Purpose: let the user pause a conversation that has become long or slow, and resume it cleanly later in a fresh one. State is stored as token-compressed markdown files. Only Claude ever reads these files — the user never does.

## Step 0 — folder (run before every command)

- All sessions live in `sessions/` at the **root of the connected folder** (the working folder mounted in Cowork).
- If no folder is connected: explain that a folder is needed to persist sessions and request folder access (folder picker). Never fall back to a temporary/scratchpad path — it does not survive the session. Never use `~/.claude` or any hardcoded absolute path.
- Lazy setup: ensure `sessions/` exists (`mkdir -p`) — no manual setup ever.
- Active sessions = `.md` files. Archived sessions = `.txt` files. No index file: the folder content IS the list.
- Session names are handled **without extension** (the skill adds `.md`). Wildcard `*` = standard glob.

## /dir [pattern]

List the `.md` filenames in `sessions/`, without extension, one per line.

- No argument → pattern `*` (list everything).
- With argument → filter, `*` supported. E.g. `/dir co*` → `coach_vie`, `coach_travail`.
- Never show `.txt` files.

## /load <pattern>

Read the `.md` file(s) in `sessions/` matching the pattern. Wildcard `*` supported.

- E.g. `/load coach*` → reads `coach_vie.md` and `coach_travail.md`.
- Remember which files were loaded: they are the default target of the next `/save`.
- If several files are loaded, warn: "multiple sessions loaded — without a name, the next `/save` will create a new session merging these files + the current conversation".
- File content is compressed internal memory (see Compression below). After loading, give the user a **short briefing in plain natural language**: subject, where things stood, what is next. Never dump the raw file, never imitate its compressed style.
- If nothing matches: say so and list the available sessions.

## /save [name] [--close]

Synthesize the current conversation and write it as `.md` in `sessions/`.

Target resolution:
- explicit `name` → that file
- no name, file(s) loaded by last `/load` → update them; if **several** were loaded → create one new session merging the loaded files + current conversation (coherent auto-generated name)
- no name, nothing loaded → auto-generate a coherent name (1-3 words, lowercase, underscores, e.g. `site_perso`)

Write strategy — the real cost of a file is re-reading it at every future `/load`:
- file does not exist → full write
- purely additive delta (new facts, new todos, nothing invalidated) → **append** inside the existing sections (cheaper)
- resolved todos, state contradicted by current conversation, redundancy, or body grown past ~50 lines → **full rewrite** (content is already in context, cost is output only)
- always update the `updated` date; never leave completed items in `## Next`.

Flag `--close`: after saving, rename `<name>.md` → `<name>.txt` (archive). Without a name, closes the file(s) of the last `/load`. Archived sessions no longer appear in `/dir` or `/load`; nothing is lost; reopening = manual rename back to `.md`.

## File format

```
---
session: <name>
updated: <YYYY-MM-DD>
---
## Subject
<1-2 readable lines — what this session is about>
## State
<compressed — decisions, facts, current state>
## Next
<compressed — open actions, open questions>
## Tech
<paths, commands — only if relevant>
```

## Compression ("caveman") — file content only

These files are read only by Claude. Minimize tokens aggressively:

- telegraphic English, regardless of the conversation language
- symbols over words: `→ ✓ ✗ ≠ + @ ? >`
- no articles, no full sentences, aggressive abbreviations (`cfg`, `img`, `usr`, `sess`)
- one fact per line, dense, zero redundancy
- no section commentary or explanations, unless an ambiguity would cost more than a note

Example body:

```
## State
- site v2 ✓ deployed, perf ok
- login bug mobile ✗ → suspect cookie cfg
- choice: Tailwind, ✗ Bootstrap
## Next
- fix login bug
- ? add newsletter section
```

## --help / --?

Any command invoked with `--help` or `--?` (e.g. `/save --help`, `/dir --?`) → display help and **execute nothing**. The help must be:

- in the **user's language**
- concise: purpose (1 line), syntax, options with their defaults, 1-2 examples — never a dump of this file
- focused on the invoked command, ending with one line listing the other available commands (`/dir`, `/load`, `/save`)

Defaults to mention: `/dir` without pattern lists everything; `/load` requires a pattern; `/save` without name targets the last loaded session(s) or auto-names a new one; `--close` archives.

## Register — non-negotiable

- **Inside the files**: compressed caveman.
- **Talking to the user** (`/dir` output, `/load` briefings, `/save` confirmations): always plain, natural language, **in the user's language**. The compressed style never leaks into the dialogue.
````

---

*sessions — a Claude skill by Rudy. This installer is transparent by design: what you read is exactly what gets installed.*
