<!--
 * @Author: Liu Xuanting
 * @Date: 2022-02-25 05:04:36
 * @LastEditTime: 2022-03-04 21:15:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\First\right\index.vue
-->
<template>
  <!-- 上部 -->
  <Box :height="320">
    <Lease_title>车流统计</Lease_title>
    <One_right />
  </Box>
  <!-- 中间 -->
  <Box :height="320">
    <Lease_title>入住趋势</Lease_title>
    <V3Echarts
      container="Firstecharts2"
      ref="childRef"
      :options="option2"
      :height="250"
      :top="0"
    />
  </Box>
  <!-- 下部 -->
  <Box :height="300">
    <Lease_title>综合收入</Lease_title>
    <V3Echarts
      container="Firstecharts3"
      ref="childRef"
      :options="option"
      :height="250"
      :top="0"
    />
  </Box>
</template>
<script lang="ts" setup>
import Lease_title from "@/components/Lease_title/index.vue";
import Box from "@/components/Box/index.vue";
import V3Echarts from "../../../../components/V3Echarts/index.vue";
import * as echarts from "echarts";

import { onUnmounted, reactive, ref } from "vue";
import One_right from "./one_right.vue";
defineExpose({ childRef: ref });
let childRef = ref(null);
let barData = reactive([
  { id: 1, data: [154, 675, 572], text: "本月" },
  { id: 2, data: [598, 1356, 1257], text: "本季" },
  { id: 3, data: [1726, 4795, 3650.7], text: "本年" },
]);
const areaChangeType = ref(0);

