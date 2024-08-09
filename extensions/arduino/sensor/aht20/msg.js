/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AHT20_CATEGORY: 'Temperature and Humidity Sensor',
        AHT20_READ: 'Read Temp/Humidity Sensor AHT20 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        AHT20_CATEGORY: 'Temperatur- und Feuchtigkeitssensor',
        AHT20_READ: 'Lese Temp./Feuchtigkeitssensor AHT20 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        AHT20_CATEGORY: 'Sensor de Temperatura y Humedad',
        AHT20_READ: 'Leer Sensor de Temp./Humedad AHT20 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        AHT20_CATEGORY: 'Capteur de Température et Humidité',
        AHT20_READ: 'Lire Capteur de Temp./Humidité AHT20 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        AHT20_CATEGORY: '温湿度センサー',
        AHT20_READ: '温湿度センサーAHT20読み取り %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        AHT20_CATEGORY: '온습도 센서',
        AHT20_READ: '온습도 센서 AHT20 읽기 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        AHT20_CATEGORY: 'Czujnik Temperatury i Wilgotności',
        AHT20_READ: 'Odczyt Czujnika Temp./Wilgotności AHT20 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        AHT20_CATEGORY: 'Sensor de Temperatura e Umidade',
        AHT20_READ: 'Ler Sensor de Temp./Umidade AHT20 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        AHT20_CATEGORY: 'Датчик температуры и влажности',
        AHT20_READ: 'Чтение датчика темп./влажности AHT20 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        AHT20_CATEGORY: '溫濕度感測器',
        AHT20_READ: '溫濕度感測器AHT20讀取 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AHT20_CATEGORY: '温湿度传感器',
        AHT20_READ: '温湿度传感器AHT20读取 %1'
    });
    return Blockly;
}

exports = addMsg;
