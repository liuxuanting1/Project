<template>
    <div class="equipment">
        <Lease_title>商家业态分布情况</Lease_title>
        <chyCharts width="330" height="210" :options="options" container="equipmentBar"></chyCharts>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive,ref } from 'vue'
import * as echarts from "echarts";
import chyCharts from '../../components/v3echarts.vue'
export default defineComponent({
    setup() {
        const options = ref({
            //   tooltip: {
            //     trigger: 'axis',
            //     axisPointer: {
            //       type: 'none'
            //     }
            //   },
            tooltip: {
                show: true,
                trigger: "item",
                // formatter: function (params: any) {
                //     return `<span>${params.data.name}</span><br/><span>${params.data.value}万元</span>`
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
                padding: 10,
                backgroundColor: "rgba(0,0,0,.6)",
                textStyle: {
                    color: "#fff",
                    fontSize: 16,
                },
            },
            legend: {
                show: false,
                itemHeight: 32, //修改icon图形大小
                itemWidth: 32,
                itemGap: 20,
                x: "left", //可设定图例在左、右、居中
                padding: [0, 5, 0, 30], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
                textStyle: {
                    fontSize: 16,
                    color: "rgba(255,255,255,.5)",
                },
            },
            grid: {
                left: "3%",
                right: "5%",
                bottom: "5%",
                top: "5%",
                containLabel: true,
            },
            xAxis: {
                type: "value",
                // show: false,
                name: "(家)",
                nameTextStyle: {
                    color: "#FFFFF0",
                    padding: [0, 0, 0, 20],
                    fontSize: 12,
                    fontFamily: "PingFangSC-Regular, PingFang SC",
                    opacity: 0.7,
                },
                boundaryGap: [0, 0.01],
                axisLabel: {
                    //轴上的字 字体、样式
                    inside: false,
                    fontSize: "16",
                    fontFamily: "OPPOSans R",
                    color: "rgba(255,255,255,.8)",
                    margin: 5,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: "#FFFFFF",
                        opacity: 0.3,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ["#315070"],
                        width: 0,
                        type: "solid",
                    },
                },
                axisTick: {
                    show: true,
                },
            },
            yAxis: {
                type: "category",
                axisLabel: {
                    show: true,
                    margin: 10,
                    fontSize: "12",
                    color: "rgba(255,255,255,.8)",
                    formatter: function (params: any) {
                        var newParamsName = ""; // 最终拼接成的字符串
                        var paramsNameNumber = params.length; // 实际标签的个数
                        var provideNumber = 4; // 每行能显示的字的个数
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                        /**
                         * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                         */
                        // 条件等同于rowNumber>1
                        if (paramsNameNumber > provideNumber) {
                            /** 循环每一行,p表示行 */
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = ""; // 表示每一次截取的字符串
                                var start = p * provideNumber; // 开始截取的位置
                                var end = start + provideNumber; // 结束截取的位置
                                // 此处特殊处理最后一行的索引值
                                if (p === rowNumber - 1) {
                                    // 最后一次不换行
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    // 每一次拼接字符串并换行
                                    tempStr = params.substring(start, end) + "\n";
                                }
                                newParamsName += tempStr; // 最终拼成的字符串
                            }
                        } else {
                            // 将旧标签的值赋给新标签
                            newParamsName = params;
                        }
                        return newParamsName;
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ["#315070"],
                        width: 0,
                        type: "solid",
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: "#FFFFFF",
                        opacity: 0.3,
                    },
                },
                data: ["零售", "批发", "商务", "餐饮服务"],
            },
            series: [
                {
                    name: "渠道状态",
                    type: "bar",
                    barWidth: 20, //柱图宽度

                    itemStyle: {
                        // color: "rgba(87, 167, 255, 0.5)",
                        // borderColor: "#57A7FF",
                        normal: {
                            barBorderRadius: [2, 2, 2, 0],
                            label: {
                                show: true, //开启显示
                                position: "right", //在上方显示
                                //                          formatter: function (params: any) {
                                //             return `<span>${params.data.value}</span><span style="font-size: 48px;font-family: PingFang SC-Regular, PingFang SC;font-weight: 400;
                                // color: #FFFFF0;
                                // line-height: 56px;
                                // letter-spacing: 4px;">万元</span>`
                                //         },
                                formatter: "{c}",

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
                    data: [
                        { value: 21 },
                        { value: 53 },
                        { value: 31 },
                        { value: 37 },
                        { value: 57 },
                    ],
                },
            ],
        });

        onMounted(() => {
            setInterval(() => {
                options.value.series[0].data.sort(function (a:any, b:any) { return Math.random() > .5 ? -1 : 1; })
            }, 5000);
        })

        return {

            options,

        }
    },
    components: {
        chyCharts
    }
})

</script>
<style lang="scss" scoped>
</style>





