<template>
  <div class="container">
    <Header>智能预警</Header>
    <div class="list-box">
      <div class="list-header">
        <div class="alert-item" v-for="(item, index) in alertCategory" :key="item.icon" @click="changeActive(index)" :class="{ 'alert-item-active': index === alertCategoryActiveIndex }">
          <el-badge :value="item.total" class="item" :max="99" v-if="item.total">
            <Icon :icon="item.icon" fontSize="22" />
          </el-badge>
          <Icon :icon="item.icon" fontSize="22" v-else />
          <div class="item-title">{{ item.title }}</div>
        </div>
      </div>
      <h5>预警列表</h5>
      <div class="list-wrap">
        <div :class="[getLevStyle(item.level), { clicked: item === alertActiveItem }, 'list-item animate__animated animate__fadeInUp']" v-for="(item, index) in alertList.filter(item => item.icon === alertCategory[alertCategoryActiveIndex].icon || alertCategory[alertCategoryActiveIndex].title === '全部')" :style="`animation-delay:  ${index * 300}ms`" :key="index" @click="handleAlertListClick(item)">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="date-time">{{ item.date }}</div>
          <div class="icon-box">
            <Icon :icon="item.icon" fontSize="22" />
          </div>
        </div>
        <div style="text-align: center; width: 100%; padding-top: 5%">暂无更多</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, onBeforeUnmount, computed } from 'vue'
