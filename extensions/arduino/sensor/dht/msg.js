/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: 'init dht %1 pin %2 mode %3',
        DHT_READ_TEMPERATURE: 'dht %1 read temperature %2',
        DHT_READ_HUMIDITY: 'dht %1 read humidity'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: 'DHT %1 Pin %2 Modus %3 initiieren',
        DHT_READ_TEMPERATURE: 'dht %1 liest Temperatur %2',
        DHT_READ_HUMIDITY: 'dht %1 hat die Luftfeuchtigkeit gelesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: 'iniciar dht %1 pin %2 modo %3',
        DHT_READ_TEMPERATURE: 'dht %1 lee la temperatura %2',
        DHT_READ_HUMIDITY: 'dht %1 lectura de humedad'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: 'init dht %1 broche %2 mode %3',
        DHT_READ_TEMPERATURE: 'dht %1 a lu la température %2',
        DHT_READ_HUMIDITY: 'dht %1 lecture de l"humidité'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: 'init dht %1 ピン %2 モード %3',
        DHT_READ_TEMPERATURE: 'dht %1 読み取り温度 %2',
        DHT_READ_HUMIDITY: 'dht %1 読み取り湿度'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: 'dht %1 핀 %2 모드 %3 초기화',
        DHT_READ_TEMPERATURE: 'dht %1 읽기 온도 %2',
        DHT_READ_HUMIDITY: 'dht %1 읽기 습도'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: 'init dht %1 pin %2 tryb %3',
        DHT_READ_TEMPERATURE: 'dht %1 odczytał temperaturę %2',
        DHT_READ_HUMIDITY: 'dht %1 odczyt wilgotności'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: 'inicializar dht %1 pino %2 modo %3',
        DHT_READ_TEMPERATURE: 'dht %1 temperatura de leitura %2',
        DHT_READ_HUMIDITY: 'dht %1 ler umidade'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: 'инициализация dht %1, контакт %2, режим %3',
        DHT_READ_TEMPERATURE: 'dht %1 считать температуру %2',
        DHT_READ_HUMIDITY: 'dht %1 считанная влажность'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: '初始化 dht %1 引腳 %2 型號 %3',
        DHT_READ_TEMPERATURE: 'dht %1 讀取溫度 %2',
        DHT_READ_HUMIDITY: 'dht %1 讀取濕度'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: '初始化 dht %1 引脚 %2 型号 %3',
        DHT_READ_TEMPERATURE: 'dht %1 读取温度 %2',
        DHT_READ_HUMIDITY: 'dht %1 读取湿度'
    });
    return Blockly;
}

exports = addMsg;
