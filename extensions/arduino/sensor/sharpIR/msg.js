/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SHARPIR_CATEGORY: 'Sharp IR',
        SHARPIR_INIT: 'init sharp IR sensor %1 pin %2 model %3',
        SHARPIR_READDISTANCE: 'sharp IR sensor %1 read distance'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        SHARPIR_CATEGORY: 'Scharfes IR',
        SHARPIR_INIT: 'Sharp-IR-Sensor %1 Pin %2 Modell %3 initiieren',
        SHARPIR_READDISTANCE: 'Leseentfernung des scharfen IR-Sensors %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        SHARPIR_CATEGORY: 'IR nítido',
        SHARPIR_INIT: 'iniciar sensor IR agudo %1 pin %2 modelo %3',
        SHARPIR_READDISTANCE: 'sensor IR nítido %1 distancia de lectura'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        SHARPIR_CATEGORY:'IR pointu',
        SHARPIR_INIT: 'initialisation du capteur IR pointu %1 broche %2 modèle %3',
        SHARPIR_READDISTANCE:'Capteur IR précis %1 distance de lecture'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        SHARPIR_CATEGORY: 'シャープ IR',
        SHARPIR_INIT: 'シャープ IR センサー %1 ピン %2 モデル %3 を初期化します',
        SHARPIR_READDISTANCE: 'シャープ IR センサー %1 の読み取り距離'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        SHARPIR_CATEGORY: '샤프 IR',
        SHARPIR_INIT: '샤프 IR 센서 %1 핀 %2 모델 %3 초기화',
        SHARPIR_READDISTANCE: '예리한 IR 센서 %1 읽기 거리'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        SHARPIR_CATEGORY: 'Ostry IR',
        SHARPIR_INIT: 'inicjacja ostrego czujnika IR %1 pin %2 model %3',
        SHARPIR_READDISTANCE: 'ostry czujnik podczerwieni %1 odległość odczytu'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        SHARPIR_CATEGORY: 'IR nítido',
        SHARPIR_INIT: 'iniciar sensor IR afiado %1 pino %2 modelo %3',
        SHARPIR_READDISTANCE: 'sensor IR nítido %1 distância de leitura'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        SHARPIR_CATEGORY: 'Резкий ИК',
        SHARPIR_INIT: 'инициировать ИК-датчик Sharp %1 контакт %2 модель %3',
        SHARPIR_READDISTANCE: 'резкий ИК-датчик %1 расстояние считывания'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        SHARPIR_CATEGORY: '夏普紅外',
        SHARPIR_INIT: '初始化夏普紅外傳感器 %1 引腳 %2 型號 %3',
        SHARPIR_READDISTANCE: '夏普紅外傳感器 %1 讀取距離'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SHARPIR_CATEGORY: '夏普红外',
        SHARPIR_INIT: '初始化夏普红外传感器 %1 引脚 %2 型号 %3',
        SHARPIR_READDISTANCE: '夏普红外传感器 %1 读取距离'
    });
    return Blockly;
}

exports = addMsg;
