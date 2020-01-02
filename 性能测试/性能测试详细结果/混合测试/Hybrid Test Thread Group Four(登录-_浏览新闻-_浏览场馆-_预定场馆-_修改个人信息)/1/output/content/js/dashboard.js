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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9496124031007752, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "Modify User Info"], "isController": false}, {"data": [1.0, 500, 1500, "Login"], "isController": false}, {"data": [1.0, 500, 1500, "Get Stadium Items"], "isController": false}, {"data": [1.0, 500, 1500, "Get Stadium Idle Time"], "isController": false}, {"data": [1.0, 500, 1500, "Stadium Booking"], "isController": true}, {"data": [1.0, 500, 1500, "Read News"], "isController": true}, {"data": [1.0, 500, 1500, "GetNewsList(5)"], "isController": false}, {"data": [0.6415094339622641, 500, 1500, "Read Stadium Comments"], "isController": false}, {"data": [1.0, 500, 1500, "GetNewsCount"], "isController": false}, {"data": [0.5, 500, 1500, "Read Stadium Msg"], "isController": true}, {"data": [1.0, 500, 1500, "GetNewsList(10)"], "isController": false}, {"data": [1.0, 500, 1500, "Read Stadium Message"], "isController": false}, {"data": [1.0, 500, 1500, "Modify User Infomation"], "isController": true}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 637, 0, 0.0, 101.18367346938771, 35, 652, 177.0, 522.1, 585.1, 9.779688339602364, 27.471519488370305, 0.0], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Modify User Info", 53, 0, 0.0, 43.03773584905661, 38, 48, 47.0, 47.3, 48.0, 0.8312551953449709, 0.4416043225270158, 0.0], "isController": false}, {"data": ["Login", 161, 0, 0.0, 159.4285714285715, 127, 222, 178.0, 182.0, 222.0, 2.471789360558839, 1.943574523105857, 0.0], "isController": false}, {"data": ["Get Stadium Items", 106, 0, 0.0, 41.15094339622644, 35, 84, 44.0, 45.0, 83.85999999999999, 1.6443796345133566, 3.8283213366014084, 0.0], "isController": false}, {"data": ["Get Stadium Idle Time", 53, 0, 0.0, 41.52830188679246, 35, 74, 45.6, 46.3, 74.0, 0.8312291212496667, 0.45649292377001616, 0.0], "isController": false}, {"data": ["Stadium Booking", 53, 0, 0.0, 123.66037735849059, 107, 169, 131.6, 143.09999999999997, 169.0, 0.8301354843762236, 3.010388318388284, 0.0], "isController": true}, {"data": ["Read News", 53, 0, 0.0, 264.64150943396226, 243, 345, 281.4, 289.4, 345.0, 0.8273751912329451, 5.599448205142214, 0.0], "isController": true}, {"data": ["GetNewsList(5)", 53, 0, 0.0, 44.50943396226414, 39, 70, 47.6, 49.0, 70.0, 0.8303305655647815, 1.6533633038931537, 0.0], "isController": false}, {"data": ["Read Stadium Comments", 53, 0, 0.0, 528.8301886792455, 455, 652, 589.4, 604.9, 652.0, 0.8250054481491859, 15.630396464734908, 0.0], "isController": false}, {"data": ["GetNewsCount", 53, 0, 0.0, 40.415094339622634, 35, 60, 44.0, 45.3, 60.0, 0.8303565833176663, 0.44923588589647173, 0.0], "isController": false}, {"data": ["Read Stadium Msg", 53, 0, 0.0, 610.2830188679246, 533, 737, 672.2, 699.1999999999999, 737.0, 0.8239024996890935, 18.154653324563174, 0.0], "isController": true}, {"data": ["GetNewsList(10)", 53, 0, 0.0, 44.43396226415094, 39, 53, 48.0, 49.599999999999994, 53.0, 0.8303435742374157, 2.864036625201711, 0.0], "isController": false}, {"data": ["Read Stadium Message", 106, 0, 0.0, 40.63207547169811, 35, 48, 45.0, 45.0, 48.0, 1.6477025430578873, 1.2440955706335883, 0.0], "isController": false}, {"data": ["Modify User Infomation", 53, 0, 0.0, 43.03773584905661, 38, 48, 47.0, 47.3, 48.0, 0.8312551953449709, 0.4416043225270158, 0.0], "isController": true}]}, function(index, item){
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
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 637, 0, null, null, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
