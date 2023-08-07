/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        CUBE4_CATEGORY: '4X4X4 LED cube',
        CUBE4_INIT: 'Init LED cube',
        CUBE4_ONE: ' LED cube %1 %2 display%3',
        CUBE4_EFFECT: 'LED cube display effect%1 speed%2 cycles%3',
        CUBE4_ALL_ON: 'LED cube all on',
        CUBE4_ALL_OFF: 'LED cube all off',
        LAYERBOUNCE:'LayerBounce',
        LAYEROTATE:'LayerRotate',
        SPIRAL:'Spiral',
        BORDERLOOP:'BorderLoop',
        BORDERFLASH:'BorderFlash',
        BORDERWIPE:'BorderWipe',
        BLOCK4RANDOM:'Block4Random',
        BALOCK4CORNERS:'Block4Corners',
        RISE:'Rise',
        FOURROTATE:'FourRotate',
        SPIRALLAYERS:'SpiralLayers',
        SNAKE:'Snake',
        UPRIGHT:'Upright',
        RANDOMFILL:'RandomFill',
        CUBE:'Cube',
        FIRST:'First layer',
        SECOND:'Second layer',
        THIRD:'Third layer',
        FOURTH:'Fourth layer'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        CUBE4_CATEGORY: '4X4X4 光立方',
        CUBE4_INIT: '初始化 光立方',
        CUBE4_ONE: '光立方 %1 %2 显示%3',
        CUBE4_EFFECT: '光立方 显示特效%1 速度%2 循环次数%3',
        CUBE4_ALL_ON: '光立方 全亮',
        CUBE4_ALL_OFF: '光立方 全灭',
        LAYERBOUNCE:'平移',
        LAYEROTATE:'旋转',
        SPIRAL:'螺旋',
        BORDERLOOP:'边框循环',
        BORDERFLASH:'边框闪烁',
        BORDERWIPE:'边框擦除',
        BLOCK4RANDOM:'4块随机移动',
        BALOCK4CORNERS:'4块角落移动',
        RISE:'上升',
        FOURROTATE:'四轮旋转',
        SPIRALLAYERS:'单层螺旋',
        SNAKE:'蛇形',
        UPRIGHT:'直立',
        RANDOMFILL:'随机填充',
        CUBE:'立方体',
        FIRST:'第一层',
        SECOND:'第二层',
        THIRD:'第三层',
        FOURTH:'第四层'
    });
    return Blockly;
}

exports = addMsg;
