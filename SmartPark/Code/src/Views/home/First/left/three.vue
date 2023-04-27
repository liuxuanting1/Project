<!--
 * @Author: your name
 * @Date: 2022-02-26 15:59:20
 * @LastEditTime: 2022-02-26 18:35:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\First\left\three.vue
-->
<!--  -->
<template>
  <div id="wrap">
    <div id="showcase" class="noselect">
      <div v-for="(item, index) in data" :key="index" class="cloud9-item">
        <div class="topdata">
          <div class="num">
            <span> {{ item.top.num }} </span>
            <span class="unit"> {{ item.top.unit }} </span>
          </div>
          <div class="title">{{ item.top.name }}</div>
        </div>
        <!-- <div class="bottomdata">
            <div class="num">
              <span> {{ item.bottom.num }} </span>
              <span class="unit"> {{ item.bottom.unit }} </span>
            </div>
            <div class="title">{{ item.bottom.name }}</div>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
const data = reactive([
  {
    top: {
      name: "鲲鹏产业链",
      unit: "家",
      num: 217,
    },
    bottom: {
      name: "鲲鹏年产值",
      unit: "亿",
      num: 50,
    },
  },
  {
    top: {
      name: "人工智能",
      unit: "家",
      num: 43,
    },
    bottom: {
      name: "人工智能年产值",
      unit: "亿",
      num: 15,
    },
  },
  {
    top: {
      name: "科技金融",
      unit: "家",
      num: 55,
    },
    bottom: {
      name: "",
      unit: "",
      num: null,
    },
  },
  {
    top: {
      name: "国家高新企业",
      unit: "家",
      num: 76,
    },
    bottom: {
      name: "国家高新年产值",
      unit: "亿",
      num: 350,
    },
  },
  {
    top: {
      name: "深圳高新",
      unit: "家",
      num: 89,
    },
    bottom: {
      name: "深圳高新年产值",
      unit: "亿",
      num: 200,
    },
  },
  {
    top: {
      name: "上市企业",
      unit: "家",
      num: 25,
    },
    bottom: {
      name: "上市企业年产值",
      unit: "亿",
      num: 45,
    },
  },
]);
const resize = () => {
  let showcase = $("#showcase");
  console.log(showcase.Cloud9Carousel, "showcaseshowcase");

  const a = showcase.Cloud9Carousel({
    yPos: 42,
    yRadius: 48,
    mirrorOptions: {
      gap: 12,
      height: 0.2,
    },
    buttonLeft: $(".nav > .left"),
    buttonRight: $(".nav > .right"),
    autoPlay: true,
    bringToFront: true,
    onRendered: showcaseUpdated,
    onLoaded: function () {
      showcase.css("visibility", "visible");
      showcase.css("display", "none");
      showcase.fadeIn(1500);
    },
  });

  console.log(a, "aaaa");

  function showcaseUpdated(showcase: {
    nearestItem: () => any;
    floatIndex: () => number;
  }) {
    var title = $("#item-title").html($(showcase.nearestItem()).attr("alt"));

    var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI);
    title.css("opacity", 0.5 + 0.5 * c);
  }

  // Simulate physical button click effect
  // $(".nav > button").click(function (e: { target: any }) {
  //   var b = $(e.target).addClass("down");
  //   setTimeout(function () {
  //     b.removeClass("down");
  //   }, 80);
  // });

  // $(document).keydown(function (e: { keyCode: any }) {
  //   switch (e.keyCode) {
  //     /* left arrow */
  //     case 37:
  //       $(".nav > .left").click();
  //       break;

  //     /* right arrow */
  //     case 39:
  //       $(".nav > .right").click();
  //   }
  // });
};
onMounted(() => {
  resize();
  // window.addEventListener("resize", resize, false);
});
</script>
<style lang="scss" scoped>
#wrap {
  width: 90%;
  height: 90%;
}
#showcase {
  width: 100%;
  height: 100%;
  @include BorderRadius(8);
  @include MarginTop(28);

  visibility: hidden;
}

