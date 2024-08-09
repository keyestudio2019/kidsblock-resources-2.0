/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.MP3_control = function (block) {
        const rxpin = block.getFieldValue('RXPIN');
        const txpin = block.getFieldValue('TXPIN');
        const CONTROL_TYPE = this.getFieldValue('CONTROL_TYPE');
        Blockly.Arduino.definitions_['defineGD5800'] = '#include <GD5800_Serial.h>';
        Blockly.Arduino.definitions_['var_declare_GD5800_ mp3'] = 'GD5800_Serial mp3_'+rxpin+''+txpin+'('+rxpin+','+txpin+');';
        Blockly.Arduino.setups_['setup_ mp3'] = 'mp3_'+rxpin+''+txpin+'.begin(9600);';
        return 'mp3_'+rxpin+''+txpin+'.'+CONTROL_TYPE+'\ndelay(100);\n'
    };


    Blockly.Arduino.MP3_loop = function (block) {
        const rxpin = block.getFieldValue('RXPIN');
        const txpin = block.getFieldValue('TXPIN');
        var LOOP_MODE = this.getFieldValue('LOOP_MODE');
        Blockly.Arduino.definitions_['include_GD5800'] = '#include <GD5800_Serial.h>';
        Blockly.Arduino.definitions_['var_declare_GD5800_ mp3'] = 'GD5800_Serial mp3_'+rxpin+''+txpin+'('+rxpin+','+txpin+');';
        Blockly.Arduino.setups_['setup_ mp3'] = 'mp3_'+rxpin+''+txpin+'.begin(9600);';
        var code = 'mp3_'+rxpin+''+txpin+'.setLoopMode('+LOOP_MODE+');\n';
        return code;
    };
    Blockly.Arduino.MP3_eq = function (block) {
        const rxpin = block.getFieldValue('RXPIN');
        const txpin = block.getFieldValue('TXPIN');
        var EQ_MODE = this.getFieldValue('EQ_MODE');
        Blockly.Arduino.definitions_['include_GD5800'] = '#include <GD5800_Serial.h>';
        Blockly.Arduino.definitions_['var_declare_GD5800_ mp3'] = 'GD5800_Serial mp3_'+rxpin+''+txpin+'('+rxpin+','+txpin+');';
        Blockly.Arduino.setups_['setup_ mp3'] = 'mp3_'+rxpin+''+txpin+'.begin(9600);';
        var code = 'mp3_'+rxpin+''+txpin+'.setEqualizer('+EQ_MODE+');\n';
        return code;
    };
    Blockly.Arduino.MP3_vol = function (block) {
        const rxpin = block.getFieldValue('RXPIN');
        const txpin = block.getFieldValue('TXPIN');
        var vol = Blockly.Arduino.valueToCode(this, 'vol', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_['include_GD5800'] = '#include <GD5800_Serial.h>';
        Blockly.Arduino.definitions_['var_declare_GD5800_ mp3'] = 'GD5800_Serial mp3_'+rxpin+''+txpin+'('+rxpin+','+txpin+');';
        Blockly.Arduino.setups_['setup_ mp3'] = 'mp3_'+rxpin+''+txpin+'.begin(9600);';
        var code = 'mp3_'+rxpin+''+txpin+'.setVolume('+vol+');\n';
        return code;
    };
    Blockly.Arduino.MP3_play = function (block) {
        const rxpin = block.getFieldValue('RXPIN');
        const txpin = block.getFieldValue('TXPIN');
        var NUM = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_['include_GD5800'] = '#include <GD5800_Serial.h>';
        Blockly.Arduino.definitions_['var_declare_GD5800_ mp3'] = 'GD5800_Serial mp3_'+rxpin+''+txpin+'('+rxpin+','+txpin+');';
        Blockly.Arduino.setups_['setup_ mp3'] = 'mp3_'+rxpin+''+txpin+'.begin(9600);';
        var code = 'mp3_'+rxpin+''+txpin+'.playFileByIndexNumber('+NUM+');\n';
        return code;
    };



    return Blockly;
}

exports = addGenerator;
