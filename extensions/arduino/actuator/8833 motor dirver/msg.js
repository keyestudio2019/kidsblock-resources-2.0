/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MOTOR8833_CATEGORY: '8833 Motor Driver',
        MOTOR8833_DRIVER: 'Motor#%1 direction%2 speed#%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        MOTOR8833_CATEGORY: '8833 Motortreiber',
        MOTOR8833_DRIVER: 'Motor#%1 Richtung%2 Geschwindigkeit#%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        MOTOR8833_CATEGORY: 'Controlador de motor 8833',
        MOTOR8833_DRIVER: 'Motor#%1 dirección%2 velocidad#%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        MOTOR8833_CATEGORY: '8833 Motor Driver',
        MOTOR8833_DRIVER: 'Moteur n° %1 sens %2 vitesse n° %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        MOTOR8833_CATEGORY: '8833 モータードライバー',
        MOTOR8833_DRIVER: 'モーター#%1 方向%2 速度#%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        MOTOR8833_CATEGORY: '8833 모터 드라이버',
        MOTOR8833_DRIVER: '모터#%1 방향%2 속도#%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        MOTOR8833_CATEGORY: 'Sterownik silnika 8833',
        MOTOR8833_DRIVER: 'Silnik#%1 kierunek%2 prędkość#%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        MOTOR8833_CATEGORY: '8833 Motor Driver',
        MOTOR8833_DRIVER: 'Motor#%1 direção%2 velocidade#%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        MOTOR8833_CATEGORY: 'Водитель двигателя 8833',
        MOTOR8833_DRIVER: 'Двигатель#%1 направление%2 скорость#%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        MOTOR8833_CATEGORY: '8833電機驅動',
        MOTOR8833_DRIVER: '電機%1 方向為%2 速度%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MOTOR8833_CATEGORY: '8833电机驱动',
        MOTOR8833_DRIVER: '电机%1 方向为%2 速度%3',

    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        MOTOR8833_CATEGORY: 'Driver per motore 8833',
        MOTOR8833_DRIVER: 'Motore%1 direzione%2 velocità%3',        

    });
    return Blockly;
}

exports = addMsg;
