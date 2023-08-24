/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        IRSEND_CATEGORY: 'IR Send',
        IR_SEND: 'IRsend %1 PIN#%2 data%3 bits%4',
        IR_SEND_RAW: 'IRsend(RAW) PIN#%1 Array%2 listLength%3 frequency%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        IRSEND_CATEGORY: 'IR-Senden',
        IR_SEND: 'IRsend %1 PIN#%2 Daten%3 Bits%4',
        IR_SEND_RAW: 'IRsend(RAW) PIN#%1 Array%2 listLength%3 Häufigkeit%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        IRSEND_CATEGORY: 'Envío IR',
        IR_SEND: 'Enviar IR %1 PIN#%2 datos%3 bits%4',
        IR_SEND_RAW: 'IRsend(RAW) PIN#%1 Array%2 listLength%3 frecuencia%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        IRSEND_CATEGORY: "Envoi IR",
        IR_SEND: 'IRenvoi %1 PIN#%2 données%3 bits%4',
        IR_SEND_RAW: 'IRsend(RAW) PIN#%1 Array%2 listLength%3 frequency%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        IRSEND_CATEGORY: 'IR 送信',
        IR_SEND: 'IRsend %1 PIN#%2 データ%3 ビット%4',
        IR_SEND_RAW: 'IRsend(RAW) PIN#%1 配列%2 リスト長%3 周波数%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        IRSEND_CATEGORY: 'IR 보내기',
        IR_SEND: 'IRsend %1 PIN#%2 데이터%3 비트%4',
        IR_SEND_RAW: 'IRsend(RAW) PIN#%1 배열%2 listLength%3 빈도%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        IRSEND_CATEGORY: 'Wysyłanie w podczerwieni',
        IR_SEND: 'IRwyślij %1 PIN#%2 dane%3 bity%4',
        IR_SEND_RAW: 'IRsend(RAW) PIN#%1 Tablica%2 listaDługość%3 częstotliwość%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        IRSEND_CATEGORY: 'Envio IR',
        IR_SEND: 'IRenviar %1 PIN#%2 dados%3 bits%4',
        IR_SEND_RAW: 'IRsend(RAW) PIN#%1 Array%2 listLength%3 frequency%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        IRSEND_CATEGORY: 'Отправка IR',
        IR_SEND: 'IRsend %1 PIN#%2 data%3 бит%4',
        IR_SEND_RAW: 'IRsend(RAW) PIN#%1 Массив%2 длина списка%3 частота%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        IRSEND_CATEGORY: '紅外發射',
        IR_SEND: '紅外發射%1引腳%2 數值%3 比特數%4',
        IR_SEND_RAW: '紅外發射(RAW)引腳%1 數組%2 數組長度%3 頻率%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        IRSEND_CATEGORY: '红外发射',
        IR_SEND: '红外发射%1引脚%2 数值%3 比特数%4',
        IR_SEND_RAW: '红外发射(RAW)引脚%1 数组%2 数组长度%3 频率%4',
    });
    return Blockly;
}

exports = addMsg;
