/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: 'init channel %1 pin IN1 %2 IN2 %3 EN %4',
        L298N_RUN: 'channel %1 run %2 speed %3',
        L298N_FORWARD: 'foward',
        L298N_BACK: 'back',
        L298N_STOP: 'channel %1 stop'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: 'Init-Kanal %1 Pin IN1 %2 IN2 %3 EN %4',
        L298N_RUN: 'Kanal %1 Lauf %2 Geschwindigkeit %3',
        L298N_FORWARD: 'vorwärts',
        L298N_BACK: 'zurück',
        L298N_STOP: 'Kanal %1 stoppt'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        L298N_CATEGORÍA: 'L298N',
        L298N_INIT: 'iniciar canal %1 pin IN1 %2 IN2 %3 EN %4',
        L298N_RUN: 'canal %1 ejecutar %2 velocidad %3',
        L298N_FORWARD: 'adelante',
        L298N_BACK: 'atrás',
        L298N_STOP: 'canal %1 parada'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: 'init canal %1 broche IN1 %2 IN2 %3 EN %4',
        L298N_RUN: 'canal %1 marche %2 vitesse %3',
        L298N_FORWARD : 'avant',
        L298N_BACK: 'retour',
        L298N_STOP: 'arrêt du canal %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: '初期化チャネル %1 ピン IN1 %2 IN2 %3 EN %4',
        L298N_RUN: 'チャンネル %1 実行 %2 速度 %3',
        L298N_FORWARD: '前方',
        L298N_BACK: '戻る',
        L298N_STOP: 'チャンネル %1 停止'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: '초기화 채널 %1 핀 IN1 %2 IN2 %3 EN %4',
        L298N_RUN: '채널 %1 실행 %2 속도 %3',
        L298N_FORWARD: '앞으로',
        L298N_BACK: '뒤로',
        L298N_STOP: '채널 %1 정지'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: 'kanał początkowy %1 pin IN1 %2 IN2 %3 EN %4',
        L298N_RUN: 'kanał %1 bieg %2 prędkość %3',
        L298N_FORWARD: 'do przodu',
        L298N_BACK: 'wstecz',
        L298N_STOP: 'kanał %1 stop'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: 'iniciar canal %1 pin IN1 %2 IN2 %3 EN %4',
        L298N_RUN: 'canal %1 executar %2 velocidade %3',
        L298N_FORWARD: 'avançar',
        L298N_BACK: 'voltar',
        L298N_STOP: 'canal %1 parar'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: 'канал инициализации %1 контакт IN1 %2 IN2 %3 EN %4',
        L298N_RUN: 'канал %1 работает %2 скорость %3',
        L298N_FORWARD: 'вперед',
        L298N_BACK: 'назад',
        L298N_STOP: 'канал %1 остановлен'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: '初始化通道 %1 引腳 IN1 %2 IN2 %3 EN %4',
        L298N_RUN: '通道 %1 向 %2 速度 %3',
        L298N_FORWARD: '前',
        L298N_BACK: '後',
        L298N_STOP: '通道 %1 停止'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: '初始化通道 %1 引脚 IN1 %2 IN2 %3 EN %4',
        L298N_RUN: '通道 %1 向 %2 速度 %3',
        L298N_FORWARD: '前',
        L298N_BACK: '后',
        L298N_STOP: '通道 %1 停止'
    });
    return Blockly;
}

exports = addMsg;
