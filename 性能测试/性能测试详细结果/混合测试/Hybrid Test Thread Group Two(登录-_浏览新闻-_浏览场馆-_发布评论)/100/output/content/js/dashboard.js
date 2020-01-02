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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.08087679516250945, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.09722222222222222, 500, 1500, "Read News"], "isController": true}, {"data": [0.1111111111111111, 500, 1500, "GetNewsList(5)"], "isController": false}, {"data": [0.0, 500, 1500, "Read Stadium Comments"], "isController": false}, {"data": [0.21804511278195488, 500, 1500, "GetNewsCount"], "isController": false}, {"data": [0.0, 500, 1500, "Read Stadium Msg"], "isController": true}, {"data": [0.1336206896551724, 500, 1500, "GetNewsList(10)"], "isController": false}, {"data": [0.0891089108910891, 500, 1500, "Read Stadium Message"], "isController": false}, {"data": [0.06291390728476821, 500, 1500, "Login"], "isController": false}, {"data": [0.0970873786407767, 500, 1500, "Get Stadium Items"], "isController": false}, {"data": [0.012987012987012988, 500, 1500, "Post Comment"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 888, 0, 0.0, 8295.51463963964, 43, 47654, 18698.3, 21213.649999999994, 29356.420000000013, 10.49695021041184, 33.074549734916545, 0.0], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Read News", 108, 0, 0.0, 12708.101851851858, 199, 47042, 22220.7, 38970.349999999984, 46831.12999999999, 1.37420315303279, 8.219721008130703, 0.0], "isController": true}, {"data": ["GetNewsList(5)", 108, 0, 0.0, 5733.9722222222235, 70, 22248, 9854.300000000017, 14443.349999999999, 22146.839999999997, 1.3766905887901695, 2.7412813579523, 0.0], "isController": false}, {"data": ["Read Stadium Comments", 99, 0, 0.0, 20726.63636363636, 7486, 47654, 28407.0, 30614.0, 47654.0, 1.1862396204033216, 19.588317655349464, 0.0], "isController": false}, {"data": ["GetNewsCount", 133, 0, 0.0, 4934.834586466166, 44, 20383, 15534.60000000002, 18657.4, 20284.399999999998, 1.6796958866394716, 0.9087417199201829, 0.0], "isController": false}, {"data": ["Read Stadium Msg", 99, 0, 0.0, 35408.43434343435, 7605, 64160, 50547.0, 53274.0, 64160.0, 1.1847206931214398, 23.219081145888183, 0.0], "isController": true}, {"data": ["GetNewsList(10)", 116, 0, 0.0, 5432.853448275862, 61, 24217, 13260.9, 18799.05, 23729.269999999997, 1.4724362473185157, 5.078754712430662, 0.0], "isController": false}, {"data": ["Read Stadium Message", 101, 0, 0.0, 8418.227722772275, 44, 19296, 13824.4, 14369.199999999999, 19295.86, 1.3165269757680826, 0.9980242930184966, 0.0], "isController": false}, {"data": ["Login", 302, 0, 0.0, 6241.172185430462, 353, 21118, 16008.3, 18857.0, 20880.0, 3.7772663598158895, 2.9719980425755455, 0.0], "isController": false}, {"data": ["Get Stadium Items", 103, 0, 0.0, 6780.533980582527, 43, 18539, 10791.400000000001, 14220.999999999996, 18444.919999999984, 1.3200220430865446, 3.0731763190608623, 0.0], "isController": false}, {"data": ["Post Comment", 154, 0, 0.0, 11917.064935064938, 100, 20640, 18749.0, 19068.0, 20640.0, 2.1672436601086438, 1.1513481944327169, 0.0], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 888, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
