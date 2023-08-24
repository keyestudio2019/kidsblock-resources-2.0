/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MAGNETICSENSOR_CATEGORY: 'magnetic Sensor',
        MAGNETICSENSOR_READ_STATE: 'magnetic field was detected around interface %1?',
        MAGNETICSENSOR_READ_VALUE: 'The state value of magnetic Sensor in interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        MAGNETICSENSOR_CATEGORY: 'Magnetsensor',
        MAGNETICSENSOR_READ_STATE: 'Magnetfeld wurde um Schnittstelle %1 erkannt?',
        MAGNETICSENSOR_READ_VALUE: 'Der Zustandswert des magnetischen Sensors in Schnittstelle %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        MAGNETICSENSOR_CATEGORY: 'Sensor magnético',
        MAGNETICSENSOR_READ_STATE: '¿Se detectó un campo magnético alrededor de la interfaz %1?',
        MAGNETICSENSOR_READ_VALUE: 'El valor de estado del sensor magnético en la interfaz %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        MAGNETICSENSOR_CATEGORY: 'Capteur magnétique',
        MAGNETICSENSOR_READ_STATE: 'un champ magnétique a été détecté autour de l"interface %1?',
        MAGNETICSENSOR_READ_VALUE: 'La valeur d"état du capteur magnétique dans l"interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        MAGNETICSENSOR_CATEGORY: '磁気センサー',
        MAGNETICSENSOR_READ_STATE: 'インターフェイス %1 の周囲で磁場が検出されました?',
        MAGNETICSENSOR_READ_VALUE: 'インターフェイス %1 の磁気センサーの状態値'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        MAGNETICSENSOR_CATEGORY: '자기 센서',
        MAGNETICSENSOR_READ_STATE: '인터페이스 %1 주변에서 자기장이 감지되었습니까?',
        MAGNETICSENSOR_READ_VALUE: '인터페이스 %1의 자기 센서 상태 값'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        MAGNETICSENSOR_CATEGORY: 'czujnik magnetyczny',
        MAGNETICSENSOR_READ_STATE: 'pole magnetyczne zostało wykryte wokół interfejsu %1?',
        MAGNETICSENSOR_READ_VALUE: 'Wartość stanu czujnika magnetycznego w interfejsie %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        MAGNETICSENSOR_CATEGORY: 'Sensor magnético',
        MAGNETICSENSOR_READ_STATE: 'campo magnético foi detectado em torno da interface %1?',
        MAGNETICSENSOR_READ_VALUE: 'O valor do estado do sensor magnético na interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        MAGNETICSENSOR_CATEGORY: 'магнитный датчик',
        MAGNETICSENSOR_READ_STATE: 'обнаружено магнитное поле вокруг интерфейса %1?',
        MAGNETICSENSOR_READ_VALUE: 'Значение состояния магнитного датчика в интерфейсе %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        MAGNETICSENSOR_CATEGORY: '磁感應傳感器',
        MAGNETICSENSOR_READ_STATE: '接口%1檢測到磁場?',
        MAGNETICSENSOR_READ_VALUE: '接口%1磁感應傳感器的狀態值'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MAGNETICSENSOR_CATEGORY: '磁感应传感器',
        MAGNETICSENSOR_READ_STATE: '接口%1检测到磁场?',
        MAGNETICSENSOR_READ_VALUE: '接口%1磁感应传感器的状态值'
    });
    return Blockly;
}

exports = addMsg;
