/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.RGBcube_init = function (block) {
        Blockly.Arduino.definitions_[`spi`] = '#include <SPI.h>';
        Blockly.Arduino.definitions_[`RGBcube`] = '#include <Cube.h>';
        Blockly.Arduino.definitions_[`cube`] = 'Cube cube;';
        Blockly.Arduino.setups_['cubestart'] = 'cube.begin(0, 115200);';
        return '';
    };

    //****************全部***************************
    Blockly.Arduino.RGBcube_all = function (block) {
        
        const colour= this.getFieldValue('COLOUR'); 
    
        return 'cube.all('+colour+');\n'
    };
    //****************混色*******************************
    Blockly.Arduino.RGBcube_any = function (block) {

        const r = Blockly.Arduino.valueToCode(block, 'red', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'green', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'blue', Blockly.Arduino.ORDER_ATOMIC);
        
        return 'cube.all(RGB('+r+', '+g+', '+b+'));\n'
    };

    // //****************单个显示1*******************************
    // Blockly.Arduino.RGBcube_single = function (block) {
    //     const x= this.getFieldValue('X');
    //     const y= this.getFieldValue('Y');
    //     const z= this.getFieldValue('Z');
    //     const r = Blockly.Arduino.valueToCode(block, 'red', Blockly.Arduino.ORDER_ATOMIC);
    //     const g = Blockly.Arduino.valueToCode(block, 'green', Blockly.Arduino.ORDER_ATOMIC);
    //     const b = Blockly.Arduino.valueToCode(block, 'blue', Blockly.Arduino.ORDER_ATOMIC);
        
    //     return 'cube.set('+x+','+y+','+z+', RGB('+r+','+g+','+b+'));\n'
        
    // };

    //****************单个显示2*******************************
    Blockly.Arduino.RGBcube_single2 = function (block) {
        const x= Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y= Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z= Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'red', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'green', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'blue', Blockly.Arduino.ORDER_ATOMIC);
        
        return 'cube.set('+ x + ',' + y + ',' + z + ', RGB(' + r + ',' + g + ',' + b +'));\n'
        
    };

    //****************画线显示1*******************************
    Blockly.Arduino.RGBcube_line = function (block) {
        const x1= this.getFieldValue('X1');
        const y1= this.getFieldValue('Y1');
        const z1= this.getFieldValue('Z1');
        const x2= this.getFieldValue('X2');
        const y2= this.getFieldValue('Y2');
        const z2= this.getFieldValue('Z2');
        const colour= this.getFieldValue('COLOUR');
        
        return 'cube.line('+x1+','+y1+','+z1+','+x2+','+y2+','+z2+','+colour+');\n';
        
    };

    //****************画线显示2*******************************
    Blockly.Arduino.RGBcube_line2 = function (block) {
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const z1 = Blockly.Arduino.valueToCode(block, 'Z1', Blockly.Arduino.ORDER_ATOMIC);
        const x2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
        const y2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
        const z2 = Blockly.Arduino.valueToCode(block, 'Z2', Blockly.Arduino.ORDER_ATOMIC);
        const R = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const G = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
        const B = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);
        
        return 'cube.line(' + x1 + ',' + y1 + ',' + z1 + ',' + x2 + ',' + y2 + ',' + z2 + ', RGB(' + R + ',' + G + ',' + B + '));\n';
        
    };

    //****************单层显示1***************************
    Blockly.Arduino.RGBcube_plane = function (block) {
        const axis = this.getFieldValue('AXIS');
        const layer = this.getFieldValue('LAY');
        const colour = this.getFieldValue('COL');
        
        return 'cube.setplane('+axis+','+layer+','+colour+');\n'
    };

    //****************单层显示2***************************
    Blockly.Arduino.RGBcube_plane2 = function (block) {
        const axis = Blockly.Arduino.valueToCode(block, 'AXIS', Blockly.Arduino.ORDER_ATOMIC);
        const layer = Blockly.Arduino.valueToCode(block, 'LAY', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'G', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'B', Blockly.Arduino.ORDER_ATOMIC);
        
        return 'cube.setplane(' + axis + ',' + layer + ',' + 'RGB(' + r + ',' + g + ',' + b + ')' + ');\n'
    };

    //****************球体显示1*******************************
    Blockly.Arduino.RGBcube_sphere = function (block) {
        const x= this.getFieldValue('X');
        const y= this.getFieldValue('Y');
        const z= this.getFieldValue('Z');
        const size= this.getFieldValue('SIZE');
        const colour1= this.getFieldValue('COLOUR1');
        const colour2= this.getFieldValue('COLOUR2');
        
        return 'cube.sphere('+x+','+y+','+z+','+size+','+colour1+','+colour2+');\n';
    };

    //****************球体显示2*******************************
    Blockly.Arduino.RGBcube_sphere2 = function (block) {
        const x= Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y= Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z= Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const size= Blockly.Arduino.valueToCode(block, 'SIZE', Blockly.Arduino.ORDER_ATOMIC);
        const r1 = Blockly.Arduino.valueToCode(block, 'R1', Blockly.Arduino.ORDER_ATOMIC);
        const g1 = Blockly.Arduino.valueToCode(block, 'G1', Blockly.Arduino.ORDER_ATOMIC);
        const b1 = Blockly.Arduino.valueToCode(block, 'B1', Blockly.Arduino.ORDER_ATOMIC);
        const r2 = Blockly.Arduino.valueToCode(block, 'R2', Blockly.Arduino.ORDER_ATOMIC);
        const g2 = Blockly.Arduino.valueToCode(block, 'G2', Blockly.Arduino.ORDER_ATOMIC);
        const b2 = Blockly.Arduino.valueToCode(block, 'B2', Blockly.Arduino.ORDER_ATOMIC);
        
        return 'cube.sphere(' + x + ',' + y + ',' + z + ',' + size + ', RGB(' + r1 + ',' + g1 + ',' + b1 + '), RGB(' + r2 + ',' + g2 + ',' + b2 +'));\n';
    };

    //****************盒子显示1*******************************
    Blockly.Arduino.RGBcube_box = function (block) {
        const x1= this.getFieldValue('X1');
        const y1= this.getFieldValue('Y1');
        const z1= this.getFieldValue('Z1');
        const x2= this.getFieldValue('X2');
        const y2= this.getFieldValue('Y2');
        const z2= this.getFieldValue('Z2');
        const style= this.getFieldValue('STYLE');
        const colour1= this.getFieldValue('COLOUR1');
        const colour2= this.getFieldValue('COLOUR2');
        
        return 'cube.box('+x1+','+y1+','+z1+','+x2+','+y2+','+z2+','+colour1+','+style+','+colour2+');\n';
        
    };

    //****************盒子显示2*******************************
    Blockly.Arduino.RGBcube_box2 = function (block) {
        const x1= Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1= Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const z1= Blockly.Arduino.valueToCode(block, 'Z1', Blockly.Arduino.ORDER_ATOMIC);
        const x2= Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
        const y2= Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
        const z2= Blockly.Arduino.valueToCode(block, 'Z2', Blockly.Arduino.ORDER_ATOMIC);
        const style= Blockly.Arduino.valueToCode(block, 'STYLE', Blockly.Arduino.ORDER_ATOMIC);
        const r1 = Blockly.Arduino.valueToCode(block, 'R1', Blockly.Arduino.ORDER_ATOMIC);
        const g1 = Blockly.Arduino.valueToCode(block, 'G1', Blockly.Arduino.ORDER_ATOMIC);
        const b1 = Blockly.Arduino.valueToCode(block, 'B1', Blockly.Arduino.ORDER_ATOMIC);
        const r2 = Blockly.Arduino.valueToCode(block, 'R2', Blockly.Arduino.ORDER_ATOMIC);
        const g2 = Blockly.Arduino.valueToCode(block, 'G2', Blockly.Arduino.ORDER_ATOMIC);
        const b2 = Blockly.Arduino.valueToCode(block, 'B2', Blockly.Arduino.ORDER_ATOMIC);
        
        return 'cube.box('+x1+','+y1+','+z1+','+x2+','+y2+','+z2+', RGB('+r1+','+g1+','+b1+'),'+style+', RGB('+r2+','+g2+','+b2+'));\n';
        
    };

    //****************光效***************************
    Blockly.Arduino.RGBcube_light_effect = function (block) {
        
        const light_effect= this.getFieldValue('LIGHT_EFFECT'); 

        if (light_effect =="colourFader1();"){

            Blockly.Arduino.definitions_[`colourFader1`] =
                'uint8_t cf1_rr = 0;\n'+
                'uint8_t cf1_gg = 0;\n'+
                'uint8_t cf1_bb = 255;\n'+
                '\n'+
                'void colourFader1(){\n'+
                '  uint8_t addnum = 35;\n'+
                '  static uint8_t k = 0;\n'+
                '  if(k == 0){\n'+
                '    for(int j = 0; j < 4; j++){\n'+
                '      cf1_rr = cf1_rr >= 255 ? 255 : (cf1_rr + addnum > 255 ? 255 : cf1_rr + addnum);\n'+
                '      cf1_bb = 0 >= cf1_bb ? 0 : (cf1_bb - addnum < 0 ? 0 : cf1_bb - addnum);\n'+
                '      cube.line(0, 0, j, 3, 0, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      cube.line(0, 1, j, 3, 1, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      cube.line(0, 2, j, 3, 2, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      cube.line(0, 3, j, 3, 3, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      delay(150);\n'+
                '    }\n'+
                '    if (cf1_rr >= 255) k = 1;\n'+
                '  }\n'+
                '  if(k == 1){\n'+
                '    for(int j = 0; j < 4; j++){\n'+
                '      cf1_gg = cf1_gg >= 255 ? 255 : (cf1_gg + addnum > 255 ? 255 : cf1_gg + addnum);\n'+
                '      cf1_rr = 0 >= cf1_rr ? 0 : (cf1_rr - addnum < 0 ? 0 : cf1_rr - addnum);\n'+
                '      cube.line(0, 0, j, 3, 0, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      cube.line(0, 1, j, 3, 1, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      cube.line(0, 2, j, 3, 2, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      cube.line(0, 3, j, 3, 3, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      delay(150);\n'+
                '    }\n'+
                '    if (cf1_gg >= 255) k = 2;\n'+
                '  }\n'+
                '  if(k == 2){\n'+
                '    for(int j = 0; j < 4; j++){\n'+
                '      cf1_bb = cf1_bb >= 255 ? 255 : (cf1_bb + addnum > 255 ? 255 : cf1_bb + addnum);\n'+
                '      cf1_gg = 0 >= cf1_gg ? 0 : (cf1_gg - addnum < 0 ? 0 : cf1_gg - addnum);\n'+
                '      cube.line(0, 0, j, 3, 0, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      cube.line(0, 1, j, 3, 1, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      cube.line(0, 2, j, 3, 2, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      cube.line(0, 3, j, 3, 3, j, RGB(cf1_rr, cf1_gg, cf1_bb));\n'+
                '      delay(150);\n'+
                '    }\n'+
                '    if (cf1_bb >= 255) k = 0;\n'+
                '  }\n'+
                '}';
            return light_effect +'\n';
        }
        else if (light_effect =="colourFader2();"){

            Blockly.Arduino.definitions_[`colourFader2`] =
            'void colourFader2(){\n'+
            '  uint8_t rr=0;\n'+
            '  uint8_t gg=0;\n'+
            '  uint8_t bb=255;\n'+
            '\n'+
            '  while (rr < 255){\n'+
            '    rr = rr + 1;\n'+
            '    bb = bb - 1;\n'+
            '    cube.all(RGB(rr, gg, bb));\n'+
            '    delay(5);\n'+
            '  }\n'+
            '\n'+
            '  while (gg < 255){\n'+
            '    gg = gg + 1;\n'+
            '    rr = rr - 1;\n'+
            '    cube.all(RGB(rr, gg, bb));\n'+
            '    delay(5);\n'+
            '  }\n'+
            '\n'+
            '  while (bb < 255){\n'+
            '    bb = bb + 1;\n'+
            '    gg = gg - 1;\n'+
            '    cube.all(RGB(rr, gg, bb));\n'+
            '    delay(5);\n'+
            '  }\n'+
            '}';
            return light_effect +'\n';
        }
        else if (light_effect =="tuning1();"){
            Blockly.Arduino.definitions_[`tuning1`] =
            'void tuning1(){\n'+
            '  uint8_t timer = 50;\n'+
            '  static int count = 0;\n'+    
            '  for(int i = 0; i < 2; i++){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(0, 0, 0, 0, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(1, 0, 0, 1, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(2, 0, 0, 2, 3, i, BLUE);\n'+
            '    cube.box(3, 0, 0, 3, 3, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '  for(int i = 1; i >= 0; i--){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(0, 0, 0, 0, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(1, 0, 0, 1, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(2, 0, 0, 2, 3, i, BLUE);\n'+
            '    cube.box(3, 0, 0, 3, 3, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '  for(int i = 0; i < 2; i++){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(1, 0, 0, 1, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(0, 0, 0, 0, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(3, 0, 0, 3, 3, i, BLUE);\n'+
            '    cube.box(2, 0, 0, 3, 2, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '  for(int i = 1; i >= 0; i--){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(1, 0, 0, 1, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(0, 0, 0, 0, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(3, 0, 0, 3, 3, i, BLUE);\n'+
            '    cube.box(2, 0, 0, 3, 2, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '}';
            return light_effect +'\n';
        }
        else if (light_effect =="tuning2();"){
            Blockly.Arduino.definitions_[`tuning2`] =
            'void tuning2(){\n'+
            '  uint8_t timer = 50;\n'+
            '  static int count = 0;\n'+
            '  for(int i = 0; i < 3; i++){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(0, 0, 0, 0, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(1, 0, 0, 1, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(2, 0, 0, 2, 3, i, BLUE);\n'+
            '    cube.box(3, 0, 0, 3, 3, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '  for(int i = 1; i >= 0; i--){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(0, 0, 0, 0, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(1, 0, 0, 1, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(2, 0, 0, 2, 3, i, BLUE);\n'+
            '    cube.box(3, 0, 0, 3, 3, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '  for(int i = 0; i < 3; i++){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(1, 0, 0, 1, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(0, 0, 0, 0, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(3, 0, 0, 3, 3, i, BLUE);\n'+
            '    cube.box(2, 0, 0, 3, 2, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '  for(int i = 1; i >= 0; i--){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(1, 0, 0, 1, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(0, 0, 0, 0, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(3, 0, 0, 3, 3, i, BLUE);\n'+
            '    cube.box(2, 0, 0, 3, 2, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '}';
            return light_effect +'\n';
        }
        else if (light_effect =="tuning3();"){
            Blockly.Arduino.definitions_[`tuning3`] =
            'void tuning3(){\n'+
            '  uint8_t timer = 50;\n'+
            '  static int count = 0;\n'+
            '  for(int i = 0; i < 4; i++){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(0, 0, 0, 0, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(1, 0, 0, 1, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(2, 0, 0, 2, 3, i, BLUE);\n'+
            '    cube.box(3, 0, 0, 3, 3, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '  for(int i = 1; i >= 0; i--){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(0, 0, 0, 0, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(1, 0, 0, 1, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(2, 0, 0, 2, 3, i, BLUE);\n'+
            '    cube.box(3, 0, 0, 3, 3, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '  for(int i = 0; i < 4; i++){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(1, 0, 0, 1, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(0, 0, 0, 0, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(3, 0, 0, 3, 3, i, BLUE);\n'+
            '    cube.box(2, 0, 0, 3, 2, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '  for(int i = 1; i >= 0; i--){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.box(1, 0, 0, 1, 3, i, RGB(0x0f, 0xf0, 0x0f));\n'+
            '    cube.box(0, 0, 0, 0, 3, (count = i - 1 > 0 ? i - 1 : 0), RED);\n'+
            '    cube.box(3, 0, 0, 3, 3, i, BLUE);\n'+
            '    cube.box(2, 0, 0, 3, 2, (count = i - 1 > 0 ? i - 1 : 0), GREEN);\n'+
            '    delay(timer);\n'+
            '  }\n'+
            '}';
            return light_effect +'\n';
        }
        else if (light_effect =="frame();"){
            Blockly.Arduino.definitions_[`frame`] =
            'void frame(){\n'+
            '  for(int i = 0; i < 4; i++){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.line(0, i, 0, 0, i, 3, RGB(255, 0, 0));\n'+
            '    cube.line(0, i, 0, 3, i, 0, RGB(255, 0, 0));\n'+
            '    cube.line(3, i, 0, 3, i, 3, RGB(255, 0, 0));\n'+
            '    cube.line(0, i, 3, 3, i, 3, RGB(255, 0, 0));\n'+
            '    delay(150);\n'+
            '  }\n'+
            '\n'+
            '  for(int i = 3; i > 0; i--){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.line(0, i, 0, 0, i, 3, RGB(255, 100, 0));\n'+
            '    cube.line(0, i, 0, 3, i, 0, RGB(255, 100, 0));\n'+
            '    cube.line(3, i, 0, 3, i, 3, RGB(255, 100, 0));\n'+
            '    cube.line(0, i, 3, 3, i, 3, RGB(255, 100, 0));\n'+
            '    delay(150);\n'+
            '  }\n'+
            '\n'+
            '  for(int i = 0; i < 4; i++){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.line(i, 0, 0, i, 3, 0, RGB(0, 0, 255));\n'+
            '    cube.line(i, 0, 0, i, 0, 3, RGB(0, 0, 255));\n'+
            '    cube.line(i, 3, 0, i, 3, 3, RGB(0, 0, 255));\n'+
            '    cube.line(i, 0, 3, i, 3, 3, RGB(0, 0, 255));\n'+
            '    delay(150);\n'+
            '  }\n'+
            '\n'+
            '  for(int i = 3; i > 0; i--){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.line(i, 0, 0, i, 3, 0, RGB(0, 100, 255));\n'+
            '    cube.line(i, 0, 0, i, 0, 3, RGB(0, 100, 255));\n'+
            '    cube.line(i, 3, 0, i, 3, 3, RGB(0, 100, 255));\n'+
            '    cube.line(i, 0, 3, i, 3, 3, RGB(0, 100, 255));\n'+
            '    delay(150);\n'+
            '  }\n'+
            '\n'+
            '  for(int i = 0; i < 4; i++){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.line(0, 0, i, 3, 0, i, RGB(0, 255, 0));\n'+
            '    cube.line(0, 0, i, 0, 3, i, RGB(0, 255, 0));\n'+
            '    cube.line(3, 0, i, 3, 3, i, RGB(0, 255, 0));\n'+
            '    cube.line(0, 3, i, 3, 3, i, RGB(0, 255, 0));\n'+
            '    delay(150);\n'+
            '  }\n'+
            '\n'+
            '  for(int i = 3; i > 0; i--){\n'+
            '    cube.all(BLACK);\n'+
            '    cube.line(0, 0, i, 3, 0, i, RGB(100, 255, 100));\n'+
            '    cube.line(0, 0, i, 0, 3, i, RGB(100, 255, 100));\n'+
            '    cube.line(3, 0, i, 3, 3, i, RGB(100, 255, 100));\n'+
            '    cube.line(0, 3, i, 3, 3, i, RGB(100, 255, 100));\n'+
            '    delay(150);\n'+
            '  }\n'+
            '}';
            return light_effect +'\n';
        }
        else if (light_effect =="Heartbeat();"){
            Blockly.Arduino.definitions_[`Heartbeat`] =
            'void Heartbeat(){\n'+
            '  rise();\n'+
            '  delay(40);\n'+
            '  fall();\n'+
            '  delay(100);\n'+
            '  rise();\n'+
            '  delay(40);\n'+
            '  fall();\n'+
            '  delay(300);\n'+
            '}\n'+
            '\n'+
            'void rise(){\n'+
            '  int8_t i = 0;\n'+
            '  int8_t xPos = 0;\n'+
            '  int8_t yPos = 0;\n'+
            '  int8_t zPos = 0;\n'+
            '\n'+
            '  while(zPos < 4) {\n'+
            '    yPos = 3;\n'+
            '    while(yPos > -1){\n'+
            '      xPos = 0;\n'+
            '      while(xPos < 4){\n'+
            '        cube.set(xPos, yPos, zPos, RED);\n'+
            '        xPos++;\n'+
            '        i++;\n'+
            '        delay(4);\n'+
            '      }\n'+
            '      yPos--;\n'+
            '    }\n'+
            '    zPos++;\n'+
            '  }\n'+
            '}\n'+
            '\n'+
            'void fall(){\n'+
            '  int8_t xPos = 3;\n'+
            '  int8_t yPos = 3;\n'+
            '  int8_t zPos = 3;\n'+
            '  while(zPos > -1) {\n'+
            '    xPos = 3;\n'+
            '    while(xPos > -1) {\n'+
            '      yPos = 3;\n'+
            '      while(yPos > -1) {\n'+
            '        cube.set(xPos, yPos, zPos, BLACK);\n'+
            '        yPos--;\n'+
            '        delay(4);\n'+
            '      }\n'+
            '      xPos--;\n'+
            '    }\n'+
            '    zPos--;\n'+
            '  }\n'+
            '}';
            return light_effect +'\n';
        }
        else if (light_effect =="Rainstorm(10);"){
            Blockly.Arduino.definitions_[`Rainstorm`] =
            'void Rainstorm(int count){\n'+
            '  byte drop1XPos;\n'+
            '  byte drop1YPos;\n'+
            '  byte drop1ZPos = 2;\n'+
            '  byte drop2XPos;\n'+
            '  byte drop2YPos;\n'+
            '  byte drop2ZPos = 0;\n'+
            '\n'+
            '  for (int i = 0;i < count * 15; i++) {\n'+
            '    if(drop1ZPos == 4) {\n'+
            '      drop1XPos = random(4);\n'+
            '      drop1YPos = random(4);\n'+
            '    }\n'+
            '\n'+
            '    if(drop2ZPos == 4) {\n'+
            '      drop2XPos = random(4);\n'+
            '      drop2YPos = random(4);\n'+
            '    }\n'+
            '\n'+
            '    cube.all(BLACK);\n'+
            '    clouds();\n'+
            '\n'+
            '    if(drop1ZPos > 0) {\n'+
            '      drop1ZPos--;\n'+
            '      cube.set(drop1XPos, drop1YPos, drop1ZPos, BLUE);\n'+
            '    } else {\n'+
            '      drop1ZPos = 4;\n'+
            '    }\n'+
            '\n'+
            '    if(drop2ZPos > 0) {\n'+
            '      drop2ZPos--;\n'+
            '      cube.set(drop2XPos, drop2YPos, drop2ZPos, BLUE);\n'+
            '    } else {\n'+
            '      drop2ZPos = 4;\n'+
            '    }\n'+
            '\n'+
            '    delay(50);\n'+
            '    lightning();\n'+
            '  }\n'+
            '}\n'+
            '\n'+
            'void lightning(){\n'+
            '  if(random(40) == 1) {\n'+
            '    int lightningFlashes = random(0, 2 + 1);\n'+
            '    int i = 0;\n'+
            '    while (i < lightningFlashes) {\n'+
            '      cube.all(WHITE);\n'+
            '      delay(50);\n'+
            '      cube.all(BLACK);\n'+
            '      delay(150);\n'+
            '      i++;\n'+
            '    }\n'+
            '  }\n'+
            '}\n'+
            '\n'+
            'void clouds(){\n'+
            '  cube.setplane(Z, 3, WHITE);\n'+
            '}';
            return light_effect +'\n';
        }
        else if (light_effect =="RandomColours();"){
            Blockly.Arduino.definitions_[`RandomColours`] =
            'void RandomColours(){\n'+
            '  byte xPos;\n'+
            '  byte yPos;\n'+
            '  byte zPos;\n'+
            '  byte rr;\n'+
            '  byte gg;\n'+
            '  byte bb;\n'+
            '\n'+
            '  xPos = random(4);\n'+
            '  yPos = random(4);\n'+
            '  zPos = random(4);\n'+
            '  rr = random(0, 2) * 255;\n'+
            '  gg = random(0, 2) * 255;\n'+
            '  bb = random(0, 2) * 255;\n'+
            '\n'+
            '  cube.set(xPos, yPos, zPos, RGB(rr, gg, bb));\n'+
            '  delay(2);\n'+
            '}';
            return light_effect +'\n';
        }
        else if (light_effect =="Sphere();"){
            Blockly.Arduino.definitions_[`Sphere`] =
            'void Sphere(){\n'+
            '  byte rr;\n'+
            '  byte gg;\n'+
            '  byte bb;\n'+
            '\n'+
            '  for (byte i = 1; i <= 4; i++) {\n'+
            '    cube.all(BLACK);\n'+
            '    rr = random(0, 2) * 255;\n'+
            '    gg = random(0, 2) * 255;\n'+
            '    bb = random(0, 2) * 255;\n'+
            '    cube.sphere(1, 1, 1, i, RGB(rr, gg, bb));\n'+
            '    delay(400);\n'+
            '\n'+
            '    cube.all(BLACK);\n'+
            '    rr = random(0, 2) * 255;\n'+
            '    gg = random(0, 2) * 255;\n'+
            '    bb = random(0, 2) * 255;\n'+
            '    cube.sphere(1, 1, 1, i, RGB(rr, gg, bb), RGB(random(0, 2) * 255, random(0, 2) * 255, random(0, 2) * 255));\n'+
            '    delay(400);\n'+
            '  }\n'+
            '}';
            return light_effect +'\n';
        }
        else if (light_effect =="laserShow();"){
            Blockly.Arduino.definitions_[`laserShow`] =
            'void laserShow(){\n'+
            '  byte x = 0;\n'+
            '  byte y = 0;\n'+
            '  byte step_x = 1;\n'+
            '  byte step_y = 0;\n'+
            '  for (byte i = 0; i < 24; i++) {\n'+
            '    cube.all(BLACK);\n'+
            '    if (i <= 12) {\n'+
            '      cube.line(0, 3, 0, y, 3-x, 3, WHITE);\n'+
            '      cube.line(3, 3, 0, 3-x, 3-y, 3, BLUE);\n'+
            '      cube.line(3, 0, 0, 3-y, x, 3, GREEN);\n'+
            '      cube.line(0, 0, 0, x, y, 3, RED);\n'+
            '    } else {\n'+
            '      cube.line(0, 3, 3, y, 3-x, 0, WHITE);\n'+
            '      cube.line(3, 3, 3, 3-x, 3-y, 0, BLUE);\n'+
            '      cube.line(3, 0, 3, 3-y, x, 0, GREEN);\n'+
            '      cube.line(0, 0, 3, x, y, 0, RED);\n'+
            '    }\n'+
            '    if (x == 3 && y == 0) {\n'+
            '      step_x = 0;\n'+
            '      step_y = 1;\n'+
            '    } else if (x == 3 && y == 3) {\n'+
            '      step_x = -1;\n'+
            '      step_y = 0;\n'+
            '    } else if (x == 0 && y == 3) {\n'+
            '      step_x = 0;\n'+
            '      step_y = -1;\n'+
            '    } else if (x == 0 && y == 0) {\n'+
            '      step_x = 1;\n'+
            '      step_y = 0;\n'+
            '    }\n'+
            '    x += step_x;\n'+
            '    y += step_y;\n'+
            '    delay(100);\n'+
            '  }\n'+
            '\n'+
            '  cube.all(BLACK);\n'+
            '  stepThroughLEDs();\n'+
            '\n'+
            '  cube.all(BLACK);\n'+
            '  x = 0;\n'+
            '  y = 0;\n'+
            '  step_x = 1;\n'+
            '  step_y = 0;\n'+
            '  int k = 0;\n'+
            '  int j = 255;\n'+
            '  int b = 100;\n'+
            '  for (byte i = 0; i < 16; i++) {\n'+
            '    k = i + 40;\n'+
            '    j -= 40;\n'+
            '    if (b == 100){\n'+
            '      b = 0;\n'+
            '    }else{\n'+
            '      b = 100;\n'+
            '    }\n'+
            '    cube.line(x, y, 0, x, y, 3, RGB(k, b, j));\n'+
            '    if (x == 3 && y == 0) {\n'+
            '      step_x = 0;\n'+
            '      step_y = 1;\n'+
            '    } else if (x == 3 && y == 3) {\n'+
            '      step_x = -1;\n'+
            '      step_y = 0;\n'+
            '    } else if (x == 0 && y == 3) {\n'+
            '      step_x = 0;\n'+
            '      step_y = -1;\n'+
            '    } else if (x == 0 && y == 1) {\n'+
            '      step_x = 1;\n'+
            '      step_y = 0;\n'+
            '    } else if (x == 2 && y == 1) {\n'+
            '      step_x = 0;\n'+
            '      step_y = 1;\n'+
            '    } else if (x == 2 && y == 2) {\n'+
            '      step_x = -1;\n'+
            '      step_y = 0;\n'+
            '    }\n'+
            '    x += step_x;\n'+
            '    y += step_y;\n'+
            '    delay(50);\n'+
            '  }\n'+
            '}\n'+
            '\n'+
            'void stepThroughLEDs(){\n'+
            '  int i = 0;\n'+
            '  int xPos = 0;\n'+
            '  int yPos = 0;\n'+
            '  int zPos = 0;\n'+
            '\n'+
            '  while(zPos < 4){\n'+
            '    yPos = 3;\n'+
            '    while(yPos > -1){\n'+
            '      xPos = 0;\n'+
            '      while(xPos < 4){\n'+
            '        cube.all(BLACK);\n'+
            '        cube.set(xPos, yPos, zPos, RGB(random(0, 255), random(0, 50), random(0, 50)));\n'+
            '        cube.set((xPos - 1 < 0 ? 0 : xPos - 1), (yPos - 1 < 0 ? 0 : yPos - 1), (zPos - 1 < 0 ? 0 : zPos - 1), RGB(random(0, 50), random(0, 255), random(0, 50)));\n'+
            '        cube.set((xPos - 2 < 0 ? 0 : xPos - 2), (yPos - 1 < 0 ? 0 : yPos - 2), (zPos - 1 < 0 ? 0 : zPos - 1), RGB(random(0, 50), random(0, 50), random(0, 255)));\n'+
            '        xPos++;\n'+
            '        i++;\n'+
            '        delay(50);\n'+
            '      }\n'+
            '      yPos--;\n'+
            '    }\n'+
            '    zPos++;\n'+
            '  }\n'+
            '}';
            return light_effect +'\n';
        }
    };

    return Blockly;
}

exports = addGenerator;
