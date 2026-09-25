---
title: CORD-19
slug: cord-19
short_desc: COVID-19 Open Research Dataset (CORD-19) is a free resource of scholarly articles about COVID-19 scholarly research.
topics: []
type: ""
coverage: ""
frequency: ""
geography: ""
access: ""
---

## Description

In response to the COVID-19 pandemic, the Allen Institute for AI has partnered with leading research groups to prepare and distribute the COVID-19 Open Research Dataset (CORD-19), a free resource of thousands of scholarly articles, including many with full text, about COVID-19 and the coronavirus family of viruses for use by the global research community.

This dataset is intended to mobilize researchers to apply recent advances in natural language processing to generate new insights in support of the fight against this infectious disease. The corpus will be updated weekly as new research is published in peer-reviewed publications and archival services like bioRxiv, medRxiv, and others.

## Access and Documentation

Data are downloaded from the [CORD-19](https://pages.semanticscholar.org/coronavirus-research) site each week.

Each weekly download is saved on KLC in the **/kellogg/data/CORD-19/_yyyy-mm-dd_** directory. The data files are in JSON or CSV format. Each weekly directory contains:

-   Commercial use subset (`comm_use_subset/`)
-   Non-commercial use subset (`noncomm_use_subset/`)
-   Custom license content (`custom_license/`)
-   Preprints that are not peer reviewed (`bioRxiv_medRxiv/`)
-   Metadata (with Microsoft Academic ID mapping (`metadata.csv`)
