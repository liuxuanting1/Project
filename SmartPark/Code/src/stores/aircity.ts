/*
 * @Author: Liu Xuanting
 * @Date: 2021-11-18 22:54:40
 * @LastEditTime: 2022-03-01 11:08:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 
 * @FilePath: \fdaircityinit\src\stores\aircity.ts
 */

// @ts-check
import { defineStore } from "pinia";

export const useAirCityStore = defineStore({
  id: "aircity",
  state: () => ({
    AirCityPlayer: null,
    AirCityApi: null,
    TreeInfo: null,
    IsOnReady: false,
    eventMessage: {}
  }),

  actions: {
    async SetAirCityPlayer(pyload: any) {
      this.$patch({
        AirCityPlayer: pyload,
      });
    },
    async SetAirCityApi(pyload: any) {
      this.$patch({
        AirCityApi: pyload,
      });
    },
    async SetTreeInfo(pyload: any) {
      this.$patch({
        TreeInfo: pyload,
      });
    },
    async SetIsOnReady(pyload: any) {
      this.$patch({
        IsOnReady: pyload,
      });
    },

    async SetEventMessage(pyload: any) {  
      this.$patch({
        eventMessage: pyload,
      });
    },
  },
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useAirCityStore, import.meta.hot));
// }
