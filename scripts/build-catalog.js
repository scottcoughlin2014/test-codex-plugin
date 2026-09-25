"use strict";

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const yaml = require("js-yaml");
const { marked } = require("marked");

const ROOT = path.join(__dirname, "..");
const DATASETS_DIR = path.join(ROOT, "content", "datasets");
const OUT_JSON = path.join(ROOT, "data", "dataset-catalog.json");

const REQUIRED = [
  "title",
  "slug",
  "short_desc",
  "topics",
  "type",
  "coverage",
  "frequency",
  "geography",
  "access",
];

marked.setOptions({ gfm: true, breaks: false });

function slugToFilename(slug) {
  return slug.replace(/\//g, "-") + ".md";
}

function filenameToExpectedSlug(filename) {
  if (!filename.endsWith(".md")) {
    return null;
  }
  const base = filename.slice(0, -3);
  return base;
}

function normalizeSlugForFilename(slug) {
  return slug.replace(/\//g, "-");
}

function parseSections(body) {
  const sections = [];
  const lines = body.replace(/\r\n/g, "\n").split("\n");
  let i = 0;
  let currentTitle = null;
  let currentLines = [];

  function flush() {
    if (currentTitle === null) {
      return;
    }
    const raw = currentLines.join("\n").trim();
    sections.push({ title: currentTitle, raw });
    currentLines = [];
  }

  while (i < lines.length) {
    const line = lines[i];
    const h2 = line.match(/^##\s+(.+?)\s*$/);
    if (h2) {
      flush();
      currentTitle = h2[1];
      i += 1;
      continue;
    }
    if (currentTitle !== null) {
      currentLines.push(line);
    }
    i += 1;
  }
  flush();
  return sections;
}

function isHtmlFence(raw) {
  const trimmed = raw.trim();
  const match = trimmed.match(/^```html\s*\n([\s\S]*?)\n```\s*$/);
  return match ? match[1] : null;
}

function renderSectionBody(raw) {
  const fenced = isHtmlFence(raw);
  if (fenced !== null) {
    return fenced;
  }
  if (!raw.trim()) {
    return "";
  }
  return marked.parse(raw);
}

function buildRecord(front, sections, sourceFile) {
  for (const key of REQUIRED) {
    if (front[key] === undefined || front[key] === null) {
      throw new Error(`${sourceFile}: missing required front matter field "${key}"`);
    }
  }
  if (!Array.isArray(front.topics)) {
    throw new Error(`${sourceFile}: "topics" must be a YAML list`);
  }

  const renderedSections = sections.map(function (sec) {
    return {
      title: sec.title,
      html: renderSectionBody(sec.raw),
    };
  });

  const record = {
    title: String(front.title),
    type: String(front.type),
    coverage: String(front.coverage),
    frequency: String(front.frequency),
    geography: String(front.geography),
    access: String(front.access),
    short_desc: String(front.short_desc),
    topics: front.topics.map(String),
    sections: renderedSections,
    slug: String(front.slug),
  };

  if (front.page) {
    record.page = String(front.page);
  }

  return record;
}

function loadAllDatasets() {
  if (!fs.existsSync(DATASETS_DIR)) {
    throw new Error(`Missing directory: ${DATASETS_DIR}`);
  }

  const files = fs
    .readdirSync(DATASETS_DIR)
    .filter(function (name) {
      return name.endsWith(".md") && !name.startsWith("_");
    })
    .sort();

  const records = [];
  const slugsSeen = {};

  files.forEach(function (filename) {
    const filePath = path.join(DATASETS_DIR, filename);
    const text = fs.readFileSync(filePath, "utf8");
    const parsed = matter(text, {
      engines: {
        yaml: {
          parse: function (src) {
            return yaml.load(src, { schema: yaml.JSON_SCHEMA });
          },
        },
      },
    });

    const slug = String(parsed.data.slug || "");
    const expectedBase = normalizeSlugForFilename(slug);
    const fileBase = filenameToExpectedSlug(filename);
    if (fileBase !== expectedBase) {
      throw new Error(
        `${filename}: filename must match slug "${slug}" (expected ${slugToFilename(slug)})`
      );
    }

    if (slugsSeen[slug]) {
      throw new Error(`Duplicate slug "${slug}" in ${filename} and ${slugsSeen[slug]}`);
    }
    slugsSeen[slug] = filename;

    const sections = parseSections(parsed.content);
    if (sections.length === 0) {
      throw new Error(`${filename}: no ## sections found in body`);
    }

    records.push(buildRecord(parsed.data, sections, filename));
  });

  records.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });

  return records;
}

function writeJson(records) {
  const json = JSON.stringify(records, null, 2) + "\n";
  fs.writeFileSync(OUT_JSON, json, "utf8");
}

function main() {
  const checkOnly = process.argv.includes("--check");
  const records = loadAllDatasets();
  const json = JSON.stringify(records, null, 2) + "\n";

  if (checkOnly) {
    if (!fs.existsSync(OUT_JSON)) {
      console.error("check failed: data/dataset-catalog.json does not exist");
      process.exit(1);
    }
    const existing = fs.readFileSync(OUT_JSON, "utf8");
    if (existing !== json) {
      console.error("check failed: data/dataset-catalog.json is out of date (run npm run build)");
      process.exit(1);
    }
    console.log("check ok (" + records.length + " datasets)");
    return;
  }

  writeJson(records);
  console.log("Wrote " + records.length + " datasets to data/dataset-catalog.json");
}

main();
