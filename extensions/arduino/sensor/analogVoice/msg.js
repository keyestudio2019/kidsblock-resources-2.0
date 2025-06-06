/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ANALOGVOICE_CATEGORY: 'Analog voice sensor',
        ANALOGVOICE_READ_VALUE: 'read the value of interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        ANALOGVOICE_CATEGORY: 'Analoger Sprachsensor',
        ANALOGVOICE_READ_VALUE: 'den Wert der Schnittstelle %1 lesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        ANALOGVOICE_CATEGORY: 'Sensor de voz analógico',
        ANALOGVOICE_READ_VALUE: 'leer el valor de la interfaz %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        ANALOGVOICE_CATEGORY: 'Capteur vocal analogique',
        ANALOGVOICE_READ_VALUE: 'lire la valeur de l"interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        ANALOGVOICE_CATEGORY: 'アナログ音声センサー',
        ANALOGVOICE_READ_VALUE: 'インターフェイス %1 の値を読み取ります'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        ANALOGVOICE_CATEGORY: '아날로그 음성 센서',
        ANALOGVOICE_READ_VALUE: '인터페이스 %1의 값을 읽습니다.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        ANALOGVOICE_CATEGORY: 'Analogowy czujnik głosu',
        ANALOGVOICE_READ_VALUE: 'odczytaj wartość interfejsu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        ANALOGVOICE_CATEGORY: 'Sensor de voz analógico',
        ANALOGVOICE_READ_VALUE: 'ler o valor da interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        ANALOGVOICE_CATEGORY: 'Аналоговый датчик голоса',
        ANALOGVOICE_READ_VALUE: 'прочитать значение интерфейса %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        ANALOGVOICE_CATEGORY: '模擬聲音傳感器',
        ANALOGVOICE_READ_VALUE: '讀取接口 %1 聲音強度'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ANALOGVOICE_CATEGORY: '模拟声音传感器',
        ANALOGVOICE_READ_VALUE: '读取接口 %1 声音强度'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        ANALOGVOICE_CATEGORY: 'Sensore di voce analogico',
        ANALOGVOICE_READ_VALUE: 'Leggi il valore dell\'interfaccia %1'
    });
    return Blockly;
}

exports = addMsg;
