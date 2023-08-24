/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        COOPERATIVESCHEDULER_CATEGORY: 'Cooperative scheduler',
        COOPERATIVESCHEDULER_START: 'start cooperative scheduler',
        COOPERATIVESCHEDULER_SETUP: 'task %1 setup',
        COOPERATIVESCHEDULER_SLEEP: 'task delay %1 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        COOPERATIVESCHEDULER_CATEGORY: 'Kooperativer Planer',
        COOPERATIVESCHEDULER_START: 'kooperativen Planer starten',
        COOPERATIVESCHEDULER_SETUP: 'Aufgabe %1 einrichten',
        COOPERATIVESCHEDULER_SLEEP: 'Aufgabenverzögerung %1 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        COOPERATIVESCHEDULER_CATEGORY: 'Programador cooperativo',
        COOPERATIVESCHEDULER_START: 'iniciar programador cooperativo',
        COOPERATIVESCHEDULER_SETUP: 'tarea %1 configuración',
        COOPERATIVESCHEDULER_SLEEP: 'retraso de tarea %1 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        COOPERATIVESCHEDULER_CATEGORY: 'Planificateur coopératif',
        COOPERATIVESCHEDULER_START: 'démarrer le planificateur coopératif',
        COOPERATIVESCHEDULER_SETUP: 'configuration de la tâche %1',
        COOPERATIVESCHEDULER_SLEEP: 'délai de tâche %1 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        COOPERATIVESCHEDULER_CATEGORY: '協力スケジューラ',
         COOPERATIVESCHEDULER_START: '協調スケジューラを開始',
         COOPERATIVESCHEDULER_SETUP: 'タスク %1 セットアップ',
         COOPERATIVESCHEDULER_SLEEP: 'タスク遅延 %1 ミリ秒'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        COOPERATIVESCHEDULER_CATEGORY: '협동 스케줄러',
        COOPERATIVESCHEDULER_START: '협력 스케줄러 시작',
        COOPERATIVESCHEDULER_SETUP: '작업 %1 설정',
        COOPERATIVESCHEDULER_SLEEP: '작업 지연 %1ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        COOPERATIVESCHEDULER_CATEGORY: 'Spółdzielczy planista',
        COOPERATIVESCHEDULER_START: 'uruchom harmonogram współpracy',
        COOPERATIVESCHEDULER_SETUP: 'konfiguracja zadania %1',
        COOPERATIVESCHEDULER_SLEEP: 'opóźnienie zadania %1 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        COOPERATIVESCHEDULER_CATEGORY: 'Agendador cooperativo',
         COOPERATIVESCHEDULER_START: 'iniciar agendador cooperativo',
         COOPERATIVESCHEDULER_SETUP: 'tarefa %1 configuração',
         COOPERATIVESCHEDULER_SLEEP: 'atraso da tarefa %1 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        COOPERATIVESCHEDULER_CATEGORY: 'Совместный планировщик',
        COOPERATIVESCHEDULER_START: 'запустить совместный планировщик',
        COOPERATIVESCHEDULER_SETUP: 'настройка задачи %1',
        COOPERATIVESCHEDULER_SLEEP: 'задержка задачи %1 мс'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        COOPERATIVESCHEDULER_CATEGORY: '多任務調度器',
        COOPERATIVESCHEDULER_START: '啟動多任務調度器',
        COOPERATIVESCHEDULER_SETUP: '任務 %1 setup',
        COOPERATIVESCHEDULER_SLEEP: '任務延時 %1 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        COOPERATIVESCHEDULER_CATEGORY: '多任务调度器',
        COOPERATIVESCHEDULER_START: '启动多任务调度器',
        COOPERATIVESCHEDULER_SETUP: '任务 %1 setup',
        COOPERATIVESCHEDULER_SLEEP: '任务延时 %1 ms'
    });
    return Blockly;
}

exports = addMsg;
