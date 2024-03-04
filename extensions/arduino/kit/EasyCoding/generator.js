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


    Blockly.Arduino['Button_readState'] = function(block) {
        var arg0 = block.getFieldValue('pin') || '0';
        var code = "(digitalRead(" + arg0 + ")==0)";
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.setups_.Button_init = `pinMode(${arg0}, INPUT);`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }; 

    Blockly.Arduino['Button_readValue'] = function(block) {
        var arg0 = block.getFieldValue('pin') || '0';
        var code = "digitalRead(" + arg0 + ")";
        Blockly.Arduino.setups_.Button_init = `pinMode(${arg0}, INPUT);`;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino['touchSwitch_readValue'] = function(block) {
        var arg0 = block.getFieldValue('pin') || '27';
        var code = "touchRead(" + arg0 + ")";
        Blockly.Arduino.setups_.touchSwitch_init = `pinMode(${arg0}, INPUT);`;
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino['touchSwitch_state'] = function(block) {
        var arg0 = block.getFieldValue('pin') || '27';
        var code = "touchRead(" + arg0 + ")<25";
        Blockly.Arduino.setups_.touchSwitch_init = `pinMode(${arg0}, INPUT);`;
        // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    //buzzer
    Blockly.Arduino.buzzer_tone_d = function (block) {
        const pin = block.getFieldValue('PIN');
        const fre = this.getFieldValue('fre');
        const dur = Blockly.Arduino.valueToCode(block, 'dur', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.includes_.include_tone_init = `#include <ESP32Tone.h>\n`;

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'tone('+pin+', '+fre+', '+dur+', 0);\n';
    };

    Blockly.Arduino.buzzer_music = function (block) {
        const pin = block.getFieldValue('PIN');
        const mus = this.getFieldValue('mus');
        Blockly.Arduino.includes_.include_music_init = `#include <ESP32Tone.h>\n#include<musicESP32.h>\n`;
        Blockly.Arduino.definitions_[`music_${pin}`] = 'music Music('+pin+');';

        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return ''+mus+'\n';
    };

    Blockly.Arduino.buzzer_notone = function (block) {
        const pin = block.getFieldValue('PIN');
        Blockly.Arduino.setups_[`buzzer_${pin}`] = 'pinMode('+pin+', OUTPUT);\n';
        return 'noTone('+pin+', 0);\n';
    };

 
//AHT20/21

Blockly.Arduino.AHT20_21 = function() {
    Blockly.Arduino.includes_.include_AHT21 ='#include <RL_AHT21.h>';
    Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
    Blockly.Arduino.definitions_['AHT21Class_AHT21'] = 'AHT21Class AHT21;\n';
    Blockly.Arduino.setups_['getAddress'] ='Wire.begin();\n'
    Blockly.Arduino.setups_['AHT21_begin'] = 'AHT21.begin();\n';
  
    var dropdown_type = this.getFieldValue('MODE');
    var code = dropdown_type;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };


    Blockly.Arduino.bbrgbLedStrip_init = function (block) {
        const len = Blockly.Arduino.valueToCode(block, 'LEN', Blockly.Arduino.ORDER_ATOMIC);
        const pin = block.getFieldValue('PIN');

        Blockly.Arduino.includes_.rgbLedStrip_init = `#include <Adafruit_NeoPixel.h>`;
        Blockly.Arduino.definitions_.rgbLedStrip_init =
        `Adafruit_NeoPixel ledStrip(${len}, ${pin}, NEO_GRB + NEO_KHZ800);`;

        return `ledStrip.begin();\n`;
    };

    Blockly.Arduino.bbrgbLedStrip_display = function(block) {
        
        var value_brightness = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
        const arr = Blockly.Arduino.valueToCode(this, 'MATRIX', Blockly.Arduino.ORDER_ASSIGNMENT);
        const color = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');
        Blockly.Arduino.definitions_['arry'] = 'int arry[25];\n';
        Blockly.Arduino.definitions_['pinx'] = 'const char *pinx;';
        Blockly.Arduino.setups_['setBrightness'] = 'ledStrip.setBrightness('+value_brightness+');\n';
        
    
    var code='ledStrip.setBrightness('+value_brightness+');\n';
      code+='ledStrip.clear();\n';
      code+='pinx = "'+ arr +'";\n';
      code+='for (int i = 0; i < 25 ; i++)\n' 
      code+='{\n';
      code+= "*(arry + i) =(*(pinx + i)) - 48;\n";
      code+='ledStrip.setPixelColor(i, arry[i]*'+color+');\n';
      code+='}\n';
      code+='ledStrip.show();\n'
      code+='delay(1);\n'
      return code;
      };


    Blockly.Arduino.rgbLedStrip_setPixelColor = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        return `ledStrip.setPixelColor(${no}, ${colour});\n`;
    };

    Blockly.Arduino.rgbLedStrip_fill = function (block) {
        const first = Blockly.Arduino.valueToCode(block, 'FIRST', Blockly.Arduino.ORDER_ATOMIC);
        const count = Blockly.Arduino.valueToCode(block, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
        const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

        return `ledStrip.fill(${colour}, ${first}, ${count});\n`;
    };

    Blockly.Arduino.rgbLedStrip_color = function (block) {
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);

        return [`ledStrip.Color(${r}, ${g}, ${b})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.rgbLedStrip_setBrightness = function (block) {
        const brightness = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        return `ledStrip.setBrightness(${brightness});\n`;
    };


    Blockly.Arduino.rgb_change=function(block) {
        var dropdown_rgbpin = block.getFieldValue('PIN');
        var wait_time = Blockly.Arduino.valueToCode(this, 'WAIT',Blockly.Arduino.ORDER_ATOMIC);
        var value_brightness = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
        if (!Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin]) {
          Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin] = 'Adafruit_NeoPixel  rgb_display_'+dropdown_rgbpin+'(25,'+dropdown_rgbpin+', NEO_GRB + NEO_KHZ800);';
          Blockly.Arduino.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_'+dropdown_rgbpin+'.begin();';
          '(25,'+ dropdown_rgbpin +', NEO_GRB + NEO_KHZ800);';
          Blockly.Arduino.setups_['setup_rgb_display_setBrightness' + dropdown_rgbpin]  = 'rgb_display_'+dropdown_rgbpin+'.setBrightness('+value_brightness+');';
        }
        var funcName2 = 'Wheel';
        var code2  = 'uint32_t Wheel(byte WheelPos) {\n';
        code2 += 'if(WheelPos < 85) {return rgb_display_'+dropdown_rgbpin+'.Color(WheelPos * 3, 255 - WheelPos * 3, 0);} \n';
        code2 += 'else if(WheelPos < 170) {WheelPos -= 85; return rgb_display_'+dropdown_rgbpin+'.Color(255 - WheelPos * 3, 0, WheelPos * 3);}\n ';
        code2 += 'else {WheelPos -= 170;return rgb_display_'+dropdown_rgbpin+'.Color(0, WheelPos * 3, 255 - WheelPos * 3);}\n';
        code2 += '}\n';
        Blockly.Arduino.definitions_[funcName2] = code2;
    
        var funcName3 = 'rainbow';
        var code3  = 'void rainbow(uint8_t wait) { uint16_t i, j;\n';
        code3 += '      for(j=0; j<256; j++) {               \n';
        code3 += '        for(i=0; i<rgb_display_'+dropdown_rgbpin+'.numPixels(); i++) {\n';
        code3 += '         rgb_display_'+dropdown_rgbpin+'.setPixelColor(i, Wheel((i+j) & 255));}\n';                    
        code3 += '      rgb_display_'+dropdown_rgbpin+'.show();\n';
        code3 += '      delay(wait);}}\n';
    
        Blockly.Arduino.definitions_[funcName3] = code3;
    
        var code = 'rainbow('+ wait_time+');\n'
        return code;
      };


      Blockly.Arduino.rgb_loop=function(block){
        var dropdown_rgbpin = block.getFieldValue('PIN');
        var wait_time = Blockly.Arduino.valueToCode(this, 'WAIT',Blockly.Arduino.ORDER_ATOMIC);
        var value_brightness = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
        Blockly.Arduino.definitions_['include_Adafruit_NeoPixel'] = '#include <Adafruit_NeoPixel.h>';
        if (!Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin]) {
          Blockly.Arduino.definitions_['var_rgb_display' + dropdown_rgbpin] = 'Adafruit_NeoPixel  rgb_display_' + dropdown_rgbpin + '(25,'+ dropdown_rgbpin +', NEO_GRB + NEO_KHZ800);';
          Blockly.Arduino.setups_['setup_rgb_display_begin_' + dropdown_rgbpin] = 'rgb_display_' + dropdown_rgbpin + '.begin();';
          
          Blockly.Arduino.setups_['setup_rgb_display_setBrightness' + dropdown_rgbpin]  = 'rgb_display_'+dropdown_rgbpin+'.setBrightness('+value_brightness+');';
        }
        var funcName2 = 'Wheel';
        var code2  = 'uint32_t Wheel(byte WheelPos) {\n';
        code2 += 'if(WheelPos < 85) {return rgb_display_'+dropdown_rgbpin+'.Color(WheelPos * 3, 255 - WheelPos * 3, 0);} \n';
        code2 += 'else if(WheelPos < 170) {WheelPos -= 85; return rgb_display_'+dropdown_rgbpin+'.Color(255 - WheelPos * 3, 0, WheelPos * 3);}\n ';
        code2 += 'else {WheelPos -= 170;return rgb_display_'+dropdown_rgbpin+'.Color(0, WheelPos * 3, 255 - WheelPos * 3);}\n';
        code2 += '}\n';
        Blockly.Arduino.definitions_[funcName2] = code2;
    
        var funcName3 = 'rainbow';
        var code3  = 'void rainbow(uint8_t wait) { uint16_t i, j;\n';
        code3 += '      for(j=0; j<256; j++) {               \n';
        code3 += '        for(i=0; i<rgb_display_'+dropdown_rgbpin+'.numPixels(); i++) {\n';
        code3 += '         rgb_display_'+dropdown_rgbpin+'.setPixelColor(i, Wheel((i+j) & 255));}\n';                    
        code3 += '      rgb_display_'+dropdown_rgbpin+'.show();\n';
        code3 += '      delay(wait);}}\n';
    
        Blockly.Arduino.definitions_[funcName3] = code3;
    
        var funcName4 = 'rainbowCycle';
        var code4  = 'void rainbowCycle(uint8_t wait) {uint16_t i, j;\n';
        code4 += '    for(j=0; j<256*5; j++) { // 5 cycles of all colors on wheel\n';
        code4 += '      for(i=0; i< rgb_display_'+dropdown_rgbpin+'.numPixels(); i++) {\n';
        code4 += '        rgb_display_'+dropdown_rgbpin+'.setPixelColor(i, Wheel(((i * 256 / rgb_display_'+dropdown_rgbpin+'.numPixels()) + j) & 255));}\n';
        code4 += '     rgb_display_'+dropdown_rgbpin+'.show();\n';
        code4 += '     delay(wait);}}\n';
    
        Blockly.Arduino.definitions_[funcName4] = code4;
    
        var code = 'rainbowCycle('+ wait_time+');\n'
        return code;
      };



    Blockly.Arduino.rgbLedStrip_clear = function () {
        return `ledStrip.clear();\n`;
    };

    Blockly.Arduino.rgbLedStrip_show = function () {
        return `ledStrip.show();\n`;
    };

    Blockly.Arduino['analogVoice_readValue'] = function(block) {
        var arg0 = block.getFieldValue('PIN');
        var code = "analogRead(" + arg0 + ")";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };


    Blockly.Arduino.current_readValue = function () {
        return [`(analogRead(36)/20/0.1*(3.3/4095))`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sd_type = function (block) {

        return [`card.type()`, Blockly.Arduino.ORDER_ATOMIC];
    };


    Blockly.Arduino.mpu6050_init = function (block) {
        Blockly.Arduino.includes_.include_mpu6050_init = `#include <MPU6050_tockn.h>\n#include <Wire.h>`;
        Blockly.Arduino.definitions_[`mpu6050_1`] = `MPU6050 mpu6050(Wire);`;
        Blockly.Arduino.setups_['getAddress'] ='Wire.begin();\nmpu6050.begin();\nmpu6050.calcGyroOffsets(true);\n'
        return '';
    };

    Blockly.Arduino.mpu6050_refresh = function (block) {
        const code = 'mpu6050.update();\n';
        return code;
    };

    Blockly.Arduino.mpu6050_read = function (block) {
        const unit = this.getFieldValue('unit');
        return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.wifi_init = function (block) {
        const ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
        const passwd = Blockly.Arduino.valueToCode(block, 'PASSWD', Blockly.Arduino.ORDER_ATOMIC);
    
        Blockly.Arduino.includes_.wifi_init = '#include <WiFi.h>\n';
        Blockly.Arduino.definitions_.wifi_init = 'const char* ssid = '+ssid+';\nconst char* password = '+passwd+';\n';
        Blockly.Arduino.setups_['wifi_setup'] = 'WiFi.begin(ssid, password);\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n  }';
    
        return '';
    };

    Blockly.Arduino.wifi_read_ip = function () {
        return [`WiFi.localIP()`, Blockly.Arduino.ORDER_ATOMIC];
    };
    
  
    Blockly.Arduino.sd_init = function (block) {
            const cs = Blockly.Arduino.valueToCode(block, 'cs', Blockly.Arduino.ORDER_ATOMIC);
            const mosi = Blockly.Arduino.valueToCode(block, 'mosi', Blockly.Arduino.ORDER_ATOMIC);
            const miso = Blockly.Arduino.valueToCode(block, 'miso', Blockly.Arduino.ORDER_ATOMIC);
            const sck = Blockly.Arduino.valueToCode(block, 'sck', Blockly.Arduino.ORDER_ATOMIC);

            Blockly.Arduino.includes_.include_sd_init = `#include <mySD.h>\n#include <SPI.h>\n`;
            Blockly.Arduino.definitions_.sd_init='File myFile;\n'
            +'Sd2Card card;\n'
            +'SdVolume volume;\n'
            +'SdFile root;\n'
            +'\n#define s_cs ' + cs
            +'\n#define s_mosi ' + mosi
            +'\n#define s_miso ' + miso
            +'\n#define s_sck ' + sck
            +'\nuint32_t volumesize;\n';
            
            Blockly.Arduino.setups_['begin'] = 
            'pinMode(s_cs, OUTPUT);\n' + 
            '  while (!card.init(SPI_HALF_SPEED, s_cs, s_mosi, s_miso, s_sck)) {\n'+
            '    return;\n'+
            '  }\n'+
            '  if (!SD.begin(s_cs, s_mosi, s_miso, s_sck)) {\n'+
            '    return;\n'+
            '  }\n'+
            '  if (!volume.init(card)) {\n'+
            '    return;\n'+
            '  }';

            return '';
        };

    Blockly.Arduino.sd_refresh = function (block) {
        const code = 'volumesize = volume.blocksPerCluster();\n'+
        'volumesize *= volume.clusterCount();\n'+
        'volumesize *= 512;\n';
        return code;
    };
    
    Blockly.Arduino.sd_type = function (block) {

            return [`card.type()`, Blockly.Arduino.ORDER_ATOMIC];
        };
    
    Blockly.Arduino.sd_list = function (block) {

            return 'root.openRoot(volume);\nroot.ls(LS_R | LS_DATE | LS_SIZE);\n';
        };
    
    Blockly.Arduino.sd_var = function (block) {
            const unit = this.getFieldValue('unit');
            return [''+unit+'',Blockly.Arduino.ORDER_ATOMIC];
        };
    
    Blockly.Arduino.sd_judge = function (block) {
            const file = Blockly.Arduino.valueToCode(block, 'file', Blockly.Arduino.ORDER_ATOMIC);
    
            return [`SD.exists(${file})`, Blockly.Arduino.ORDER_ATOMIC];
        };
    
    Blockly.Arduino.sd_delete = function (block) {
            const file = Blockly.Arduino.valueToCode(block, 'file', Blockly.Arduino.ORDER_ATOMIC);
    
            return `SD.remove(${file});\n`;
        };
    
    Blockly.Arduino.sd_read = function (block) {
            const file = Blockly.Arduino.valueToCode(block, 'file', Blockly.Arduino.ORDER_ATOMIC);
            const code = 'myFile = SD.open('+file+');\n'+
            '  while(myFile.available()) {\n'+
            '   Serial.write(myFile.read());\n'+
            '  }\n'+
            '  myFile.close();\n';
            return code;
        };
    
    Blockly.Arduino.sd_write = function (block) {
            const file = Blockly.Arduino.valueToCode(block, 'file', Blockly.Arduino.ORDER_ATOMIC);
            const data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
            const unit = this.getFieldValue('unit');
            const code = 'myFile = SD.open('+file+', FILE_WRITE);\n'+
            '  if(myFile){\n'+
            '   myFile.print('+data+');\n'+
            '   '+unit+'\n'+
            '   myFile.close();\n'+
            '  }\n';
            return code;
        }; 

    //light
    Blockly.Arduino.lightSensor_readValue = function(block) {
        var arg0 = block.getFieldValue('pin');
        var code = "analogRead(" + arg0 + ")";
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;

}

    exports = addGenerator;