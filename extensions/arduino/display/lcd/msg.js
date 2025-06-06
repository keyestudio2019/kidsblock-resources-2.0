/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LCD_CATEGORY: 'LCD1602 IIC',
        LCD_INIT: 'init lcd I2C address %1',
        LCD_SETCURSORPOSITION: 'set lcd cursor position x: %1 y: %2',
        LCD_PRINT: 'lcd print %1',
        LCD_CLEAR: 'clear lcd',
        LCD_SETBACKLIGHT: 'set lcd back light %1',
        LCD_SATE_ON: 'on',
        LCD_SATE_OFF: 'off',
        LCD_SETCURSORSTYLE: 'set lcd cursor %1 style %2',
        LCD_SATE_DISPLAY: 'display',
        LCD_SATE_HIDE: 'hide',
        LCD_STYLE_BLINK: 'blink',
        LCD_STYLE_NOBLINK: 'no-blink'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
         LCD_CATEGORY: 'LCD1602 IIC',
         LCD_INIT: 'LCD-I2C-Adresse %1 initialisieren',
         LCD_SETCURSORPOSITION: 'LCD-Cursorposition x: %1 y: %2 festlegen',
         LCD_PRINT: 'LCD-Druck %1',
         LCD_CLEAR: 'LCD löschen',
         LCD_SETBACKLIGHT: 'LCD-Hintergrundbeleuchtung %1 einstellen',
         LCD_SATE_ON: 'ein',
         LCD_SATE_OFF: 'aus',
         LCD_SETCURSORSTYLE: 'Setze den LCD-Cursor %1 im Stil %2',
         LCD_SATE_DISPLAY: 'Anzeige',
         LCD_SATE_HIDE: 'verstecken',
         LCD_STYLE_BLINK: 'blinkt',
         LCD_STYLE_NOBLINK: 'kein Blinken'
       
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
         LCD_CATEGORY: 'LCD1602 IIC',
         LCD_INIT: 'inicio dirección lcd I2C %1',
         LCD_SETCURSORPOSITION: 'establecer la posición del cursor lcd x: %1 y: %2',
         LCD_PRINT: 'impresión lcd %1',
         LCD_CLEAR: 'borrar lcd',
         LCD_SETBACKLIGHT: 'configurar la luz de fondo de la pantalla LCD %1',
         LCD_SATE_ON: 'encendido',
         LCD_SATE_OFF: 'apagado',
         LCD_SETCURSORSTYLE: 'establecer cursor lcd %1 estilo %2',
         LCD_SATE_DISPLAY: 'pantalla',
         LCD_SATE_HIDE: 'ocultar',
         LCD_STYLE_BLINK: 'parpadear',
         LCD_STYLE_NOBLINK: 'sin parpadeo'
       
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
         LCD_CATEGORY:'LCD1602 IIC',
         LCD_INIT: 'initialisation de l"adresse I2C de l"écran LCD %1',
         LCD_SETCURSORPOSITION: 'définir la position du curseur LCD x:%1 y:%2',
         LCD_PRINT: 'impression LCD %1',
         LCD_CLEAR: 'effacer l"écran LCD',
         LCD_SETBACKLIGHT: 'régler le rétroéclairage de l"écran LCD %1',
         LCD_SATE_ON: 'activé',
         LCD_SATE_OFF: 'éteint',
         LCD_SETCURSORSTYLE: 'définir le style du curseur LCD %1 %2',
         LCD_SATE_DISPLAY : 'affichage',
         LCD_SATE_HIDE: 'masquer',
         LCD_STYLE_BLINK: 'clignoter',
         LCD_STYLE_NOBLINK:'sans clignotement'
        
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
         LCD_CATEGORY: 'LCD1602 IIC',
         LCD_INIT: '液晶 I2C アドレス %1 の初期化',
         LCD_SETCURSORPOSITION: 'LCD カーソル位置を設定 x: %1 y: %2',
         LCD_PRINT: '液晶印刷 %1',
         LCD_CLEAR: '液晶をクリア',
         LCD_SETBACKLIGHT: 'LCD バックライト %1 を設定',
         LCD_SATE_ON: 'オン',
         LCD_SATE_OFF: 'オフ',
         LCD_SETCURSORSTYLE: 'LCD カーソル %1 スタイル %2 を設定',
         LCD_SATE_DISPLAY: 'ディスプレイ',
         LCD_SATE_HIDE: '非表示',
         LCD_STYLE_BLINK: '点滅',
         LCD_STYLE_NOBLINK: 'まばたきなし'
        
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
         LCD_CATEGORY: 'LCD1602 IIC',
         LCD_INIT: 'LCD I2C 주소 %1 초기화',
         LCD_SETCURSORPOSITION: 'LCD 커서 위치 설정 x: %1 y: %2',
         LCD_PRINT: 'LCD 인쇄 %1',
         LCD_CLEAR: 'LCD 지우기',
         LCD_SETBACKLIGHT: 'LCD 백라이트 %1 설정',
         LCD_SATE_ON: '켜짐',
         LCD_SATE_OFF: '꺼짐',
         LCD_SETCURSORSTYLE: 'LCD 커서 %1 스타일 %2 설정',
         LCD_SATE_DISPLAY: '디스플레이',
         LCD_SATE_HIDE: '숨기기',
         LCD_STYLE_BLINK: '깜박임',
         LCD_STYLE_NOBLINK: '깜박이지 않음'
        
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
         LCD_CATEGORY: 'LCD1602 IIC',
         LCD_INIT: 'początkowy adres LCD I2C %1',
         LCD_SETCURSORPOSITION: 'ustaw pozycję kursora LCD x: %1 y: %2',
         LCD_PRINT: 'wydruk LCD %1',
         LCD_CLEAR: 'czysty wyświetlacz LCD',
         LCD_SETBACKLIGHT: 'ustaw podświetlenie LCD %1',
         LCD_SATE_ON: 'włączony',
         LCD_SATE_OFF: 'wyłączony',
         LCD_SETCURSORSTYLE: 'ustaw styl kursora LCD %1 %2',
         LCD_SATE_DISPLAY: 'wyświetlacz',
         LCD_SATE_HIDE: 'ukryj',
         LCD_STYLE_BLINK: 'miga',
         LCD_STYLE_NOBLINK: 'bez mrugnięcia'
       
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
         LCD_CATEGORY: 'LCD1602 IIC',
         LCD_INIT: 'inicia o endereço LCD I2C %1',
         LCD_SETCURSORPOSITION: 'definir posição do cursor lcd x: %1 y: %2',
         LCD_PRINT: 'impressão lcd %1',
         LCD_CLEAR: 'limpar lcd',
         LCD_SETBACKLIGHT: 'definir luz de fundo do LCD %1',
         LCD_SATE_ON: 'ligado',
         LCD_SATE_OFF: 'desligado',
         LCD_SETCURSORSTYLE: 'definir cursor lcd %1 estilo %2',
         LCD_SATE_DISPLAY: 'exibição',
         LCD_SATE_HIDE: 'ocultar',
         LCD_STYLE_BLINK: 'piscar',
         LCD_STYLE_NOBLINK: 'sem piscar'
        
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
         LCD_CATEGORY: 'LCD1602 IIC',
         LCD_INIT: 'инициализировать адрес I2C ЖК-дисплея %1',
         LCD_SETCURSORPOSITION: 'установить позицию ЖК-курсора x: %1 y: %2',
         LCD_PRINT: 'ЖК-принтер %1',
         LCD_CLEAR: 'чистый ЖК',
         LCD_SETBACKLIGHT: 'установить подсветку ЖК-дисплея %1',
         LCD_SATE_ON: 'включено',
         LCD_SATE_OFF: 'выключено',
         LCD_SETCURSORSTYLE: 'установить стиль ЖК-курсора %1 %2',
         LCD_SATE_DISPLAY: 'дисплей',
         LCD_SATE_HIDE: 'скрыть',
         LCD_STYLE_BLINK: 'мигать',
         LCD_STYLE_NOBLINK: 'не мигать'
        
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
     LCD_CATEGORY: 'LCD1602 IIC',
     LCD_INIT: '初始化 lcd I2C 位址 %1',
     LCD_SETCURSORPOSITION: 'set lcd 遊標位置 x: %1 y: %2',
     LCD_PRINT: 'lcd 列印 %1',
     LCD_CLEAR: '清空 lcd',
     LCD_SETBACKLIGHT: '設定 lcd 背光 %1',
     LCD_SATE_ON: '開',
     LCD_SATE_OFF: '關',
     LCD_SETCURSORSTYLE: '設定 lcd 遊標 %1 樣式 %2',
     LCD_SATE_DISPLAY: '顯示',
     LCD_SATE_HIDE: '隱藏',
     LCD_STYLE_BLINK: '閃爍',
     LCD_STYLE_NOBLINK: '不閃爍'
        
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LCD_CATEGORY: 'LCD1602 IIC',
        LCD_INIT: '初始化 lcd I2C 地址 %1',
        LCD_SETCURSORPOSITION: 'set lcd 光标位置 x: %1 y: %2',
        LCD_PRINT: 'lcd 打印 %1',
        LCD_CLEAR: '清空 lcd',
        LCD_SETBACKLIGHT: '设置 lcd 背光 %1',
        LCD_SATE_ON: '开',
        LCD_SATE_OFF: '关',
        LCD_SETCURSORSTYLE: '设置 lcd 光标 %1 样式 %2',
        LCD_SATE_DISPLAY: '显示',
        LCD_SATE_HIDE: '隐藏',
        LCD_STYLE_BLINK: '闪烁',
        LCD_STYLE_NOBLINK: '不闪烁'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
     LCD_CATEGORY: 'LCD1602 IIC',
     LCD_INIT: 'Inizializza lcd I2C indirizzo %1',
     LCD_SETCURSORPOSITION: 'Imposta la posizione del cursore lcd x: %1 y: %2',
     LCD_PRINT: 'Stampa lcd %1',
     LCD_CLEAR: 'Pulisci lcd',
     LCD_SETBACKLIGHT: 'Imposta la retroilluminazione lcd %1',
     LCD_SATE_ON: 'Acceso',
     LCD_SATE_OFF: 'Spento',
     LCD_SETCURSORSTYLE: 'Imposta lo stile del cursore lcd %1 stile %2',
     LCD_SATE_DISPLAY: 'Mostra',
     LCD_SATE_HIDE: 'Nascondi',
     LCD_STYLE_BLINK: 'Lampeggia',
     LCD_STYLE_NOBLINK: 'Non lampeggia',     
 });
    return Blockly;
}

exports = addMsg;
