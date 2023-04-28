<!--
 * @Author: Liu Xuanting
 * @Date: 2022-02-22 21:15:40
 * @LastEditTime: 2022-03-04 21:33:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\First\index.vue
-->
<!-- First 第一个页面-（名称）-->
<template>
  <div class="First">
    <Left_box> <Left /> </Left_box>
    <Right_box><Right /></Right_box>

    <Tools :width="50">
      <div @click="Reset" class="Reset">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="回到默认视角"
          placement="left"
        >
          <Icon icon="dangqiandingwei" fontSize="22"></Icon>
        </el-tooltip>
      </div>
      <div
        @click="openAnimation"
        :class="Animation ? 'Reset isactive' : 'Reset'"
      >
        <el-tooltip
          class="box-item"
          effect="dark"
          content="漫游"
          placement="left"
        >
          <Icon icon="icon-feixingmanyou" fontSize="22"></Icon>
        </el-tooltip>
      </div>
      <div @click="Marker_Poly3d" :class="MPFlag ? 'Reset isactive' : 'Reset'">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="电子围栏"
          placement="left"
        >
          <Icon icon="weilanfenxi" fontSize="22"></Icon>
        </el-tooltip>
      </div>
    </Tools>
    <transition
      appear
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__faster  animate__fadeInUp"
      leave-active-class="animate__animated animate__faster animate__fadeOutDown"
    >
      <div v-if="Animation" class="Animation">
        <div
          class="list"
          v-for="(item, index) in AnimationList.data"
          :key="item.id"
          @click="playAnimation(item)"
        >
          <div class="imgbase">
            <!-- {{ index }} -->
            <img
              :src="'data:image/png;base64,' + AnimationImages[index].image"
              alt=""
            />
          </div>
          <div class="title">
            <span>
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import Left_box from "@/components/left_box.vue";
import Right_box from "@/components/right_box.vue";
import Left from "./left/index.vue";
import Right from "./right/index.vue";
import Tools from "@/components/Tools.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { Add3DMarker, AddMarker, Addpolygon3d } from "./Add_Marker_Polygon3d";
import Icon from "@/components/Icon/index.vue";
import { useChaiLouStore } from "@/stores/chailou";
const louceng = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];

const Animation = ref(false);
const openAnimation = () => {
  Animation.value = !Animation.value;
};
// 重置视角
const Reset = () => {
  // ChaiLouStore.XRay(true);
  __g.camera.stopAnimation();
  // __g.camera.set(-397.30069, 468.838867, 162.044998, -9.431671, -5.256323, 1);
  __g.camera.set(-470.681091, 299.16748, 493.580536, -25.648424, -8.115864, 1);
};
// 导览缩略图及列表
const AnimationList = ref();
const AnimationImages = ref();
// 播放导览
const playAnimation = (val: any) => {
  //参数：导览序号
  __g.camera.playAnimation(val.id);
};
// 电子围栏
const MPFlag = ref(false); //状态
const Marker_Poly3d = () => {
  MPFlag.value = !MPFlag.value;
  if (MPFlag.value) {
    Addpolygon3d(true);
    AddMarker(true);
  } else {
    Addpolygon3d(false);
    AddMarker(false);
  }
};
onMounted(async () => {
  AnimationList.value = await __g.camera.getAnimationList();
  console.log(AnimationList.value, "AnimationList");
  AnimationImages.value = await Promise.all(
    AnimationList.value.data.map((item: any) =>
      __g.camera.getAnimationImage(item.name)
    )
  );
  Reset();
  console.log(AnimationImages.value, "AnimationImage");
  Add3DMarker(true);
  // Marker_Poly3d();
});
const BuildStore = useChaiLouStore();
onUnmounted(async () => {
  // 离开页面停止播放导览
  __g.camera.stopAnimation();
  await BuildStore.InitBuild();
  Addpolygon3d(false);
  AddMarker(false);
  Add3DMarker(false);
});
</script>
<style lang="scss" scoped>
.Reset {
  width: 100%;
  @include hHeight(40);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.13);
  transition: all 0.3s;

  &:hover {
    // color: rgb(94, 245, 237);
    transform: scale(1.2);
  }
  &.isactive {
    color: #ffd564;
  }
}
.Animation {
  position: absolute;
  @include Width(750);
  @include hHeight(100);
  @include Bottom(20);
  // @include left(0);
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-y: auto;
  .list {
    @include Width(100);
    @include hHeight(100);
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include BorderRadius(10);
    @include MarginLeft(10);
    @include MarginRight(10);
    overflow: hidden;
    cursor: pointer;
    &:hover img {
      transform: scale(1.2);
    }
    .imgbase {
      @include Width(100);
      @include hHeight(100);
      img {
        transition: all 0.5s;
        width: 100%;

        // height: 100%;
      }
    }
    .title {
      @include Width(100);
      // @include hHeight(20);
      // // @include MarginTop(10);
      text-align: center;
      position: absolute;
      @include Bottom(15);
    }
  }
}
</style>
<style lang="scss">
.el-popper {
  @include FontSize(14);
}
</style>
