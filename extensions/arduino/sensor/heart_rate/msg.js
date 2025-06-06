/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        HEARTRATE_CATEGORY: 'HeartRate sensor',
        HEARTRATE_INIT: 'init heartRate sensor',
        HEARTRATE_SET: 'Set heartRate',
        HEARTRATE_READ: 'heartRate sensor read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        HEARTRATE_CATEGORY: 'Herzfrequenzsensor', 
        HEARTRATE_INIT: 'Herzfrequenzsensor initialisieren', 
        HEARTRATE_SET: 'Herzfrequenz einstellen', 
        HEARTRATE_READ: 'Herzfrequenzsensor %1 gelesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        HEARTRATE_CATEGORY: 'Sensor de frecuencia cardíaca', 
        HEARTRATE_INIT: 'iniciar sensor de frecuencia cardíaca', 
        HEARTRATE_SET: 'Establecer frecuencia cardíaca', 
        HEARTRATE_READ: 'Lectura del sensor de frecuencia cardíaca %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        HEARTRATE_CATEGORY: 'Capteur de fréquence cardiaque', 
        HEARTRATE_INIT: 'initialisation du capteur de fréquence cardiaque', 
        HEARTRATE_SET: 'Définir la fréquence cardiaque', 
        HEARTRATE_READ: 'Le capteur de fréquence cardiaque lit %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        HEARTRATE_CATEGORY: '心拍数センサー',
        HEARTRATE_INIT: '心拍数センサーを初期化',
        HEARTRATE_SET: '心拍数を設定',
        HEARTRATE_READ: '心拍数センサー読み取り %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        HEARTRATE_CATEGORY: '심박수 센서', 
        HEARTRATE_INIT: '심박수 센서 초기화', 
        HEARTRATE_SET: '심박수 설정', 
        HEARTRATE_READ: '심박수 센서 읽기 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        HARTRATE_CATEGORY: 'Czujnik tętna', 
        HARTRATE_INIT: 'początkowy czujnik tętna', 
        HARTRATE_SET: 'Ustaw tętno', 
        HARTRATE_READ: 'odczyt czujnika tętna %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        HEARTRATE_CATEGORY: 'Sensor de frequência cardíaca', 
        HEARTRATE_INIT: 'iniciar sensor de frequência cardíaca', 
        HEARTRATE_SET: 'Definir frequência cardíaca', 
        HEARTRATE_READ: 'sensor de frequência cardíaca lido %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        HEARTRATE_CATEGORY: 'датчик сердечного ритма', 
        HEARTRATE_INIT: 'инициировать датчик сердечного ритма', 
        HEARTRATE_SET: 'установить частоту сердечных сокращений',
        HEARTRATE_READ: 'датчик сердечного ритма прочитал %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        HEARTRATE_CATEGORY: '心率傳感器',
        HEARTRATE_INIT: '初始化 心率傳感器',
        HEARTRATE_SET: '設置 心率傳感器',
        HEARTRATE_READ: '讀取心率傳感器的值 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        HEARTRATE_CATEGORY: '心率传感器',
        HEARTRATE_INIT: '初始化 心率传感器',
        HEARTRATE_SET: '设置 心率传感器',
        HEARTRATE_READ: '读取心率传感器的值 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        HEARTRATE_CATEGORY: 'Sensore del battito cardiaco',
        HEARTRATE_INIT: 'inizializza sensore del battito cardiaco',
        HEARTRATE_SET: 'Imposta battito cardiaco',
        HEARTRATE_READ: 'leggi sensore battito cardiaco %1'
    });
    return Blockly;
}

exports = addMsg;
