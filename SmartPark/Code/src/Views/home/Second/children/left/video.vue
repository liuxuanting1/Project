<template>
    <div class="alarmPie">
        <Lease_title>车流实时路况</Lease_title>
        <div class="videoName">高新南七路停车场入口</div>
        <div class="monitor">
            <video src="/video/客流量.mp4" autoplay muted loop></video>
        </div>
    </div>
</template>
      
      <script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
    setup() {



        return {
        }

    },


    components: {
    }
})
</script>
<style lang="scss" scoped>
.videoName{
    @include FontSize(16);
    font-family: Tencent;
    letter-spacing: 0.1em;
    @include MarginLeft(20);
    @include MarginTop(30);
}
.monitor {
    // margin-top: 20px;
    @include MarginTop(10);
    width: 90%;
    margin-left: 5%;
    // height: 180px;
    @include hHeight(180);
    background: rgba($color: #fff, $alpha: 0.2);
    // border-radius: 2px;
    @include BorderRadius(2);
    // padding: 10px;
    @include Padding(10, 10, 10, 10);
    video {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
}
</style>