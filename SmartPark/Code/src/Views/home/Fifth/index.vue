<!--
 * @Author: Liu Xuanting
 * @Date: 2022-02-22 21:19:44
 * @LastEditTime: 2022-03-03 15:46:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Fifth\index.vue
-->
<!-- Fifth 第五个页面-（名称）-->
<template>
  <div class="Fifth">
    <!-- 室外 -->
    <div v-if="nowMenu == 1" class="wrap">
      <Left_box><Left /> </Left_box>
      <Right_box><Right /></Right_box>
      <XRay_Guan></XRay_Guan>
    </div>

    <!-- 室内 -->
    <div v-if="nowMenu == 2" class="wrap">
      <Left_box><Left1 /> </Left_box>
      <Right_box>
        <Right1 />
      </Right_box>
      <Build></Build>
    </div>
    <transition
      appear
      name="custom-classes-transition"
      enter-active-class="animate__animated   animate__fadeInUp"
      leave-active-class="animate__animated  animate__fadeOutUp"
    >
      <div class="menus">
        <div
          @click="nowMenu = 1"
          :class="nowMenu == 1 ? 'menu menu_active' : 'menu'"
        >
          告警中心
        </div>
        <div
          @click="nowMenu = 2"
          :class="nowMenu == 2 ? 'menu menu_active' : 'menu'"
        >
          数据分析
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import Left_box from "@/components/left_box.vue";
import Right_box from "@/components/right_box.vue";
import Right from "./components/Right/index.vue";
import Left from "./components/Left/index.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";
import Left1 from "./components2/left/index.vue";
import Right1 from "./components2/right/index.vue";
import Build from "./components2/build.vue";
import XRay_Guan from "./components/XRay_Guan.vue";
import { useChaiLouStore } from "@/stores/chailou";

onMounted(async () => {
  const chaiLouStore = useChaiLouStore();

  await chaiLouStore.Close_Lights();
  console.log("关掉了");
});
const nowMenu = ref(1);
</script>
<style lang="scss" scoped>
.menus {
  position: absolute;
  z-index: 100;
  @include Bottom(40);
  left: 0;
  right: 0;
  margin: auto;
  @include Width(300);
  // @include hHeight(50);
  @include FontSize(16);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .menu {
    @include Width(120);
    @include hHeight(60);
    display: flex;
    justify-content: center; 
    align-items: center;
    cursor: pointer;
    background: url("~@/assets/images/home/sub_menu1_default@2x.png") no-repeat
      center/cover;
    background-size: 100%;
    color: rgba(255, 255, 255, 0.815);
    transition: all 0.5s;
  }
  .menu_active {
    background: url("~@/assets/images/home/sub_menu1_hover@2x.png") no-repeat
      center/cover;
    color: #f6c84c;
    background-size: 100%;
  }
}

.a {
  color: rgb(51, 102, 204);
}
</style>
