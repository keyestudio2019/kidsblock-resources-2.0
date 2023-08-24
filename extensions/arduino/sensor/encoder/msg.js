/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KSENCODER_CATEGORY: 'Encoder',
        KSENCODER_INIT: 'init encoder %1 DT %2 CLK %3',
        KSENCODER_READ: 'read encoder %1',
        KSENCODER_WRITE: 'encoder %1 write %2',
        KSENCODER_BUTTON: 'Read the rotary encoder button PIN# %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        KSENCODER_CATEGORY: 'Encoder',
        KSENCODER_INIT: 'Encoder %1 DT %2 CLK %3 initialisieren',
        KSENCODER_READ: 'Encoder %1 lesen',
        KSENCODER_WRITE: 'Encoder %1 schreibt %2',
        KSENCODER_BUTTON: 'Lesen Sie die PIN# %1 des Drehgeberknopfes',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        KSENCODER_CATEGORY: 'Codificador',
        KSENCODER_INIT: 'iniciar codificador %1 DT %2 CLK %3',
        KSENCODER_READ: 'leer codificador %1',
        KSENCODER_WRITE: 'codificador %1 escribe %2',
        KSENCODER_BUTTON: 'Leer el botón del codificador rotatorio PIN# %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        KSENCODER_CATEGORY: 'Encodeur',
        KSENCODER_INIT: 'initialisation de l"encodeur %1 DT %2 CLK %3',
        KSENCODER_READ: 'lire l"encodeur %1',
        KSENCODER_WRITE: 'encodeur %1 écrit %2',
        KSENCODER_BUTTON: 'Lire le PIN du bouton de l"encodeur rotatif # %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        KSENCODER_CATEGORY: 'エンコーダー',
        KSENCODER_INIT: '初期エンコーダ %1 DT %2 CLK %3',
        KSENCODER_READ: 'エンコーダー %1 を読み取り',
        KSENCODER_WRITE: 'エンコーダー %1 書き込み %2',
        KSENCODER_BUTTON: 'ロータリー エンコーダー ボタン PIN# %1 を読み取ります',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        KSENCODER_CATEGORY: '인코더',
        KSENCODER_INIT: '인코더 %1 DT %2 CLK %3',
        KSENCODER_READ: '인코더 %1 읽기',
        KSENCODER_WRITE: '인코더 %1 쓰기 %2',
        KSENCODER_BUTTON: '로터리 인코더 버튼 PIN# %1 읽기',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        KSENCODER_CATEGORY: 'Koder',
        KSENCODER_INIT: 'enkoder początkowy %1 DT %2 CLK %3',
        KSENCODER_READ: 'odczyt kodera %1',
        KSENCODER_WRITE: 'enkoder %1 zapisuje %2',
        KSENCODER_BUTTON: 'Odczytaj przycisk enkodera obrotowego PIN# %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        KSENCODER_CATEGORY: 'Codificador',
        KSENCODER_INIT: 'codificador de inicialização %1 DT %2 CLK %3',
        KSENCODER_READ: 'lê o codificador%1',
        KSENCODER_WRITE: 'codificador%1 gravação%2',
        KSENCODER_BUTTON: 'Ler o botão do codificador rotativo PIN# %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        KSENCODER_CATEGORY: 'Кодер',
        KSENCODER_INIT: 'инициализация кодировщика %1 DT %2 CLK %3',
        KSENCODER_READ: 'прочитать кодировщик %1',
        KSENCODER_WRITE: 'кодер %1 записывает %2',
        KSENCODER_BUTTON: 'Прочитайте PIN-код кнопки поворотного энкодера № %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        KSENCODER_CATEGORY: '旋轉編碼器',
        KSENCODER_INIT: '初始化 旋轉編碼器 %1 引腳DT %2 CLK %3',
        KSENCODER_READ: '讀取 旋轉編碼器 %1',
        KSENCODER_WRITE: '旋轉編碼器 %1 賦值為 %2',
        KSENCODER_BUTTON: '讀旋轉編碼器按鈕值 引腳# %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KSENCODER_CATEGORY: '旋转编码器',
        KSENCODER_INIT: '初始化 旋转编码器 %1 引脚DT %2 CLK %3',
        KSENCODER_READ: '读取 旋转编码器 %1',
        KSENCODER_WRITE: '旋转编码器 %1 赋值为 %2',
        KSENCODER_BUTTON: '读旋转编码器按钮值 引脚# %1',
    });
    return Blockly;
}

exports = addMsg;
