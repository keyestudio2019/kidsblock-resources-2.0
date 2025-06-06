/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DHT_CATEGORY: 'Temperature and humidity',
        DHT_init: ' DHT pin %1 mode %2',
        KE_DHT: ' DHT get %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        DHT_CATEGORY: 'Temperatur und Luftfeuchtigkeit',
        DHT_init: ' DHT-Pin %1 Modus %2',
        KE_DHT: ' DHT erhält %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        DHT_CATEGORY: 'Temperatura y humedad',
        DHT_init: ' pin DHT %1 modo %2',
        KE_DHT: 'DHT obtener %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        DHT_CATEGORY: 'Température et humidité',
        DHT_init: 'Broche DHT %1 mode %2',
        KE_DHT: ' DHT obtient %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        DHT_CATEGORY: '温度と湿度',
        DHT_init: ' DHT ピン %1 モード %2',
        KE_DHT: ' DHT は %1 を取得',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        DHT_CATEGORY: '온도 및 습도',
        DHT_init: ' DHT 핀 %1 모드 %2',
        KE_DHT: 'DHT는 %1을 얻음',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        DHT_CATEGORY: 'Temperatura i wilgotność',
        DHT_init: 'DHT pin %1 tryb %2',
        KE_DHT: ' DHT pobiera %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        DHT_CATEGORY: 'Temperatura e umidade',
        DHT_init: 'pino DHT %1 modo %2',
        KE_DHT: 'DHT obteve %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        DHT_CATEGORY: 'Температура и влажность',
        DHT_init: 'DHT контакт %1 режим %2',
        KE_DHT: 'DHT получить %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        DHT_CATEGORY: '溫濕度傳感器',
        DHT_init: '溫濕度引腳 %1 型號 %2',
        KE_DHT: '溫濕度獲取 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DHT_CATEGORY: '温湿度传感器',
        DHT_init: '温湿度引脚 %1 型号 %2',
        KE_DHT: '温湿度获取 %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        DHT_CATEGORY: 'Temperatura e umidità',
        DHT_init: 'inizializza DHT pin %1 modalità %2',
        KE_DHT: 'DHT ottieni %1'
    });
    return Blockly;
}

exports = addMsg;
