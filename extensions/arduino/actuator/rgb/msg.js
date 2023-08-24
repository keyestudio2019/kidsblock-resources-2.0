/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        RGB_CATEGORY: 'RGB LED',
        RGB_DIGITAL: 'RGB Lamp Red#%1 R_state%2 Green#%3 G_State%4 Blue#%5 B_State%6',
        RGB_ANALOG: 'RGB Lamp Red#%1 R_analogWrite%2 Green#%3 G_analogWrite%4 Blue#%5 B_analogWrite%6',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        RGB_CATEGORY: 'RGB-LED',
        RGB_DIGITAL: 'RGB-Lampe Rot#%1 R_state%2 Grün#%3 G_State%4 Blau#%5 B_State%6',
        RGB_ANALOG: 'RGB-Lampe Rot#%1 R_analogWrite%2 Grün#%3 G_analogWrite%4 Blau#%5 B_analogWrite%6',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        RGB_CATEGORÍA: 'LED RGB',
        RGB_DIGITAL: 'Lámpara RGB Rojo#%1 R_state%2 Verde#%3 G_State%4 Azul#%5 B_State%6',
        RGB_ANALOG: 'Lámpara RGB Rojo#%1 R_analogWrite%2 Verde#%3 G_analogWrite%4 Azul#%5 B_analogWrite%6',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        RGB_CATEGORY: 'DEL RVB',
        RGB_DIGITAL: 'Lampe RVB Rouge#%1 R_state%2 Vert#%3 G_State%4 Bleu#%5 B_State%6',
        RGB_ANALOG: 'Lampe RVB Rouge#%1 R_analogWrite%2 Vert#%3 G_analogWrite%4 Bleu#%5 B_analogWrite%6',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        RGB_CATEGORY: 'RGB LED',
        RGB_DIGITAL: 'RGB ランプ 赤#%1 R_state%2 緑#%3 G_State%4 青#%5 B_State%6',
        RGB_ANALOG: 'RGB ランプ 赤#%1 R_analogWrite%2 緑#%3 G_analogWrite%4 青#%5 B_analogWrite%6',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        RGB_CATEGORY: 'RGB LED',
        RGB_DIGITAL: 'RGB 램프 빨강#%1 R_state%2 초록#%3 G_State%4 파랑#%5 B_State%6',
        RGB_ANALOG: 'RGB 램프 빨강#%1 R_analogWrite%2 초록#%3 G_analogWrite%4 파랑#%5 B_analogWrite%6',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        RGB_CATEGORY: 'LED RGB',
        RGB_DIGITAL: 'Lampa RGB Czerwona#%1 R_state%2 Zielona#%3 G_State%4 Niebieska#%5 B_State%6',
        RGB_ANALOG: 'Lampa RGB Czerwona#%1 R_analogWrite%2 Zielona#%3 G_analogWrite%4 Niebieska#%5 B_analogWrite%6',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        RGB_CATEGORY: 'LED RGB',
        RGB_DIGITAL: 'RGB Lamp Red#%1 R_state%2 Green#%3 G_State%4 Blue#%5 B_State%6',
        RGB_ANALOG: 'RGB Lamp Red#%1 R_analogWrite%2 Green#%3 G_analogWrite%4 Blue#%5 B_analogWrite%6',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        RGB_CATEGORY: 'Светодиод RGB',
        RGB_DIGITAL: 'RGB Lamp Red#%1 R_state%2 Green#%3 G_State%4 Blue#%5 B_State%6',
        RGB_ANALOG: 'RGB Lamp Red#%1 R_analogWrite%2 Green#%3 G_analogWrite%4 Blue#%5 B_analogWrite%6',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        RGB_CATEGORY: 'RGB LED燈',
        RGB_DIGITAL: 'RGB燈 紅#%1 電平為%2 綠#%3 電平為%4 藍#%5 電平為%6',
        RGB_ANALOG: 'RGB燈 紅#%1 模擬輸出%2 綠#%3 模擬輸出%4 藍#%5 模擬輸出%6',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        RGB_CATEGORY: 'RGB LED灯',
        RGB_DIGITAL: 'RGB灯 红#%1 电平为%2 绿#%3 电平为%4 蓝#%5 电平为%6',
        RGB_ANALOG: 'RGB灯 红#%1 模拟输出%2 绿#%3 模拟输出%4 蓝#%5 模拟输出%6',
    });
    return Blockly;
}

exports = addMsg;
