<!--
 * @Author: Liu Xuanting
 * @Date: 2022-02-25 02:00:45
 * @LastEditTime: 2022-02-27 16:57:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\First\left\index.vue
-->
<!-- left -->

<template>
  <Box :height="320">
    <Lease_title>园区介绍</Lease_title>
    <One />
  </Box>

  <Box :height="350">
    <Lease_title>设备告警</Lease_title>
    <Two />
  </Box>
  <Box :height="280">
    <Lease_title>园区成果</Lease_title>
    <Three />
  </Box>
</template>
<script lang="ts" setup>
import Lease_title from "@/components/Lease_title/index.vue";
import Box from "@/components/Box/index.vue";
import Three from "./three.vue";
import Two from "./two.vue";
import One from "./one.vue";
</script>

<style lang="scss" scoped></style>
