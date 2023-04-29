<template>
  <div class="Seventh">
    <LeftBox>
      <KeepAlive>
        <div class="leftBox" v-if="activeMenuIndex == 0">
          <Box :height="450">
            <statistics></statistics>
          </Box>
          <Box :height="330">
            <equipment></equipment>
          </Box>
          <Box :height="320">
            <Nightingale></Nightingale>
          </Box>
        </div>
        <div class="leftBox" v-else>
          <Box :height="300">
            <orderList></orderList>
          </Box>
          <Box :height="330">
            <alarmType></alarmType>
          </Box>
          <Box :height="340">
            <orderReduce></orderReduce>
          </Box>
          <downs v-show="false"></downs>
          <!-- <videos></videos> -->
        </div>
      </KeepAlive>
    </LeftBox>
    <RightBox>
      <KeepAlive>
        <div class="rightBox" v-if="activeMenuIndex == 0">
          <Box :height="350">
            <alarmStatus></alarmStatus>
          </Box>
          <Box :height="260">
            <orderStatus></orderStatus>
          </Box>
          <Box :height="300">
            <Industry></Industry>
          </Box>
        </div>
        <div class="rightBox" v-else>
          <Box :height="150">
            <cameraInfo></cameraInfo>
          </Box>
          <Box :height="300">
            <videos></videos>
          </Box>
          <Box :height="450">
            <orderTime></orderTime>
          </Box>

          <!-- <alarmType></alarmType> -->
        </div>
      </KeepAlive>
    </RightBox>
    <transition appear name="custom-classes-transition" enter-active-class="animate__animated   animate__fadeInUp" leave-active-class="animate__animated  animate__fadeOutUp">
      <div class="sub-menu">
        <div class="menu-item" v-for="(item, index) in menuList" :key="index" :class="{ 'menu-item-active': activeMenuIndex == index }" @click="handleMenuActiveChange(item, index)">
          {{ item.title }}
        </div>
      </div>
    </transition>
    <Tools :width="50">
      <div :class="isPark ? 'Reset isactive' : 'Reset'" @click="togglePark" v-if="activeMenuIndex == 0">
        <el-tooltip class="box-item" effect="dark" content="企业统计" placement="left">
          <Icon icon="qiye" fontSize="22"></Icon>
        </el-tooltip>
      </div>
      <div :class="isRoad ? 'Reset isactive' : 'Reset'" @click="toggleRoad" v-if="activeMenuIndex == 1">
        <el-tooltip class="box-item" effect="dark" content="实时路况" placement="left">
          <Icon icon="a-1lukuang" fontSize="22"></Icon>
        </el-tooltip>
      </div>
      <div :class="isHot ? 'Reset isactive' : 'Reset'" @click="toggleHot" v-if="activeMenuIndex == 1">
        <el-tooltip class="box-item" effect="dark" content="热力图" placement="left">
          <Icon icon="relitu" fontSize="22"></Icon>
        </el-tooltip>
      </div>
    </Tools>

    <Dialog :visible="dialogStore.dialogVisible" :title="dialogStore.LouInfo.PropertyName" :width="390" :height="350" @close="dialogClose" :XY="dialogStore.XY">
      <div class="infoList">
        <div class="item" v-for="(item, index) in dialogStore.LouInfo.info" :key="item.id">
          <img :src="imgList[index]" />
          <div class="info">{{ item.value }}</div>
          <div class="label">{{ item.label }}</div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeUnmount, computed, watch } from 'vue'
import LeftBox from '@/components/left_box.vue'
import RightBox from '@/components/right_box.vue'
import Box from '@/components/Box/index.vue'
import Icon from '@/components/Icon/index.vue'
import Tools from '@/components/Tools.vue'
import Dialog from '@/components/Dialog/index.vue'
import { useDialogStore } from '@/stores/dialog'
// left
import alarmStatus from './children/left/alarmStatus.vue'
import alarmType from './children/left/alarmType.vue'
import statistics from './children/left/statistics.vue'
import equipment from './children/left/equipment.vue'
import videos from './children/left/video.vue'
import Industry from './children/left/Industry.vue'
import Nightingale from './children/left/Nightingale.vue'

