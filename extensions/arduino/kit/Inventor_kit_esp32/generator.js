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


Blockly.Arduino.led_analog= function(block) {
    const pin = block.getFieldValue('PIN') || '0';
    const val = Blockly.Arduino.valueToCode(block, 'VAL', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
    const ch = block.getFieldValue('CH') || '0';
  
    Blockly.Arduino.setups_['led_analog'] = 'ledcSetup('+ch+', 490, 8);';
    Blockly.Arduino.setups_['led_ch'] = 'ledcAttachPin('+pin+', '+ch+');';

    return `ledcWrite(${ch}, ${val});\n`;

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
Blockly.Arduino.DHT_init = function () {

    const sensor_type = this.getFieldValue('TYPE');
    const dropdown_pin = this.getFieldValue('PIN');

    Blockly.Arduino.includes_.include_dht_init = `#include <DHT.h>\n`;
    Blockly.Arduino.definitions_['var_declare_dht' + dropdown_pin] = 'DHT dht('+dropdown_pin+', '+sensor_type+');\n';
    Blockly.Arduino.setups_['DHT_SETUP'+dropdown_pin] = 'dht.begin();';
    return ''
};



//dht11
Blockly.Arduino.KE_DHT = function (block) {
    const mode = block.getFieldValue('MODE');

    let code = '';

    if (mode === 'temperature') {
        code += `dht.readTemperature()`;
    } else {
        code += `dht.readHumidity()`;
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//servo
Blockly.Arduino.ks_servo_angle = function (block) {
    const pin = block.getFieldValue('pin');
    const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
    const time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
    const ch = block.getFieldValue('CH');

    Blockly.Arduino.includes_.include_servo_init = '#include <ESP32_Servo.h>\n';
    Blockly.Arduino.definitions_[`servo_${pin}`] = 'const int servopin = '+pin+';\n'+
    'int set_angle(int angle)\n'+
    '{\n'+
    '  int servo_angle = map(angle, 0, 180, 25, 128);\n'+
    '  return servo_angle;\n'+
    '}\n';
    Blockly.Arduino.setups_[`servo_init_${pin}`] = 'ledcSetup('+ch+', 50, 10);\n  ledcAttachPin('+pin+','+ch+');\n';
    return 'ledcWrite('+ch+', set_angle('+angle+'));\n  delay('+time+');\n';
};


Blockly.Arduino.ks_servo_read = function (block) {
    const pin = block.getFieldValue('pin');

    Blockly.Arduino.includes_.include_servo_init = '#include <ESP32_Servo.h>\n';
    Blockly.Arduino.definitions_[`servo_${pin}`] = 'Servo servo_'+pin+';\n';
    Blockly.Arduino.setups_[`servo_init_${pin}`] = 'servo_'+pin+'.attach('+pin+');';

    return ['servo_'+pin+'.read()', Blockly.Arduino.ORDER_ATOMIC];
};



//WS2812RGB

Blockly.Arduino.bbrgbLedStrip_init = function (block) {
    const len = Blockly.Arduino.valueToCode(block, 'LEN', Blockly.Arduino.ORDER_ATOMIC);
    const pin = block.getFieldValue('PIN');

    Blockly.Arduino.includes_.rgbLedStrip_init = `#include <Adafruit_NeoPixel.h>`;
    Blockly.Arduino.definitions_.rgbLedStrip_init =
    `Adafruit_NeoPixel ledStrip(${len}, ${pin}, NEO_GRB + NEO_KHZ800);`;

    return `ledStrip.begin();\n`;
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

Blockly.Arduino.rgbLedStrip_clear = function () {
    return `ledStrip.clear();\n`;
};

Blockly.Arduino.rgbLedStrip_show = function () {
    return `ledStrip.show();\n`;
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

    // matirxdisplay

    Blockly.Arduino.MatirxDisplay_init = function (block) {
        const cs = block.getFieldValue('CS');

        Blockly.Arduino.includes_.MatirxDisplay_init = `#include <SPI.h>\n#include <Adafruit_GFX.h>\n#include <Max72xxPanel.h>`;
        Blockly.Arduino.definitions_.MatirxDisplay_init = `Max72xxPanel Matrix = Max72xxPanel(${cs}, 1, 1);`;

        return ``;
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

        Blockly.Arduino.definitions_[`matrix_display`] = 'uint8_t  LEDArray[8];\n'
        
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


// Blockly.Arduino.wifi_init = function (block) {
//     const ssid = Blockly.Arduino.valueToCode(block, 'SSID', Blockly.Arduino.ORDER_ATOMIC);
//     const passwd = Blockly.Arduino.valueToCode(block, 'PASSWD', Blockly.Arduino.ORDER_ATOMIC);

//     Blockly.Arduino.includes_.wifi_init = '#include <WiFi.h>\n#include <ESPmDNS.h>\n#include <WiFiClient.h>\n';
//     Blockly.Arduino.definitions_.wifi_init = 'const char* ssid = '+ssid+';\nconst char* password = '+passwd+';\nWiFiServer server(80);\n';
//     Blockly.Arduino.setups_['wifi_setup'] = 'Serial.begin(115200);\n   WiFi.begin(ssid, password);\n   while (WiFi.status() != WL_CONNECTED) {\n   delay(500);\n   Serial.print(".");\n    }\n    Serial.println("");\n    Serial.print("Connected to ");\n    Serial.println(ssid);\n    Serial.print("IP address: ");\n    Serial.println(WiFi.localIP());\n    server.begin();\n    Serial.println("TCP server started");\n    MDNS.addService("http", "tcp", 80);\n';

//     return `WiFiClient client = server.available();\n    if (!client) {\n        return;\n    }\n    while(client.connected() && !client.available()){\n        delay(1);\n    }\n    String req = client.readStringUntil('\\r');\n    int addr_start = req.indexOf(' ');\n    int addr_end = req.indexOf(' ', addr_start + 1);\n    if (addr_start == -1 || addr_end == -1) {\n        Serial.print("Invalid request: ");\n        Serial.println(req);\n        return;\n    }\nreq = req.substring(addr_start + 1, addr_end);\n`;
// };



// Blockly.Arduino.wifi_read = function () {
//     return [`req`, Blockly.Arduino.ORDER_ATOMIC];


// };
   
    return Blockly;
}

exports = addGenerator;