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

//Relay

Blockly.Arduino.RelayState = function (block) {
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

//UV
Blockly.Arduino['UVSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//adkey
Blockly.Arduino['adkeySensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//water
Blockly.Arduino['waterSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//Soil
Blockly.Arduino['SoilSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
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

   
    return Blockly;
}

exports = addGenerator;