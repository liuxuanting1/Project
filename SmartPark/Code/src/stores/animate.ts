/*
 * @Author: Liu Xuanting
 * @Date: 2022-02-23 01:34:35
 * @LastEditTime: 2022-02-23 01:38:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 
 * @FilePath: \DTSWeekly_zhyq\src\stores\animate.ts
 */
// @ts-check
import { defineStore } from "pinia";

export const useAnimateStore = defineStore({
  id: "Animate",
  state: () => ({
    Animate: false,
  }),

  actions: {
    async SetAnimate(pyload: any) {
      this.$patch({
        Animate: pyload,
      });
    },
  },
});
