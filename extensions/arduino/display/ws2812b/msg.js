/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        WS2812B_CATEGORY: 'WS2812RGB LED',
        WS2812B_INIT: 'pin %1 %2 RGB LEDs',
        WS2812B_SETBRIGHTNESS: 'pin %1 LED brightness %2',
        WS2812B_CLEAR: 'pin %1 clear all LEDs',
        WS2812B_SETRANGECOLOR: 'pin %1 RGB %2 to %3 show color %4',
        WS2812B_RGBTOCOLOR: 'red %1 green %2 blue %3',
        WS2812B_SHOWRAINBOW: 'pin %1 %2 to %3 RGB LEDs show  a gradient color from %4 to %5',
        WS2812B_SHIFT: 'pin %1 shift pixels by %2',
        WS2812B_ROTATE: 'pin %1 rotate pixels by %2',
        WS2812B_SHOWBARGRAPH: 'pin %1 %2 to %3 RGB LEDs show histogram current value: %4 max value: %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        WS2812B_CATEGORY: 'WS2812RGB LED',
        WS2812B_INIT: 'Pin %1 %2 RGB-LEDs',
        WS2812B_SETBRIGHTNESS: 'Pin %1 LED-Helligkeit %2',
        WS2812B_CLEAR: 'Pin %1 löscht alle LEDs',
        WS2812B_SETRANGECOLOR: 'Pin %1 RGB %2 bis %3 zeigt Farbe %4 an',
        WS2812B_RGBTOCOLOR: 'rot %1 grün %2 blau %3',
        WS2812B_SHOWRAINBOW: 'Pin %1 %2 bis %3 RGB-LEDs zeigen einen Farbverlauf von %4 bis %5',
        WS2812B_SHIFT: 'Pin %1 verschiebt Pixel um %2',
        WS2812B_ROTATE: 'Pin %1 dreht Pixel um %2',
        WS2812B_SHOWBARGRAPH: 'Pin %1 %2 bis %3 RGB-LEDs zeigen den aktuellen Histogrammwert an: %4 Maximalwert: %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        WS2812B_CATEGORÍA: 'LED WS2812RGB',
        WS2812B_INIT: 'pin %1 %2 LED RGB',
        WS2812B_SETBRIGHTNESS: 'pin %1 brillo LED %2',
        WS2812B_CLEAR: 'pin %1 borra todos los LED',
        WS2812B_SETRANGECOLOR: 'pin %1 RGB %2 a %3 mostrar color %4',
        WS2812B_RGBTOCOLOR: 'rojo %1 verde %2 azul %3',
        WS2812B_SHOWRAINBOW: 'pin %1 %2 a %3 LED RGB muestran un color degradado de %4 a %5',
        WS2812B_SHIFT: 'fijar %1 desplazamiento de píxeles en %2',
        WS2812B_ROTATE: 'anclar %1 rotar píxeles en %2',
        WS2812B_SHOWBARGRAPH: 'pin %1 %2 a %3 LED RGB muestran valor actual de histograma: %4 valor máximo: %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        WS2812B_CATEGORY: 'LED WS2812RGB',
        WS2812B_INIT: 'broche %1 %2 LED RVB',
        WS2812B_SETBRIGHTNESS: 'broche %1 luminosité LED %2',
        WS2812B_CLEAR: 'broche %1 efface toutes les LED',
        WS2812B_SETRANGECOLOR: 'la broche %1 RVB %2 à %3 affiche la couleur %4',
        WS2812B_RGBTOCOLOR: 'rouge %1 vert %2 bleu %3',
        WS2812B_SHOWRAINBOW: 'la broche %1 %2 à %3 LED RVB affiche un dégradé de couleur de %4 à %5',
        WS2812B_SHIFT: 'la broche %1 décale les pixels de %2',
        WS2812B_ROTATE: 'la broche %1 fait pivoter les pixels de %2',
        WS2812B_SHOWBARGRAPH: 'la broche%1 %2 à %3LED RVB affichent la valeur actuelle de l"histogramme:%4 valeur maximale:%5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        WS2812B_CATEGORY: 'WS2812RGB LED',
        WS2812B_INIT: 'ピン %1 %2 RGB LED',
        WS2812B_SETBRIGHTNESS: 'ピン %1 LED の明るさ %2',
        WS2812B_CLEAR: 'ピン %1 のすべての LED をクリア',
        WS2812B_SETRANGECOLOR: 'ピン %1 RGB %2 から %3 はカラー %4 を表示します',
        WS2812B_RGBTOCOLOR: '赤 %1 緑 %2 青 %3',
        WS2812B_SHOWRAINBOW: 'ピン %1 %2 ～ %3 RGB LED は %4 ～ %5 のグラデーション カラーを表示します',
        WS2812B_SHIFT: 'ピン %1 はピクセルを %2 シフトします',
        WS2812B_ROTATE: 'ピン %1 はピクセルを %2 回転させます',
        WS2812B_SHOWBARGRAPH: 'ピン %1 %2 ～ %3 RGB LED はヒストグラムを表示します 現在値: %4 最大値: %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        WS2812B_CATEGORY: 'WS2812RGB LED',
        WS2812B_INIT: '핀 %1 %2 RGB LED',
        WS2812B_SETBRIGHTNESS: '핀 %1 LED 밝기 %2',
        WS2812B_CLEAR: '핀 %1 모든 LED 지우기',
        WS2812B_SETRANGECOLOR: '핀 %1 RGB %2에서 %3까지 색상 %4 표시',
        WS2812B_RGBTOCOLOR: '빨강 %1 초록 %2 파랑 %3',
        WS2812B_SHOWRAINBOW: '핀 %1 %2에서 %3 RGB LED는 %4에서 %5까지 그라데이션 색상을 표시합니다.',
        WS2812B_SHIFT: '핀 %1 시프트 픽셀 %2',
        WS2812B_ROTATE: '핀 %1이 픽셀을 %2만큼 회전',
        WS2812B_SHOWBARGRAPH: '핀 %1 %2 ~ %3 RGB LED에 히스토그램 현재 값 표시: %4 최대 값: %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        WS2812B_CATEGORY: 'WS2812RGB LED',
        WS2812B_INIT: 'styk %1 %2 diod RGB',
        WS2812B_SETBRIGHTNESS: 'pin %1 Jasność LED %2',
        WS2812B_CLEAR: 'pin %1 kasuje wszystkie diody',
        WS2812B_SETRANGECOLOR: 'pin %1 RGB %2 do %3 pokazuje kolor %4',
        WS2812B_RGTOCOLOR: 'czerwony %1 zielony %2 niebieski %3',
        WS2812B_SHOWRAINBOW: 'pin %1 %2 do %3 Diody LED RGB pokazują kolor gradientu od %4 do %5',
        WS2812B_SHIFT: 'pin %1 przesuwa piksele o %2',
        WS2812B_ROTATE: 'pin %1 obraca piksele o %2',
        WS2812B_SHOWBARGRAPH: 'pin %1 %2 do %3 Diody LED RGB pokazują histogram aktualna wartość: %4 maksymalna wartość: %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        WS2812B_CATEGORY: 'LED WS2812RGB',
        WS2812B_INIT: 'pino %1 %2 LEDs RGB',
        WS2812B_SETBRIGHTNESS: 'pino %1 brilho do LED %2',
        WS2812B_CLEAR: 'pino %1 limpa todos os LEDs',
        WS2812B_SETRANGECOLOR: 'pino %1 RGB %2 a %3 mostra a cor %4',
        WS2812B_RGBTOCOLOR: 'vermelho %1 verde %2 azul %3',
        WS2812B_SHOWRAINBOW: 'pino %1 %2 a %3 LEDs RGB mostram uma cor gradiente de %4 a %5',
        WS2812B_SHIFT: 'pino %1 desloca pixels em %2',
        WS2812B_ROTATE: 'pino %1 gira pixels em %2',
        WS2812B_SHOWBARGRAPH: 'pino %1 %2 a %3 LEDs RGB mostram o valor atual do histograma: %4 valor máximo: %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        WS2812B_CATEGORY: 'Светодиод WS2812RGB',
        WS2812B_INIT: 'вывод %1 %2 светодиодов RGB',
        WS2812B_SETBRIGHTNESS: 'вывод %1 яркость светодиода %2',
        WS2812B_CLEAR: 'вывод %1 очистить все светодиоды',
        WS2812B_SETRANGECOLOR: 'вывод %1 RGB от %2 до %3 показывает цвет %4',
        WS2812B_RGBTOCOLOR: 'красный %1 зеленый %2 синий %3',
        WS2812B_SHOWRAINBOW: 'контакт %1 %2 до %3 RGB-светодиодов показывает градиентный цвет от %4 до %5',
        WS2812B_SHIFT: 'закрепить %1 сдвинуть пиксели на %2',
        WS2812B_ROTATE: 'закрепить %1, повернуть пиксели на %2',
        WS2812B_SHOWBARGRAPH: 'вывод %1 от %2 до %3 RGB-светодиоды показывают текущее значение гистограммы: %4 максимальное значение: %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        WS2812B_CATEGORY: 'WS2812 RGB燈',
        WS2812B_INIT: '初始化 WS2812 RGB燈 接口 %1 燈總數 %2',
        WS2812B_SETBRIGHTNESS: 'RGB燈 設置接口 %1 燈帶亮度為 %2',
        WS2812B_CLEAR: 'RGB燈 接口 %1 全部熄滅',
        WS2812B_SETRANGECOLOR: 'RGB燈 接口 %1 燈號 %2 到 %3 顯示顏色 %4',
        WS2812B_RGBTOCOLOR: '紅 %1 綠 %2 藍 %3',
        WS2812B_SHOWRAINBOW: 'RGB燈 接口 %1 燈號 %2 到 %3 顯示漸變顏色 色調從 %4 到 %5',
        WS2812B_SHIFT: 'RGB燈 接口 %1 移動 %2 單位',
        WS2812B_ROTATE: 'RGB燈 接口 %1 循環移動 %2 單位',
        WS2812B_SHOWBARGRAPH: 'RGB燈 接口 %1 燈號 %2 到 %3 顯示柱狀圖 當前值 %4 最大值 %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        WS2812B_CATEGORY: 'WS2812 RGB灯',
        WS2812B_INIT: '初始化 WS2812 RGB灯 接口 %1 灯总数 %2',
        WS2812B_SETBRIGHTNESS: 'RGB灯 设置接口 %1 灯带亮度为 %2',
        WS2812B_CLEAR: 'RGB灯 接口 %1 全部熄灭',
        WS2812B_SETRANGECOLOR: 'RGB灯 接口 %1 灯号 %2 到 %3 显示颜色 %4',
        WS2812B_RGBTOCOLOR: '红 %1 绿 %2 蓝 %3',
        WS2812B_SHOWRAINBOW: 'RGB灯 接口 %1 灯号 %2 到 %3 显示渐变颜色 色调从 %4 到 %5',
        WS2812B_SHIFT: 'RGB灯 接口 %1 移动 %2 单位',
        WS2812B_ROTATE: 'RGB灯 接口 %1 循环移动 %2 单位',
        WS2812B_SHOWBARGRAPH: 'RGB灯 接口 %1 灯号 %2 到 %3 显示柱状图 当前值 %4 最大值 %5',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        WS2812B_CATEGORY: 'Lampada RGB WS2812',
        WS2812B_INIT: 'Inizializzazione lampada RGB WS2812 interfaccia %1 numero di lampade %2',
        WS2812B_SETBRIGHTNESS: 'Lampada RGB imposta interfaccia %1 luminosità della striscia a %2',
        WS2812B_CLEAR: 'Lampada RGB interfaccia %1 spegne tutte le luci',
        WS2812B_SETRANGECOLOR: 'Lampada RGB interfaccia %1 dalla lampada %2 alla %3 mostra colore %4',
        WS2812B_RGBTOCOLOR: 'Rosso %1 Verde %2 Blu %3',
        WS2812B_SHOWRAINBOW: 'Lampada RGB interfaccia %1 dalla lampada %2 alla %3 mostra colore arcobaleno da tonalità %4 a %5',
        WS2812B_SHIFT: 'Lampada RGB interfaccia %1 sposta di %2 unità',
        WS2812B_ROTATE: 'Lampada RGB interfaccia %1 rotazione ciclica di %2 unità',
        WS2812B_SHOWBARGRAPH: 'Lampada RGB interfaccia %1 dalla lampada %2 alla %3 mostra grafico a barre valore corrente %4 valore massimo %5',        
    });
    return Blockly;
}

exports = addMsg;