import Header from '../components/Header.vue'
import { useChaiLouStore } from '@/stores/chailou'
import { default3DMarkOpt, defaultPolyLineOpt, defaultRadiationPointOpt, defaultTagOpt, drawPersonnelTrack } from './drawOpt'
import { useAirCityStore } from '@/stores/aircity'
export default defineComponent({
  name: '',
  components: { Header },
  setup(props, content) {
    const self = reactive({
      alertCategory: [
        {
          icon: 'yijicaidan',
          title: '全部',
          total: 0,
        },
        {
          icon: 'gaiicon-',
          title: '能效管理',
          total: 0,
        },
        {
          icon: 'gongxiangdanche',
          total: 0,
          title: '便捷通行',
        },
        {
          icon: 'guifandunpai',
          total: 0,
          title: '综合安防',
        },
        {
          icon: 'wangguanshebei',
          total: 0,
          title: '设备管理',
        },
        {
          icon: 'kongjian',
          total: 0,
          title: '环境空间',
        },
      ],
      alertCategoryActiveIndex: 0,
      alertList: [
        // {
        //   id: 1522,
        //   title: "需量预警",
        //   desc: "进线功率偏高",
        //   icon: "gaiicon-",
        //   level: 2,
        //   date: "2021-05-06 16:01:23",
        //   clickState: 0,
        // },
        // {
        //   id: 4120,
        //   title: "工单处理异常",
        //   desc: "未处理工单较多",
        //   level: 1,
        //   icon: "wangguanshebei",
        //   clickState: 0,
        //   date: "2021-05-08 13:23:48",
        // },
        // {
        //   id: 102,
        //   title: "设备预警",
        //   desc: "部分参数异常",
        //   icon: "wangguanshebei",
        //   level: 3,
        //   clickState: 0,
        //   date: "2021-05-13 09:18:26",
        // },
        // {
        //   id: 851,
        //   title: "会议室使用率较低",
        //   desc: "部分参数异常",
        //   level: 0,
        //   icon: "kongjian",
        //   clickState: 0,
        //   date: "2021-05-24 14:23:52",
        // },
        // {
        //   id: 1521,
        //   title: "工位使用率较低",
        //   desc: "空位较多",
        //   icon: "kongjian",
        //   level: 0,
        //   clickState: 0,
        //   date: "2021-05-16 17:43:09",
        // },
        // {
        //   id: 482,
        //   title: "环境质量偏低",
        //   desc: "J区环境异常",
        //   icon: "kongjian",
        //   level: 3,
        //   clickState: 0,
        //   date: "2021-05-19 12:03:41",
        // },
        {
          id: 1528,
          title: '消防告警',
          desc: 'F区二氧化碳浓度超标',
          icon: 'kongjian',
          level: 3,
          clickState: 0,
          date: '2021-05-19 16:03:28',
        },
        // {
        //   id: 4515,
        //   title: "人员排队",
        //   desc: "J区负一楼排队较长",
        //   icon: "guifandunpai",
        //   level: 3,
        //   clickState: 0,
        //   date: "2021-05-27 08:59:33",
        // },
        {
          id: 155,
          title: '人员聚集',
          desc: 'J区出现人员聚集现象',
          icon: 'guifandunpai',
          level: 0,
          clickState: 0,
          date: '2021-05-27 08:59:33',
        },
        // {
        //   title: "设备预警",
        //   desc: "出线柜温度较高",
        //   icon: "wangguanshebei",
        //   level: 2,
        //   clickState: 0,
        //   date: "2021-05-28 14:45:30",
        // },
        // {
        //   id: 1455,
        //   title: "工单处理异常",
        //   desc: "维修工单超时无人处理",
        //   icon: "wangguanshebei",
        //   level: 2,
        //   clickState: 0,
        //   date: "2021-05-28 14:45:30",
        // },
        // {
        //   id: 451,
        //   title: "停车位数量预警",
        //   desc: "可用停车位不足",
        //   icon: "gongxiangdanche",
        //   level: 1,
        //   clickState: 0,
        //   date: "2021-05-28 14:45:30",
        // },
        {
          id: 615,
          title: '人员黑名单',
          desc: '人员黑名单告警',
          icon: 'guifandunpai',
          level: 2,
          clickState: 0,
          date: '2021-05-28 14:52:30',
        },
        {
          id: 617,
          title: '人员黑名单',
          desc: '人员黑名单告警',
          icon: 'guifandunpai',
          level: 2,
          clickState: 0,
          date: '2021-05-28 17:25:30',
        },
      ],
      alertActiveItem: {},
      specialId: '',
    })

    self.alertCategory.forEach(item => {
      item.total = self.alertList.reduce((pre, curr) => {
        if (item.icon === curr.icon || item.title === '全部') {
          return pre + 1
        }
        return pre
      }, 0)
    })
    const ChaiLouStore = useChaiLouStore()
    const levStyles = ['remind', 'abnormal', 'warning', 'error']
    //获取对应等级的样式
    const getLevStyle = (lev: number) => {
      let len = levStyles.length
      if (lev > len) lev = len - 1
      return levStyles[lev]
    }
    //菜单项激活态修改
    const changeActive = (index: number) => {
      self.alertCategoryActiveIndex = index
    }
    const AirCityStore = useAirCityStore()
    const treeInfo: any = computed(() => AirCityStore.$state?.TreeInfo)
    const handleAlertListClick = async (item: typeof self.alertList[0]) => {
      await __g?.radiationPoint.clear()
      await __g?.polyline.clear()
      await __g.marker3d.clear()
      await __g.tag.clear()
      await __g.heatmap.clear()
      await __g.customObject.delete('fireAlarm') //添加前清空所有customObject 防止id重复
      if (self.alertActiveItem === item) {
        self.alertActiveItem = {}
        content.emit('backPage')
        return
      } else {
        self.alertActiveItem = item
      }
      content.emit('showAlarmDetail', item)
      switch (item.icon) {
        case 'gaiicon-': //能效管理预警
          break
        case 'gongxiangdanche': //便捷通行
          break
        case 'guifandunpai': //综合安防
          // ChaiLouStore.ClickLayer(20, true);

          drawPersonnelTrack(item.title, item.id || 0)
          ChaiLouStore.Close_Lights()
          break
        case 'wangguanshebei': //设备管理
          //绘制辐射圈
          // __g?.radiationPoint.add(defaultRadiationPointOpt);
          // __g?.radiationPoint.focus(defaultRadiationPointOpt.id);
          break
        case 'kongjian': //环境空间
          if (item.title === '消防告警') {
            // texiao_5
            // 1CB19D2E4D2FCB7F804C5290729ED46D
            ChaiLouStore.ClickLayer(18, true)
            ChaiLouStore.Close_Lights()
            for (let item of treeInfo.value) {
              if (item.name === '警报特效') {
                console.log(item)
                self.specialId = item.iD
              }
            }
            __g.customObject.addByTileLayer({
              id: 'fireAlarm',
              tileLayerId: self.specialId,
              objectId: 'texiao_5',
              smoothMotion: 0, //1: 平滑插值，0: 跳跃
              location: [65.42398071289062, 499.60772705078125, 102.81773376464844],
              scale: [15, 15, 15],
            })
            __g.marker3d.add({
              id: 'fireAlarmMark3D',
              pointName: 'Point_R_7', //3D标注展示的特效名称
              pointVisible: true, //3D标注是否显示
              pointScale: 1, //3D标注整体缩放比例
              coordinate: [65.42398071289062, 499.60772705078125, 102.81773376464844], //3D标注的位置坐标
            })
            await __g.camera.set(24.982917, 507.503984, 162.639697, -52.440723, 17.963556, 1)
            // __g.customObject.setTintColor("fireAlarm", [2, 0, 0, 1]);
          }
          break

        default:
          break
      }
    }

    onBeforeUnmount(async () => {
      await __g.customObject.delete('fireAlarm') //添加前清空所有customObject 防止id重复
      await __g?.radiationPoint.clear()
      await __g?.polyline.clear()
      await __g.marker3d.clear()
      await __g.tag.clear()
      await __g.heatmap.clear()
    })
    return {
      ...toRefs(self),
      changeActive,
      getLevStyle,
      handleAlertListClick,
    }
  },
})
</script>
<style lang="scss" scoped>
.container {
  // @include Padding(30, 10, 10, 10);
  height: 95%;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.123);
  .list-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .list-header {
      @include hHeight(150);
      display: flex;
      flex-wrap: wrap;
      //   padding-left: 10px;
      @include PaddingLeft(10);
      box-sizing: border-box;
      .alert-item {
        width: 33%;
        display: flex;
        justify-content: left;
        align-items: center;
        cursor: pointer;
        // font-size: 14px;
        @include FontSize(14);
        color: #c0c0c0;
        .item-title {
          //   margin-left: 5px;
          @include MarginLeft(5);
        }
        &:deep(.el-badge) {
          .el-badge__content--danger {
            background: red;
          }
          .el-badge__content {
            border: none;
            // font-size: 12px;
            @include FontSize(12);
            zoom: 0.8;
          }
        }
      }
      .alert-item-active {
        color: #fff;
        transition: all 0.3s;
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff700, 0 0 70px #fff700;
      }
    }
    .list-wrap {
      display: flex;
      flex-wrap: wrap;
      overflow-y: auto;
      //   max-height: calc(100% - 30px - 36px - 124px);
      @include maxHHeight(688);
      .list-item {
        width: 100%;
        // height: 80px;
        @include hHeight(90);
        // margin-bottom: 10px;
        @include MarginBottom(10);
        background-image: linear-gradient(to right, rgba(0, 70, 248, 0.15), rgba(25, 113, 221, 0));
        position: relative;
        // padding: 10px 15px;
        @include Padding(10, 15, 10, 15);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        // font-size: 12px;
        @include FontSize(12);
        cursor: pointer;
        .title {
          @include FontSize(14);
          @include LineHeight(15);
          //   font-size: 14px;
        }
        .desc {
          @include LineHeight(15);
        }
        .icon-box {
          position: absolute;
          //   right: 40px;
          @include Right(40);
        }

        &::before {
          content: '';
          position: absolute;
          left: 3px;
          top: 0;
          //   width: 5px;
          @include Width(5);
          height: 100%;
          background: rgb(74, 118, 169);
          box-shadow: none;
        }

        &.remind {
          .icon-box {
            color: rgb(32, 88, 228);
          }
        }
        &.abnormal {
          .icon-box {
            color: rgb(85, 46, 228);
          }
        }
        &.warning {
          .icon-box {
            color: rgb(226, 223, 60);
          }
        }
        &.error {
          .icon-box {
            color: rgb(228, 63, 51);
          }
        }
      }
      .clicked {
        background-image: linear-gradient(to right, rgba(0, 4, 248, 0.285), rgba(25, 113, 221, 0));

        &::before {
          transition: all 0.3s;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 0px 3px rgba(255, 255, 255, 1);
        }
      }
      // @keyframes clicked {
      //   0% {
      //     opacity: 0.5;
      //   }
      //   50% {
      //     opacity: 0;
      //   }
      //   100% {
      //     opacity: 1;
      //   }
      // }
    }
  }
  h5 {
    @include MarginBottom(15);
    font-family: PingFangSC-Medium;
    font-weight: Medium;
    // font-size: 14px;
    @include FontSize(14);
    color: #dbd8ab;
    // letter-spacing: 7.2px;
    width: 100%;
    // padding: 0 120px;
    // line-height: 128px;
    // height: 128px;
    background: url('~@/assets/images/基础框架通用元素切图/三级标题块/长.png') no-repeat;
    background-size: 100% 100%;
    // margin: 6px 0;
    // padding: 5px 0;
    @include Margin(6, 0, 6, 0);
    @include Padding(5, 0, 5, 10);
    // margin-top: 36px;
    // margin-bottom: 40px;
  }
}
</style>
