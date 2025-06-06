/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        HC_SR04_CATEGORY: 'Ultrasonic',
        HC_SR04_READ_DISTANCE: 'HC-SR04 trig pin %1 echo pin %2 read distance %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        HC_SR04_CATEGORY: 'Ultraschall',
        HC_SR04_READ_DISTANCE: 'HC-SR04 Trig-Pin %1 Echo-Pin %2 Leseabstand %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        HC_SR04_CATEGORY: 'Ultrasónico',
        HC_SR04_READ_DISTANCE: 'PIN de activación HC-SR04 %1 pin de eco %2 distancia de lectura %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        HC_SR04_CATEGORY: 'Ultrasons',
        HC_SR04_READ_DISTANCE: 'broche de déclenchement HC-SR04 %1 broche d"écho %2 distance de lecture %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        HC_SR04_CATEGORY: '超音波',
        HC_SR04_READ_DISTANCE: 'HC-SR04 トリガー ピン %1 エコー ピン %2 読み取り距離 %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        HC_SR04_CATEGORY: '초음파',
        HC_SR04_READ_DISTANCE: 'HC-SR04 삼각 핀 %1 에코 핀 %2 읽기 거리 %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        HC_SR04_CATEGORY: 'Ultradźwięki',
        HC_SR04_READ_DISTANCE: 'Pin wyzwalający HC-SR04 %1 Pin echa %2 Odległość odczytu %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        HC_SR04_CATEGORY: 'Ultrassônico',
        HC_SR04_READ_DISTANCE: 'HC-SR04 pino trig %1 pino de eco %2 distância de leitura %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        HC_SR04_CATEGORY: 'Ультразвук',
        HC_SR04_READ_DISTANCE: 'HC-SR04 триггерный контакт %1 эхо-контакт %2 расстояние чтения %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        HC_SR04_CATEGORY: '超聲波傳感器',
        HC_SR04_READ_DISTANCE: '超聲波傳感器 trig 引腳 %1 echo 引腳 %2 讀取距離 %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        HC_SR04_CATEGORY: '超声波传感器',
        HC_SR04_READ_DISTANCE: '超声波传感器 trig 引脚 %1 echo 引脚 %2 读取距离 %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        HC_SR04_CATEGORY: 'Ultrasuoni',
        HC_SR04_READ_DISTANCE: 'HC-SR04 pin trig %1 pin echo %2 leggi distanza %3'
    });
    return Blockly;
}

exports = addMsg;
