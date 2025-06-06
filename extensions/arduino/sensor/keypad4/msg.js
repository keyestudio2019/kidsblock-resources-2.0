/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KEYPAD_CATEGORY: 'Keypad 4*4',
        KEYPAD_INIT: 'keypad 4*4 Init',
        KEYPAD_READ: 'Keypad4*4 Read key value',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        KEYPAD_CATEGORY: 'Tastatur 4*4',
        KEYPAD_INIT: 'Tastatur 4*4 Init',
        KEYPAD_READ: 'Keypad4*4 Schlüsselwert lesen',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        KEYPAD_CATEGORY: 'Teclado 4*4',
        KEYPAD_INIT: 'teclado 4*4 Iniciar',
        KEYPAD_READ: 'Keypad4*4 Leer valor clave',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        KEYPAD_CATEGORY:'Clavier 4*4',
        KEYPAD_INIT: 'Init clavier 4*4',
        KEYPAD_READ: 'Keypad4*4 Lire la valeur de la clé',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        KEYPAD_CATEGORY: 'キーパッド 4*4',
        KEYPAD_INIT: 'キーパッド 4*4 初期化',
        KEYPAD_READ: 'Keypad4*4 キー値の読み取り',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        KEYPAD_CATEGORY: '키패드 4*4',
        KEYPAD_INIT: '키패드 4*4 초기화',
        KEYPAD_READ: 'Keypad4*4 키 값 읽기',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        KEYPAD_CATEGORY: 'Klawiatura 4*4',
        KEYPAD_INIT: 'Inicjacja klawiatury 4*4',
        KEYPAD_READ: 'Keypad4*4 Odczyt wartości klucza',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        KEYPAD_CATEGORY: 'Teclado 4*4',
        KEYPAD_INIT: 'teclado 4*4 Init',
        KEYPAD_READ: 'Keypad4*4 Ler valor da chave',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        KEYPAD_CATEGORY: 'Клавиатура 4*4',
        KEYPAD_INIT: 'инициализация клавиатуры 4*4',
        KEYPAD_READ: 'Keypad4*4 Чтение значения ключа',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        KEYPAD_CATEGORY: '矩陣鍵盤 4*4',
        KEYPAD_INIT: '初始化矩陣鍵盤',
        KEYPAD_READ: '讀取矩陣鍵盤的值',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KEYPAD_CATEGORY: '矩阵键盘 4*4',
        KEYPAD_INIT: '初始化矩阵键盘',
        KEYPAD_READ: '读取矩阵键盘的值',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        KEYPAD_CATEGORY: 'Tastiera 4*4',
        KEYPAD_INIT: 'Inizializza tastiera 4*4',
        KEYPAD_READ: 'Leggi valore tasto tastiera 4*4'
    });
    return Blockly;
}

exports = addMsg;
