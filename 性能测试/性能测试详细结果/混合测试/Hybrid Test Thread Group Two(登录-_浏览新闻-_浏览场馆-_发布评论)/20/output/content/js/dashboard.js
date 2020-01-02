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
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 6;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.5940499040307101, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.24812030075187969, 500, 1500, "Read News"], "isController": true}, {"data": [0.6691729323308271, 500, 1500, "GetNewsList(5)"], "isController": false}, {"data": [0.03875968992248062, 500, 1500, "Read Stadium Comments"], "isController": false}, {"data": [0.9007352941176471, 500, 1500, "GetNewsCount"], "isController": false}, {"data": [0.031007751937984496, 500, 1500, "Read Stadium Msg"], "isController": true}, {"data": [0.5477941176470589, 500, 1500, "GetNewsList(10)"], "isController": false}, {"data": [0.8449612403100775, 500, 1500, "Read Stadium Message"], "isController": false}, {"data": [0.7977941176470589, 500, 1500, "Login"], "isController": false}, {"data": [0.6401515151515151, 500, 1500, "Get Stadium Items"], "isController": false}, {"data": [0.811965811965812, 500, 1500, "Post Comment"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1048, 0, 0.0, 1342.5629770992393, 34, 35285, 4525.3, 6510.599999999999, 11112.849999999999, 11.756127657187728, 29.162295715547703, 0.0], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Read News", 133, 0, 0.0, 1989.3909774436102, 116, 6352, 3847.600000000001, 4463.899999999999, 6198.319999999999, 1.8165676432425049, 10.865700014512052, 0.0], "isController": true}, {"data": ["GetNewsList(5)", 133, 0, 0.0, 708.4586466165413, 39, 3634, 1373.8000000000004, 1930.4999999999993, 3615.64, 1.8189277899343543, 3.6218689098399888, 0.0], "isController": false}, {"data": ["Read Stadium Comments", 129, 0, 0.0, 6620.031007751939, 241, 35285, 10680.0, 12725.5, 30221.89999999981, 1.4533901169472048, 13.72988033473039, 0.0], "isController": false}, {"data": ["GetNewsCount", 136, 0, 0.0, 295.5661764705882, 34, 1157, 735.9, 796.45, 1150.34, 1.8459951406892618, 0.998712214786964, 0.0], "isController": false}, {"data": ["Read Stadium Msg", 129, 0, 0.0, 7829.255813953492, 360, 36073, 12162.0, 14661.5, 31538.49999999983, 1.4520976620101984, 18.191179403711292, 0.0], "isController": true}, {"data": ["GetNewsList(10)", 136, 0, 0.0, 1002.0147058823527, 39, 4305, 2226.1, 2716.55, 4285.76, 1.8123667377398722, 6.2512493336886985, 0.0], "isController": false}, {"data": ["Read Stadium Message", 129, 0, 0.0, 384.53488372093045, 36, 2119, 817.0, 991.5, 2106.6999999999994, 1.7940587449933245, 1.3502025052500557, 0.0], "isController": false}, {"data": ["Login", 272, 0, 0.0, 500.0000000000001, 161, 2266, 931.0, 1177.0, 1807.5599999999886, 3.6968074262337414, 2.907960155687239, 0.0], "isController": false}, {"data": ["Get Stadium Items", 132, 0, 0.0, 844.9318181818186, 36, 7262, 1915.9, 2368.699999999999, 6835.639999999984, 1.7861733941353974, 4.158434933221472, 0.0], "isController": false}, {"data": ["Post Comment", 234, 0, 0.0, 454.61538461538476, 45, 1588, 956.0, 1113.0, 1556.5000000000005, 3.218707015130674, 1.7099381017881705, 0.0], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Percentile 1
            case 8:
            // Percentile 2
            case 9:
            // Percentile 3
            case 10:
            // Throughput
            case 11:
            // Kbytes/s
            case 12:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1048, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
