/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SOILSENSOR_CATEGORY: 'soil moisture sensor',
        SOILSENSOR_READ_VALUE: 'read the value of interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        SOILSENSOR_CATEGORY: 'Bodenfeuchtigkeitssensor',
        SOILSENSOR_READ_VALUE: 'den Wert der Schnittstelle %1 lesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        SOILSENSOR_CATEGORY: 'sensor de humedad del suelo',
        SOILSENSOR_READ_VALUE: 'leer el valor de la interfaz %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        SOILSENSOR_CATEGORY: 'capteur d\'humidité du sol',
        SOILSENSOR_READ_VALUE: 'Lire la valeur de l\'interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        SOILSENSOR_CATEGORY: '土壌水分センサー',
        SOILSENSOR_READ_VALUE: 'インターフェイス %1 の値を読み取ります'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        SOILSENSOR_CATEGORY: '토양 수분 센서',
        SOILSENSOR_READ_VALUE: '인터페이스 %1의 값을 읽습니다.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        SOILSENSOR_CATEGORY: 'czujnik wilgotności gleby',
        SOILSENSOR_READ_VALUE: 'odczytaj wartość interfejsu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        SOILSENSOR_CATEGORY: 'sensor de umidade do solo',
        SOILSENSOR_READ_VALUE: 'lê o valor da interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        SOILSENSOR_CATEGORY: 'датчик влажности почвы',
        SOILSENSOR_READ_VALUE: 'прочитать значение интерфейса %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        SOILSENSOR_CATEGORY: '土壤濕度傳感器',
        SOILSENSOR_READ_VALUE: '讀取接口%1土壤濕度'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SOILSENSOR_CATEGORY: '土壤湿度传感器',
        SOILSENSOR_READ_VALUE: '读取接口%1土壤湿度'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        SOILSENSOR_CATEGORY: 'Sensore di umidità del suolo',
        SOILSENSOR_READ_VALUE: 'Leggi il valore dell\'interfaccia %1'
    });
    return Blockly;
}

exports = addMsg;