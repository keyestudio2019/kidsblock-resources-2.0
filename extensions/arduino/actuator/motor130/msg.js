/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MOTOR130_CATEGORY: 'DC Motor',
        MOTOR130_DIGITAL: 'Motor INA#%1 State%2 INB#%3 State%4',
        MOTOR130_ANALOG: 'Motor INA#%1 analogWrite%2 INB#%3 analogWrite%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        MOTOR130_CATEGORY: 'Gleichstrommotor',
        MOTOR130_DIGITAL: 'Motor INA#%1 Status%2 INB#%3 Status%4',
        MOTOR130_ANALOG: 'Motor INA#%1 analogWrite%2 INB#%3 analogWrite%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        MOTOR130_CATEGORY: 'Motor CC',
        MOTOR130_DIGITAL: 'Motor INA#%1 Estado%2 INB#%3 Estado%4',
        MOTOR130_ANALOG: 'Motor INA#%1 analogWrite%2 INB#%3 analogWrite%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        MOTOR130_CATEGORY: 'Moteur CC',
        MOTOR130_DIGITAL: 'Moteur INA#%1 État%2 INB#%3 État%4',
        MOTOR130_ANALOG: 'Moteur INA#%1 analogWrite%2 INB#%3 analogWrite%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        MOTOR130_CATEGORY: 'DC モーター',
        MOTOR130_DIGITAL: 'モーター INA#%1 状態%2 INB#%3 状態%4',
        MOTOR130_ANALOG: 'モーター INA#%1 アナログ書き込み%2 INB#%3 アナログ書き込み%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        MOTOR130_CATEGORY: 'DC 모터',
        MOTOR130_DIGITAL: '모터 INA#%1 상태%2 INB#%3 상태%4',
        MOTOR130_ANALOG: '모터 INA#%1 analogWrite%2 INB#%3 analogWrite%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        MOTOR130_CATEGORY: 'Silnik prądu stałego',
        MOTOR130_DIGITAL: 'Silnik INA#%1 Stan%2 INB#%3 Stan%4',
        MOTOR130_ANALOG: 'Silnik INA#%1 analogWrite%2 INB#%3 analogWrite%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        MOTOR130_CATEGORY: 'Motor DC',
        MOTOR130_DIGITAL: 'Motor INA#%1 Estado%2 INB#%3 Estado%4',
        MOTOR130_ANALOG: 'Motor INA#%1 analogWrite%2 INB#%3 analogWrite%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        MOTOR130_CATEGORY: 'Двигатель постоянного тока',
        MOTOR130_DIGITAL: 'Двигатель INA#%1 Состояние%2 INB#%3 Состояние%4',
        MOTOR130_ANALOG: 'Двигатель INA#%1, аналоговая запись%2, INB#%3, аналоговая запись%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        MOTOR130_CATEGORY: '直流電機',
        MOTOR130_DIGITAL: '直流電機 INA#%1 電平為%2 INB#%3 電平為%4',
        MOTOR130_ANALOG: '直流電機 INA#%1 模擬輸出值%2 INB#%3 模擬輸出值%4',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MOTOR130_CATEGORY: '直流电机',
        MOTOR130_DIGITAL: '直流电机 INA#%1 电平为%2 INB#%3 电平为%4',
        MOTOR130_ANALOG: '直流电机 INA#%1 模拟输出值%2 INB#%3 模拟输出值%4',
    });
    return Blockly;
}

exports = addMsg;
