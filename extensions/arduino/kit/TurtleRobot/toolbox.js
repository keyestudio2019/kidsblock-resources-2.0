/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    return `
    
<category name="%{BKY_KS_VARIABLE_LABEL}" id="KS_OTHER_CATEGORY" colour="#FF4500" secondaryColour="#42CCFF">
    <block type="KS_variables_declare">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="KS_variables_get">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
    </block>
    <block type="KS_variables_set">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="KS_variables_change">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
    </block>

    <block type="KS_variables_stringSet">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_KS_TEXT_LABEL}" id="KS_TEXT_LABEL" colour="#41be8a" secondaryColour="#42CCFF">
    <block type="KS_CHAR">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">a</field>
            </shadow>
        </value>
    </block>

    <block type="KS_STRING">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>

    <block type="KS_data">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">123</field>
            </shadow>
        </value>
    </block>
    
</category>

<category name="%{BKY_ROBOT_CATEGORY}" id="ROBOT_CATEGORY" colour="#0000ff" secondaryColour="#0000ff">

     <block type="robot_forward" id="robot_forward">
       <value name="SPEED">
         <shadow type="math_uint8_number">
            <field name="NUM">200</field>
        </shadow>
      </value>
    </block>
    <block type="robot_back" id="robot_back">
      <value name="SPEED">
       <shadow type="math_uint8_number">
           <field name="NUM">200</field>
       </shadow>
      </value>
    </block>

    <block type="robot_left" id="robot_left">
      <value name="SPEED">
        <shadow type="math_uint8_number">
           <field name="NUM">200</field>
        </shadow>
      </value>
    </block>

  <block type="robot_right" id="robot_right">
    <value name="SPEED">
      <shadow type="math_uint8_number">
       <field name="NUM">200</field>
      </shadow>
    </value>
  </block>

  <block type="robot_stop" id="robot_stop">
  </block>

</category>

<category name="%{BKY_MOTOR130_CATEGORY}" id="MOTOR130_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00">
    <block type="motor130_digital" id="motor130_digital">
        <field name="IN1">2</field>
        <field name="IN2">6</field>
    </block>

    <block type="motor130_analog" id="motor130_analog">
        <field name="IN1">2</field>

        <field name="IN2">6</field>

        <value name="SPEED2">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_KS_SERVO_CATEGORY}" id="KS_SERVO_CATEGORY" colour="#7700FF" secondaryColour="#7700FF">
    <block type="ks_servo_angle" id="ks_servo_angle">
        <field name="pin">10</field>>
        <value name="angle">
            <shadow type="math_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
        <value name="time">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>

    <block type="ks_servo_read" id="ks_servo_read">
        <field name="pin">10</field>>
    </block>

</category>

<category name="%{BKY_HC_SR04_CATEGORY}" id="HC_SR04_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
                <block type="hc_sr04_read_distance" id="hc_sr04_read_distance">
                    <field name="trig_pin">12</field>>
                    <field name="echo_pin">13</field>>
                </block>
</category>


<category name="%{BKY_MATRIX_IIC_CATEGORY}" id="MATRIX_PIN_CATEGORY" colour="#008000" secondaryColour="#008000">
<block type="matrix_iic_init" id="matrix_iic_init">
</block>

<block type="matrix_iic_display" id="matrix_iic_display">
<value name="NUMBER">
<shadow type="math_whole_number">
     <field name="NUM">1</field>
</shadow>
</value>
  <value name="MATRIX_EIGHT">
      <shadow type="matrix_eight">
           <field name="MATRIX_EIGHT">0000000000</field>
      </shadow>
   </value>
   <value name="VAR">
   <shadow type="text">
       <field name="TEXT">matrix1</field>
   </shadow>
</value>
</block>

<block type="matrix_iic_piexl" id="matrix_iic_piexl">
        <value name="xVal">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>

        <value name="yVal">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
</block>

<block type="matrix_iic_drawLine" id="matrix_iic_drawLine">
<value name="X0">
    <shadow type="math_whole_number">
        <field name="NUM">0</field>
    </shadow>
</value>
<value name="Y0">
    <shadow type="math_whole_number">
        <field name="NUM">0</field>
    </shadow>
</value>
<value name="X1">
    <shadow type="math_whole_number">
        <field name="NUM">7</field>
    </shadow>
</value>
<value name="Y1">
    <shadow type="math_whole_number">
        <field name="NUM">7</field>
    </shadow>
</value>
</block>

<block type="matrix_iic_drawrectangle" id="matrix_iic_drawrectangle">
<value name="X0">
    <shadow type="math_whole_number">
        <field name="NUM">0</field>
    </shadow>
</value>
<value name="Y0">
    <shadow type="math_whole_number">
        <field name="NUM">0</field>
    </shadow>
</value>
<value name="L1">
    <shadow type="math_whole_number">
        <field name="NUM">2</field>
    </shadow>
</value>
<value name="W1">
    <shadow type="math_whole_number">
        <field name="NUM">4</field>
    </shadow>
</value>
</block>

<block type="matrix_iic_drawcircle" id="matrix_iic_drawcircle">
<value name="X0">
    <shadow type="math_whole_number">
        <field name="NUM">0</field>
    </shadow>
</value>
<value name="Y0">
    <shadow type="math_whole_number">
        <field name="NUM">0</field>
    </shadow>
</value>
<value name="R0">
    <shadow type="math_whole_number">
        <field name="NUM">2</field>
    </shadow>
</value>
</block>

<block type="matrix_iic_showChar" id="matrix_iic_showChar">

  <value name="TEXT">
     <shadow type="text">
        <field name="TEXT">A</field>
    </shadow>
   </value>
</block>


<block type="matrix_iic_show_loop" id="matrix_iic_show_loop">
    <value name="MESSAGE">
        <shadow type="text">
             <field name="TEXT">ABCD1234</field>
        </shadow>
   </value>
   <value name="SPEED">
   <shadow type="math_whole_number">
        <field name="NUM">300</field>
   </shadow>
</value>
</block>



<block type="matrix_iic_face" id="matrix_iic_face">

</block>

<block type="matrix_iic_refresh" id="matrix_iic_refresh">

</block>

<block type="matrix_iic_clear" id="matrix_iic_clear">

</block>

</category>


<category name="%{BKY_IR_CATEGORY}" id="IR_CATEGORY" colour="#008b8b" secondaryColour="#008b8b">
    <block type="ir_init" id="ir_init">
        <field name="pin">12</field>>
    </block>
    <block type="ir_data" id="ir_data">

    </block>
    <block type="ir_read" id="ir_read">

    </block>
    <block type="ir_refresh" id="ir_refresh">

    </block>
</category>

`;
}

exports = addToolbox;
