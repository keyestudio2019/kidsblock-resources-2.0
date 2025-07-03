/**
 * Sengo2视觉传感器代码生成器
 */

function addGenerator(Blockly) {
    // 初始化Sengo2
    Blockly.Arduino.sengo2_begin = function() {
        const mode = this.getFieldValue('MODE');
        const addr = this.getFieldValue('ADDR');
        
        Blockly.Arduino.definitions_['include_Sentry'] = '#include <Sentry.h>';

        if (mode === 'Wire') {
            Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
            Blockly.Arduino.setups_['setup_Wire'] = 'Wire.begin();\n';
        }

        Blockly.Arduino.definitions_['var_declare_Sengo2'] = `Sengo2 sengo2(${addr});`;
               
        const code = `while (SENTRY_OK != sengo2.begin(&${mode})) {yield();}\n`;
        return code;
    };
    
    // 恢复默认设置
    Blockly.Arduino.sengo2_set_default = function() {
        return `sengo2.SensorSetDefault();\n`;
    };
    
    // 设置白平衡模式
    Blockly.Arduino.sengo2_camera_set_awb = function() {
        const awb = this.getFieldValue('AWB');
        
        return `sengo2.CameraSetAwb(${awb});\n`;
    };
    
    // 设置LED颜色
    Blockly.Arduino.sengo2_led_set_color = function() {
        const detected_color = this.getFieldValue('DETECTED_COLOR');
        const undetected_color = this.getFieldValue('UNDETECTED_COLOR');
        const level = Blockly.Arduino.valueToCode(this, 'LEVAL', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return `sengo2.LedSetColor(${detected_color}, ${undetected_color}, ${level});\n`;
    };
    
    // 设置算法开启/关闭
    Blockly.Arduino.sengo2_vision_set = function() {
        const vision_sta = this.getFieldValue('VISION_STA');
        const vision_type = this.getFieldValue('VISION_TYPE');
        
        if (vision_sta === 'ON') {
            return `sengo2.VisionBegin(${vision_type});\n`;
        } else {
            return `sengo2.VisionEnd(${vision_type});\n`;
        }
    };
    
    // 设置算法参数组数
    Blockly.Arduino.sengo2_vision_set_param_num = function() {
        const vision_type = this.getFieldValue('VISION_TYPE');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return `sengo2.SetParamNum(${vision_type}, ${num});\n`;
    };
    
    // 设置颜色识别参数
    Blockly.Arduino.sengo2_vision_color_param = function() {
        const x = Blockly.Arduino.valueToCode(this, 'XVALUE', Blockly.Arduino.ORDER_ATOMIC) || '50';
        const y = Blockly.Arduino.valueToCode(this, 'YVALUE', Blockly.Arduino.ORDER_ATOMIC) || '50';
        const w = Blockly.Arduino.valueToCode(this, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC) || '3';
        const h = Blockly.Arduino.valueToCode(this, 'HIGHT', Blockly.Arduino.ORDER_ATOMIC) || '4';
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        let code = '';
        Blockly.Arduino.definitions_['param_obj'] = 'sentry_object_t param;\n';
        
        code += `param.x_value = ${x};\n`;
        code += `param.y_value = ${y};\n`;
        code += `param.width = ${w};\n`;
        code += `param.height = ${h};\n`;
        code += `sengo2.SetParam(Sengo2::kVisionColor, &param, ${num});\n`;
        
        return code;
    };
    
    // 设置色块检测参数
    Blockly.Arduino.sengo2_vision_blob_param = function() {
        const w = Blockly.Arduino.valueToCode(this, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC) || '3';
        const h = Blockly.Arduino.valueToCode(this, 'HIGHT', Blockly.Arduino.ORDER_ATOMIC) || '4';
        const color_lable = this.getFieldValue('COLOR_LABLE');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        let code = '';
        Blockly.Arduino.definitions_['param_obj'] = 'sentry_object_t param;\n';
        
        code += `param.width = ${w};\n`;
        code += `param.height = ${h};\n`;
        code += `param.label = ${color_lable};\n`;
        code += `sengo2.SetParam(Sengo2::kVisionBlob, &param, ${num});\n`;
        
        return code;
    };
    
    // 设置通用视觉参数
    Blockly.Arduino.sengo2_vision_general_param = function() {
        const vision_type = this.getFieldValue('VISION_TYPE');
        const x = Blockly.Arduino.valueToCode(this, 'XVALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const y = Blockly.Arduino.valueToCode(this, 'YVALUE', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const w = Blockly.Arduino.valueToCode(this, 'WIDTH', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const h = Blockly.Arduino.valueToCode(this, 'HIGHT', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const label = Blockly.Arduino.valueToCode(this, 'COLOR_LABLE', Blockly.Arduino.ORDER_ATOMIC) || '0';
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        let code = '';
        Blockly.Arduino.definitions_['param_obj'] = 'sentry_object_t param;\n';
        
        code += `param.x_value = ${x};\n`;
        code += `param.y_value = ${y};\n`;
        code += `param.width = ${w};\n`;
        code += `param.height = ${h};\n`;
        code += `param.label = ${label};\n`;
        code += `sengo2.SetParam(${vision_type}, &param, ${num});\n`;
        
        return code;
    };
    
    // 设置色块检测最大数量
    Blockly.Arduino.sengo2_vision_blob_max = function() {
        const mode = Blockly.Arduino.valueToCode(this, 'MODE', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return `sengo2.VisionSetMode(Sengo2::kVisionBlob, ${mode});\n`;
    };
    
    // 设置AprilTag标准
    Blockly.Arduino.sengo2_vision_apriltag_mode = function() {
        const mode = this.getFieldValue('MODE');
        
        return `sengo2.VisionSetMode(Sengo2::kVisionAprilTag, ${mode});\n`;
    };
    
    // 设置线条检测最大数量
    Blockly.Arduino.sengo2_vision_line_max = function() {
        const mode = Blockly.Arduino.valueToCode(this, 'MODE', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return `sengo2.VisionSetMode(Sengo2::kVisionLine, ${mode});\n`;
    };
    
    // 设置其他算法参数
    Blockly.Arduino.sengo2_vision_opera_param = function() {
        const vision_type = this.getFieldValue('VISION_TYPE');
        const color_lable = this.getFieldValue('COLOR_LABLE');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        let code = '';
        Blockly.Arduino.definitions_['param_obj'] = 'sentry_object_t param;\n';
        
        code += `param.label = ${color_lable};\n`;
        code += `sengo2.SetParam(${vision_type}, &param, ${num});\n`;
        
        return code;
    };
    
    // 获取算法结果数量
    Blockly.Arduino.sengo2_vision_get_result = function() {
        const vision_type = this.getFieldValue('VISION_TYPE');
        
        return [`sengo2.GetValue(${vision_type}, kStatus)`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // 获取颜色识别结果
    Blockly.Arduino.sengo2_vision_color_value = function() {
        const obj_info = this.getFieldValue('OBJ_INFO');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return [`sengo2.GetValue(Sengo2::kVisionColor, ${obj_info}, ${num})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // 获取通用算法结果
    Blockly.Arduino.sengo2_vision_get_value = function() {
        const vision_type = this.getFieldValue('VISION_TYPE');
        const obj_info = this.getFieldValue('OBJ_INFO');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return [`sengo2.GetValue(${vision_type}, ${obj_info}, ${num})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // 获取线条检测结果
    Blockly.Arduino.sengo2_vision_line_value = function() {
        const obj_info = this.getFieldValue('OBJ_INFO');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return [`sengo2.GetValue(Sengo2::kVisionLine, ${obj_info}, ${num})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // 获取二维码识别结果
    Blockly.Arduino.sengo2_vision_qrcode_value = function() {
        const obj_info = this.getFieldValue('OBJ_INFO');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return [`sengo2.GetValue(Sengo2::kVisionQrCode, ${obj_info}, ${num})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // 获取二维码字符串结果
    Blockly.Arduino.sengo2_vision_qrcode_string = function() {
        return [`String(sengo2.GetQrCodeValue())`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // 获取自定义值结果
    Blockly.Arduino.sengo2_vision_custom_value = function() {
        const obj_info = this.getFieldValue('OBJ_INFO');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return [`sengo2.GetValue(Sengo2::kVisionCustom, ${obj_info}, ${num})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // 颜色识别布尔值结果
    Blockly.Arduino.sengo2_vision_color_label = function() {
        const color_lable = this.getFieldValue('COLOR_LABLE');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return [`sengo2.GetValue(Sengo2::kVisionColor, kLabel, ${num}) == ${color_lable}`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // 色块检测布尔值结果
    Blockly.Arduino.sengo2_vision_blob_label = function() {
        const color_lable = this.getFieldValue('COLOR_LABLE');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return [`sengo2.GetValue(Sengo2::kVisionBlob, kLabel, ${num}) == ${color_lable}`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // 卡片识别布尔值结果
    Blockly.Arduino.sengo2_vision_card_label = function() {
        const card_lable = this.getFieldValue('CARD_LABLE');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return [`sengo2.GetValue(Sengo2::kVisionCard, kLabel, ${num}) == ${card_lable}`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
    // 20类物体识别布尔值结果
    Blockly.Arduino.sengo2_vision_class20_label = function() {
        const class20_lable = this.getFieldValue('Class20_LABLE');
        const num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC) || '1';
        
        return [`sengo2.GetValue(Sengo2::kVision20Classes, kLabel, ${num}) == ${class20_lable}`, Blockly.Arduino.ORDER_ATOMIC];
    };
    

    return Blockly;
}

exports = addGenerator; 