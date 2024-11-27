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
    const pin = block.getFieldValue('pin');
    const state = this.getFieldValue('state');

    // 使用唯一键存储每个引脚的 pinMode 设置
    Blockly.Arduino.setups_[`Led_init_${pin}`] = `pinMode(${pin}, OUTPUT);`;

    return `digitalWrite(${pin}, ${state});\n`;
};

//LED PWM 输出 
Blockly.Arduino.led_analog = function(block) {
    const pin = block.getFieldValue('PIN') || '0';
    const val = Blockly.Arduino.valueToCode(block, 'VAL', Blockly.Arduino.ORDER_UNARY_POSTFIX) || 0;
    const ch = block.getFieldValue('CH') || '0';

    // 使用唯一键存储每个引脚和通道的设置
    Blockly.Arduino.setups_[`led_analog_${ch}`] = `ledcSetup(${ch}, 490, 8);`;
    Blockly.Arduino.setups_[`led_ch_${pin}_${ch}`] = `ledcAttachPin(${pin}, ${ch});`;

    return `ledcWrite(${ch}, ${val});\n`;
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

Blockly.Arduino.motor130_digital = function (block) {
    const pin1 = block.getFieldValue('IN1');
    const pin2 = block.getFieldValue('IN2');
    const state1 = this.getFieldValue('state1');
    const state2 = this.getFieldValue('state2');

    Blockly.Arduino.setups_[`motor130_s`] = 'pinMode('+pin1+', OUTPUT);\n  pinMode('+pin2+', OUTPUT);\n';
    return 'digitalWrite('+pin1+','+state1+');\ndigitalWrite('+pin2+','+state2+');\n';
};

Blockly.Arduino.motor130_analog = function (block) {
    const pin1 = block.getFieldValue('IN1');
    const pin2 = block.getFieldValue('IN2');
    const ch = block.getFieldValue('CH') || '0';
    const state1 = this.getFieldValue('state1');
    const val2 = Blockly.Arduino.valueToCode(block, 'SPEED2', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.setups_[`motor130_s`] = 'pinMode('+pin1+', OUTPUT);\n  ledcSetup('+ch+', 1200, 8);\n   ledcAttachPin('+pin2+', '+ch+');\n';
    return 'digitalWrite('+pin1+','+state1+');\nledcWrite('+ch+', '+val2+');\n';
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

//SOUND
Blockly.Arduino['SoundSensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
//adkey
Blockly.Arduino['adkeySensor_readValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'IO33';
    var code = "analogRead(" + arg0 +")";
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
Blockly.Arduino['joyStick_xyValue'] = function(block) {
    var arg0 = block.getFieldValue('pin') || 'A0';
    var code = "analogRead(" + arg0 + ")";
    // const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
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

// Blockly.Arduino.rgbLedStrip_fill = function (block) {
//     const first = Blockly.Arduino.valueToCode(block, 'FIRST', Blockly.Arduino.ORDER_ATOMIC);
//     const count = Blockly.Arduino.valueToCode(block, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
//     const colour = Blockly.Arduino.valueToCode(block, 'COLOR', Blockly.Arduino.ORDER_ATOMIC).replace('#', '0x');

//     return `ledStrip.fill(${colour}, ${first}, ${count});\n`;
// };
Blockly.Arduino.rgbLedStrip_fill = function (block) {
    const first = Blockly.Arduino.valueToCode(block, 'FIRST', Blockly.Arduino.ORDER_ATOMIC);
    const end = Blockly.Arduino.valueToCode(block, 'COUNT', Blockly.Arduino.ORDER_ATOMIC);
    const count = end - first + 1;  // 计算需要填充的灯珠数量
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

//BMP388 气压传感器
Blockly.Arduino.bmp388_init = function (block) {
    Blockly.Arduino.includes_.include_bmp388_init = `#include <BMP388_DEV.h>`;
    Blockly.Arduino.definitions_.bmp388_var = 'float temperature, pressure, altitude;\n' + 'BMP388_DEV bmp388;';
    Blockly.Arduino.setups_['getAddress'] = 'bmp388.begin(); \n'+
    '  bmp388.setTimeStandby(TIME_STANDBY_1280MS);\n'+
    '  bmp388.startNormalConversion();\n'
    return '';
};

Blockly.Arduino.bmp388_read_data = function () {
    return `bmp388.getMeasurements(temperature, pressure, altitude);\n`;
};

Blockly.Arduino.bmp388_show_data = function (block) {
    const unit = this.getFieldValue('unit');
    return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
};

//AHT20温湿度传感器
Blockly.Arduino.aht20_read = function (block) {
    Blockly.Arduino.includes_.include_aht20_init = `#include <Wire.h>\n#include <AHT20.h>`;
    Blockly.Arduino.definitions_[`aht20`] = `AHT20 aht20;`;
    Blockly.Arduino.setups_['aht20_getdata'] ='Wire.begin();\naht20.begin();';
    const data = this.getFieldValue('data');
    return [`${data}`, Blockly.Arduino.ORDER_ATOMIC];
};

//AK8975 地磁传感器
Blockly.Arduino.ak8975_init = function (block) {
    Blockly.Arduino.includes_.include_ak8975_init = '#include <Wire.h>\n#include <AK8975C.h>\n'
    Blockly.Arduino.definitions_.ak8975_var = 'AK8975C ak8975c;\n';
    Blockly.Arduino.setups_['ak8975begin'] = 'Wire.begin();\n'+
    '  if(!ak8975c.begin())\n'+
    '  {\n'+
    '  Serial.println("error!");\n'+
    '  while(1);\n'+
    '  }\n'+
    '  ak8975c.selfTest();\n'
    return '';
};
Blockly.Arduino.ak8975_read = function (block) {
    const unit = this.getFieldValue('unit');
    return [`${unit}`, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.ak8975_degree = function (block) {
    
    return [`ak8975c.degree()`, Blockly.Arduino.ORDER_ATOMIC];
};

//RFID
Blockly.Arduino.rc522_init = function (block) {

    Blockly.Arduino.includes_.include_rc522_init = `#include <Wire.h>\n#include <MFRC522_I2C.h>\n`;
    Blockly.Arduino.definitions_[`rc522_var`] = `MFRC522 mfrc522(0x28);\nString rfid_str = "";\n`;
    Blockly.Arduino.definitions_[`rc522_data_func`] = `String return_rfid_data()\n`+
    `{\n`+
    `  if ( ! mfrc522.PICC_IsNewCardPresent() || ! mfrc522.PICC_ReadCardSerial() ) {\n`+
    `    delay(50);\n`+
    `    return "";\n`+
    `  }\n`+
    `  rfid_str = "";\n`+
    `  for (byte i = 0; i < mfrc522.uid.size; i++) {\n`+
    `    rfid_str = rfid_str + String(mfrc522.uid.uidByte[i],HEX);\n`+
    `  }\n`+
    `  return rfid_str;\n`+
    `}\n`;
    Blockly.Arduino.setups_['rc522_setup'] = 'Wire.begin();\n  mfrc522.PCD_Init();\n';
    return '';
};

Blockly.Arduino.rc522_read = function (block) {
    return [`return_rfid_data()`, Blockly.Arduino.ORDER_ATOMIC];
};


//OLED
Blockly.Arduino.oled_init = function (block) {
    const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
    const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
    const addr = block.getFieldValue('ADDR');

    Blockly.Arduino.includes_.oled_init = `#include <GyverOLED.h>\n`+'#include "img.h"\n';
    Blockly.Arduino.definitions_.oled_init = `GyverOLED<SSH1106_128x64> oled;`;

    return `oled.init(); \n`;
};

Blockly.Arduino.oled_setText = function (block) {
    const size = block.getFieldValue('SIZE');
    const colour = block.getFieldValue('COLOUR');
    const bgColor = block.getFieldValue('BGCOLOR');

    return `oled.setScale(${size});\n`;
};

Blockly.Arduino.oled_setCursor = function (block) {
    const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
    const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);

    return `oled.setCursor(${x}, ${y});\n`;
};

Blockly.Arduino.oled_print = function (block) {
    const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
    const eol = block.getFieldValue('EOL');

    if (eol === 'warp') {
      return `oled.println(${data});\n`;
    }
    return `oled.print(${data});\n`;

};

Blockly.Arduino.oled_image = function (block) {

  const image = this.getFieldValue('IMAGE');

    return 'oled.drawBitmap(0, 0, ('+image+'), 128, 64);\n';
};



Blockly.Arduino.oled_clear = function () {
    return `oled.clear();\n`;
};

Blockly.Arduino.oled_refresh = function () {
    return `oled.update();\n`;
};

//wifi
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
return Blockly;
}
exports = addGenerator;
  