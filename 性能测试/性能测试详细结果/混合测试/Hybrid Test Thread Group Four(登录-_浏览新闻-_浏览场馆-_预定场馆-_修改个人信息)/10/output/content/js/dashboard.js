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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.7818110850897736, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9565217391304348, 500, 1500, "Modify User Info"], "isController": false}, {"data": [0.9789029535864979, 500, 1500, "Login"], "isController": false}, {"data": [0.8513513513513513, 500, 1500, "Get Stadium Items"], "isController": false}, {"data": [0.9857142857142858, 500, 1500, "Get Stadium Idle Time"], "isController": false}, {"data": [0.7214285714285714, 500, 1500, "Stadium Booking"], "isController": true}, {"data": [0.4620253164556962, 500, 1500, "Read News"], "isController": true}, {"data": [0.8417721518987342, 500, 1500, "GetNewsList(5)"], "isController": false}, {"data": [0.032467532467532464, 500, 1500, "Read Stadium Comments"], "isController": false}, {"data": [0.9936708860759493, 500, 1500, "GetNewsCount"], "isController": false}, {"data": [0.025974025974025976, 500, 1500, "Read Stadium Msg"], "isController": true}, {"data": [0.810126582278481, 500, 1500, "GetNewsList(10)"], "isController": false}, {"data": [0.9594594594594594, 500, 1500, "Read Stadium Message"], "isController": false}, {"data": [0.9565217391304348, 500, 1500, "Modify User Infomation"], "isController": true}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 907, 0, 0.0, 764.1499448732073, 35, 12214, 1185.200000000003, 5823.799999999998, 9150.399999999989, 11.9136751126348, 34.329113838318165, 0.0], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Modify User Info", 69, 0, 0.0, 167.60869565217388, 38, 1734, 357.0, 622.0, 1734.0, 0.9763690391962644, 0.5186960520730154, 0.0], "isController": false}, {"data": ["Login", 237, 0, 0.0, 249.75527426160338, 128, 862, 425.0, 442.29999999999995, 794.62, 3.2684696115072196, 2.5721178295362086, 0.0], "isController": false}, {"data": ["Get Stadium Items", 148, 0, 0.0, 391.45270270270254, 35, 3931, 848.9999999999994, 1014.3999999999999, 3852.5999999999985, 2.0284531674022093, 4.722492530358268, 0.0], "isController": false}, {"data": ["Get Stadium Idle Time", 70, 0, 0.0, 127.65714285714286, 36, 732, 280.9, 486.5, 732.0, 0.9902390720045269, 0.5438440506082898, 0.0], "isController": false}, {"data": ["Stadium Booking", 70, 0, 0.0, 652.4142857142858, 114, 2337, 1176.5, 1509.250000000002, 2337.0, 0.9887005649717514, 3.585294734286723, 0.0], "isController": true}, {"data": ["Read News", 79, 0, 0.0, 1108.7341772151897, 244, 2891, 2014.0, 2625.0, 2891.0, 1.0833196204267457, 7.332334005265755, 0.0], "isController": true}, {"data": ["GetNewsList(5)", 79, 0, 0.0, 345.9113924050633, 38, 1987, 770.0, 1172.0, 1987.0, 1.086582765972079, 2.1636154881026064, 0.0], "isController": false}, {"data": ["Read Stadium Comments", 77, 0, 0.0, 6235.272727272727, 482, 12214, 9350.8, 9601.999999999998, 12214.0, 1.0182222104678533, 19.64996596972442, 0.0], "isController": false}, {"data": ["GetNewsCount", 79, 0, 0.0, 78.1139240506329, 35, 753, 267.0, 278.0, 753.0, 1.0936526614522044, 0.5916831781684779, 0.0], "isController": false}, {"data": ["Read Stadium Msg", 77, 0, 0.0, 6850.831168831168, 579, 13484, 9918.800000000001, 10892.599999999999, 13484.0, 1.0172402404386023, 22.763498352764387, 0.0], "isController": true}, {"data": ["GetNewsList(10)", 79, 0, 0.0, 439.24050632911394, 39, 2192, 1069.0, 1657.0, 2192.0, 1.0896852326960744, 3.7585627362134124, 0.0], "isController": false}, {"data": ["Read Stadium Message", 148, 0, 0.0, 182.7162162162163, 35, 1107, 479.19999999999993, 739.4999999999995, 1020.7599999999984, 2.0226316077188, 1.517040436403269, 0.0], "isController": false}, {"data": ["Modify User Infomation", 69, 0, 0.0, 167.60869565217388, 38, 1734, 357.0, 622.0, 1734.0, 0.9763690391962644, 0.5186960520730154, 0.0], "isController": true}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 907, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
