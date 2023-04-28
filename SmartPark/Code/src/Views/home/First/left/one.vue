<!--
 * @Author: Liu Xuanting
 * @Date: 2022-02-26 19:15:25
 * @LastEditTime: 2022-02-28 02:02:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\First\left\one.vue
-->
<!-- one -->
<template>
  <div class="yuanqu_info">
    <div class="concent">
      <div class="title">xxx园区</div>
      <p>
        经过30多年的发展建设，已构建了“一区多园”各具特色的发展格局，全面提升一区多园“高精尖”产业承接能力、协同发展能力、产业服务能力。
      </p>
    </div>
  </div>
  <div class="bg"></div>
  <div class="parte">
    <div
      :class="`box${index + 1} item`"
      v-for="(item, index) in CardList"
      :key="item.id"
    >
      <div :class="item.isnow ? 'isnow info_box' : 'info_box'">
        <div v-if="item.svg" class="left">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.svg" />
          </svg>
        </div>
        <div class="right">
          <div class="title">{{ item.title }}</div>
          <div class="info">
            <span class="value">{{ item.value }}</span>
            <span class="unit">{{ item.unit }}</span>
          </div>
        </div>
        <div class="tips" v-if="item.tips || item.tips == 0">
          剩余车位:
          <span id="updata">{{ item.tips }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Gasp from "gsap";
import { onMounted, onUnmounted, ref, watch } from "vue";
let peopers = ref({ num: 60890, max: 100000 });
let cars = ref({ num: 1356, max: 5326 });
let CardList = ref([
  {
    id: 1,
    title: "占地面积",
    value: "13.25",
    unit: "万平方米",
    svg: "#zhihui_icon-gailan_icon_qiyezengjia",
  },
  {
    id: 2,
    title: "容积率",
    value: "9.2",
    unit: "",
    svg: "#zhihui_icon-gailan_icon_jingqidu",
  },
  {
    id: 5,
    title: "园区总投资",
    value: "134",
    unit: "亿",
    svg: "#zhihui_icon-gailan_icon_lvhua",
  },
  {
    id: 4,
    title: "建筑面积",
    value: "163.5",
    unit: "万平方米",
    svg: "#zhihui_icon-gailan_icon_mianji",
  },

  {
    id: 3,
    title: "当前在园人数",
    value: peopers.value.num,
    unit: "人",
    svg: "#zhihui_icon-gailan_icon_renshu",
    isnow: true,
  },
  {
    id: 6,
    title: "总车位",
    value: cars.value.max,
    unit: "个",
    tips: cars.value.num,
    svg: "#zhihui_icon-gailan_icon_chewei",
    isnow: true,
  },
]);
const changeNumber = (val: any) => {
  const updata: any = document.getElementById("updata");

  Gasp.to(cars.value, {
    duration: 1,
    num: val,

    onUpdate: () => {
      CardList.value[5].tips = Number(cars.value.num.toFixed(0));
      updata.style.color = "#fff";
    },
    onComplete: () => {
      updata.style.color = "#24f158";
    },
  });
};
const changepeopersNumber = (val: any) => {
  Gasp.to(peopers.value, {
    duration: 2,
    num: val,

    onUpdate: () => {
      CardList.value[4].value = Number(peopers.value.num.toFixed(0));
    },
  });
};

let timer = ref();
const getdata = () => {
  timer.value = setInterval(() => {
    if (cars.value.num >= 0 && cars.value.num <= cars.value.max) {
      let math = Math.floor(Math.random() * 10);
      let num =
        math % 2 === 1
          ? cars.value.num + Math.floor(Math.random() * 30)
          : cars.value.num - Math.floor(Math.random() * 30);
      if (num < 0) {
        num = 0;
      }
      if (num > cars.value.max) {
        num = cars.value.max;
      }
      changeNumber(num);
    }
    if (peopers.value.num >= 0 && peopers.value.num <= peopers.value.max) {
      let math = Math.floor(Math.random() * 10);
      let num =
        math % 2 === 1
          ? peopers.value.num + Math.floor(Math.random() * 300)
          : peopers.value.num - Math.floor(Math.random() * 300);
      if (num < 0) {
        num = 0;
      }
      if (num > peopers.value.max) {
        num = peopers.value.max;
      }
      changepeopersNumber(num);
    }
  }, 5000);
};
onMounted(() => {
  // getdata();
  getdata();
});
onUnmounted(() => {
  clearInterval(timer.value);
});
</script>
<style lang="scss" scoped>
.bg {
  position: absolute;
  width: 100%;
  @include BorderRadius(5);
  height: 100%;
  background: url("./yuanqu.jpg") no-repeat center/cover;
  opacity: 0.4;
  top: 0;
}
.yuanqu_info {
  position: absolute;
  z-index: 10;
  @include LineHeight(18);
  color: #ffffffc9;
  @include FontSize(12);
  text-indent: 2em;

  .title {
    @include MarginBottom(5);
    @include LineHeight(5);
    color: #ffffff;
    @include FontSize(14);
  }
}
.parte {
  width: 100%;
  height: 56%;
  display: grid;
  position: absolute;
  z-index: 10;
  @include Bottom(5);

  left: 0;
  right: 0;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 1vw * 5 / $widthRatio;
  grid-row-gap: 1vw * 5 / $widthRatio;
  .item {
    cursor: pointer;
  }
  > * {
    background-color: #151b3b67;
    @include BorderRadius(5);
  }
  .isnow {
    background: url("./蓝色碎片飞舞.gif") no-repeat;
  }
}
.info_box {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  z-index: 10;
  justify-content: flex-start;
  .left {
    @include Width(30);
    @include wHeight(30);
    @include MarginLeft(10);
    @include MarginRight(5);
    border-radius: 50%;

    .icon {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    .title {
      @include FontSize(12);

      @include MarginBottom(5);

      font-family: "PingFangSC-Regular, PingFang SC";
      font-weight: 500;
      opacity: 0.8;
    }
    .info {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      .value {
        @include FontSize(12);

        color: #4a98f7;
        font-family: "SJyunhei";
      }
      .unit {
        @include FontSize(12);

        color: #4a98f7;
        @include MarginLeft(1);

        @include MarginRight(5);
      }
      .tb {
        font-size: 10px;
        color: #ccc;
      }
      .up {
        // background-color: #16898a;
        color: #16898a;
        border-color: #16898a;
        .num {
          font-family: SJyunhei-Regular;

          &::before {
            transform: rotate(-135deg);
            top: 60%;
          }
        }
      }
      .down {
        // background-color: #b24e72;
        color: #b24e72;
        border-color: #b24e72;
        .num {
          font-family: SJyunhei-Regular;
          &::before {
            transform: rotate(45deg);
          }
        }
      }
      .num {
        color: inherit;
        font-size: 10px;
        position: relative;
        margin-left: 10px;
        &::before {
          position: absolute;
          top: 50%;
          left: -30px;
          content: "";
          width: 0;
          height: 0;
          border-bottom: 20px solid red;
          border-color: inherit;
          border-left: 20px solid transparent;
          // transform:
        }
      }
    }
  }
  .tips {
    @include Width(120);

    position: absolute;
    top: 0%;
    right: 0%;
    background-color: #3359b0d0;
    // padding: 10px 10px 4px 8px;
    @include Padding(10, 5, 4, 8);
    border-top-right-radius: 1vw * 5 / $widthRatio;

    border-bottom-left-radius: 1vw * 15 / $widthRatio;
    color: #fff;
    @include FontSizeScale(8);
    transform-origin: 100% 0%;
    span {
      position: absolute;
      @include MarginLeft(2);
      color: #24f158;
      @include FontSize(12);

      font-weight: 600;
    }
  }
}
</style>
