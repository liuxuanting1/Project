<template>
  <div class="Industry">
    <Lease_title>园区成果</Lease_title>
    <div class="ListSlide">
      <div
        v-for="(item, index) in gatewayt"
        :key="index"
        class="contentbox animate__animated animate__fadeInUp"
        :style="`animation-delay:  ${index * 300}ms`"
      >
        <div class="id">{{ item.userType }}</div>
        <div class="center">{{ item.accessType }}</div>

        <div class="right">
          <V3count
            class="num"
            :startVal="0"
            :endVal="item.location"
            :duration="3000"
          ></V3count>
          <span>家</span>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
      
<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from "vue";
import * as echarts from "echarts";
import chyCharts from "../../components/v3echarts.vue";
export default defineComponent({
  setup() {
    let color = [
      "rgb(255,108,131)",
      "rgb(120,119,232)",
      "rgb(0,106,208)",
      "rgb(0,210,186)",
      "rgb(45,152,255)",
      "#F6C84C",
    ];
    const gatewayt = reactive([
      {
        userType: "1",
        accessType: "世界500强",
        ascess: "4",
        location: "4",
      },
      {
        userType: "2",
        accessType: " 上市企业",
        ascess: "25",
        location: "25",
      },
      {
        userType: "3",
        accessType: " 国家高新企业",
        ascess: "76",
        location: "76",
      },
      {
        userType: "4",
        accessType: " 深圳市高新企业",
        ascess: "89",
        location: "89",
      },
      {
        userType: "5",
        accessType: " 鲲鹏产业链",
        ascess: "217",
        location: "217",
      },
      {
        userType: "6",
        accessType: " 人工智能产业链",
        ascess: "43",
        location: "43",
      },
      // {
      //   userType: "7",
      //   accessType: "科技金融",
      //   ascess: "6",
      //   location: "6",
      // },
      {
        userType: "7",
        accessType: " 其他企业",
        ascess: "556",
        location: "556",
      },
    ]);
    return {
      gatewayt,
    };
  },
  components: {},
});
</script>
<style lang="scss" scoped>
.ListSlide {
  transition-property: transform;
  position: relative;
  width: 100%;
  flex-shrink: 0;
  @include MarginTop(10);
  .contentbox {
    @include Width(310);
    @include hHeight(40);
    display: flex;
    @include FontSize(16);
    align-items: center;
    justify-content: space-between;
    @include MarginBottom(10);
    @include PaddingRight(10);

    &:hover {
      background-color: rgba(216, 204, 162, 0.15);
      cursor: pointer;
    }
    .id {
      @include Width(50);
      text-align: center;
      @include MarginRight(15);
    }
    .center {
      flex: 1;
    }
    .right {
      text-align: right;
      @include FontSize(18);
      .num {
        @include FontSize(30);
        font-family: SJyunhei-Regular, SJyunhei;
        font-weight: 400;
        color: #f6c84c;
        @include PaddingRight(30);
        text-align: right;
        width: 70px;
        cursor: pointer;
      }
    }
  }
}
</style>