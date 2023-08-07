/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
   
    Blockly.Arduino.matrix_8X16 = function (block) {
        const arr = Blockly.Arduino.valueToCode(this, 'MATRIX_SIXTEEN', Blockly.Arduino.ORDER_ASSIGNMENT);
        const num =123;

        return 'display("'+ arr +''+ num +'");\n';
    };

    return Blockly;
}

exports = addGenerator;



