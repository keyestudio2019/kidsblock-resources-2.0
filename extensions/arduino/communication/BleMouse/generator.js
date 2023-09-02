/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.BLE_MOUSE_INIT = function() {
      var name = Blockly.Arduino.valueToCode(this, 'name', Blockly.Arduino.ORDER_ATOMIC);
      var id = Blockly.Arduino.valueToCode(this, 'id', Blockly.Arduino.ORDER_ATOMIC);
      var battery = Blockly.Arduino.valueToCode(this, 'battery', Blockly.Arduino.ORDER_ATOMIC);
      Blockly.Arduino.definitions_['include_'+'ESPMOUSE_INIT_4'] = '#include <BleMouse.h>\n'
      +'#include <WiFi.h>\n'
      +'BleMouse bleMouse('
      +name
      +','
      +id
      +','
      +battery
      +');\n';
      Blockly.Arduino.setups_['ESPMOUSE_INIT_5'] = 'bleMouse.begin();\n';
      var code = '';
      return code;
    };

    Blockly.Arduino.BLE_MOUSE_CONNECTED = function() {
      var code = 'bleMouse.isConnected()';
      return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.BLE_MOUSE_CLICK = function() {
      var Type = this.getFieldValue('Type');
      var code = 'bleMouse.click('
      +Type
      +');\n';
      return code;
    };

    Blockly.Arduino.BLE_MOUSE_WHEEL_MOVE = function() {
      var Dir = this.getFieldValue('Dir');
      var code = 'bleMouse.move'
      +Dir
      +';\n'
      return code;
    };
    Blockly.Arduino.BLE_MOUSE_MOVE = function() {
      var Dir = this.getFieldValue('Dir');
      var code = 'bleMouse.move'
      +Dir
      +';';
      return code;
    };


    return Blockly;
}

exports = addGenerator;