// right
import orderList from './children/right/orderList.vue'
import orderReduce from './children/right/orderReduce.vue'
import downs from './children/right/down.vue'
import orderStatus from './children/right/orderStatus.vue'
import orderTime from './children/right/orderTime.vue'
import cameraInfo from './children/right/cameraInfo.vue'
// DTS
import { roadList } from '@/utils/second/roadList'
import { AddPoline, DelPoline } from '@/utils/second/PolygonLine'
import { PointList } from '@/utils/second/pointList'
import { onBeforeRouteLeave } from 'vue-router'
import { Item } from 'ant-design-vue/lib/menu'
export default defineComponent({
  setup() {
    const activeMenuIndex = ref(0)
    let dialogStore = useDialogStore()
    const menuList = ref([
      {
        title: '产业服务',
      },
      {
        title: '实时路况',
      },
    ])
    const handleMenuActiveChange = (item: any, index: number) => {
      activeMenuIndex.value = index

      AllClose()
      // if (isPark.value) {
      //   togglePark();
      // }
      // if (isRoad.value) {
      //   toggleRoad();
      // }
      // if (isHot.value) {
      //   toggleHot();
      // }
      // __g.tileLayer.stopHighlightActor();
      console.log(activeMenuIndex.value)
    }

    // 三维功能
    const isPark = ref(false)
    const isRoad = ref(false)
    const isHot = ref(false)

    const idsList: any = []

    const togglePark = async () => {
      if (isPark.value) {
        await __g.customTag.delete(idsList)
      } else {
        PointList.forEach(item => {
          let obj1 = {
            id: `Point${item.id}`,
            coordinate: item.point,
            contentURL: window.location.origin + `/company/QyPoint.html?label=${item.label}&value=${item.value}`, // 网页URL
            contentSize: [350, 160], //网页窗口宽高 [width, height]
            popupSize: [350, 160], //弹窗尺寸
            popupPos: [600, 100], //弹窗位置: [x, y]
            pivot: [0.5, 0.6], // 中心点
            range: [1, 50000], //显示范围：[min, max]
            autoHidePopupWindow: true, //失去焦点后是否自动关闭弹出窗口
          }
          idsList.push(obj1.id)
          __g.customTag.add(obj1)
        })
        await __g.camera.set(-40.0775, 48.516904, 433.992695, -33.598759, -47.92371, 1)
      }

      isPark.value = !isPark.value
    }
    const toggleRoad = async () => {
      let res = await __g.infoTree.get()
      let carLineId = res.infotree.find((item: any) => item.name === '车线').iD

      if (isRoad.value) {
        // DelPoline(roadList)
        // console.log('删除线')

        __g.tileLayer.hide(carLineId)
      } else {
        await __g.camera.set(-41.317856, -149.189362, 1225.314331, -59.746544, -61.870464, 1)

        __g.tileLayer.show(carLineId)

        // setTimeout(() => {
        //   AddPoline(roadList)
        //   console.log('绘制线')
        // }, 1500)
      }
      isRoad.value = !isRoad.value
    }
    const toggleHot = async () => {
      let hotPic: any = []
      let res = await __g.infoTree.get()
      res.infotree.forEach((item: any) => {
        if (item.name == '热力图') {
          hotPic = [item.iD]
        }
      })
      console.log('热力图的iD是:' + hotPic)
      if (isHot.value) {
        await __g.infoTree.hide(hotPic)
      } else {
        await __g.infoTree.show(hotPic)
      }
      isHot.value = !isHot.value
    }

    const AllClose = () => {
      if (isPark.value) {
        togglePark()
      }
      if (isRoad.value) {
        toggleRoad()
      }
      if (isHot.value) {
        toggleHot()
      }
      __g.tileLayer.stopHighlightActor()

      dialogStore.setDialogVisible(false)
    }

    // watch(() => dialogStore,(value:any) => {
    //   console.log("aasscc");
    //   console.log(value);
    // },)

    const imgList = ['/img/tag_marker/icon3.png', '/img/tag_marker/icon4.png', '/img/tag_marker/icon4.png', '/img/tag_marker/icon3.png', '/img/tag_marker/icon4.png', '/img/tag_marker/icon3.png', '/img/tag_marker/icon3.png', '/img/tag_marker/icon4.png']
    const dialogClose = () => {
      dialogStore.setDialogVisible(false)
      __g.tileLayer.stopHighlightActor()
    }

    onBeforeUnmount(() => {
      // 退出关闭

      AllClose()
      // if (isPark.value) {
      //   togglePark();
      // }
      // if (isRoad.value) {
      //   toggleRoad();
      // }
      // if (isHot.value) {
      //   toggleHot();
      // }
      // __g.tileLayer.stopHighlightActor();
    })
    return {
      handleMenuActiveChange,
      activeMenuIndex,
      menuList,
      togglePark,
      toggleRoad,
      toggleHot,
      isPark,
      isRoad,
      isHot,
      dialogStore,
      dialogClose,
      imgList,
    }
  },
  components: {
    LeftBox,
    RightBox,
    Box,
    Tools,
    Icon,
    Dialog,
    alarmType,
    statistics,
    equipment,
    videos,
    Industry,
    Nightingale,
    alarmStatus,
    orderList,
    orderReduce,
    orderStatus,
    downs,
    orderTime,
    cameraInfo,
  },
})
</script>
<style lang="scss" scoped>
// Dialog弹框样式

.infoList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    width: 25%;
    gap: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @include FontSize(14);
    // @include Margin(15, 0 ,10);
    margin: 15px 0px 10px;
    > img {
      @include Width(30);
      object-fit: cover;
    }
    .label {
      color: #ffd564;
    }
    .value {
      color: #fff;
    }
  }
}
.leftBox,
.rightBox {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 5px;
  @include PaddingLeft(10);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  > * {
    width: 100%;
    // height: 210px;
    padding: 5px;
  }
  // &::before {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  //   // padding: 10px;
  //   border: 1px solid #ccc;
  //   z-index: 0;
  // }
}
.leftBox {
  &::before {
    border-right: none;
    mask: linear-gradient(90deg, #fff 10%, transparent);
  }

  padding-right: 0px;
}
.rightBox {
  &::before {
    border-left: none;
    mask: linear-gradient(270deg, #fff 10%, transparent);
  }
  padding-left: 0px;
}

.sub-menu {
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
  .menu-item {
    @include Width(120);
    @include hHeight(60);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: url('~@/assets/images/home/sub_menu1_default@2x.png') no-repeat center/cover;
    background-size: 100%;
    color: rgba(255, 255, 255, 0.815);
    transition: all 0.5s;
  }
  .menu-item-active {
    background: url('~@/assets/images/home/sub_menu1_hover@2x.png') no-repeat center/cover;
    color: #f6c84c;
    background-size: 100%;
  }
}

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
    color: #ffc622;
  }
}
</style>
