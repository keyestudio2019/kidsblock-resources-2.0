/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS_SERVO_CATEGORY: 'servo 270°',
        SERVO_ANGLE: 'servo PIN#%1 degree%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        KS_SERVO_CATEGORY: 'Servo 270°',
        SERVO270_ANGLE: 'Servo PIN#%1 Grad%2 ',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        KS_SERVO_CATEGORY: 'servo 270°',
        SERVO270_ANGLE: 'servo PIN#%1 grado%2 ',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        KS_SERVO_CATEGORY: 'servo 270°',
        SERVO270_ANGLE: 'code PIN servo#%1 degré%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        KS_SERVO_CATEGORY: 'サーボ 270°',
        SERVO270_ANGLE: 'サーボ PIN#%1 度%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        KS_SERVO_CATEGORY: '서보 270°',
        SERVO270_ANGLE: '서보 PIN#%1도%2 ',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        KS_SERVO_CATEGORY: 'serwo 270°',
        SERVO270_ANGLE: 'serwo PIN#%1 stopień%2 ',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        KS_SERVO_CATEGORY: 'servo 270°',
        SERVO270_ANGLE: 'PIN do servo#%1 grau%2 ',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        KS_SERVO_CATEGORY: 'сервопривод 270°',
        SERVO270_ANGLE: 'ПИН-код сервопривода №%1 градус%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        KS_SERVO_CATEGORY: '舵機270度',
        SERVO270_ANGLE: '舵機 引腳%1 角度%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS_SERVO_CATEGORY: '舵机270度',
        SERVO270_ANGLE: '舵机 引脚%1 角度%2',
    });
    return Blockly;
}

exports = addMsg;
