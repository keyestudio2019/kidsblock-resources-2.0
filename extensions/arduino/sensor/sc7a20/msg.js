/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: 'SC7A20 read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: 'SC7A20 hat %1 gelesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        SC7A20_CATEGORIA: 'SC7A20',
        SC7A20_READ: 'SC7A20 leyó %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: 'SC7A20 a lu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: 'SC7A20 読み取り %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: 'SC7A20 읽기 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: 'SC7A20 odczytał %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: 'SC7A20 leu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: 'SC7A20 прочитал %1'  
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: '讀取SC7A20 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SC7A20_CATEGORY: 'SC7A20',
        SC7A20_READ: '读取SC7A20 %1'
    });
    return Blockly;
}

exports = addMsg;
