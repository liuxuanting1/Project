<template>
  <div class="orderList">
    <Lease_title>路况态势数据</Lease_title>
    <div class="list">
      <div class="Shuzhi" v-for="item in list" :key="item.id">
        <V3count
          @click="showLine"
          :class="[
            'value',
            item.status == 2 ? 'normal' : item.status == 3 ? 'error' : '',
          ]"
          :startVal="0"
          :endVal="item.value"
          :duration="3000"
        ></V3count>
        <span class="label">{{ item.label }}</span>
      </div>
    </div>
    <div class="body">
      <div class="nums">
        <div class="num" v-for="(item, index) in list2" :key="index">
          <V3count
            :startVal="0"
            :endVal="item.value"
            :duration="3000"
          ></V3count>
        </div>
      </div>
      <div class="points">
        <div class="line"></div>
        <div class="boxs">
          <span class="point"></span>
        </div>
        <div class="boxs">
          <span class="point"></span>
        </div>
        <div class="boxs">
          <span class="point"></span>
        </div>
      </div>
      <div class="status">
        <div class="item" @click="hideLine">
          <div class="text">超速</div>
        </div>
        <div class="item">
          <div class="text">车位乱停</div>
        </div>
        <div class="item">
          <div class="text">胡乱鸣笛</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { roadList } from "@/utils/second/roadList";
import { AddPoline, DelPoline } from "@/utils/second/PolygonLine";
export default defineComponent({
  setup() {
    //路况信息
    let list = ref([
      { id: 1, value: "54909", label: "今日进出车辆", status: 1 },
      { id: 3, value: "318", label: "今日异常车辆", status: 3 },
    ]);
    //工单详情
    let list2 = ref([{ value: 164 }, { value: 89 }, { value: 65 }]);
    let hotPic: any = [];
    // 绘制道路线

    const showLine = async () => {
      let res = await __g.infoTree.get();
      res.infotree.forEach((item: any) => {
        if (item.name == "热力图") {
          hotPic = [item.iD];
        }
      });
      console.log("热力图的iD是:" + hotPic);
      await __g.infoTree.hide(hotPic);
      await __g.camera.set(
        -41.317856,
        -149.189362,
        1225.314331,
        -59.746544,
        -61.870464,
        1
      );
      setTimeout(() => {
        AddPoline(roadList);
      }, 1500);
      console.log("绘制线");
    };

    const hideLine = async () => {
      DelPoline(roadList);
      console.log("删除线");
      await __g.infoTree.show(hotPic);
    };

    return {
      list,
      list2,
      showLine,
      hideLine,
    };
  },
});
</script>
<style lang="scss" scoped>
.orderList {
  width: 100%;
  // border: 1px solid red;
  padding: 5px;
  // background-color: #192333;
  .list {
    display: flex;
    justify-content: space-around;
    @include MarginBottom(30);
    @include MarginTop(20);
  }
  .Shuzhi {
    // width: 472px;
    // height: 472px;
    // border: 1px solid rgb(255, 0, 128);
    span {
      display: block;
    }
    .value {
      @include FontSize(32);
      font-family: Tencent;
      font-weight: 500;
      cursor: pointer;
      color: #f6c84c;
      text-align: center;
      line-height: 24px;
      -webkit-background-clip: text;
      margin: 10px 0 10px 0;
      @include MarginBottom(15);
    }
    .label {
      @include FontSize(16);
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 24px;
      text-align: center;
      -webkit-background-clip: text;
    }
    .normal {
      color: #fff;
    }
    .error {
      color: #f6574d;
    }
  }

  // 工单统计
  .body {
    width: 100%;
    margin: 0 auto;
    .nums {
      @include MarginTop(20);
      .num {
        @include FontSize(24);
        font-family: Tencent;
        color: #fff;
      }
    }
    .points {
      position: relative;
      @include MarginTop(10);
      @include MarginBottom(10);
      .point {
        @include Width(20);
        @include hHeight(20);
        border-radius: 50%;
        border: 5px solid #796d38;
        background-color: #f6c84c;
        z-index: 10;
      }
      .line {
        position: absolute;
        top: 50%;
        left: 15%;
        width: 70%;
        height: 1px;
        border: 2px dashed rgb(141, 140, 140);
        border-bottom: none;
      }
    }
    .status {
      @include hHeight(40);
      // @include MarginLeft(8);
      background: url("../../../../../assets/images/Seventh/底盘.png") no-repeat;
      background-size: 100% 100%;
      .item {
        @include FontSize(18);
        @include LineHeight(32);
      }
    }
    > * {
      width: 90%;
      display: flex;
      justify-content: space-between;
      > * {
        width: 33%;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>