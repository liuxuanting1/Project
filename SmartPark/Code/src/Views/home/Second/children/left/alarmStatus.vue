<template>
  <div class="alarmStatus">
    <Lease_title>入驻企业租售比</Lease_title>

    <div class="rental">
      <div class="arcdfe" @click="PointAdd">
        <!-- <span>{{ wer }}</span> -->

        <V3count :startVal="0" :endVal="wer" :duration="3000"></V3count>
        <span>租赁数量(家)</span>
      </div>
      <div class="arcdfe" @click="PointDel">
        <V3count
          style="color: #f6c84c"
          :startVal="0"
          :endVal="wqr"
          :duration="3000"
        ></V3count>
        <span>销售数量(家)</span>
      </div>
    </div>
    <chyCharts
      height="210"
      :options="options"
      container="alarmStatusPie"
    ></chyCharts>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import * as echarts from "echarts";
import chyCharts from "../../components/v3echarts.vue";
import { PointList } from "@/utils/second/pointList";
export default defineComponent({
  setup() {
    let wer: any = ref("556");
    let wqr: any = ref("104");

    let options = ref({
      title: {
        text: " {num|" + "租赁率:" + 83 + "%\n}",
        x: "50%",
        y: "45%",
        textAlign: "center",
        textStyle: {
          rich: {
            num: {
              fontWeight: "500",
              color: "#fff",
              fontFamily: "SJyunhei",
              fontSize: 24,
              lineHeight: "150",
            },
            b: {
              fontWeight: "500",
              color: "#fff",
              fontFamily: "SJyunhei",
              fontSize: 20,
            },
          },
        },
      },
      series: [
        {
          name: "最外层",
          type: "gauge",
          radius: "105%",
          center: ["50%", "70%"],
          splitNumber: 0, //刻度数量
          startAngle: 180,
          endAngle: 0,
          min: 0, //最小刻度
          max: 100, //最大刻度
          z: 0,
          zlevel: 0,
          axisLine: {
            show: true,
            lineStyle: {
              // 轴线样式
              width: 6, // 宽度
              color: [[1, "#325775"]],
              type: "dotted",
            },
          },
          //分隔线样式
          splitLine: {
            show: true,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          pointer: {
            show: true,
            length: "200%",
            width: "2%",
          },
        },
        {
          name: "数据显示",
          type: "gauge",
          radius: "90%",
          center: ["50%", "70%"],
          splitNumber: 0, //刻度数量
          startAngle: 180,
          endAngle: 0,
          min: 0, //最小刻度
          max: 750, //最大刻度
          z: 2,
          zlevel: 2,
          axisLine: {
            show: true,
            lineStyle: {
              // 轴线样式
              width: 30, // 宽度
              color: [
                [
                  0.85,
                  new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#2D98FF",
                    },
                    {
                      offset: 1,
                      color: "#5AD9CB",
                    },
                  ]),
                ],
                [1, "#F6C74C"],
              ],
            },
          },
          //分隔线样式。
          splitLine: {
            show: true,
          },
          axisLabel: {
            show: false,
            color: "#4b695e",
            fontSize: 20,
            distance: 0,
          },
          axisTick: {
            show: true,
            splitNumber: 60,
            distance: -15,
            lineStyle: {
              color: "rgba(21, 136, 138, 1)",
              width: 1,
            },
            length: -150,
          },
          pointer: {
            show: true,
            length: "125%",
            width: "1%",
            itemStyle: {
              color: "#FFFFFF",
            },
          },
          //仪表盘详情，用于显示数据。
          detail: {
            show: true,
            offsetCenter: ["-5%", "-25%"],
            color: "#ffffff",
            //    formatter:{}
            textStyle: {
              fontSize: 20,
              color: "rgba(255,255,255,0)",
            },
          },
          data: [{ value: 636 }],
        },
        {
          name: "背景内",
          type: "gauge",
          radius: "70%",
          center: ["50%", "68%"],
          splitNumber: 100, //刻度数量
          startAngle: 180,
          endAngle: 0,
          min: 0, //最小刻度
          max: 100, //最大刻度
          z: 2,
          zlevel: 2,
          axisLine: {
            show: true,
            lineStyle: {
              // 轴线样式
              width: 2, // 宽度
              color: [
                [
                  114,
                  new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "rgba(1, 54, 55, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(1, 54, 55, 1)",
                    },
                  ]),
                ],
                [1, "rgba(1, 54, 55, 1)"],
              ],
            },
          },
          //分隔线样式。
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          pointer: {
            show: true,
            length: "80%",
            width: "2%",
          },
        },
        {
          name: "背景内",
          type: "gauge",
          radius: "50%",
          center: ["50%", "68%"],
          splitNumber: 100, //刻度数量
          startAngle: 180,
          endAngle: 0,
          min: 0, //最小刻度
          max: 100, //最大刻度
          z: 2,
          zlevel: 2,
          axisLine: {
            show: true,
            lineStyle: {
              // 轴线样式
              width: 1112, // 宽度
              color: [
                [
                  114,
                  new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "rgba(73,86,117, 0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(73,86,117, 0.3)",
                    },
                  ]),
                ],
                [1, "rgba(73,86,117, 0.3)"],
              ],
            },
          },
          //分隔线样式。
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          pointer: {
            show: true,
            length: "80%",
            width: "2%",
          },
        },
      ],
    });

    const idsList: any = [];

    const PointAdd = async () => {
      // window.__g.marker.clear();
      // if (this.idsList) {
      //   window.__g.customTag.delete(this.idsList);
      //   this.idsList = [];
      // }

      PointList.forEach((item) => {
        let obj1 = {
          id: `Point${item.id}`,
          coordinate: item.point,
          contentURL:
            window.location.origin +
            `/company/QyPoint.html?label=${item.label}&value=${item.value}`, // 网页URL
          contentSize: [300, 170], //网页窗口宽高 [width, height]
          popupSize: [300, 170], //弹窗尺寸
          popupPos: [300, 0], //弹窗位置: [x, y]
          pivot: [0.5, 1], // 中心点
          range: [1, 50000], //显示范围：[min, max]
          autoHidePopupWindow: true, //失去焦点后是否自动关闭弹出窗口
        };
        idsList.push(obj1.id);
        __g.customTag.add(obj1);
      });
    };

    const PointDel = async () => {
      await __g.customTag.delete(idsList);
    };

    return {
      options,
      wer,
      wqr,
      PointAdd,
      PointDel,
    };
  },
  components: {
    chyCharts,
  },
});
</script>
<style lang="scss" scoped>
.arcdfe {
  cursor: pointer;
}
.rental {
  width: 100%;
  // height: 220px;
  // border: 4px solid red;
  display: flex;
  justify-content: space-around;
  @include MarginTop(5);
  position: relative;
  > div {
    //   width: 692px;
    //   height: 220px;
    // border: 4px solid red;

    text-align: center;
    span {
      display: block;
      font-family: PingFangSC-Medium;
      font-weight: Medium;
      @include FontSize(16);
      color: rgba(255, 255, 255, 0.8);
      letter-spacing: 1px;
      text-align: center;
      line-height: 32px;
      &:nth-child(1) {
        font-family: Tencent;
        font-weight: Regular;
        line-height: 32px;
        @include FontSize(32);
        @include MarginBottom(10);
        color: #2d98ff;
      }
    }
    &:nth-child(1) {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        @include Width(4);
        height: 70px;
        opacity: 0.4;
        border: 1px solid #ffffff;
        right: -40px;
      }
    }
  }
}
</style>