/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: 'init max6675 pin DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE: 'max6675 read temperature %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: 'init max6675 pin DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE: 'max6675 liest Temperatur %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: 'iniciar pin max6675 DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE: 'max6675 temperatura de lectura %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        MAX6675_CATEGORY:'MAX6675',
        MAX6675_INIT: 'init max6675 broche DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE:'max6675 lecture de la température %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: 'max6675 ピン DO %1 CLK %2 CS %3 を初期化',
        MAX6675_READTEMPERATURE: 'max6675 読み取り温度 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: 'max6675 핀 DO %1 CLK %2 CS %3 초기화',
        MAX6675_READTEMPERATURE: 'max6675 읽기 온도 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: 'init max6675 pin DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE: 'max6675 odczyt temperatury %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: 'inicialização do pino max6675 DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE: 'max6675 temperatura de leitura%1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: 'инициализация вывода max6675 DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE: 'max6675 считать температуру %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: '初始化 max6675 引腳 DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE: 'max6675 讀取溫度 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: '初始化 max6675 引脚 DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE: 'max6675 读取温度 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: 'inizializza max6675 pin DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE: 'max6675 leggi temperatura %1'
    });
    return Blockly;
}

exports = addMsg;
