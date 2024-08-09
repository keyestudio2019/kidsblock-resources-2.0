/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.aht20_read = function (block) {
        Blockly.Arduino.includes_.include_aht20_init = `#include <Wire.h>\n#include <AHT20.h>`;
        Blockly.Arduino.definitions_[`aht20`] = `AHT20 aht20;`;
        Blockly.Arduino.setups_['aht20_getdata'] ='Wire.begin();\naht20.begin();';
        const data = this.getFieldValue('data');
        return [`${data}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
