#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
conda run -n sphinx-with-book-theme --no-capture-output npm run build "$@"
