/*
 * @Author: Liu Xuanting
 * @Date: 2022-03-01 17:11:50
 * @LastEditTime: 2022-03-04 21:30:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 
 * @FilePath: \20220222_CGSY_FREEDO_DTSWEEKLY_YYFXXT\src\Views\home\First\addpoline.ts
 */

export const Addpolygon3d = (val: boolean) => {
  const coord = [
    [16.257711410522461, 478.75408935546875],
    [152.32798767089844, 379.39691162109375],
    [245.16566467285156, 299.97967529296875],
    [368.25973510742188, 163.27934265136719],
    [697.73992919921875, 369.18682861328125],
    [547.99334716796875, 599.54803466796875],
    [175.32046508789063, 741.6649169921875],
    [16.257711410522461, 478.75408935546875],
  ];

  if (val) {
    const o = {
      id: "Firstpolygon3d",
      coordinates: coord,
      color: [0, 0, 1, 1], //颜色值
      height: 50, //3D多边形的高度
      intensity: 1, //亮度
      style: 3, //3DPolygon的样式 请参照API开发文档选取枚举
      tillingX: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图横向平铺
      tillingY: 0, //可选，仅当3DPolygon的样式支持贴图显示，贴图纵向平铺
    };
    __g.polygon3d.add(o);
  } else {
    __g.polygon3d.delete("Firstpolygon3d");
  }
};

