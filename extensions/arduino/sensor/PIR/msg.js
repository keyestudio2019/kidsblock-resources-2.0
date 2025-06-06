/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        PIR_CATEGORY: 'pir',
        PIR_READ_VALUE: 'read interface %1 thermotherelectric infrared motion sensor'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        PIR_CATEGORY: 'pir',
        PIR_READ_VALUE: 'Schnittstelle %1 thermoelektrischen Infrarot-Bewegungssensor lesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        PIR_CATEGORY: 'pir',
        PIR_READ_VALUE: 'interfaz de lectura %1 sensor de movimiento infrarrojo termoeléctrico'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        PIR_CATEGORY: 'pir',
        PIR_READ_VALUE: 'lecture de l"interface %1 capteur de mouvement thermoélectrique infrarouge'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        PIR_CATEGORY: 'pir',
        PIR_READ_VALUE: 'インターフェイス %1 熱電赤外線モーション センサーを読み取り'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        PIR_CATEGORY: '피르',
        PIR_READ_VALUE: '인터페이스 %1 열전기 적외선 모션 센서 읽기'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        PIR_CATEGORY: 'pir',
        PIR_READ_VALUE: 'odczyt interfejsu %1 termotermoelektryczny czujnik ruchu na podczerwień'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        PIR_CATEGORY: 'pir',
        PIR_READ_VALUE: 'ler interface %1 sensor de movimento infravermelho termoelétrico'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        PIR_CATEGORY: 'пир',
        PIR_READ_VALUE: 'чтение интерфейса %1 термотермоэлектрического инфракрасного датчика движения'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        PIR_CATEGORY: '紅外運動傳感器',
        PIR_READ_VALUE: '讀取接口 %1 熱釋電紅外運動傳感器'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        PIR_CATEGORY: '红外运动传感器',
        PIR_READ_VALUE: '读取接口 %1 热释电红外运动传感器'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        PIR_CATEGORY: 'pir',  
        PIR_READ_VALUE: 'leggi interfaccia %1 sensore di movimento ad infrarossi termoelettrici'
    });
    return Blockly;
}

exports = addMsg;
