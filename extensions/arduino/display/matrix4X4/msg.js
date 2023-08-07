/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MATRIX4X4_CATEGORY: 'Matrix HT16K33',

        EXTEND_MATRIX:'  %1 display%2 '
  
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MATRIX4X4_CATEGORY: '点阵HT16K33',

        EXTEND_MATRIX:' %1 显示%2 '

    });
    return Blockly;
}

exports = addMsg;
