/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        RGBCUBE_CATEGORY: '4X4X4 RGB LED cube',
        RGBCUBE_INIT: 'Init RGB LED cube',
        RGBCUBE_ALL: 'RGB LED cube all dispaly%1',
        RGBCUBE_ANY: 'RGB LED cube dispaly red%1 green%2 blue%3',
        RGBCUBE_PLANE: 'Plane cube %1direction %2 display%3',
        RGBCUBE_SINGLE: 'Single LED X axis%1 Y axis%2 Z axis%3 display red%4 green%5 blue%6',
        RGBCUBE_LINE: 'Line X1 axis%1 Y1 axis%2 Z1 axis%3 X2 axis%4 Y2 axis%5 Z2 axis%6 display%7',
        RGBCUBE_SPHERE: 'Sphere X axis%1 Y axis%2 Z axis%3 size%4 display%5 fill%6',
        RGBCUBE_BOX: 'Box X1 axis%1 Y1 axis%2 Z1 axis%3 X2 axis%4 Y2 axis%5 Z2 axis%6 display%7 style%8 fill%9',
        BLACK: 'black',
        RED: 'red',
        GREEN: 'green',
        BLUE: 'blue',
        WHITE: 'white',
        YELLOW: 'yellow',
        PINK: 'pink',
        PURPLE: 'purple',
        ORANGE: 'orange',
        FIRST:'first layer',
        SECOND:'second layer',
        THIRD:'third layer',
        FOURTH:'fourth layer',
        X:'x axis',
        Y:'y axis',
        Z:'z axis'

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        RGBCUBE_CATEGORY: '4X4X4 RGB光立方',
        RGBCUBE_INIT: '初始化 RGB光立方',
        RGBCUBE_ALL: 'RGB光立方 全部显示%1',
        RGBCUBE_ANY: 'RGB光立方 显示 红色%1 绿色%2 蓝色%3',
        RGBCUBE_PLANE: '单层平面 %1方向 %2 显示%3',
        RGBCUBE_SINGLE: '单LED X轴%1 Y轴%2 Z轴%3 显示红色%4 绿色%5 蓝色%6',
        RGBCUBE_LINE: '直线 X1轴%1 Y1轴%2 Z1轴%3 X2轴%4 Y2轴%5 Z2轴%6 显示%7',
        RGBCUBE_SPHERE: '球体 X轴%1 Y轴%2 Z轴%3 尺寸%4 显示%5 填充%6',
        RGBCUBE_BOX: '盒子 X1轴%1 Y1轴%2 Z1轴%3 X2轴%4 Y2轴%5 Z2轴%6 显示%7 样式%8 填充%9',
        BLACK: '黑色',
        RED: '红色',
        GREEN: '绿色',
        BLUE: '蓝色',
        WHITE: '白色',
        YELLOW: '黄色',
        PINK: '粉色',
        PURPLE: '紫色',
        ORANGE: '橙色',
        CUBE:'立方体',
        FIRST:'第一层',
        SECOND:'第二层',
        THIRD:'第三层',
        FOURTH:'第四层',
        X:'x轴',
        Y:'y轴',
        Z:'z轴'
    });
    return Blockly;
}

exports = addMsg;
