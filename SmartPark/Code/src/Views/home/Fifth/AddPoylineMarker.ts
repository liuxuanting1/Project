/*
 * @Author: Liu Xuanting
 * @Date: 2022-03-02 16:35:27
 * @LastEditTime: 2022-03-04 22:24:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \DTSWeekly_zhyq\src\Views\home\Fifth\AddPoylineMarker.ts
 */
import { featureCollection, point, center, Position } from "@turf/turf";
export const AddPoylineMarker = async (val: number, status: boolean) => {
  //   console.log(Os, "Os");

  if (status && val) {
    const Coords: any = {
      one: {
        coord: [
          [75.28337097167969, 506.130126953125],
          [79.8235855102539, 513.4580688476562],
          [61.750736236572266, 524.5233154296875],
          [56.14396667480469, 514.4690551757812],
          [62.0150032043457, 511.029296875],
          [63.25716781616211, 513.1145629882812],
          [75.28337097167969, 506.130126953125],
        ],
        color: "#CC3399",
        text: "会议室",
      },
      two: {
        coord: [
          [56.13031768798828, 514.9102783203125],
          [61.84544372558594, 510.9642639160156],
          [45.05374526977539, 482.0230407714844],
          [38.13985061645508, 485.9940490722656],
          [38.98958206176758, 487.9941101074219],
          [41.69632339477539, 490.0724182128906],
          [51.7321662902832, 507.175537109375],
        ],
        color: "#66CCCC",
        text: "办公区",
      },
      three: {
        coord: [
          [64.8220443725586, 512.1235961914062],
          [82.74067687988281, 501.6702880859375],
          [78.94572448730469, 495.500732421875],
          [61.30552291870117, 506.0142517089844],
        ],
        color: "#66CCCC",
        text: "办公区",
      },
      four: {
        coord: [
          [59.95054626464844, 502.1166076660156],
          [77.0218276977539, 492.1879577636719],
          [71.49186706542969, 482.868408203125],
          [54.34580612182617, 492.8794860839844],
        ],
        color: "#66CCCC",
        text: "办公区",
      },
      five: {
        coord: [
          [52.197021484375, 489.12774658203125],
          [49.411075592041016, 484.2976989746094],
          [66.38105773925781, 474.36273193359375],
          [69.32145690917969, 479.1487121582031],
        ],
        color: "#66CCCC",
        text: "办公区",
      },
      six: {
        coord: [
          [52.970916748046875, 479.4828186035156],

          [63.03318405151367, 473.59649658203125],
          [58.43040084838867, 466.2172546386719],
          [56.48676300048828, 464.7694091796875],
          [49.86431121826172, 469.46014404296875],
          [48.09416580200195, 471.0556640625, 98.31774139404297],
        ],
        color: "#FFCC00",
        text: "洗手间",
      },
      senve: {
        coord: [
          [82.46626281738281, 494.46051025390625, 101.10558319091797],
          [87.82759857177734, 491.37042236328125, 101.10559844970703],
          [76.8320083618164, 472.564208984375, 101.10558319091797],
          [71.548095703125, 475.67327880859375, 101.10558319091797],
        ],
        color: "#339933",
        text: "多功能厅",
      },
      eight: {
        coord: [
          [75.5835952758789, 506.0927734375],

          [82.77424621582031, 501.723876953125],
          [84.17696380615234, 503.9784851074219],
          [87.31592559814453, 509.2992858886719, 101.10559844970703],
          [84.17057800292969, 511.0181884765625],
          [79.84156036376953, 513.4337768554688],
          [75.5835952758789, 506.0927734375],
        ],
        color: "#FFCC00",
        text: "洗手间",
      },
      Jiu: {
        coord: [
          [81.40840911865234, 498.9197692871094, 98.31773376464844],
          [87.51014709472656, 509.3055725097656, 98.31773376464844],
          [95.03064727783203, 503.8780212402344, 98.31773376464844],
          [89.27611541748047, 493.95477294921875, 98.31773376464844],
        ],
        color: "#66CCCC",
        text: "办公区",
      },
      Shi: {
        coord: [
          [65.65082550048828, 471.9587097167969, 98.31773376464844],
          [60.31910705566406, 462.515625, 98.31773376464844],
          [65.48394775390625, 458.9263916015625, 98.31773376464844],
          [68.90762329101562, 459.416748046875, 98.31773376464844],
          [75.49714660644531, 470.2431640625, 98.31773376464844],
          [70.2734146118164, 473.3242492675781, 98.31773376464844],
          [68.51943969726562, 470.4834289550781, 101.20557403564453],
          [65.6694107055664, 472.16046142578125, 101.10558319091797],
        ],
        color: "#339933",
        text: "多功能厅",
      },
      Shiyi: {
        coord: [
          [50.054534912109375, 479.0331726074219, 101.10558319091797],
          [38.00604248046875, 485.9927978515625, 101.10558319091797],
          [36.23241424560547, 482.8688659667969, 101.1055679321289],
          [35.79314041137695, 480.42230224609375, 98.31773376464844],
          [37.38042068481445, 478.6956787109375, 98.31773376464844],
          [46.370967864990234, 472.5836181640625, 101.10557556152344],
        ],
        color: "#66CCCC",
        text: "办公区",
      },
    };
    let height: any = null;
    switch (val) {
      case 1:
        height = 29.150436401367188;
        break;
      case 2:
        height = 33.95029830932617;
        break;
      case 3:
        height = 38.19725036621094;
        break;
      case 4:
        height = 42.68795394897461;
        break;
      case 5:
        height = 47.09477615356445;
        break;
      case 6:
        height = 51.631778717041016;
        break;
      case 7:
        height = 56.138301849365234;
        break;
      case 8:
        height = 60.60261154174805;
        break;
      case 9:
        height = 65.09162902832031;
        break;
      case 10:
        height = 69.84569549560547;
        break;
      case 11:
        height = 74.23262786865234;
        break;
      case 12:
        height = 78.71785736083984;
        break;
      case 13:
        height = 83.10263061523438;
        break;
      case 14:
        height = 87.59577178955078;
        break;
      case 15:
        height = 89.31773376464844;
        break;
      case 16:
        height = 96.7956314086914;
        break;
      case 17:
        height = 101.10557556152344;
        break;
      case 18:
        height = 105.837158203125;
        break;
      case 19:
        height = 110.22123718261719;
        break;
      case 20:
        height = 114.78348541259766;
        break;
      case 21:
        height = 119.31388854980469;
        break;
      case 22:
        height = 123.78229522705078;
        break;
      case 23:
        height = 128.37246704101562;
        break;
      case 24:
        height = 132.80445861816406;
        break;
      case 25:
        height = 137.3146514892578;
        break;
      case 26:
        height = 141.84031677246094;
        break;
      case 27:
        height = 146.3065185546875;
        break;
      case 28:
        height = 150.81942749023438;
        break;
      case 29:
        height = 155.34146118164062;
        break;
      case 30:
        height = 159.83111572265625;
        break;
      case 31:
        height = 164.39207458496094;
        break;
      case 32:
        height = 168.740234375;
        break;
      case 33:
        height = 173.2401580810547;
        break;
      case 34:
        height = 177.72328186035156;
        break;
      case 35:
        height = 182.2175750732422;
        break;
      // case 36:
      //   height = 1;
      //   break;

      default:
        break;
    }
    const Os: any = [];
    const Ms: any = [];
    Object.keys(Coords).map((item: any, index) => {
      const features = featureCollection(
        Coords[item].coord.map((item: Position) => point(item))
      );

      const centers = center(features);
      console.log(centers, "centers");

      Coords[item].coord.forEach((item: any) => {
        //   console.log(item, "item");
        item[2] = height + 0.1;
      });
      // 33.95-29.15
      Os.push({
        id: "polygon_Fifth" + index,
        coordinates: Coords[item].coord,
        color: Coords[item].color, //多边形的填充颜色
        frameColor: Coords[item].color, //边框颜色
        frameThickness: 0.5, //边框厚度
        intensity: 2, //亮度
        style: 2, //单色 请参照API开发文档选取枚举
        depthTest: true, //是否做深度检测
        //  color: [0, 0, 1, 1], //颜色值
        // height: 3, //3D多边形的高度
        // intensity: 4, //亮度
        // style: 4, //3DPolygon的样式 请参照API开发文档选取枚举
        // tillingX: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图横向平铺
        // tillingY: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图纵向平铺
      });
      const Random = Math.floor(Math.random() * 10);
      Ms.push({
        id: "m1_Fifth" + index,
        text: Coords[item].text, //3D标注显示文字
        textSize: 60, //3D标注显示文字大小
        textColor: [1, 1, 1, 1], //3D标注显示文字颜色
        textOutlineSize: 1, //3D标注显示文字轮廓大小
        // textOutlineColor: [1, 1, 1, 1], // 3D标注显示文字轮廓颜色
        textFixed: false, // 3D标注显示文字是否固定文本朝向
        textVisible: true, //3D标注显示文字是否显示文本
        textLocation: [0, 0, 0], // 文字位置
        textRotation: [0, 0, 0], // 文字旋转
        textScale: [3, 3, 3], // 文字缩放
        pointName:
          Random % 3 === 1
            ? "Point_R_3"
            : Random % 4 === 1
            ? "Point_Y_3"
            : "Point_B_4", //3D标注展示的特效名称
        pRandomointVisible: true, //3D标注是否显示
        pointScale: 0.8, //3D标注整体缩放比例
        coordinate: [
          centers.geometry.coordinates[0],
          centers.geometry.coordinates[1],
          height + 2.3,
        ], //3D标注的位置坐标
      });
    });
    await __g.polygon.clear();
    await __g.marker3d.clear();
    __g.marker3d.add(Ms);
    __g.polygon.add(Os);
  } else {
    await __g.polygon.clear();
    await __g.marker3d.clear();
  }
};
