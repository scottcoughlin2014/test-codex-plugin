---
title: Markit
slug: markit
short_desc: Markit provides credit data on global investment-grade/sub-investment-grade bonds, as well as global credit-default swaps.
topics:
  - Fixed Income
  - Derivatives
type: Databases
coverage: 2001 -
frequency: D, M, Q, A
geography: US
access: Kellogg
---

## Description

Markit has assembled a network of partner banks each of which contributes credit data on global investment-grade/sub-investment-grade bonds, as well as global credit default swaps. This pooled database of daily credit data, supplemented by Markit proprietary data and analytics, is the heart of the products and services offered by Markit.

Each contributor to Markit is committed, on a daily basis, to providing pricing data from all its books of record and feeds to automated trading systems, as well as other sources of accurate pricing. For a book-of-record system, this means the daily closing price as recorded for that security or derivative in that system; for automated trading systems, it means the last price fed to that system by the trading desk.

Each contributor needs to build a feed to Markit to ensure that a comprehensive daily supply of this data is maintained. The data items are outlined fully [in this document](https://nuwildcat.sharepoint.com/:b:/s/KSM-RSDataDocumentation/EYPPn-Uo_UJFtqSFIc5e5RoB-0Mmftmxtj0wN_zN6ZeFHg?e=EKukEZ). In summary, the requirements are:

-   Bonds

-   Identifier (CUSIP/ISIN, etc.)
-   Price
-   Timestamp
-   Position information (optional)

-   Default Swaps

-   Identifier (entity code, tier of debt, currency, and documentation clause)
-   Default swap curve
-   Position information (optional)

Kellogg has a subscription to the CDS portion of the Markit database.

## Access and Documentation

Markit data is available on [the Kellogg Linux Cluster (KLC)](http://www.kellogg.northwestern.edu/rs/computing/kellogg-linux-cluster.aspx) under  
**/kellogg/data/markit-cds**.

Documentation:

-   [Markit.com User Guide (CDS & Bonds)](https://nuwildcat.sharepoint.com/:b:/s/KSM-RSDataDocumentation/EaFg40esDL9NrrC6ext77uoBAn2Nb_CFlI2JPD1CM5VYDQ?e=FQ344J)
-   [Markit CDS & Bonds XML Guide](https://nuwildcat.sharepoint.com/:b:/s/KSM-RSDataDocumentation/EYPPn-Uo_UJFtqSFIc5e5RoB-0Mmftmxtj0wN_zN6ZeFHg?e=8FwBsF)
