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


//****************单个显示*******************************
Blockly.Arduino.RGBcube_single = function (block) {
    const x= this.getFieldValue('X');
    const y= this.getFieldValue('Y');
    const z= this.getFieldValue('Z');
    const r = Blockly.Arduino.valueToCode(block, 'red', Blockly.Arduino.ORDER_ATOMIC);
    const g = Blockly.Arduino.valueToCode(block, 'green', Blockly.Arduino.ORDER_ATOMIC);
    const b = Blockly.Arduino.valueToCode(block, 'blue', Blockly.Arduino.ORDER_ATOMIC);
        
        return 'cube.set('+x+','+y+','+z+', RGB('+r+','+g+','+b+'));\n'
        
    };


//****************画线显示*******************************
Blockly.Arduino.RGBcube_line = function (block) {
    const x1= this.getFieldValue('X1');
    const y1= this.getFieldValue('Y1');
    const z1= this.getFieldValue('Z1');
    const x2= this.getFieldValue('X2');
    const y2= this.getFieldValue('Y2');
    const z2= this.getFieldValue('Z2');
    const colour= this.getFieldValue('COLOUR');
        
        return 'cube.line('+x1+','+y1+','+z1+','+x2+','+y2+','+z2+','+colour+');\n'
        ;
        
    };

    //****************单层显示***************************
Blockly.Arduino.RGBcube_plane = function (block) {
        
    const axis= this.getFieldValue('AXIS');
    const layer= this.getFieldValue('LAY');
    const colour= this.getFieldValue('COL');
        
        return 'cube.setplane('+axis+','+layer+','+colour+');\n'
    };



//****************球体显示*******************************
Blockly.Arduino.RGBcube_sphere = function (block) {
    const x= this.getFieldValue('X');
    const y= this.getFieldValue('Y');
    const z= this.getFieldValue('Z');
    const size= this.getFieldValue('SIZE');
    const colour1= this.getFieldValue('COLOUR1');
    const colour2= this.getFieldValue('COLOUR2');
        
        return 'cube.line('+x+','+y+','+z+','+size+','+colour1+','+colour2+');\n'
        ;
    };


//****************盒子显示*******************************
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
        
        return 'cube.box('+x1+','+y1+','+z1+','+x2+','+y2+','+z2+','+colour1+','+style+','+colour2+');\n'
        ;
        
    };

    return Blockly;
}

exports = addGenerator;
