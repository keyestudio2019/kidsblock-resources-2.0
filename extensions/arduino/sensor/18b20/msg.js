/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        T18B20_CATEGORY: 'Temperature',
        T18B20_READ_TEMPERATURE: '18B20 PIN: %1 read temperature%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        T18B20_CATEGORY: 'Temperatur',
        T18B20_READ_TEMPERATURE: '18B20 PIN: %1 Temperatur%2 lesen',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        T18B20_CATEGORY: 'Temperatura',
        T18B20_READ_TEMPERATURE: '18B20 PIN: %1 lee temperatura%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        T18B20_CATEGORY: 'Température',
        T18B20_READ_TEMPERATURE: '18B20 PIN: %1 lecture de la température%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        T18B20_CATEGORY: '温度',
        T18B20_READ_TEMPERATURE: '18B20 PIN: %1 読み取り温度%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        T18B20_CATEGORY: '온도',
        T18B20_READ_TEMPERATURE: '18B20 PIN: %1 읽기 온도%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        T18B20_CATEGORY: 'Temperatura',
        T18B20_READ_TEMPERATURE: '18B20 PIN: %1 odczyt temperatury%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        T18B20_CATEGORY: 'Temperatura',
        T18B20_READ_TEMPERATURE: '18B20 PIN: %1 leitura de temperatura%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        T18B20_CATEGORY: 'Температура',
        T18B20_READ_TEMPERATURE: '18B20 PIN: %1 чтение температуры%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        T18B20_CATEGORY: 'Temperature',
        T18B20_READ_TEMPERATURE: '18B20 引腳：%1 讀取溫度%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        T18B20_CATEGORY: 'Temperature',
        T18B20_READ_TEMPERATURE: '18B20 引脚：%1 读取温度%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        T18B20_CATEGORY: 'Temperatura',
        T18B20_READ_TEMPERATURE: '18B20 Pin: %1 leggi temperatura %2'
    });
    return Blockly;
}

exports = addMsg;
