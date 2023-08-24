/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MLX_CATEGORY: 'Infrared temperature',
        MLX_INIT: 'Init MLX90614',
        MLX_READ: 'read MLX90614 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        MLX_CATEGORY: 'Infrarottemperatur',
        MLX_INIT: 'Init MLX90614',
        MLX_READ: 'MLX90614 %1 lesen',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        MLX_CATEGORY: 'Temperatura infrarroja',
        MLX_INIT: 'Iniciar MLX90614',
        MLX_READ: 'leer MLX90614 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        MLX_CATEGORY: 'Température infrarouge',
        MLX_INIT: 'Init MLX90614',
        MLX_READ: 'lire MLX90614 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        MLX_CATEGORY: '赤外線温度',
        MLX_INIT: 'MLX90614 を初期化',
        MLX_READ: 'MLX90614 %1 を読み取り',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        MLX_CATEGORY: '적외선 온도',
        MLX_INIT: 'MLX90614 초기화',
        MLX_READ: 'MLX90614 %1 읽기',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        MLX_CATEGORY: 'Temperatura podczerwieni',
        MLX_INIT: 'Inicjacja MLX90614',
        MLX_READ: 'czytaj MLX90614 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        MLX_CATEGORY: 'Temperatura infravermelha',
        MLX_INIT: 'Iniciar MLX90614',
        MLX_READ: 'lê MLX90614 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        MLX_CATEGORY: 'Инфракрасная температура',
        MLX_INIT: 'Инициализация MLX90614',
        MLX_READ: 'прочитать MLX90614 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        MLX_CATEGORY: '非接觸紅外測溫',
        MLX_INIT: '初始化 非接觸紅外測溫傳感器',
        MLX_READ: '讀取溫度值 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MLX_CATEGORY: '非接触红外测温',
        MLX_INIT: '初始化 非接触红外测温传感器',
        MLX_READ: '读取温度值 %1',
    });
    return Blockly;
}

exports = addMsg;
