/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        RGBLEDSTRIP_CATEGORY: 'RGB LED Strip',
        RGBLEDSTRIP_INIT: 'init RGB LED strip length %1 pin %2',
        RGBLEDSTRIP_SETPIXELCOLOR: 'set pixel %1 color %2',
        RGBLEDSTRIP_FILL: 'fill from pixel %1 count %2 with color %3',
        RGBLEDSTRIP_COLOR: 'RGB LED strip color R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: 'set brightness %1',
        RGBLEDSTRIP_CLEAR: 'clear all',
        RGBLEDSTRIP_SHOW: 'refresh'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        RGBLEDSTRIP_CATEGORY: 'RGB-LED-Streifen',
        RGBLEDSTRIP_INIT: 'RGB-LED-Streifenlänge %1 Pin %2 initialisieren',
        RGBLEDSTRIP_SETPIXELCOLOR: 'Setze Pixel %1 Farbe %2',
        RGBLEDSTRIP_FILL: 'Von Pixel %1 Anzahl %2 mit Farbe %3 füllen',
        RGBLEDSTRIP_COLOR: 'RGB-LED-Streifenfarbe R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: 'Helligkeit %1 einstellen',
        RGBLEDSTRIP_CLEAR: 'Alles löschen',
        RGBLEDSTRIP_SHOW: 'aktualisieren'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        RGBLEDSTRIP_CATEGORY: 'Tira LED RGB',
        RGBLEDSTRIP_INIT: 'iniciar longitud de tira de LED RGB %1 pin %2',
        RGBLEDSTRIP_SETPIXELCOLOR: 'establecer píxel %1 color %2',
        RGBLEDSTRIP_FILL: 'rellenar desde el píxel %1 contar %2 con el color %3',
        RGBLEDSTRIP_COLOR: 'Color de tira LED RGB R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: 'establecer brillo %1',
        RGBLEDSTRIP_CLEAR: 'borrar todo',
        RGBLEDSTRIP_SHOW: 'actualizar'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        RGBLEDSTRIP_CATEGORY: 'Bande LED RVB',
        RGBLEDSTRIP_INIT: 'initialisation de la longueur de la bande LED RVB %1 broche %2',
        RGBLEDSTRIP_SETPIXELCOLOR: 'définir le pixel %1 couleur %2',
        RGBLEDSTRIP_FILL: 'remplir à partir du pixel %1 compter %2 avec la couleur %3',
        RGBLEDSTRIP_COLOR: 'Couleur de la bande LED RVB R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: 'définir la luminosité %1',
        RGBLEDSTRIP_CLEAR: 'tout effacer',
        RGBLEDSTRIP_SHOW: 'actualiser'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        RGBLEDSTRIP_CATEGORY: 'RGB LED ストリップ',
        RGBLEDSTRIP_INIT: 'RGB LED ストリップ長 %1 ピン %2 を初期化',
        RGBLEDSTRIP_SETPIXELCOLOR: 'ピクセル %1 カラー %2 を設定',
        RGBLEDSTRIP_FILL: 'ピクセル %1 カウント %2 から色 %3 で塗りつぶします',
        RGBLEDSTRIP_COLOR: 'RGB LED ストリップの色 R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: '明るさを設定 %1',
        RGBLEDSTRIP_CLEAR: 'すべてクリア',
        RGBLEDSTRIP_SHOW: '更新'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        RGBLEDSTRIP_CATEGORY: 'RGB LED 스트립',
        RGBLEDSTRIP_INIT: '초기화 RGB LED 스트립 길이 %1 핀 %2',
        RGBLEDSTRIP_SETPIXELCOLOR: '픽셀 %1 색상 %2 설정',
        RGBLEDSTRIP_FILL: '색상 %3로 픽셀 %1 카운트 %2에서 채우기',
        RGBLEDSTRIP_COLOR: 'RGB LED 스트립 색상 R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: '밝기 %1 설정',
        RGBLEDSTRIP_CLEAR: '모두 지우기',
        RGBLEDSTRIP_SHOW: '새로 고침'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        RGBLEDSTRIP_CATEGORY: 'Pasek LED RGB',
        RGBLEDSTRIP_INIT: 'początkowa długość taśmy LED RGB %1 pin %2',
        RGBLEDSTRIP_SETPIXELCOLOR: 'ustaw piksel %1 kolor %2',
        RGBLEDSTRIP_FILL: 'wypełnij piksel %1 liczba %2 kolorem %3',
        RGBLEDSTRIP_COLOR: 'Kolor taśmy LED RGB R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: 'ustaw jasność %1',
        RGBLEDSTRIP_CLEAR: 'wyczyść wszystko',
        RGBLEDSTRIP_SHOW: 'odśwież'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        RGBLEDSTRIP_CATEGORY: 'Faixa LED RGB',
        RGBLEDSTRIP_INIT: 'inicializar comprimento da faixa de LED RGB %1 pino %2',
        RGBLEDSTRIP_SETPIXELCOLOR: 'definir pixel %1 cor %2',
        RGBLEDSTRIP_FILL: 'preencher do pixel %1 contagem %2 com cor %3',
        RGBLEDSTRIP_COLOR: 'RGB LED strip color R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: 'definir brilho %1',
        RGBLEDSTRIP_CLEAR: 'limpar tudo',
        RGBLEDSTRIP_SHOW: 'atualizar'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        RGBLEDSTRIP_CATEGORY: 'Светодиодная лента RGB',
        RGBLEDSTRIP_INIT: 'инициализировать длину светодиодной ленты RGB %1 контакт %2',
        RGBLEDSTRIP_SETPIXELCOLOR: 'установить для пикселя %1 цвет %2',
        RGBLEDSTRIP_FILL: 'залить от пикселя %1 количество %2 цветом %3',
        RGBLEDSTRIP_COLOR: 'Цвет светодиодной ленты RGB R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: 'установить яркость%1',
        RGBLEDSTRIP_CLEAR: 'очистить все',
        RGBLEDSTRIP_SHOW: 'обновить'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        RGBLEDSTRIP_CATEGORY: 'RGB LED燈條',
        RGBLEDSTRIP_INIT: '初始化RGB LED燈條長度 %1 引腳 %2',
        RGBLEDSTRIP_SETPIXELCOLOR: '設置像素 %1 顏色 %2',
        RGBLEDSTRIP_FILL: '從像素 %1 開始 共填充 %2 顏色 %3',
        RGBLEDSTRIP_COLOR: 'RGB LED燈條顏色 R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: '設置亮度 %1',
        RGBLEDSTRIP_CLEAR: '清除所有',
        RGBLEDSTRIP_SHOW: '刷新'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        RGBLEDSTRIP_CATEGORY: 'RGB LED灯条',
        RGBLEDSTRIP_INIT: '初始化RGB LED灯条长度 %1 引脚 %2',
        RGBLEDSTRIP_SETPIXELCOLOR: '设置像素 %1 颜色 %2',
        RGBLEDSTRIP_FILL: '从像素 %1 开始 共填充 %2 颜色 %3',
        RGBLEDSTRIP_COLOR: 'RGB LED灯条颜色 R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: '设置亮度 %1',
        RGBLEDSTRIP_CLEAR: '清除所有',
        RGBLEDSTRIP_SHOW: '刷新'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        RGBLEDSTRIP_CATEGORY: 'Striscia LED RGB',
        RGBLEDSTRIP_INIT: 'Inizializza striscia LED RGB lunghezza %1 pin %2',
        RGBLEDSTRIP_SETPIXELCOLOR: 'Imposta il colore del pixel %1 a %2',
        RGBLEDSTRIP_FILL: 'Dalla posizione del pixel %1 riempi %2 con il colore %3',
        RGBLEDSTRIP_COLOR: 'Colore striscia LED RGB R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: 'Imposta la luminosità a %1',
        RGBLEDSTRIP_CLEAR: 'Pulisci tutto',
        RGBLEDSTRIP_SHOW: 'Aggiorna'        
    });
    return Blockly;
}

exports = addMsg;
