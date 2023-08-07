/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.CUBE4_init = function (block) {
        Blockly.Arduino.definitions_[`cube4`] = '#include <KS4x4x4Cube.h>\n';
      
        Blockly.Arduino.setups_['cube'] = 'CubeInit();\n';
        return '';
    };

//****************分层显示*******************************

    Blockly.Arduino.CUBE4_one = function (block) {
        const layer = this.getFieldValue('LAYER');
        const arr = Blockly.Arduino.valueToCode(this, 'MATRIX_CUSTOM', Blockly.Arduino.ORDER_ASSIGNMENT);
       

        return 'Matrix_Buffer['+layer+'] = 0b'+arr+';\n';
    };


//****************显示特效*******************************

Blockly.Arduino.CUBE4_effect = function (block) {
    
    Blockly.Arduino.definitions_[`effect`] = '#include <KS4x4x4_Cube_Patterns.h>\n';

    const effect= this.getFieldValue('EFFECT');
    const cycles = Blockly.Arduino.valueToCode(this, 'CYCLES', Blockly.Arduino.ORDER_ASSIGNMENT);
    const speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ASSIGNMENT);
       

        return 'CubePlayPattern('+effect+', '+speed+', '+cycles+');\n';
    };

//****************全开*******************************
    Blockly.Arduino.CUBE4_all_on = function (block) {
        return 'Matrix_Buffer[3] = 0b1111111111111111;\nMatrix_Buffer[2] = 0b1111111111111111;\nMatrix_Buffer[1] = 0b1111111111111111;\nMatrix_Buffer[0] = 0b1111111111111111;\n'
    };
//****************全关*******************************
    Blockly.Arduino.CUBE4_all_off = function (block) {
        return 'Matrix_Buffer[3] = 0b0000000000000000;\nMatrix_Buffer[2] = 0b0000000000000000;\nMatrix_Buffer[1] = 0b0000000000000000;\nMatrix_Buffer[0] = 0b0000000000000000;\n'
    };

    return Blockly;
}

exports = addGenerator;
