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

    //****************单个显示1*******************************
    Blockly.Arduino.RGBcube_single = function (block) {
        const x= this.getFieldValue('X');
        const y= this.getFieldValue('Y');
        const z= this.getFieldValue('Z');
        const r = Blockly.Arduino.valueToCode(block, 'red', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'green', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'blue', Blockly.Arduino.ORDER_ATOMIC);
        
        return 'cube.set('+x+','+y+','+z+', RGB('+r+','+g+','+b+'));\ndelay(100);\n'
        
    };

    //****************单个显示2*******************************
    Blockly.Arduino.RGBcube_single2 = function (block) {
        const x= Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y= Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const z= Blockly.Arduino.valueToCode(block, 'Z', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'red', Blockly.Arduino.ORDER_ATOMIC);
        const g = Blockly.Arduino.valueToCode(block, 'green', Blockly.Arduino.ORDER_ATOMIC);
        const b = Blockly.Arduino.valueToCode(block, 'blue', Blockly.Arduino.ORDER_ATOMIC);
        
        return 'cube.set('+ x + ',' + y + ',' + z + ', RGB(' + r + ',' + g + ',' + b +'));\ndelay(100);\n'
        
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

    return Blockly;
}

exports = addGenerator;
