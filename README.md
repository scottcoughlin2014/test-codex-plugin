# Dataset catalog

This repository contains a static, browser-based catalog of research datasets.

- `index.html` provides the page shell and loads the catalog assets.
- `dataset-catalog.js` fetches the catalog data and renders search, topic filters, results, and dataset details.
- `content/datasets/` contains the Markdown source files for individual dataset entries.
- `data/dataset-catalog.json` is generated from those Markdown files for the browser to load; do not edit it by hand.

For instructions on adding or editing dataset entries, see [`content/README.md`](content/README.md).

## Local development

Install dependencies and verify the generated catalog from the repository root:

```bash
npm ci
npm run build
npm run check
```

To preview the site, serve the repository root and open the displayed local URL:

```bash
python -m http.server
```
