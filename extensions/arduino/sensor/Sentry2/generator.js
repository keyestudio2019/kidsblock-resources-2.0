/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {

    Blockly.Arduino.vision_objs_slider = Blockly.Arduino.led_leval_slider = function () {

        var slider_num = this.getFieldValue('NUM');

        return [slider_num, Blockly.Arduino.ORDER_ATOMIC];
    };

    // Sentry2
    Blockly.Arduino.Sentry2Begin = function () {

        var dropdown_mode_obj = this.getFieldValue('mode_obj');
        var dropdown_addr_obj = this.getFieldValue('addr_obj');

        Blockly.Arduino.includes_.Sentry = "#include <Sentry.h>";

        if (dropdown_mode_obj == 'Wire') {
            Blockly.Arduino.includes_.Wire = "#include <Wire.h>";
            Blockly.Arduino.setups_['setup_Wire'] = 'Wire.begin();\n';
        }

        Blockly.Arduino.definitions_[`var_declare_Sentry`] = `Sentry2 sentry2(${dropdown_addr_obj});`;


        var code = `while (SENTRY_OK != sentry2.begin(&${dropdown_mode_obj})) {yield();}\n`;

        return code;
    };

    Blockly.Arduino.Sentry2VisionSetStatus = function () {

        var dropdown_VisionStatus = this.getFieldValue('VisionStatus');
        var dropdown_vision_obj = this.getFieldValue('vision_obj');

        return `sentry2.Vision${dropdown_VisionStatus}(${dropdown_vision_obj});\n`;
    };

    Blockly.Arduino.Sentry2CameraSetAwb = function () {

        var dropdown_awb_obj = this.getFieldValue('awb_obj');

        return `sentry2.CameraSetAwb(${dropdown_awb_obj});\n`;
    };

    Blockly.Arduino.Sentry2SetParamNum = function () {

        var dropdown_vision_obj = this.getFieldValue('vision_obj');
        var input_num = Blockly.Arduino.valueToCode(this, "max_num", Blockly.Arduino.ORDER_ATOMIC);

        return `sentry2.SetParamNum(${dropdown_vision_obj},${input_num});\n`;
    };


    Blockly.Arduino.Sentry2SetVisionParam = function () {

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

        code += `sentry2.SetParam(${dropdown_vision_obj},&param,${input_index});\n`

        return code;
    };

    Blockly.Arduino.Sentry2SetBlodParam = Blockly.Arduino.Sentry2SetVisionParam;
    Blockly.Arduino.Sentry2SetColorParam = Blockly.Arduino.Sentry2SetVisionParam;

    Blockly.Arduino.Sentry2VisionDetectedCount = function () {

        var dropdown_vision_obj = this.getFieldValue('vision_obj');

        var code = `sentry2.GetValue(${dropdown_vision_obj}, kStatus)`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    Blockly.Arduino.Sentry2GetValue = function () {

        var dropdown_vision_obj = this.getFieldValue('vision_obj');
        var dropdown_vision_res_obj = this.getFieldValue('vision_res_obj');
        var input_index = Blockly.Arduino.valueToCode(this, "index", Blockly.Arduino.ORDER_ATOMIC) || '1';

        var code = `sentry2.GetValue(${dropdown_vision_obj},${dropdown_vision_res_obj},${input_index})`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.Sentry2GetValueNomal = Blockly.Arduino.Sentry2GetValue;
    Blockly.Arduino.Sentry2ColorRcgValue = Blockly.Arduino.Sentry2GetValue;
    Blockly.Arduino.Sentry2QrRcgValue = Blockly.Arduino.Sentry2GetValue;
    Blockly.Arduino.Sentry2LineValue = Blockly.Arduino.Sentry2GetValue;

    Blockly.Arduino.Sentry2GetQrCodeValue = function () {

        var code = `String(sentry2.GetQrCodeValue())`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.Sentry2DetectedColor = function () {

        var dropdown_vision_obj = this.getFieldValue('vision_obj');
        var dropdown_vision_card_obj = this.getFieldValue('vision_card_obj');
        var input_index = Blockly.Arduino.valueToCode(this, "index", Blockly.Arduino.ORDER_ATOMIC) || '1';

        var code = `(sentry2.GetValue(${dropdown_vision_obj},kLabel,${input_index})==${dropdown_vision_card_obj})`;

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.Sentry2DetectedBlob = Blockly.Arduino.Sentry2DetectedColor;
    Blockly.Arduino.Sentry2DetectedCard = Blockly.Arduino.Sentry2DetectedColor;
    Blockly.Arduino.Sentry2Detected20Class = Blockly.Arduino.Sentry2DetectedColor;

    return Blockly;
}

exports = addGenerator;
