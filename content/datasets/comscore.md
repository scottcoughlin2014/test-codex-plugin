---
title: Comscore
slug: comscore
short_desc: Includes individual-level URL traffic and display ad exposure for the Comscore Desktop Panel, as well as ecommerce transaction data for opt-in panelists, for the period 2019-20.
topics:
  - Marketing, Ecommerce
type: Databases
coverage: ""
frequency: ""
geography: ""
access: ""
---

## Description

Historical data feeds and lookups include...

-   Desktop URL Traffic - individual level host, directory, and page of the visited site and referring site where available
-   AdMetrix Traffic - individual level ad exposures, advertiser, and advertiser hierarchy
-   Ecommerce - machine level transaction data including item name, quantity purchased, and total basket cost where available

Note: Data are suppressed for panelists identificable as under the age of 18 at the time of measurement.

## Documentation

[Desktop URL, AdMetrix, and Ecommerce schema](https://nuwildcat-my.sharepoint.com/:b:/r/personal/jpj8711_ads_northwestern_edu/Documents/Data%20Documentation/comScore/comScore%20Data%20Traffic%20Schema.pdf?csf=1&web=1&e=rsCRMJ)

[Demographics schema](https://nuwildcat-my.sharepoint.com/:x:/r/personal/jpj8711_ads_northwestern_edu/Documents/Data%20Documentation/comScore/comScore%20Demographics%20Schema.xlsx?d=wdd59b6aaa55145a290e657e698d472c8&csf=1&web=1&e=tFYKmg)

## Access

Comscore data are available as pre-defined AWS Athena, which allow for rapid execution of SQL select queries. The raw flat files also reside on KLC in the **/kellogg/data/comscore** directory for those who need to work with those.  
Please email [Kellogg Research Support](mailto:rs@kellogg.northwestern.edu) to obtain access and to get advice about how to structure your Athena queries for better performance.
