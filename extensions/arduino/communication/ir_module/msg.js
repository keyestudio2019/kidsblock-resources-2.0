/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        IR_CATEGORY: 'IR Remote',
        IR_INIT: 'IR remote init PIN#%1',
        IR_DATA: 'Received data',
        IR_READ: 'Read the data',
        IR_REFRESH: 'Refresh data',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        IR_CATEGORY: 'IR-Fernbedienung',
        IR_INIT: 'IR-Ferninitialisierungs-PIN#%1',
        IR_DATA: 'Empfangene Daten',
        IR_READ: 'Daten lesen',
        IR_REFRESH: 'Daten aktualisieren',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        IR_CATEGORY: 'Remoto IR',
        IR_INIT: 'PIN de inicio remoto IR#%1',
        IR_DATA: 'Datos recibidos',
        IR_READ: 'Leer los datos',
        IR_REFRESH: 'Actualizar datos',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        IR_CATEGORY: 'Télécommande infrarouge',
        IR_INIT: 'PIN d"initialisation à distance IR#%1',
        IR_DATA: 'Données reçues',
        IR_READ: 'Lire les données',
        IR_REFRESH: 'Actualiser les données',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        IR_CATEGORY: 'IR リモコン',
        IR_INIT: 'IR リモート初期化 PIN#%1',
        IR_DATA: '受信データ',
        IR_READ: 'データを読み取る',
        IR_REFRESH: 'データを更新',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        IR_CATEGORY: 'IR 리모트',
        IR_INIT: 'IR 원격 초기화 PIN#%1',
        IR_DATA: '데이터 수신',
        IR_READ: '데이터 읽기',
        IR_REFRESH: '데이터 새로 고침',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        IR_CATEGORY: 'Pilot na podczerwień',
        IR_INIT: 'PIN zdalnej inicjalizacji IR#%1',
        IR_DATA: 'Otrzymane dane',
        IR_READ: 'Odczytaj dane',
        IR_REFRESH: 'Odśwież dane',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        IR_CATEGORY: 'IR Remoto',
        IR_INIT: 'PIN de inicialização remota IV#%1',
        IR_DATA: 'Dados recebidos',
        IR_READ: 'Ler os dados',
        IR_REFRESH: 'Atualizar dados',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        IR_CATEGORY: 'ИК-пульт',
        IR_INIT: 'ПИН-код инициализации ИК-пульта #%1',
        IR_DATA: 'Полученные данные',
        IR_READ: 'Прочитать данные',
        IR_REFRESH: 'Обновить данные',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        IR_CATEGORY: '紅外接收',
        IR_INIT: '初始化紅外接收 引腳%1',
        IR_DATA: '接收到紅外遙控的數據',
        IR_READ: '讀取紅外接收數據',
        IR_REFRESH: '刷新紅外接收數據',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        IR_CATEGORY: '红外接收',
        IR_INIT: '初始化红外接收 引脚%1',
        IR_DATA: '接收到红外遥控的数据',
        IR_READ: '读取红外接收数据',
        IR_REFRESH: '刷新红外接收数据',
    });
    return Blockly;
}

exports = addMsg;