export const AddMarker = async (val: boolean) => {
  const coord = [
    // [16.257711410522461, 478.75408935546875],
    // [46.627475738525391, 458.50546264648438, 0.19937500357627869],
    // [75.986572265625, 441.31863403320313, 0.16735351085662842],
    // [85.470359802246094, 435.03652954101563, 0.16737304627895355],
    [103.91445922851563, 420.5887451171875, 0.16736328601837158],
    // [125.74824523925781, 403.10635375976563, 0.16741210222244263],
    // [144.69096374511719, 385.7562255859375, 0.19957031309604645],
    [179.31182861328125, 359.98544311523438, 0.19512695074081421],
    // [197.84281921386719, 342.71633911132813, 0.19516602158546448],
    // [233.32933044433594, 311.882568359375, 0.19541016221046448],
    [271.17581176757813, 285.83535766601563, 0.19549804925918579],
    // [328.35305786132813, 220.74844360351563, 0.19612304866313934],
    [369.44735717773438, 167.56893920898438, 0.19847656786441803],
    // [406.1942138671875, 185.74761962890625, 0.3242480456829071],
    // [439.1507568359375, 206.32086181640625, 0.32530272006988525],
    // [467.22283935546875, 224.20884704589844, 0.324951171875],
    [518.87005615234375, 253.90699768066406, 0.31826171278953552],
    // [549.0728759765625, 275.239501953125, 0.17290039360523224],
    // [577.833251953125, 291.99713134765625, 0.20604492723941803],
    // [602.92950439453125, 305.87490844726563, 0.20603515207767487],
    [645.36077880859375, 334.29141235351563, 0.20611327886581421],
    // [680.27313232421875, 359.92098999023438, 0.20589843392372131],
    // [691.81689453125, 370.26223754882813, 0.19990234076976776],
    // [672.8433837890625, 404.63311767578125, 0.29092773795127869],
    [650.524658203125, 434.7935791015625, 0.16748046875],
    // [642.048583984375, 451.417724609375, 0.29095703363418579],
    // [622.87274169921875, 476.94784545898438, 0.16733399033546448],
    [614.80755615234375, 493.3114013671875, 0.29090332984924316],
    // [603.6087646484375, 504.82424926757813, 0.16734375059604645],
    // [591.35601806640625, 523.147216796875, 0.16733399033546448],
    [580.52215576171875, 538.986572265625, 0.19869628548622131],
    // [574.3297119140625, 555.03375244140625, 0.29114258289337158],
    // [564.99725341796875, 566.6683349609375, 0.29127928614616394],
    // [551.5357666015625, 580.353271484375, 0.19884277880191803],
    // [543.7701416015625, 588.6168212890625, 0.19883789122104645],
    // [527.99237060546875, 611.327880859375, 0.16465331614017487],
    [514.564697265625, 616.1038818359375, 0.16464844346046448],
    // [505.82421875, 618.3519287109375, 0.16464844346046448],
    // [496.74874877929688, 620.96502685546875, 0.16465087234973907],
    // [487.72610473632813, 624.86041259765625, 0.16463866829872131],
    [468.66156005859375, 632.38775634765625, 0.1646435558795929],
    // [459.636474609375, 635.41888427734375, 0.16464599967002869],
    // [450.92507934570313, 638.8511962890625, 0.16463866829872131],
    // [442.50421142578125, 640.64178466796875, 0.16464599967002869],
    [432.42434692382813, 644.4998779296875, 0.16463866829872131],
    // [412.35794067382813, 650.45068359375, 0.16464599967002869],
    // [395.093505859375, 658.84197998046875, 0.16464844346046448],
    // [380.4708251953125, 664.28094482421875, 0.16464844346046448],
    [359.36038208007813, 669.5911865234375, 0.1646435558795929],
    // [345.46368408203125, 679.41900634765625, 0.16464844346046448],
    // [332.3258056640625, 684.467529296875, 0.19907227158546448],
    // [321.14971923828125, 687.89947509765625, 0.45299804210662842],
    [310.55801391601563, 692.62664794921875, 0.45314940810203552],
    // [302.37322998046875, 693.62054443359375, 0.45310547947883606],
    // [288.11679077148438, 699.90374755859375, 0.45313477516174316],
    // [285.13113403320313, 701.16705322265625, 0.45315918326377869],
    [274.73513793945313, 703.04974365234375, 0.19916504621505737],
    // [259.51419067382813, 709.76190185546875, 0.45305663347244263],
    // [248.1322021484375, 712.094970703125, 0.19902344048023224],
    // [235.59165954589844, 715.4949951171875, 0.19905273616313934],
    [220.13771057128906, 726.98333740234375, 0.453125],
    // [207.78886413574219, 729.11334228515625, 0.45302245020866394],
    // [191.4862060546875, 734.759521484375, 0.45303711295127869],
    // [178.31941223144531, 740.92828369140625, 0.19974608719348907],
    [165.48379516601563, 734.7081298828125, 0.24910645186901093],
    // [159.55062866210938, 726.62744140625, 0.2060253918170929],
    // [155.05560302734375, 715.66046142578125, 0.24908691644668579],
    // [149.92314147949219, 705.910400390625, 0.24911132454872131],
    [146.34156799316406, 698.87139892578125, 0.24912597239017487],
    // [137.32060241699219, 683.31304931640625, 0.24912109971046448],
    // [127.18836212158203, 666.0726318359375, 0.24912597239017487],
    // [118.94737243652344, 652.18255615234375, 0.24909180402755737],
    [113.66339874267578, 642.02252197265625, 0.19974608719348907],
    // [108.02559661865234, 632.1278076171875, 0.17020507156848907],
    // [101.76662445068359, 621.045166015625, 0.19975097477436066],
    // [98.080390930175781, 617.723876953125, 0.19974608719348907],
    [92.023506164550781, 607.22821044921875, 0.2060839831829071],
    // [82.535636901855469, 590.85986328125, 0.20604979991912842],
    // [79.840339660644531, 585.5982666015625, 0.20606444776058197],
    // [75.285354614257813, 576.21649169921875, 0.20602050423622131],
    [68.941413879394531, 565.9254150390625, 0.2060546875],
    // [66.145469665527344, 561.23297119140625, 0.20604003965854645],
    // [61.714569091796875, 552.68939208984375, 0.20604003965854645],
    // [57.420677185058594, 546.62823486328125, 0.20603515207767487],
    [53.30078125, 536.433837890625, 0.20603515207767487],
    // [46.816349029541016, 523.86968994140625, 0.20604003965854645],
    // [41.259910583496094, 514.66497802734375, 0.20604003965854645],
    // [38.626838684082031, 511.89031982421875, 0.20604003965854645],
    // [33.005592346191406, 500.97030639648438, 0.20603515207767487],
    // [26.340259552001953, 492.417236328125, 0.20603027939796448],
    // [25.116569519042969, 487.909912109375, 0.20604003965854645],
    [31.264101028442383, 467.79656982421875, 1.311914086341858],
  ];
  // __g.marker.clear();
  if (val) {
    const Os = coord.map((item: any, index: any) => {
      return {
        id: "m1" + index,
        coordinate: [item[0], item[1], 30], //坐标位置
        coordinateType: 0, //默认0是投影坐标系，也可以设置为经纬度空间坐标系值为1
        anchors: [-16, 32], //锚点
        range: [10, 10000], //可视范围
        imagePath: window.location.origin + "/img/tag_marker/sxt.png", //显示图片路径
        imageSize: [26, 30], //图片的尺寸
        hoverImageSize: [28, 28], //鼠标悬停时显示的图片尺寸
        fixedSize: true, //图片固定尺寸，取值范围：false 自适应，近大远小，true 固定尺寸，默认值：false
        // url: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov",
        text: "枪形摄像头", //显示的文字
        useTextAnimation: true, //打开文字展开动画效果
        textRange: [100, 100], //文本可视范围[近裁距离, 远裁距离]
        textOffset: [0, 0], // 文本偏移
        textBackgroundColor: Color.White, //文本背景颜色
        fontSize: 12, //字体大小
        fontOutlineSize: 1, //字体轮廓线大小
        fontColor: Color.Red, //字体颜色
        fontOutlineColor: Color.Black, //字体轮廓线颜色

        // popupURL:
        //   "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov", //弹窗HTML链接
        popupURL: "@path:Redcon_202008040721475425964260.mp4", //弹窗HTML链接
        popupBackgroundColor: [0, 0, 0, 1], //弹窗背景颜色
        popupSize: [400, 250], //弹窗大小
        popupOffset: [0, 0], //弹窗偏移

        showLine: false, //标注点下方是否显示垂直牵引线
        lineSize: [2, 100], //垂直牵引线宽度和高度[width, height]
        lineColor: Color.SpringGreen, //垂直牵引线颜色
        lineOffset: [0, 0], //垂直牵引线偏移

        autoHidePopupWindow: true, //失去焦点后是否自动关闭弹出窗口
        autoHeight: false, // 自动判断下方是否有物体
        displayMode: 2, //显示模式
        priority: 0, //避让优先级
        occlusionCull: true, //是否参与遮挡剔除
      };
    });
    //支持经纬度坐标和普通投影坐标两种类型
    await __g.marker.add(Os);
  } else {
    __g.marker.clear();
  }
};

