/*
 * @Author: Liu Xuanting
 * @Date: 2021-11-28 01:41:11
 * @LastEditTime: 2022-02-25 06:36:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue3ts\vue3\vue.config.js
 */

const title = "DTSWeekly-智慧园区运营分析系统";
module.exports = {
  publicPath: "/",

  devServer: {
    // 配置服务器
    open: true,
    // 项目运行时候的端口号
    port: 8080,
    // https: false,
    disableHostCheck: true,

    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      "/api": {
        target: "http://120.77.174.86:8200/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      "/WeatherId": {
        target: "https://geoapi.qweather.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/WeatherId": "",
        },
      },
      "/WeatherData": {
        target: "https://devapi.qweather.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/WeatherData": "",
        },
      },
    },
  },
  css: {
    sourceMap: true, // 开启 CSS source maps
    loaderOptions: {
      sass: {
        prependData: "@import '@/styles/common.scss';",
      },
      // postcss: {
      //   plugins: [
      //     // eslint-disable-next-line @typescript-eslint/no-var-requires
      //     require("postcss-px-to-viewport")({
      //       unitToConvert: "px", // 需要转换的单位，默认为"px"
      //       viewportWidth: 1920, // 视窗的宽度，对应pc设计稿的宽度，一般是1920
      //       viewportHeight: 1080, // 视窗的高度，对应的是我们设计稿的高度,我做的是大屏监控,高度就是1080
      //       unitPrecision: 3, // 单位转换后保留的精度
      //       propList: [
      //         // 能转化为vw的属性列表
      //         "*",
      //       ],
      //       viewportUnit: "vw", // 希望使用的视口单位
      //       fontViewportUnit: "vw", // 字体使用的视口单位
      //       selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
      //       minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
      //       mediaQuery: false, // 媒体查询里的单位是否需要转换单位
      //       replace: true, // 是否直接更换属性值，而不添加备用属性
      //       exclude: /(\/|\\)(node_modules)(\/|\\)/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
      //     }),
      //   ],
      // },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = title;
      return args;
    });
    if (process.env.NODE_ENV === "production") {
      //生产包取消console debugger打印
      config.optimization.minimizer("terser").tap((args) => {
        args[0].terserOptions.compress.drop_console = true;
        args[0].terserOptions.compress.drop_debugger = true;
        args[0].terserOptions.compress.pure_funcs = ["console.log"];
        args[0].terserOptions.output = {
          comments: false,
        };
        return args;
      });
    }
  },
};
