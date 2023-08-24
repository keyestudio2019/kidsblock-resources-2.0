/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TILT_CATEGORY: 'Tilt detection module',
        TILT_READ_STATE: 'A tilt was detected in interface %1?',
        TILT_READ_VALUE: 'A state value of tilt module in interface %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        TILT_CATEGORY: 'Neigungserkennungsmodul',
        TILT_READ_STATE: 'Eine Neigung wurde in der Schnittstelle %1 erkannt?',
        TILT_READ_VALUE: 'Ein Statuswert des Neigungsmoduls in Schnittstelle %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        TILT_CATEGORY: 'Módulo de detección de inclinación',
        TILT_READ_STATE: 'Se detectó una inclinación en la interfaz %1?',
        TILT_READ_VALUE: '¿Un valor de estado del módulo de inclinación en la interfaz %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        TILT_CATEGORY: 'Module de détection d"inclinaison',
        TILT_READ_STATE: 'Une inclinaison a été détectée dans l"interface %1?',
        TILT_READ_VALUE: 'Une valeur d"état du module d"inclinaison dans l"interface %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        TILT_CATEGORY: '傾き検出モジュール',
        TILT_READ_STATE: 'インターフェイス %1 で傾斜が検出されました?',
        TILT_READ_VALUE: 'インターフェイス %1 のチルト モジュールの状態値?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        TILT_CATEGORY: '기울기 감지 모듈',
        TILT_READ_STATE: '인터페이스 %1에서 기울기가 감지되었습니까?',
        TILT_READ_VALUE: '인터페이스 %1의 틸트 모듈 상태 값?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        TILT_CATEGORY: 'Moduł wykrywania przechyłu',
        TILT_READ_STATE: 'Wykryto pochylenie w interfejsie %1?',
        TILT_READ_VALUE: 'Wartość stanu modułu pochylenia w interfejsie %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        TILT_CATEGORY: 'Módulo de detecção de inclinação',
        TILT_READ_STATE: 'Uma inclinação foi detectada na interface %1?',
        TILT_READ_VALUE: 'Um valor de estado do módulo de inclinação na interface %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        TILT_CATEGORY: 'Модуль обнаружения наклона',
        TILT_READ_STATE: 'В интерфейсе %1? обнаружен наклон',
        TILT_READ_VALUE: 'Значение состояния модуля наклона в интерфейсе %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        TILT_CATEGORY: '傾斜檢測模塊',
        TILT_READ_STATE: '接口%1檢測到傾斜? ',
        TILT_READ_VALUE: '接口%1傾斜檢測模塊的狀態值'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TILT_CATEGORY: '倾斜检测模块',
        TILT_READ_STATE: '接口%1检测到倾斜?',
        TILT_READ_VALUE: '接口%1倾斜检测模块的状态值'
    });
    return Blockly;
}

exports = addMsg;
