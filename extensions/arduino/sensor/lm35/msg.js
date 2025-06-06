/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LM35_CATEGORY: 'Temperature',
        LM35_READ_TEMPERATURE: 'LM35 read temperature PIN: %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        LM35_CATEGORY: 'Temperatur',
        LM35_READ_TEMPERATURE: 'LM35 hat Temperatur-PIN gelesen: %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        LM35_CATEGORY: 'Temperatura',
        LM35_READ_TEMPERATURE: 'LM35 lee temperatura PIN: %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        LM35_CATEGORY: 'Température',
        LM35_READ_TEMPERATURE: 'Le code PIN de température de lecture LM35:%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        LM35_CATEGORY: '温度',
        LM35_READ_TEMPERATURE: 'LM35 読み取り温度 PIN: %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        LM35_CATEGORY: '온도',
        LM35_READ_TEMPERATURE: 'LM35 읽기 온도 PIN: %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        LM35_CATEGORY: 'Temperatura',
        LM35_READ_TEMPERATURE: 'LM35 odczyt temperatury PIN: %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        LM35_CATEGORY: 'Temperatura',
        LM35_READ_TEMPERATURE: 'LM35 leu o PIN da temperatura: %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        LM35_CATEGORY: 'Temperatura',
        LM35_READ_TEMPERATURE: 'LM35 leu o PIN da temperatura: %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        LM35_CATEGORY: 'LM35溫度傳感器',
        LM35_READ_TEMPERATURE: '讀取LM35溫度值 引腳：%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LM35_CATEGORY: 'LM35温度传感器',
        LM35_READ_TEMPERATURE: '读取LM35温度值 引脚：%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        LM35_CATEGORY: 'Temperatura',
        LM35_READ_TEMPERATURE: 'LM35 leggi temperatura PIN: %1'
    });
    return Blockly;
}

exports = addMsg;
