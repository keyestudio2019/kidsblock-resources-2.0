/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LPS331AP_CATEGORY: 'Baro pressure',
        LPS331AP_READ: 'LPS331AP baro pressure sensor read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        LPS331AP_CATEGORY: 'Baro-Druck',
        LPS331AP_READ: 'LPS331AP Baro-Drucksensor hat %1 gelesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        LPS331AP_CATEGORY: 'Presión baro',
        LPS331AP_READ: 'Lectura del sensor de presión barométrica LPS331AP %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        LPS331AP_CATEGORY: 'Pression baro',
        LPS331AP_READ: 'Capteur de pression baro LPS331AP lu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        LPS331AP_CATEGORY: '気圧',
        LPS331AP_READ: 'LPS331AP 気圧センサー読み取り値 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        LPS331AP_CATEGORY: '기압',
        LPS331AP_READ: 'LPS331AP 기압 센서 읽기 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        LPS331AP_CATEGORY: 'Ciśnienie baro',
        LPS331AP_READ: 'Odczyt czujnika ciśnienia baro LPS331AP %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        LPS331AP_CATEGORY: 'Pressão Baro',
        LPS331AP_READ: 'Leitura do sensor de pressão barométrica LPS331AP %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        LPS331AP_CATEGORY: 'Барометрическое давление',
        LPS331AP_READ: 'Датчик барометрического давления LPS331AP прочитал %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        LPS331AP_CATEGORY: '氣壓傳感器',
        LPS331AP_READ: '氣壓傳感器LPS331AP讀取 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LPS331AP_CATEGORY: '气压传感器',
        LPS331AP_READ: '气压传感器LPS331AP读取 %1'
    });
    return Blockly;
}

exports = addMsg;
