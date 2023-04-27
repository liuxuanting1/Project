<template>
    <div class="orderReduce">
        <Lease_title>近七日停车场车流量</Lease_title>
        <chyCharts width="330" height="250" :options="options" container="orderReduceBar"></chyCharts>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
import * as echarts from "echarts";
import chyCharts from '../../components/v3echarts.vue'
export default defineComponent({
    setup() {
        const options = ref({
            // color: ["#4d82df", "#44e2dc"],
            // title: {
            //     text: "重要设备可用率",
            //     textStyle: {
            //         fontSize: 16,
            //         color: "#fff",
            //         fontWeight: 100,
            //         fontFamily: "Tencent",
            //     }
            // },
            // tooltip: {
            //     show: true,
            //     trigger: "item",
            //     // formatter: function (params: any) {
            //     //     return `<span>${params.data.name}</span><br/><span>${params.data.value}万元</span>`
            //     // },
            //     axisPointer: {
            //         type: "none",
            //         label: {
            //             background: "#000",
            //             boxShadow: " 0px 8px 48px 4px rgba(0,0,0,0.4)",
            //             borderRadius: " 0px 0px 0px 0px",
            //             // opacity: 1;
            //             border: "0px solid rgba(255, 255, 255, 0.16)",
            //         },
            //     },
            //     borderRadius: 20,
            //     //   borderWidth: 2,
            //     borderColor: "transparent",
            //     padding: 10,
            //     backgroundColor: "rgba(0,0,0,.6)",
            //     textStyle: {
            //         color: "#fff",
            //         fontSize: 16,
            //     },
            // },
            xAxis: {
                type: "category",
                data: ["6-27", "6-28", "6-29", "6-30", "7-01", "7-02", "7-03"],
                boundaryGap: [0, 0.01],
                axisLabel: {
                    //轴上的字 字体、样式
                    inside: false,
                    fontSize: "14",
                    fontFamily: "OPPOSans R",
                    color: "rgba(255,255,255,.8)",
                    margin: 10,
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
                type: "value",
                axisLabel: {
                    //轴上的字 字体、样式
                    inside: false,
                    fontSize: "14",
                    fontFamily: "OPPOSans R",
                    color: "rgba(255,255,255,.8)",
                    margin: 10,
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
            },
            grid: {
                left: "3%",
                right: "4%",
                top: "20%",
                bottom: "0%",
                containLabel: true,
            },
            series: [
                {
                    itemStyle: {
                        normal: {
                            label: {
                                show: true, //开启显示
                                position: "top", //在上方显示
                                formatter: "{c}",
                                textStyle: {
                                    //数值样式
                                    color: "#fff",
                                    fontSize: 18,
                                    fontFamily: "SJyunhei-Regular, SJyunhei",
                                },
                            },
                            color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
                                {
                                    offset: 1,
                                    color: "#4C81DD",
                                },
                                {
                                    offset: 0,
                                    color: "rgba(45, 152, 255, 0.3)",
                                },
                            ]),
                        },
                    },
                    data: [
                        {
                            value: 70,
                            // itemStyle: {
                            //     color: "#4C81DD",
                            // },
                        },
                        {
                            value: 158,
                            // itemStyle: {
                            //     color: "#38D9D0",
                            // },
                        },
                        {
                            value: 200,
                            // itemStyle: {
                            //     color: "#4C81DD",
                            // },
                        },
                        {
                            value: 320,
                            // itemStyle: {
                            //     color: "#38D9D0",
                            // },
                        },
                        {
                            value: 690,
                            // itemStyle: {
                            //     color: "#4C81DD",
                            // },
                        },
                        {
                            value: 320,
                            // itemStyle: {
                            //     color: "#38D9D0",
                            // },
                        },
                        {
                            value: 220,
                            // itemStyle: { color: "#4C81DD" },
                        },
                    ],
                    type: "bar",
                },

            ],
        });
        onMounted(() => {
            // setInterval(() => {
            //     options.value.series[0].data.sort(function (a:any, b:any) { return Math.random() > .5 ? -1 : 1; })
            // }, 5000);
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
.orderReduce {
    width: 100%;
    // border: 1px solid red;
    padding: 5px;
    // background-color: #192333;
}
</style>