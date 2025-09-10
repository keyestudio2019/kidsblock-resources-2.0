/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.tcs34725_init = function() {
        var val = this.getFieldValue('VALUE');

        Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
        Blockly.Arduino.definitions_['include_tcs34725'] = '#include "Adafruit_TCS34725.h"';
        Blockly.Arduino.definitions_['var_tcs34725'] = `Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_${val}, TCS34725_GAIN_1X);`;
        Blockly.Arduino.setups_['setup_tcs34725_begin'] = 'tcs.begin();\n';
        var code= 'float r, g, b;\n'+'tcs.getRGB(&r, &g, &b);\n';
        return code;
    };
    // 颜色传感器TCS34725 - 获取RGB颜色值
    Blockly.Arduino.tcs34725_get_rgb = function() {
        var val_rgb = this.getFieldValue('VALUERGB');
        var code = '';
        if(val_rgb == 'r'){
            code += 'r';
        } else if(val_rgb == 'g'){
            code += 'g';
        } else if(val_rgb == 'b'){
            code += 'b';
        }
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    return Blockly;
}

exports = addGenerator;
