---
title: EDGAR
slug: edgar
short_desc: Local collection of SEC EDGAR electronic filings in their original format. The collection is updated daily based on the most recent SEC company index files.
topics:
  - Accounting
  - Finance
type: Databases
coverage: ""
frequency: ""
geography: ""
access: ""
---

## Description

EDGAR is a collection of all the Securities and Exchange Commission filings that are publicly available, in their raw format -- either plain text or HTML.  
All companies, foreign and domestic, are required to file registration statements, periodic reports, and other forms electronically through EDGAR.  
This collection is suitable for researchers who wish to use scripts to extract variables or perform text analysis on a large set of filings.

## Access

-   EDGAR files are loaded on the Kellogg Linux Cluster (KLC) in the `/kellogg/data/EDGAR` directory.
-   For your convenience, files are organized into directories by Form Type, and then by Year.  
    For example, all the Form 4 filings from 1999 are in the `/kellogg/data/EDGAR/4/1999/` directory.
-   Files have also been renamed to indicate the CIK number and quarter associated with each document.  
    For example, `/kellogg/data/EDGAR/4/1999/9779_4_0000950142-99-000880.txt` is a Form 4 (insider trading) filing from the 4th quarter of 1999 by the entity with CIK = 9779.
-   If you need help writing a script to work with these files, please ask [Kellogg Research Support](mailto:rs@kellogg.northwestern.edu) for help.

## Support Information

[SEC EDGAR Filings and Forms](https://www.sec.gov/edgar.shtml)
