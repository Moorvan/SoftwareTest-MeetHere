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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.6003731343283583, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.8880597014925373, 500, 1500, "Modify User Info"], "isController": false}, {"data": [0.7452107279693486, 500, 1500, "Login"], "isController": false}, {"data": [0.6456953642384106, 500, 1500, "Get Stadium Items"], "isController": false}, {"data": [0.8208955223880597, 500, 1500, "Get Stadium Idle Time"], "isController": false}, {"data": [0.208955223880597, 500, 1500, "Stadium Booking"], "isController": true}, {"data": [0.18604651162790697, 500, 1500, "Read News"], "isController": true}, {"data": [0.6918604651162791, 500, 1500, "GetNewsList(5)"], "isController": false}, {"data": [0.006097560975609756, 500, 1500, "Read Stadium Comments"], "isController": false}, {"data": [0.9195402298850575, 500, 1500, "GetNewsCount"], "isController": false}, {"data": [0.006097560975609756, 500, 1500, "Read Stadium Msg"], "isController": true}, {"data": [0.5632183908045977, 500, 1500, "GetNewsList(10)"], "isController": false}, {"data": [0.7933333333333333, 500, 1500, "Read Stadium Message"], "isController": false}, {"data": [0.8880597014925373, 500, 1500, "Modify User Infomation"], "isController": true}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 951, 0, 0.0, 1497.4879074658256, 35, 19802, 2777.800000000012, 10493.799999999997, 15588.120000000003, 11.988654270406556, 34.72591002206114, 0.0], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Modify User Info", 67, 0, 0.0, 376.89552238805976, 43, 1494, 880.0000000000002, 1237.5999999999988, 1494.0, 0.9544975354018862, 0.507076815682252, 0.0], "isController": false}, {"data": ["Login", 261, 0, 0.0, 587.6168582375477, 129, 3341, 1257.0, 1417.3999999999996, 2681.939999999995, 3.6258057346076904, 2.8532544992637257, 0.0], "isController": false}, {"data": ["Get Stadium Items", 151, 0, 0.0, 861.0066225165565, 35, 4244, 1977.8000000000002, 3056.2000000000035, 4228.4, 2.0910072839061677, 4.868126332844047, 0.0], "isController": false}, {"data": ["Get Stadium Idle Time", 67, 0, 0.0, 413.9701492537314, 36, 1885, 899.2000000000002, 1263.1999999999994, 1885.0, 0.9623394903909683, 0.528453537495332, 0.0], "isController": false}, {"data": ["Stadium Booking", 67, 0, 0.0, 2146.4179104477603, 116, 6521, 4160.6, 4651.599999999998, 6521.0, 0.9544023589407559, 3.4614752416276127, 0.0], "isController": true}, {"data": ["Read News", 86, 0, 0.0, 2412.7906976744175, 253, 7095, 4578.5999999999985, 5246.999999999999, 7095.0, 1.1886169198236423, 8.04502966359377, 0.0], "isController": true}, {"data": ["GetNewsList(5)", 86, 0, 0.0, 676.8372093023255, 38, 3683, 1608.6999999999998, 2244.7, 3683.0, 1.1921594721228757, 2.373840980135296, 0.0], "isController": false}, {"data": ["Read Stadium Comments", 82, 0, 0.0, 10858.82926829268, 744, 19802, 16769.700000000004, 18114.35, 19802.0, 1.0419446244552029, 19.85469855874916, 0.0], "isController": false}, {"data": ["GetNewsCount", 87, 0, 0.0, 259.2068965517242, 35, 1547, 735.4000000000001, 989.9999999999992, 1547.0, 1.2142019762183889, 0.6569022410400268, 0.0], "isController": false}, {"data": ["Read Stadium Msg", 82, 0, 0.0, 12059.536585365851, 873, 20992, 17706.600000000002, 19404.399999999998, 20992.0, 1.0402263126514353, 23.028163612059014, 0.0], "isController": true}, {"data": ["GetNewsList(10)", 87, 0, 0.0, 926.3448275862073, 39, 4032, 1880.6000000000004, 2237.3999999999996, 4032.0, 1.2132537513248174, 4.184777587577397, 0.0], "isController": false}, {"data": ["Read Stadium Message", 150, 0, 0.0, 593.4599999999999, 36, 3785, 1337.3, 2282.1499999999974, 3702.8900000000012, 2.0528541515553793, 1.5442247866742393, 0.0], "isController": false}, {"data": ["Modify User Infomation", 67, 0, 0.0, 376.89552238805976, 43, 1494, 880.0000000000002, 1237.5999999999988, 1494.0, 0.9544975354018862, 0.507076815682252, 0.0], "isController": true}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 951, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
