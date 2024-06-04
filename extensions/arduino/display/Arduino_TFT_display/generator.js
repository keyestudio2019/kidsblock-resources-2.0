/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {

Blockly.Arduino.Arduino_TFT_begin1 = function() {
  var dropdown_st7735_tab = this.getFieldValue('TFT_tab');
  var value_st7735_rst = this.getFieldValue('RST');
  var value_st7735_cs = this.getFieldValue('CS');
  var value_st7735_dc = this.getFieldValue('DC');
  var value_st7735_mosi = this.getFieldValue('MOSI');
  var value_st7735_sclk = this.getFieldValue('SCLK');
  var st7789_select = dropdown_st7735_tab.indexOf(",") != -1 ? 'ST7789':'ST7735';
  st7789_select = dropdown_st7735_tab.indexOf("ST7796") != -1 ? 'ST7796':st7789_select;
  Blockly.Arduino.includes_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
  Blockly.Arduino.includes_['include_Adafruit_'+st7789_select] = '#include <Adafruit_'+st7789_select+'.h>';
  Blockly.Arduino.includes_['include_SPI'] = '#include <SPI.h>';

  Blockly.Arduino.definitions_['var_declare_tft'] = 'Adafruit_'+st7789_select+' tft = Adafruit_'+st7789_select+'('+value_st7735_cs+', '+value_st7735_dc+', '+value_st7735_mosi+', '+value_st7735_sclk+', '+value_st7735_rst+');';

  Blockly.Arduino.setups_['setup_tft'] = 'tft.init'+(st7789_select == 'ST7735'? 'R':'')+'('+(st7789_select == 'ST7796'? '':dropdown_st7735_tab)+');';

  var code = '';
  return code;
};

Blockly.Arduino.Arduino_TFT_begin2 = function() {
  var dropdown_st7735_tab = this.getFieldValue('TFT_tab');
  var value_st7735_rst = this.getFieldValue('RST');
  var value_st7735_cs = this.getFieldValue('CS');
  var value_st7735_dc = this.getFieldValue('DC');
  var st7789_select = dropdown_st7735_tab.indexOf(",") != -1 ? 'ST7789':'ST7735';
  st7789_select = dropdown_st7735_tab.indexOf("ST7796") != -1 ? 'ST7796':st7789_select;
  Blockly.Arduino.includes_['include_Adafruit_GFX'] = '#include <Adafruit_GFX.h>';
  Blockly.Arduino.includes_['include_Adafruit_'+st7789_select] = '#include <Adafruit_'+st7789_select+'.h>';
  Blockly.Arduino.includes_['include_SPI'] = '#include <SPI.h>';

  Blockly.Arduino.definitions_['var_declare_tft'] = 'Adafruit_'+st7789_select+' tft = Adafruit_'+st7789_select+'('+value_st7735_cs+', '+value_st7735_dc+', '+value_st7735_rst+');';

  Blockly.Arduino.setups_['setup_tft'] = 'tft.init'+(st7789_select == 'ST7735'? 'R':'')+'('+(st7789_select == 'ST7796'? '':dropdown_st7735_tab)+');';

  var code = '';
  return code;
};

Blockly.Arduino.Arduino_TFT_invertDisplay = function() {
  var invert = this.getFieldValue('invert');
  var code = `tft.invertDisplay(${invert});\n`;
  return code;
};

//屏幕背光初始化引脚
Blockly.Arduino.Arduino_TFT_backlight = function() {
  var value_st7735_backlight_pin = this.getFieldValue('pin');
  var value_st7735_backlight_brightness = Blockly.Arduino.valueToCode(this, 'brightness', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'analogWrite('+value_st7735_backlight_pin+', '+value_st7735_backlight_brightness+');\n';
  return code;
};

Blockly.Arduino.Arduino_TFT_setRotation = function() {
  var value_angle = this.getFieldValue('angle');
  var code = 'tft.setRotation('+value_angle+');\n';
  return code;
};

Blockly.Arduino.Arduino_TFT_set_cursor = function() {
  var X = Blockly.Arduino.valueToCode(this, 'set_cursor_x', Blockly.Arduino.ORDER_ATOMIC);
  var Y = Blockly.Arduino.valueToCode(this, 'set_cursor_y', Blockly.Arduino.ORDER_ATOMIC);
  var code = `tft.setCursor(${X}, ${Y});\n`;
  return code;
};

//二维码显示
Blockly.Arduino.Arduino_TFT_qr_code_display = function() {
var text= Blockly.Arduino.valueToCode(this, 'text', Blockly.Arduino.ORDER_ATOMIC);
        var X= Blockly.Arduino.valueToCode(this, 'X', Blockly.Arduino.ORDER_ATOMIC);
        var Y= Blockly.Arduino.valueToCode(this, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        var Zoom= Blockly.Arduino.valueToCode(this, 'Zoom', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_["include_qrcode"] = '#include <qrcode.h>';
        Blockly.Arduino.definitions_['Fast_TFT_qr_code_display'] ='void Fast_TFT_qr_code_display(String strURL, uint8_t x0, uint8_t y0,uint8_t Zoom){\n'
                                    +'char x[500];\n'
                                    +'strURL.toCharArray(x, 500);\n'
                                    +'Serial.println (x);\n'
                                    +'QRCode qrcode;\n'
                                    +'uint8_t qrcodeData[qrcode_getBufferSize(6)];\n'
                                    +'qrcode_initText(&qrcode, qrcodeData, 6, 0, x);\n'
                                    +'Serial.println (qrcode.size);\n'
                                    +'for (uint8_t y = 0; y < qrcode.size; y++) {\n'
                                    +'  for (uint8_t x = 0; x < qrcode.size; x++) {\n'
                                    +'    if (qrcode_getModule(&qrcode, x, y)) {\n'
                                    +'      tft.fillRect(Zoom * x + x0, Zoom * y + y0, Zoom, Zoom, 0x0000);\n'
                                    +'    } else {\n'
                                    +'      tft.fillRect(Zoom * x + x0, Zoom * y + y0, Zoom, Zoom, 0xFFFF);\n'
                                    +'    }\n'
                                    +'  }\n'
                                    +'}\n}';
        var code = `Fast_TFT_qr_code_display(${text},${X},${Y},${Zoom});\n`;
        return code;
    };



Blockly.Arduino.Arduino_TFT_setTextSize = function() {
  var size = this.getFieldValue('size');
  var code = `tft.setTextSize(${size});\n`;
  return code;
};

Blockly.Arduino.Arduino_TFT_set_screen_color = function() {
  var choose_type = this.getFieldValue('choose_type');
  var set_text_color_data= Blockly.Arduino.valueToCode(this, 'set_text_color_data', Blockly.Arduino.ORDER_ATOMIC);
  var code = `tft.${choose_type}(${set_text_color_data});\n`;
  return code;
};

Blockly.Arduino.Arduino_TFT_set_text_background_color = function() {
  var set_text_color_data= Blockly.Arduino.valueToCode(this, 'set_text_color_data', Blockly.Arduino.ORDER_ATOMIC);
  var set_text_color_background= Blockly.Arduino.valueToCode(this, 'set_text_color_background', Blockly.Arduino.ORDER_ATOMIC);
  var code = `tft.setTextColor(${set_text_color_data}, ${set_text_color_background});\n`;
  return code;
};

//显示英文
Blockly.Arduino.Arduino_TFT_show_english = function() {
  var value_set_text_x = Blockly.Arduino.valueToCode(this, 'set_text_x', Blockly.Arduino.ORDER_ATOMIC);
  var value_set_text_y = Blockly.Arduino.valueToCode(this, 'set_text_y', Blockly.Arduino.ORDER_ATOMIC);
  var value_set_text_color = Blockly.Arduino.valueToCode(this, 'set_text_color', Blockly.Arduino.ORDER_ATOMIC);
  var value_set_background_color = Blockly.Arduino.valueToCode(this, 'set_background_color', Blockly.Arduino.ORDER_ATOMIC);
  var value_set_text_data = Blockly.Arduino.valueToCode(this, 'set_text_data', Blockly.Arduino.ORDER_ATOMIC);
  var value_size = this.getFieldValue('size');
  var checkbox_set_text_linebreak = this.getFieldValue('set_text_linebreak') == 'TRUE';
    if(checkbox_set_text_linebreak)
    {
      checkbox_set_text_linebreak = 'println';
    }
    else
    {
      checkbox_set_text_linebreak = 'print';
    }
  var code = 'tft.setCursor('+value_set_text_x+', '+value_set_text_y+');\n'
              +'tft.setTextColor('+value_set_text_color+', '+value_set_background_color+');\n'
              +'tft.setTextSize('+value_size+');\n'
              +'tft.'+checkbox_set_text_linebreak+'('+value_set_text_data+');\n';
  return code;
};


function string_Bin_to_Hex(outstr_select) {
  switch (outstr_select) {
    case "0000": {
      outstr_select = "0";
      break;
    }
    case "0001": {
      outstr_select = "1";
      break;
    }
    case "0010": {
      outstr_select = "2";
      break;
    }
    case "0011": {
      outstr_select = "3";
      break;
    }
    case "0100": {
      outstr_select = "4";
      break;
    }
    case "0101": {
      outstr_select = "5";
      break;
    }
    case "0110": {
      outstr_select = "6";
      break;
    }
    case "0111": {
      outstr_select = "7";
      break;
    }
    case "1000": {
      outstr_select = "8";
      break;
    }
    case "1001": {
      outstr_select = "9";
      break;
    }
    case "1010": {
      outstr_select = "A";
      break;
    }
    case "1011": {
      outstr_select = "B";
      break;
    }
    case "1100": {
      outstr_select = "C";
      break;
    }
    case "1101": {
      outstr_select = "D";
      break;
    }
    case "1110": {
      outstr_select = "E";
      break;
    }
    case "1111": {
      outstr_select = "F";
      break;
    }
  }
  return outstr_select;
}

function string_Hex_to_Bin(outstr_select) {
  switch (outstr_select) {
    case "0": {
      outstr_select = "0000";
      break;
    }
    case "1": {
      outstr_select = "0001";
      break;
    }
    case "2": {
      outstr_select = "0010";
      break;
    }
    case "3": {
      outstr_select = "0011";
      break;
    }
    case "4": {
      outstr_select = "0100";
      break;
    }
    case "5": {
      outstr_select = "0101";
      break;
    }
    case "6": {
      outstr_select = "0110";
      break;
    }
    case "7": {
      outstr_select = "0111";
      break;
    }
    case "8": {
      outstr_select = "1000";
      break;
    }
    case "9": {
      outstr_select = "1001";
      break;
    }
    case "a": {
      outstr_select = "1010";
      break;
    }
    case "b": {
      outstr_select = "1011";
      break;
    }
    case "c": {
      outstr_select = "1100";
      break;
    }
    case "d": {
      outstr_select = "1101";
      break;
    }
    case "e": {
      outstr_select = "1110";
      break;
    }
    case "f": {
      outstr_select = "1111";
      break;
    }
  }
  return outstr_select;
}


//RGB颜色
Blockly.Arduino.color_rgb565 = function () {
  var colour_tft_color_type =Blockly.Arduino.valueToCode(this, 'color',Blockly.Arduino.ORDER_ATOMIC);
  var str_1 = colour_tft_color_type.charAt(1);
  var str_2 = colour_tft_color_type.charAt(2);
  var str_3 = colour_tft_color_type.charAt(3);
  var str_4 = colour_tft_color_type.charAt(4);
  var str_5 = colour_tft_color_type.charAt(5);
  var str_6 = colour_tft_color_type.charAt(6);

  str_1 = string_Hex_to_Bin(str_1);
  str_2 = string_Hex_to_Bin(str_2);
  str_3 = string_Hex_to_Bin(str_3);
  str_4 = string_Hex_to_Bin(str_4);
  str_5 = string_Hex_to_Bin(str_5);
  str_6 = string_Hex_to_Bin(str_6);

  str_2 = str_2.charAt(0);
  str_4 = str_4.substring(0, 2);
  str_6 = str_6.charAt(0);

  var str = str_1 + str_2 + str_3 + str_4 + str_5 + str_6;
  var str1 = "";
  str1 =
    "0x" +
    string_Bin_to_Hex(str.substring(0, 4)) +
    string_Bin_to_Hex(str.substring(4, 8)) +
    string_Bin_to_Hex(str.substring(8, 12)) +
    string_Bin_to_Hex(str.substring(12, 16));
  var code = str1;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Arduino_TFT_show_text = function() {
  var content = Blockly.Arduino.valueToCode(this, 'content', Blockly.Arduino.ORDER_ATOMIC);
  var code = `tft.print(${content});\n`;
  return code;
};

Blockly.Arduino.Arduino_TFT_show_num = function() {
  var choose_type = this.getFieldValue('choose_type');
  var type = this.getFieldValue('type');
  var NUM = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code = `tft.${choose_type}(${NUM},${type});\n`;
  return code;
};

  

Blockly.Arduino.Fast_TFT_draw_pixel = function() {
  var value_st7735_draw_pixel_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_x', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_pixel_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_y', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_pixel_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tft.drawPixel('+value_st7735_draw_pixel_x+', '+value_st7735_draw_pixel_y+', '+value_st7735_draw_pixel_color+');\n';
  return code;
};

Blockly.Arduino.Fast_TFT_draw_line = function() {
  var value_st7735_draw_pixel_start_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_x', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_pixel_start_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_y', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_pixel_end_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_end_x', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_pixel_end_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_end_y', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_pixel_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tft.drawLine('+value_st7735_draw_pixel_start_x+', '+value_st7735_draw_pixel_start_y+', '+value_st7735_draw_pixel_end_x+', '+value_st7735_draw_pixel_end_y+', '+value_st7735_draw_pixel_color+');\n';
  return code;
};

//TFT长度&角度画线20200810
Blockly.Arduino.Fast_TFT_draw_angle_line = function() {
  var value_st7735_draw_angle_line_x1 = Blockly.Arduino.valueToCode(this, 'st7735_draw_angle_line_x1', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_angle_line_y1 = Blockly.Arduino.valueToCode(this, 'st7735_draw_angle_line_y1', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_angle_line_length = Blockly.Arduino.valueToCode(this, 'st7735_draw_angle_line_length', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_angle_line_angle = Blockly.Arduino.valueToCode(this, 'st7735_draw_angle_line_angle', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_angle_line_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_angle_line_color', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['st7735_draw_angle_line'] = 'int line_x1,line_y1,line_x2,line_y2,line_Angle,line_length;';
  var code = 'line_x1 = ' +  value_st7735_draw_angle_line_x1 + ';\n'
           + 'line_y1 = ' +  value_st7735_draw_angle_line_y1 + ';\n'
           + 'line_x2 = 0;\n'
           + 'line_y2 = 0;\n'
           + 'line_Angle = ' +  value_st7735_draw_angle_line_angle + ' + 90;\n'
           + 'line_length = ' +  value_st7735_draw_angle_line_length + ';\n' 
           + 'line_x2 = line_x1 + line_length * sin(line_Angle / 180.0 * 3.14159);\n'  
           + 'line_y2 = line_y1 + line_length * cos(line_Angle / 180.0 * 3.14159);\n' 
           + 'tft.drawLine(line_x1, line_y1, line_x2, line_y2, '  + value_st7735_draw_angle_line_color +');\n';    
  return code;
};

Blockly.Arduino.Fast_TFT_draw_line1 = function() {
  var dropdown_st7735_draw_line1_type = this.getFieldValue('st7735_draw_line1_type');
  var value_st7735_draw_pixel_start_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_x', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_pixel_start_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_start_y', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_pixel_length = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_length', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_pixel_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_pixel_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tft.'+dropdown_st7735_draw_line1_type+'('+value_st7735_draw_pixel_start_x+', '+value_st7735_draw_pixel_start_y+', '+value_st7735_draw_pixel_length+', '+value_st7735_draw_pixel_color+');\n';
  return code;
};

Blockly.Arduino.Fast_TFT_draw_rect_change = function() {
  var dropdown_st7735_draw_rect_type_1 = this.getFieldValue('st7735_draw_rect_type_1');
  var value_st7735_draw_rect_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_x', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_rect_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_y', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_rect_width = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_width', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_rect_hight = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_hight', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_rect_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tft.' + dropdown_st7735_draw_rect_type_1 + 'Rect(' + value_st7735_draw_rect_x + ', ' + value_st7735_draw_rect_y + ', ' + value_st7735_draw_rect_width + ', ' + value_st7735_draw_rect_hight + ', ' + value_st7735_draw_rect_color + ');\n';
  return code;
};

Blockly.Arduino.Fast_TFT_draw_Roundrect_change = function() {
  var dropdown_st7735_draw_rect_type_1 = this.getFieldValue('st7735_draw_rect_type_1');
  var value_st7735_draw_rect_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_x', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_rect_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_y', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_rect_width = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_width', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_rect_hight = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_hight', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_rect_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_radius', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_rect_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_rect_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tft.' + dropdown_st7735_draw_rect_type_1 + 'RoundRect(' + value_st7735_draw_rect_x + ', ' + value_st7735_draw_rect_y + ', ' + value_st7735_draw_rect_width + ', ' + value_st7735_draw_rect_hight + ', '+ value_st7735_draw_rect_radius + ', ' + value_st7735_draw_rect_color + ');\n';
  return code;
};

Blockly.Arduino.Fast_TFT_draw_circle = function() {
  var dropdown_oled_draw_circle_type = this.getFieldValue('oled_draw_circle_type');
  var value_st7735_draw_circle_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_x', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_y', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_radius', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tft.'+dropdown_oled_draw_circle_type+'Circle('+value_st7735_draw_circle_x+', '+value_st7735_draw_circle_y+', '+value_st7735_draw_circle_radius+', '+value_st7735_draw_circle_color+');\n';
  return code;
};

Blockly.Arduino.Fast_TFT_draw_CircleHelper = function() {
  var value_st7735_draw_circle_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_x', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_y', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_radius', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_cornername = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_cornername', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tft.startWrite('+');\ntft.drawCircleHelper('+value_st7735_draw_circle_x+', '+value_st7735_draw_circle_y+', '+value_st7735_draw_circle_radius+', '+value_st7735_draw_circle_cornername+', '+value_st7735_draw_circle_color+');\ntft.endWrite('+');\n';
  return code;
};

Blockly.Arduino.Fast_TFT_draw_CircleHelper_data = function() {
  var checkbox_LEFT_UP = this.getFieldValue('LEFT_UP') == 'TRUE';
  var checkbox_RIGHT_UP = this.getFieldValue('RIGHT_UP') == 'TRUE';
  var checkbox_LEFT_DOWN = this.getFieldValue('LEFT_DOWN') == 'TRUE';
  var checkbox_RIGHT_DOWN = this.getFieldValue('RIGHT_DOWN') == 'TRUE';
  var code = 'B0000'+(checkbox_LEFT_DOWN?'1':'0')+(checkbox_RIGHT_DOWN?'1':'0')+(checkbox_RIGHT_UP?'1':'0')+(checkbox_LEFT_UP?'1':'0');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.Fast_TFT_fill_CircleHelper = function() {
  var value_st7735_draw_circle_x = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_x', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_y = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_y', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_radius = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_radius', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_cornername = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_cornername', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_delta = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_delta', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_circle_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_circle_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tft.startWrite('+');\ntft.fillCircleHelper('+value_st7735_draw_circle_x+', '+value_st7735_draw_circle_y+', '+value_st7735_draw_circle_radius+', '+value_st7735_draw_circle_cornername+', '+value_st7735_draw_circle_delta+', '+value_st7735_draw_circle_color+');\ntft.endWrite('+');\n';
  return code;
};

Blockly.Arduino.Fast_TFT_oled_fill_CircleHelper_data = function() {
  var checkbox_LEFT = this.getFieldValue('LEFT') == 'TRUE';
  var checkbox_RIGHT = this.getFieldValue('RIGHT') == 'TRUE';
  var code = 'B000000'+(checkbox_RIGHT?'1':'0')+(checkbox_LEFT?'1':'0');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.Fast_TFT_draw_triangle = function() {
  var dropdown_st7735_draw_triangle_type = this.getFieldValue('st7735_draw_triangle_type');
  var value_st7735_draw_triangle_x1 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_x1', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_triangle_y1 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_y1', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_triangle_x2 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_x2', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_triangle_y2 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_y2', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_triangle_x3 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_x3', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_triangle_y3 = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_y3', Blockly.Arduino.ORDER_ATOMIC);
  var value_st7735_draw_triangle_color = Blockly.Arduino.valueToCode(this, 'st7735_draw_triangle_color', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'tft.'+dropdown_st7735_draw_triangle_type+'Triangle('+value_st7735_draw_triangle_x1+', '+value_st7735_draw_triangle_y1+', '+value_st7735_draw_triangle_x2+', '+value_st7735_draw_triangle_y2+', '+value_st7735_draw_triangle_x3+', '+value_st7735_draw_triangle_y3+', '+value_st7735_draw_triangle_color+');\n';
  return code;
};

    return Blockly;
}
exports = addGenerator;