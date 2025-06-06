/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        COMPASS_CATEGORY: 'Digital Compass',
        COMPASS_INIT: 'init HMC5883',
        COMPASS_SET: 'Set HMC5883',
        COMPASS_READ: 'read HMC5883 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        COMPASS_CATEGORY: 'Digitaler Kompass',
        COMPASS_INIT: 'init HMC5883',
        COMPASS_SET: 'HMC5883 einstellen',
        COMPASS_READ: 'HMC5883 %1 lesen',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        COMPASS_CATEGORY: 'Brújula digital',
        COMPASS_INIT: 'iniciar HMC5883',
        COMPASS_SET: 'Establecer HMC5883',
        COMPASS_READ: 'leer HMC5883 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        COMPASS_CATEGORY: 'Boussole numérique',
        COMPASS_INIT: 'init HMC5883',
        COMPASS_SET: 'Définir HMC5883',
        COMPASS_READ: 'lire HMC5883 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        COMPASS_CATEGORY: 'デジタルコンパス',
        COMPASS_INIT: 'HMC5883 を初期化',
        COMPASS_SET: 'HMC5883 を設定',
        COMPASS_READ: 'HMC5883 %1 を読み取り',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        COMPASS_CATEGORY: '디지털 나침반',
        COMPASS_INIT: 'HMC5883 초기화',
        COMPASS_SET: 'HMC5883 설정',
        COMPASS_READ: 'HMC5883 %1 읽기',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        COMPASS_CATEGORY: 'Kompas cyfrowy',
        COMPASS_INIT: 'zainicjuj HMC5883',
        COMPASS_SET: 'Ustaw HMC5883',
        COMPASS_READ: 'odczytaj HMC5883 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        COMPASS_CATEGORY: 'Bússola Digital',
        COMPASS_INIT: 'inicialização HMC5883',
        COMPASS_SET: 'Definir HMC5883',
        COMPASS_READ: 'lê HMC5883 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        COMPASS_CATEGORY: 'Цифровой компас',
        COMPASS_INIT: 'инициировать HMC5883',
        COMPASS_SET: 'Установить HMC5883',
        COMPASS_READ: 'прочитать HMC5883 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        COMPASS_CATEGORY: '電子羅盤',
        COMPASS_INIT: '初始化 電子羅盤',
        COMPASS_SET: '設置 電子羅盤',
        COMPASS_READ: '讀取 電子羅盤 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        COMPASS_CATEGORY: '电子罗盘',
        COMPASS_INIT: '初始化 电子罗盘',
        COMPASS_SET: '设置 电子罗盘',
        COMPASS_READ: '读取 电子罗盘 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        COMPASS_CATEGORY: 'Compaso digitale',
        COMPASS_INIT: 'inizializza HMC5883',
        COMPASS_SET: 'Imposta HMC5883',
        COMPASS_READ: 'leggi HMC5883 %1'
    });
    return Blockly;
}

exports = addMsg;
