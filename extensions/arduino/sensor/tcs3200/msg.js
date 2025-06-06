/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: 'init tcs3200 pin S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: 'The out pin is fixed: Arduino Uno pin 5, Arduino Leonardo pin 12, Arduino Mega pin 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 calibrate white',
        TCS3200_CALIBRATEBLACK: 'tcs3200 calibrate black',
        TCS3200_MEASURECOLOR: 'tcs3200 measure color',
        TCS3200_GETCOLORVALUE: 'tcs3200 get %1 value',
        TCS3200_COLOR_RED: 'red',
        TCS3200_COLOR_GREEN: 'green',
        TCS3200_COLOR_BLUE: 'blue'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: 'init tcs3200 pin S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: 'Der Ausgangspin ist festgelegt: Arduino Uno Pin 5, Arduino Leonardo Pin 12, Arduino Mega Pin 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 Weiß kalibrieren',
        TCS3200_CALIBRATEBLACK: 'tcs3200 Schwarz kalibrieren',
        TCS3200_MEASURECOLOR: 'tcs3200 misst Farbe',
        TCS3200_GETCOLORVALUE: 'tcs3200 erhält %1 Wert',
        TCS3200_COLOR_RED: 'rot',
        TCS3200_COLOR_GREEN: 'grün',
        TCS3200_COLOR_BLUE: 'blau'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: 'iniciar pin tcs3200 S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: 'El pin de salida está fijo: Arduino Uno pin 5, Arduino Leonardo pin 12, Arduino Mega pin 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 calibrar blanco',
        TCS3200_CALIBRATEBLACK: 'tcs3200 calibrar negro',
        TCS3200_MEASURECOLOR: 'tcs3200 mide color',
        TCS3200_GETCOLORVALUE: 'tcs3200 obtiene %1 valor',
        TCS3200_COLOR_RED: 'rojo',
        TCS3200_COLOR_GREEN: 'verde',
        TCS3200_COLOR_BLUE: 'azul'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: 'initialisation de la broche tcs3200 S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP:'La broche de sortie est fixe: broche Arduino Uno 5, broche Arduino Leonardo 12, broche Arduino Mega 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 calibrer le blanc',
        TCS3200_CALIBRATEBLACK: 'tcs3200 calibrer le noir',
        TCS3200_MEASURECOLOR: 'tcs3200 mesure la couleur',
        TCS3200_GETCOLORVALUE: 'tcs3200 obtient %1 valeur',
        TCS3200_COLOR_RED: 'rouge',
        TCS3200_COLOR_GREEN: 'vert',
        TCS3200_COLOR_BLUE: 'bleu'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: 'init tcs3200 ピン S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: '出力ピンは固定されています: Arduino Uno ピン 5、Arduino Leonardo ピン 12、Arduino Mega ピン 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 キャリブレーションホワイト',
        TCS3200_CALIBRATEBLACK: 'tcs3200 キャリブレーション ブラック',
        TCS3200_MEASURECOLOR: 'tcs3200 測定色',
        TCS3200_GETCOLORVALUE: 'tcs3200 %1 値を取得',
        TCS3200_COLOR_RED: '赤',
        TCS3200_COLOR_GREEN: '緑',
        TCS3200_COLOR_BLUE: '青'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: 'tcs3200 핀 초기화 S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: '아웃 핀이 고정되어 있습니다: Arduino Uno 핀 5, Arduino Leonardo 핀 12, Arduino Mega 핀 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 흰색 보정',
        TCS3200_CALIBRATEBLACK: 'tcs3200 검정색 보정',
        TCS3200_MEASURECOLOR: 'tcs3200 측정 색상',
        TCS3200_GETCOLORVALUE: 'tcs3200은 %1 값을 얻습니다',
        TCS3200_COLOR_RED: '빨간색',
        TCS3200_COLOR_GREEN: '녹색',
        TCS3200_COLOR_BLUE: '파란색'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: 'init tcs3200 pin S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: 'Pin wyjściowy jest naprawiony: Arduino Uno pin 5, Arduino Leonardo pin 12, Arduino Mega pin 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 kalibruj biel',
        TCS3200_CALIBRATEBLACK: 'tcs3200 kalibruj kolor czarny',
        TCS3200_MEASURECOLOR: 'tcs3200 mierzy kolor',
        TCS3200_GETCOLORVALUE: 'tcs3200 pobiera %1 wartości',
        TCS3200_COLOR_RED: 'czerwony',
        TCS3200_COLOR_GREEN: 'zielony',
        TCS3200_COLOR_BLUE: 'niebieski'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: 'inicializar tcs3200 pino S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: 'O pino de saída é fixo: Arduino Uno pino 5, Arduino Leonardo pino 12, Arduino Mega pino 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 calibra branco',
        TCS3200_CALIBRATEBLACK: 'tcs3200 calibra preto',
        TCS3200_MEASURECOLOR: 'tcs3200 mede cor',
        TCS3200_GETCOLORVALUE: 'tcs3200 obtém %1 valor',
        TCS3200_COLOR_RED: 'vermelho',
        TCS3200_COLOR_GREEN: 'verde',
        TCS3200_COLOR_BLUE: 'azul'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: 'инициировать tcs3200 контакт S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: 'Выходной контакт фиксирован: Arduino Uno, контакт 5, Arduino Leonardo, контакт 12, Arduino Mega, контакт 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 калибровать белый',
        TCS3200_CALIBRATEBLACK: 'tcs3200 откалибровать черный',
        TCS3200_MEASURECOLOR: 'tcs3200 измеряет цвет',
        TCS3200_GETCOLORVALUE: 'tcs3200 получает значение%1',
        TCS3200_COLOR_RED: 'красный',
        TCS3200_COLOR_GREEN: 'зеленый',
        TCS3200_COLOR_BLUE: 'синий'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: '初始化 tcs3200 引腳 S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: 'OUT 引腳是固定的: Arduino Uno 引腳 5, Arduino Leonardo 引腳 12, Arduino Mega 引腳 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 校準白色',
        TCS3200_CALIBRATEBLACK: 'tcs3200 校準黑色',
        TCS3200_MEASURECOLOR: 'tcs3200 測量顏色',
        TCS3200_GETCOLORVALUE: 'tcs3200 獲取 %1 數值',
        TCS3200_COLOR_RED: '紅色',
        TCS3200_COLOR_GREEN: '綠色',
        TCS3200_COLOR_BLUE: '藍色'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: '初始化 tcs3200 引脚 S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: 'OUT 引脚是固定的: Arduino Uno 引脚 5, Arduino Leonardo 引脚 12, Arduino Mega 引脚 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 校准白色',
        TCS3200_CALIBRATEBLACK: 'tcs3200 校准黑色',
        TCS3200_MEASURECOLOR: 'tcs3200 测量颜色',
        TCS3200_GETCOLORVALUE: 'tcs3200 获取 %1 数值',
        TCS3200_COLOR_RED: '红色',
        TCS3200_COLOR_GREEN: '绿色',
        TCS3200_COLOR_BLUE: '蓝色'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        TCS3200_CATEGORY: 'TCS3200',  
        TCS3200_INIT: 'inizializza tcs3200 pin S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',  
        TCS3200_INIT_TOOLTIP: 'Il pin di uscita è fisso: pin 5 di Arduino Uno, pin 12 di Arduino Leonardo, pin 47 di Arduino Mega',  
        TCS3200_CALIBRATEWHITE: 'tcs3200 calibra bianco',  
        TCS3200_CALIBRATEBLACK: 'tcs3200 calibra nero',  
        TCS3200_MEASURECOLOR: 'tcs3200 misura colore',  
        TCS3200_GETCOLORVALUE: 'tcs3200 ottieni valore %1',  
        TCS3200_COLOR_RED: 'rosso',  
        TCS3200_COLOR_GREEN: 'verde',  
        TCS3200_COLOR_BLUE: 'blu'
    });
    return Blockly;
}

exports = addMsg;
