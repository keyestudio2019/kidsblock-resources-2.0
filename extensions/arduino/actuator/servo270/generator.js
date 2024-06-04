/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.ks_servo270_angle = function (block) {
        const pin = block.getFieldValue('pin');
        const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
       
        Blockly.Arduino.includes_.include_servo_init = '#include <Servo.h>\n';
        Blockly.Arduino.definitions_[`servo270_${pin}`] = 'Servo servo;\n'+
        'int angleMap(int degree){\n'+
        'return (degree-90) * 20 / 3 + 1500;\n'+
        '}\n';
        Blockly.Arduino.setups_[`servo270_init_${pin}`] = 'servo.attach('+pin+', 600, 2400);';

        return 'servo.writeMicroseconds(angleMap('+angle+'));\n';
    };

    

    return Blockly;
}

exports = addGenerator;
