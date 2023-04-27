<template>
    <div class="Nightingale">
        <Lease_title>行业分布情况</Lease_title>
        <chyCharts width="330" height="230" :options="options" container="NightingalePie"></chyCharts>
    </div>
</template>
      
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from "echarts";
import chyCharts from '../../components/v3echarts.vue'
export default defineComponent({
    setup() {

        let color = [
            "rgb(255,108,131)",
            "rgb(120,119,232)",
            "rgb(0,106,208)",
            "rgb(0,210,186)",
            "rgb(45,152,255)",
            "#F6C84C"
        ];
        const options = ref({
            // legend: [
            //     {
            //         itemWidth: 10,
            //         itemHeight: 10,
            //         itemGap: 10,
            //         top: "2%",
            //         left: "27%",
            //         data: [
            //             "计算机、通信制造业",
            //             "软件信息技术服务业",
            //             "研究和试验发展",
            //             "专业技术服务业",
            //             "货币金融服务",
            //             "其他"
            //         ],
            //         textStyle: {
            //             fontSize: 20,
            //             color: "#fff",
            //             padding: 5,
            //         },
            //     },
            // {
            //   itemWidth: 34,
            //   itemHeight: 34,
            //   itemGap: 252,
            //   top: "8%",
            //   left: "35%",
            //   data: ["金融业", "制造业"],
            //   textStyle: {
            //     fontSize: 48,
            //     color: "#fff",
            //     padding: 20,
            //   },
            // },
            // ],
            tooltip: {
                backgroundColor: "rgba(0,0,0,0.5)",
                borderWidth: "0",
                value: "category",
                textStyle: {
                    fontSize: 14,
                    // color: "#fff",
                },
                formatter: function name(params: any) {
                    console.log(params, "params的值");
                    var result = "";
                    // params.forEach((element) => {
                    //   console.log(element, "element");
                    result += `<span style="display:inline-block;margin-right:15px;margin-left:10px;border-radius:10px;width:10px;height:10px;background-color:${params.color}"></span><span style="margin-right:20px;font-size:14px;color:rgba(255,255,255,0.7)">${params.name}</span><br/><span style="color:#fff;padding-left:20px">${params.value}</span><span style="padding-left:12px;color:rgba(255,255,255,0.8)">家</span><br/><span style="color:#fff;padding-left:20px">${params.percent}</span><span style="color:rgba(255,255,255,0.8);padding-left:12px">%</span>`;
                    // });
                    return result;
                },
            },
            toolbox: {
                show: false,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true },
                },
            },
            graphic: {
                elements: [
                    {
                        type: "image",
                        style: {
                            image: require("../../../../../assets/images/Seventh/Group_920.png"),
                            width: 180,
                            height: 180,
                        },
                        left: "22%",
                        top: "3%",
                    },
                ],
            },
            series: [
                {
                    name: "内容",
                    type: "pie",
                    radius: ["20%", "55%"], //大小
                    //center: ['44.8%', '64.2%'],//位置
                    center: ["47%", "45%"],
                    roseType: "area",
                    startAngle: 150, //开始位置s
                    // minAngle:500,
                    label: {
                        show: true,
                        fontSize: 14,
                        color: "#fff",
                    },
                    labelLine: {
                        length: 15,
                        length2: 10,
                        // maxSurfaceAngle: 200,
                        show: true,
                        lineStyle: {
                            width: 2,
                        },
                    },
                    itemStyle: {
                        color: function (p: any) {
                            return color[p.dataIndex];
                        },
                    },
                    data: [
                        { value: 21, name: "计算机、通信制造业" },
                        { value: 96, name: "软件信息技术" },
                        { value: 13, name: "研究和试验发展" },
                        { value: 12, name: "专业技术服务业" },
                        { value: 11, name: "货币金融服务" },
                        { value: 87, name: "其他" },
                    ],
                },
            ],
        })
        onMounted(() => {
            setInterval(() => {
                options.value.series[0].data.sort(function (a:any, b:any) { return Math.random() > .5 ? -1 : 1; })
            }, 5000);
        })
        return {
            options
        }

    },
    components: {
        chyCharts
    }
})
</script>
<style lang="scss" scoped>
</style>