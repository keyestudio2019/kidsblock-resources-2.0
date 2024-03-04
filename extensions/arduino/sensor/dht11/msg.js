/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DHT_CATEGORY: 'Temperature and humidity',
        DHT_INIT: 'init DHT pin %1 mode %2',
        DHT_READ_TEMPERATURE: 'DHT read temperature %1',
        DHT_READ_HUMIDITY: 'DHT read humidity'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        DHT_CATEGORY: 'Temperatur und Luftfeuchtigkeit',
        DHT_INIT: 'DHT-Pin %1 Modus %2 initiieren',
        DHT_READ_TEMPERATURE: 'DHT hat Temperatur %1 gelesen',
        DHT_READ_HUMIDITY: 'DHT hat die Luftfeuchtigkeit gelesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        DHT_CATEGORY: 'Temperatura y humedad',
        DHT_INIT: 'iniciar DHT pin %1 modo %2',
        DHT_READ_TEMPERATURE: 'Temperatura de lectura DHT %1',
        DHT_READ_HUMIDITY: 'DHT humedad leída'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        DHT_CATEGORY: 'Température et humidité',
        DHT_INIT: 'initialisation de la broche DHT %1 mode %2',
        DHT_READ_TEMPERATURE: 'Température de lecture DHT %1',
        DHT_READ_HUMIDITY: 'DHT lit l"humidité'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        DHT_CATEGORY: '温度と湿度',
        DHT_INIT: 'DHT ピン %1 モード %2 を初期化',
        DHT_READ_TEMPERATURE: 'DHT 読み取り温度 %1',
        DHT_READ_HUMIDITY: 'DHT 読み取り湿度'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        DHT_CATEGORY: '온도 및 습도',
        DHT_INIT: 'DHT 핀 %1 모드 %2 초기화',
        DHT_READ_TEMPERATURE: 'DHT 읽기 온도 %1',
        DHT_READ_HUMIDITY: 'DHT 읽기 습도'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        DHT_CATEGORY: 'Temperatura i wilgotność',
        DHT_INIT: 'inicjacja pinu DHT %1 w trybie %2',
        DHT_READ_TEMPERATURE: 'DHT odczytał temperaturę %1',
        DHT_READ_HUMIDITY: 'DHT odczytuje wilgotność'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        DHT_CATEGORY: 'Temperatura e umidade',
        DHT_INIT: 'inicia o pino DHT %1 modo %2',
        DHT_READ_TEMPERATURE: 'Temperatura de leitura DHT %1',
        DHT_READ_HUMIDITY: 'DHT leitura de umidade'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        DHT_CATEGORY: 'Температура и влажность',
        DHT_INIT: 'инициализировать контакт DHT %1 в режиме %2',
        DHT_READ_TEMPERATURE: 'DHT считает температуру %1',
        DHT_READ_HUMIDITY: 'DHT измеренная влажность'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        DHT_CATEGORY: '溫濕度感測器',
        DHT_INIT: '初始化 DHT 腳位 %1 型號 %2',
        DHT_READ_TEMPERATURE: 'DHT 讀取溫度 %1',
        DHT_READ_HUMIDITY: 'DHT 讀取濕度'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DHT_CATEGORY: '温湿度传感器',
        DHT_INIT: '初始化 DHT 引脚 %1 型号 %2',
        DHT_READ_TEMPERATURE: 'DHT 读取温度 %1',
        DHT_READ_HUMIDITY: 'DHT 读取湿度'
    });

    return Blockly;
    }

exports = addMsg;

