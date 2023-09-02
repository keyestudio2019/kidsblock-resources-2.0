/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SERVO_CATEGORY: 'Servo',
        SERVO_WRITE: 'set servo pin %1 out %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        SERVO_CATEGORY: 'Servo',
        SERVO_WRITE: 'setzen Pin %1 Servo auf %2 '
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        SERVO_CATEGORY: 'Servo',
        SERVO_WRITE: 'establecer el pin del servo %1 en %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        SERVO_CATEGORY: 'Servo',
        SERVO_WRITE: 'définir la broche du servo %1 sur %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        SERVO_CATEGORY: 'サーボ',
        SERVO_WRITE: 'サーボ ピン %1 を %2 に設定'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        SERVO_CATEGORY: '서보',
        SERVO_WRITE: '%2에 서보 핀 %1 설정'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        SERVO_CATEGORY: 'Serwo',
        SERVO_WRITE: 'ustaw pin serwa %1 na %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        SERVO_CATEGORY: 'Servo',
        SERVO_WRITE: 'definir pino servo %1 para saída %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        SERVO_CATEGORY: 'Сервопривод',
        SERVO_WRITE: 'установить вывод сервопривода %1 из %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        SERVO_CATEGORY: '舵機',
        SERVO_WRITE: '設置引腳 %1 舵機為 %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SERVO_CATEGORY: '舵机',
        SERVO_WRITE: '设置引脚 %1 舵机为 %2'
    });
    return Blockly;
}

exports = addMsg;
