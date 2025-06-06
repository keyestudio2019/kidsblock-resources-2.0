/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: '%2 interface %1 LED',
        LED_ON: 'open',
        LED_OFF: 'close'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: '%2 Schnittstelle %1 LED',
        LED_ON: 'offen',
        LED_OFF: 'schließen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        CATEGORÍA_LED: 'LED',
        LED_SET_LED_STATE: '%2 interfaz %1 LED',
        LED_ON: 'abierto',
        LED_OFF: 'cerrar'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        LED_CATEGORY: 'DEL',
        LED_SET_LED_STATE: '%2 interface %1 LED',
        LED_ON: 'ouvert',
        LED_OFF: 'fermer'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: '%2 インターフェイス %1 LED',
        LED_ON: '開く',
        LED_OFF: '閉じる'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: '%2 인터페이스 %1 LED',
        LED_ON: '열기',
        LED_OFF: '닫기'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: '%2 interfejs %1 LED',
        LED_ON: 'otwarty',
        LED_OFF: 'zamknij'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: '%2 interface %1 LED',
        LED_ON: 'aberto',
        LED_OFF: 'fechar'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: '%2 интерфейс %1 светодиод',
        LED_ON: 'открыто',
        LED_OFF: 'закрыть'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: '%2 接口 %1 LED',
        LED_ON: '打開',
        LED_OFF: '關閉'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: '%2 接口 %1 LED',
        LED_ON: '打开',
        LED_OFF: '关闭'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: 'Interfaccia %1 LED %2',
        LED_ON: 'Accendi',
        LED_OFF: 'Spegni',        
    });
    return Blockly;
}

exports = addMsg;
