/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {

    Blockly.Arduino.vision_objs_slider = Blockly.Arduino.led_leval_slider = function () {

        var slider_num = this.getFieldValue('NUM');

        return [slider_num, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.Sentry1Begin = function () {

        var dropdown_mode_obj = this.getFieldValue('mode_obj');
        var dropdown_addr_obj = this.getFieldValue('addr_obj');

        Blockly.Arduino.includes_.Sentry = "#include <Sentry.h>";

        if (dropdown_mode_obj == 'Wire') {
            Blockly.Arduino.includes_.Wire = "#include <Wire.h>";
            Blockly.Arduino.setups_['setup_Wire'] = 'Wire.begin();\n';
        }

        Blockly.Arduino.definitions_.var_declare_Sentry1 = `Sentry1 sentry1(${dropdown_addr_obj});`;

        var code = `while (SENTRY_OK != sentry1.begin(&${dropdown_mode_obj})) {yield();}\n`;

        return code;
    };

    Blockly.Arduino.Sentry1VisionSetStatus = function () {

        var dropdown_VisionStatus = this.getFieldValue('VisionStatus');
        var dropdown_vision_obj = this.getFieldValue('vision_obj');

        return `sentry1.Vision${dropdown_VisionStatus}(${dropdown_vision_obj});\n`;
    };

    Blockly.Arduino.Sentry1LedSetColor = function () {

        var dropdown_detected_color = this.getFieldValue('detected_color');
        var dropdown_undetected_color = this.getFieldValue('undetected_color');
        var input_level = Blockly.Arduino.valueToCode(this, "level", Blockly.Arduino.ORDER_ATOMIC);

        return `sentry1.LedSetColor(${dropdown_detected_color},${dropdown_undetected_color},${input_level});\n`;
    };


    Blockly.Arduino.Sentry1VisionSetParamNum = function () {

        var dropdown_vision_obj = this.getFieldValue('vision_obj');
        var input_num = Blockly.Arduino.valueToCode(this, "max_num", Blockly.Arduino.ORDER_ATOMIC);

        return `sentry1.SetParamNum(${dropdown_vision_obj},${input_num});\n`;
    };

    Blockly.Arduino.Sentry1SetBlodParam = Blockly.Arduino.Sentry1SetColorParam = function () {

        var dropdown_vision_obj = this.getFieldValue('vision_obj');
        var input_index = Blockly.Arduino.valueToCode(this, "index", Blockly.Arduino.ORDER_ATOMIC);
        var input_x = Blockly.Arduino.valueToCode(this, "x", Blockly.Arduino.ORDER_ATOMIC);
        var input_y = Blockly.Arduino.valueToCode(this, "y", Blockly.Arduino.ORDER_ATOMIC);
        var input_w = Blockly.Arduino.valueToCode(this, "w", Blockly.Arduino.ORDER_ATOMIC);
        var input_h = Blockly.Arduino.valueToCode(this, "h", Blockly.Arduino.ORDER_ATOMIC);
        var input_l = this.getFieldValue('lable');

        Blockly.Arduino.definitions_["param_obj"] = "sentry_object_t param;\n";

        var code = "\n"
        if (input_x != "") code += `param.x_value = ${input_x};\n`;
        if (input_y != "") code += `param.y_value = ${input_y};\n`;
        if (input_w != "") code += `param.width = ${input_w};\n`;
        if (input_h != "") code += `param.height = ${input_h};\n`;
        if (input_l != null) code += `param.label = ${input_l};\n`;

        code += `sentry1.SetParam(${dropdown_vision_obj},&param,${input_index});\n`

        return code;
    };


    Blockly.Arduino.Sentry1CameraSetAwb = function () {

        var dropdown_awb_obj = this.getFieldValue('awb_obj');

        return `sentry1.CameraSetAwb(${dropdown_awb_obj});\n`;
    };

    Blockly.Arduino.Sentry1VisionDetectedCount = function () {

        var dropdown_vision_obj = this.getFieldValue('vision_obj');

        var code = `sentry1.GetValue(${dropdown_vision_obj}, kStatus)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    
    Blockly.Arduino.Sentry1GetValue = function () {

        var dropdown_vision_obj = this.getFieldValue('vision_obj');
        var dropdown_vision_res_obj = this.getFieldValue('vision_res_obj');
        var input_index = Blockly.Arduino.valueToCode(this, "index", Blockly.Arduino.ORDER_ATOMIC) || '1';

        var code = `sentry1.GetValue(${dropdown_vision_obj},${dropdown_vision_res_obj},${input_index})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.Sentry1ColorRcgValue = Blockly.Arduino.Sentry1GetValue;
    Blockly.Arduino.Sentry1QrRcgValue = Blockly.Arduino.Sentry1GetValue;
    Blockly.Arduino.Sentry1LineValue = Blockly.Arduino.Sentry1GetValue;

    Blockly.Arduino.Sentry1GetQrCodeValue = function () {

        var code = `String(sentry1.GetQrCodeValue())`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.Sentry1DetectedColor = function () {

        var dropdown_vision_obj = this.getFieldValue('vision_obj');
        var dropdown_vision_card_obj = this.getFieldValue('vision_card_obj');
        var input_index = Blockly.Arduino.valueToCode(this, "index", Blockly.Arduino.ORDER_ATOMIC) || '1';

        var code = `(sentry1.GetValue(${dropdown_vision_obj},kLabel,${input_index})==${dropdown_vision_card_obj})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.Sentry1DetectedBlob = Blockly.Arduino.Sentry1DetectedColor;
    Blockly.Arduino.Sentry1DetectedCard = Blockly.Arduino.Sentry1DetectedColor;

    return Blockly;
}

exports = addGenerator;
