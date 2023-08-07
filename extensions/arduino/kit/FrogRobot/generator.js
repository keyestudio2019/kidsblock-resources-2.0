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

////////////////////////////////FROG_init//////////////////////////
Blockly.Arduino.FROG_init = function() {
  
    var value_YL = Blockly.Arduino.valueToCode(this, 'YL', Blockly.Arduino.ORDER_ATOMIC);
    var value_YR = Blockly.Arduino.valueToCode(this, 'YR', Blockly.Arduino.ORDER_ATOMIC);
    var value_RL = Blockly.Arduino.valueToCode(this, 'RL', Blockly.Arduino.ORDER_ATOMIC);
    var value_RR = Blockly.Arduino.valueToCode(this, 'RR', Blockly.Arduino.ORDER_ATOMIC);
  
    Blockly.Arduino.definitions_['1init1'] = '#include <Servo.h>\n#include <Oscillator.h>\n#include <EEPROM.h>\n#define N_SERVOS 4\n//-- First step: Configure the pins where the servos are attached\n/*\n         --------------- \n        |     O   O     |\n        |---------------|\nYR 3==> |               | <== YL 2\n         --------------- \n            ||     ||\n            ||     ||\nRR 5==>   -----   ------  <== RL 4\n         |-----   ------|\n*/\n#define EEPROM_TRIM false\n// Activate to take callibration data from internal memory//调整机械角度\n#define TRIM_RR '+value_RR+'  //right02\n#define TRIM_RL '+value_RL+'  //left02\n#define TRIM_YR '+value_YR+'  //right01\n#define TRIM_YL '+value_YL+'  //left01\n#define PIN_RR 5\n#define PIN_RL 4\n#define PIN_YR 3\n#define PIN_YL 2\n#define INTERVALTIME 10.0 \nOscillator servo[N_SERVOS];\n#include "SR04.h"\n#define TRIG_PIN 6\n#define ECHO_PIN 7\nSR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);\nlong a;\nint i = 0;\nint val = 0;\nvoid goingUp(int tempo);\nvoid drunk (int tempo);\nvoid noGravity(int tempo);\nvoid kickLeft(int tempo);\nvoid kickRight(int tempo);\nvoid run(int steps, int T=500);\nvoid walk(int steps, int T=1000);\nvoid backyard(int steps, int T=3000);\nvoid backyardSlow(int steps, int T=5000);\nvoid turnLeft(int steps, int T=3000);\nvoid turnRight(int steps, int T=3000);\nvoid moonWalkLeft(int steps, int T=1000);\nvoid moonWalkRight(int steps, int T=1000);\nvoid crusaito(int steps, int T=1000);\nvoid swing(int steps, int T=1000);\nvoid upDown(int steps, int T=1000);\nvoid flapping(int steps, int T=1000);\nint t=495;\ndouble pause=0;\n';
    Blockly.Arduino.setups_['setup_init1'] = 'Serial.begin(9600);\n  servo[0].attach(PIN_RR);\n  servo[1].attach(PIN_RL);\n  servo[2].attach(PIN_YR);\n  servo[3].attach(PIN_YL);\n  int trim;\n  if(EEPROM_TRIM){\n    for(int x=0;x<4;x++){\n      trim=EEPROM.read(x);\n      if(trim>128)trim=trim-256;\n      Serial.print("TRIM ");\n      Serial.print(x);\n      Serial.print(" en ");\n      Serial.println(trim);\n      servo[x].SetTrim(trim);\n    }\n  }\n  else{\n    servo[0].SetTrim(TRIM_RR);\n    servo[1].SetTrim(TRIM_RL);\n    servo[2].SetTrim(TRIM_YR);\n    servo[3].SetTrim(TRIM_YL);\n  }\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);';
    Blockly.Arduino.definitions_['2oscillate1'] = 'void oscillate(int A[N_SERVOS], int O[N_SERVOS], int T, double phase_diff[N_SERVOS]){\n  for (int i=0; i<4; i++) {\n    servo[i].SetO(O[i]);\n    servo[i].SetA(A[i]);\n    servo[i].SetT(T);\n    servo[i].SetPh(phase_diff[i]);\n  }\n  double ref=millis();\n   for (double x=ref; x<T+ref; x=millis()){\n     for (int i=0; i<4; i++){\n        servo[i].refresh();\n     }\n  }\n}\n';
    Blockly.Arduino.definitions_['3moveNServos_001'] = 'unsigned long final_time;\nunsigned long interval_time;\nint oneTime;\nint iteration;\nfloat increment[N_SERVOS]; \nint oldPosition[]={90,90,90,90};\n';
    Blockly.Arduino.definitions_['4moveNServos'] = 'void moveNServos(int time, int  newPosition[]){\n  for(int i=0;i<N_SERVOS;i++) increment[i] = ((newPosition[i])-oldPosition[i])/(time/INTERVALTIME);\n  final_time =  millis() + time; \n  iteration = 1; \n  while(millis() < final_time){ //Javi del futuro cambia esto  \n      interval_time = millis()+INTERVALTIME;  \n      oneTime=0;\n      while(millis()<interval_time){\n          if(oneTime<1){ \n              for(int i=0;i<N_SERVOS;i++){\n                  servo[i].SetPosition(oldPosition[i] + (iteration * increment[i]));\n              }\n              iteration++;\n              oneTime++;\n          }\n      }\n  }   \n\n  for(int i=0;i<N_SERVOS;i++){  \n    oldPosition[i] = newPosition[i];\n  }   \n}\n';
    var code = '';
    return code;
  };
  
  
  
  ////////////////////////////////front//////////////////////////
  Blockly.Arduino.FROG_front = function() {
    var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
    var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['1walk'] = ' void walk(int steps, int T)\n{\n  int A[4]= {15, 15, 30, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'walk('+value_steps+','+value_speed1+'*t);\n';
    return code;
  };
  
  ////////////////////////////////back//////////////////////////
  Blockly.Arduino.FROG_back = function() {
    var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
    var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['1back1'] = ' void backyard(int steps, int T)\n{\n  int A[4]= {15, 15, 30, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(-90), DEG2RAD(-90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'backyard('+value_steps+','+value_speed1+'*t);\n';
    return code;
  };
  
  ////////////////////////////////left//////////////////////////
  Blockly.Arduino.FROG_left = function() {
    var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
    var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['1left1'] = ' void turnLeft(int steps, int T)\n{\n  int A[4]= {20, 20, 10, 30};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'turnLeft('+value_steps+','+value_speed1+'*t);\n';
    return code;
  };
  
  ////////////////////////////////right//////////////////////////
  Blockly.Arduino.FROG_right = function() {
    var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
    var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['1turnRight'] = ' void turnRight(int steps, int T)\n{\n  int A[4]= {20, 20, 30, 10};\n  int O[4] = {0, 0, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'turnRight('+value_steps+','+value_speed1+'*t);\n';
    return code;
  };
  
  
  ////////////////////////////////stop//////////////////////////
  Blockly.Arduino.FROG_stop = function() {
    Blockly.Arduino.definitions_['1Stop'] = 'void Stop()\n{\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n}\n';
     var code = 'Stop();\n'; 
    return code;
  };
  
  ////////////////////////////////moon_left//////////////////////////
  Blockly.Arduino.FROG_moon_left = function() {
    var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
    var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['moonLEFT'] = ' void moonLEFT(int steps, int T)\n{\n  int A[4]= {25, 25, 0, 0};\n  int O[4] = {-15, 15, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 - 120), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'moonLEFT('+value_steps+','+value_speed1+'*t);\n';
    return code;
  };
  
  ////////////////////////////////moon_right//////////////////////////
  Blockly.Arduino.FROG_moon_right = function() {
    var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
    var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['moonRight'] = ' void moonRight(int steps, int T)\n{\n  int A[4]= {25, 25, 0, 0};\n  int O[4] = {-15, 15, 0, 0};\n  double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)};\n  for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'moonRight('+value_steps+','+value_speed1+'*t);\n';
    return code;
  };
  
  ////////////////////////////////FROG_kickLeft//////////////////////////
  Blockly.Arduino.FROG_kickLeft = function() { 
    Blockly.Arduino.definitions_['kickLeft'] = 'void kickLeft(int tempo){\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n  delay(tempo);\n  servo[0].SetPosition(50); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(30); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(30); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(80); //pie derecho\n  servo[1].SetPosition(70); //pie izquiero\n  delay(tempo);\n}\n';
    var code = 'kickLeft(t);\n';
    return code;
  };
  
  ////////////////////////////////FROG_kickright//////////////////////////
  Blockly.Arduino.FROG_kickright = function() { 
    Blockly.Arduino.definitions_['kickright'] = 'void kickRight(int tempo){\nfor(int i=0;i<4;i++) servo[i].SetPosition(90);\n  delay(tempo);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(130); //pie izquiero\n  delay(tempo);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(100); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(150); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(80); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(150); //pie izquiero\n  delay(tempo/4);\n  servo[0].SetPosition(110); //pie derecho\n  servo[1].SetPosition(100); //pie izquiero\n  delay(tempo);\n}\n';
    var code = 'kickRight(t);\n';
    return code;
  };
  
  ////////////////////////////////FROG_drunk//////////////////////////
  Blockly.Arduino.FROG_drunk = function() { 
    var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['drunk'] = 'void drunk (int tempo){\n  pause=millis();\n  int move1[] = {60,70,90,90};\n  int move2[] = {110,120,90,90};\n  int move3[] = {60,70,90,90};\n  int move4[] = {110,120,90,90};\n  moveNServos(tempo*0.235,move1);\n  moveNServos(tempo*0.235,move2);\n  moveNServos(tempo*0.235,move3);\n  moveNServos(tempo*0.235,move4);\n  while(millis()<(pause+tempo));\n}\n';
    var code = 'drunk('+value_speed1+'*t);\n';
    return code;
  };
  
  ////////////////////////////////FROG_noGravity//////////////////////////
  Blockly.Arduino.FROG_noGravity = function() {
    Blockly.Arduino.definitions_['noGravity'] = 'void noGravity(int tempo){\n  int move1[4] = {120,140,90,90};\n  int move2[4] = {140,140,90,90};\n  int move3[4] = {120,140,90,90};\n  int move4[4] = {90,90,90,90};\n  for(int i=0;i<4;i++) servo[i].SetPosition(90);\n  for(int i=0;i<N_SERVOS;i++) oldPosition[i]=90;\n  moveNServos(tempo*2,move1);\n  moveNServos(tempo*2,move2);\n  delay(tempo*2);\n  moveNServos(tempo*2,move3);\n  moveNServos(tempo*2,move4);\n}\n';
    var code = 'noGravity(2*t);\n';
    return code;
  };
  
  
  ////////////////////////////////FROG_crusaito//////////////////////////
  Blockly.Arduino.FROG_crusaito = function() {
    var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
    var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['crusaito'] = 'void crusaito(int steps, int T){\n    int A[4]= {25, 25, 30, 30};\n    int O[4] = {- 15, 15, 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180 + 120), DEG2RAD(90), DEG2RAD(90)}; \n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'crusaito('+value_steps+','+value_speed1+'*t);\n';
    return code;
  };
  
  ////////////////////////////////FROG_segunda1//////////////////////////
  Blockly.Arduino.FROG_segunda1 = function() {
    Blockly.Arduino.definitions_['segunda1'] = 'void segunda1() \n{\nint move1[4] = {90,90,80,100};\n  int move2[4] = {90,90,100,80};\n  int move3[4] = {90,90,80,100};\n  int move4[4] = {90,90,100,80};\n     pause=millis();\n      moveNServos(t*0.15,move1);\n      moveNServos(t*0.15,move2);\n      moveNServos(t*0.15,move3);\n      moveNServos(t*0.15,move4);\n      while(millis()<(pause+t));\n    }\n';
    var code = 'segunda1();\n';
    return code;
  };
  
  ////////////////////////////////FROG_jump//////////////////////////
  Blockly.Arduino.FROG_jump = function() {
    Blockly.Arduino.definitions_['jump'] = 'void jump() \n{\nint move5[4] = {70,110,80,100};\n  int move6[4] = {70,110,100,80};\n  int move7[4] = {90,90,80,100};\n  int move8[4] = {90,90,100,80};\npause=millis();\n    moveNServos(t*0.15,move5);\n    moveNServos(t*0.15,move6);\n    moveNServos(t*0.15,move7);\n    moveNServos(t*0.15,move8);\n    while(millis()<(pause+t));\n  }\n';
    var code = 'jump();\n';
    return code;
  };
  
  ////////////////////////////////FROG_crusaito//////////////////////////
  Blockly.Arduino.FROG_swing = function() {
    var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
    var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['swing'] = 'void swing(int steps, int T){\n    int A[4]= {15, 15, 8, 8};\n    int O[4] = {-A[0], A[1], 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(180), DEG2RAD(90), DEG2RAD(-90)};\n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    var code = 'swing('+value_steps+','+value_speed1+'*t);\n';
    return code;
  };
  
  ////////////////////////////////FROG_swing//////////////////////////
  Blockly.Arduino.FROG_flapping = function() {
    var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
    var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['flapping'] = 'void flapping(int steps, int T){\n    int A[4]= {25, 25, 0, 0};\n    int O[4] = {-15, 15, 0, 0};\n    double phase_diff[4] = {DEG2RAD(0), DEG2RAD(0), DEG2RAD(90), DEG2RAD(90)};\n    for(int i=0;i<steps;i++)oscillate(A,O, T, phase_diff);\n}\n';
    
    var code = 'flapping('+value_steps+','+value_speed1+'*t);\n';
    return code;
  };
  
  ////////////////////////////////FROG_goingUp//////////////////////////
  Blockly.Arduino.FROG_goingUp = function() {
    var value_steps = Blockly.Arduino.valueToCode(this, 'steps', Blockly.Arduino.ORDER_ATOMIC);
    var value_speed1 = Blockly.Arduino.valueToCode(this, 'speed1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['goingUp'] = 'void goingUp(int tempo){\n      pause=millis();\n      for(int i=0;i<4;i++) servo[i].SetPosition(90);\n      delay(tempo);\n      servo[0].SetPosition(80);\n      servo[1].SetPosition(100);\n      delay(tempo);\n      servo[0].SetPosition(70);\n      servo[1].SetPosition(110);\n      delay(tempo);\n      servo[0].SetPosition(60);\n      servo[1].SetPosition(120);\n      delay(tempo);\n      servo[0].SetPosition(50);\n      servo[1].SetPosition(130);\n      delay(tempo);\n      while(millis()<pause+8*t);\n}\n';
    var code = 'goingUp('+value_speed1+'*t);\n';
    return code;
  };
  
    Blockly.Arduino.FROG_servo = function (block) {
        const pin = block.getFieldValue('pin');
        const angle = Blockly.Arduino.valueToCode(block, 'angle', Blockly.Arduino.ORDER_ATOMIC);
        const time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.include_servo_init = '#include <Servo.h>\n';
        Blockly.Arduino.definitions_[`servo_${pin}`] = 'Servo servo_'+pin+';\n';
        Blockly.Arduino.setups_[`servo_init_${pin}`] = 'servo_'+pin+'.attach('+pin+');';
        return 'servo_'+pin+'.write('+angle+');\ndelay('+time+');\n';
    };
    
    Blockly.Arduino.FROG_sr04 = function (block) {

      Blockly.Arduino.setups_['setup_output_T'] = 'pinMode(6, OUTPUT);';
      Blockly.Arduino.setups_['setup_output_E'] = 'pinMode(7, INPUT);';
      var funcName = 'checkdistance';
      var code = 'float' + ' ' + funcName + '() {\n'
    + '  digitalWrite(6, LOW);\n' + '  delayMicroseconds(2);\n'
    + '  digitalWrite(6, HIGH);\n' + '  delayMicroseconds(10);\n'
    + '  digitalWrite(6, LOW);\n'
    + '  float distance = pulseIn(7, HIGH) / 58.00;\n'
    + '  delay(10);\n' + '  return distance;\n'
    + '}\n';
      Blockly.Arduino.definitions_[funcName] = code;
      return [funcName + '()', Blockly.Arduino.ORDER_ATOMIC];
  };

    return Blockly;
}

exports = addGenerator;