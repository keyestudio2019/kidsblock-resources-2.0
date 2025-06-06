/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: 'init lcd1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'lcd1602 row%1 column%2 print %3',
        LCD_PIN_CLEAR: 'lcd1602 %1',

        LCD_PIN_SATE_ON: 'on',
        LCD_PIN_SATE_OFF: 'off',
        LCD_PIN_SETCURSORSTYLE: 'set lcd cursor %1 style %2',
        LCD_PIN_SATE_DISPLAY: 'display',
        LCD_PIN_SATE_HIDE: 'hide',
        LCD_PIN_STYLE_BLINK: 'blink',
        LCD_PIN_STYLE_NOBLINK: 'no-blink'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: 'init lcd1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'lcd1602 Zeile%1 Spalte%2 druckt %3',
        LCD_PIN_CLEAR: 'lcd1602 %1',

        LCD_PIN_SATE_ON: 'ein',
        LCD_PIN_SATE_OFF: 'aus',
        LCD_PIN_SETCURSORSTYLE: 'Setze den LCD-Cursor %1 im Stil %2',
        LCD_PIN_SATE_DISPLAY: 'Anzeige',
        LCD_PIN_SATE_HIDE: 'verstecken',
        LCD_PIN_STYLE_BLINK: 'blinkt',
        LCD_PIN_STYLE_NOBLINK: 'kein Blinken'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: 'iniciar lcd1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'lcd1602 fila%1 columna%2 imprimir %3',
        LCD_PIN_CLEAR: 'lcd1602 %1',

        LCD_PIN_SATE_ON: 'encendido',
        LCD_PIN_SATE_OFF: 'apagado',
        LCD_PIN_SETCURSORSTYLE: 'establecer cursor lcd %1 estilo %2',
        LCD_PIN_SATE_DISPLAY: 'pantalla',
        LCD_PIN_SATE_HIDE: 'ocultar',
        LCD_PIN_STYLE_BLINK: 'parpadeo',
        LCD_PIN_STYLE_NOBLINK: 'sin parpadeo'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: 'init lcd1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'lcd1602 ligne%1 colonne%2 impression %3',
        LCD_PIN_CLEAR: 'lcd1602 %1',

        LCD_PIN_SATE_ON: 'activé',
        LCD_PIN_SATE_OFF: 'désactivé',
        LCD_PIN_SETCURSORSTYLE: 'définir le curseur lcd %1 style %2',
        LCD_PIN_SATE_DISPLAY: 'afficher',
        LCD_PIN_SATE_HIDE: 'masquer',
        LCD_PIN_STYLE_BLINK: 'clignote',
        LCD_PIN_STYLE_NOBLINK: 'pas de clignotement'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: '初期化lcd1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'lcd1602 行%1 列%2 印刷 %3',
        LCD_PIN_CLEAR: 'lcd1602 %1',

        LCD_PIN_SATE_ON: 'オン',
        LCD_PIN_SATE_OFF: 'オフ',
        LCD_PIN_SETCURSORSTYLE: 'LCD カーソル %1 スタイル %2 を設定',
        LCD_PIN_SATE_DISPLAY: 'ディスプレイ',
        LCD_PIN_SATE_HIDE: '非表示',
        LCD_PIN_STYLE_BLINK: '点滅',
        LCD_PIN_STYLE_NOBLINK: 'まばたきなし'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: '초기화 lcd1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'lcd1602 행%1 열%2 인쇄 %3',
        LCD_PIN_CLEAR: 'lcd1602 %1',

        LCD_PIN_SATE_ON: '켜기',
        LCD_PIN_SATE_OFF: '꺼짐',
        LCD_PIN_SETCURSORSTYLE: 'LCD 커서 %1 스타일 %2 설정',
        LCD_PIN_SATE_DISPLAY: '디스플레이',
        LCD_PIN_SATE_HIDE: '숨기기',
        LCD_PIN_STYLE_BLINK: '깜박임',
        LCD_PIN_STYLE_NOBLINK: '깜박임 없음'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: 'init lcd1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'lcd1602 wiersz%1 kolumna%2 drukuj%3',
        LCD_PIN_CLEAR: 'lcd1602 %1',

        LCD_PIN_SATE_ON: 'włączony',
        LCD_PIN_SATE_OFF: 'wyłączony',
        LCD_PIN_SETCURSORSTYLE: 'ustaw styl kursora lcd %1 %2',
        LCD_PIN_SATE_DISPLAY: 'wyświetlacz',
        LCD_PIN_SATE_HIDE: 'ukryj',
        LCD_PIN_STYLE_BLINK: 'miga',
        LCD_PIN_STYLE_NOBLINK: 'bez mrugnięcia'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: 'init lcd1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'lcd1602 linha%1 coluna%2 imprimir %3',
        LCD_PIN_CLEAR: 'lcd1602 %1',

        LCD_PIN_SATE_ON: 'ligado',
        LCD_PIN_SATE_OFF: 'desligado',
        LCD_PIN_SETCURSORSTYLE: 'definir cursor lcd %1 estilo %2',
        LCD_PIN_SATE_DISPLAY: 'exibir',
        LCD_PIN_SATE_HIDE: 'ocultar',
        LCD_PIN_STYLE_BLINK: 'piscar',
        LCD_PIN_STYLE_NOBLINK: 'sem piscar'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: 'инициализировать lcd1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'lcd1602 строка%1 столбец%2 печать %3',
        LCD_PIN_CLEAR: 'lcd1602 %1',

        LCD_PIN_SATE_ON: 'вкл.',
        LCD_PIN_SATE_OFF: 'выкл.',
        LCD_PIN_SETCURSORSTYLE: 'установить ЖК-курсор %1 в стиле %2',
        LCD_PIN_SATE_DISPLAY: 'дисплей',
        LCD_PIN_SATE_HIDE: 'скрыть',
        LCD_PIN_STYLE_BLINK: 'мигать',
        LCD_PIN_STYLE_NOBLINK: 'не мигает'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: '初始化 LCD1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'LCD1602 在第%1行 第%2列 打印%3',
        LCD_PIN_CLEAR: 'LCD1602顯示屏%1',

        LCD_PIN_SATE_ON: '開',
        LCD_PIN_SATE_OFF: '關',
        LCD_PIN_SETCURSORSTYLE: '設置 lcd 光標 %1 樣式 %2',
        LCD_PIN_SATE_DISPLAY: '顯示',
        LCD_PIN_SATE_HIDE: '隱藏',
        LCD_PIN_STYLE_BLINK: '閃爍',
        LCD_PIN_STYLE_NOBLINK: '不閃爍'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: '初始化 LCD1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'LCD1602 在第%1行 第%2列 打印%3',
        LCD_PIN_CLEAR: 'LCD1602显示屏%1',

        LCD_PIN_SATE_ON: '开',
        LCD_PIN_SATE_OFF: '关',
        LCD_PIN_SETCURSORSTYLE: '设置 lcd 光标 %1 样式 %2',
        LCD_PIN_SATE_DISPLAY: '显示',
        LCD_PIN_SATE_HIDE: '隐藏',
        LCD_PIN_STYLE_BLINK: '闪烁',
        LCD_PIN_STYLE_NOBLINK: '不闪烁'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        LCD_PIN_CATEGORY: 'LCD_PIN1602',
        LCD_PIN_INIT: 'Inizializza LCD1602 RS%1 EN%2 D4%3 D5%4 D6%5 D7%6',
        LCD_PIN_PRINT: 'LCD1602 stampa nella riga %1 colonna %2 %3',
        LCD_PIN_CLEAR: 'Schermo LCD1602 %1',
        LCD_PIN_SATE_ON: 'Acceso',
        LCD_PIN_SATE_OFF: 'Spento',
        LCD_PIN_SETCURSORSTYLE: 'Imposta lo stile del cursore lcd %1 stile %2',
        LCD_PIN_SATE_DISPLAY: 'Mostra',
        LCD_PIN_SATE_HIDE: 'Nascondi',
        LCD_PIN_STYLE_BLINK: 'Lampeggia',
        LCD_PIN_STYLE_NOBLINK: 'Non lampeggia',        
    });
    return Blockly;
}

exports = addMsg;
