<!--
 * @Author: Liu Xuanting
 * @Date: 2022-02-22 21:18:05
 * @LastEditTime: 2022-02-22 23:11:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Third\index.vue
-->
<!-- Third 第三个页面-（名称） -->
<template>
  <div class="Third">
    <Left_box>
      <Left />
    </Left_box>
    <Right_box>
      <Right />
    </Right_box>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount, reactive } from "vue";
import Left_box from "@/components/left_box.vue";
import Right_box from "@/components/right_box.vue";
import Left from "./Left";
import Right from "./Right";

let secondNav = reactive([
  {
    name:"菜单一",
  }
])
</script>
<style lang="scss" scoped>

</style>