.cloud9-item {
  @include Width(120);
  @include wHeight(100);

  //   height: 108px;
  @include FontSize(16);

  background: url("./chengguobg.png") no-repeat center/cover;
  //   background: rgb(245, 21, 21);
  background-size: 100%;
  text-align: center;
  font-family: SJyunhei-Regular;
  font-weight: Regular;
  //   letter-spacing: 7.78px;
  text-align: center;
  text-indent: 1em;
  //   line-height: 80px;
  .topdata {
    // padding-top: 20px;
    @include MarginTop(20);

    @include wHeight(100);
    .num {
      color: #d7ffff;
      @include wHeight(50);
    }
    .unit {
      @include FontSize(14);
    }
    .title {
      @include FontSize(14);

      @include wHeight(50);
      color: #66a3c0;
      white-space: nowrap;
    }
  }
  .bottomdata {
    @include wHeight(50);
    .num {
      color: aquamarine;
      @include wHeight(50);
    }
    .title {
      @include FontSize(18);

      @include wHeight(50);
    }
  }
}
#item-title {
  @include FontSize(20);

  letter-spacing: 0.13em;
  text-shadow: 1px 1px 6px #c72b2b;
  text-align: center;
  @include MarginTop(28);

  @include MarginBottom(10);
}
// .nav {
//   text-align: center;
// }
// .nav > button {
//   width: 64px;
//   height: 36px;
//   color: #666;
//   font: bold 16px arial;
//   text-decoration: none;
//   text-align: center;
//   margin: 5px;
//   text-shadow: 0px 1px 0px #f5f5f5;
//   background: #f6f6f6;
//   border: solid 2px rgba(0, 0, 0, 0.4);
//   -webkit-border-radius: 5px;
//   -moz-border-radius: 5px;
//   border-radius: 5px;
//   -webkit-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.4);
//   -moz-box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.4);
//   box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.4);
//   cursor: pointer;
// }
// .nav > button:active,
// .nav > button.down {
//   background: #dfdfdf;
//   border: solid 2px rgba(0, 0, 0, 0.6);
//   box-shadow: none;
// }
// #get {
//   font-size: 20px;
//   text-align: center;
// }
// #download {
//   margin: 8px auto;
//   margin-top: 12px;
//   display: block;
// }
// #license {
//   font-size: 18px;
//   text-align: center;
//   margin: 0;
// }
// #share {
//   position: absolute;
//   left: 4px;
//   top: 478px;
// }
// .fb-like {
//   vertical-align: top;
// }
// .twitter-share-button {
//   width: 84px !important;
//   margin-left: 8px;
// }
// #credits {
//   color: #c9c9c9;
//   padding: 10px;
//   border: 2px #999 dashed;
//   position: absolute;
//   right: 0;
//   bottom: 83px;
// }
// #credits ul {
//   font-size: 14px;
//   list-style-type: none;
//   padding-left: 2px;
//   margin: 2px 0;
// }
// #credits .author {
//   color: white;
// }

// .icon-cards {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 190px;

//   height: 210px;
//   -webkit-perspective: 800px;
//   perspective: 800px;
//   -webkit-transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
// }
// .icon-cards__content {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   -webkit-transform-style: preserve-3d;
//   transform-style: preserve-3d;
//   -webkit-transform: translateZ(-182px) rotateY(0);
//   transform: translateZ(-182px) rotateY(0);
//   -webkit-animation: carousel 10s infinite cubic-bezier(1, 0.015, 0.295, 1.225)
//     forwards;
//   animation: carousel 10s infinite cubic-bezier(1, 0.015, 0.295, 1.225) forwards;
// }
// .icon-cards__item {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 190px;
//   height: 210px;
//   border-radius: 6px;
// }
// .icon-cards__item:nth-child(1) {
//   background: rgba(252, 192, 77, 0.9);
//   -webkit-transform: rotateY(0) translateZ(182px);
//   transform: rotateY(0) translateZ(182px);
// }
// .icon-cards__item:nth-child(2) {
//   background: rgba(49, 192, 204, 0.9);
//   -webkit-transform: rotateY(120deg) translateZ(182px);
//   transform: rotateY(120deg) translateZ(182px);
// }
// .icon-cards__item:nth-child(3) {
//   background: rgba(236, 233, 242, 0.9);
//   -webkit-transform: rotateY(240deg) translateZ(182px);
//   transform: rotateY(240deg) translateZ(182px);
// }
@-webkit-keyframes carousel {
  0%,
  17.5% {
    -webkit-transform: translateZ(-182px) rotateY(0);
    transform: translateZ(-182px) rotateY(0);
  }
  27.5%,
  45% {
    -webkit-transform: translateZ(-182px) rotateY(-120deg);
    transform: translateZ(-182px) rotateY(-120deg);
  }
  55%,
  72.5% {
    -webkit-transform: translateZ(-182px) rotateY(-240deg);
    transform: translateZ(-182px) rotateY(-240deg);
  }
  82.5%,
  100% {
    -webkit-transform: translateZ(-182px) rotateY(-360deg);
    transform: translateZ(-182px) rotateY(-360deg);
  }
}
@keyframes carousel {
  0%,
  17.5% {
    -webkit-transform: translateZ(-182px) rotateY(0);
    transform: translateZ(-182px) rotateY(0);
  }
  27.5%,
  45% {
    -webkit-transform: translateZ(-182px) rotateY(-120deg);
    transform: translateZ(-182px) rotateY(-120deg);
  }
  55%,
  72.5% {
    -webkit-transform: translateZ(-182px) rotateY(-240deg);
    transform: translateZ(-182px) rotateY(-240deg);
  }
  82.5%,
  100% {
    -webkit-transform: translateZ(-182px) rotateY(-360deg);
    transform: translateZ(-182px) rotateY(-360deg);
  }
}
</style>