export const Add3DMarker = async (val: boolean) => {
  const coord = [
    {
      name: "配电",
      coord: [442.4413757324219, 368.3593444824219, 3.28583985567092896],
      pointName: "Point_B_8",
    },
    {
      name: "配电",
      coord: [363.2652587890625, 421.6114807128906, 20.16837890446186066],
      pointName: "Point_B_4",
    },
    {
      name: "配电",
      coord: [64.12651062011719, 493.05108642578125, 198.33047485351562],
      pointName: "Point_B_5",
    },
    {
      name: "配电",
      coord: [568.326904296875, 348.33172607421875, 27.01775360107422],
      pointName: "Point_B_6",
    },
    {
      name: "配电",
      coord: [156.07469177246094, 656.40625, 105.0065689086914],
      pointName: "Point_Y_3",
    },
    {
      name: "配电",
      coord: [423.2539978027344, 302.4585266113281, 55.011131286621094],
      pointName: "Point_R_3",
    },
    {
      name: "配电",
      coord: [143.61085510253906, 421.9691162109375, 144.01773071289062],
      pointName: "Point_B_7",
    },
  ];

  if (val) {
    const Os = coord.map((item: any, index: any) => {
      return {
        id: "m1" + index,
        text: "", //3D标注显示文字
        textSize: 48, //3D标注显示文字大小
        textColor: Color.Blue, //3D标注显示文字颜色
        textOutlineSize: 1, //3D标注显示文字轮廓大小
        textOutlineColor: Color.Black, // 3D标注显示文字轮廓颜色
        textFixed: false, // 3D标注显示文字是否固定文本朝向
        textVisible: true, //3D标注显示文字是否显示文本
        textLocation: [0, 0, 0], // 文字位置
        textRotation: [0, 0, 0], // 文字旋转
        textScale: [2, 2, 2], // 文字缩放
        pointName: item.pointName, //3D标注展示的特效名称
        pointVisible: true, //3D标注是否显示
        pointScale: 6, //3D标注整体缩放比例
        coordinate: item.coord, //3D标注的位置坐标
      };
    });
    //支持经纬度坐标和普通投影坐标两种类型
    await __g.marker3d.add(Os);
  } else {
    __g.marker3d.clear();
  }
};
