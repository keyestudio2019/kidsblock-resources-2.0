/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LIGHTSENSOR_CATEGORY: 'light sensor ',
        LIGHTSENSOR_READ_VALUE: 'read the value of interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        LIGHTSENSOR_CATEGORY: 'Lichtsensor',
        LIGHTSENSOR_READ_VALUE: 'den Wert der Schnittstelle %1 lesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        LIGHTSENSOR_CATEGORY: 'sensor de luz',
        LIGHTSENSOR_READ_VALUE: 'leer el valor de la interfaz %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        LIGHTSENSOR_CATEGORY: 'capteur de lumière',
        LIGHTSENSOR_READ_VALUE: 'Lire la valeur de l"interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        LIGHTSENSOR_CATEGORY: '光センサー ',
        LIGHTSENSOR_READ_VALUE: 'インターフェイス %1 の値を読み取ります'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        LIGHTSENSOR_CATEGORY: '광센서',
        LIGHTSENSOR_READ_VALUE: '인터페이스 %1의 값을 읽습니다.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        LIGHTSENSOR_CATEGORY: 'czujnik światła',
        LIGHTSENSOR_READ_VALUE: 'odczytaj wartość interfejsu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        LIGHTSENSOR_CATEGORY: 'sensor de luz ',
        LIGHTSENSOR_READ_VALUE: 'lê o valor da interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        LIGHTSENSOR_CATEGORY: 'датчик освещенности',
        LIGHTSENSOR_READ_VALUE: 'прочитать значение интерфейса %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        LIGHTSENSOR_CATEGORY: '光線傳感器',
        LIGHTSENSOR_READ_VALUE: '讀取接口%1光線強度'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LIGHTSENSOR_CATEGORY: '光线传感器',
        LIGHTSENSOR_READ_VALUE: '读取接口%1光线强度'
    });
    return Blockly;
}

exports = addMsg;
