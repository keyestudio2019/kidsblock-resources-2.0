/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    //蓝牙键盘初始化
  Blockly.Arduino.esp32_BleKeyboard_init = function() {
    var deviceName = Blockly.Arduino.valueToCode(this, 'deviceName',Blockly.Arduino.ORDER_ATOMIC) || '0';
    var deviceManufacturer = Blockly.Arduino.valueToCode(this, 'deviceManufacturer',Blockly.Arduino.ORDER_ATOMIC) || '0';

    Blockly.Arduino.includes_['include_BleKeyboard'] = '#include <BleKeyboard.h>';
    Blockly.Arduino.definitions_['var_declare_define_BleKeyboard'] = 'BleKeyboard bleKeyboard('+deviceName+','+deviceManufacturer+');\n';
    Blockly.Arduino.setups_['setup_bleKeyboard'] =  'bleKeyboard.begin();\n';

    var code = '';
    return code;
  };

  //蓝牙键盘已连接
  Blockly.Arduino.esp32_BleKeyboard_isConnected = function() {
    var code = 'bleKeyboard.isConnected()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  //蓝牙键盘键值
  Blockly.Arduino.esp32_BleKeyboard_KeyValue = function() {
    var KeyValue = this.getFieldValue('KeyValue');
    var code = KeyValue;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  //蓝牙键盘动作
  Blockly.Arduino.esp32_BleKeyboard_write_press = function() {
    var model = parseInt(this.getFieldValue('model'));

    var KeyValue = Blockly.Arduino.valueToCode(this, 'KeyValue',Blockly.Arduino.ORDER_ATOMIC) || '0';
    //KeyValue = KeyValue.replace(/\"/g,'');
    //KeyValue = '\''+KeyValue+'\''
    var code = '';
    switch(model){
      case 1:
      code = 'bleKeyboard.print('+KeyValue+');\n';
      break;
      case 0:
      code = 'bleKeyboard.write('+KeyValue+');\n';
      break;
      case 2:
      code = 'bleKeyboard.press('+KeyValue+');\n';
      break;
      case 3:
      code = 'bleKeyboard.release('+KeyValue+');\n';
      break;
      case 4:
      code = 'bleKeyboard.releaseAll();\n';
      break;
    }

    
    return code;
  };



    return Blockly;
}

exports = addGenerator;
