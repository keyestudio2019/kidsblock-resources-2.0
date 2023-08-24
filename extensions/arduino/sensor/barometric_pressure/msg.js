/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BMP388_CATEGORY: 'Barometric Pressure',
        BMP388_INIT: 'init BMP388',
        BMP388_READ: 'read BMP388 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        BMP388_CATEGORY: 'Luftdruck',
        BMP388_INIT: 'init BMP388',
        BMP388_READ: 'BMP388 %1 lesen',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        BMP388_CATEGORY: 'Presión barométrica',
        BMP388_INIT: 'iniciar BMP388',
        BMP388_READ: 'leer BMP388 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        BMP388_CATEGORY: 'Pression barométrique',
        BMP388_INIT: 'init BMP388',
        BMP388_READ: 'lire BMP388 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        BMP388_CATEGORY: '気圧',
        BMP388_INIT: 'BMP388 の初期化',
        BMP388_READ: 'BMP388 %1 を読み取り',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        BMP388_CATEGORY: '기압',
        BMP388_INIT: 'BMP388 초기화',
        BMP388_READ: 'BMP388 %1 읽기',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        BMP388_CATEGORY: 'Ciśnienie barometryczne',
        BMP388_INIT: 'zainicjuj BMP388',
        BMP388_READ: 'odczytaj BMP388 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        BMP388_CATEGORY: 'Pressão Barométrica',
        BMP388_INIT: 'iniciar BMP388',
        BMP388_READ: 'ler BMP388 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        BMP388_CATEGORY: 'Атмосферное давление',
        BMP388_INIT: 'инициализировать BMP388',
        BMP388_READ: 'прочитать BMP388 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        BMP388_CATEGORY: 'BMP388氣壓傳感器',
        BMP388_INIT: '初始化 BMP388',
        BMP388_READ: '讀取 BMP388 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BMP388_CATEGORY: 'BMP388气压传感器',
        BMP388_INIT: '初始化 BMP388',
        BMP388_READ: '读取 BMP388 %1',
    });
    return Blockly;
}

exports = addMsg;
