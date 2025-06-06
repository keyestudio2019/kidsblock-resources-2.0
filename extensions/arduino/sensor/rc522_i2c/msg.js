/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: 'init RFID',
        RC522_READ: 'Read the card value'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: 'RFID initialisieren',
        RC522_READ: 'Kartenwert lesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: 'iniciar RFID',
        RC522_READ: 'Leer el valor de la tarjeta'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        RC522_CATEGORY: 'RFID',
        RC522_INIT : 'init RFID',
        RC522_READ: 'Lire la valeur de la carte'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: 'RFID の初期化',
        RC522_READ: 'カード値を読み取ります'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: '초기화 RFID',
        RC522_READ: '카드 값 읽기'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: 'rozpocznij RFID',
        RC522_READ: 'Odczytaj wartość karty'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: 'inicializar RFID',
        RC522_READ: 'Ler o valor do cartão'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: 'инициировать RFID',
        RC522_READ: 'Прочитать стоимость карты'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: '初始化 RFID',
        RC522_READ: '讀取卡值'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        RC522_CATEGORY: 'RFID',
        RC522_INIT: '初始化 RFID',
        RC522_READ: '读取卡值'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        RC522_CATEGORY: 'RFID',  
        RC522_INIT: 'inizializza RFID',  
        RC522_READ: 'Leggi il valore della carta'
    });
    return Blockly;
}

exports = addMsg;
