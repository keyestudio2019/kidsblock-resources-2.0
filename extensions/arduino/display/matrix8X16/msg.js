/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MATRIX8X16_CATEGORY: 'Matrix',

        MATRIX_8X16:'  %1 display%2 '
  
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MATRIX8X16_CATEGORY: '点阵',

        MATRIX_8X16:' %1 显示%2 '

    });
    return Blockly;
}

exports = addMsg;
