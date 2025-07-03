/* eslint-disable func-style */  
/* eslint-disable max-len */  
/* eslint-disable require-jsdoc */  
function addGenerator (Blockly) {  

    Blockly.Arduino.yuyininit = function() {
        const mode = this.getFieldValue('mode');

        const dropdown_pin1 = this.getFieldValue('PIN1');
        const dropdown_pin2 = this.getFieldValue('PIN2');

        Blockly.Arduino.definitions_['define_yuyinflag'] = 'volatile int yuyin;';
        Blockly.Arduino.definitions_['var_tishi1'] = '//Maximum length of messages sent via serial port';
        Blockly.Arduino.definitions_['var_yuyin2'] = '#define UART_SEND_MAX      32';
        Blockly.Arduino.definitions_['var_yuyin3'] = '#define UART_MSG_HEAD_LEN  2';
        Blockly.Arduino.definitions_['var_yuyin4'] = '#define UART_MSG_FOOT_LEN  2';
        Blockly.Arduino.definitions_['var_tishi2'] = '//Serial port message number';
        Blockly.Arduino.definitions_['var_yuyin5'] = '#define U_MSG_bozhensgshu      1';
        Blockly.Arduino.definitions_['var_yuyin6'] = '#define U_MSG_boxiaoshu      2';
        Blockly.Arduino.definitions_['var_yuyin7'] = '#define U_MSG_bobao1      3';
        Blockly.Arduino.definitions_['var_yuyin8'] = '#define U_MSG_bobao2      4';
        Blockly.Arduino.definitions_['var_yuyin9'] = '#define U_MSG_bobao3      5';
        Blockly.Arduino.definitions_['var_yuyin10'] = '#define U_MSG_bobao4      6';
        Blockly.Arduino.definitions_['var_yuyin11'] = '#define U_MSG_bobao5      7';
        Blockly.Arduino.definitions_['var_yuyin12'] = '#define U_MSG_bobao6      8';
        Blockly.Arduino.definitions_['var_yuyin13'] = '#define U_MSG_bobao7      9';
        Blockly.Arduino.definitions_['var_yuyin14'] = '#define U_MSG_bobao8      10';
        Blockly.Arduino.definitions_['var_yuyin15'] = '#define U_MSG_bobao9      11';
        Blockly.Arduino.definitions_['var_yuyin16'] = '#define U_MSG_bobao10      12';
        Blockly.Arduino.definitions_['var_yuyin17'] = '#define U_MSG_bobao11      13';
        Blockly.Arduino.definitions_['var_yuyin18'] = '#define U_MSG_bobao12      14';
        Blockly.Arduino.definitions_['var_yuyin19'] = '#define U_MSG_bobao13      15';
        Blockly.Arduino.definitions_['var_yuyin20'] = '#define U_MSG_bobao14      16';
        Blockly.Arduino.definitions_['var_yuyin21'] = '#define U_MSG_bobao15      17';
        Blockly.Arduino.definitions_['var_yuyin22'] = '#define U_MSG_bobao16      18';
        Blockly.Arduino.definitions_['var_yuyin23'] = '#define U_MSG_bobao17      19';
        Blockly.Arduino.definitions_['var_yuyin24'] = '#define U_MSG_bobao18      20';

        Blockly.Arduino.definitions_['var_tishi3'] = '//Serial Port Message Parameter Type';
        Blockly.Arduino.definitions_['var_def1'] = 'typedef union {\n'
            + '  double d_double;\n'
            + '  int d_int;\n'
            + '  unsigned char d_ucs[8];\n'
            + '  char d_char;\n'
            + '  unsigned char d_uchar;\n'
            + '  unsigned long d_long;\n'
            + '  short d_short;\n'
            + '  float d_float;\n'
            + '} uart_param_t;\n';

        var code;
        if (mode == 1) {

            Blockly.Arduino.includes_['define_arduino'] = '#include <SoftwareSerial.h>';
            Blockly.Arduino.definitions_['var_yuyin1'] = 'SoftwareSerial mySerial('+dropdown_pin1+','+dropdown_pin2+');\n';
            Blockly.Arduino.definitions_['var_tishi4'] = '//Serial Port Sending Function Implementation';
            Blockly.Arduino.definitions_['var_def3'] = 'void _uart_send_impl(unsigned char* buff, int len) {\n'
                + '  for(int i = 0; i < len; i++) {\n'
                + '   mySerial.write(*buff++);\n'
                + '  }\n'
                + '}\n';
            Blockly.Arduino.setups_['setup_output_myserial'] = 'mySerial.begin(9600);';
            code = 'if (mySerial.available() > 0) {\n'
                + 'yuyin = mySerial.read();\n'
                + ' Serial.println(yuyin);\n'
                + '}\n';
        } else if (mode == 2) {
            Blockly.Arduino.includes_['define_arduino1'] = '#include <HardwareSerial.h>';
            Blockly.Arduino.definitions_['var_tishi41'] = '//Serial Port Sending Function Implementation';
            Blockly.Arduino.definitions_['var_def31'] = 'void _uart_send_impl(unsigned char* buff, int len) {\n'
                + '  for(int i = 0; i < len; i++) {\n'
                + '   Serial2.write(*buff++);\n'
                + '  }\n'
                + '}\n';
            Blockly.Arduino.setups_['setup_output_serial2'] = 'Serial2.begin(9600, SERIAL_8N1, '+dropdown_pin1+','+dropdown_pin2+');';
            code = 'if (Serial2.available() > 0) {\n'
                + 'yuyin = Serial2.read();\n'
                + ' Serial.println(yuyin);\n'
                + '}\n';
        }

        Blockly.Arduino.definitions_['var_tishi0'] = '//Serial Communication Message Tail';
        Blockly.Arduino.definitions_['var_def2'] = 'const unsigned char g_uart_send_foot[] = {\n'
            + '  0x55, 0xaa\n'
            + '};\n';

        Blockly.Arduino.definitions_['var_tishi5'] = '//Convert 16-bit integer to 32-bit integer';
        Blockly.Arduino.definitions_['var_def4'] = 'void _int16_to_int32(uart_param_t* param) {\n'
            + '  if (sizeof(int) >= 4)\n'
            + '    return;\n'
            + '  unsigned long value = param->d_long;\n'
            + '  unsigned long sign = (value >> 15) & 1;\n'
            + '  unsigned long v = value;\n'
            + '  if (sign)\n'
            + '    v = 0xFFFF0000 | value;\n'
            + '  uart_param_t p;\n'
            + '  p.d_long = v;\n'
            + '  param->d_ucs[0] = p.d_ucs[0];\n'
            + '  param->d_ucs[1] = p.d_ucs[1];\n'
            + '  param->d_ucs[2] = p.d_ucs[2];\n'
            + '  param->d_ucs[3] = p.d_ucs[3];\n'
            + '}\n';

        Blockly.Arduino.definitions_['var_tishi6'] = '//Convert float to double precision';
        Blockly.Arduino.definitions_['var_def5'] = 'void _float_to_double(uart_param_t* param) {\n'
            + '  if (sizeof(int) >= 4)\n'
            + '    return;\n'
            + '  unsigned long value = param->d_long;\n'
            + '  unsigned long sign = value >> 31;\n'
            + '  unsigned long M = value & 0x007FFFFF;\n'
            + '  unsigned long e = ((value >> 23) & 0xFF) - 127 + 1023;\n'
            + '  uart_param_t p0, p1;\n'
            + '  p1.d_long = ((sign & 1) << 31) | ((e & 0x7FF) << 20) | (M >> 3);\n'
            + '  param->d_ucs[0] = p0.d_ucs[0];\n'
            + '  param->d_ucs[1] = p0.d_ucs[1];\n'
            + '  param->d_ucs[2] = p0.d_ucs[2];\n'
            + '  param->d_ucs[3] = p0.d_ucs[3];\n'
            + '  param->d_ucs[4] = p1.d_ucs[0];\n'
            + '  param->d_ucs[5] = p1.d_ucs[1];\n'
            + '  param->d_ucs[6] = p1.d_ucs[2];\n'
            + '  param->d_ucs[7] = p1.d_ucs[3];\n'
            + '}\n';

        Blockly.Arduino.definitions_['var_tishi7'] = '//Serial communication message header';
        Blockly.Arduino.definitions_['var_def6'] = 'const unsigned char g_uart_send_head[] = {\n'
            + '  0xaa, 0x55\n'
            + '};\n';
        Blockly.Arduino.setups_['setup_output_flag'] = 'yuyin = 0;';
        Blockly.Arduino.setups_['setup_output_serial'] = 'Serial.begin(9600);';
        return code;
    };

    Blockly.Arduino.yuyinshibie = function() {
        const VALUE = this.getFieldValue("VALUE");
        var code = 'yuyin == '+VALUE;
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.yuyinqinchu = function() {
        var code = 'yuyin = 0;\n';
        return code;
    };

    Blockly.Arduino.boxiaoshu = function() {
        Blockly.Arduino.definitions_['var_boxiaoshutishi'] = '//Report decimal numbers';
        Blockly.Arduino.definitions_['var_boxiaoshuhanshu'] = 'void _uart_boxiaoshu(float xiaoshu) {\n'
            + '  uart_param_t param;\n'
            + '  int i = 0;\n'
            + '  unsigned char buff[UART_SEND_MAX] = {0};\n'
            + '  for (i = 0; i < UART_MSG_HEAD_LEN; i++) {\n'
            + '        buff[i + 0] = g_uart_send_head[i];\n'
            + '  }\n'
            + '  buff[2] = U_MSG_boxiaoshu;\n'
            + '  param.d_double = xiaoshu;\n'
            + '  _float_to_double(&param);\n'
            + '  buff[3] = param.d_ucs[0];\n'
            + '  buff[4] = param.d_ucs[1];\n'
            + '  buff[5] = param.d_ucs[2];\n'
            + '  buff[6] = param.d_ucs[3];\n'
            + '  buff[7] = param.d_ucs[4];\n'
            + '  buff[8] = param.d_ucs[5];\n'
            + '  buff[9] = param.d_ucs[6];\n'
            + '  buff[10] = param.d_ucs[7];\n'
            + '  for (i = 0; i < UART_MSG_FOOT_LEN; i++) {\n'
            + '       buff[i + 11] = g_uart_send_foot[i];\n'
            + '  }\n'
            + '  _uart_send_impl(buff, 13);\n'
            + '}\n';
        var fre = Blockly.Arduino.valueToCode(this, 'XIAOSHU', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
        var code = '_uart_boxiaoshu('+fre+');\n';
        return code;
    };

    Blockly.Arduino.bozhengshu = function() {
        Blockly.Arduino.definitions_['var_bozhengshutishi'] = '//Broadcast integers';
        Blockly.Arduino.definitions_['var_bozhengshuhanshu'] = 'void _uart_bozhensgshu(int zhengshu) {\n'
            + '  uart_param_t param;\n'
            + '  int i = 0;\n'
            + '  unsigned char buff[UART_SEND_MAX] = {0};\n'
            + '  for (i = 0; i < UART_MSG_HEAD_LEN; i++) {\n'
            + '       buff[i + 0] = g_uart_send_head[i];\n'
            + '    }\n'
            + '  buff[2] = U_MSG_bozhensgshu;\n'
            + '  param.d_int = zhengshu;\n'
            + '  _int16_to_int32(&param);\n'
            + '  buff[3] = param.d_ucs[0];\n'
            + '  buff[4] = param.d_ucs[1];\n'
            + '  buff[5] = 0;\n'
            + '  buff[6] = 0;\n'
            + '  for (i = 0; i < UART_MSG_FOOT_LEN; i++) {\n'
            + '       buff[i + 7] = g_uart_send_foot[i];\n'
            + '   }\n'
            + '  _uart_send_impl(buff, 9);\n'
            + '}\n';
        var fre1 = Blockly.Arduino.valueToCode(this, 'ZHENGSHU', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
        var code = '_uart_bozhensgshu('+fre1+');\n';
        return code;
    };

    Blockly.Arduino.yuyinbobao = function() {
        var dropdown_pin = this.getFieldValue('PIN3');
        Blockly.Arduino.definitions_['var_bobaotishi' + dropdown_pin] = '//Broadcast function' + dropdown_pin;
        Blockly.Arduino.definitions_['var_bobaohanshu' + dropdown_pin] = 'void _uart_bobao'+dropdown_pin+'() {\n'
            + '  uart_param_t param;\n'
            + '  int i = 0;\n'
            + '  unsigned char buff[UART_SEND_MAX] = {0};\n'
            + '  for (i = 0; i < UART_MSG_HEAD_LEN; i++) {\n'
            + '       buff[i + 0] = g_uart_send_head[i];\n'
            + '    }\n'
            + '  buff[2] = U_MSG_bobao'+dropdown_pin+';\n'
            + '  for (i = 0; i < UART_MSG_FOOT_LEN; i++) {\n'
            + '       buff[i + 3] = g_uart_send_foot[i];\n'
            + '   }\n'
            + '  _uart_send_impl(buff, 5);\n'
            + '}\n';
        var code = '_uart_bobao'+dropdown_pin+'();\n';
        return code;
    };

    return Blockly;
}

exports = addGenerator;
