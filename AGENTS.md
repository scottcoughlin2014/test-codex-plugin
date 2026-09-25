# Repository instructions

## Project
This is a static dataset catalog. The browser loads `data/dataset-catalog.json`,
which is generated from Markdown files in `content/datasets/`.

## Development
- Use the commands in `package.json`. Install dependencies with `npm ci`.
- Run `npm run build` and then `npm run check` to verify catalog changes.
- Do not edit `data/dataset-catalog.json` by hand; it is generated and ignored by Git.
- Follow `content/README.md` and `content/_template.md` when editing dataset entries.
- Keep dataset filenames consistent with their `slug` front matter, replacing `/` with `-` in filenames.
- Do not invent dataset coverage, access terms, or documentation links.

## Pull requests
- Keep the change focused on the requested task.
- Report the verification commands run and their results.
