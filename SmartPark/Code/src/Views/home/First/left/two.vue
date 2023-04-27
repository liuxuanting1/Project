<!--
 * @Author: your name
 * @Date: 2022-02-26 17:41:48
 * @LastEditTime: 2022-02-26 19:49:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\First\left\two.vue
-->
<!-- two -->
<template>
  <V3Echarts :height="280" :options="option" :top="10" container="container3" />
</template>

<script lang="ts" setup>
import * as echarts from "echarts";

import V3Echarts from "@/components/V3Echarts/index.vue";
import {
  AXIS_LABEL,
  LEGEND,
  LINE_TOOLTIP,
  XAXIS_NAME,
  YAXIS_NAME,
} from "@/utils/chartConfig";
const option = {
  tooltip: LINE_TOOLTIP,
  legend: {
    icon: "rect",
    itemWidth: 12,
    itemHeight: 12,
    itemGap: 15,
    left: "right",
    top: "0%",
    textStyle: LEGEND,
    data: [
      {
        name: "电梯",
        icon: "rect",
        itemStyle: {
          color: "#FF6C83",
        },
      },
      {
        name: "冷热源",
        icon: "rect",
        itemStyle: {
          color: "#FF9433",
        },
      },
      {
        name: "供配电",
        icon: "rect",
        itemStyle: {
          color: "#2D98FF",
        },
      },
      {
        name: "监控摄像头",
        icon: "rect",
        itemStyle: {
          color: "#00D2BA",
        },
      },
    ],
  },
  grid: {
    top: "25%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    containLabel: true,
  },
  dataZoom: {
    start: 5,
    end: 80,
    type: "inside",
  },
  xAxis: {
    type: "category",
    data: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    axisLabel: AXIS_LABEL,
    nameTextStyle: XAXIS_NAME,
    axisLine: {
      show: true,
    },
    splitLine: {
      //网格线
      lineStyle: {
        color: "#6e717e",
        type: "dotted", //设置网格线类型 dotted：虚线   solid:实线
      },
      show: false, //隐藏或显示
    },
  },
  yAxis: {
    type: "value",
    name: "(次)",
    offset: -5,
    // max: 8000,
    axisLine: {
      show: true,
    },
    axisLabel: AXIS_LABEL,
    // data:[100,200,300,400],
    nameTextStyle: YAXIS_NAME,
    splitLine: {
      //网格线
      lineStyle: {
        color: "#6e717e",
        type: "dotted", //设置网格线类型 dotted：虚线   solid:实线
      },
      show: false, //隐藏或显示
    },
  },
  series: [
    {
      name: "电梯",
      type: "line",
      data: [2, 1, 3, 0, 1, 3, 4, 2, 5, 3, 2, 3],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#FF6C83",
        width: "1",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(255, 108, 131, 0.2)" }, // 0% 处的颜色
            { offset: 1, color: " RGB(36,46,70)" },
          ]),
        },
      },
      markPoint: {
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
          color: "#fff",
        },
        label: {
          show: false,
        },
        data: [
          {
            type: "max",
            name: "最大值",
          },
          {
            type: "min",
            name: "最小值",
          },
        ],
      },
    },
    {
      name: "冷热源",
      type: "line",
      data: [8, 11, 6, 14, 12, 15, 7, 9, 10, 8, 14, 8],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#FF9433",
        width: "1",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(255, 148, 51, 0.2)" }, // 0% 处的颜色
            { offset: 1, color: " RGB(36,46,70)" },
          ]),
        },
      },
      markPoint: {
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
          color: "#fff",
        },
        label: {
          show: false,
        },
        data: [
          {
            type: "max",
            name: "最大值",
          },
          {
            type: "min",
            name: "最小值",
          },
        ],
      },
    },
    {
      name: "供配电",
      type: "line",
      data: [20, 23, 28, 26, 22, 18, 16, 20, 25, 28, 17, 15],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#2D98FF",
        width: "1",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(45, 152, 255, 0.2)" }, // 0% 处的颜色
            { offset: 1, color: " RGB(36,46,70)" },
          ]),
        },
      },
      markPoint: {
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
          color: "#fff",
        },
        label: {
          show: false,
        },
        data: [
          {
            type: "max",
            name: "最大值",
          },
          {
            type: "min",
            name: "最小值",
          },
        ],
      },
    },
    {
      name: "监控摄像头",
      type: "line",
      data: [16, 17, 19, 18, 15, 16, 20, 18, 19, 16, 18, 20],
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: "#00D2BA",
        width: "1",
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0.5, color: "rgba(0, 210, 186, 0.2)" }, // 0% 处的颜色
            { offset: 1, color: " RGB(36,46,70)" },
          ]),
        },
      },
      markPoint: {
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
          color: "#fff",
        },
        label: {
          show: false,
        },
        data: [
          {
            type: "max",
            name: "最大值",
          },
          {
            type: "min",
            name: "最小值",
          },
        ],
      },
    },
  ],
};
</script>

<style lang="scss" scoped></style>
