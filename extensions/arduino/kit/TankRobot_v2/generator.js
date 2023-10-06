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
        //const val1 = Blockly.Arduino.valueToCode(block, 'SPEED1', Blockly.Arduino.ORDER_ATOMIC);
        const state1 = this.getFieldValue('state1');
        const val2 = Blockly.Arduino.valueToCode(block, 'SPEED2', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.setups_[`motor130_s`] = 'pinMode('+pin1+', OUTPUT);\n  pinMode('+pin2+', OUTPUT);\n';
        return 'digitalWrite('+pin1+','+state1+');\nanalogWrite('+pin2+','+val2+');\n';
    };

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

    //超声波
    Blockly.Arduino.hc_sr04_read_distance = function (block) {

        const trigPin = block.getFieldValue('trig_pin');
        const echoPin = block.getFieldValue('echo_pin');
        const unit = block.getFieldValue('unit');

        Blockly.Arduino.includes_.include_hc_sr04_read = `#include <Ultrasonic.h>`;
        Blockly.Arduino.definitions_[`hc_sr04_read${trigPin}${echoPin}`] =
            `Ultrasonic ultrasonic_${trigPin}_${echoPin}(${trigPin}, ${echoPin});`;

        return [`ultrasonic_${trigPin}_${echoPin}.read(${unit})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.matrix8_16_init = function (block) {
        const SDA = block.getFieldValue('SDA');
        const SCL = block.getFieldValue('SCL');
        Blockly.Arduino.definitions_[`matrix_init`] = '#define IIC_SCL  '+SCL+'\n'+
        '#define IIC_SDA  '+SDA+'\nunsigned char clear[] = {0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00};\n'+
        'unsigned char data_line = 0;\n'+
        'unsigned char delay_count = 0;\n';
        Blockly.Arduino.definitions_[`IIC_send`] = 'void IIC_send(unsigned char send_data)\n'+
        '{\n'+
        '  for(char i = 0;i < 8;i++)\n'+
        '  {\n'+
        '      digitalWrite(IIC_SCL,LOW);\n'+
        '      delayMicroseconds(3);\n'+
        '      if(send_data & 0x01)\n'+
        '      {\n'+
        '        digitalWrite(IIC_SDA,HIGH);\n'+
        '      }\n'+
        '      else\n'+
        '      {\n'+
        '        digitalWrite(IIC_SDA,LOW);\n'+
        '      }\n'+
        '      delayMicroseconds(3);\n'+
        '      digitalWrite(IIC_SCL,HIGH);\n'+
        '      delayMicroseconds(3);\n'+
        '      send_data = send_data >> 1;\n'+
        '  }\n'+
        '}\n';

        Blockly.Arduino.definitions_[`IIC_end`] = 'void IIC_end()\n'+
        '{'+
        '  digitalWrite(IIC_SCL,LOW);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SDA,LOW);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SCL,HIGH);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SDA,HIGH);\n'+
        '  delayMicroseconds(3);\n'+
        '}\n';

        Blockly.Arduino.definitions_[`IIC_start`] = 'void IIC_start()\n'+
        '{\n'+
        '  digitalWrite(IIC_SCL,LOW);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SDA,HIGH);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SCL,HIGH);\n'+
        '  delayMicroseconds(3);\n'+
        '  digitalWrite(IIC_SDA,LOW);\n'+
        '  delayMicroseconds(3);\n'+
        '}\n';
        Blockly.Arduino.definitions_[`matrix_display`] = 'void matrix_display(unsigned char matrix_value[])\n'+
        '{\n'+
        '  unsigned char dat[16]={0}, dat_d[16]={0}, temp;\n'+

        //1. 数组中所有数据高低位顺序反转
        ' for(char i=0; i<16; i++){\n'+
        '   temp = matrix_value[i];\n'+
        '   for(char b=0; b<8; b++){\n'+
        '    if(temp & 0x01){\n'+
        '    dat[i] |= (1<<(7-b));\n'+
        '  }\n'+
        '   temp = temp>>1;\n'+
        '  }\n'+
        '   }\n'+
        //2. 将Scratch生成的数组（行式）转换为符合点阵硬件线路要求的数组（列式）
        ' unsigned char index=0, bit=0, index_rc=0, bit_rc=0;\n'+
        '  for(index=0; index<16; index++){\n'+
        '    for(bit=0; bit<8; bit++){\n'+
        '      if(dat[index] & (1<<bit)){\n'+
        '      dat_d[index_rc] |= (1 << (bit_rc/16));\n'+
        '  }\n'+
        '     bit_rc++;\n'+
        '     index_rc++;\n'+
        '    if(index_rc == 16)\n'+
        '     index_rc = 0;\n'+
        '  }\n'+
        '  }\n'+
        '   IIC_start();\n'+
        '   IIC_send(0xc0);\n'+
        '   for(int i = 0;i < 16;i++)\n'+
        '   {\n'+
        '     IIC_send(dat_d[i]);\n'+
        '  }\n'+
        '  IIC_end();\n'+
        '  IIC_start();\n'+
        '  IIC_send(0x8A);\n'+
        '  IIC_end();\n'+
        '}\n';


        Blockly.Arduino.setups_['matrix_816_setup'] = 'pinMode(IIC_SCL,OUTPUT);\n  pinMode(IIC_SDA,OUTPUT);\n  matrix_display(clear);\n';
        return '';
    };

    Blockly.Arduino.matrix8_16_display = function (block) {

        var varName = Blockly.Arduino.valueToCode(this, 'MATRIX_SIXTEEN', Blockly.Arduino.ORDER_ASSIGNMENT);
        var a = new Array();
        for (var i = 0; i < 16; i++) {
          a[i] = new Array();
          for (var j = 0; j < 8; j++) {
            a[i][j] = varName[i*8+j];
          }
        }
        var code = '{';
        for (var i = 0; i < 16; i++) {
          var tmp = ""
          for (var j = 0; j < 8; j++) {
            tmp += a[i][j];
          }
          tmp = (parseInt(tmp, 2)).toString(16)
          if (tmp.length == 1) tmp = "0" + tmp;
          code += '0x' + tmp + ',' + '';//((i != 8) ? ',' : '');
        }
        code += '};';

        const image = Blockly.Arduino.valueToCode(this, 'VAR',Blockly.Arduino.ORDER_ATOMIC) ||' ' ;
        matrix_image= image.replace(/\"/g,'');
        const no = Blockly.Arduino.valueToCode(block, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.definitions_[`matrix_${no}`] = 'unsigned char '+matrix_image+'[] = '+code+''
        

        return 'matrix_display('+matrix_image+');\n';
    };

    Blockly.Arduino.matrix8_16_face = function (block) {
        Blockly.Arduino.definitions_[`1matrix_face`] = 'unsigned char start01[] = {0x80,0x01,0x40,0x02,0x20,0x04,0x10,0x08,0x08,0x10,0x04,0x20,0x02,0x40,0x01,0x80};\n'+
        'unsigned char matrix_smile[] = {0x00,0x00,0x1c,0x38,0x22,0x44,0x22,0x44,0x22,0x44,0x00,0x00,0x03,0xc0,0x00,0x00};\n'+
        'unsigned char matrix_speechless[] = {0x00,0x00,0x7c,0x3e,0x00,0x00,0x03,0xc0,0x02,0x40,0x02,0x40,0x03,0xc0,0x00,0x00};\n'+
        'unsigned char matrix_heart[] = {0x0e,0x70,0x1f,0xf8,0x1f,0xf8,0x1f,0xf8,0x0f,0xf0,0x07,0xe0,0x03,0xc0,0x01,0x80};\n'+
        'unsigned char matrix_front[] = {0x01,0x00,0x02,0x80,0x04,0x40,0x01,0x00,0x02,0x80,0x04,0x40,0x00,0x00,0x00,0x00};\n'+
        'unsigned char matrix_back[] = {0x00,0x00,0x00,0x00,0x04,0x40,0x02,0x80,0x01,0x00,0x04,0x40,0x02,0x80,0x01,0x00};\n'+
        'unsigned char matrix_right[] = {0x00,0x00,0x00,0x00,0x08,0x88,0x04,0x44,0x02,0x22,0x04,0x44,0x08,0x88,0x00,0x00};\n'+
        'unsigned char matrix_left[] = {0x00,0x00,0x00,0x00,0x11,0x10,0x22,0x20,0x44,0x40,0x22,0x20,0x11,0x10,0x00,0x00};\n'+
        'unsigned char matrix_stop[] = {0x00,0x00,0xee,0xee,0x84,0xaa,0xe4,0xae,0x24,0xa8,0x24,0xa8,0xe4,0xe8,0x00,0x00};\n'+
        'unsigned char matrix_tsundere[] = {0x00,0x00,0x3c,0x78,0x01,0x00,0x02,0x80,0x04,0x40,0x00,0x20,0x00,0x00,0x00,0x00};'+
        'unsigned char matrix_squinting[] = {0x10,0x08,0x08,0x10,0x04,0x20,0x02,0x40,0x04,0x20,0x08,0x10,0x13,0xc8,0x00,0x00};'+
        'unsigned char matrix_despise1[] = {0x00,0x00,0x20,0x40,0x3e,0x7c,0x00,0x00,0x00,0x00,0x03,0xc0,0x00,0x00,0x00,0x00};';

        const matrix_face = this.getFieldValue('face');

        return 'matrix_display('+matrix_face+');\n';
    };


    Blockly.Arduino.matrix8_16_clear = function (block) {
        return 'matrix_display(clear);\n';
    };

    
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