/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: 'ADXL345 read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: 'ADXL345 hat %1 gelesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: 'ADXL345 leyó %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        ADXL345_CATEGORY:'ADXL345',
        ADXL345_READ: 'ADXL345 lit %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: 'ADXL345 読み取り %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: 'ADXL345 읽기 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: 'ADXL345 odczyt %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: 'ADXL345 lido %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: 'ADXL345 прочитал %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: '讀取ADXL345 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ADXL345_CATEGORY: 'ADXL345',
        ADXL345_READ: '读取ADXL345 %1'
    });
    return Blockly;
}

exports = addMsg;
