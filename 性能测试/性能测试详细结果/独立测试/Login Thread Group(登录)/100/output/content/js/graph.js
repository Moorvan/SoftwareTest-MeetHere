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
        data: {"result": {"minY": 335.0, "minX": 0.0, "maxY": 34526.0, "series": [{"data": [[0.0, 335.0], [0.1, 335.0], [0.2, 560.0], [0.3, 562.0], [0.4, 562.0], [0.5, 596.0], [0.6, 758.0], [0.7, 758.0], [0.8, 862.0], [0.9, 929.0], [1.0, 999.0], [1.1, 999.0], [1.2, 1072.0], [1.3, 1154.0], [1.4, 1154.0], [1.5, 1165.0], [1.6, 1175.0], [1.7, 1207.0], [1.8, 1207.0], [1.9, 1220.0], [2.0, 1484.0], [2.1, 1484.0], [2.2, 1601.0], [2.3, 1624.0], [2.4, 1685.0], [2.5, 1685.0], [2.6, 1761.0], [2.7, 1771.0], [2.8, 1771.0], [2.9, 1854.0], [3.0, 1878.0], [3.1, 1939.0], [3.2, 1939.0], [3.3, 1953.0], [3.4, 2042.0], [3.5, 2042.0], [3.6, 2048.0], [3.7, 2059.0], [3.8, 2263.0], [3.9, 2263.0], [4.0, 2294.0], [4.1, 2320.0], [4.2, 2320.0], [4.3, 2348.0], [4.4, 2359.0], [4.5, 2381.0], [4.6, 2381.0], [4.7, 2493.0], [4.8, 2632.0], [4.9, 2632.0], [5.0, 2709.0], [5.1, 2791.0], [5.2, 2821.0], [5.3, 2821.0], [5.4, 2898.0], [5.5, 3025.0], [5.6, 3025.0], [5.7, 3026.0], [5.8, 3049.0], [5.9, 3054.0], [6.0, 3054.0], [6.1, 3056.0], [6.2, 3060.0], [6.3, 3060.0], [6.4, 3115.0], [6.5, 3140.0], [6.6, 3164.0], [6.7, 3164.0], [6.8, 3190.0], [6.9, 3235.0], [7.0, 3235.0], [7.1, 3264.0], [7.2, 3318.0], [7.3, 3341.0], [7.4, 3341.0], [7.5, 3353.0], [7.6, 3423.0], [7.7, 3423.0], [7.8, 3494.0], [7.9, 3495.0], [8.0, 3521.0], [8.1, 3521.0], [8.2, 3565.0], [8.3, 3636.0], [8.4, 3636.0], [8.5, 3642.0], [8.6, 3664.0], [8.7, 3741.0], [8.8, 3741.0], [8.9, 3815.0], [9.0, 3892.0], [9.1, 3892.0], [9.2, 4017.0], [9.3, 4083.0], [9.4, 4224.0], [9.5, 4224.0], [9.6, 4302.0], [9.7, 4304.0], [9.8, 4304.0], [9.9, 4318.0], [10.0, 4352.0], [10.1, 4390.0], [10.2, 4390.0], [10.3, 4441.0], [10.4, 4450.0], [10.5, 4450.0], [10.6, 4476.0], [10.7, 4570.0], [10.8, 4586.0], [10.9, 4586.0], [11.0, 4628.0], [11.1, 4640.0], [11.2, 4640.0], [11.3, 4699.0], [11.4, 4707.0], [11.5, 4711.0], [11.6, 4711.0], [11.7, 4712.0], [11.8, 4806.0], [11.9, 4806.0], [12.0, 4832.0], [12.1, 4835.0], [12.2, 4914.0], [12.3, 4914.0], [12.4, 4934.0], [12.5, 5047.0], [12.6, 5047.0], [12.7, 5188.0], [12.8, 5223.0], [12.9, 5252.0], [13.0, 5252.0], [13.1, 5293.0], [13.2, 5311.0], [13.3, 5311.0], [13.4, 5345.0], [13.5, 5406.0], [13.6, 5420.0], [13.7, 5420.0], [13.8, 5469.0], [13.9, 5475.0], [14.0, 5475.0], [14.1, 5515.0], [14.2, 5591.0], [14.3, 5604.0], [14.4, 5604.0], [14.5, 5615.0], [14.6, 5677.0], [14.7, 5677.0], [14.8, 5684.0], [14.9, 5698.0], [15.0, 5708.0], [15.1, 5708.0], [15.2, 5785.0], [15.3, 5832.0], [15.4, 5832.0], [15.5, 5836.0], [15.6, 5840.0], [15.7, 5876.0], [15.8, 5876.0], [15.9, 5927.0], [16.0, 6011.0], [16.1, 6011.0], [16.2, 6012.0], [16.3, 6017.0], [16.4, 6061.0], [16.5, 6061.0], [16.6, 6063.0], [16.7, 6117.0], [16.8, 6117.0], [16.9, 6123.0], [17.0, 6166.0], [17.1, 6176.0], [17.2, 6176.0], [17.3, 6235.0], [17.4, 6258.0], [17.5, 6258.0], [17.6, 6263.0], [17.7, 6299.0], [17.8, 6302.0], [17.9, 6302.0], [18.0, 6332.0], [18.1, 6332.0], [18.2, 6332.0], [18.3, 6393.0], [18.4, 6523.0], [18.5, 6624.0], [18.6, 6624.0], [18.7, 6637.0], [18.8, 6677.0], [18.9, 6677.0], [19.0, 6761.0], [19.1, 6762.0], [19.2, 6772.0], [19.3, 6772.0], [19.4, 6809.0], [19.5, 6865.0], [19.6, 6865.0], [19.7, 6874.0], [19.8, 6885.0], [19.9, 6899.0], [20.0, 6899.0], [20.1, 6922.0], [20.2, 6923.0], [20.3, 6923.0], [20.4, 6946.0], [20.5, 6966.0], [20.6, 7006.0], [20.7, 7006.0], [20.8, 7014.0], [20.9, 7015.0], [21.0, 7015.0], [21.1, 7052.0], [21.2, 7071.0], [21.3, 7093.0], [21.4, 7093.0], [21.5, 7096.0], [21.6, 7119.0], [21.7, 7119.0], [21.8, 7194.0], [21.9, 7197.0], [22.0, 7207.0], [22.1, 7207.0], [22.2, 7241.0], [22.3, 7302.0], [22.4, 7302.0], [22.5, 7313.0], [22.6, 7334.0], [22.7, 7341.0], [22.8, 7341.0], [22.9, 7356.0], [23.0, 7360.0], [23.1, 7360.0], [23.2, 7395.0], [23.3, 7403.0], [23.4, 7410.0], [23.5, 7410.0], [23.6, 7418.0], [23.7, 7428.0], [23.8, 7428.0], [23.9, 7495.0], [24.0, 7498.0], [24.1, 7501.0], [24.2, 7501.0], [24.3, 7520.0], [24.4, 7534.0], [24.5, 7534.0], [24.6, 7545.0], [24.7, 7549.0], [24.8, 7633.0], [24.9, 7633.0], [25.0, 7642.0], [25.1, 7644.0], [25.2, 7644.0], [25.3, 7674.0], [25.4, 7675.0], [25.5, 7699.0], [25.6, 7699.0], [25.7, 7726.0], [25.8, 7740.0], [25.9, 7740.0], [26.0, 7781.0], [26.1, 7831.0], [26.2, 7854.0], [26.3, 7854.0], [26.4, 7870.0], [26.5, 7888.0], [26.6, 7888.0], [26.7, 7894.0], [26.8, 7924.0], [26.9, 7935.0], [27.0, 7935.0], [27.1, 7947.0], [27.2, 7948.0], [27.3, 7948.0], [27.4, 7977.0], [27.5, 7978.0], [27.6, 7983.0], [27.7, 7983.0], [27.8, 8011.0], [27.9, 8027.0], [28.0, 8027.0], [28.1, 8030.0], [28.2, 8032.0], [28.3, 8039.0], [28.4, 8039.0], [28.5, 8048.0], [28.6, 8051.0], [28.7, 8051.0], [28.8, 8053.0], [28.9, 8058.0], [29.0, 8063.0], [29.1, 8063.0], [29.2, 8068.0], [29.3, 8070.0], [29.4, 8070.0], [29.5, 8074.0], [29.6, 8075.0], [29.7, 8077.0], [29.8, 8077.0], [29.9, 8085.0], [30.0, 8086.0], [30.1, 8086.0], [30.2, 8096.0], [30.3, 8099.0], [30.4, 8114.0], [30.5, 8114.0], [30.6, 8124.0], [30.7, 8128.0], [30.8, 8128.0], [30.9, 8134.0], [31.0, 8134.0], [31.1, 8142.0], [31.2, 8142.0], [31.3, 8148.0], [31.4, 8149.0], [31.5, 8149.0], [31.6, 8155.0], [31.7, 8166.0], [31.8, 8166.0], [31.9, 8166.0], [32.0, 8170.0], [32.1, 8192.0], [32.2, 8192.0], [32.3, 8196.0], [32.4, 8212.0], [32.5, 8213.0], [32.6, 8213.0], [32.7, 8229.0], [32.8, 8257.0], [32.9, 8257.0], [33.0, 8258.0], [33.1, 8269.0], [33.2, 8269.0], [33.3, 8269.0], [33.4, 8277.0], [33.5, 8298.0], [33.6, 8298.0], [33.7, 8305.0], [33.8, 8344.0], [33.9, 8344.0], [34.0, 8344.0], [34.1, 8348.0], [34.2, 8356.0], [34.3, 8356.0], [34.4, 8374.0], [34.5, 8404.0], [34.6, 8432.0], [34.7, 8432.0], [34.8, 8439.0], [34.9, 8441.0], [35.0, 8441.0], [35.1, 8441.0], [35.2, 8444.0], [35.3, 8446.0], [35.4, 8446.0], [35.5, 8450.0], [35.6, 8499.0], [35.7, 8499.0], [35.8, 8503.0], [35.9, 8507.0], [36.0, 8519.0], [36.1, 8519.0], [36.2, 8524.0], [36.3, 8536.0], [36.4, 8536.0], [36.5, 8550.0], [36.6, 8574.0], [36.7, 8611.0], [36.8, 8611.0], [36.9, 8626.0], [37.0, 8635.0], [37.1, 8635.0], [37.2, 8635.0], [37.3, 8637.0], [37.4, 8647.0], [37.5, 8647.0], [37.6, 8658.0], [37.7, 8672.0], [37.8, 8672.0], [37.9, 8699.0], [38.0, 8725.0], [38.1, 8737.0], [38.2, 8737.0], [38.3, 8738.0], [38.4, 8775.0], [38.5, 8775.0], [38.6, 8776.0], [38.7, 8784.0], [38.8, 8790.0], [38.9, 8790.0], [39.0, 8794.0], [39.1, 8797.0], [39.2, 8797.0], [39.3, 8797.0], [39.4, 8837.0], [39.5, 8852.0], [39.6, 8852.0], [39.7, 8853.0], [39.8, 8865.0], [39.9, 8865.0], [40.0, 8871.0], [40.1, 8884.0], [40.2, 8891.0], [40.3, 8891.0], [40.4, 8891.0], [40.5, 8914.0], [40.6, 8914.0], [40.7, 8932.0], [40.8, 8945.0], [40.9, 8959.0], [41.0, 8959.0], [41.1, 8964.0], [41.2, 8981.0], [41.3, 8981.0], [41.4, 8987.0], [41.5, 8987.0], [41.6, 9003.0], [41.7, 9003.0], [41.8, 9005.0], [41.9, 9016.0], [42.0, 9016.0], [42.1, 9019.0], [42.2, 9025.0], [42.3, 9032.0], [42.4, 9032.0], [42.5, 9043.0], [42.6, 9049.0], [42.7, 9049.0], [42.8, 9051.0], [42.9, 9055.0], [43.0, 9055.0], [43.1, 9055.0], [43.2, 9063.0], [43.3, 9070.0], [43.4, 9070.0], [43.5, 9073.0], [43.6, 9094.0], [43.7, 9099.0], [43.8, 9099.0], [43.9, 9104.0], [44.0, 9111.0], [44.1, 9111.0], [44.2, 9115.0], [44.3, 9122.0], [44.4, 9125.0], [44.5, 9125.0], [44.6, 9130.0], [44.7, 9135.0], [44.8, 9135.0], [44.9, 9140.0], [45.0, 9152.0], [45.1, 9158.0], [45.2, 9158.0], [45.3, 9160.0], [45.4, 9170.0], [45.5, 9170.0], [45.6, 9176.0], [45.7, 9188.0], [45.8, 9191.0], [45.9, 9191.0], [46.0, 9221.0], [46.1, 9223.0], [46.2, 9223.0], [46.3, 9223.0], [46.4, 9225.0], [46.5, 9227.0], [46.6, 9227.0], [46.7, 9230.0], [46.8, 9233.0], [46.9, 9233.0], [47.0, 9234.0], [47.1, 9235.0], [47.2, 9237.0], [47.3, 9237.0], [47.4, 9240.0], [47.5, 9255.0], [47.6, 9255.0], [47.7, 9259.0], [47.8, 9264.0], [47.9, 9287.0], [48.0, 9287.0], [48.1, 9294.0], [48.2, 9305.0], [48.3, 9305.0], [48.4, 9307.0], [48.5, 9313.0], [48.6, 9318.0], [48.7, 9318.0], [48.8, 9322.0], [48.9, 9324.0], [49.0, 9324.0], [49.1, 9325.0], [49.2, 9337.0], [49.3, 9346.0], [49.4, 9346.0], [49.5, 9347.0], [49.6, 9351.0], [49.7, 9351.0], [49.8, 9363.0], [49.9, 9382.0], [50.0, 9391.0], [50.1, 9391.0], [50.2, 9398.0], [50.3, 9399.0], [50.4, 9399.0], [50.5, 9406.0], [50.6, 9406.0], [50.7, 9406.0], [50.8, 9411.0], [50.9, 9411.0], [51.0, 9412.0], [51.1, 9412.0], [51.2, 9415.0], [51.3, 9420.0], [51.4, 9420.0], [51.5, 9423.0], [51.6, 9426.0], [51.7, 9429.0], [51.8, 9429.0], [51.9, 9430.0], [52.0, 9442.0], [52.1, 9442.0], [52.2, 9447.0], [52.3, 9459.0], [52.4, 9464.0], [52.5, 9464.0], [52.6, 9468.0], [52.7, 9471.0], [52.8, 9471.0], [52.9, 9475.0], [53.0, 9479.0], [53.1, 9487.0], [53.2, 9487.0], [53.3, 9504.0], [53.4, 9514.0], [53.5, 9514.0], [53.6, 9521.0], [53.7, 9525.0], [53.8, 9525.0], [53.9, 9525.0], [54.0, 9533.0], [54.1, 9533.0], [54.2, 9533.0], [54.3, 9533.0], [54.4, 9544.0], [54.5, 9555.0], [54.6, 9555.0], [54.7, 9565.0], [54.8, 9567.0], [54.9, 9567.0], [55.0, 9578.0], [55.1, 9585.0], [55.2, 9588.0], [55.3, 9588.0], [55.4, 9591.0], [55.5, 9608.0], [55.6, 9608.0], [55.7, 9612.0], [55.8, 9625.0], [55.9, 9630.0], [56.0, 9630.0], [56.1, 9643.0], [56.2, 9652.0], [56.3, 9652.0], [56.4, 9652.0], [56.5, 9653.0], [56.6, 9656.0], [56.7, 9656.0], [56.8, 9659.0], [56.9, 9663.0], [57.0, 9663.0], [57.1, 9672.0], [57.2, 9673.0], [57.3, 9674.0], [57.4, 9674.0], [57.5, 9681.0], [57.6, 9685.0], [57.7, 9685.0], [57.8, 9700.0], [57.9, 9705.0], [58.0, 9707.0], [58.1, 9707.0], [58.2, 9744.0], [58.3, 9753.0], [58.4, 9753.0], [58.5, 9754.0], [58.6, 9758.0], [58.7, 9760.0], [58.8, 9760.0], [58.9, 9766.0], [59.0, 9774.0], [59.1, 9774.0], [59.2, 9777.0], [59.3, 9790.0], [59.4, 9792.0], [59.5, 9792.0], [59.6, 9802.0], [59.7, 9806.0], [59.8, 9806.0], [59.9, 9832.0], [60.0, 9845.0], [60.1, 9846.0], [60.2, 9846.0], [60.3, 9847.0], [60.4, 9856.0], [60.5, 9856.0], [60.6, 9857.0], [60.7, 9867.0], [60.8, 9914.0], [60.9, 9914.0], [61.0, 9919.0], [61.1, 9923.0], [61.2, 9923.0], [61.3, 9927.0], [61.4, 9928.0], [61.5, 9937.0], [61.6, 9937.0], [61.7, 9940.0], [61.8, 9945.0], [61.9, 9945.0], [62.0, 9955.0], [62.1, 9961.0], [62.2, 9976.0], [62.3, 9976.0], [62.4, 9979.0], [62.5, 9992.0], [62.6, 9992.0], [62.7, 10001.0], [62.8, 10007.0], [62.9, 10010.0], [63.0, 10010.0], [63.1, 10031.0], [63.2, 10032.0], [63.3, 10032.0], [63.4, 10046.0], [63.5, 10068.0], [63.6, 10081.0], [63.7, 10081.0], [63.8, 10086.0], [63.9, 10104.0], [64.0, 10104.0], [64.1, 10114.0], [64.2, 10161.0], [64.3, 10164.0], [64.4, 10164.0], [64.5, 10174.0], [64.6, 10175.0], [64.7, 10175.0], [64.8, 10177.0], [64.9, 10182.0], [65.0, 10187.0], [65.1, 10187.0], [65.2, 10200.0], [65.3, 10222.0], [65.4, 10222.0], [65.5, 10234.0], [65.6, 10243.0], [65.7, 10253.0], [65.8, 10253.0], [65.9, 10253.0], [66.0, 10274.0], [66.1, 10274.0], [66.2, 10287.0], [66.3, 10297.0], [66.4, 10337.0], [66.5, 10337.0], [66.6, 10339.0], [66.7, 10352.0], [66.8, 10352.0], [66.9, 10386.0], [67.0, 10458.0], [67.1, 10464.0], [67.2, 10464.0], [67.3, 10469.0], [67.4, 10488.0], [67.5, 10488.0], [67.6, 10545.0], [67.7, 10558.0], [67.8, 10572.0], [67.9, 10572.0], [68.0, 10578.0], [68.1, 10587.0], [68.2, 10587.0], [68.3, 10593.0], [68.4, 10605.0], [68.5, 10606.0], [68.6, 10606.0], [68.7, 10615.0], [68.8, 10622.0], [68.9, 10622.0], [69.0, 10628.0], [69.1, 10637.0], [69.2, 10649.0], [69.3, 10649.0], [69.4, 10655.0], [69.5, 10669.0], [69.6, 10669.0], [69.7, 10681.0], [69.8, 10685.0], [69.9, 10689.0], [70.0, 10689.0], [70.1, 10696.0], [70.2, 10716.0], [70.3, 10716.0], [70.4, 10724.0], [70.5, 10724.0], [70.6, 10743.0], [70.7, 10743.0], [70.8, 10805.0], [70.9, 10814.0], [71.0, 10814.0], [71.1, 10873.0], [71.2, 10930.0], [71.3, 10943.0], [71.4, 10943.0], [71.5, 10955.0], [71.6, 10966.0], [71.7, 10966.0], [71.8, 10972.0], [71.9, 10972.0], [72.0, 10980.0], [72.1, 10980.0], [72.2, 10996.0], [72.3, 11002.0], [72.4, 11002.0], [72.5, 11015.0], [72.6, 11037.0], [72.7, 11042.0], [72.8, 11042.0], [72.9, 11047.0], [73.0, 11069.0], [73.1, 11069.0], [73.2, 11085.0], [73.3, 11091.0], [73.4, 11099.0], [73.5, 11099.0], [73.6, 11099.0], [73.7, 11146.0], [73.8, 11146.0], [73.9, 11154.0], [74.0, 11160.0], [74.1, 11165.0], [74.2, 11165.0], [74.3, 11188.0], [74.4, 11195.0], [74.5, 11195.0], [74.6, 11225.0], [74.7, 11234.0], [74.8, 11260.0], [74.9, 11260.0], [75.0, 11264.0], [75.1, 11314.0], [75.2, 11314.0], [75.3, 11319.0], [75.4, 11334.0], [75.5, 11335.0], [75.6, 11335.0], [75.7, 11374.0], [75.8, 11427.0], [75.9, 11427.0], [76.0, 11439.0], [76.1, 11475.0], [76.2, 11545.0], [76.3, 11545.0], [76.4, 11596.0], [76.5, 11600.0], [76.6, 11600.0], [76.7, 11613.0], [76.8, 11626.0], [76.9, 11654.0], [77.0, 11654.0], [77.1, 11726.0], [77.2, 11765.0], [77.3, 11765.0], [77.4, 11780.0], [77.5, 11827.0], [77.6, 11854.0], [77.7, 11854.0], [77.8, 11855.0], [77.9, 11859.0], [78.0, 11859.0], [78.1, 11896.0], [78.2, 11909.0], [78.3, 11919.0], [78.4, 11919.0], [78.5, 11923.0], [78.6, 11951.0], [78.7, 11951.0], [78.8, 11967.0], [78.9, 11977.0], [79.0, 11977.0], [79.1, 11977.0], [79.2, 11989.0], [79.3, 12003.0], [79.4, 12003.0], [79.5, 12031.0], [79.6, 12108.0], [79.7, 12132.0], [79.8, 12132.0], [79.9, 12184.0], [80.0, 12188.0], [80.1, 12188.0], [80.2, 12198.0], [80.3, 12216.0], [80.4, 12235.0], [80.5, 12235.0], [80.6, 12265.0], [80.7, 12267.0], [80.8, 12267.0], [80.9, 12308.0], [81.0, 12323.0], [81.1, 12326.0], [81.2, 12326.0], [81.3, 12342.0], [81.4, 12354.0], [81.5, 12354.0], [81.6, 12435.0], [81.7, 12457.0], [81.8, 12501.0], [81.9, 12501.0], [82.0, 12522.0], [82.1, 12526.0], [82.2, 12526.0], [82.3, 12554.0], [82.4, 12652.0], [82.5, 12689.0], [82.6, 12689.0], [82.7, 12692.0], [82.8, 12709.0], [82.9, 12709.0], [83.0, 12747.0], [83.1, 12757.0], [83.2, 12771.0], [83.3, 12771.0], [83.4, 12799.0], [83.5, 12853.0], [83.6, 12853.0], [83.7, 12870.0], [83.8, 12873.0], [83.9, 12925.0], [84.0, 12925.0], [84.1, 12962.0], [84.2, 12986.0], [84.3, 12986.0], [84.4, 13021.0], [84.5, 13050.0], [84.6, 13065.0], [84.7, 13065.0], [84.8, 13108.0], [84.9, 13203.0], [85.0, 13203.0], [85.1, 13216.0], [85.2, 13277.0], [85.3, 13303.0], [85.4, 13303.0], [85.5, 13321.0], [85.6, 13321.0], [85.7, 13321.0], [85.8, 13354.0], [85.9, 13371.0], [86.0, 13447.0], [86.1, 13447.0], [86.2, 13451.0], [86.3, 13592.0], [86.4, 13592.0], [86.5, 13602.0], [86.6, 13727.0], [86.7, 13739.0], [86.8, 13739.0], [86.9, 13750.0], [87.0, 13768.0], [87.1, 13768.0], [87.2, 13830.0], [87.3, 13851.0], [87.4, 13864.0], [87.5, 13864.0], [87.6, 13943.0], [87.7, 13960.0], [87.8, 13960.0], [87.9, 13985.0], [88.0, 14111.0], [88.1, 14190.0], [88.2, 14190.0], [88.3, 14199.0], [88.4, 14260.0], [88.5, 14260.0], [88.6, 14356.0], [88.7, 14403.0], [88.8, 14433.0], [88.9, 14433.0], [89.0, 14519.0], [89.1, 14648.0], [89.2, 14648.0], [89.3, 14699.0], [89.4, 14712.0], [89.5, 14788.0], [89.6, 14788.0], [89.7, 14793.0], [89.8, 14846.0], [89.9, 14846.0], [90.0, 14869.0], [90.1, 14882.0], [90.2, 14962.0], [90.3, 14962.0], [90.4, 15005.0], [90.5, 15124.0], [90.6, 15124.0], [90.7, 15168.0], [90.8, 15188.0], [90.9, 15265.0], [91.0, 15265.0], [91.1, 15286.0], [91.2, 15333.0], [91.3, 15333.0], [91.4, 15335.0], [91.5, 15363.0], [91.6, 15411.0], [91.7, 15411.0], [91.8, 15476.0], [91.9, 15488.0], [92.0, 15488.0], [92.1, 15512.0], [92.2, 15744.0], [92.3, 15931.0], [92.4, 15931.0], [92.5, 16038.0], [92.6, 16184.0], [92.7, 16184.0], [92.8, 16267.0], [92.9, 16287.0], [93.0, 16320.0], [93.1, 16320.0], [93.2, 16448.0], [93.3, 16679.0], [93.4, 16679.0], [93.5, 16754.0], [93.6, 17130.0], [93.7, 17417.0], [93.8, 17417.0], [93.9, 17465.0], [94.0, 17517.0], [94.1, 17517.0], [94.2, 17552.0], [94.3, 17601.0], [94.4, 17659.0], [94.5, 17659.0], [94.6, 17672.0], [94.7, 17691.0], [94.8, 17691.0], [94.9, 18147.0], [95.0, 19302.0], [95.1, 19445.0], [95.2, 19445.0], [95.3, 19815.0], [95.4, 19964.0], [95.5, 19964.0], [95.6, 20548.0], [95.7, 21310.0], [95.8, 22458.0], [95.9, 22458.0], [96.0, 22759.0], [96.1, 23075.0], [96.2, 23075.0], [96.3, 23326.0], [96.4, 23971.0], [96.5, 24298.0], [96.6, 24298.0], [96.7, 24452.0], [96.8, 24637.0], [96.9, 24637.0], [97.0, 25222.0], [97.1, 25519.0], [97.2, 25644.0], [97.3, 25644.0], [97.4, 26196.0], [97.5, 26247.0], [97.6, 26247.0], [97.7, 26893.0], [97.8, 27368.0], [97.9, 28187.0], [98.0, 28187.0], [98.1, 28359.0], [98.2, 28519.0], [98.3, 28519.0], [98.4, 29214.0], [98.5, 29327.0], [98.6, 29596.0], [98.7, 29596.0], [98.8, 29685.0], [98.9, 29794.0], [99.0, 29794.0], [99.1, 29852.0], [99.2, 30091.0], [99.3, 30784.0], [99.4, 30784.0], [99.5, 31006.0], [99.6, 31646.0], [99.7, 31646.0], [99.8, 32307.0], [99.9, 34526.0], [100.0, 34526.0]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 300.0, "maxY": 40.0, "series": [{"data": [[34500.0, 2.0], [300.0, 2.0], [500.0, 6.0], [700.0, 2.0], [800.0, 2.0], [900.0, 4.0], [1000.0, 2.0], [1100.0, 6.0], [1200.0, 4.0], [1400.0, 2.0], [1600.0, 6.0], [1700.0, 4.0], [1800.0, 4.0], [1900.0, 4.0], [2000.0, 6.0], [2200.0, 4.0], [2300.0, 8.0], [2400.0, 2.0], [2600.0, 2.0], [2700.0, 4.0], [2800.0, 4.0], [3000.0, 12.0], [3100.0, 8.0], [3300.0, 6.0], [3200.0, 4.0], [3400.0, 6.0], [3500.0, 4.0], [3600.0, 6.0], [3700.0, 2.0], [3800.0, 4.0], [4000.0, 4.0], [4300.0, 10.0], [4200.0, 2.0], [4500.0, 4.0], [4600.0, 6.0], [4400.0, 6.0], [4800.0, 6.0], [4700.0, 6.0], [4900.0, 4.0], [5100.0, 2.0], [5000.0, 2.0], [5300.0, 4.0], [5200.0, 6.0], [5400.0, 8.0], [5600.0, 10.0], [5500.0, 4.0], [5800.0, 8.0], [5700.0, 4.0], [6000.0, 10.0], [6100.0, 8.0], [5900.0, 2.0], [6200.0, 8.0], [6300.0, 8.0], [6500.0, 2.0], [6600.0, 6.0], [6800.0, 10.0], [6900.0, 8.0], [6700.0, 6.0], [7000.0, 14.0], [7100.0, 6.0], [7200.0, 4.0], [7400.0, 12.0], [7300.0, 14.0], [7600.0, 12.0], [7500.0, 10.0], [7900.0, 14.0], [7800.0, 10.0], [7700.0, 6.0], [8000.0, 38.0], [8100.0, 28.0], [8300.0, 12.0], [8400.0, 18.0], [8500.0, 14.0], [8600.0, 18.0], [8200.0, 18.0], [8700.0, 20.0], [8800.0, 16.0], [8900.0, 16.0], [9000.0, 32.0], [9100.0, 30.0], [9200.0, 32.0], [9600.0, 32.0], [9300.0, 32.0], [9700.0, 26.0], [9500.0, 32.0], [9400.0, 40.0], [10000.0, 18.0], [9900.0, 26.0], [10200.0, 18.0], [9800.0, 18.0], [10100.0, 18.0], [10300.0, 8.0], [10400.0, 8.0], [10500.0, 12.0], [10600.0, 26.0], [10700.0, 8.0], [10900.0, 16.0], [11000.0, 20.0], [11200.0, 8.0], [11100.0, 12.0], [10800.0, 6.0], [11400.0, 6.0], [11500.0, 4.0], [11700.0, 6.0], [11300.0, 10.0], [11600.0, 8.0], [11900.0, 16.0], [11800.0, 10.0], [12100.0, 10.0], [12000.0, 4.0], [12200.0, 8.0], [12300.0, 10.0], [12700.0, 10.0], [12400.0, 4.0], [12500.0, 8.0], [12600.0, 6.0], [12800.0, 6.0], [13300.0, 10.0], [12900.0, 6.0], [13200.0, 6.0], [13000.0, 6.0], [13100.0, 2.0], [13800.0, 6.0], [13700.0, 8.0], [13400.0, 4.0], [13600.0, 2.0], [13500.0, 2.0], [13900.0, 6.0], [14100.0, 6.0], [14300.0, 2.0], [14200.0, 2.0], [14800.0, 6.0], [14400.0, 4.0], [14600.0, 4.0], [14500.0, 2.0], [14700.0, 6.0], [15100.0, 6.0], [14900.0, 2.0], [15200.0, 4.0], [15300.0, 6.0], [15000.0, 2.0], [15400.0, 6.0], [15500.0, 2.0], [15700.0, 2.0], [16200.0, 4.0], [16000.0, 2.0], [16100.0, 2.0], [16300.0, 2.0], [15900.0, 2.0], [17100.0, 2.0], [17400.0, 4.0], [16600.0, 2.0], [16700.0, 2.0], [16400.0, 2.0], [17500.0, 4.0], [17600.0, 8.0], [18100.0, 2.0], [19300.0, 2.0], [19400.0, 2.0], [19800.0, 2.0], [19900.0, 2.0], [20500.0, 2.0], [21300.0, 2.0], [22400.0, 2.0], [22700.0, 2.0], [23300.0, 2.0], [23000.0, 2.0], [24400.0, 2.0], [23900.0, 2.0], [24200.0, 2.0], [25200.0, 2.0], [24600.0, 2.0], [25500.0, 2.0], [26100.0, 2.0], [26200.0, 2.0], [25600.0, 2.0], [26800.0, 2.0], [27300.0, 2.0], [28100.0, 2.0], [28300.0, 2.0], [28500.0, 2.0], [29500.0, 2.0], [29300.0, 2.0], [29200.0, 2.0], [29600.0, 2.0], [30000.0, 2.0], [29700.0, 2.0], [29800.0, 2.0], [30700.0, 2.0], [31600.0, 2.0], [31000.0, 2.0], [32300.0, 2.0]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 34500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 699.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 14.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 699.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 87.482993197279, "minX": 1.57795032E12, "maxY": 88.17142857142859, "series": [{"data": [[1.57795038E12, 88.17142857142859], [1.57795032E12, 87.482993197279]], "isOverall": false, "label": "Login Thread Group(\u767B\u5F55)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57795038E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2461.666666666667, "minX": 1.0, "maxY": 11282.693761814759, "series": [{"data": [[2.0, 3056.0], [3.0, 2791.0], [4.0, 4302.0], [5.0, 5420.0], [6.0, 3333.5], [7.0, 5876.0], [8.0, 2461.666666666667], [9.0, 3140.0], [10.0, 5785.0], [11.0, 8269.0], [12.0, 4453.5], [13.0, 8344.0], [14.0, 4462.5], [15.0, 4521.5], [16.0, 8077.0], [17.0, 4597.5], [18.0, 4555.5], [19.0, 7410.0], [20.0, 2563.75], [21.0, 6772.0], [22.0, 3492.6666666666665], [23.0, 8048.0], [24.0, 8086.0], [25.0, 4146.5], [26.0, 8085.0], [27.0, 8124.0], [28.0, 4867.5], [29.0, 4540.0], [30.0, 3823.3333333333335], [31.0, 7978.0], [32.0, 4917.5], [33.0, 8148.0], [34.0, 3945.666666666667], [35.0, 10182.0], [36.0, 4688.666666666667], [37.0, 7983.0], [38.0, 6087.5], [39.0, 4645.333333333334], [41.0, 3834.0], [40.0, 9608.0], [43.0, 8432.0], [42.0, 8344.0], [44.0, 4798.666666666666], [45.0, 9945.0], [46.0, 5375.0], [47.0, 4953.0], [49.0, 8871.0], [48.0, 9659.0], [50.0, 4329.0], [51.0, 8192.0], [53.0, 6241.5], [52.0, 7549.0], [54.0, 5345.5], [55.0, 6025.0], [56.0, 5905.0], [57.0, 9565.0], [59.0, 4477.0], [58.0, 10187.0], [61.0, 9643.0], [60.0, 9111.0], [62.0, 4623.25], [63.0, 9325.0], [65.0, 6173.5], [66.0, 4680.0], [67.0, 8142.0], [64.0, 9227.0], [69.0, 4781.0], [71.0, 9867.0], [70.0, 9324.0], [68.0, 8776.0], [72.0, 5403.333333333333], [73.0, 6261.5], [75.0, 9043.0], [74.0, 8737.0], [76.0, 5354.25], [77.0, 5656.5], [79.0, 6525.0], [78.0, 9140.0], [80.0, 6094.333333333334], [83.0, 9766.0], [82.0, 8964.0], [81.0, 9191.0], [84.0, 4569.5], [87.0, 6390.333333333333], [86.0, 9411.0], [88.0, 6219.333333333333], [89.0, 6917.0], [91.0, 6703.0], [90.0, 9135.0], [92.0, 6624.5], [93.0, 6412.2], [95.0, 8277.0], [94.0, 8637.0], [96.0, 6694.166666666667], [99.0, 9790.5], [98.0, 9466.0], [97.0, 9953.0], [100.0, 11282.693761814759], [1.0, 3025.0]], "isOverall": false, "label": "Login", "isController": false}, {"data": [[87.88795518207277, 9917.644257703081]], "isOverall": false, "label": "Login-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.57795032E12, "maxY": 5641.316666666667, "series": [{"data": [[1.57795038E12, 5641.316666666667], [1.57795032E12, 3947.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57795038E12, 0.0], [1.57795032E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57795038E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7202.581632653064, "minX": 1.57795032E12, "maxY": 11818.188095238093, "series": [{"data": [[1.57795038E12, 11818.188095238093], [1.57795032E12, 7202.581632653064]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57795038E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7202.47619047619, "minX": 1.57795032E12, "maxY": 11810.545238095254, "series": [{"data": [[1.57795038E12, 11810.545238095254], [1.57795032E12, 7202.47619047619]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57795038E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 34.504761904761935, "minX": 1.57795032E12, "maxY": 34.823129251700664, "series": [{"data": [[1.57795038E12, 34.504761904761935], [1.57795032E12, 34.823129251700664]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57795038E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 335.0, "minX": 1.57795032E12, "maxY": 34526.0, "series": [{"data": [[1.57795038E12, 34526.0], [1.57795032E12, 14882.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57795038E12, 2791.0], [1.57795032E12, 335.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57795038E12, 17548.5], [1.57795032E12, 11570.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57795038E12, 30959.380000000005], [1.57795032E12, 13831.050000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57795038E12, 25504.149999999998], [1.57795032E12, 12365.25]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57795038E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5311.0, "minX": 1.0, "maxY": 19815.0, "series": [{"data": [[8.0, 8135.0], [2.0, 11085.0], [9.0, 8170.0], [10.0, 6650.5], [43.0, 8086.0], [11.0, 7687.5], [12.0, 9077.0], [3.0, 13203.0], [13.0, 10904.5], [15.0, 9234.0], [4.0, 10377.5], [16.0, 9793.5], [1.0, 11349.0], [5.0, 11882.0], [22.0, 9137.5], [23.0, 9533.0], [6.0, 11379.5], [24.0, 9949.5], [7.0, 5311.0], [29.0, 9043.0], [31.0, 19815.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5311.0, "minX": 1.0, "maxY": 19815.0, "series": [{"data": [[8.0, 8134.5], [2.0, 11084.5], [9.0, 8170.0], [10.0, 6650.5], [43.0, 8086.0], [11.0, 7687.5], [12.0, 9076.5], [3.0, 13203.0], [13.0, 10904.5], [15.0, 9225.0], [4.0, 10377.5], [16.0, 9793.5], [1.0, 11349.0], [5.0, 11882.0], [22.0, 9137.0], [23.0, 9533.0], [6.0, 11379.5], [24.0, 9949.5], [7.0, 5311.0], [29.0, 9043.0], [31.0, 19815.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.333333333333333, "minX": 1.57795032E12, "maxY": 6.566666666666666, "series": [{"data": [[1.57795038E12, 5.333333333333333], [1.57795032E12, 6.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57795038E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.9, "minX": 1.57795032E12, "maxY": 7.0, "series": [{"data": [[1.57795038E12, 7.0], [1.57795032E12, 4.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57795038E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.8, "minX": 1.57795032E12, "maxY": 14.0, "series": [{"data": [[1.57795038E12, 14.0], [1.57795032E12, 9.8]], "isOverall": false, "label": "Login-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57795038E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.8, "minX": 1.57795032E12, "maxY": 14.0, "series": [{"data": [[1.57795038E12, 14.0], [1.57795032E12, 9.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57795038E12, "title": "Total Transactions Per Second"}},
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

