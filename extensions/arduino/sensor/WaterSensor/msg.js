/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        WATERSENSOR_CATEGORY: 'water sensor',
        WATERSENSOR_READ_VALUE: 'read the value of interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        WATERSENSOR_CATEGORY: 'Wassersensor',
        WATERSENSOR_READ_VALUE: 'den Wert der Schnittstelle %1 lesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        WATERSENSOR_CATEGORY: 'sensor de agua',
        WATERSENSOR_READ_VALUE: 'leer el valor de la interfaz %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        WATERSENSOR_CATEGORY: 'capteur d\'eau',
        WATERSENSOR_READ_VALUE: 'Lire la valeur de l\'interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        WATERSENSOR_CATEGORY: '水位センサー',
        WATERSENSOR_READ_VALUE: 'インターフェイス %1 の値を読み取ります'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        WATERSENSOR_CATEGORY: '수위 센서',
        WATERSENSOR_READ_VALUE: '인터페이스 %1의 값을 읽습니다.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        WATERSENSOR_CATEGORY: 'czujnik poziomu wody',
        WATERSENSOR_READ_VALUE: 'odczytaj wartość interfejsu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        WATERSENSOR_CATEGORY: 'sensor de água',
        WATERSENSOR_READ_VALUE: 'lê o valor da interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        WATERSENSOR_CATEGORY: 'датчик уровня воды',
        WATERSENSOR_READ_VALUE: 'прочитать значение интерфейса %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        WATERSENSOR_CATEGORY: '水位傳感器',
        WATERSENSOR_READ_VALUE: '讀取接口%1水位'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        WATERSENSOR_CATEGORY: '水位传感器',
        WATERSENSOR_READ_VALUE: '读取接口%1水位'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        WATERSENSOR_CATEGORY: 'Sensore di livello dell\'acqua',
        WATERSENSOR_READ_VALUE: 'Leggi il valore dell\'interfaccia %1'
    });
    return Blockly;
}

exports = addMsg;