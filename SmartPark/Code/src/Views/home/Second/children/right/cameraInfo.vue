



<template>
  <div class="orderTime">
    <Lease_title>园区周边摄像头统计</Lease_title>
    <div class="access">
      <div class="access-info">
        <div class="access-info__item">
          <div class="access-info__value">339</div>
          <span>总数 (个)</span>
        </div>
        <div class="access-info__item">
          <div class="access-info__value">335</div>
          <span>在线 (个)</span>
        </div>
        <!-- <div class="access-info__item">
          <div class="access-info__value">133</div>
          <span>人脸 (台)</span>
        </div> -->
      </div>
    </div>
  </div>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue'
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
.access {
  // height: 75px;
  @include hHeight(150);
  p {
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 1);
    // font-size: 20px;
    @include FontSize(20);
    font-weight: 500;
    font-family: "PingFang SC";
    text-align: left;
    // letter-spacing: 1px;
    @include LetterSpacing(1);
    // padding: 0 10px 8px;
    @include Padding(0, 10, 8, 10);
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.6);

    // margin-bottom: 6px;
    @include MarginBottom(6);
    span span {
      // font-size: 16px;
      @include FontSize(16);
      font-weight: 500;
      color: rgba($color: #fff, $alpha: 0.6);
    }
  }
  .access-info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    // padding: 15px 20px;
    @include Padding(15, 20, 15, 20);
    height: 100%;
    &__item {
      text-align: center;
      span {
        color: rgba(255, 255, 255, 1);
        // font-size: 18px;
        @include FontSize(16);

        font-weight: 500;
        font-family: "PingFang SC";
        text-align: center;
        // letter-spacing: 2.67px;
        @include LetterSpacing(2.67);
      }
    }
    &__value {
      color: rgba(246, 200, 76, 1);
      // font-size: 27px;
      @include FontSize(40);
      font-weight: 400;
      font-family: "Tencent";
      text-align: center;
      // letter-spacing: 1px;
      @include LetterSpacing(1);
      // margin-bottom: 5px;
      @include MarginBottom(20);
    }
  }
}
</style>