/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        JOYSTICK_CATEGORY: 'I2C JoyStick module',
        JOYSTICK_I2C: 'Read joystick module %1 data',
        JOYSTICK_DATA: 'refresh the value of joystick',
        BUTTON: 'Button',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        JOYSTICK_CATEGORY: 'I2C JoyStick-Modul',
        JOYSTICK_I2C: 'Daten des Joystick-Moduls %1 lesen',
        JOYSTICK_DATA: 'Wert des Joysticks aktualisieren',
        TASTE: 'Taste',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        JOYSTICK_CATEGORY: 'Módulo JoyStick I2C',
        JOYSTICK_I2C: 'Leer datos del módulo de joystick %1',
        JOYSTICK_DATA: 'actualizar el valor del joystick',
        BOTÓN: 'Botón',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        JOYSTICK_CATEGORY: 'Module JoyStick I2C',
        JOYSTICK_I2C: 'Lire les données du module joystick %1',
        JOYSTICK_DATA: 'actualise la valeur du joystick',
        BOUTON: 'Bouton',
        X: 'X',
        Y:'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        JOYSTICK_CATEGORY: 'I2C ジョイスティック モジュール',
        JOYSTICK_I2C: 'ジョイスティック モジュール %1 データを読み取ります',
        JOYSTICK_DATA: 'ジョイスティックの値を更新',
        BOUTON: 'ボタン',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        JOYSTICK_CATEGORY: 'I2C 조이스틱 모듈',
        JOYSTICK_I2C: '조이스틱 모듈 %1 데이터 읽기',
        JOYSTICK_DATA: '조이스틱 값 새로 고침',
        BOUTON: '버튼',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        JOYSTICK_CATEGORY: 'Moduł JoyStick I2C',
        JOYSTICK_I2C: 'Odczytaj dane modułu joysticka %1',
        JOYSTICK_DATA: 'odśwież wartość joysticka',
        BOUTON: 'Przycisk',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        JOYSTICK_CATEGORY: 'Módulo I2C JoyStick',
        JOYSTICK_I2C: 'Ler módulo joystick %1 dados',
        JOYSTICK_DATA: 'atualizar o valor do joystick',
        BOUTON: 'Botão',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        JOYSTICK_CATEGORY: 'Модуль I2C JoyStick',
        JOYSTICK_I2C: 'Читать данные модуля джойстика %1',
        JOYSTICK_DATA: 'обновить значение джойстика',
        BOUTON: 'Кнопка',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        JOYSTICK_CATEGORY: 'I2C 搖桿模塊',
        JOYSTICK_I2C: '讀取搖桿模塊 %1 的值',
        JOYSTICK_DATA: '刷新搖桿的值',
        BUTTON: '按鍵',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        JOYSTICK_CATEGORY: 'I2C 摇杆模块',
        JOYSTICK_I2C: '读取摇杆模块 %1 的值',
        JOYSTICK_DATA: '刷新摇杆的值',
        BUTTON: '按键',
        X: 'X',
        Y: 'Y'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        JOYSTICK_CATEGORY: 'Modulo I2C Joystick',
        JOYSTICK_I2C: 'Leggi i dati del modulo joystick %1',
        JOYSTICK_DATA: 'Aggiorna il valore del joystick',
        BUTTON: 'Pulsante',
        X: 'X',
        Y: 'Y'
    });
    return Blockly;
}

exports = addMsg;
