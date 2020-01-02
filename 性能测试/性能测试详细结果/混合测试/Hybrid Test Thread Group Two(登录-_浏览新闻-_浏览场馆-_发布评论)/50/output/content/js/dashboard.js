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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.15290178571428573, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.10416666666666667, 500, 1500, "Read News"], "isController": true}, {"data": [0.18333333333333332, 500, 1500, "GetNewsList(5)"], "isController": false}, {"data": [0.0, 500, 1500, "Read Stadium Comments"], "isController": false}, {"data": [0.32, 500, 1500, "GetNewsCount"], "isController": false}, {"data": [0.0, 500, 1500, "Read Stadium Msg"], "isController": true}, {"data": [0.17338709677419356, 500, 1500, "GetNewsList(10)"], "isController": false}, {"data": [0.16071428571428573, 500, 1500, "Read Stadium Message"], "isController": false}, {"data": [0.2755905511811024, 500, 1500, "Login"], "isController": false}, {"data": [0.12393162393162394, 500, 1500, "Get Stadium Items"], "isController": false}, {"data": [0.041666666666666664, 500, 1500, "Post Comment"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 911, 0, 0.0, 3929.2744237102083, 36, 61605, 8192.800000000003, 12386.4, 18005.279999999995, 11.28718514205003, 33.68051065297791, 0.0], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Read News", 120, 0, 0.0, 8407.541666666662, 142, 63009, 12855.6, 14115.049999999997, 53281.79999999963, 1.5904150983406669, 9.512980934899009, 0.0], "isController": true}, {"data": ["GetNewsList(5)", 120, 0, 0.0, 2786.533333333332, 42, 7750, 5196.8, 6050.449999999998, 7497.579999999991, 1.59256801592568, 3.171138852023889, 0.0], "isController": false}, {"data": ["Read Stadium Comments", 102, 0, 0.0, 11983.019607843145, 1816, 27070, 16644.3, 19839.049999999996, 27028.39, 1.2713607299106309, 18.480899694156726, 0.0], "isController": false}, {"data": ["GetNewsCount", 125, 0, 0.0, 2286.3999999999996, 36, 7311, 4915.400000000001, 5629.2, 7079.599999999996, 1.6775821344213013, 0.9075981469427743, 0.0], "isController": false}, {"data": ["Read Stadium Msg", 102, 0, 0.0, 17701.74509803922, 1939, 35458, 24129.800000000003, 28496.7, 35429.89, 1.2694145758661888, 22.365592856276134, 0.0], "isController": true}, {"data": ["GetNewsList(10)", 124, 0, 0.0, 3422.3225806451615, 42, 61605, 6209.0, 6521.25, 48079.75, 1.6109963492744022, 5.556678814098817, 0.0], "isController": false}, {"data": ["Read Stadium Message", 112, 0, 0.0, 2884.3125, 42, 6891, 5934.400000000001, 6424.799999999999, 6880.6, 1.4494629222207842, 1.0935553699689402, 0.0], "isController": false}, {"data": ["Login", 254, 0, 0.0, 2274.0314960629917, 168, 6429, 4466.0, 5312.5, 6102.849999999993, 3.297159769458435, 2.593425273573394, 0.0], "isController": false}, {"data": ["Get Stadium Items", 117, 0, 0.0, 3241.4615384615386, 40, 10878, 6077.200000000001, 6443.799999999997, 10434.659999999983, 1.5047457365537464, 3.503236167914191, 0.0], "isController": false}, {"data": ["Post Comment", 168, 0, 0.0, 3829.2023809523807, 176, 6767, 5862.4, 6295.999999999997, 6767.0, 2.2283531409168083, 1.1838126061120544, 0.0], "isController": false}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 911, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
