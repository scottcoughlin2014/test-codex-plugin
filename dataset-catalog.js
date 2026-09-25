(function () {
  "use strict";

  var mount = document.getElementById("dataset-catalog");
  if (!mount) {
    return;
  }

  var allDatabases = [];
  var checkedFilters = {};
  var modalOpen = false;
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  function qs(selector) {
    return mount.querySelector(selector);
  }

  function getScriptElement() {
    return (
      document.currentScript ||
      document.querySelector('script[src*="dataset-catalog.js"]')
    );
  }

  function getDataUrl() {
    var script = getScriptElement();
    if (!script || !script.src) {
      return "data/dataset-catalog.json";
    }
    return new URL("data/dataset-catalog.json", script.src).href;
  }

  function buildLetterIndex() {
    var letterEl = qs("#dataset-catalog-letter-index");
    alphabet.forEach(function (letter) {
      var link = document.createElement("a");
      link.href = "#" + letter;
      link.textContent = letter;
      var wrap = document.createElement("b");
      wrap.appendChild(link);
      letterEl.appendChild(wrap);
    });
  }

  function buildChrome() {
    mount.innerHTML =
      '<div class="dataset-catalog-layout">' +
      '<div class="dataset-catalog-main">' +
      '<div class="dataset-catalog-search-bar">' +
      "<h3>Search databases:</h3>" +
      '<form class="dataset-catalog-search-form">' +
      '<input type="search" id="dataset-catalog-search-field" autocomplete="off" value="" />' +
      '<input type="reset" value="X" id="dataset-catalog-search-reset" data-dataset-catalog="search-reset" />' +
      "</form>" +
      '<a href="#" id="dataset-catalog-show-filters">Filter&nbsp;by&nbsp;topic</a>' +
      "</div>" +
      '<div id="dataset-catalog-filters"><h4>Filter by topic:</h4></div>' +
      '<div id="dataset-catalog-letter-index"></div>' +
      '<div id="dataset-catalog-results"></div>' +
      "</div>" +
      '<aside class="dataset-catalog-sidebar">' +
      '<div class="callout-box">' +
      "Don't see what you need?" +
      "<br /><br />" +
      "Search the <br />" +
      '<a href="https://library.kellogg.northwestern.edu/az.php"><span class="underline"><b>Kellogg CMC library</b></span></a>' +
      "</div>" +
      "</aside>" +
      "</div>" +
      '<div id="dataset-catalog-modal" aria-hidden="true">' +
      '<div id="dataset-catalog-modal-content">' +
      '<div class="close-button"><a href="#">[Close]</a></div>' +
      "</div>" +
      "</div>";

    buildLetterIndex();

    qs("#dataset-catalog-search-field").addEventListener("input", updateSearchResults);
    qs("#dataset-catalog-search-field").addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
    qs("#dataset-catalog-search-reset").addEventListener("click", function (event) {
      event.preventDefault();
      qs("#dataset-catalog-search-field").value = "";
      updateSearchResults.call(event.currentTarget);
    });
    qs("#dataset-catalog-show-filters").addEventListener("click", function (event) {
      event.preventDefault();
      qs("#dataset-catalog-filters").classList.add("is-visible");
      event.currentTarget.style.display = "none";
    });

    var modal = qs("#dataset-catalog-modal");
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        event.preventDefault();
        closeModal();
      }
    });
    modal.querySelector(".close-button a").addEventListener("click", function (event) {
      event.preventDefault();
      closeModal();
    });
    document.addEventListener("keyup", function (event) {
      if (event.keyCode === 27 && modalOpen) {
        closeModal();
      }
    });
    window.addEventListener("popstate", function () {
      if (modalOpen) {
        hideModalDom();
      }
    });
  }

  function collectTopics() {
    var topics = {};
    allDatabases.forEach(function (db) {
      db.topics.forEach(function (t) {
        topics[t] = true;
      });
    });
    var filtersEl = qs("#dataset-catalog-filters");
    Object.keys(topics)
      .sort()
      .forEach(function (topic) {
        var wrap = document.createElement("div");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "dataset-catalog-filter";
        checkbox.name = topic;
        checkbox.addEventListener("change", filterChanged);
        wrap.appendChild(checkbox);
        wrap.appendChild(document.createTextNode(topic));
        filtersEl.appendChild(wrap);
      });
  }

  function filterChanged() {
    var topic = this.name;
    checkedFilters[topic] = this.checked;
    updateSearchResults();
  }

  function searchTextFor(db) {
    var text = db.title.toLowerCase() + " " + db.short_desc.toLowerCase();
    db.topics.forEach(function (t) {
      text += t.toLowerCase();
    });
    db.sections.forEach(function (sec) {
      text += sec.html.toLowerCase();
    });
    return text;
  }

  function updateSearchResults() {
    var resultsEl = qs("#dataset-catalog-results");
    resultsEl.innerHTML = "";
    var resultsCount = 0;

    var searchField = qs("#dataset-catalog-search-field");
    var searchString = searchField.value;
    if (this && this.getAttribute("data-dataset-catalog") === "search-reset") {
      searchString = "";
    }

    var resetBtn = qs("#dataset-catalog-search-reset");
    resetBtn.style.display = searchString.length === 0 ? "none" : "inline-block";

    var letterEl = qs("#dataset-catalog-letter-index");
    if (searchString.length === 0) {
      letterEl.classList.remove("is-hidden");
    } else {
      letterEl.classList.add("is-hidden");
    }

    var filtering = false;
    var activeTopics = [];
    Object.keys(checkedFilters).forEach(function (t) {
      if (checkedFilters[t]) {
        filtering = true;
        activeTopics.push(t);
      }
    });

    var alphabetIdx = 0;

    allDatabases.forEach(function (db) {
      if (filtering) {
        var include = db.topics.some(function (t) {
          return activeTopics.indexOf(t) >= 0;
        });
        if (!include) {
          return;
        }
      }

      if (searchString.length > 0) {
        var haystack = searchTextFor(db);
        var terms = searchString.split(/\s+/).filter(Boolean);
        var missing = terms.some(function (term) {
          return haystack.indexOf(term.toLowerCase()) < 0;
        });
        if (missing) {
          return;
        }
      }

      var row = document.createElement("div");
      row.className = "result-row";

      var firstChar = db.title.charAt(0).toUpperCase();
      while (alphabetIdx < alphabet.length && firstChar >= alphabet[alphabetIdx]) {
        var anchor = document.createElement("span");
        anchor.id = alphabet[alphabetIdx];
        row.appendChild(anchor);
        alphabetIdx += 1;
      }

      var title = document.createElement("h4");
      var link = document.createElement("a");
      link.className = "data-link";
      link.href = "?DB=" + encodeURIComponent(db.slug);
      link.textContent = db.title;
      link.addEventListener("click", function (event) {
        event.preventDefault();
        showModal(db);
      });
      title.appendChild(link);
      row.appendChild(title);
      row.appendChild(document.createTextNode(db.short_desc));
      resultsEl.appendChild(row);
      resultsCount += 1;
    });

    var countP = document.createElement("p");
    countP.className = "results-count";
    countP.textContent = resultsCount + " results";
    resultsEl.appendChild(countP);
  }

  function hideModalDom() {
    var modal = qs("#dataset-catalog-modal");
    var inner = qs("#dataset-catalog-modal-inner");
    if (inner) {
      inner.remove();
    }
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalOpen = false;
  }

  function closeModal() {
    if (window.history.state && window.history.state.datasetCatalogModal) {
      window.history.back();
    } else {
      hideModalDom();
      stripDbQueryParam();
    }
  }

  function stripDbQueryParam() {
    var url = new URL(window.location.href);
    url.searchParams.delete("DB");
    var queryString = url.searchParams.toString();
    var next = url.pathname + (queryString ? "?" + queryString : "") + url.hash;
    window.history.replaceState({}, document.title, next);
  }

  function showModal(database) {
    hideModalDom();
    var content = document.createElement("div");
    content.id = "dataset-catalog-modal-inner";
    var h1 = document.createElement("h1");
    h1.textContent = database.title;
    content.appendChild(h1);

    database.sections.forEach(function (sec) {
      if (sec.title !== "Description") {
        var h2 = document.createElement("h2");
        h2.textContent = sec.title;
        content.appendChild(h2);
      }
      var block = document.createElement("div");
      block.innerHTML = sec.html;
      content.appendChild(block);
    });

    if (database.page) {
      var docs = document.createElement("p");
      docs.className = "catalog-docs-link";
      var pageLink = document.createElement("a");
      pageLink.href = database.page;
      pageLink.textContent = "Full documentation on this site";
      docs.appendChild(pageLink);
      content.appendChild(docs);
    }

    qs("#dataset-catalog-modal-content").appendChild(content);
    var modal = qs("#dataset-catalog-modal");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    modalOpen = true;

    var url = new URL(window.location.href);
    url.searchParams.set("DB", database.slug);
    window.history.pushState({ datasetCatalogModal: true }, document.title, url.toString());
  }

  function parseQueryParam() {
    var dbSlug = new URL(window.location.href).searchParams.get("DB");
    if (!dbSlug) {
      return;
    }
    for (var i = 0; i < allDatabases.length; i++) {
      if (allDatabases[i].slug === dbSlug) {
        stripDbQueryParam();
        showModal(allDatabases[i]);
        break;
      }
    }
  }

  buildChrome();
  fetch(getDataUrl())
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to load catalog data");
      }
      return response.json();
    })
    .then(function (data) {
      allDatabases = data.slice().sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
      collectTopics();
      updateSearchResults();
      parseQueryParam();
      qs("#dataset-catalog-search-field").focus();
    })
    .catch(function (err) {
      mount.insertAdjacentHTML(
        "beforeend",
        '<p class="catalog-load-error">Unable to load the dataset catalog. ' + err.message + "</p>"
      );
    });
})();
