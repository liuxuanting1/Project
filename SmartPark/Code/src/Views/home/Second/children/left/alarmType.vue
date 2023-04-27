<template>
  <div class="alarmTop">
    <Lease_title>车辆违规类型统计</Lease_title>
    <chyCharts
      width="330"
      height="220"
      :options="options"
      :isFirst="true"
      container="alarmTopPie"
    ></chyCharts>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import chyCharts from "../../components/v3echarts.vue";
export default defineComponent({
  setup() {
    // let array1 = [
    //   { name: "人工智能", value: 43, unit: "家" },
    //   { name: "鲲鹏计算", value: 217, unit: "家" },
    //   { name: "科技金融", value: 55, unit: "家" },
    // ];
    const options = ref({
      color: ["#F6C74C", "#13CEBA", "#2D98FF", "#FF6C83"],
      // title:{
      //   text:"告警分类统计",
      //   textStyle:{
      //     fontSize:16,
      //     color:"#fff",
      //     fontWeight:100,
      //     fontFamily:"Tencent",
      //   }
      // },
      legend: {
        bottom: "0%",
        right: "5%",
        data: ["逆行", "超速行驶", "乱放乱停"],
        itemGap: 10,
        itemStyle: {},
        textStyle: {
          padding: 10,
          fontSize: 14,
          color: "#FFF",
          width: 150,
          align: "left",
          rich: {
            a: {
              width: 110,
              align: "right",
              // color: 'red',
              fontSize: 18,
              padding: [0, 20, 0, 0],
            },
            unit: {
              width: 20,
              align: "right",
              fontSize: 14,
            },
          },
        },
      },
      // formatter: function (name: string) {
      //   let _index = 0;
      //   array1.forEach((item, i) => {
      //     if (item.name == name) {
      //       _index = i;
      //     }
      //   });
      //   let arr;
      //   arr = [
      //     `${name}{a|${array1[_index].value}}{unit|${array1[_index].unit}}`,
      //   ];
      //   let item = arr.join("");
      //   return item;
      // },
      series: [
        {
          type: "pie",
          radius: ["45%", "55%"],
          center: ["50%", "45%"],
          avoidLabelOverlap: false,
          itemStyle: {
            // borderRadius: 30,
            // borderColor: "#151B3B",
            // borderWidth: 10,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",

              color: "#fff",
              formatter: (params: any) => {
                return `{title|${params.value}}\n${params.data.unit}`;
              },
              rich: {
                title: {
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "#428CF0",
                },
              },
            },
            scaleSize: 5,
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 43,
              name: "逆行",
              unit: "次",
            },
            {
              value: 217,
              name: "超速行驶",
              unit: "次",
            },
            {
              value: 55,
              name: "乱放乱停",
              unit: "次",
            },
            // {
            //   value: 85,
            //   name: "其他",
            //   unit:"次"
            // },
          ],
        },
        {
          name: "外边框",
          type: "pie",
          clockWise: false, //是否需要顺时加载
          hoverAnimation: false, //是否需要鼠标移入变大
          center: ["50%", "45%"],
          radius: ["65%", "66%"],
          label: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 1,
              name: "",
              itemStyle: {
                borderWidth: 1,
                borderColor: "#BADCFF5C",
                borderType: "dashed",
              },
            },
          ],
        },
      ],
    });
    onMounted(() => {
      // setInterval(() => {
      //     options.value.series[0].data.sort(function (a:any, b:any) { return Math.random() > .5 ? -1 : 1; })
      // }, 5000);
    });

    return {
      options,
    };
  },

  components: {
    chyCharts,
  },
});
</script>
<style lang="scss" scoped></style>
