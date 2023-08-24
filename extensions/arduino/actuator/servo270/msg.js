/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS_SERVO_CATEGORY: 'servo 270°',
        KS_SERVO_ATTACH: 'servo PIN#%1 pulse width range(%2 , %3)',
        KS_SERVO_WRITE2: 'servo PIN#%1 degree%2',
        KS_SERVO_ANGLE: 'servo PIN#%1 degree%2 delay%3',
        KS_SERVO_READ: 'servo PIN#%1 read degree',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        KS_SERVO_CATEGORY: 'Servo 270°',
        KS_SERVO_ATTACH: 'Servo-PIN#%1 Impulsbreitenbereich(%2, %3)',
        KS_SERVO_WRITE2: 'Servo PIN#%1 Grad%2',
        KS_SERVO_ANGLE: 'Servo PIN#%1 Grad%2 Verzögerung%3',
        KS_SERVO_READ: 'Servo PIN#%1 Lesegrad',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        KS_SERVO_CATEGORY: 'servo 270°',
        KS_SERVO_ATTACH: 'servo PIN#%1 rango de ancho de pulso (%2, %3)',
        KS_SERVO_WRITE2: 'PIN del servo#%1 grado%2',
        KS_SERVO_ANGLE: 'servo PIN#%1 grado%2 retraso%3',
        KS_SERVO_READ: 'servo PIN#%1 grado de lectura', 
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        KS_SERVO_CATEGORY: 'servo 270°',
        KS_SERVO_ATTACH: 'servo PIN #%1 plage de largeur d"impulsion (%2 , %3)',
        KS_SERVO_WRITE2: 'code PIN d"asservissement#%1degré%2',
        KS_SERVO_ANGLE: 'code PIN servo#%1 degré%2 délai%3',
        KS_SERVO_READ: 'servo PIN #%1 degré de lecture',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        KS_SERVO_CATEGORY: 'サーボ 270°',
        KS_SERVO_ATTACH: 'サーボPIN#%1パルス幅範囲(%2、%3)',
        KS_SERVO_WRITE2: 'サーボPIN#%1度%2',
        KS_SERVO_ANGLE: 'サーボ PIN#%1 度%2 遅延%3',
        KS_SERVO_READ: 'サーボPIN#%1読み取り度',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        KS_SERVO_CATEGORY: '서보 270°',
        KS_SERVO_ATTACH: '서보 PIN#%1 펄스 폭 범위(%2 , %3)',
        KS_SERVO_WRITE2: '서보 PIN#%1도%2',
        KS_SERVO_ANGLE: '서보 PIN#%1도%2 지연%3',
        KS_SERVO_READ: '서보 PIN#%1 읽기 정도',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        KS_SERVO_CATEGORY: 'serwo 270°',
        KS_SERVO_ATTACH: 'serwo PIN#%1 zakres szerokości impulsu(%2 , %3)',
        KS_SERVO_WRITE2: 'serwo PIN#%1 stopień%2',
        KS_SERVO_ANGLE: 'serwo PIN#%1 stopień%2 opóźnienie%3',
        KS_SERVO_READ: 'serwo PIN#%1 stopień odczytu',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        KS_SERVO_CATEGORY: 'servo 270°',
        KS_SERVO_ATTACH: 'servo PIN#%1 faixa de largura de pulso (%2, %3)',
        KS_SERVO_WRITE2: 'PIN do servo#%1 grau%2',
        KS_SERVO_ANGLE: 'PIN do servo#%1 grau%2 atraso%3',
        KS_SERVO_READ: 'PIN do servo#%1 grau de leitura',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        KS_SERVO_CATEGORY: 'сервопривод 270°',
        KS_SERVO_ATTACH: 'Серво PIN #%1 диапазон ширины импульса (%2 , %3)',
        KS_SERVO_WRITE2: 'ПИН-код сервопривода №%1 градус%2',
        KS_SERVO_ANGLE: 'ПИН-код сервопривода №%1 градус%2 задержка%3',
        KS_SERVO_READ: 'сервопривод PIN#%1 степень чтения',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        KS_SERVO_CATEGORY: '舵機270度',
        KS_SERVO_ATTACH: '舵機 引腳%1 設置脈寬範圍(%2 , %3)',
        KS_SERVO_WRITE2: '舵機 引腳%1 角度%2',
        KS_SERVO_ANGLE: '舵機 引腳%1 角度%2 延時(毫秒)%3',
        KS_SERVO_READ: '舵機 引腳%1 讀取度數',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS_SERVO_CATEGORY: '舵机270度',
        KS_SERVO_ATTACH: '舵机 引脚%1 设置脉宽范围(%2 , %3)',
        KS_SERVO_WRITE2: '舵机 引脚%1 角度%2',
        KS_SERVO_ANGLE: '舵机 引脚%1 角度%2 延时(毫秒)%3',
        KS_SERVO_READ: '舵机 引脚%1 读取度数',
    });
    return Blockly;
}

exports = addMsg;
