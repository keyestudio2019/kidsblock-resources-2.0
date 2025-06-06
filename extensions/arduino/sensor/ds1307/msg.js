/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DS1307_CATEGORY: 'Clock',
        DS1307_INIT: 'init DS1307',
        DS1307_SET_SYS_TIME: 'Set to the current system time',
        DS1307_SET_TIME: 'Set time year%1 month%2 date%3 hour%4 minute%5 second%6',
        DS1307_SET_NOW: 'Sets the current time object',
        DS1307_READ: 'DS1307 read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        DS1307_CATEGORY: 'Uhr',
        DS1307_INIT: 'init DS1307',
        DS1307_SET_SYS_TIME: 'Auf die aktuelle Systemzeit setzen',
        DS1307_SET_TIME: 'Stellen Sie die Zeit Jahr%1 Monat%2 Datum%3 Stunde%4 Minute%5 Sekunde%6 ein',
        DS1307_SET_NOW: 'Setzt das aktuelle Zeitobjekt',
        DS1307_READ: 'DS1307 hat %1 gelesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        DS1307_CATEGORY: 'Reloj',
        DS1307_INIT: 'iniciar DS1307',
        DS1307_SET_SYS_TIME: 'Establecer la hora actual del sistema',
        DS1307_SET_TIME: 'Establecer hora año%1 mes%2 fecha%3 hora%4 minuto%5 segundo%6',
        DS1307_SET_NOW: 'Establece el objeto de tiempo actual',
        DS1307_READ: 'DS1307 leído %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        DS1307_CATEGORY:'Horloge',
        DS1307_INIT: 'initialisation DS1307',
        DS1307_SET_SYS_TIME: 'Défini sur l"heure système actuelle',
        DS1307_SET_TIME: 'Définir l"heure année%1 mois%2 date%3 heure%4 minute%5 seconde%6',
        DS1307_SET_NOW: 'Définit l"objet horaire actuel',
        DS1307_READ: 'DS1307 lit %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        DS1307_CATEGORY: '時計',
        DS1307_INIT: 'DS1307 を初期化',
        DS1307_SET_SYS_TIME: '現在のシステム時刻に設定します',
        DS1307_SET_TIME: '時刻を設定します 年%1 月%2 日付%3 時間%4 分%5 秒%6',
        DS1307_SET_NOW: '現在の時刻オブジェクトを設定します',
        DS1307_READ: 'DS1307 読み取り %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        DS1307_CATEGORY: '시계',
        DS1307_INIT: 'DS1307 초기화',
        DS1307_SET_SYS_TIME: '현재 시스템 시간으로 설정',
        DS1307_SET_TIME: '시간 설정 연%1 월%2 날짜%3 시%4 분%5 초%6',
        DS1307_SET_NOW: '현재 시간 개체를 설정합니다',
        DS1307_READ: 'DS1307이 %1을(를) 읽었습니다.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        DS1307_CATEGORY: 'Zegar',
        DS1307_INIT: 'inicjacja DS1307',
        DS1307_SET_SYS_TIME: 'Ustaw aktualny czas systemowy',
        DS1307_SET_TIME: 'Ustaw czas rok%1 miesiąc%2 data%3 godziny%4 minuty%5 sekundy%6',
        DS1307_SET_NOW: 'Ustawia aktualny obiekt czasowy',
        DS1307_READ: 'DS1307 odczytał %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        DS1307_CATEGORY: 'Relógio',
        DS1307_INIT: 'inicializar DS1307',
        DS1307_SET_SYS_TIME: 'Definir para a hora atual do sistema',
        DS1307_SET_TIME: 'Definir hora ano%1 mês%2 data%3 hora%4 minuto%5 segundo%6',
        DS1307_SET_NOW: 'Define o objeto de tempo atual',
        DS1307_READ: 'DS1307 leu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        DS1307_CATEGORY: 'Часы',
        DS1307_INIT: 'инициализация DS1307',
        DS1307_SET_SYS_TIME: 'Установить текущее системное время',
        DS1307_SET_TIME: 'Установить время год%1 месяц%2 дата%3 час%4 минута%5 секунда%6',
        DS1307_SET_NOW: 'Устанавливает текущий объект времени',
        DS1307_READ: 'DS1307 прочитал %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        DS1307_CATEGORY: '時鐘模塊',
        DS1307_INIT: '初始化 DS1307時鐘',
        DS1307_SET_SYS_TIME: '設置為當前系統時間',
        DS1307_SET_TIME: '設置自定義時間 年%1 月%2 日%3 時%4 分%5 秒%6',
        DS1307_SET_NOW: '設置當前時間對象',
        DS1307_READ: 'DS1307 讀取時間 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DS1307_CATEGORY: '时钟模块',
        DS1307_INIT: '初始化 DS1307时钟',
        DS1307_SET_SYS_TIME: '设置为当前系统时间',
        DS1307_SET_TIME: '设置自定义时间 年%1 月%2 日%3 时%4 分%5 秒%6',
        DS1307_SET_NOW: '设置当前时间对象',
        DS1307_READ: 'DS1307 读取时间 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        DS1307_CATEGORY: 'Orologio',
        DS1307_INIT: 'inizializza DS1307',
        DS1307_SET_SYS_TIME: 'Imposta l\'orario del sistema corrente',
        DS1307_SET_TIME: 'Imposta l\'orario anno%1 mese%2 giorno%3 ora%4 minuto%5 secondo%6',
        DS1307_SET_NOW: 'Imposta l\'oggetto tempo corrente',
        DS1307_READ: 'leggi DS1307 %1'
    });
    return Blockly;
}

exports = addMsg;
