/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BLUEBUTTON_CATEGORY: 'BLUE button',
        BLUEBUTTON_READ_STATE: 'interface %1 blue button was be pushed?',
        BLUEBUTTON_READ_VALUE: 'The state value of blue button in interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        BLUEBUTTON_CATEGORY: 'BLAUE Schaltfläche',
        BLUEBUTTON_READ_STATE: 'Der blaue Knopf der Schnittstelle %1 wurde gedrückt?',
        BLUEBUTTON_READ_VALUE: 'Der Statuswert der blauen Schaltfläche in Schnittstelle %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        BLUEBUTTON_CATEGORY: 'botón AZUL',
        BLUEBUTTON_READ_STATE: '¿Se presionó el botón azul de la interfaz %1?',
        BLUEBUTTON_READ_VALUE: 'El valor de estado del botón azul en la interfaz %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        BLUEBUTTON_CATEGORY: 'Bouton BLEU',
        BLUEBUTTON_READ_STATE: 'le bouton bleu de l"interface %1 a été enfoncé?',
        BLUEBUTTON_READ_VALUE: 'La valeur d"état du bouton bleu dans l"interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        BLUEBUTTON_CATEGORY: '青いボタン',
        BLUEBUTTON_READ_STATE: 'インターフェイス %1 の青いボタンが押されました?',
        BLUEBUTTON_READ_VALUE: 'インターフェイス %1 の青いボタンの状態値'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        BLUEBUTTON_CATEGORY: '파란색 버튼',
        BLUEBUTTON_READ_STATE: '인터페이스 %1 파란색 버튼을 눌렀습니까?',
        BLUEBUTTON_READ_VALUE: '인터페이스 %1에 있는 파란색 버튼의 상태 값'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        BLUEBUTTON_CATEGORY: 'NIEBIESKI przycisk',
        BLUEBUTTON_READ_STATE: 'Naciśnięto niebieski przycisk interfejsu %1?',
        BLUEBUTTON_READ_VALUE: 'Wartość stanu niebieskiego przycisku w interfejsie %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        BLUEBUTTON_CATEGORY: 'botão AZUL',
        BLUEBUTTON_READ_STATE: 'interface %1 botão azul foi pressionado?',
        BLUEBUTTON_READ_VALUE: 'O valor do estado do botão azul na interface %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        BLUEBUTTON_CATEGORY: 'СИНЯЯ кнопка',
        BLUEBUTTON_READ_STATE: 'была нажата синяя кнопка интерфейса %1?',
        BLUEBUTTON_READ_VALUE: 'Значение состояния синей кнопки в интерфейсе %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        BLUEBUTTON_CATEGORY: '藍色按鍵開關',
        BLUEBUTTON_READ_STATE: '接口%1藍色按鈕被按下?',
        BLUEBUTTON_READ_VALUE: '接口%1藍色按鈕的狀態值'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BLUEBUTTON_CATEGORY: '蓝色按键开关',
        BLUEBUTTON_READ_STATE: '接口%1蓝色按钮被按下?',
        BLUEBUTTON_READ_VALUE: '接口%1蓝色按钮的状态值'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        BLUEBUTTON_CATEGORY: 'Pulsante Blu',
        BLUEBUTTON_READ_STATE: 'Il pulsante blu dell\'interfaccia %1 è stato premuto?',
        BLUEBUTTON_READ_VALUE: 'Il valore dello stato del pulsante blu nell\'interfaccia %1'
    });
    return Blockly;
}

exports = addMsg;
