/*
 * @Author: Liu Xuanting
 * @Date: 2021-11-29 13:45:00
 * @LastEditTime: 2021-12-03 12:06:07
 * @LastEditors: Liu Xuanting
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3_ts_init\src\shims-vue.d.ts
 */
/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "*.json" {
  const value: any;
  export default value;
}
