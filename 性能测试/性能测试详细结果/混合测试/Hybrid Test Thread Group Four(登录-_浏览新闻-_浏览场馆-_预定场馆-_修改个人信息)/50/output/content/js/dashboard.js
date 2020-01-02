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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.16266866566716642, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.23, 500, 1500, "Modify User Info"], "isController": false}, {"data": [0.19322033898305085, 500, 1500, "Login"], "isController": false}, {"data": [0.15734265734265734, 500, 1500, "Get Stadium Items"], "isController": false}, {"data": [0.10714285714285714, 500, 1500, "Get Stadium Idle Time"], "isController": false}, {"data": [0.0, 500, 1500, "Stadium Booking"], "isController": true}, {"data": [0.027472527472527472, 500, 1500, "Read News"], "isController": true}, {"data": [0.25274725274725274, 500, 1500, "GetNewsList(5)"], "isController": false}, {"data": [0.0, 500, 1500, "Read Stadium Comments"], "isController": false}, {"data": [0.45652173913043476, 500, 1500, "GetNewsCount"], "isController": false}, {"data": [0.0, 500, 1500, "Read Stadium Msg"], "isController": true}, {"data": [0.22826086956521738, 500, 1500, "GetNewsList(10)"], "isController": false}, {"data": [0.13157894736842105, 500, 1500, "Read Stadium Message"], "isController": false}, {"data": [0.23, 500, 1500, "Modify User Infomation"], "isController": true}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 957, 0, 0.0, 3840.9070010449263, 40, 77444, 7441.400000000004, 12952.799999999985, 21623.479999999974, 8.457874130571193, 25.210078013835737, 0.0], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Modify User Info", 50, 0, 0.0, 2809.98, 396, 7138, 5920.7, 6510.25, 7138.0, 0.7958741882083281, 0.42280816248567427, 0.0], "isController": false}, {"data": ["Login", 295, 0, 0.0, 2331.7152542372887, 395, 7748, 4573.4, 5909.6, 6861.920000000019, 3.755952229380459, 2.9563203445290416, 0.0], "isController": false}, {"data": ["Get Stadium Items", 143, 0, 0.0, 3338.8251748251737, 49, 9976, 6607.599999999999, 7346.4, 9815.84, 1.8125126749138107, 4.219756071283715, 0.0], "isController": false}, {"data": ["Get Stadium Idle Time", 56, 0, 0.0, 3472.553571428571, 210, 7542, 6665.800000000001, 7069.9, 7542.0, 0.8295681801348048, 0.455608612325013, 0.0], "isController": false}, {"data": ["Stadium Booking", 52, 0, 0.0, 11112.903846153848, 2592, 19365, 16797.1, 17558.0, 19365.0, 0.7409940720474236, 2.6961229622663017, 0.0], "isController": true}, {"data": ["Read News", 91, 0, 0.0, 8164.8571428571395, 903, 21418, 13046.599999999999, 19253.8, 21418.0, 1.3033701427978057, 8.821764244868875, 0.0], "isController": true}, {"data": ["GetNewsList(5)", 91, 0, 0.0, 2477.186813186813, 72, 9318, 5003.6, 5792.7999999999965, 9318.0, 1.3189361547938256, 2.6262800972896585, 0.0], "isController": false}, {"data": ["Read Stadium Comments", 85, 0, 0.0, 15204.847058823532, 7110, 77444, 22396.400000000005, 25266.600000000006, 77444.0, 0.7612735658949442, 14.73073970881286, 0.0], "isController": false}, {"data": ["GetNewsCount", 92, 0, 0.0, 1355.5978260869565, 53, 6905, 2329.1, 5718.45, 6905.0, 1.3187128216154231, 0.7134442413817816, 0.0], "isController": false}, {"data": ["Read Stadium Msg", 85, 0, 0.0, 20919.741176470594, 7292, 89448, 30733.4, 31870.600000000002, 89448.0, 0.7600346933483553, 17.049139456306946, 0.0], "isController": true}, {"data": ["GetNewsList(10)", 92, 0, 0.0, 2447.532608695653, 70, 9343, 4696.4, 5837.699999999993, 9343.0, 1.2058457303886232, 4.159225702863884, 0.0], "isController": false}, {"data": ["Read Stadium Message", 152, 0, 0.0, 3574.177631578947, 40, 13246, 6827.8, 7145.2, 10159.279999999993, 2.0032420891706315, 1.514581164252672, 0.0], "isController": false}, {"data": ["Modify User Infomation", 50, 0, 0.0, 2809.98, 396, 7138, 5920.7, 6510.25, 7138.0, 0.7958741882083281, 0.42280816248567427, 0.0], "isController": true}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 957, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
