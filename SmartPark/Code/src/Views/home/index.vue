<!--
 * @Author: Liu Xuanting
 * @Date: 2021-11-18 22:05:57
 * @LastEditTime: 2022-03-14 20:40:25
 * @LastEditors: zhc
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \fdaircityinit\src\Views\home\index.vue
-->
<template>
  <Player />
  <Header />
  <!-- <Headerlink /> -->
  <!-- <Echarts /> -->
  <router-view></router-view>
</template>
<script lang="ts" setup>
import Player from "@/components/player/player.vue";
import Header from "@/components/header/index.vue";
import { getMockData } from "@/api/connect";
import { onMounted, computed } from "vue-demi";

import { useAirCityStore } from "@/stores/aircity";
// import Echarts from "./echarts/index.vue";
defineProps({
  msg: {
    type: String,
    required: false,
  },
});
const AirCityStore = useAirCityStore();
const IsOnReady = computed(() => AirCityStore.$state.IsOnReady);
onMounted(async () => {
  const result = await getMockData();
  console.log(result);
});
</script>
<style lang="scss" scoped></style>
