/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TOUCHSWITCH_CATEGORY: 'Touch Switch',
        TOUCHSWITCH_READ_VALUE: 'A touch was detected in interface %1?',
        TOUCHSWITCH_STATE: 'THE state value of touch switch in interface %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        TOUCHSWITCH_CATEGORY: 'Touch-Schalter',
        TOUCHSWITCH_READ_VALUE: 'Eine Berührung wurde in Schnittstelle %1 erkannt?',
        TOUCHSWITCH_STATE: 'Der Statuswert des Berührungsschalters in Schnittstelle %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        TOUCHSWITCH_CATEGORY: 'Interruptor táctil',
        TOUCHSWITCH_READ_VALUE: 'Se detectó un toque en la interfaz %1?',
        TOUCHSWITCH_STATE: '¿EL valor de estado del interruptor táctil en la interfaz %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        TOUCHSWITCH_CATEGORY:'Commutateur tactile',
        TOUCHSWITCH_READ_VALUE: 'Un toucher a été détecté dans l"interface %1?',
        TOUCHSWITCH_STATE: 'LA valeur d"état du commutateur tactile dans l"interface %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        TOUCHSWITCH_CATEGORY: 'タッチスイッチ',
        TOUCHSWITCH_READ_VALUE: 'インターフェイス %1 でタッチが検出されました?',
        TOUCHSWITCH_STATE: 'インターフェイス %1 のタッチ スイッチの状態値?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        TOUCHSWITCH_CATEGORY: '터치 스위치',
        TOUCHSWITCH_READ_VALUE: '%1 인터페이스에서 터치가 감지되었습니까?',
        TOUCHSWITCH_STATE: '인터페이스 %1의 터치 스위치 상태 값은 무엇입니까?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        TOUCHSWITCH_CATEGORY: 'Przełącznik dotykowy',
        TOUCHSWITCH_READ_VALUE: 'Wykryto dotyk w interfejsie %1?',
        TOUCHSWITCH_STATE: 'Wartość stanu przełącznika dotykowego w interfejsie %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        TOUCHSWITCH_CATEGORY: 'Interruptor de toque',
        TOUCHSWITCH_READ_VALUE: 'Um toque foi detectado na interface %1?',
        TOUCHSWITCH_STATE: 'O valor do estado do interruptor de toque na interface %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        TOUCHSWITCH_CATEGORY: 'Сенсорный переключатель',
        TOUCHSWITCH_READ_VALUE: 'Обнаружено касание в интерфейсе %1?',
        TOUCHSWITCH_STATE: 'Значение состояния сенсорного переключателя в интерфейсе %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        TOUCHSWITCH_CATEGORY: '觸摸開關',
        TOUCHSWITCH_READ_VALUE: '接口%1檢測到觸摸? ',
        TOUCHSWITCH_STATE: '接口%1觸摸開關的狀態值'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TOUCHSWITCH_CATEGORY: '触摸开关',
        TOUCHSWITCH_READ_VALUE: '接口%1检测到触摸?',
        TOUCHSWITCH_STATE: '接口%1触摸开关的状态值'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        TOUCHSWITCH_CATEGORY: 'Interruttore touch',  
        TOUCHSWITCH_READ_VALUE: 'È stato rilevato un tocco nell\'interfaccia %1?',  
        TOUCHSWITCH_STATE: 'Il valore di stato dell\'interruttore touch nell\'interfaccia %1?'
    });
    return Blockly;
}

exports = addMsg;
