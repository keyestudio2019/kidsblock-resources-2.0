/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: 'init nrf24l01 pin CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 send number %1 to id %2',
        NRF24L01_SENDSTRING: 'nrf24l01 send string %1 to id %2',
        NRF24L01_SENDVALUE: 'nrf24l01 send value %1 = %2 to id %3',
        NRF24L01_HASDATA: 'nrf24l01 received data?',
        NRF24L01_READDATA: 'nrf24l01 read data',
        NRF24L01_PARSENUMBER: 'nrf24l01 parse number',
        NRF24L01_PARSESTRING: 'nrf24l01 parse string',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 value %1 available?',
        NRF24L01_PARSEVALUE: 'nrf24l01 parse value %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: 'init nrf24l01 pin CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 sendet Nummer %1 an ID %2',
        NRF24L01_SENDSTRING: 'nrf24l01 sendet String %1 an ID %2',
        NRF24L01_SENDVALUE: 'nrf24l01 sendet Wert %1 = %2 an ID %3',
        NRF24L01_HASDATA: 'nrf24l01 Daten empfangen?',
        NRF24L01_READDATA: 'nrf24l01 Daten lesen',
        NRF24L01_PARSENUMBER: 'nrf24l01 Parse-Nummer',
        NRF24L01_PARSESTRING: 'nrf24l01 Parse-String',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01-Wert %1 verfügbar?',
        NRF24L01_PARSEVALUE: 'nrf24l01 Parse-Wert %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        NRF24L01_CATEGORÍA: 'NRF24l01',
        NRF24L01_INIT: 'iniciar pin nrf24l01 CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 enviar número %1 a id %2',
        NRF24L01_SENDSTRING: 'nrf24l01 envía cadena %1 a id %2',
        NRF24L01_SENDVALUE: 'nrf24l01 enviar valor %1 = %2 a id %3',
        NRF24L01_HASDATA: '¿nrf24l01 recibió datos?',
        NRF24L01_READDATA: 'nrf24l01 leer datos',
        NRF24L01_PARSENUMBER: 'nrf24l01 número de análisis',
        NRF24L01_PARSESTRING: 'nrf24l01 cadena de análisis',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 valor %1 disponible?',
        NRF24L01_PARSEVALUE: 'valor de análisis nrf24l01 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: 'init nrf24l01 broche CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 envoie le numéro %1 à l"identifiant %2',
        NRF24L01_SENDSTRING: 'nrf24l01 envoie la chaîne %1 à l"identifiant %2',
        NRF24L01_SENDVALUE: 'nrf24l01 envoie la valeur %1 = %2 à l"identifiant %3',
        NRF24L01_HASDATA: 'nrf24l01 a reçu des données?',
        NRF24L01_READDATA: 'nrf24l01 lire les données',
        NRF24L01_PARSENUMBER: 'numéro d"analyse nrf24l01',
        NRF24L01_PARSESTRING: 'chaîne d"analyse nrf24l01',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 valeur %1 disponible?',
        NRF24L01_PARSEVALUE: 'valeur d"analyse nrf24l01 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: 'nrf24l01 ピン CE %1 CSN %2 ID %3 を初期化',
        NRF24L01_SENDNUMBER: 'nrf24l01 番号 %1 を ID %2 に送信',
        NRF24L01_SENDSTRING: 'nrf24l01 文字列 %1 を ID %2 に送信',
        NRF24L01_SENDVALUE: 'nrf24l01 値 %1 = %2 を ID %3 に送信',
        NRF24L01_HASDATA: 'nrf24l01はデータを受信しましたか?',
        NRF24L01_READDATA: 'nrf24l01 読み取りデータ',
        NRF24L01_PARSENUMBER: 'nrf24l01 解析番号',
        NRF24L01_PARSESTRING: 'nrf24l01 解析文字列',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 値 %1 は利用可能ですか?',
        NRF24L01_PARSEVALUE: 'nrf24l01 解析値 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: 'init nrf24l01 핀 CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01은 ID %2에 %1 번호를 보냅니다.',
        NRF24L01_SENDSTRING: 'nrf24l01은 문자열 %1을(를) ID %2로 보냅니다.',
        NRF24L01_SENDVALUE: 'nrf24l01 보내기 값 %1 = %2를 id %3으로',
        NRF24L01_HASDATA: 'nrf24l01이(가) 데이터를 수신했습니까?',
        NRF24L01_READDATA: 'nrf24l01 읽기 데이터',
        NRF24L01_PARSENUMBER: 'nrf24l01 구문 분석 번호',
        NRF24L01_PARSESTRING: 'nrf24l01 구문 분석 문자열',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 값 %1 사용 가능?',
        NRF24L01_PARSEVALUE: 'nrf24l01 구문 분석 값 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: 'init nrf24l01 pin CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 wyślij numer %1 na id %2',
        NRF24L01_SENDSTRING: 'nrf24l01 wyślij łańcuch %1 do identyfikatora %2',
        NRF24L01_SENDVALUE: 'nrf24l01 wyślij wartość %1 = %2 do identyfikatora %3',
        NRF24L01_HASDATA: 'nrf24l01 otrzymał dane?',
        NRF24L01_READDATA: 'nrf24l01 odczyt danych',
        NRF24L01_PARSENUMBER: 'numer parsowania nrf24l01',
        NRF24L01_PARSESTRING: 'ciąg parsowania nrf24l01',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 wartość %1 jest dostępna?',
        NRF24L01_PARSEVALUE: 'wartość parsowania nrf24l01 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: 'inicializar nrf24l01 pino CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 enviar número %1 para id %2',
        NRF24L01_SENDSTRING: 'nrf24l01 envia string %1 para id %2',
        NRF24L01_SENDVALUE: 'nrf24l01 envia valor %1 = %2 para id %3',
        NRF24L01_HASDATA: 'nrf24l01 recebeu dados?',
        NRF24L01_READDATA: 'nrf24l01 ler dados',
        NRF24L01_PARSENUMBER: 'número de análise nrf24l01',
        NRF24L01_PARSESTRING: 'string de análise nrf24l01',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 valor %1 disponível?',
        NRF24L01_PARSEVALUE: 'nrf24l01 valor de análise %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: 'инициировать nrf24l01 pin CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 отправляет номер %1 на идентификатор %2',
        NRF24L01_SENDSTRING: 'nrf24l01 отправляет строку %1 на идентификатор %2',
        NRF24L01_SENDVALUE: 'nrf24l01 отправляет значение %1 = %2 на идентификатор %3',
        NRF24L01_HASDATA: 'nrf24l01 получил данные?',
        NRF24L01_READDATA: 'nrf24l01 читать данные',
        NRF24L01_PARSENUMBER: 'номер разбора nrf24l01',
        NRF24L01_PARSESTRING: 'строка разбора nrf24l01',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 значение %1 доступно?',
        NRF24L01_PARSEVALUE: 'значение анализа nrf24l01 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: '初始化 nrf24l01 引腳 CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 發送數字 %1 到 id %2',
        NRF24L01_SENDSTRING: 'nrf24l01 發送字符串 %1 到 id %2',
        NRF24L01_SENDVALUE: 'nrf24l01 發送數值 %1 = %2 到 id %3',
        NRF24L01_HASDATA: 'nrf24l01 接收到數據？ ',
        NRF24L01_READDATA: 'nrf24l01 讀取數據',
        NRF24L01_PARSENUMBER: 'nrf24l01 解析數字',
        NRF24L01_PARSESTRING: 'nrf24l01 解析字符串',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 數值 %1 可用？ ',
        NRF24L01_PARSEVALUE: 'nrf24l01 解析數值 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: '初始化 nrf24l01 引脚 CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 发送数字 %1 到 id %2',
        NRF24L01_SENDSTRING: 'nrf24l01 发送字符串 %1 到 id %2',
        NRF24L01_SENDVALUE: 'nrf24l01 发送数值 %1 = %2 到 id %3',
        NRF24L01_HASDATA: 'nrf24l01 接收到数据？',
        NRF24L01_READDATA: 'nrf24l01 读取数据',
        NRF24L01_PARSENUMBER: 'nrf24l01 解析数字',
        NRF24L01_PARSESTRING: 'nrf24l01 解析字符串',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 数值 %1 可用？',
        NRF24L01_PARSEVALUE: 'nrf24l01 解析数值 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: 'Inizializza nrf24l01 Pin CE %1 CSN %2 ID %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 Invia numero %1 a ID %2',
        NRF24L01_SENDSTRING: 'nrf24l01 Invia stringa %1 a ID %2',
        NRF24L01_SENDVALUE: 'nrf24l01 Invia valore %1 = %2 a ID %3',
        NRF24L01_HASDATA: 'nrf24l01 Ricevuti dati?',
        NRF24L01_READDATA: 'nrf24l01 Leggi dati',
        NRF24L01_PARSENUMBER: 'nrf24l01 Analizza numero',
        NRF24L01_PARSESTRING: 'nrf24l01 Analizza stringa',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 Valore %1 disponibile?',
        NRF24L01_PARSEVALUE: 'nrf24l01 Analizza valore %1',        
    });
    return Blockly;
}

exports = addMsg;
