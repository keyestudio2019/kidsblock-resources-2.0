/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: 'init MPU6050',
        MPU6050_REFRESH: 'MPU6050 refresh data',
        MPU6050: 'MPU605 read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: 'MPU6050 initialisieren',
        MPU6050_REFRESH: 'MPU6050 Daten aktualisieren',
        MPU6050: 'MPU605 hat %1 gelesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        MPU6050_CATEGORÍA: 'MPU6050',
        MPU6050_INIT: 'iniciar MPU6050',
        MPU6050_REFRESH: 'MPU6050 actualizar datos',
        MPU6050: 'MPU605 lectura %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: 'init MPU6050',
        MPU6050_REFRESH: 'MPU6050 actualiser les données',
        MPU6050: 'MPU605 a lu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: 'MPU6050 の初期化',
        MPU6050_REFRESH: 'MPU6050リフレッシュデータ',
        MPU6050: 'MPU605 は %1 を読み取りました'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: '초기화 MPU6050',
        MPU6050_REFRESH: 'MPU6050 리프레시 데이터',
        MPU6050: 'MPU605 읽기 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: 'zainicjuj MPU6050',
        MPU6050_REFRESH: 'Odśwież dane MPU6050',
        MPU6050: 'MPU605 odczytał %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: 'iniciar MPU6050',
        MPU6050_REFRESH: 'Dados de atualização do MPU6050',
        MPU6050: 'MPU605 leu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: 'инициализировать MPU6050',
        MPU6050_REFRESH: 'обновить данные MPU6050',
        MPU6050: 'MPU605 прочитал %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: '初始化 MPU6050',
        MPU6050_REFRESH: 'MPU6050 刷新數據',
        MPU6050_READ: '讀取MPU6050 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: '初始化 MPU6050',
        MPU6050_REFRESH: 'MPU6050 刷新数据',
        MPU6050_READ: '读取MPU6050 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        MPU6050_CATEGORY: 'MPU6050',  
        MPU6050_INIT: 'inizializza MPU6050',  
        MPU6050_REFRESH: 'MPU6050 aggiorna dati',  
        MPU6050: 'MPU605 leggi %1',
    });
    return Blockly;
}

exports = addMsg;
