<!--
 * @Author: your name
 * @Date: 2022-02-26 22:02:47
 * @LastEditTime: 2022-02-27 16:46:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\First\right\one_right.vue
-->
<!--  -->
<template>
  <V3Echarts :options="option" container="chartAlterCategory" :height="280" />
</template>

<script lang="ts" setup>
import V3Echarts from "@/components/V3Echarts/index.vue";
import { AXIS_LABEL, LEGEND, LINE_TOOLTIP } from "@/utils/chartConfig";
import * as echarts from "echarts";

import { onUnmounted, reactive, ref } from "vue";
defineExpose({ childRef: ref });
let childRef = ref(null);
let barData = reactive([
  { id: 1, data: [154, 675, 572], text: "本月" },
  { id: 2, data: [598, 1356, 1257], text: "本季" },
  { id: 3, data: [1726, 4795, 3650.7], text: "本年" },
]);
const areaChangeType = ref(0);

let option = ref({
  tooltip: LINE_TOOLTIP,
  legend: {
    orient: "vertical",
    icon: "none",
    left: "3%",
    top: "5%", // bottom:"20%" // 组件离容器的距离
    width: "auto", // 图例组件的宽度
    height: "auto", // 图例组件的高度
    align: "left", // 图例标记和文本的对齐
    padding: 0, // 图例内边距
    // itemWidth: 50, // 图例标记的图形宽度。
    // itemHeight: 50,
    // itemGap: 105,
    textStyle: LEGEND,
    show: false,
  },
  grid: {
    top: "10%",
    left: "8%",
    right: "14%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: {
    show: false,
  },
  yAxis: {
    type: "category",
    data: [
      "12号楼",
      "2号楼",
      "5号楼",
      "3号楼",
      "10号楼",
      "6号楼",
      "11号楼",
      "8号楼",
      "9号楼",
      "1号楼",
    ],
    axisLine: {
      show: true,
      lineStyle: {
        color: "rgba(255,255,255,0.6)",
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: AXIS_LABEL,
    splitLine: {
      //网格线
      lineStyle: {
        color: "#fff",
        type: "dotted",
      },
      show: false, //隐藏或显示
    },
  },
  series: [
    {
      name: "楼栋",
      type: "bar",
      data: [5, 10, 10, 15, 20, 35, 30, 50, 59, 68],
      barWidth: 10,
      label: {
        normal: {
          show: true,
          position: "right",
          textStyle: {
            color: "#ffffff",
            fontSize: "16",
          },
        },
      },
      itemStyle: {
        borderRadius: 4,
        color: function (params: { dataIndex: any }) {
          const colorList = [
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#52D1C4",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#DFCD51",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#BF6D31",
              },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 1, 0, [
              {
                offset: 0,
                color: "#144878",
              },
              {
                offset: 0.7,
                color: "#E9595D",
              },
            ]),
          ];
          return colorList[params.dataIndex];
        },
      },
    },
  ],
});

let timer = ref();

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>
<style lang="scss" scoped></style>
