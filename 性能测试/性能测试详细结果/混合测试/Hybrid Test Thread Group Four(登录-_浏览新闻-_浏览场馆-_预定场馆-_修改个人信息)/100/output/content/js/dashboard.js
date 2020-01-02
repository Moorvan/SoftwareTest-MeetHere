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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.0276268115942029, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "Stadium Booking"], "isController": true}, {"data": [0.0, 500, 1500, "Read News"], "isController": true}, {"data": [0.045, 500, 1500, "GetNewsList(5)"], "isController": false}, {"data": [0.0, 500, 1500, "Read Stadium Comments"], "isController": false}, {"data": [0.12, 500, 1500, "GetNewsCount"], "isController": false}, {"data": [0.0, 500, 1500, "Read Stadium Msg"], "isController": true}, {"data": [0.055, 500, 1500, "GetNewsList(10)"], "isController": false}, {"data": [0.026515151515151516, 500, 1500, "Read Stadium Message"], "isController": false}, {"data": [0.0033333333333333335, 500, 1500, "Login"], "isController": false}, {"data": [0.0392156862745098, 500, 1500, "Get Stadium Items"], "isController": false}, {"data": [0.0, 500, 1500, "Get Stadium Idle Time"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 828, 0, 0.0, 9191.58937198068, 111, 59753, 17281.800000000003, 20661.94999999999, 30597.330000000027, 8.86509635974304, 26.503770325883295, 0.0], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Stadium Booking", 3, 0, 0.0, 43672.666666666664, 42540, 44268, 44268.0, 44268.0, 44268.0, 0.06598337219020807, 0.23940451381251923, 0.0], "isController": true}, {"data": ["Read News", 100, 0, 0.0, 24769.92, 10318, 55523, 38992.4, 42444.899999999994, 55454.95999999996, 1.3600631069281615, 9.205555262764193, 0.0], "isController": true}, {"data": ["GetNewsList(5)", 100, 0, 0.0, 7200.989999999998, 781, 17950, 14276.300000000001, 15394.05, 17932.84999999999, 1.498329362760522, 2.983489815106157, 0.0], "isController": false}, {"data": ["Read Stadium Comments", 73, 0, 0.0, 23511.479452054795, 12577, 59753, 31170.600000000006, 43017.79999999998, 59753.0, 1.0426635053490068, 19.588396195170894, 0.0], "isController": false}, {"data": ["GetNewsCount", 100, 0, 0.0, 3955.0900000000006, 111, 12636, 7891.500000000002, 8681.299999999997, 12627.309999999996, 2.9754820280885506, 1.6097822691025947, 0.0], "isController": false}, {"data": ["Read Stadium Msg", 73, 0, 0.0, 39590.90410958905, 14543, 69998, 52514.00000000001, 56491.9, 69998.0, 0.8862987919626055, 19.382628486766226, 0.0], "isController": true}, {"data": ["GetNewsList(10)", 100, 0, 0.0, 5962.1799999999985, 322, 25985, 11530.5, 14991.799999999994, 25907.99999999996, 1.9557606931215896, 6.745846453227983, 0.0], "isController": false}, {"data": ["Read Stadium Message", 132, 0, 0.0, 11544.772727272728, 453, 17826, 16805.4, 17225.55, 17809.829999999998, 2.0301757947676835, 1.5296910806841075, 0.0], "isController": false}, {"data": ["Login", 300, 0, 0.0, 6557.246666666665, 694, 19252, 11209.000000000005, 15709.05, 18988.0, 10.138217701328106, 7.979094150248386, 0.0], "isController": false}, {"data": ["Get Stadium Items", 102, 0, 0.0, 9347.833333333336, 636, 21180, 15658.2, 17538.249999999996, 21102.329999999998, 1.4074789568097144, 3.2767869463226162, 0.0], "isController": false}, {"data": ["Get Stadium Idle Time", 21, 0, 0.0, 16138.714285714286, 13756, 17743, 17525.8, 17725.2, 17743.0, 0.6548584258450791, 0.35958743919171765, 0.0], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 828, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
