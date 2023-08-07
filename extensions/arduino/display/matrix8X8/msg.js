/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MATRIX_EIGHT_CATEGORY: 'Matrix',

        MATRIX_E:' %1 display%2 '
  
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MATRIX_EIGHT_CATEGORY: '点阵',

        MATRIX_E:' %1 显示%2 '

    });
    return Blockly;
}

exports = addMsg;
