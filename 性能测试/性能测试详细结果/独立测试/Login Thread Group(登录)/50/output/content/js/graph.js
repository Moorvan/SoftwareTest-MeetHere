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
        data: {"result": {"minY": 298.0, "minX": 0.0, "maxY": 9602.0, "series": [{"data": [[0.0, 298.0], [0.1, 298.0], [0.2, 300.0], [0.3, 308.0], [0.4, 308.0], [0.5, 350.0], [0.6, 353.0], [0.7, 353.0], [0.8, 426.0], [0.9, 452.0], [1.0, 456.0], [1.1, 456.0], [1.2, 510.0], [1.3, 512.0], [1.4, 512.0], [1.5, 512.0], [1.6, 525.0], [1.7, 526.0], [1.8, 526.0], [1.9, 574.0], [2.0, 607.0], [2.1, 607.0], [2.2, 618.0], [2.3, 712.0], [2.4, 712.0], [2.5, 800.0], [2.6, 1002.0], [2.7, 1045.0], [2.8, 1045.0], [2.9, 1067.0], [3.0, 1070.0], [3.1, 1070.0], [3.2, 1075.0], [3.3, 1081.0], [3.4, 1083.0], [3.5, 1083.0], [3.6, 1196.0], [3.7, 1271.0], [3.8, 1271.0], [3.9, 1288.0], [4.0, 1374.0], [4.1, 1403.0], [4.2, 1403.0], [4.3, 1408.0], [4.4, 1445.0], [4.5, 1445.0], [4.6, 1447.0], [4.7, 1447.0], [4.8, 1447.0], [4.9, 1458.0], [5.0, 1462.0], [5.1, 1464.0], [5.2, 1464.0], [5.3, 1570.0], [5.4, 1646.0], [5.5, 1646.0], [5.6, 1716.0], [5.7, 1756.0], [5.8, 1795.0], [5.9, 1795.0], [6.0, 1815.0], [6.1, 1831.0], [6.2, 1831.0], [6.3, 1846.0], [6.4, 1847.0], [6.5, 1869.0], [6.6, 1869.0], [6.7, 1960.0], [6.8, 2014.0], [6.9, 2014.0], [7.0, 2031.0], [7.1, 2035.0], [7.2, 2035.0], [7.3, 2039.0], [7.4, 2051.0], [7.5, 2054.0], [7.6, 2054.0], [7.7, 2058.0], [7.8, 2071.0], [7.9, 2071.0], [8.0, 2086.0], [8.1, 2091.0], [8.2, 2135.0], [8.3, 2135.0], [8.4, 2174.0], [8.5, 2274.0], [8.6, 2274.0], [8.7, 2337.0], [8.8, 2340.0], [8.9, 2361.0], [9.0, 2361.0], [9.1, 2362.0], [9.2, 2389.0], [9.3, 2389.0], [9.4, 2483.0], [9.5, 2509.0], [9.6, 2509.0], [9.7, 2543.0], [9.8, 2552.0], [9.9, 2586.0], [10.0, 2586.0], [10.1, 2601.0], [10.2, 2644.0], [10.3, 2644.0], [10.4, 2758.0], [10.5, 2798.0], [10.6, 2823.0], [10.7, 2823.0], [10.8, 2900.0], [10.9, 2904.0], [11.0, 2904.0], [11.1, 2909.0], [11.2, 2931.0], [11.3, 2958.0], [11.4, 2958.0], [11.5, 2962.0], [11.6, 2996.0], [11.7, 2996.0], [11.8, 3040.0], [11.9, 3125.0], [12.0, 3125.0], [12.1, 3195.0], [12.2, 3225.0], [12.3, 3246.0], [12.4, 3246.0], [12.5, 3263.0], [12.6, 3268.0], [12.7, 3268.0], [12.8, 3269.0], [12.9, 3275.0], [13.0, 3293.0], [13.1, 3293.0], [13.2, 3304.0], [13.3, 3310.0], [13.4, 3310.0], [13.5, 3379.0], [13.6, 3384.0], [13.7, 3384.0], [13.8, 3394.0], [13.9, 3398.0], [14.0, 3568.0], [14.1, 3568.0], [14.2, 3650.0], [14.3, 3653.0], [14.4, 3653.0], [14.5, 3662.0], [14.6, 3669.0], [14.7, 3671.0], [14.8, 3671.0], [14.9, 3688.0], [15.0, 3708.0], [15.1, 3708.0], [15.2, 3764.0], [15.3, 3876.0], [15.4, 3877.0], [15.5, 3877.0], [15.6, 3884.0], [15.7, 3906.0], [15.8, 3906.0], [15.9, 3988.0], [16.0, 3997.0], [16.1, 3997.0], [16.2, 4006.0], [16.3, 4072.0], [16.4, 4072.0], [16.5, 4072.0], [16.6, 4098.0], [16.7, 4119.0], [16.8, 4119.0], [16.9, 4135.0], [17.0, 4154.0], [17.1, 4157.0], [17.2, 4157.0], [17.3, 4166.0], [17.4, 4177.0], [17.5, 4177.0], [17.6, 4180.0], [17.7, 4185.0], [17.8, 4189.0], [17.9, 4189.0], [18.0, 4197.0], [18.1, 4213.0], [18.2, 4213.0], [18.3, 4222.0], [18.4, 4238.0], [18.5, 4238.0], [18.6, 4243.0], [18.7, 4249.0], [18.8, 4249.0], [18.9, 4249.0], [19.0, 4249.0], [19.1, 4250.0], [19.2, 4250.0], [19.3, 4266.0], [19.4, 4266.0], [19.5, 4287.0], [19.6, 4287.0], [19.7, 4291.0], [19.8, 4298.0], [19.9, 4298.0], [20.0, 4304.0], [20.1, 4305.0], [20.2, 4307.0], [20.3, 4307.0], [20.4, 4311.0], [20.5, 4311.0], [20.6, 4311.0], [20.7, 4329.0], [20.8, 4332.0], [20.9, 4332.0], [21.0, 4336.0], [21.1, 4342.0], [21.2, 4349.0], [21.3, 4349.0], [21.4, 4350.0], [21.5, 4352.0], [21.6, 4352.0], [21.7, 4362.0], [21.8, 4362.0], [21.9, 4377.0], [22.0, 4377.0], [22.1, 4380.0], [22.2, 4387.0], [22.3, 4387.0], [22.4, 4398.0], [22.5, 4404.0], [22.6, 4405.0], [22.7, 4405.0], [22.8, 4411.0], [22.9, 4413.0], [23.0, 4413.0], [23.1, 4414.0], [23.2, 4428.0], [23.3, 4428.0], [23.4, 4430.0], [23.5, 4433.0], [23.6, 4434.0], [23.7, 4434.0], [23.8, 4436.0], [23.9, 4439.0], [24.0, 4439.0], [24.1, 4443.0], [24.2, 4454.0], [24.3, 4466.0], [24.4, 4466.0], [24.5, 4476.0], [24.6, 4476.0], [24.7, 4476.0], [24.8, 4477.0], [24.9, 4479.0], [25.0, 4479.0], [25.1, 4479.0], [25.2, 4483.0], [25.3, 4486.0], [25.4, 4486.0], [25.5, 4495.0], [25.6, 4495.0], [25.7, 4495.0], [25.8, 4496.0], [25.9, 4505.0], [26.0, 4510.0], [26.1, 4510.0], [26.2, 4514.0], [26.3, 4516.0], [26.4, 4516.0], [26.5, 4519.0], [26.6, 4522.0], [26.7, 4530.0], [26.8, 4530.0], [26.9, 4544.0], [27.0, 4544.0], [27.1, 4544.0], [27.2, 4547.0], [27.3, 4553.0], [27.4, 4553.0], [27.5, 4554.0], [27.6, 4554.0], [27.7, 4557.0], [27.8, 4557.0], [27.9, 4557.0], [28.0, 4558.0], [28.1, 4558.0], [28.2, 4565.0], [28.3, 4568.0], [28.4, 4568.0], [28.5, 4568.0], [28.6, 4569.0], [28.7, 4577.0], [28.8, 4577.0], [28.9, 4579.0], [29.0, 4583.0], [29.1, 4585.0], [29.2, 4585.0], [29.3, 4586.0], [29.4, 4591.0], [29.5, 4591.0], [29.6, 4592.0], [29.7, 4593.0], [29.8, 4593.0], [29.9, 4594.0], [30.0, 4596.0], [30.1, 4597.0], [30.2, 4597.0], [30.3, 4597.0], [30.4, 4598.0], [30.5, 4598.0], [30.6, 4598.0], [30.7, 4599.0], [30.8, 4600.0], [30.9, 4600.0], [31.0, 4601.0], [31.1, 4601.0], [31.2, 4601.0], [31.3, 4601.0], [31.4, 4602.0], [31.5, 4602.0], [31.6, 4602.0], [31.7, 4604.0], [31.8, 4606.0], [31.9, 4606.0], [32.0, 4606.0], [32.1, 4606.0], [32.2, 4606.0], [32.3, 4606.0], [32.4, 4608.0], [32.5, 4608.0], [32.6, 4608.0], [32.7, 4611.0], [32.8, 4615.0], [32.9, 4615.0], [33.0, 4617.0], [33.1, 4619.0], [33.2, 4619.0], [33.3, 4619.0], [33.4, 4624.0], [33.5, 4627.0], [33.6, 4627.0], [33.7, 4629.0], [33.8, 4634.0], [33.9, 4638.0], [34.0, 4638.0], [34.1, 4639.0], [34.2, 4642.0], [34.3, 4642.0], [34.4, 4642.0], [34.5, 4644.0], [34.6, 4644.0], [34.7, 4647.0], [34.8, 4652.0], [34.9, 4654.0], [35.0, 4654.0], [35.1, 4657.0], [35.2, 4659.0], [35.3, 4659.0], [35.4, 4661.0], [35.5, 4662.0], [35.6, 4664.0], [35.7, 4664.0], [35.8, 4664.0], [35.9, 4664.0], [36.0, 4664.0], [36.1, 4665.0], [36.2, 4667.0], [36.3, 4668.0], [36.4, 4668.0], [36.5, 4668.0], [36.6, 4669.0], [36.7, 4669.0], [36.8, 4681.0], [36.9, 4683.0], [37.0, 4683.0], [37.1, 4684.0], [37.2, 4685.0], [37.3, 4686.0], [37.4, 4686.0], [37.5, 4688.0], [37.6, 4689.0], [37.7, 4689.0], [37.8, 4689.0], [37.9, 4693.0], [38.0, 4695.0], [38.1, 4695.0], [38.2, 4708.0], [38.3, 4709.0], [38.4, 4709.0], [38.5, 4709.0], [38.6, 4714.0], [38.7, 4714.0], [38.8, 4716.0], [38.9, 4726.0], [39.0, 4738.0], [39.1, 4738.0], [39.2, 4740.0], [39.3, 4743.0], [39.4, 4743.0], [39.5, 4749.0], [39.6, 4750.0], [39.7, 4758.0], [39.8, 4758.0], [39.9, 4761.0], [40.0, 4762.0], [40.1, 4762.0], [40.2, 4765.0], [40.3, 4767.0], [40.4, 4768.0], [40.5, 4768.0], [40.6, 4769.0], [40.7, 4774.0], [40.8, 4774.0], [40.9, 4774.0], [41.0, 4777.0], [41.1, 4777.0], [41.2, 4778.0], [41.3, 4781.0], [41.4, 4784.0], [41.5, 4784.0], [41.6, 4789.0], [41.7, 4791.0], [41.8, 4791.0], [41.9, 4800.0], [42.0, 4801.0], [42.1, 4813.0], [42.2, 4813.0], [42.3, 4816.0], [42.4, 4817.0], [42.5, 4817.0], [42.6, 4822.0], [42.7, 4824.0], [42.8, 4828.0], [42.9, 4828.0], [43.0, 4830.0], [43.1, 4837.0], [43.2, 4837.0], [43.3, 4838.0], [43.4, 4839.0], [43.5, 4839.0], [43.6, 4846.0], [43.7, 4852.0], [43.8, 4853.0], [43.9, 4853.0], [44.0, 4853.0], [44.1, 4855.0], [44.2, 4855.0], [44.3, 4861.0], [44.4, 4869.0], [44.5, 4894.0], [44.6, 4894.0], [44.7, 4895.0], [44.8, 4897.0], [44.9, 4897.0], [45.0, 4898.0], [45.1, 4901.0], [45.2, 4903.0], [45.3, 4903.0], [45.4, 4910.0], [45.5, 4911.0], [45.6, 4911.0], [45.7, 4911.0], [45.8, 4922.0], [45.9, 4922.0], [46.0, 4922.0], [46.1, 4930.0], [46.2, 4933.0], [46.3, 4933.0], [46.4, 4937.0], [46.5, 4937.0], [46.6, 4937.0], [46.7, 4938.0], [46.8, 4948.0], [46.9, 4954.0], [47.0, 4954.0], [47.1, 4961.0], [47.2, 4977.0], [47.3, 4977.0], [47.4, 4982.0], [47.5, 4984.0], [47.6, 4990.0], [47.7, 4990.0], [47.8, 4997.0], [47.9, 4997.0], [48.0, 4997.0], [48.1, 4998.0], [48.2, 4998.0], [48.3, 4998.0], [48.4, 4998.0], [48.5, 5000.0], [48.6, 5002.0], [48.7, 5002.0], [48.8, 5004.0], [48.9, 5006.0], [49.0, 5006.0], [49.1, 5007.0], [49.2, 5007.0], [49.3, 5009.0], [49.4, 5009.0], [49.5, 5009.0], [49.6, 5010.0], [49.7, 5010.0], [49.8, 5012.0], [49.9, 5013.0], [50.0, 5014.0], [50.1, 5014.0], [50.2, 5014.0], [50.3, 5015.0], [50.4, 5015.0], [50.5, 5018.0], [50.6, 5019.0], [50.7, 5019.0], [50.8, 5021.0], [50.9, 5023.0], [51.0, 5024.0], [51.1, 5024.0], [51.2, 5024.0], [51.3, 5024.0], [51.4, 5024.0], [51.5, 5025.0], [51.6, 5040.0], [51.7, 5041.0], [51.8, 5041.0], [51.9, 5044.0], [52.0, 5054.0], [52.1, 5054.0], [52.2, 5055.0], [52.3, 5064.0], [52.4, 5064.0], [52.5, 5065.0], [52.6, 5066.0], [52.7, 5074.0], [52.8, 5074.0], [52.9, 5076.0], [53.0, 5086.0], [53.1, 5086.0], [53.2, 5098.0], [53.3, 5100.0], [53.4, 5103.0], [53.5, 5103.0], [53.6, 5104.0], [53.7, 5106.0], [53.8, 5106.0], [53.9, 5107.0], [54.0, 5108.0], [54.1, 5108.0], [54.2, 5108.0], [54.3, 5112.0], [54.4, 5114.0], [54.5, 5114.0], [54.6, 5116.0], [54.7, 5117.0], [54.8, 5117.0], [54.9, 5123.0], [55.0, 5124.0], [55.1, 5125.0], [55.2, 5125.0], [55.3, 5125.0], [55.4, 5126.0], [55.5, 5126.0], [55.6, 5126.0], [55.7, 5126.0], [55.8, 5127.0], [55.9, 5127.0], [56.0, 5131.0], [56.1, 5131.0], [56.2, 5131.0], [56.3, 5132.0], [56.4, 5133.0], [56.5, 5136.0], [56.6, 5136.0], [56.7, 5138.0], [56.8, 5139.0], [56.9, 5139.0], [57.0, 5145.0], [57.1, 5146.0], [57.2, 5146.0], [57.3, 5149.0], [57.4, 5149.0], [57.5, 5157.0], [57.6, 5157.0], [57.7, 5164.0], [57.8, 5172.0], [57.9, 5172.0], [58.0, 5174.0], [58.1, 5178.0], [58.2, 5182.0], [58.3, 5182.0], [58.4, 5182.0], [58.5, 5196.0], [58.6, 5196.0], [58.7, 5197.0], [58.8, 5197.0], [58.9, 5200.0], [59.0, 5200.0], [59.1, 5207.0], [59.2, 5208.0], [59.3, 5208.0], [59.4, 5213.0], [59.5, 5215.0], [59.6, 5215.0], [59.7, 5215.0], [59.8, 5218.0], [59.9, 5223.0], [60.0, 5223.0], [60.1, 5224.0], [60.2, 5226.0], [60.3, 5226.0], [60.4, 5227.0], [60.5, 5228.0], [60.6, 5232.0], [60.7, 5232.0], [60.8, 5241.0], [60.9, 5245.0], [61.0, 5245.0], [61.1, 5246.0], [61.2, 5247.0], [61.3, 5247.0], [61.4, 5247.0], [61.5, 5249.0], [61.6, 5260.0], [61.7, 5260.0], [61.8, 5292.0], [61.9, 5292.0], [62.0, 5292.0], [62.1, 5298.0], [62.2, 5303.0], [62.3, 5307.0], [62.4, 5307.0], [62.5, 5309.0], [62.6, 5310.0], [62.7, 5310.0], [62.8, 5314.0], [62.9, 5315.0], [63.0, 5329.0], [63.1, 5329.0], [63.2, 5335.0], [63.3, 5340.0], [63.4, 5340.0], [63.5, 5351.0], [63.6, 5354.0], [63.7, 5354.0], [63.8, 5355.0], [63.9, 5357.0], [64.0, 5358.0], [64.1, 5358.0], [64.2, 5359.0], [64.3, 5360.0], [64.4, 5360.0], [64.5, 5360.0], [64.6, 5379.0], [64.7, 5388.0], [64.8, 5388.0], [64.9, 5388.0], [65.0, 5401.0], [65.1, 5401.0], [65.2, 5401.0], [65.3, 5404.0], [65.4, 5417.0], [65.5, 5417.0], [65.6, 5418.0], [65.7, 5428.0], [65.8, 5428.0], [65.9, 5430.0], [66.0, 5432.0], [66.1, 5432.0], [66.2, 5434.0], [66.3, 5437.0], [66.4, 5441.0], [66.5, 5441.0], [66.6, 5445.0], [66.7, 5463.0], [66.8, 5463.0], [66.9, 5463.0], [67.0, 5468.0], [67.1, 5469.0], [67.2, 5469.0], [67.3, 5471.0], [67.4, 5481.0], [67.5, 5481.0], [67.6, 5482.0], [67.7, 5484.0], [67.8, 5503.0], [67.9, 5503.0], [68.0, 5511.0], [68.1, 5514.0], [68.2, 5514.0], [68.3, 5548.0], [68.4, 5549.0], [68.5, 5549.0], [68.6, 5573.0], [68.7, 5626.0], [68.8, 5642.0], [68.9, 5642.0], [69.0, 5659.0], [69.1, 5669.0], [69.2, 5669.0], [69.3, 5680.0], [69.4, 5687.0], [69.5, 5687.0], [69.6, 5687.0], [69.7, 5689.0], [69.8, 5694.0], [69.9, 5694.0], [70.0, 5696.0], [70.1, 5711.0], [70.2, 5719.0], [70.3, 5719.0], [70.4, 5732.0], [70.5, 5733.0], [70.6, 5733.0], [70.7, 5736.0], [70.8, 5739.0], [70.9, 5739.0], [71.0, 5742.0], [71.1, 5748.0], [71.2, 5754.0], [71.3, 5754.0], [71.4, 5761.0], [71.5, 5767.0], [71.6, 5767.0], [71.7, 5774.0], [71.8, 5782.0], [71.9, 5784.0], [72.0, 5784.0], [72.1, 5788.0], [72.2, 5789.0], [72.3, 5789.0], [72.4, 5789.0], [72.5, 5789.0], [72.6, 5794.0], [72.7, 5794.0], [72.8, 5804.0], [72.9, 5807.0], [73.0, 5807.0], [73.1, 5810.0], [73.2, 5813.0], [73.3, 5813.0], [73.4, 5813.0], [73.5, 5818.0], [73.6, 5819.0], [73.7, 5819.0], [73.8, 5825.0], [73.9, 5827.0], [74.0, 5827.0], [74.1, 5830.0], [74.2, 5830.0], [74.3, 5831.0], [74.4, 5831.0], [74.5, 5831.0], [74.6, 5835.0], [74.7, 5835.0], [74.8, 5840.0], [74.9, 5842.0], [75.0, 5845.0], [75.1, 5845.0], [75.2, 5845.0], [75.3, 5847.0], [75.4, 5847.0], [75.5, 5847.0], [75.6, 5851.0], [75.7, 5851.0], [75.8, 5852.0], [75.9, 5852.0], [76.0, 5853.0], [76.1, 5853.0], [76.2, 5855.0], [76.3, 5856.0], [76.4, 5856.0], [76.5, 5857.0], [76.6, 5859.0], [76.7, 5859.0], [76.8, 5859.0], [76.9, 5859.0], [77.0, 5865.0], [77.1, 5865.0], [77.2, 5868.0], [77.3, 5869.0], [77.4, 5869.0], [77.5, 5871.0], [77.6, 5871.0], [77.7, 5871.0], [77.8, 5871.0], [77.9, 5871.0], [78.0, 5874.0], [78.1, 5874.0], [78.2, 5875.0], [78.3, 5876.0], [78.4, 5878.0], [78.5, 5878.0], [78.6, 5878.0], [78.7, 5879.0], [78.8, 5879.0], [78.9, 5879.0], [79.0, 5879.0], [79.1, 5879.0], [79.2, 5879.0], [79.3, 5880.0], [79.4, 5882.0], [79.5, 5882.0], [79.6, 5883.0], [79.7, 5887.0], [79.8, 5887.0], [79.9, 5888.0], [80.0, 5889.0], [80.1, 5893.0], [80.2, 5893.0], [80.3, 5894.0], [80.4, 5894.0], [80.5, 5894.0], [80.6, 5905.0], [80.7, 5911.0], [80.8, 5914.0], [80.9, 5914.0], [81.0, 5922.0], [81.1, 5924.0], [81.2, 5924.0], [81.3, 5925.0], [81.4, 5934.0], [81.5, 5934.0], [81.6, 5934.0], [81.7, 5935.0], [81.8, 5948.0], [81.9, 5948.0], [82.0, 5963.0], [82.1, 5978.0], [82.2, 5978.0], [82.3, 5989.0], [82.4, 6054.0], [82.5, 6059.0], [82.6, 6059.0], [82.7, 6068.0], [82.8, 6070.0], [82.9, 6070.0], [83.0, 6086.0], [83.1, 6087.0], [83.2, 6088.0], [83.3, 6088.0], [83.4, 6092.0], [83.5, 6099.0], [83.6, 6099.0], [83.7, 6101.0], [83.8, 6111.0], [83.9, 6113.0], [84.0, 6113.0], [84.1, 6114.0], [84.2, 6115.0], [84.3, 6115.0], [84.4, 6118.0], [84.5, 6121.0], [84.6, 6121.0], [84.7, 6123.0], [84.8, 6125.0], [84.9, 6137.0], [85.0, 6137.0], [85.1, 6141.0], [85.2, 6144.0], [85.3, 6144.0], [85.4, 6145.0], [85.5, 6148.0], [85.6, 6149.0], [85.7, 6149.0], [85.8, 6150.0], [85.9, 6160.0], [86.0, 6160.0], [86.1, 6177.0], [86.2, 6178.0], [86.3, 6184.0], [86.4, 6184.0], [86.5, 6198.0], [86.6, 6201.0], [86.7, 6201.0], [86.8, 6213.0], [86.9, 6215.0], [87.0, 6215.0], [87.1, 6219.0], [87.2, 6220.0], [87.3, 6224.0], [87.4, 6224.0], [87.5, 6225.0], [87.6, 6226.0], [87.7, 6226.0], [87.8, 6229.0], [87.9, 6293.0], [88.0, 6298.0], [88.1, 6298.0], [88.2, 6312.0], [88.3, 6363.0], [88.4, 6363.0], [88.5, 6429.0], [88.6, 6444.0], [88.7, 6444.0], [88.8, 6448.0], [88.9, 6462.0], [89.0, 6464.0], [89.1, 6464.0], [89.2, 6468.0], [89.3, 6471.0], [89.4, 6471.0], [89.5, 6478.0], [89.6, 6489.0], [89.7, 6494.0], [89.8, 6494.0], [89.9, 6495.0], [90.0, 6552.0], [90.1, 6552.0], [90.2, 6769.0], [90.3, 6798.0], [90.4, 6801.0], [90.5, 6801.0], [90.6, 6906.0], [90.7, 6909.0], [90.8, 6909.0], [90.9, 6913.0], [91.0, 6921.0], [91.1, 6921.0], [91.2, 6961.0], [91.3, 6962.0], [91.4, 6963.0], [91.5, 6963.0], [91.6, 6964.0], [91.7, 6968.0], [91.8, 6968.0], [91.9, 6976.0], [92.0, 6981.0], [92.1, 7047.0], [92.2, 7047.0], [92.3, 7061.0], [92.4, 7089.0], [92.5, 7089.0], [92.6, 7093.0], [92.7, 7094.0], [92.8, 7112.0], [92.9, 7112.0], [93.0, 7117.0], [93.1, 7149.0], [93.2, 7149.0], [93.3, 7150.0], [93.4, 7150.0], [93.5, 7150.0], [93.6, 7153.0], [93.7, 7182.0], [93.8, 7291.0], [93.9, 7291.0], [94.0, 7313.0], [94.1, 7351.0], [94.2, 7351.0], [94.3, 7352.0], [94.4, 7352.0], [94.5, 7355.0], [94.6, 7355.0], [94.7, 7358.0], [94.8, 7360.0], [94.9, 7360.0], [95.0, 7364.0], [95.1, 7382.0], [95.2, 7398.0], [95.3, 7398.0], [95.4, 7401.0], [95.5, 7456.0], [95.6, 7456.0], [95.7, 7459.0], [95.8, 7459.0], [95.9, 7459.0], [96.0, 7460.0], [96.1, 7462.0], [96.2, 7464.0], [96.3, 7464.0], [96.4, 7465.0], [96.5, 7465.0], [96.6, 7465.0], [96.7, 7466.0], [96.8, 7466.0], [96.9, 7470.0], [97.0, 7470.0], [97.1, 7470.0], [97.2, 7471.0], [97.3, 7471.0], [97.4, 7487.0], [97.5, 7504.0], [97.6, 7504.0], [97.7, 7504.0], [97.8, 7506.0], [97.9, 7522.0], [98.0, 7522.0], [98.1, 7528.0], [98.2, 7530.0], [98.3, 7530.0], [98.4, 7563.0], [98.5, 7586.0], [98.6, 7710.0], [98.7, 7710.0], [98.8, 7711.0], [98.9, 7713.0], [99.0, 7713.0], [99.1, 7716.0], [99.2, 7719.0], [99.3, 7726.0], [99.4, 7726.0], [99.5, 8117.0], [99.6, 9157.0], [99.7, 9157.0], [99.8, 9334.0], [99.9, 9602.0]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 110.0, "series": [{"data": [[600.0, 4.0], [700.0, 2.0], [800.0, 2.0], [1000.0, 14.0], [1100.0, 2.0], [1200.0, 4.0], [1300.0, 2.0], [1400.0, 16.0], [1500.0, 2.0], [1600.0, 2.0], [1700.0, 6.0], [1800.0, 10.0], [1900.0, 2.0], [2000.0, 20.0], [2100.0, 4.0], [2300.0, 10.0], [2200.0, 2.0], [2400.0, 2.0], [2500.0, 8.0], [2600.0, 4.0], [2700.0, 4.0], [2800.0, 2.0], [2900.0, 14.0], [3000.0, 2.0], [3100.0, 4.0], [3300.0, 12.0], [3200.0, 14.0], [3500.0, 2.0], [3600.0, 12.0], [3700.0, 4.0], [3800.0, 6.0], [3900.0, 6.0], [4000.0, 8.0], [4100.0, 20.0], [4300.0, 36.0], [4200.0, 26.0], [4500.0, 70.0], [4400.0, 48.0], [4600.0, 104.0], [4800.0, 46.0], [4700.0, 52.0], [4900.0, 48.0], [5100.0, 80.0], [5000.0, 68.0], [5300.0, 40.0], [5200.0, 46.0], [5500.0, 12.0], [5400.0, 40.0], [5600.0, 20.0], [5800.0, 110.0], [5700.0, 38.0], [5900.0, 26.0], [6100.0, 42.0], [6000.0, 18.0], [6300.0, 4.0], [6200.0, 22.0], [6400.0, 22.0], [6500.0, 2.0], [6700.0, 4.0], [6900.0, 22.0], [6800.0, 2.0], [7100.0, 14.0], [7000.0, 10.0], [7200.0, 2.0], [7300.0, 20.0], [7400.0, 30.0], [7500.0, 16.0], [7700.0, 12.0], [8100.0, 2.0], [9100.0, 2.0], [9300.0, 2.0], [9600.0, 2.0], [200.0, 2.0], [300.0, 8.0], [400.0, 6.0], [500.0, 12.0]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 671.0, "series": [{"data": [[0.0, 8.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 29.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 671.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 45.16202531645572, "minX": 1.57793502E12, "maxY": 45.86581469648563, "series": [{"data": [[1.57793508E12, 45.86581469648563], [1.57793502E12, 45.16202531645572]], "isOverall": false, "label": "Login Thread Group(\u767B\u5F55)", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57793508E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 325.0, "minX": 1.0, "maxY": 5376.32167832168, "series": [{"data": [[32.0, 3941.0], [33.0, 2892.6], [2.0, 574.0], [35.0, 4615.0], [34.0, 4606.0], [36.0, 3431.0], [37.0, 4608.0], [38.0, 2973.0], [40.0, 4408.2], [41.0, 3193.4000000000005], [42.0, 3685.0], [43.0, 3371.0], [44.0, 3621.0], [45.0, 4495.0], [46.0, 3396.5714285714284], [47.0, 4586.0], [3.0, 430.0], [48.0, 3708.6], [49.0, 4119.0], [50.0, 5376.32167832168], [4.0, 375.0], [5.0, 325.0], [7.0, 538.6666666666666], [8.0, 5002.666666666666], [11.0, 5014.25], [12.0, 1077.3749999999998], [13.0, 611.0], [15.0, 5093.8], [16.0, 4709.0], [1.0, 510.0], [17.0, 4688.0], [18.0, 4714.0], [19.0, 4681.0], [20.0, 1734.4166666666663], [21.0, 3715.0], [22.0, 4661.0], [23.0, 2867.3333333333335], [24.0, 1846.0], [25.0, 3726.6666666666665], [27.0, 4643.0], [28.0, 2716.5], [29.0, 2761.0], [30.0, 2384.8749999999995], [31.0, 3406.5]], "isOverall": false, "label": "Login", "isController": false}, {"data": [[45.47316384180791, 4904.38700564972]], "isOverall": false, "label": "Login-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.57793502E12, "maxY": 5317.566666666667, "series": [{"data": [[1.57793508E12, 4213.133333333333], [1.57793502E12, 5317.566666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57793508E12, 0.0], [1.57793502E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57793508E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4490.493670886078, "minX": 1.57793502E12, "maxY": 5426.712460063895, "series": [{"data": [[1.57793508E12, 5426.712460063895], [1.57793502E12, 4490.493670886078]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57793508E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4473.0810126582255, "minX": 1.57793502E12, "maxY": 5422.220447284345, "series": [{"data": [[1.57793508E12, 5422.220447284345], [1.57793502E12, 4473.0810126582255]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57793508E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 162.6886075949366, "minX": 1.57793502E12, "maxY": 447.0031948881798, "series": [{"data": [[1.57793508E12, 447.0031948881798], [1.57793502E12, 162.6886075949366]], "isOverall": false, "label": "Login", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57793508E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 298.0, "minX": 1.57793502E12, "maxY": 9602.0, "series": [{"data": [[1.57793508E12, 7726.0], [1.57793502E12, 9602.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57793508E12, 452.0], [1.57793502E12, 298.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57793508E12, 7356.8], [1.57793502E12, 6254.600000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57793508E12, 7715.58], [1.57793502E12, 8158.600000000021]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57793508E12, 7475.8], [1.57793502E12, 6914.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57793508E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 1447.0, "minX": 1.0, "maxY": 7459.0, "series": [{"data": [[2.0, 3777.5], [9.0, 5224.5], [37.0, 5182.0], [39.0, 5924.0], [10.0, 3776.0], [41.0, 6213.0], [11.0, 1447.0], [47.0, 5794.0], [46.0, 5874.5], [12.0, 4651.0], [50.0, 7459.0], [51.0, 4664.0], [13.0, 4439.0], [14.0, 4568.5], [15.0, 4922.0], [4.0, 4840.5], [16.0, 4563.0], [1.0, 4756.5], [19.0, 5227.0], [5.0, 3997.0], [6.0, 2897.0], [7.0, 4922.0], [31.0, 4948.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 1447.0, "minX": 1.0, "maxY": 7399.5, "series": [{"data": [[2.0, 3777.0], [9.0, 5199.0], [37.0, 5178.0], [39.0, 5923.0], [10.0, 3774.0], [41.0, 6213.0], [11.0, 1447.0], [47.0, 5794.0], [46.0, 5872.0], [12.0, 4650.5], [50.0, 7399.5], [51.0, 4663.0], [13.0, 4439.0], [14.0, 4568.5], [15.0, 4922.0], [4.0, 4840.0], [16.0, 4562.0], [1.0, 4756.5], [19.0, 5227.0], [5.0, 3996.0], [6.0, 2897.0], [7.0, 4922.0], [31.0, 4948.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.383333333333334, "minX": 1.57793502E12, "maxY": 7.416666666666667, "series": [{"data": [[1.57793508E12, 4.383333333333334], [1.57793502E12, 7.416666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57793508E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.216666666666667, "minX": 1.57793502E12, "maxY": 6.583333333333333, "series": [{"data": [[1.57793508E12, 5.216666666666667], [1.57793502E12, 6.583333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57793508E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.433333333333334, "minX": 1.57793502E12, "maxY": 13.166666666666666, "series": [{"data": [[1.57793508E12, 10.433333333333334], [1.57793502E12, 13.166666666666666]], "isOverall": false, "label": "Login-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57793508E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.433333333333334, "minX": 1.57793502E12, "maxY": 13.166666666666666, "series": [{"data": [[1.57793508E12, 10.433333333333334], [1.57793502E12, 13.166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57793508E12, "title": "Total Transactions Per Second"}},
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

