/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
   
    Blockly.Arduino.extend_matrix = function (block) {
        const arr = Blockly.Arduino.valueToCode(this, 'MATRIX_CUSTOM', Blockly.Arduino.ORDER_ASSIGNMENT);

        return 'display("'+ arr +'");\n';
    };

    return Blockly;
}

exports = addGenerator;