let option = ref({
  title: {
    text: "",
  },
  tooltip: {
    show: true,
    trigger: "item",
    axisPointer: {
      type: "none",
      label: {
        background: "#000",
        // boxShadow: " 0px 8px 48px 4px rgba(0,0,0,0.4)",
        borderRadius: " 0px 0px 0px 0px",
        border: "0px solid rgba(255, 255, 255, 0.16)",
      },
    },
    borderRadius: 2,
    borderColor: "transparent",
    padding: 5,
    backgroundColor: "rgba(0,0,0,.6)",
    textStyle: {
      color: "#fff",
      fontSize: 12,
    },
  },
  legend: {
    itemHeight: 12, //修改icon图形大小
    itemWidth: 12,
    itemGap: 1,
    borderRadius: 2,
    x: "left", //可设定图例在左、右、居中
    y: 30,
    padding: [0, 5, 0, 50], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
    textStyle: {
      fontSize: 12,
      color: "rgba(255,255,255,1)",
      padding: 0,
    },
  },
  grid: {
    left: "10%",
    right: "25%",
    bottom: "3%",
    top: "20%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    show: false,
    boundaryGap: [0, 0.01],
    min: 0,
    max: 5000,
  },
  yAxis: {
    type: "category",
    //坐标轴轴线
    axisLine: {
      lineStyle: {
        width: 1,
        color: "#FFFFFF",
        opacity: 0.3,
      },
    },
    //xAxis文字
    axisLabel: {
      // margin: 34,
      color: "#FFFFFF",
      fontSize: 12,
      fontFamily: "OPPOSans-M",
    },
    boundaryGap: ["30%", "20%"],
    data: ["活动场地运营", "公共会议室运营", "停车场运营"],
  },
  series: [
    {
      name: "收入",
      type: "bar",
      barWidth: 20, //柱图宽度
      label: {
        show: true,
        position: "insideRight",
        distance: -1,
        formatter: "{people|{@[4]}} {percentage|{@[1]}%}",
        rich: {
          people: {
            color: "white",
          },
          percentage: {
            color: "red",
            width: 1,
          },
        },
      },
      itemStyle: {
        // color: "rgba(87, 167, 255, 0.5)",
        // borderColor: "#57A7FF",
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          label: {
            show: true, //开启显示
            position: "right",
            right: 200,
            //在上方显示
            //                          formatter: function (params: any) {
            //             return `<span>${params.data.value}</span><span style="font-size: 48px;font-family: PingFang SC-Regular, PingFang SC;font-weight: 400;
            // color: #FFFFF0;
            // line-height: 56px;
            // letter-spacing: 4px;">万元</span>`
            //         },
            formatter: "{c}万元",

            textStyle: {
              //数值样式
              color: "#fff",
              fontSize: 14,
              fontFamily: "SJyunhei-Regular, SJyunhei",
            },
          },
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0,
              color: "rgba(0, 210, 186, 1)",
            },
            {
              offset: 1,
              color: "rgba(45, 152, 255, 0.3)",
            },
          ]),
        },
      },
      //   data: ["1.6", "1.2"]
      data: barData[areaChangeType.value].data,
    },
  ],
});
let option2 = ref({
  color: ["#2D98FF", "#FF9433"],

  tooltip: {
    show: true,
    trigger: "axis",
    // formatter: function (params: any) {
    //     return `<span>${params.data.name}</span><br/><span>${params.data.value}万</span>`
    // },
    axisPointer: {
      type: "none",
      label: {
        background: "#000",
        boxShadow: " 0px 8px 48px 4px rgba(0,0,0,0.4)",
        borderRadius: " 0px 0px 0px 0px",
        // opacity: 1;
        border: "0px solid rgba(255, 255, 255, 0.16)",
      },
    },
    borderRadius: 20,
    //   borderWidth: 2,
    borderColor: "transparent",
    padding: 15,
    backgroundColor: "rgba(0,0,0,.6)",
    textStyle: {
      color: "#fff",
      fontSize: 14,
    },
  },
  legend: {
    icon: "roundRect",
    itemGap: 10, //间距
    show: true,
    textStyle: {
      padding: 5,
      fontSize: 14,
      color: "#fff",
      fontFamily: "OPPOSans R",
    },
    itemWidth: 12,
    itemHeight: 6,
    data: ["企业", "商家"],
    right: 10,
    top: 5,
    align: "left",
  },
  grid: {
    left: "5%",
    right: "2%",
    bottom: "5%",
    top: "30%",
    containLabel: true,
  },

  xAxis: {
    axisLabel: {
      //轴上的字 字体、样式
      inside: false,
      fontSize: 12,
      fontFamily: "OPPOSans R",
      color: "rgba(255,255,255,.8)",
      margin: 10,
    },
    type: "category",
    boundaryGap: false,
    data: ["2017", "2018", "2019", "2020", "2021"],
    axisLine: {
      lineStyle: {
        width: 1,
        color: "#FFFFFF",
        opacity: 0.3,
      },
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    name: "（家）",
    nameTextStyle: { fontSize: "12px", padding: [0, 0, 5, -30] },
    axisLabel: {
      //轴上的字 字体、样式
      inside: false,
      fontSize: "12",
      fontFamily: "OPPOSans R",
      color: "rgba(255,255,255,0.8)",
      margin: 10,
    },
    type: "value",
    min: 0,
    interval: 200,
    max: 800,
    splitLine: {
      //决定是否显示坐标中网格
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: "#FFFFFF",
        opacity: 0.3,
      },
    },
  },
  series: [
    {
      lineStyle: {
        color: "#2D98FF",
        width: 2,
      },

      name: "企业",
      type: "line",
      smooth: true,
      showSymbol: false,
      symbolSize: 4,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(2, 145, 255, .5)" },
          { offset: 0.5, color: "rgba(2, 145, 255, .3)" },
          { offset: 1, color: "rgba(2, 145, 255, .4)" },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [401, 427, 456, 484, 660],
    },
    {
      lineStyle: {
        color: "#FF9433",
        width: 1,
      },
      name: "商家",
      type: "line",
      symbolSize: 4,
      smooth: true,
      showSymbol: false,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "rgba(255, 148, 51, .5)" },
          { offset: 0.5, color: "rgba(255, 148, 51, .3)" },
          { offset: 1, color: "rgba(255, 148, 51, .4)" },
        ]),
      },
      emphasis: {
        focus: "series",
      },
      data: [135, 157, 164, 180, 184],
    },
  ],
});
const areaChange = (type = 0) => {
  areaChangeType.value = type;
  option.value.series[0].data = barData[areaChangeType.value].data;
  // console.log(option.value, "option");
};
let timer = ref();
const playEcharts = () => {
  let i = 0;
  timer.value = setInterval(() => {
    areaChange(i % barData.length);
    i++;
  }, 3000);
};
playEcharts();
onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<style lang="scss" scoped></style>
