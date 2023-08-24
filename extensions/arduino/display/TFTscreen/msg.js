/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TFT_CATEGORY: 'TFT screen',
        TFT_INIT: 'init TFTscreen PIN# CS%1 DC%2 RST%3',
        TFT_BG: 'TFTscreen background r%1 g%2 b%3',
        TFT_STROKE: 'TFTscreen stroke color r%1 g%2 b%3',
        TFT_NOSTROKE: 'TFTscreen no stroke',
        TFT_FILL: 'TFTscreen fill color r%1 g%2 b%3',
        TFT_NOFILL: 'TFTscreen nofill color',
        TFT_TEXT: 'TFTscreen text%1 coordinates: X%2 Y%3',
        TFT_TEXT_S: 'TFTscreen setTextSize(1-5)%1',
        TFT_POINT: 'TFTscreen point coordinates: X%1 Y%2',
        TFT_LINE: 'TFTscreen line coordinates:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_RECT: 'TFTscreen rect coordinates:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_WIDTH: 'TFTscreen width pixel',
        TFT_HEIGHT: 'TFTscreen height pixel',
        TFT_CIRCLE: 'TFTscreen circle coordinates: X%1 Y%2 radius%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        TFT_CATEGORY: 'TFT-Bildschirm',
        TFT_INIT: 'init TFTscreen PIN# CS%1 DC%2 RST%3',
        TFT_BG: 'TFTscreen-Hintergrund r%1 g%2 b%3',
        TFT_STROKE: 'TFTscreen-Strichfarbe r%1 g%2 b%3',
        TFT_NOSTROKE: 'TFTscreen kein Strich',
        TFT_FILL: 'TFTscreen-Füllfarbe r%1 g%2 b%3',
        TFT_NOFILL: 'TFTscreen-Nofill-Farbe',
        TFT_TEXT: 'Koordinaten des TFT-Bildschirmtextes %1: X%2 Y%3',
        TFT_TEXT_S: 'TFTscreen setTextSize(1-5)%1',
        TFT_POINT: 'TFTscreen-Punktkoordinaten: X%1 Y%2',
        TFT_LINE: 'TFTscreen-Zeilenkoordinaten:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_RECT: 'TFTscreen-Rechteckkoordinaten:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_WIDTH: 'TFT-Bildschirmbreite in Pixel',
        TFT_HEIGHT: 'TFT-Bildschirmhöhe in Pixel',
        TFT_CIRCLE: 'TFTscreen-Kreiskoordinaten: X%1 Y%2 Radius%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        TFT_CATEGORY: 'Pantalla TFT',
        TFT_INIT: 'iniciar pantalla TFT PIN# CS%1 DC%2 RST%3',
        TFT_BG: 'Fondo de pantalla TFT r%1 g%2 b%3',
        TFT_STROKE: 'Color de trazo de pantalla TFT r%1 g%2 b%3',
        TFT_NOSTROKE: 'Pantalla TFT sin trazo',
        TFT_FILL: 'Color de relleno de pantalla TFT r%1 g%2 b%3',
        TFT_NOFILL: 'Color sin relleno de pantalla TFT',
        TFT_TEXT: 'Texto de pantalla TFT%1 coordenadas: X%2 Y%3',
        TFT_TEXT_S: 'Pantalla TFT establecerTamañoTexto(1-5)%1',
        TFT_POINT: 'Coordenadas punto pantalla TFT: X%1 Y%2',
        TFT_LINE: 'Coordenadas de línea de pantalla TFT:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_RECT: 'TFTscreen rect coordenadas:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_WIDTH: 'Píxel de ancho de pantalla TFT',
        TFT_HEIGHT: 'Píxel de altura de la pantalla TFT',
        TFT_CIRCLE: 'Coordenadas del círculo de la pantalla TFT: X%1 Y%2 radio%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        TFT_CATEGORY: 'écran TFT',
        TFT_INIT: 'init TFTscreen PIN# CS%1 DC%2 RST%3',
        TFT_BG: 'Arrière-plan de l"écran TFT r%1 g%2 b%3',
        TFT_STROKE: 'Couleur de trait d"écran TFT r%1 g%2 b%3',
        TFT_NOSTROKE: 'TFTscreen no stroke',
        TFT_FILL: 'Couleur de remplissage de l"écran TFT r%1 g%2 b%3',
        TFT_NOFILL: 'TFTscreen nofill color',
        TFT_TEXT: 'Coordonnées du texte %1 de l"écran TFT: X%2 Y%3',
        TFT_TEXT_S: 'TFTscreen setTextSize(1-5)%1',
        TFT_POINT: 'Coordonnées du point de l"écran TFT: X%1 Y%2',
        TFT_LINE: 'Coordonnées de la ligne TFTscreen: xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_RECT: 'Coordonnées droites de l"écran TFT: xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_WIDTH: 'pixel de largeur d"écran TFT',
        TFT_HEIGHT: 'pixel de hauteur d"écran TFT',
        TFT_CIRCLE: 'Coordonnées du cercle de l"écran TFT: X%1 Y%2 rayon%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        TFT_CATEGORY: 'TFT スクリーン',
        TFT_INIT: 'TFT画面の初期化PIN番号 CS%1 DC%2 RST%3',
        TFT_BG: 'TFT スクリーンの背景 r%1 g%2 b%3',
        TFT_STROKE: 'TFT スクリーン ストロークの色 r%1 g%2 b%3',
        TFT_NOSTROKE: 'TFT スクリーンにストロークがありません',
        TFT_FILL: 'TFT スクリーンの塗りつぶしの色 r%1 g%2 b%3',
        TFT_NOFILL: 'TFT スクリーンの nofill カラー',
        TFT_TEXT: 'TFT画面テキスト%1 座標: X%2 Y%3',
        TFT_TEXT_S: 'TFTscreen setTextSize(1-5)%1',
        TFT_POINT: 'TFTスクリーンポイント座標: X%1 Y%2',
        TFT_LINE: 'TFT スクリーン ライン座標:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_RECT: 'TFT スクリーンの四角形座標:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_WIDTH: 'TFT画面幅ピクセル',
        TFT_HEIGHT: 'TFT 画面の高さのピクセル',
        TFT_CIRCLE: 'TFT スクリーンの円座標: X%1 Y%2 半径%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        TFT_CATEGORY: 'TFT 화면',
        TFT_INIT: '초기화 TFT스크린 PIN# CS%1 DC%2 RST%3',
        TFT_BG: 'TFT화면 배경 r%1 g%2 b%3',
        TFT_STROKE: 'TFT화면 획 색상 r%1 g%2 b%3',
        TFT_NOSTROKE: 'TFT화면 스트로크 없음',
        TFT_FILL: 'TFT화면 채우기 색상 r%1 g%2 b%3',
        TFT_NOFILL: 'TFT화면 노필 색상',
        TFT_TEXT: 'TFT화면 텍스트%1 좌표: X%2 Y%3',
        TFT_TEXT_S: 'TFT화면 setTextSize(1-5)%1',
        TFT_POINT: 'TFT화면 포인트 좌표: X%1 Y%2',
        TFT_LINE: 'TFT화면 라인 좌표:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_RECT: 'TFT화면 좌표:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_WIDTH: 'TFT화면 너비 픽셀',
        TFT_HEIGHT: 'TFT화면 높이 픽셀',
        TFT_CIRCLE: 'TFT화면 원 좌표: X%1 Y%2 반경%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        TFT_CATEGORY: 'Ekran TFT',
        TFT_INIT: 'init TFTscreen PIN# CS%1 DC%2 RST%3',
        TFT_BG: 'Tło ekranu TFT r%1 g%2 b%3',
        TFT_STROKE: 'Kolor obrysu ekranu TFT r%1 g%2 b%3',
        TFT_NOSTROKE: 'Ekran TFT bez kreski',
        TFT_FILL: 'Kolor wypełnienia ekranu TFT r%1 g%2 b%3',
        TFT_NOFILL: 'Kolor wypełnienia ekranu TFT',
        TFT_TEXT: 'Współrzędne tekstu na ekranie TFT%1: X%2 Y%3',
        TFT_TEXT_S: 'TFTscreen setTextSize(1-5)%1',
        TFT_POINT: 'Współrzędne punktu ekranu TFT: X%1 Y%2',
        TFT_LINE: 'Współrzędne linii ekranu TFT: xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_RECT: 'Współrzędne prostokąta TFTscreen: xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_WIDTH: 'piksel szerokości ekranu TFT',
        TFT_HEIGHT: 'piksel wysokości ekranu TFT',
        TFT_CIRCLE: 'Współrzędne okręgu TFTscreen: X%1 Y%2 promień%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        TFT_CATEGORY: 'tela TFT',
        TFT_INIT: 'iniciar TFTscreen PIN# CS%1 DC%2 RST%3',
        TFT_BG: 'Fundo da tela TFT r%1 g%2 b%3',
        TFT_STROKE: 'Cor do traçado da tela TFT r%1 g%2 b%3',
        TFT_NOSTROKE: 'tela TFT sem golpe',
        TFT_FILL: 'Cor de preenchimento da tela TFT r%1 g%2 b%3',
        TFT_NOFILL: 'TFTscreen nofill color',
        TFT_TEXT: 'Texto da tela TFT%1 coordenadas: X%2 Y%3',
        TFT_TEXT_S: 'TFTscreen setTextSize(1-5)%1',
        TFT_POINT: 'Coordenadas do ponto da tela TFT: X%1 Y%2',
        TFT_LINE: 'Coordenadas da linha da tela TFT:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_RECT: 'Coordenadas retas da tela TFT:xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_WIDTH: 'pixel de largura da tela TFT',
        TFT_HEIGHT: 'pixel de altura da tela TFT',
        TFT_CIRCLE: 'Coordenadas do círculo da tela TFT: X%1 Y%2 raio%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        TFT_CATEGORY: 'TFT-экран',
        TFT_INIT: 'инициализация ПИН-кода TFTscreen # CS%1 DC%2 RST%3',
        TFT_BG: 'Фон TFT-экрана r%1 g%2 b%3',
        TFT_STROKE: 'Цвет обводки TFT-экрана r%1 g%2 b%3',
        TFT_NOSTROKE: 'TFT-экран без обводки',
        TFT_FILL: 'Цвет заливки TFT-экрана r%1 g%2 b%3',
        TFT_NOFILL: 'Цвет без заполнения TFT-экрана',
        TFT_TEXT: 'Координаты текста%1 TFT-экрана: X%2 Y%3',
        TFT_TEXT_S: 'TFT-экран setTextSize(1-5)%1',
        TFT_POINT: 'Координаты точки TFT-экрана: X%1 Y%2',
        TFT_LINE: 'Координаты линии TFT-экрана: xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_RECT: 'Координаты прямоугольника TFT-экрана: xStart%1 yStart%2, xEnd%3 yEnd%4',
        TFT_WIDTH: 'Ширина TFT-экрана в пикселях',
        TFT_HEIGHT: 'Высота TFT-экрана в пикселях',
        TFT_CIRCLE: 'Координаты окружности TFT-экрана: X%1 Y%2 радиус%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        TFT_CATEGORY: 'TFT 全彩顯示屏',
        TFT_INIT: '初始化 TFT彩屏 引腳定義 CS%1 DC%2 RST%3',
        TFT_BG: 'TFT屏 背景色 紅%1 綠%2 藍%3',
        TFT_STROKE: 'TFT屏 畫筆顏色 紅%1 綠%2 藍%3',
        TFT_NOSTROKE: 'TFT屏 畫筆沒顏色',
        TFT_FILL: 'TFT屏 填充顏色 紅%1 綠%2 藍%3',
        TFT_NOFILL: 'TFT屏 不填充顏色',
        TFT_TEXT: 'TFT屏 顯示字符%1 坐標:X%2 Y%3',
        TFT_TEXT_S: 'TFT屏 設置字符大小(1-5)%1',
        TFT_POINT: 'TFT屏 畫點 坐標:X%1 Y%2',
        TFT_LINE: 'TFT屏 畫線 坐標:開始X%1 開始Y%2, 結束X%3 結束Y%4',
        TFT_RECT: 'TFT屏 畫矩形 坐標:開始X%1 開始Y%2, 結束X%3 結束Y%4',
        TFT_WIDTH: 'TFT屏 獲取屏幕寬度像素值',
        TFT_HEIGHT: 'TFT屏 獲取屏幕高度像素值',
        TFT_CIRCLE: 'TFT屏 畫圓 坐標:X%1 Y%2 半徑%3',
        TFT_SCREEN_SD: 'TFT屏 顯示SD卡里的圖片',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TFT_CATEGORY: 'TFT 全彩显示屏',
        TFT_INIT: '初始化 TFT彩屏 引脚定义 CS%1 DC%2 RST%3',
        TFT_BG: 'TFT屏 背景色 红%1 绿%2 蓝%3',
        TFT_STROKE: 'TFT屏 画笔颜色 红%1 绿%2 蓝%3',
        TFT_NOSTROKE: 'TFT屏 画笔没颜色',
        TFT_FILL: 'TFT屏 填充颜色 红%1 绿%2 蓝%3',
        TFT_NOFILL: 'TFT屏 不填充颜色',
        TFT_TEXT: 'TFT屏 显示字符%1 坐标:X%2 Y%3',
        TFT_TEXT_S: 'TFT屏 设置字符大小(1-5)%1',
        TFT_POINT: 'TFT屏 画点 坐标:X%1 Y%2',
        TFT_LINE: 'TFT屏 画线 坐标:开始X%1 开始Y%2, 结束X%3 结束Y%4',
        TFT_RECT: 'TFT屏 画矩形 坐标:开始X%1 开始Y%2, 结束X%3 结束Y%4',
        TFT_WIDTH: 'TFT屏 获取屏幕宽度像素值',
        TFT_HEIGHT: 'TFT屏 获取屏幕高度像素值',
        TFT_CIRCLE: 'TFT屏 画圆 坐标:X%1 Y%2 半径%3',
        TFT_SCREEN_SD: 'TFT屏 显示SD卡里的图片',
    });
    return Blockly;
}

exports = addMsg;
