---
title: ISSM Transactions File Database
slug: issm-transactions
short_desc: The ISSM transactions file databases provide tick-by-tick data covering the NYSE and AMEX between 1983 and 1992, and NASDAQ between 1987 and 1992. Each year of data is divided into two files, one for trades and one for quotes. For researchers interested in market microstructure, ISSM is complementary to the NYSE's Trade and Quote Database, which starts in 1993.
topics:
  - Equity
type: Databases
coverage: 1983 - 1992
frequency: D, M, Q, A, HF, O
geography: US
access: Faculty, PhD
---

## Description

ISSM Transactions File Databases provide tick-by-tick data covering the NYSE and AMEX between 1983 and 1992, and NASDAQ between 1987 and 1992. Each year of data is divided into two files, one for trades and one for quotes. For researchers interested in market microstructure, ISSM is complementary to the NYSE's [Trade and Quote Database](http://www.kellogg.northwestern.edu/rs/data/dstest.aspx?DB=taq-database), which starts in 1993.

For each trade, the record contains the time to the second, price, volume, originating exchange, and condition codes.

For each quote, the record contains bid and ask prices timed to the second, originating exchange, bid and ask size (market depth), condition codes, and market maker (for third market quotes).

Supplementary files (available only in KLC) include CUSIP numbers, number of trades and quotes for each year, name of firm, issue description, margin/option flag, and SIC code.

## Access

These data are available via [Wharton Research Data Services](https://wrds-web.wharton.upenn.edu) (WRDS). WRDS offers both a web interface, for small interactive queries, and the Linux-based WRDS Cloud for running batch programs. A temporary class account and password to the WRDS web interface may be requested by faculty members for instructional use in the context of a course.

ISSM Transactions File Databases are also available to current Kellogg faculty and doctoral students through both [the Kellogg Linux Cluster (KLC)](http://www.kellogg.northwestern.edu/rs/computing/kellogg-linux-cluster.aspx), and [WRDS](http://www.kellogg.northwestern.edu/rs/data/dstest.aspx?DB=wharton-rds). On KLC, ISSM files are stored in flat ASCII files.

The collection in KLC also includes supplementary files constructed by other researchers that match stock symbol tickers to CUSIP numbers. This match was done on the basis of end-year ticker assignments and may, therefore, include some errors. The collection of files in WRDS does not include these supplementary files, and users have to either match to CUSIPs by themselves or use the supplementary files in KLC.
