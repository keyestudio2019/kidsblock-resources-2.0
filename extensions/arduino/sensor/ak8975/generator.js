/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ak8975_init = function (block) {
        Blockly.Arduino.includes_.include_ak8975_init = '#include <Wire.h>\n#include <AK8975C.h>\n'
        Blockly.Arduino.definitions_.ak8975_var = 'AK8975C ak8975c;\n';
        Blockly.Arduino.setups_['ak8975begin'] = 'Wire.begin();\n'+
        '  if(!ak8975c.begin())\n'+
        '  {\n'+
        '  Serial.println("error!");\n'+
        '  while(1);\n'+
        '  }\n'+
        '  ak8975c.selfTest();\n'
        return '';
    };
    Blockly.Arduino.ak8975_read = function (block) {
        const unit = this.getFieldValue('unit');
        return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
    };
    Blockly.Arduino.ak8975_degree = function (block) {
        
        return [`ak8975c.degree()`, Blockly.Arduino.ORDER_ATOMIC];
    };
    return Blockly;
}

exports = addGenerator;
