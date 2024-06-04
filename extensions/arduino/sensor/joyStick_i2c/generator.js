/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.joyStick_i2c = function (block) {
        Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
        Blockly.Arduino.includes_.include_joystick_init = `#include <Rocker.h>`;
        Blockly.Arduino.definitions_[`joystick_data`] = `ROCKER rocker;`;
        Blockly.Arduino.setups_['getAddress'] ='Wire.begin();\nrocker.begin();\n';
        const val = this.getFieldValue('VAL');
        return [`${val}`, Blockly.Arduino.ORDER_ATOMIC];
    };


    Blockly.Arduino.joyStick_data = function (block) {
    
       
        return 'rocker.measure();\n';
    };
     
    return Blockly;
}

exports = addGenerator;
