/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BH_CATEGORY: 'Light intensity',
        BH_INIT: 'Init BH1750 sensor',
        BH_READ: 'Read  BH1750',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        BH_CATEGORY: 'Lichtintensität',
        BH_INIT: 'BH1750-Sensor initiieren',
        BH_READ: 'BH1750 lesen',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        BH_CATEGORY: 'Intensidad de la luz',
        BH_INIT: 'Iniciar sensor BH1750',
        BH_READ: 'Leer BH1750',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        BH_CATEGORY: 'Intensité lumineuse',
        BH_INIT : 'Init capteur BH1750',
        BH_READ: 'Lire BH1750',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        BH_CATEGORY: '光の強さ',
        BH_INIT: 'BH1750 センサーを初期化',
        BH_READ: 'BH1750を読み取る',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        BH_CATEGORY: '빛의 강도',
        BH_INIT: 'BH1750 센서 초기화',
        BH_READ: 'BH1750 읽기',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        BH_CATEGORY: 'Natężenie światła',
        BH_INIT: 'Inicjacja czujnika BH1750',
        BH_READ: 'Odczyt BH1750',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        BH_CATEGORY: 'Intensidade da luz',
        BH_INIT: 'Iniciar sensor BH1750',
        BH_READ: 'Ler BH1750',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        BH_CATEGORY: 'Интенсивность света',
        BH_INIT: 'Инициализация датчика BH1750',
        BH_READ: 'Читать BH1750',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        BH_CATEGORY: '光強度傳感器BH1750',
        BH_INIT: '初始化 光強度傳感器BH1750',
        BH_READ: '讀取光強度值',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BH_CATEGORY: '光强度传感器BH1750',
        BH_INIT: '初始化 光强度传感器BH1750',
        BH_READ: '读取光强度值',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        BH_CATEGORY: 'Intensità luminosa',
        BH_INIT: 'Inizializza sensore BH1750',
        BH_READ: 'Leggi BH1750'
    });
    return Blockly;
}

exports = addMsg;
