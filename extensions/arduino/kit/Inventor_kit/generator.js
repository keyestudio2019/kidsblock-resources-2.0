/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    //定义变量
    Blockly.Arduino.KS_variables_declare = function() {
        var type = this.getFieldValue('TYPE');
        var VARIABLES_TYPE = this.getFieldValue('variables_type');
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var value = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ASSIGNMENT) || ' ';
        value = value.replace(/\"/g,'');

        let code ='';
        //code = type + ' ' + name + ' = '+value+';\n';
        if(VARIABLES_TYPE == 'global_variate')
        {
            if(type == 'String')
            {
                Blockly.Arduino.definitions_['var_declare' + name] =  type + ' ' + name + ' = "'+value+'";\n';
            }
            else
            {
                Blockly.Arduino.definitions_['var_declare' + name] =  type + ' ' + name + ' = '+value+';\n';
            }
        }
          
        else
        {
            if(type == 'String')
            {
                code = type + ' ' + name + ' = "'+value+'";\n';
            }
            else
            {
                code = type + ' ' + name + ' = '+value+';\n';
            }
          
        }

        return code;
    };
    //变量get
    Blockly.Arduino.KS_variables_get = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        code = name;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
        //return [code, Blockly.Arduino.ORDER_NONE];
    };
    //变量set
    Blockly.Arduino.KS_variables_set = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var value = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        value = value.replace(/\"/g,'');
        code = name+'\='+value+';\n';
        return code;
    };

    //字符串变量set
    Blockly.Arduino.KS_variables_stringSet = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        var value = Blockly.Arduino.valueToCode(this, 'VALUE',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        code = name+'\='+value+';\n';
        return code;
    };
    //变量++--
    Blockly.Arduino.KS_variables_change = function() {
        var type = this.getFieldValue('TYPE');
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        code = name+type+';\n';
        return code;
    };

    //文本char
    Blockly.Arduino.KS_CHAR = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        return [`\'${name}\'`, Blockly.Arduino.ORDER_ATOMIC];
    };

    //文本string
    Blockly.Arduino.KS_STRING = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||" " ;
        name = name.replace(/\"/g,'');
        return [`\"${name}\"`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.KS_data = function() {
        var name = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        name = name.replace(/\"/g,'');
        code = name;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
        //return [code, Blockly.Arduino.ORDER_NONE];
    };
   
    //逻辑比较
    Blockly.Arduino.KS_judge = function() {
        var val1 = Blockly.Arduino.valueToCode(this, 'VALUE1',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        val1 = val1.replace(/\"/g,'');
        var val2 = Blockly.Arduino.valueToCode(this, 'VALUE2',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        val2 = val2.replace(/\"/g,'');
        var judge = this.getFieldValue('judge');
        return [`${val1} ${judge} ${val2}`, Blockly.Arduino.ORDER_ATOMIC];
    }; 

//LED 

    Blockly.Arduino.LED_setLEDState = function (block) {
        //const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('pin');
        const state = this.getFieldValue('state');

        Blockly.Arduino.setups_.Led_init = `pinMode(${pin}, OUTPUT);`;

        return `digitalWrite(${pin}, ${state});\n`;
};
Blockly.Arduino.led_analog = function (block) {
    const pin = block.getFieldValue('PIN');

    const val = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
   

    Blockly.Arduino.setups_[`led_s`] = 'pinMode('+pin+', OUTPUT);\n';
    return 'analogWrite('+pin+','+val+');\n';
};



//active buzzer

Blockly.Arduino.ATbuzzerState = function (block) {
    //const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
    const pin = block.getFieldValue('pin');
    const state = this.getFieldValue('state');

    Blockly.Arduino.setups_.relay_init = `pinMode(${pin}, OUTPUT);`;

    return `digitalWrite(${pin}, ${state});\n`;
};

  //buzzer
  
    Blockly.Arduino.buzzer_tone = function (block) {
        const pin = block.getFieldValue('PIN');
        const fre = this.getFieldValue('fre');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'tone('+pin+', '+fre+');\n';
    };

    Blockly.Arduino.buzzer_tone_d = function (block) {
        const pin = block.getFieldValue('PIN');
        const fre = this.getFieldValue('fre');
        const dur = this.getFieldValue('dur');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'tone('+pin+', '+fre+');\ndelay('+dur+');\n';
    };

    Blockly.Arduino.buzzer_music = function (block) {
        const pin = block.getFieldValue('PIN');
        const mus = this.getFieldValue('mus');
        Blockly.Arduino.includes_.include_music_init = `#include<music.h>\n`;
        Blockly.Arduino.definitions_[`music_${pin}`] = 'music Music('+pin+');';

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return ''+mus+'\n';
    };

    Blockly.Arduino.buzzer_notone = function (block) {
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'noTone('+pin+');\n';
    };
//button

Blockly.Arduino['Button_readState'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "(digitalRead(" + arg0 + ")==0)";
    // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_.Button_init = `pinMode(${arg0}, INPUT);`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Button_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "digitalRead(" + arg0 + ")";
    Blockly.Arduino.setups_.Button_init = `pinMode(${arg0}, INPUT);`;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//PIR
Blockly.Arduino['pir_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "digitalRead(" + arg0 + ")";
    Blockly.Arduino.setups_.pir_init = `pinMode(${arg0}, INPUT);`;

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//light
Blockly.Arduino['lightSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//POT
Blockly.Arduino['PotSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//SOUND
Blockly.Arduino['SoundSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//HC-SR04

Blockly.Arduino.hc_sr04_read_distance = function (block) {

    const trigPin = block.getFieldValue('trig_pin');
    const echoPin = block.getFieldValue('echo_pin');
    const unit = block.getFieldValue('unit');

    Blockly.Arduino.includes_.include_hc_sr04_read = `#include <Ultrasonic.h>`;
    Blockly.Arduino.definitions_[`hc_sr04_read${trigPin}${echoPin}`] =
        `Ultrasonic ultrasonic_${trigPin}_${echoPin}(${trigPin}, ${echoPin});`;

    return [`ultrasonic_${trigPin}_${echoPin}.read(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
};

//DHT11

Blockly.Arduino.dht_init = function (block) {
    const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    const pin = block.getFieldValue('PIN');
    const mode = this.getFieldValue('MODE');

    Blockly.Arduino.includes_.dht_init = `#include <DHT.h>`;
    Blockly.Arduino.definitions_[`dht_init_${no}`] = `DHT dht_${no}(${pin}, ${mode});`;
    return '';
};

Blockly.Arduino.dht_readHumidity = function (block) {
    const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    return [`dht_${no}.readHumidity()`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.dht_readTemperature = function (block) {
    const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
    const unit = this.getFieldValue('UNIT');
    return [`dht_${no}.readTemperature(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
};

//servo
    Blockly.Arduino.ks_servo_angle = function (block) {
        const pin = block.getFieldValue('pin');
        const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.include_servo_init = '#include <Servo.h>\n';
        Blockly.Arduino.definitions_[`servo_${pin}`] = 'Servo servo_'+pin+';\n';
        Blockly.Arduino.setups_[`servo_init_${pin}`] = 'servo_'+pin+'.attach('+pin+');';
        return 'servo_'+pin+'.write('+angle+');\ndelay('+time+');\n';
    };

    Blockly.Arduino.ks_servo_read = function (block) {
        const pin = block.getFieldValue('pin');

        Blockly.Arduino.includes_.include_servo_init = '#include <Servo.h>\n';
        Blockly.Arduino.definitions_[`servo_${pin}`] = 'Servo servo_'+pin+';\n';
        Blockly.Arduino.setups_[`servo_init_${pin}`] = 'servo_'+pin+'.attach('+pin+');';

        return ['servo_'+pin+'.read()', Blockly.Arduino.ORDER_ATOMIC];
    };



//WS2812RGB

Blockly.Arduino.ws2812b_init = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    // console.log("block:", block.getField('PIN'));
    // console.log("block:", block.getField('PIN').text_);
    const pin = block.getFieldValue('PIN');
    const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.begin(${pin}, ${num});\n`;
};

Blockly.Arduino.ws2812b_brightnessNumber = function (block) {
    const num = block.getFieldValue('NUM');

    return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ws2812b_setBrightness = function (block) {
    // const pin = block.getFieldValue('PIN');
    const text = block.getField('PIN').text_.slice(1);
    const brightness = Blockly.Arduino.valueToCode(block, 'BRIGHTNESS', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.setBrightness(${brightness});\n`;
};

Blockly.Arduino.ws2812b_clear = function (block) {
    // const pin = block.getFieldValue('PIN');
    const text = block.getField('PIN').text_.slice(1);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.clear();\n`;
};

Blockly.Arduino.ws2812b_setRangeColor = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    const start = Blockly.Arduino.valueToCode(block, 'START', Blockly.Arduino.ORDER_ATOMIC);
    const end = Blockly.Arduino.valueToCode(block, 'END', Blockly.Arduino.ORDER_ATOMIC);
    const color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.setRangeColor(${start}, ${end}, ${color});\n`;
};

Blockly.Arduino.ws2812b_rgbToColor = function (block) {
    const red = Blockly.Arduino.valueToCode(block, 'RED', Blockly.Arduino.ORDER_ATOMIC);
    const green = Blockly.Arduino.valueToCode(block, 'GREEN', Blockly.Arduino.ORDER_ATOMIC);
    const blue = Blockly.Arduino.valueToCode(block, 'BLUE', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_.rgbToColor = `\nuint32_t rgbToColor(uint8_t r, uint8_t g, uint8_t b)\n{\n  return (uint32_t)((((uint32_t)r<<16) | ((uint32_t)g<<8)) | (uint32_t)b);\n}`;

    // return `rgbToColor(round(${red}), round(${green}), round(${blue}))`;
    return [`rgbToColor(round(${red}), round(${green}), round(${blue}))`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ws2812b_showRainbow = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    const num1 = Blockly.Arduino.valueToCode(block, 'NUM1', Blockly.Arduino.ORDER_ATOMIC);
    const num2 = Blockly.Arduino.valueToCode(block, 'NUM2', Blockly.Arduino.ORDER_ATOMIC);
    const col1 = Blockly.Arduino.valueToCode(block, 'COR1', Blockly.Arduino.ORDER_ATOMIC);
    const col2 = Blockly.Arduino.valueToCode(block, 'COR2', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.showRainbow(${num1}, ${num2}, ${col1}, ${col2});\n`;
};

Blockly.Arduino.ws2812b_shift = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.shift(${num});\n`;
};

Blockly.Arduino.ws2812b_rotate = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.rotate(${num});\n`;
};

Blockly.Arduino.ws2812b_showBarGraph = function (block) {
    const text = block.getField('PIN').text_.slice(1);
    const num1 = Blockly.Arduino.valueToCode(block, 'NUM1', Blockly.Arduino.ORDER_ATOMIC);
    const num2 = Blockly.Arduino.valueToCode(block, 'NUM2', Blockly.Arduino.ORDER_ATOMIC);
    const col1 = Blockly.Arduino.valueToCode(block, 'VAL1', Blockly.Arduino.ORDER_ATOMIC);
    const col2 = Blockly.Arduino.valueToCode(block, 'VAL2', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.includes_.ws2812b_init = `#include <NeoPixel.h>`;
    Blockly.Arduino.definitions_[`ws2812b_init_${text}`] = `NeoPixel neoPixel_${text};`;

    return `neoPixel_${text}.showBarGraph(${num1}, ${num2}, ${col1}, ${col2});\n`;
};

//tm1650

Blockly.Arduino.tm1650_string = function (block) {
    const tm1650str = Blockly.Arduino.valueToCode(block, 'tube_string', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.includes_.include_tm1650_init = `#include <Wire.h>\n#include <TM1650.h>\n`;
    Blockly.Arduino.definitions_[`tm1650_var`] = `TM1650 tm_4display;\n`;
    Blockly.Arduino.setups_['tm1650_setup'] = 'Wire.begin();\n  tm_4display.init();\n';
    return 'tm_4display.displayString('+tm1650str+');\n';
};

Blockly.Arduino.tm1650_dot = function (block) {
    const dot = this.getFieldValue('dot');
    const dot_state = this.getFieldValue('state');
    Blockly.Arduino.includes_.include_tm1650_init = `#include <Wire.h>\n#include <TM1650.h>\n`;
    Blockly.Arduino.definitions_[`tm1650_var`] = `TM1650 tm_4display;\n`;
    Blockly.Arduino.setups_['tm1650_setup'] = 'Wire.begin();\ntm_4display.init();\n';
    return 'tm_4display.setDot('+dot+','+dot_state+');\n';
};

Blockly.Arduino.tm1650_state = function (block) {
    const state = this.getFieldValue('state');
    Blockly.Arduino.includes_.include_tm1650_init = `#include <Wire.h>\n#include <TM1650.h>\n`;
    Blockly.Arduino.definitions_[`tm1650_var`] = `TM1650 tm_4display;\n`;
    Blockly.Arduino.setups_['tm1650_setup'] = 'Wire.begin();\n  tm_4display.init();\n';
    return ''+state+'\n';
};

// 1602 LCD
    Blockly.Arduino.lcd_init = function (block) {
        const addr = block.getFieldValue('ADDR');

        Blockly.Arduino.includes_.lcd_init = `#include <Wire.h>\n#include <LiquidCrystal_I2C.h>`;
        Blockly.Arduino.definitions_.lcd_init = `LiquidCrystal_I2C lcd(${addr}, 16, 2);`;

        return `lcd.begin();\n`;
    };

    Blockly.Arduino.lcd_setCursorPosition = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);

        return `lcd.setCursor(${x}, ${y});\n`;
    };

    Blockly.Arduino.lcd_print = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `lcd.print(${data});\n`;
    };

    Blockly.Arduino.lcd_clear = function () {
        return `lcd.clear();\n`;
    };

    Blockly.Arduino.lcd_setBackLight = function (block) {
        const state = block.getFieldValue('STATE');

        if (state === 'on') {
            return `lcd.backlight();\n`;
        }
        return `lcd.noBacklight();\n`;
    };

    Blockly.Arduino.lcd_setCursorStyle = function (block) {
        const state = block.getFieldValue('STATE');
        const style = block.getFieldValue('STYLE');

        let code = '';

        if (state === 'display') {
            code += `lcd.cursor();\n`;
        } else {
            code += `lcd.noCursor();\n`;
        }

        if (style === 'blink') {
            code += `lcd.blink();\n`;
        } else {
            code += `lcd.noBlink();\n`;
        }

        return code;
    };

    // Matirx

    Blockly.Arduino.MatirxDisplay_init = function (block) {
        const cs = block.getFieldValue('CS');

        Blockly.Arduino.includes_.MatirxDisplay_init = `#include <SPI.h>\n#include <Adafruit_GFX.h>\n#include <Max72xxPanel.h>`;
        Blockly.Arduino.definitions_.MatirxDisplay_init = `Max72xxPanel Matrix = Max72xxPanel(${cs}, 1, 1);\n`+
        'uint8_t  LEDArray[8];';

        return ``;
    };


    Blockly.Arduino.matrix_display_graph = function (block) {

        var varName = Blockly.Arduino.valueToCode(this, 'MATRIX_EIGHT', Blockly.Arduino.ORDER_ASSIGNMENT);
        var a = new Array();
        for (var i = 0; i < 8; i++) {
          a[i] = new Array();
          for (var j = 0; j < 8; j++) {
            a[i][j] = varName[i*8+j];
          }
        }
        var code = '{';
        for (var i = 0; i < 8; i++) {
          var tmp = ""
          for (var j = 0; j < 8; j++) {
            tmp += a[i][j];
          }
          tmp = (parseInt(tmp, 2)).toString(16)
          if (tmp.length == 1) tmp = "0" + tmp;
          code += '0x' + tmp + ((i != 8) ? ',' : '');
        }
        code += '};';
    
        const image = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        matrix_image= image.replace(/\"/g,'');
        const no = Blockly.Arduino.valueToCode(block, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC);

       
        Blockly.Arduino.definitions_[`matrix_${no}`] = 'uint8_t '+matrix_image+'[8]='+code+''

    
        Blockly.Arduino.definitions_[`1matrix_display`] = 'void matrix_display(uint8_t *led_array)'+
            '{\n'+
            '  for(int i=0; i<8; i++)\n'+
            '  {\n'+
            '    LEDArray[i]=led_array[i];\n'+
            '    for(int j=7; j>=0; j--)\n'+
            '    {\n'+
            '      if((LEDArray[i]&0x01)>0)\n'+
            '      Matrix.drawPixel(7-j, 7-i,1);\n'+
            '      LEDArray[i] = LEDArray[i]>>1;\n'+
            '    }\n'+
            '  }\n'+
            '}\n';
    
            return 'matrix_display('+matrix_image+');\n';
        };

    Blockly.Arduino.MatirxDisplay_drawPixel = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `Matrix.drawPixel(${x}, ${y}, ${colour});\n`;
    };

    Blockly.Arduino.MatirxDisplay_drawLine = function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `Matrix.drawLine(${x0}, ${y0}, ${x1}, ${y1},${colour});\n`;
    };

    Blockly.Arduino.MatirxDisplay_showChar = function (block) {
        const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const colour = block.getFieldValue('COLOUR');

        return `Matrix.drawChar(0, 0, '${text}', ${colour}, !${colour}, 1);\n`;
    };

    Blockly.Arduino.MatirxDisplay_showNumber = function (block) {
        const number = Blockly.Arduino.valueToCode(block, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `Matrix.drawChar(0, 0, ${number} + '0', ${colour}, !${colour}, 1);\n`;
    };

    Blockly.Arduino.MatirxDisplay_scrollshow = function (block) {
        const message = Blockly.Arduino.valueToCode(block, 'MESSAGE', Blockly.Arduino.ORDER_ATOMIC);
        
        const speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

        return `Matrix.scrollMessage(${message},${speed});\n`;
    };


      Blockly.Arduino.MatirxDisplay_face = function (block) {
        Blockly.Arduino.definitions_[`1matrix_face`] = 
        'uint8_t matrix_smile[8]={0x00,0x18,0x24,0x00,0x00,0xa5,0xa5,0x42};\n'+
        'uint8_t matrix_front[8]={0x18,0x18,0x18,0x18,0xdb,0x7e,0x3c,0x18};\n'+
        'uint8_t matrix_back[8]={0x18,0x3c,0x7e,0xdb,0x18,0x18,0x18,0x18};\n'+
        'uint8_t matrix_left[8]={0x10,0x30,0x60,0xff,0xff,0x60,0x30,0x10};\n'+
        'uint8_t matrix_right[8]={0x08,0x0c,0x06,0xff,0xff,0x06,0x0c,0x08};\n'+
        'uint8_t matrix_stop[8]={0x00,0x7e,0x42,0x5a,0x5a,0x42,0x7e,0x00};\n'+
        'uint8_t matrix_squinting[8]={0x00,0x00,0x3c,0x81,0x42,0x24,0x42,0x81};\n'+
        'uint8_t matrix_speechless[8]={0x00,0x3c,0x24,0x3c,0x00,0x00,0xe7,0x00};\n'+
        'uint8_t matrix_heart[8]={0x18,0x3c,0x7e,0xff,0xff,0xff,0xe7,0x42};\n'+
        'uint8_t matrix_clear[8]={0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n';

        Blockly.Arduino.definitions_[`2matrix_display`] = 'void matrix_display(uint8_t *led_array)'+
        '{\n'+
        '  for(int i=0; i<8; i++)\n'+
        '  {\n'+
        '    LEDArray[i]=led_array[i];\n'+
        '    for(int j=7; j>=0; j--)\n'+
        '    {\n'+
        '      if((LEDArray[i]&0x01)>0)\n'+
        '      Matrix.drawPixel(j, i,1);\n'+
        '      LEDArray[i] = LEDArray[i]>>1;\n'+
        '    }\n'+
        '  }\n'+
        '}\n';

        const matrix_face = this.getFieldValue('FACE');

        return 'matrix_display('+matrix_face+');\n';
    };




    Blockly.Arduino.MatirxDisplay_fill = function (block) {
        const colour = block.getFieldValue('COLOUR');

        return `Matrix.fillScreen(${colour});\n`;
    };

    Blockly.Arduino.MatirxDisplay_refresh = function () {
        return `Matrix.write();\n`;
    };

    Blockly.Arduino.MatirxDisplay_clean = function () {
        return `Matrix.fillScreen(LOW);\n`;
    };

    Blockly.Arduino.MatirxDisplay_setBrightness = function (block) {
        const brt = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        return `Matrix.setIntensity(${brt});\n`;
    };

    Blockly.Arduino.MatirxDisplay_brightnessNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.MatirxDisplay_setRotation = function (block) {
        const rotation = block.getFieldValue('ROTATION');

        return `Matrix.setRotation(${rotation});\n`;
    };

//IR

Blockly.Arduino.ir_init = function (block) {
    const pin = block.getFieldValue('pin');

    Blockly.Arduino.includes_.ir_init = '#include <IRremote.h>';
    Blockly.Arduino.definitions_.ir_init = 'long ir_item;\nIRrecv irrecv('+pin+');\ndecode_results results;\n';
    Blockly.Arduino.setups_['irrecv'] = 'irrecv.enableIRIn();\n';

    return ``;
};

Blockly.Arduino.ir_data = function () {
    return [`irrecv.decode(&results)`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ir_read = function () {
    return [`results.value`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.ir_refresh = function () {
    return 'irrecv.resume();\n';
};
   
    return Blockly;
}

exports = addGenerator;