/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TCS34725_CATEGORY: 'Color Sensor',
        TCS34725_INIT: 'Initialize color sensor and read value %1',
        TCS34725_GET_RGB: 'Color sensor get color value %1',
        TCS34725_GET_R: 'Red',
        TCS34725_GET_G: 'Green',
        TCS34725_GET_B: 'Blue'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        TCS34725_CATEGORY: 'Farbsensor',
        TCS34725_INIT: 'Farbsensor initialisieren und Wert %1 lesen',
        TCS34725_GET_RGB: 'Farbsensor Farbwert %1 lesen',
        TCS34725_GET_R: 'Rot',
        TCS34725_GET_G: 'Grün',
        TCS34725_GET_B: 'Blau'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        TCS34725_CATEGORY: 'Sensor de color',
        TCS34725_INIT: 'Inicializar sensor de color y leer valor %1',
        TCS34725_GET_RGB: 'Sensor de color obtener valor %1',
        TCS34725_GET_R: 'Rojo',
        TCS34725_GET_G: 'Verde',
        TCS34725_GET_B: 'Azul'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        TCS34725_CATEGORY: 'Capteur de couleur',
        TCS34725_INIT: 'Initialiser le capteur de couleur et lire la valeur %1',
        TCS34725_GET_RGB: 'Capteur de couleur obtenir la valeur %1',
        TCS34725_GET_R: 'Rouge',
        TCS34725_GET_G: 'Vert',
        TCS34725_GET_B: 'Bleu'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        TCS34725_CATEGORY: 'カラーセンサー',
        TCS34725_INIT: 'カラーセンサーを初期化して値 %1 を読み取る',
        TCS34725_GET_RGB: 'カラーセンサー 色の値 %1 を取得',
        TCS34725_GET_R: '赤',
        TCS34725_GET_G: '緑',
        TCS34725_GET_B: '青'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        TCS34725_CATEGORY: '컬러 센서',
        TCS34725_INIT: '컬러 센서를 초기화하고 값 %1 읽기',
        TCS34725_GET_RGB: '컬러 센서 색상 값 %1 가져오기',
        TCS34725_GET_R: '빨강',
        TCS34725_GET_G: '초록',
        TCS34725_GET_B: '파랑'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        TCS34725_CATEGORY: 'Czujnik koloru',
        TCS34725_INIT: 'Zainicjuj czujnik koloru i odczytaj wartość %1',
        TCS34725_GET_RGB: 'Czujnik koloru pobierz wartość %1',
        TCS34725_GET_R: 'Czerwony',
        TCS34725_GET_G: 'Zielony',
        TCS34725_GET_B: 'Niebieski'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        TCS34725_CATEGORY: 'Sensor de cor',
        TCS34725_INIT: 'Inicializar sensor de cor e ler o valor %1',
        TCS34725_GET_RGB: 'Sensor de cor obter o valor %1',
        TCS34725_GET_R: 'Vermelho',
        TCS34725_GET_G: 'Verde',
        TCS34725_GET_B: 'Azul'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        TCS34725_CATEGORY: 'Датчик цвета',
        TCS34725_INIT: 'Инициализировать датчик цвета и считать значение %1',
        TCS34725_GET_RGB: 'Датчик цвета получить значение %1',
        TCS34725_GET_R: 'Красный',
        TCS34725_GET_G: 'Зелёный',
        TCS34725_GET_B: 'Синий'
    });    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        TCS34725_CATEGORY: 'Sensore di colore',
        TCS34725_INIT: 'Inizializza il sensore di colore e leggi il valore %1',
        TCS34725_GET_RGB: 'Sensore di colore ottieni il valore %1',
        TCS34725_GET_R: 'Rosso',
        TCS34725_GET_G: 'Verde',
        TCS34725_GET_B: 'Blu'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        TCS34725_CATEGORY: '顏色傳感器',
        TCS34725_INIT: '初始化顏色傳感器 並讀取值 %1',
        TCS34725_GET_RGB: '顏色傳感器 取得顏色值 %1',
        TCS34725_GET_R: '紅色',
        TCS34725_GET_G: '綠色',
        TCS34725_GET_B: '藍色'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TCS34725_CATEGORY: '颜色传感器',
        TCS34725_INIT: '初始化颜色传感器 并读取值 %1',
        TCS34725_GET_RGB: '颜色传感器 获取颜色值 %1',
        TCS34725_GET_R: '红色',
        TCS34725_GET_G: '绿色',
        TCS34725_GET_B: '蓝色'
    });
    return Blockly;
}

exports = addMsg;
