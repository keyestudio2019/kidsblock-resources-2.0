/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DS3231_CATEGORY: 'Clock',
        DS3231_INIT: 'init DS3231',
        DS3231_SET_SYS_TIME: 'Set to the current system time',
        DS3231_SET_TIME: 'Set time year%1 month%2 date%3 hour%4 minute%5 second%6',
        DS3231_READ: 'DS3231 read %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        DS3231_CATEGORY: 'Uhr',
        DS3231_INIT: 'init DS3231',
        DS3231_SET_SYS_TIME: 'Auf die aktuelle Systemzeit setzen',
        DS3231_SET_TIME: 'Stellen Sie die Zeit Jahr%1 Monat%2 Datum%3 Stunde%4 Minute%5 Sekunde%6 ein',
        DS3231_READ: 'DS3231 hat %1 gelesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        DS3231_CATEGORY: 'Reloj',
        DS3231_INIT: 'iniciar DS3231',
        DS3231_SET_SYS_TIME: 'Establecer la hora actual del sistema',
        DS3231_SET_TIME: 'Establecer hora año%1 mes%2 fecha%3 hora%4 minuto%5 segundo%6',
        DS3231_READ: 'DS3231 leyó %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        DS3231_CATEGORY: 'Horloge',
        DS3231_INIT: 'init DS3231',
        DS3231_SET_SYS_TIME: 'Régler à l'heure actuelle du système',
        DS3231_SET_TIME: 'Régler l'heure année%1 mois%2 date%3 heure%4 minute%5 seconde%6',
        DS3231_READ: 'DS3231 a lu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        DS3231_CATEGORY: '時計',
        DS3231_INIT: 'DS3231 を初期化',
        DS3231_SET_SYS_TIME: '現在のシステム時刻に設定します',
        DS3231_SET_TIME: '時刻を設定します 年%1 月%2 日付%3 時間%4 分%5 秒%6',
        DS3231_READ: 'DS3231 読み取り %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        DS3231_CATEGORY: '시계',
        DS3231_INIT: 'DS3231 초기화',
        DS3231_SET_SYS_TIME: '현재 시스템 시간으로 설정',
        DS3231_SET_TIME: '시간 설정 연도%1월%2 날짜%3시%4분%5초%6',
        DS3231_READ: 'DS3231 읽기 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        DS3231_CATEGORY: 'Zegar',
        DS3231_INIT: 'uruchom DS3231',
        DS3231_SET_SYS_TIME: 'Ustaw aktualny czas systemowy',
        DS3231_SET_TIME: 'Ustaw czas rok%1 miesiąc%2 data%3 godzina%4 minuta%5 sekunda%6',
        DS3231_READ: 'DS3231 odczyt %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        DS3231_CATEGORY: 'Relógio',
        DS3231_INIT: 'iniciar DS3231',
        DS3231_SET_SYS_TIME: 'Definir para a hora atual do sistema',
        DS3231_SET_TIME: 'Definir hora ano%1 mês%2 data%3 hora%4 minuto%5 segundo%6',
        DS3231_READ: 'DS3231 leu %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        DS3231_CATEGORY: «Часы»,
        DS3231_INIT: «инициировать DS3231»,
        DS3231_SET_SYS_TIME: «Установить текущее системное время»,
        DS3231_SET_TIME: 'Установить время год%1 месяц%2 дата%3 час%4 минута%5 секунд%6',
        DS3231_READ: 'DS3231 прочитал %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        DS3231_CATEGORY: '時鐘模塊',
        DS3231_INIT: '初始化 DS3231時鐘',
        DS3231_SET_SYS_TIME: '設置為當前系統時間',
        DS3231_SET_TIME: '設置自定義時間 年%1 月%2 日%3 時%4 分%5 秒%6',
        DS3231_READ: 'DS3231 讀取時間 %1'
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DS3231_CATEGORY: '时钟模块',
        DS3231_INIT: '初始化 DS3231时钟',
        DS3231_SET_SYS_TIME: '设置为当前系统时间',
        DS3231_SET_TIME: '设置自定义时间 年%1 月%2 日%3 时%4 分%5 秒%6',
        DS3231_READ: 'DS3231 读取时间 %1'
    });
    return Blockly;
}

exports = addMsg;
