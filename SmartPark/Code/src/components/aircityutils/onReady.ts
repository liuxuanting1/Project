/*
 * @Author: Liu Xuanting
 * @Date: 2021-08-30 15:24:44
 * @LastEditTime: 2022-03-03 21:23:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \aircityinit\src\AirCityUtils\onReady.js
 */
import { useAirCityStore } from "@/stores/aircity";
import { BPFunction } from "@/utils/BPFunction";
import { useChaiLouStore } from "@/stores/chailou";
const OnReady = async () => {
  await __g.reset();

  
  __g.settings.setCampassVisible(false);
  __g.misc.setMainUIVisibility(false);
  const AirCityStore = useAirCityStore();
  const BuildStore = useChaiLouStore();
  await __g.camera.get(
    (r: { x: any; y: any; z: any; pitch: any; yaw: any }) => {
      console.log(`Camera: ${r.x}, ${r.y}, ${r.z}, ${r.pitch}, ${r.yaw}`);
    }
  );
  const res = await __g.infoTree.get();
  console.log(res.infotree, "res.infotree");
  // 确保能够拿到oid来初始化拆楼
  const IsShowOver = async () => {
    const Show: any = [];
    let flag = false;
    let timer = null;
    timer && clearTimeout(timer);
    res.infotree.forEach((item: any) => {
      if (item.name === "jz36") {
        Show.push(item.iD);
      }
    });
    const result = await __g.tileLayer.getObjectIDs(Show);
    result.data.forEach((mon: any) => {
      if (mon.objectIds) {
        flag = true;
      }
    });
    if (flag) {
      await BuildStore.InitBuild();
      AirCityStore.SetTreeInfo(res.infotree);
      AirCityStore.SetIsOnReady(true);
      await __g.settings.setCampassVisible(false);
      __g.settings.setMainUIVisibility(false);
    } else {
      timer = setTimeout(() => {
        IsShowOver();
      }, 2000);
    }
  };
  IsShowOver();

  BPFunction(1);
};
export default OnReady;
