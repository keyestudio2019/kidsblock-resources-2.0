/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
   //dht11
   Blockly.Arduino.DHT_init = function () {

    const sensor_type = this.getFieldValue('TYPE');
    const dropdown_pin = this.getFieldValue('PIN');

    Blockly.Arduino.includes_.include_dht_init = `#include <DHT.h>\n`;
    Blockly.Arduino.definitions_['var_declare_dht' + dropdown_pin] = 'DHT dht('+dropdown_pin+', '+sensor_type+');\n';
    Blockly.Arduino.setups_['DHT_SETUP'+dropdown_pin] = 'dht.begin();';
    return ''
};



//dht11
Blockly.Arduino.KE_dht = function (block) {
    const mode = block.getFieldValue('MODE');

    let code = '';

    if (mode === 'temperature') {
        code += `dht.readTemperature()`;
    } else {
        code += `dht.readHumidity()`;
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

    return Blockly;
}

exports = addGenerator;
