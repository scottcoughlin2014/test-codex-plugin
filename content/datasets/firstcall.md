---
title: First Call Historical Database
slug: firstcall
short_desc: First Call Historical Database (FCHD) includes First Call's real-time earnings estimates and information such as broker-estimate details and company-issued guidelines.
topics:
  - Equity
  - Accounting
  - Analyst Reports
type: Databases
coverage: 1980 - 2003
frequency: M, Q, A, O
geography: Global
access: Faculty, PhD
---

## Description

First Call Historical Database (FCHD) includes First Callâ€™s real-time earnings estimates. The following information is included:

-   Broker estimate detail and consensus estimates
-   Estimate revision activity
-   Actuals
-   Company-issued guidelines
-   Footnotes
-   Stock splits
-   Target prices (until 2003)
-   Company and Issuer Information
-   Cross-reference to other First Call products

The data goes back to 1987 (1980 in some cases). In addition to the date the estimates were published, Firt Call includes the time stamp.

## Access and Documentation

```html
Note: for the "deleted," "source," and "tgt_type" variables, there are some undocumented codes.
        <p>First Call Historical Database is available to current Kellogg faculty and doctoral students. This data is available in <a href="http://www.kellogg.northwestern.edu/rs/computing/kellogg-linux-cluster.aspx">the Kellogg Linux Cluster (KLC)</a>.</p>
        <h3>Data manuals:</h3>
        <ul>
          <li><a href="https://nuwildcat.sharepoint.com/:b:/s/KSM-RSDataDocumentation/ETxNWf0Xc55FhhtyvG84QkcBKGQzQP7RtChW9ZD_TFavRQ?e=nLt8Hj">FCHD User Guide</a></li>
          <li><a href="https://nuwildcat.sharepoint.com/:b:/s/KSM-RSDataDocumentation/EfSLtw9mGnFLtkfA4-rm0acBZvBN-FffjcnPfw7OAnOx1w?e=YfJncwf">FCHD Technical Guide</a></li>
          <li><a href="https://nuwildcat.sharepoint.com/:b:/s/KSM-RSDataDocumentation/Ef4nS8p8jIlKmBb72qrhSoIBpLjwSBq9316gTqtcMlZweQ?e=pGSXke">Target Price History File</a></li>
          <li><a href="https://nuwildcat.sharepoint.com/:b:/s/KSM-RSDataDocumentation/EeSJqEUWNf1EpGpY59aCrVIBIyzQ0vlPWz0v52qHIgpdZg?e=vdeehH">Analyst-Recommendation History File</a></li>
        </ul>
        <h3>File layouts:</h3>
        <ul>
          <li>"<b>tgt_prc_live.prn</b>" and "<b>tgt_prc_del.prn</b>" contain target prices for live and delisted companies, respectively. Both files are pipe-delimited (each field is separated by "|") and include a header row with the variable names. For variable descriptions, refer to the documentation provided by First Call. Note that each of the date fields also includes a time stamp; to read this information correctly, you need to parse these fields into their two parts. In both files, missing values for prices have been coded "NA," while the missing values for alphanumeric variables are represented by a space. Price values have two implied decimals: for example, a price of "5760" should be read as "$57.60."</li>
          <li>"<b>cross_ref.dat</b>" contains a mapping between the security ID, First Call ticker, and the Thomson Financial ID for each security. The file is tab-delimited without a header row. The file contents are listed in the Technical Guide. This file should allow for linking the First Call Historical Database to other Thomson Financial datasets, such as <a href="http://www.kellogg.northwestern.edu/rs/data/dstest.aspx?DB=cda">CDA/Spectrum</a> or <a href="http://www.kellogg.northwestern.edu/rs/data/dstest.aspx?DB=lancer-analytics">Lancer Analytics Insiders</a>.</li>
        </ul>
        <p> To faciliate access, the files have been read into SAS (<a href="https://nuwildcat.sharepoint.com/:t:/s/KSM-RSDataDocumentation/EZIvasf0rPFDplCwwfQf4oIBvNPb0GLxA55IaCg8_NwI0w?e=DEfAgA">view the code</a> used to create these files). The SAS files are available in the <b>/kellogg/data/firstcall/sasdata/</b> directory. You need to assign a library name to this directory in order to use these files. The contents of these files are listed <a href="https://nuwildcat.sharepoint.com/:t:/s/KSM-RSDataDocumentation/EfSeaJi4rwVEsroyy6FSxpwB55L-lNh2jb1EkzrtxEyIyw?e=mKSUwy">here</a>.</p>
```
