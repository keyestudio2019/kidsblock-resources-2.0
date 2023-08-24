/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        JOYSTICK_CATEGORY: 'JoyStick module',
        JOYSTICK_Z_STATE: 'interface %1 joystick button(Z) was be pushed?',
        JOYSTICK_XY_VALUE: 'read interface %1 joystick %2 axis',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        JOYSTICK_CATEGORY: 'JoyStick-Modul',
        JOYSTICK_Z_STATE: 'Schnittstelle %1 Joystick-Taste (Z) wurde gedrückt?',
        JOYSTICK_XY_VALUE: 'Schnittstelle %1 Joystick %2 Achse lesen',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        JOYSTICK_CATEGORY: 'Módulo JoyStick',
        JOYSTICK_Z_STATE: '¿Se presionó el botón (Z) de la interfaz %1?',
        JOYSTICK_XY_VALUE: 'interfaz de lectura %1 joystick %2 eje',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        JOYSTICK_CATEGORY: 'Módulo JoyStick',
        JOYSTICK_Z_STATE: '¿Se presionó el botón (Z) de la interfaz %1?',
        JOYSTICK_XY_VALUE: 'interfaz de lectura %1 joystick %2 eje',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        JOYSTICK_CATEGORY: 'ジョイスティックモジュール',
        JOYSTICK_Z_STATE: 'インターフェイス %1 ジョイスティック ボタン (Z) が押されました?',
        JOYSTICK_XY_VALUE: 'インターフェイス %1 ジョイスティック %2 軸を読み取り',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        JOYSTICK_CATEGORY: '조이스틱 모듈',
        JOYSTICK_Z_STATE: '인터페이스 %1 조이스틱 버튼(Z)을 눌렀습니까?',
        JOYSTICK_XY_VALUE: '인터페이스 %1 조이스틱 %2 축 읽기',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        JOYSTICK_CATEGORY: 'Moduł JoyStick',
        JOYSTICK_Z_STATE: 'interfejs %1 przycisk joysticka (Z) został wciśnięty?',
        JOYSTICK_XY_VALUE: 'odczyt interfejsu %1 joystick %2 oś',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        JOYSTICK_CATEGORY: 'Módulo JoyStick',
        JOYSTICK_Z_STATE: 'interface %1 botão do joystick(Z) foi pressionado?',
        JOYSTICK_XY_VALUE: 'ler interface %1 joystick %2 eixo',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        JOYSTICK_CATEGORY: 'Модуль JoyStick',
        JOYSTICK_Z_STATE: 'была нажата кнопка джойстика интерфейса %1 (Z)?',
        JOYSTICK_XY_VALUE: 'чтение интерфейса %1 джойстика %2 оси',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        JOYSTICK_CATEGORY: '搖桿模塊',
        JOYSTICK_Z_STATE: '接口%1搖桿按鈕(Z)被按下? ',
        JOYSTICK_XY_VALUE: '讀取接口%1搖桿%2軸',
        X: 'X',
        Y :'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        JOYSTICK_CATEGORY: '摇杆模块',
        JOYSTICK_Z_STATE: '接口%1摇杆按钮(Z)被按下?',
        JOYSTICK_XY_VALUE: '读取接口%1摇杆%2轴',
        X: 'X',
        Y :'Y'
    });
    return Blockly;
}

exports = addMsg;
