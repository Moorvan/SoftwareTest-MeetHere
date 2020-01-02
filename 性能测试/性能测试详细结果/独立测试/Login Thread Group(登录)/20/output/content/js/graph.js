/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 173.0, "minX": 0.0, "maxY": 2790.0, "series": [{"data": [[0.0, 173.0], [0.1, 173.0], [0.2, 194.0], [0.3, 242.0], [0.4, 242.0], [0.5, 337.0], [0.6, 343.0], [0.7, 343.0], [0.8, 347.0], [0.9, 369.0], [1.0, 393.0], [1.1, 393.0], [1.2, 444.0], [1.3, 449.0], [1.4, 449.0], [1.5, 474.0], [1.6, 481.0], [1.7, 483.0], [1.8, 483.0], [1.9, 488.0], [2.0, 501.0], [2.1, 501.0], [2.2, 506.0], [2.3, 524.0], [2.4, 555.0], [2.5, 555.0], [2.6, 564.0], [2.7, 578.0], [2.8, 578.0], [2.9, 593.0], [3.0, 597.0], [3.1, 604.0], [3.2, 604.0], [3.3, 604.0], [3.4, 613.0], [3.5, 613.0], [3.6, 621.0], [3.7, 651.0], [3.8, 658.0], [3.9, 658.0], [4.0, 666.0], [4.1, 673.0], [4.2, 673.0], [4.3, 700.0], [4.4, 722.0], [4.5, 751.0], [4.6, 751.0], [4.7, 852.0], [4.8, 853.0], [4.9, 853.0], [5.0, 855.0], [5.1, 856.0], [5.2, 857.0], [5.3, 857.0], [5.4, 861.0], [5.5, 862.0], [5.6, 862.0], [5.7, 907.0], [5.8, 910.0], [5.9, 923.0], [6.0, 923.0], [6.1, 978.0], [6.2, 1027.0], [6.3, 1027.0], [6.4, 1042.0], [6.5, 1047.0], [6.6, 1048.0], [6.7, 1048.0], [6.8, 1050.0], [6.9, 1057.0], [7.0, 1057.0], [7.1, 1057.0], [7.2, 1058.0], [7.3, 1061.0], [7.4, 1061.0], [7.5, 1067.0], [7.6, 1078.0], [7.7, 1078.0], [7.8, 1087.0], [7.9, 1089.0], [8.0, 1090.0], [8.1, 1090.0], [8.2, 1098.0], [8.3, 1098.0], [8.4, 1098.0], [8.5, 1107.0], [8.6, 1112.0], [8.7, 1129.0], [8.8, 1129.0], [8.9, 1134.0], [9.0, 1136.0], [9.1, 1136.0], [9.2, 1136.0], [9.3, 1136.0], [9.4, 1137.0], [9.5, 1137.0], [9.6, 1146.0], [9.7, 1146.0], [9.8, 1146.0], [9.9, 1153.0], [10.0, 1154.0], [10.1, 1156.0], [10.2, 1156.0], [10.3, 1157.0], [10.4, 1180.0], [10.5, 1180.0], [10.6, 1199.0], [10.7, 1202.0], [10.8, 1220.0], [10.9, 1220.0], [11.0, 1226.0], [11.1, 1265.0], [11.2, 1265.0], [11.3, 1283.0], [11.4, 1290.0], [11.5, 1299.0], [11.6, 1299.0], [11.7, 1301.0], [11.8, 1301.0], [11.9, 1301.0], [12.0, 1309.0], [12.1, 1311.0], [12.2, 1314.0], [12.3, 1314.0], [12.4, 1332.0], [12.5, 1333.0], [12.6, 1333.0], [12.7, 1334.0], [12.8, 1340.0], [12.9, 1355.0], [13.0, 1355.0], [13.1, 1375.0], [13.2, 1381.0], [13.3, 1381.0], [13.4, 1400.0], [13.5, 1430.0], [13.6, 1431.0], [13.7, 1431.0], [13.8, 1439.0], [13.9, 1442.0], [14.0, 1442.0], [14.1, 1449.0], [14.2, 1458.0], [14.3, 1466.0], [14.4, 1466.0], [14.5, 1466.0], [14.6, 1466.0], [14.7, 1466.0], [14.8, 1469.0], [14.9, 1497.0], [15.0, 1498.0], [15.1, 1498.0], [15.2, 1512.0], [15.3, 1520.0], [15.4, 1520.0], [15.5, 1533.0], [15.6, 1546.0], [15.7, 1548.0], [15.8, 1548.0], [15.9, 1560.0], [16.0, 1592.0], [16.1, 1592.0], [16.2, 1630.0], [16.3, 1639.0], [16.4, 1641.0], [16.5, 1641.0], [16.6, 1645.0], [16.7, 1646.0], [16.8, 1646.0], [16.9, 1651.0], [17.0, 1654.0], [17.1, 1657.0], [17.2, 1657.0], [17.3, 1658.0], [17.4, 1659.0], [17.5, 1659.0], [17.6, 1660.0], [17.7, 1660.0], [17.8, 1661.0], [17.9, 1661.0], [18.0, 1663.0], [18.1, 1666.0], [18.2, 1666.0], [18.3, 1672.0], [18.4, 1673.0], [18.5, 1673.0], [18.6, 1673.0], [18.7, 1686.0], [18.8, 1691.0], [18.9, 1691.0], [19.0, 1691.0], [19.1, 1694.0], [19.2, 1694.0], [19.3, 1694.0], [19.4, 1697.0], [19.5, 1699.0], [19.6, 1699.0], [19.7, 1700.0], [19.8, 1701.0], [19.9, 1704.0], [20.0, 1704.0], [20.1, 1707.0], [20.2, 1711.0], [20.3, 1711.0], [20.4, 1718.0], [20.5, 1742.0], [20.6, 1754.0], [20.7, 1754.0], [20.8, 1754.0], [20.9, 1763.0], [21.0, 1763.0], [21.1, 1769.0], [21.2, 1773.0], [21.3, 1778.0], [21.4, 1778.0], [21.5, 1779.0], [21.6, 1782.0], [21.7, 1782.0], [21.8, 1783.0], [21.9, 1787.0], [22.0, 1787.0], [22.1, 1787.0], [22.2, 1788.0], [22.3, 1799.0], [22.4, 1799.0], [22.5, 1804.0], [22.6, 1812.0], [22.7, 1812.0], [22.8, 1812.0], [22.9, 1832.0], [23.0, 1832.0], [23.1, 1832.0], [23.2, 1834.0], [23.3, 1839.0], [23.4, 1844.0], [23.5, 1844.0], [23.6, 1869.0], [23.7, 1869.0], [23.8, 1869.0], [23.9, 1872.0], [24.0, 1873.0], [24.1, 1876.0], [24.2, 1876.0], [24.3, 1879.0], [24.4, 1881.0], [24.5, 1881.0], [24.6, 1883.0], [24.7, 1887.0], [24.8, 1891.0], [24.9, 1891.0], [25.0, 1892.0], [25.1, 1892.0], [25.2, 1892.0], [25.3, 1893.0], [25.4, 1898.0], [25.5, 1905.0], [25.6, 1905.0], [25.7, 1907.0], [25.8, 1911.0], [25.9, 1911.0], [26.0, 1911.0], [26.1, 1915.0], [26.2, 1916.0], [26.3, 1916.0], [26.4, 1920.0], [26.5, 1920.0], [26.6, 1920.0], [26.7, 1922.0], [26.8, 1923.0], [26.9, 1924.0], [27.0, 1924.0], [27.1, 1924.0], [27.2, 1929.0], [27.3, 1929.0], [27.4, 1930.0], [27.5, 1930.0], [27.6, 1931.0], [27.7, 1931.0], [27.8, 1932.0], [27.9, 1932.0], [28.0, 1932.0], [28.1, 1933.0], [28.2, 1934.0], [28.3, 1935.0], [28.4, 1935.0], [28.5, 1935.0], [28.6, 1937.0], [28.7, 1937.0], [28.8, 1937.0], [28.9, 1938.0], [29.0, 1939.0], [29.1, 1939.0], [29.2, 1940.0], [29.3, 1940.0], [29.4, 1940.0], [29.5, 1940.0], [29.6, 1940.0], [29.7, 1941.0], [29.8, 1941.0], [29.9, 1941.0], [30.0, 1941.0], [30.1, 1941.0], [30.2, 1942.0], [30.3, 1944.0], [30.4, 1944.0], [30.5, 1944.0], [30.6, 1945.0], [30.7, 1947.0], [30.8, 1947.0], [30.9, 1951.0], [31.0, 1951.0], [31.1, 1952.0], [31.2, 1952.0], [31.3, 1952.0], [31.4, 1952.0], [31.5, 1952.0], [31.6, 1955.0], [31.7, 1956.0], [31.8, 1956.0], [31.9, 1956.0], [32.0, 1956.0], [32.1, 1957.0], [32.2, 1957.0], [32.3, 1960.0], [32.4, 1962.0], [32.5, 1963.0], [32.6, 1963.0], [32.7, 1964.0], [32.8, 1964.0], [32.9, 1964.0], [33.0, 1965.0], [33.1, 1967.0], [33.2, 1968.0], [33.3, 1968.0], [33.4, 1969.0], [33.5, 1970.0], [33.6, 1970.0], [33.7, 1972.0], [33.8, 1974.0], [33.9, 1978.0], [34.0, 1978.0], [34.1, 1979.0], [34.2, 1982.0], [34.3, 1982.0], [34.4, 1982.0], [34.5, 1986.0], [34.6, 1987.0], [34.7, 1987.0], [34.8, 1987.0], [34.9, 1989.0], [35.0, 1989.0], [35.1, 1989.0], [35.2, 1990.0], [35.3, 1991.0], [35.4, 1991.0], [35.5, 1992.0], [35.6, 1993.0], [35.7, 1993.0], [35.8, 1995.0], [35.9, 1995.0], [36.0, 1996.0], [36.1, 1996.0], [36.2, 1997.0], [36.3, 2000.0], [36.4, 2000.0], [36.5, 2000.0], [36.6, 2001.0], [36.7, 2001.0], [36.8, 2001.0], [36.9, 2002.0], [37.0, 2003.0], [37.1, 2003.0], [37.2, 2004.0], [37.3, 2007.0], [37.4, 2008.0], [37.5, 2008.0], [37.6, 2008.0], [37.7, 2008.0], [37.8, 2008.0], [37.9, 2008.0], [38.0, 2008.0], [38.1, 2010.0], [38.2, 2010.0], [38.3, 2010.0], [38.4, 2010.0], [38.5, 2010.0], [38.6, 2010.0], [38.7, 2010.0], [38.8, 2011.0], [38.9, 2011.0], [39.0, 2012.0], [39.1, 2012.0], [39.2, 2012.0], [39.3, 2013.0], [39.4, 2013.0], [39.5, 2014.0], [39.6, 2014.0], [39.7, 2015.0], [39.8, 2015.0], [39.9, 2015.0], [40.0, 2016.0], [40.1, 2016.0], [40.2, 2017.0], [40.3, 2017.0], [40.4, 2017.0], [40.5, 2017.0], [40.6, 2017.0], [40.7, 2018.0], [40.8, 2019.0], [40.9, 2020.0], [41.0, 2020.0], [41.1, 2020.0], [41.2, 2020.0], [41.3, 2020.0], [41.4, 2020.0], [41.5, 2020.0], [41.6, 2022.0], [41.7, 2022.0], [41.8, 2024.0], [41.9, 2025.0], [42.0, 2025.0], [42.1, 2025.0], [42.2, 2025.0], [42.3, 2026.0], [42.4, 2026.0], [42.5, 2029.0], [42.6, 2029.0], [42.7, 2029.0], [42.8, 2030.0], [42.9, 2031.0], [43.0, 2032.0], [43.1, 2032.0], [43.2, 2033.0], [43.3, 2033.0], [43.4, 2033.0], [43.5, 2034.0], [43.6, 2034.0], [43.7, 2036.0], [43.8, 2036.0], [43.9, 2036.0], [44.0, 2037.0], [44.1, 2037.0], [44.2, 2037.0], [44.3, 2038.0], [44.4, 2039.0], [44.5, 2039.0], [44.6, 2039.0], [44.7, 2039.0], [44.8, 2039.0], [44.9, 2039.0], [45.0, 2039.0], [45.1, 2040.0], [45.2, 2040.0], [45.3, 2040.0], [45.4, 2040.0], [45.5, 2040.0], [45.6, 2041.0], [45.7, 2042.0], [45.8, 2042.0], [45.9, 2042.0], [46.0, 2042.0], [46.1, 2042.0], [46.2, 2042.0], [46.3, 2043.0], [46.4, 2043.0], [46.5, 2044.0], [46.6, 2044.0], [46.7, 2045.0], [46.8, 2045.0], [46.9, 2045.0], [47.0, 2045.0], [47.1, 2046.0], [47.2, 2046.0], [47.3, 2046.0], [47.4, 2046.0], [47.5, 2047.0], [47.6, 2047.0], [47.7, 2047.0], [47.8, 2048.0], [47.9, 2048.0], [48.0, 2048.0], [48.1, 2049.0], [48.2, 2050.0], [48.3, 2050.0], [48.4, 2050.0], [48.5, 2050.0], [48.6, 2050.0], [48.7, 2050.0], [48.8, 2051.0], [48.9, 2051.0], [49.0, 2051.0], [49.1, 2051.0], [49.2, 2052.0], [49.3, 2052.0], [49.4, 2052.0], [49.5, 2052.0], [49.6, 2052.0], [49.7, 2052.0], [49.8, 2053.0], [49.9, 2054.0], [50.0, 2054.0], [50.1, 2054.0], [50.2, 2054.0], [50.3, 2055.0], [50.4, 2055.0], [50.5, 2056.0], [50.6, 2056.0], [50.7, 2056.0], [50.8, 2056.0], [50.9, 2056.0], [51.0, 2059.0], [51.1, 2059.0], [51.2, 2059.0], [51.3, 2059.0], [51.4, 2059.0], [51.5, 2060.0], [51.6, 2060.0], [51.7, 2061.0], [51.8, 2061.0], [51.9, 2061.0], [52.0, 2061.0], [52.1, 2061.0], [52.2, 2061.0], [52.3, 2061.0], [52.4, 2062.0], [52.5, 2062.0], [52.6, 2062.0], [52.7, 2062.0], [52.8, 2062.0], [52.9, 2063.0], [53.0, 2064.0], [53.1, 2065.0], [53.2, 2065.0], [53.3, 2065.0], [53.4, 2066.0], [53.5, 2066.0], [53.6, 2066.0], [53.7, 2066.0], [53.8, 2066.0], [53.9, 2066.0], [54.0, 2067.0], [54.1, 2067.0], [54.2, 2067.0], [54.3, 2068.0], [54.4, 2068.0], [54.5, 2068.0], [54.6, 2068.0], [54.7, 2069.0], [54.8, 2069.0], [54.9, 2069.0], [55.0, 2070.0], [55.1, 2070.0], [55.2, 2071.0], [55.3, 2071.0], [55.4, 2071.0], [55.5, 2072.0], [55.6, 2072.0], [55.7, 2072.0], [55.8, 2073.0], [55.9, 2074.0], [56.0, 2074.0], [56.1, 2074.0], [56.2, 2074.0], [56.3, 2074.0], [56.4, 2075.0], [56.5, 2075.0], [56.6, 2075.0], [56.7, 2075.0], [56.8, 2075.0], [56.9, 2076.0], [57.0, 2076.0], [57.1, 2077.0], [57.2, 2078.0], [57.3, 2078.0], [57.4, 2078.0], [57.5, 2078.0], [57.6, 2078.0], [57.7, 2078.0], [57.8, 2079.0], [57.9, 2079.0], [58.0, 2081.0], [58.1, 2081.0], [58.2, 2081.0], [58.3, 2083.0], [58.4, 2083.0], [58.5, 2084.0], [58.6, 2084.0], [58.7, 2084.0], [58.8, 2084.0], [58.9, 2084.0], [59.0, 2085.0], [59.1, 2085.0], [59.2, 2085.0], [59.3, 2085.0], [59.4, 2085.0], [59.5, 2085.0], [59.6, 2085.0], [59.7, 2086.0], [59.8, 2086.0], [59.9, 2086.0], [60.0, 2087.0], [60.1, 2087.0], [60.2, 2087.0], [60.3, 2088.0], [60.4, 2088.0], [60.5, 2088.0], [60.6, 2088.0], [60.7, 2089.0], [60.8, 2089.0], [60.9, 2089.0], [61.0, 2089.0], [61.1, 2091.0], [61.2, 2091.0], [61.3, 2091.0], [61.4, 2091.0], [61.5, 2092.0], [61.6, 2092.0], [61.7, 2092.0], [61.8, 2092.0], [61.9, 2092.0], [62.0, 2093.0], [62.1, 2093.0], [62.2, 2093.0], [62.3, 2093.0], [62.4, 2094.0], [62.5, 2095.0], [62.6, 2095.0], [62.7, 2095.0], [62.8, 2095.0], [62.9, 2095.0], [63.0, 2095.0], [63.1, 2095.0], [63.2, 2096.0], [63.3, 2096.0], [63.4, 2096.0], [63.5, 2097.0], [63.6, 2097.0], [63.7, 2097.0], [63.8, 2098.0], [63.9, 2098.0], [64.0, 2098.0], [64.1, 2098.0], [64.2, 2098.0], [64.3, 2098.0], [64.4, 2098.0], [64.5, 2099.0], [64.6, 2099.0], [64.7, 2099.0], [64.8, 2099.0], [64.9, 2099.0], [65.0, 2099.0], [65.1, 2099.0], [65.2, 2100.0], [65.3, 2100.0], [65.4, 2100.0], [65.5, 2100.0], [65.6, 2100.0], [65.7, 2101.0], [65.8, 2101.0], [65.9, 2101.0], [66.0, 2101.0], [66.1, 2101.0], [66.2, 2102.0], [66.3, 2102.0], [66.4, 2102.0], [66.5, 2102.0], [66.6, 2102.0], [66.7, 2102.0], [66.8, 2102.0], [66.9, 2102.0], [67.0, 2103.0], [67.1, 2103.0], [67.2, 2103.0], [67.3, 2103.0], [67.4, 2104.0], [67.5, 2104.0], [67.6, 2106.0], [67.7, 2106.0], [67.8, 2106.0], [67.9, 2106.0], [68.0, 2107.0], [68.1, 2108.0], [68.2, 2108.0], [68.3, 2108.0], [68.4, 2108.0], [68.5, 2109.0], [68.6, 2109.0], [68.7, 2109.0], [68.8, 2109.0], [68.9, 2109.0], [69.0, 2109.0], [69.1, 2110.0], [69.2, 2112.0], [69.3, 2112.0], [69.4, 2113.0], [69.5, 2113.0], [69.6, 2113.0], [69.7, 2114.0], [69.8, 2114.0], [69.9, 2115.0], [70.0, 2115.0], [70.1, 2117.0], [70.2, 2118.0], [70.3, 2118.0], [70.4, 2120.0], [70.5, 2121.0], [70.6, 2121.0], [70.7, 2121.0], [70.8, 2122.0], [70.9, 2123.0], [71.0, 2123.0], [71.1, 2124.0], [71.2, 2124.0], [71.3, 2125.0], [71.4, 2125.0], [71.5, 2125.0], [71.6, 2125.0], [71.7, 2125.0], [71.8, 2125.0], [71.9, 2126.0], [72.0, 2126.0], [72.1, 2126.0], [72.2, 2126.0], [72.3, 2127.0], [72.4, 2127.0], [72.5, 2128.0], [72.6, 2130.0], [72.7, 2130.0], [72.8, 2130.0], [72.9, 2130.0], [73.0, 2130.0], [73.1, 2130.0], [73.2, 2130.0], [73.3, 2131.0], [73.4, 2132.0], [73.5, 2132.0], [73.6, 2132.0], [73.7, 2134.0], [73.8, 2134.0], [73.9, 2136.0], [74.0, 2136.0], [74.1, 2136.0], [74.2, 2136.0], [74.3, 2137.0], [74.4, 2138.0], [74.5, 2138.0], [74.6, 2139.0], [74.7, 2139.0], [74.8, 2141.0], [74.9, 2141.0], [75.0, 2142.0], [75.1, 2143.0], [75.2, 2143.0], [75.3, 2143.0], [75.4, 2145.0], [75.5, 2145.0], [75.6, 2145.0], [75.7, 2146.0], [75.8, 2146.0], [75.9, 2146.0], [76.0, 2149.0], [76.1, 2149.0], [76.2, 2149.0], [76.3, 2149.0], [76.4, 2150.0], [76.5, 2150.0], [76.6, 2150.0], [76.7, 2151.0], [76.8, 2152.0], [76.9, 2152.0], [77.0, 2152.0], [77.1, 2153.0], [77.2, 2153.0], [77.3, 2153.0], [77.4, 2154.0], [77.5, 2154.0], [77.6, 2154.0], [77.7, 2154.0], [77.8, 2157.0], [77.9, 2157.0], [78.0, 2157.0], [78.1, 2158.0], [78.2, 2158.0], [78.3, 2158.0], [78.4, 2158.0], [78.5, 2159.0], [78.6, 2161.0], [78.7, 2161.0], [78.8, 2162.0], [78.9, 2164.0], [79.0, 2165.0], [79.1, 2165.0], [79.2, 2165.0], [79.3, 2165.0], [79.4, 2165.0], [79.5, 2167.0], [79.6, 2167.0], [79.7, 2168.0], [79.8, 2168.0], [79.9, 2169.0], [80.0, 2169.0], [80.1, 2169.0], [80.2, 2171.0], [80.3, 2171.0], [80.4, 2172.0], [80.5, 2172.0], [80.6, 2173.0], [80.7, 2173.0], [80.8, 2173.0], [80.9, 2174.0], [81.0, 2174.0], [81.1, 2175.0], [81.2, 2175.0], [81.3, 2175.0], [81.4, 2175.0], [81.5, 2175.0], [81.6, 2176.0], [81.7, 2177.0], [81.8, 2177.0], [81.9, 2177.0], [82.0, 2178.0], [82.1, 2178.0], [82.2, 2178.0], [82.3, 2178.0], [82.4, 2178.0], [82.5, 2178.0], [82.6, 2178.0], [82.7, 2179.0], [82.8, 2180.0], [82.9, 2180.0], [83.0, 2182.0], [83.1, 2182.0], [83.2, 2182.0], [83.3, 2182.0], [83.4, 2183.0], [83.5, 2183.0], [83.6, 2183.0], [83.7, 2183.0], [83.8, 2183.0], [83.9, 2185.0], [84.0, 2185.0], [84.1, 2186.0], [84.2, 2187.0], [84.3, 2187.0], [84.4, 2187.0], [84.5, 2188.0], [84.6, 2188.0], [84.7, 2188.0], [84.8, 2188.0], [84.9, 2189.0], [85.0, 2189.0], [85.1, 2189.0], [85.2, 2190.0], [85.3, 2191.0], [85.4, 2191.0], [85.5, 2191.0], [85.6, 2194.0], [85.7, 2194.0], [85.8, 2194.0], [85.9, 2195.0], [86.0, 2197.0], [86.1, 2197.0], [86.2, 2198.0], [86.3, 2199.0], [86.4, 2199.0], [86.5, 2199.0], [86.6, 2200.0], [86.7, 2201.0], [86.8, 2201.0], [86.9, 2206.0], [87.0, 2208.0], [87.1, 2208.0], [87.2, 2209.0], [87.3, 2209.0], [87.4, 2210.0], [87.5, 2210.0], [87.6, 2210.0], [87.7, 2212.0], [87.8, 2212.0], [87.9, 2212.0], [88.0, 2214.0], [88.1, 2214.0], [88.2, 2214.0], [88.3, 2219.0], [88.4, 2221.0], [88.5, 2221.0], [88.6, 2222.0], [88.7, 2222.0], [88.8, 2223.0], [88.9, 2223.0], [89.0, 2225.0], [89.1, 2234.0], [89.2, 2234.0], [89.3, 2240.0], [89.4, 2241.0], [89.5, 2242.0], [89.6, 2242.0], [89.7, 2246.0], [89.8, 2246.0], [89.9, 2246.0], [90.0, 2247.0], [90.1, 2249.0], [90.2, 2251.0], [90.3, 2251.0], [90.4, 2253.0], [90.5, 2255.0], [90.6, 2255.0], [90.7, 2256.0], [90.8, 2259.0], [90.9, 2261.0], [91.0, 2261.0], [91.1, 2263.0], [91.2, 2263.0], [91.3, 2263.0], [91.4, 2264.0], [91.5, 2264.0], [91.6, 2265.0], [91.7, 2265.0], [91.8, 2267.0], [91.9, 2268.0], [92.0, 2268.0], [92.1, 2272.0], [92.2, 2278.0], [92.3, 2285.0], [92.4, 2285.0], [92.5, 2291.0], [92.6, 2293.0], [92.7, 2293.0], [92.8, 2319.0], [92.9, 2320.0], [93.0, 2320.0], [93.1, 2320.0], [93.2, 2324.0], [93.3, 2325.0], [93.4, 2325.0], [93.5, 2325.0], [93.6, 2328.0], [93.7, 2328.0], [93.8, 2328.0], [93.9, 2329.0], [94.0, 2329.0], [94.1, 2329.0], [94.2, 2330.0], [94.3, 2330.0], [94.4, 2332.0], [94.5, 2332.0], [94.6, 2333.0], [94.7, 2334.0], [94.8, 2334.0], [94.9, 2334.0], [95.0, 2336.0], [95.1, 2336.0], [95.2, 2336.0], [95.3, 2336.0], [95.4, 2337.0], [95.5, 2337.0], [95.6, 2339.0], [95.7, 2339.0], [95.8, 2342.0], [95.9, 2342.0], [96.0, 2345.0], [96.1, 2346.0], [96.2, 2346.0], [96.3, 2347.0], [96.4, 2356.0], [96.5, 2361.0], [96.6, 2361.0], [96.7, 2371.0], [96.8, 2376.0], [96.9, 2376.0], [97.0, 2384.0], [97.1, 2387.0], [97.2, 2390.0], [97.3, 2390.0], [97.4, 2391.0], [97.5, 2392.0], [97.6, 2392.0], [97.7, 2409.0], [97.8, 2414.0], [97.9, 2416.0], [98.0, 2416.0], [98.1, 2421.0], [98.2, 2436.0], [98.3, 2436.0], [98.4, 2438.0], [98.5, 2440.0], [98.6, 2447.0], [98.7, 2447.0], [98.8, 2449.0], [98.9, 2508.0], [99.0, 2508.0], [99.1, 2582.0], [99.2, 2582.0], [99.3, 2601.0], [99.4, 2601.0], [99.5, 2601.0], [99.6, 2624.0], [99.7, 2624.0], [99.8, 2748.0], [99.9, 2790.0], [100.0, 2790.0]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 412.0, "series": [{"data": [[600.0, 16.0], [700.0, 6.0], [800.0, 14.0], [900.0, 8.0], [1000.0, 32.0], [1100.0, 32.0], [1200.0, 14.0], [1300.0, 24.0], [1400.0, 26.0], [1500.0, 14.0], [100.0, 4.0], [1600.0, 50.0], [1700.0, 40.0], [1800.0, 44.0], [1900.0, 154.0], [2000.0, 412.0], [2100.0, 306.0], [2300.0, 70.0], [2200.0, 88.0], [2400.0, 18.0], [2500.0, 6.0], [2600.0, 6.0], [2700.0, 4.0], [200.0, 2.0], [300.0, 10.0], [400.0, 12.0], [500.0, 16.0]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 14.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 606.0, "series": [{"data": [[0.0, 14.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 94.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 606.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 18.40487804878048, "minX": 1.57793514E12, "maxY": 18.673870333988223, "series": [{"data": [[1.5779352E12, 18.40487804878048], [1.57793514E12, 18.673870333988223]], "isOverall": false, "label": "Login Thread Group(\u767B\u5F55)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5779352E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 293.5, "minX": 1.0, "maxY": 2179.2857142857138, "series": [{"data": [[2.0, 293.5], [8.0, 769.7142857142856], [10.0, 1082.2666666666664], [11.0, 1136.6000000000001], [3.0, 423.25000000000006], [12.0, 1073.8999999999996], [13.0, 1112.0], [14.0, 1234.0], [15.0, 1588.4], [1.0, 365.6666666666667], [17.0, 1600.2000000000003], [18.0, 1712.1666666666665], [19.0, 2179.2857142857138], [5.0, 677.625], [20.0, 2045.7840531561465], [6.0, 627.4], [7.0, 683.6666666666666]], "isOverall": false, "label": "Login", "isController": false}, {"data": [[18.596638655462215, 1904.4509803921567]], "isOverall": false, "label": "Login-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.57793514E12, "maxY": 6851.366666666667, "series": [{"data": [[1.5779352E12, 2759.7166666666667], [1.57793514E12, 6851.366666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5779352E12, 0.0], [1.57793514E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5779352E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1888.119842829077, "minX": 1.57793514E12, "maxY": 1945.0000000000002, "series": [{"data": [[1.5779352E12, 1945.0000000000002], [1.57793514E12, 1888.119842829077]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5779352E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1885.8487229862499, "minX": 1.57793514E12, "maxY": 1943.1414634146347, "series": [{"data": [[1.5779352E12, 1943.1414634146347], [1.57793514E12, 1885.8487229862499]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5779352E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 51.41463414634151, "minX": 1.57793514E12, "maxY": 81.29469548133576, "series": [{"data": [[1.5779352E12, 51.41463414634151], [1.57793514E12, 81.29469548133576]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5779352E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 173.0, "minX": 1.57793514E12, "maxY": 2790.0, "series": [{"data": [[1.5779352E12, 2334.0], [1.57793514E12, 2790.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5779352E12, 173.0], [1.57793514E12, 194.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5779352E12, 2210.8], [1.57793514E12, 2264.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5779352E12, 2333.7], [1.57793514E12, 2599.0999999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5779352E12, 2264.7], [1.57793514E12, 2358.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5779352E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 347.0, "minX": 1.0, "maxY": 2265.0, "series": [{"data": [[9.0, 671.5], [10.0, 1072.5], [11.0, 1146.0], [3.0, 369.0], [12.0, 1937.0], [13.0, 2265.0], [14.0, 1662.0], [15.0, 1718.0], [4.0, 1908.0], [16.0, 2047.5], [1.0, 1458.0], [18.0, 1650.0], [19.0, 2066.0], [5.0, 347.0], [20.0, 2089.0], [21.0, 2066.0], [6.0, 1385.5], [7.0, 1447.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 347.0, "minX": 1.0, "maxY": 2264.0, "series": [{"data": [[9.0, 670.5], [10.0, 1071.5], [11.0, 1146.0], [3.0, 369.0], [12.0, 1873.0], [13.0, 2264.0], [14.0, 1660.5], [15.0, 1717.0], [4.0, 1787.0], [16.0, 2047.0], [1.0, 1458.0], [18.0, 1650.0], [19.0, 2065.0], [5.0, 347.0], [20.0, 2089.0], [21.0, 2064.0], [6.0, 1380.5], [7.0, 1447.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.0833333333333335, "minX": 1.57793514E12, "maxY": 8.816666666666666, "series": [{"data": [[1.5779352E12, 3.0833333333333335], [1.57793514E12, 8.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5779352E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.4166666666666665, "minX": 1.57793514E12, "maxY": 8.483333333333333, "series": [{"data": [[1.5779352E12, 3.4166666666666665], [1.57793514E12, 8.483333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5779352E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 6.833333333333333, "minX": 1.57793514E12, "maxY": 16.966666666666665, "series": [{"data": [[1.5779352E12, 6.833333333333333], [1.57793514E12, 16.966666666666665]], "isOverall": false, "label": "Login-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5779352E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 6.833333333333333, "minX": 1.57793514E12, "maxY": 16.966666666666665, "series": [{"data": [[1.5779352E12, 6.833333333333333], [1.57793514E12, 16.966666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5779352E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

