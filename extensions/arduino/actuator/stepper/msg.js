/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS_STEPPER_CATEGORY: 'Stepper 28BYJ-48',
        KS_STEPPER_INIT: 'Init IN1#%1 IN2%2 IN3%3 IN4%4 Steps per revolution%5 speed%6',
        KS_STEPPER_STEP: 'Stepper step%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        KS_STEPPER_CATEGORY: 'Stepper 28BYJ-48',
        KS_STEPPER_INIT: 'Init IN1#%1 IN2%2 IN3%3 IN4%4 Schritte pro Umdrehung%5 Geschwindigkeit%6',
        KS_STEPPER_STEP: 'Schrittschritt%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        KS_STEPPER_CATEGORY: 'Paso a paso 28BYJ-48',
        KS_STEPPER_INIT: 'Inic IN1#%1 IN2%2 IN3%3 IN4%4 Pasos por revolución%5 velocidad%6',
        KS_STEPPER_STEP: 'Paso paso a paso%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        KS_STEPPER_CATEGORY: 'Pas à pas 28BYJ-48',
        KS_STEPPER_INIT: 'Init IN1#%1 IN2%2 IN3%3 IN4%4 Pas par tour%5 vitesse%6',
        KS_STEPPER_STEP: 'Étape pas à pas%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        KS_STEPPER_CATEGORY: 'ステッパー 28BYJ-48',
        KS_STEPPER_INIT: '初期化 IN1#%1 IN2%2 IN3%3 IN4%4 1 回転あたりのステップ数%5 速度%6',
        KS_STEPPER_STEP: 'ステッパー ステップ%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        KS_STEPPER_CATEGORY: '스테퍼 28BYJ-48',
        KS_STEPPER_INIT: '초기화 IN1#%1 IN2%2 IN3%3 IN4%4 회전당 단계%5 속도%6',
        KS_STEPPER_STEP: '스테퍼 스텝%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        KS_STEPPER_CATEGORY: 'Stepper 28BYJ-48',
        KS_STEPPER_INIT: 'Init IN1#%1 IN2%2 IN3%3 IN4%4 Kroki na obrót%5 prędkość%6',
        KS_STEPPER_STEP: 'Krok krokowy%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        KS_STEPPER_CATEGORY: 'Stepper 28BYJ-48',
        KS_STEPPER_INIT: 'Iniciar IN1#%1 IN2%2 IN3%3 IN4%4 Passos por revolução%5 velocidade%6',
        KS_STEPPER_STEP: 'Passo de passo%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        KS_STEPPER_CATEGORY: 'Шаговый 28BYJ-48',
        KS_STEPPER_INIT: 'Init IN1#%1 IN2%2 IN3%3 IN4%4 Шагов на оборот%5 скорость%6',
        KS_STEPPER_STEP: 'Пошаговый шаг%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        KS_STEPPER_CATEGORY: '步進電機28BYJ-48',
        KS_STEPPER_INIT: '初始化 IN1%1 IN2%2 IN3%3 IN4%4 每轉步數%5 速度%6',
        KS_STEPPER_STEP: '步進電機 運轉步數%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS_STEPPER_CATEGORY: '步进电机28BYJ-48',
        KS_STEPPER_INIT: '初始化 IN1%1 IN2%2 IN3%3 IN4%4 每转步数%5 速度%6',
        KS_STEPPER_STEP: '步进电机 运转步数%1',
    });
    return Blockly;
}

exports = addMsg;
