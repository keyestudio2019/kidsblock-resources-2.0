/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        GESTURE_CATEGORY: 'Gesture recognition',
        GESTURE_INIT: 'init PAJ7620 sensor',
        GESTURE_READ: 'Read PAJ7620 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        GESTURE_CATEGORY: 'Gestenerkennung',
        GESTURE_INIT: 'PAJ7620-Sensor initiieren',
        GESTURE_READ: 'PAJ7620 %1 lesen',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        GESTURE_CATEGORY: 'Reconocimiento de gestos',
        GESTURE_INIT: 'iniciar sensor PAJ7620',
        GESTURE_READ: 'Leer PAJ7620 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        GESTURE_CATEGORY: 'Reconnaissance gestuelle',
        GESTURE_INIT: 'initialisation du capteur PAJ7620',
        GESTURE_READ: 'Lire PAJ7620 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        GESTURE_CATEGORY: 'ジェスチャー認識',
        GESTURE_INIT: 'PAJ7620 センサーを初期化',
        GESTURE_READ: 'PAJ7620 %1 を読み取り',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        GESTURE_CATEGORY: '제스처 인식',
        GESTURE_INIT: 'PAJ7620 센서 초기화',
        GESTURE_READ: 'PAJ7620 %1 읽기',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        GESTURE_CATEGORY: 'Rozpoznawanie gestów',
        GESTURE_INIT: 'inicjacja czujnika PAJ7620',
        GESTURE_READ: 'Przeczytaj PAJ7620 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        GESTURE_CATEGORY: 'Reconhecimento de gestos',
        GESTURE_INIT: 'iniciar sensor PAJ7620',
        GESTURE_READ: 'Ler PAJ7620 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        GESTURE_CATEGORY: 'Распознавание жестов',
        GESTURE_INIT: 'инициализировать датчик PAJ7620',
        GESTURE_READ: 'Читать PAJ7620 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        GESTURE_CATEGORY: '手勢識別',
        GESTURE_INIT: '初始化 手勢識別傳感器',
        GESTURE_READ: '識別手勢 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        GESTURE_CATEGORY: '手势识别',
        GESTURE_INIT: '初始化 手势识别传感器',
        GESTURE_READ: '识别手势 %1',
    });
    return Blockly;
}

exports = addMsg;
