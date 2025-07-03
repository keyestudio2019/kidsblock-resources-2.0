function addGenerator(Blockly) {
    Blockly.Arduino.sengo1_begin = function() {
        const dropdown_mode_obj = this.getFieldValue('mode_obj');
        const dropdown_addr_obj = this.getFieldValue('addr_obj');

        Blockly.Arduino.definitions_['include_Sentry'] = '#include <Sentry.h>';

        if (dropdown_mode_obj == 'Wire') {
            Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
            Blockly.Arduino.setups_['setup_Wire'] = 'Wire.begin();\n';
        }
        
        Blockly.Arduino.definitions_['var_declare_Sengo1'] = `Sengo1 sengo1(${dropdown_addr_obj});`;

        const code = `while (SENTRY_OK != sengo1.begin(&${dropdown_mode_obj})) {yield();}\n`;
        return code;
    };

    Blockly.Arduino.sengo1_set_default = function() {
        return 'sengo1.SensorSetDefault();\n';
    };

    Blockly.Arduino.sengo1_vision_set_status = function() {
        const dropdown_VisionStatus = this.getFieldValue('VisionStatus');
        const dropdown_vision_obj = this.getFieldValue('vision_obj');

        return `sengo1.Vision${dropdown_VisionStatus}(${dropdown_vision_obj});\n`;
    };

    Blockly.Arduino.sengo1_vision_set_param_num = function() {
        const dropdown_vision_obj = this.getFieldValue('vision_obj');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';

        return `sengo1.SetParamNum(${dropdown_vision_obj}, ${num});\n`;
    };

    Blockly.Arduino.sengo1_vision_blob_set_param = function() {
        const dropdown_vision_obj = 'Sengo1::kVisionBlob';
        const input_index = 1;
        const input_x = 0;
        const input_y = 0;
        const input_w = Blockly.Arduino.valueToCode(this, 'w', Blockly.Arduino.ORDER_ATOMIC);
        const input_h = Blockly.Arduino.valueToCode(this, 'h', Blockly.Arduino.ORDER_ATOMIC);
        const input_l = this.getFieldValue('lable');

        Blockly.Arduino.definitions_['param_obj'] = 'sentry_object_t param;\n';

        let code = '\n';
        code += `param.x_value = ${input_x};\n`;
        code += `param.y_value = ${input_y};\n`;
        code += `param.width = ${input_w};\n`;
        code += `param.height = ${input_h};\n`;
        code += `param.label = Sengo1::${input_l};\n`;
        code += `sengo1.SetParam(${dropdown_vision_obj}, &param, ${input_index});\n`;

        return code;
    };

    Blockly.Arduino.sengo1_vision_color_set_param = function() {
        const dropdown_vision_obj = 'Sengo1::kVisionColor';
        const input_index = 1;
        const input_x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
        const input_y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);
        const input_w = Blockly.Arduino.valueToCode(this, 'w', Blockly.Arduino.ORDER_ATOMIC);
        const input_h = Blockly.Arduino.valueToCode(this, 'h', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.definitions_['param_obj'] = 'sentry_object_t param;\n';

        let code = '\n';
        code += `param.x_value = ${input_x};\n`;
        code += `param.y_value = ${input_y};\n`;
        code += `param.width = ${input_w};\n`;
        code += `param.height = ${input_h};\n`;
        code += `param.label = 0;\n`;
        code += `sengo1.SetParam(${dropdown_vision_obj}, &param, ${input_index});\n`;

        return code;
    };

    Blockly.Arduino.sengo1_vision_face_set_param = function() {
        const dropdown_vision_obj = 'Sengo1::kVisionFace';
        const input_index = Blockly.Arduino.valueToCode(this, 'index', Blockly.Arduino.ORDER_ATOMIC);
        const input_x = 0;
        const input_y = 0;
        const input_w = 0;
        const input_h = 0;
        const input_l = this.getFieldValue('lable');

        Blockly.Arduino.definitions_['param_obj'] = 'sentry_object_t param;\n';

        let code = '\n';
        code += `param.x_value = ${input_x};\n`;
        code += `param.y_value = ${input_y};\n`;
        code += `param.width = ${input_w};\n`;
        code += `param.height = ${input_h};\n`;
        code += `param.label = ${input_l};\n`;
        code += `sengo1.SetParam(${dropdown_vision_obj}, &param, ${input_index});\n`;

        return code;
    };

    Blockly.Arduino.sengo1_led_set_color = function() {
        const dropdown_led_color_obj1 = this.getFieldValue('led_color_obj1');
        const dropdown_led_color_obj2 = this.getFieldValue('led_color_obj2');
        const input_level = Blockly.Arduino.valueToCode(this, 'level', Blockly.Arduino.ORDER_ATOMIC) || '1';

        return `sengo1.LedSetColor(${dropdown_led_color_obj1}, ${dropdown_led_color_obj2}, ${input_level});\n`;
    };

    Blockly.Arduino.sengo1_set_awb = function() {
        const dropdown_awb_obj = this.getFieldValue('awb_obj');
        return `sengo1.CameraSetAwb(${dropdown_awb_obj});\n`;
    };

    Blockly.Arduino.sengo1_vision_detected_count = function() {
        const dropdown_vision_obj = this.getFieldValue('vision_obj');
        const code = `sengo1.GetValue(${dropdown_vision_obj}, kStatus)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sengo1_get_qr_value = function() {
        const code = 'String(sengo1.GetQrCodeValue())';
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sengo1_vision_obj = function() {
        const dropdown_vision_obj = this.getFieldValue('vision_obj');
        const dropdown_res_obj = this.getFieldValue('vision_res_obj');
        const input_index = '1';

        const code = `sengo1.GetValue(${dropdown_vision_obj}, ${dropdown_res_obj}, ${input_index})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sengo1_vision_obj_color = function() {
        const dropdown_vision_obj = 'Sengo1::kVisionColor';
        const dropdown_res_obj = this.getFieldValue('vision_res_obj');
        const input_index = '1';

        const code = `sengo1.GetValue(${dropdown_vision_obj}, ${dropdown_res_obj}, ${input_index})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sengo1_vision_obj_line = function() {
        const dropdown_vision_obj = 'Sengo1::kVisionLine';
        const dropdown_res_obj = this.getFieldValue('vision_res_obj');
        const input_index = '1';

        const code = `sengo1.GetValue(${dropdown_vision_obj}, ${dropdown_res_obj}, ${input_index})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sengo1_vision_obj_qr = function() {
        const dropdown_vision_obj = 'Sengo1::kVisionQrCode';
        const dropdown_res_obj = this.getFieldValue('vision_res_obj');
        const input_index = '1';

        const code = `sengo1.GetValue(${dropdown_vision_obj}, ${dropdown_res_obj}, ${input_index})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sengo1_vision_color = function() {
        const dropdown_vision_obj = 'Sengo1::kVisionColor';
        const dropdown_lable_obj = this.getFieldValue('vision_card_obj');
        const input_index = '1';

        const code = `(sengo1.GetValue(${dropdown_vision_obj}, kLabel, ${input_index}) == ${dropdown_lable_obj})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sengo1_vision_card_blob = function() {
        const dropdown_vision_obj = 'Sengo1::kVisionBlob';
        const dropdown_lable_obj = this.getFieldValue('vision_card_obj');
        const input_index = '1';

        const code = `(sengo1.GetValue(${dropdown_vision_obj}, kLabel, ${input_index}) == ${dropdown_lable_obj})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sengo1_vision_card = function() {
        const dropdown_vision_obj = 'Sengo1::kVisionCard';
        const dropdown_lable_obj = this.getFieldValue('vision_card_obj');
        const input_index = '1';

        const code = `(sengo1.GetValue(${dropdown_vision_obj}, kLabel, ${input_index}) == ${dropdown_lable_obj})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sengo1_vision_ball = function() {
        const dropdown_vision_obj = 'Sengo1::kVisionBall';
        const dropdown_lable_obj = this.getFieldValue('vision_card_obj');
        const input_index = '1';

        const code = `(sengo1.GetValue(${dropdown_vision_obj}, kLabel, ${input_index}) == ${dropdown_lable_obj})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator; 