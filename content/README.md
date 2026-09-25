# Dataset catalog content

Each research database is one Markdown file in `content/datasets/`. The public page loads `data/dataset-catalog.json`, which is **generated** from those files when the site is built. Do not edit the JSON by hand.

## Add a dataset

1. Copy `_template.md` to `content/datasets/<slug-with-slashes-as-dashes>.md`.
   - Example: slug `nyse-arca` → file `nyse-arca.md`
   - Example: slug `FTSE/Russell` → file `FTSE-Russell.md`
2. Set the YAML at the top (`title`, `slug`, `short_desc`, `topics`, and the other fields).
3. Write the body using `## Section title` headings. Each heading becomes a block in the detail modal.
4. Open a pull request with only your `.md` change. GitHub Actions runs `npm run build` on the PR; fix any errors it reports.
5. Merge to `main`. The publish workflow rebuilds the catalog and deploys the site to GitHub Pages.

**Topics:** List entries under `topics:` in the front matter. New topic names automatically appear in the “Filter by topic” list on the page.

## Edit a dataset

Open the matching file in `content/datasets/` (find it by `slug` in the front matter), edit the YAML or Markdown, then open a pull request and merge to `main` when checks pass.

## Preview locally (optional)

To preview the catalog JSON or open the page locally before pushing, from the repository root:

```bash
./scripts/build.sh
```

Or, with the `sphinx-with-book-theme` conda environment:

```bash
conda run -n sphinx-with-book-theme --no-capture-output npm run build
```

Serve the repo root with any static file server (for example `python -m http.server`) and open `index.html`.

## Advanced HTML

If a section needs HTML that Markdown cannot express safely, use a single fenced block as the entire section body:

````markdown
## Access

```html
<p>Your HTML here.</p>
```
````

That HTML is copied into the catalog unchanged.

## Optional field

- `page`: URL for the “Full documentation on this site” link in the modal (most datasets omit this).

## Maintainers: GitHub Pages

The site is deployed by [`.github/workflows/publish-catalog.yml`](../.github/workflows/publish-catalog.yml) on pushes to `main`.

If the repo still publishes from a branch, switch **Settings → Pages → Build and deployment → Source** to **GitHub Actions** so merges use the workflow artifact (built JSON included). The first successful **Publish catalog** run should be live before relying on Actions-only deploys.
