---
title: R&amp;C Futures Data
slug: rc-futures
short_desc: The R&amp;C historical futures data includes both end-of-day and intraday data and covers 80 global commodities.
topics:
  - Derivatives
  - Commodities
type: Databases
coverage: 1982 - 2009
frequency: D, M, Q, A, HF, O
geography: US
access: Faculty, PhD
---

## Description

The Historical End-of-Day Futures Price Data Package covers 80 global commodities. It also offers actual contract data on continuous contracts. The data files are in plain ASCII format and include the following fields: Date, Open, High, Low, Close, Volume, and Open Interest. The periods covered vary across different commodities. Some commodities (like Coca) have historical contract series dating as far back as 1959. The periods covered for most commodities end in 2003.

The R&C historical futures data include both end-of-day and intraday data.

The intraday data files cover six index futures series:

-   sp: S&P 500 Futures (Tick Data), since 1982
-   dj: Dow Jones Futures (Tick Data), since 1998
-   nd: NASDAQ 100 Futures (Tick Data), since 1998
-   us: Thirty-Year Bond Futures (Tick Data), since 1978
-   minisp: Mini S&P 500 Futures (One Min.), since 1998
-   minind: Mini NASDAQ 100 Futures (One Min.), since 1998

The period covered is through August, 2004. The variables available include Date, Time, Open, High, Low, and Close.

## Access and Documentation

```html
<p>R&amp;C futures historical daily and intraday data are available to current Kellogg faculty and doctoral students. The data are stored in the <b>/kellogg/data/rcfuture</b> path in <a href="http://www.kellogg.northwestern.edu/rs/computing/kellogg-linux-cluster.aspx">the Kellogg Linux Cluster (KLC)</a>. The files are in comma delimited flat ASCII format with headers. The file layouts are as described below:</p>
        <h3>Historical End-of-Day Futures</h3>
        <p> The historical daily futures data include 80 subdirectories, each corresponding to a different ticker. The actual contract series for that commodity are inside subdirectory. The file names are formed by the ticker symbol, the last two digits of the year, and contract month (e.g., March 1992 Corn would be in the "c" directory under c92h.txt). </p>
        <p> The list of symbols by alphabetical order can be found in this <a href="https://nuwildcat.sharepoint.com/:x:/s/KSM-RSDataDocumentation/EdS-AnPEBWxDpR80w0u3cKYBA-W9-F4MogKeGKahlp1GvQ?e=B79k2W" target="new"> Excel sheet</a>. </p>
        <p> Each file has a general format, starting with a header line of variable names, followed by the actual data. </p>
        <p> <b>Example:</b> </p>
        <p> "Date," "Open," "High," "Low," "Close," "Volume," "OpenInt"<br>
          02/05/1997, 192.25, 192.50, 191.75, 192.00, 3500, 18300 </p>
        <h3>Intraday Futures</h3>
        <p> Inside the intraday directory are six subdirectories, each corresponding to an index futures commodity. </p>
        <ul>
          <li>sp: S&amp;P 500 Futures (Tick Data), since 1982 </li>
          <li>dj: Dow Jones Futures (Tick Data), since 1998 </li>
          <li>nd: NASDAQ 100 Futures (Tick Data), since 1998 </li>
          <li>us: Thirty-Year Bond Futures (Tick Data), since 1978 </li>
          <li>minisp(es): Mini S&amp;P 500 Futures (One Min.), since 1998 </li>
          <li>minind(nq): Mini NASDAQ 100 Futures (One Min.), since 1998 </li>
        </ul>
        <p> Each index futures contract is further grouped by different time intervals: 15 minutes (15_min), 10 minutes(10_min), 5 mintues(5_min), end-of-day (daily) and tick-by-tick (tick). Inside each time-interval directory are data files with names formed by the index symbol, an underscore, the last two digits of the year, and contract month (e.g., June 2000 S&amp;P 500 tick data would be in the '/intraday/sp/tick' directory under sp_02m.txt). </p>
        <p> Files are in comma delimited ASCII format and have a general format. </p>
        <p> <b>Example:</b> </p>
        <p> "DATE," "TIME," "OTHER," "OPEN," "HIGH," "LOW," "CLOSE," "VOLUME," "OI"<br>
          19990712,1040,"DJ_00H," 11500.00, 11500.00, 11500.00, 11500.00, 1, 0<br>
          19990712,1301,"DJ_00H," 11480.00, 11480.00, 11480.00, 11480.00, 0, 1<br>
          19990713,1459,"DJ_00H," 11460.00, 11460.00, 11460.00, 11460.00, 0, 1<br>
          19990713,1459,"DJ_00H," 11460.00, 11460.00, 11460.00, 11460.00, 0, 1<br>
          19990720,0937,"DJ_00H," 11305.00, 11305.00, 11305.00, 11305.00, 0, 1<br>
        </p>
        <p> <b>IMPORTANT</b>: Volume and open interest are NOT available in intraday futures data. The numbers under those two variables are simply internal programming codes. </p>
        <h3>Continuous Contract</h3>
        <p> Continuous contracts for different commodities are in the /kellogg/data/rcfutures/con_contract directory. The record layout is the same as that of historical daily futures data. </p>
        <p> <b>Note:</b> All symbols may or may not appear in every commodity or every year of data. </p>
        <h4>Contract month codes</h4>
        <p> </p>
        <table>
          <tr>
            <td width="20">F</td>
            <td width="150">January</td>
            <td width="20">N</td>
            <td width="150">July</td>
          </tr>
          <tr>
            <td width="20">G</td>
            <td width="150">February</td>
            <td width="20">Q</td>
            <td width="150">August</td>
          </tr>
          <tr>
            <td width="20">H</td>
            <td width="150">March</td>
            <td width="20">U</td>
            <td width="150">September</td>
          </tr>
          <tr>
            <td width="20">J</td>
            <td width="150">April</td>
            <td width="20">V</td>
            <td width="150">October</td>
          </tr>
          <tr>
            <td width="20">K</td>
            <td width="150">May</td>
            <td width="20">X</td>
            <td width="150">November</td>
          </tr>
          <tr>
            <td width="20">M</td>
            <td width="150">June</td>
            <td width="20">Z</td>
            <td width="150">December</td>
          </tr>
        </table>
```
