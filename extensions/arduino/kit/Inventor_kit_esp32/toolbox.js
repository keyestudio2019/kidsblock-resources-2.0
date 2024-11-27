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

<category name="%{BKY_KS_TEXT_LABEL}" id="KS_TEXT_LABEL" colour="#800000" secondaryColour="#800000">
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

<category name="%{BKY_LED_CATEGORY}" id="BKY_LED_CATEGORY" colour="#573e00" secondaryColour="#573e00">
    <block type="LED_setLEDState" id="LED_setLEDState">
        <field name="pin">5</field>
    </block>
    
    <block type="led_analog" id="led_analog">
    <field name="PIN">5</field>>

    <value name="VAL">
        <shadow type="math_uint8_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    </block>
</category>

<category name="%{BKY_ATBUZZER_CATEGORY}" id="BKY_ATBUZZER_CATEGORY" colour="#00bfff" secondaryColour="#00bfff">
    <block type="ATbuzzerState" id="ATbuzzerState">
        <field name="pin">25</field>
    </block>
</category>

<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#0000ff" secondaryColour="#0000ff">

<block type="buzzer_tone_d" id="buzzer_tone_d">
<field name="PIN">25</field>
<value name="dur">
    <shadow type="math_number">
        <field name="NUM">131</field>
    </shadow>
</value>
</block>

<block type="buzzer_music" id="buzzer_music">
<field name="PIN">25</field>
</block>

<block type="buzzer_notone" id="buzzer_notone">
<field name="PIN">25</field>
</block>
    
</category>

<category name="%{BKY_BUTTON_CATEGORY}" id="BUTTON_CATEGORY" colour="#7fff00" secondaryColour="#7fff00" >
    <block type="Button_readState" id="Button_readState">
        <field name="pin">25</field>
    </block>
    <block type="Button_readValue" id="Button_readValue">
        <field name="pin">25</field>
    </block>
</category>

<category name="%{BKY_PIR_CATEGORY}" id="PIR_CATEGORY" colour="#9acd32" secondaryColour="#9acd32" >
    <block type="pir_readValue" id="pir_readValue">
        <field name="pin">25</field>
    </block>
</category>

<category name="%{BKY_LIGHTSENSOR_CATEGORY}" id="LIGHTSENSOR_CATEGORY" colour="#556b2f" secondaryColour="#556b2f">
    <block type="lightSensor_readValue" id="lightSensor_readValue">
        <field name="pin">34</field>
    </block>
</category>


<category name="%{BKY_POTSENSOR_CATEGORY}" id="POTSENSOR_CATEGORY" colour="#008b8b" secondaryColour="#008b8b">
    <block type="PotSensor_readValue" id="PotSensor_readValue">
        <field name="pin">34</field>
    </block>
</category>

<category name="%{BKY_SOUNDSENSOR_CATEGORY}" id="SOUNDSENSOR_CATEGORY" colour="#ff1493" secondaryColour="#ff1493">
    <block type="SoundSensor_readValue" id="SoundSensor_readValue">
        <field name="pin">34</field>
    </block>
</category>

<category name="%{BKY_HC_SR04_CATEGORY}" id="HC_SR04_CATEGORY" colour="#ff00ff" secondaryColour="#ff00ff">
<block type="hc_sr04_read_distance" id="hc_sr04_read_distance">
    <field name="trig_pin">2</field>>
    <field name="echo_pin">6</field>>
</block>
</category>

<category name="%{BKY_DHT_CATEGORY}" id="DHT_CATEGORY" colour="#4b0082" secondaryColour="#4b0082">
     <block type="DHT_init">
           <field name="PIN">26</field>
     </block>

    <block type="KE_DHT">
    </block>
</category>

<category name="%{BKY_KS_SERVO_CATEGORY}" id="KS_SERVO_CATEGORY" colour="#7b68ee" secondaryColour="#7b68ee">
   <block type="ks_servo_angle" id="ks_servo_angle">

   <field name="pin">5</field>>
   <field name="CH">CH0</field>>

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
<field name="pin">5</field>>
</block>

</category>

<category name="%{BKY_BBRGBLEDSTRIP_CATEGORY}" id="BBRGBLEDSTRIP_CATEGORY" colour="#006400" secondaryColour="#006400">
    <block type="bbrgbLedStrip_init" id="bbrgbLedStrip_init">
        <value name="LEN">
            <shadow type="math_number">
                <field name="NUM">6</field>
            </shadow>
        </value>
        <field name="PIN">26</field>
    </block>

    <block type="rgbLedStrip_setPixelColor" id="rgbLedStrip_setPixelColor">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="rgbLedStrip_fill" id="rgbLedStrip_fill">
        <value name="FIRST">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="COUNT">
            <shadow type="math_whole_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="rgbLedStrip_color" id="rgbLedStrip_color">
        <value name="R">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="rgbLedStrip_setBrightness" id="rgbLedStrip_setBrightness">
        <value name="BRT">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="rgbLedStrip_clear" id="rgbLedStrip_clear">
    </block>
    <block type="rgbLedStrip_show" id="rgbLedStrip_show">
    </block>
    
</category>

<category name="%{BKY_FOURTUBE_CATEGORY}" id="FOURTUBE_CATEGORY" colour="#00ff00" secondaryColour="#00ff00">
    <block type="tm1650_string" id="tm1650_string">
    	<value name="tube_string">
	        <shadow type="text">
	            <field name="TEXT" disabled="true">abcd</field>
	        </shadow>
	    </value>
    </block>

    <block type="tm1650_dot" id="tm1650_dot">

    </block>

    <block type="tm1650_state" id="tm1650_state">

    </block>
</category>

<category name="%{BKY_LCD_CATEGORY}" id="LCD_CATEGORY" colour="#8fbc8b" secondaryColour="#8fbc8b">
    <block type="lcd_init" id="lcd_init">
        <field name="ADDR">0x27</field>
    </block>
    <block type="lcd_setCursorPosition" id="lcd_setCursorPosition">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="lcd_print" id="lcd_print">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Hello keyestudio</field>
            </shadow>
        </value>
    </block>
    <block type="lcd_clear" id="lcd_clear">
    </block>
    <block type="lcd_setBackLight" id="lcd_setBackLight">
    </block>
    <block type="lcd_setCursorStyle" id="lcd_setCursorStyle">
    </block>
</category>

<category name="%{BKY_MATIRXDISPLAY_CATEGORY}" id="MATIRXDISPLAY_CATEGORY" colour="#008080" secondaryColour="#008080">
    <block type="MatirxDisplay_init" id="MatirxDisplay_init">
        <field name="CS">15</field>
    </block>
    <sep gap="36"/>

    <block type="matrix_display_graph" id="matrix_display_graph">
    <value name="MATRIX_EIGHT">
        <shadow type="matrix_eight">
             <field name="MATRIX_EIGHT">0000000000</field>
        </shadow>
     </value>

         <value name="NUMBER">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
     </value>
     <value name="VAR">
     <shadow type="text">
         <field name="TEXT">matrix1</field>
     </shadow>
    </value>
     </block>

    <block type="MatirxDisplay_drawPixel" id="MatirxDisplay_drawPixel">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="MatirxDisplay_drawLine" id="MatirxDisplay_drawLine">
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
    <block type="MatirxDisplay_showChar" id="MatirxDisplay_showChar">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">A</field>
            </shadow>
        </value>
    </block>
    <block type="MatirxDisplay_showNumber" id="MatirxDisplay_showNumber">
        <value name="NUMBER">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="MatirxDisplay_scrollshow" id="MatirxDisplay_scrollshow">
       <value name="MESSAGE">
         <shadow type="text">
           <field name="TEXT">keyestudio</field>
         </shadow>
       </value>
        <value name="SPEED">
        <shadow type="math_whole_number">
            <field name="NUM">300</field>
        </shadow>
    </value>
    </block>
    <block type="MatirxDisplay_face" id="MatirxDisplay_face">

    </block>

    <block type="MatirxDisplay_fill" id="MatirxDisplay_fill"></block>
    <block type="MatirxDisplay_refresh" id="MatirxDisplay_refresh"></block>
    <block type="MatirxDisplay_clean" id="MatirxDisplay_clean"></block>
    <sep gap="36"/>
    <block type="MatirxDisplay_setBrightness" id="MatirxDisplay_setBrightness">
        <value name="BRT">
            <shadow type="MatirxDisplay_brightnessNumber">
                <field name="NUM">7</field>
            </shadow>
        </value>
    </block>
    <block type="MatirxDisplay_setRotation" id="MatirxDisplay_setRotation"></block>
</category>

<category name="%{BKY_IR_CATEGORY}" id="IR_CATEGORY" colour="#ffd700" secondaryColour="#ffd700">
    <block type="ir_init" id="ir_init">
        <field name="pin">2</field>>
    </block>
    <block type="ir_data" id="ir_data">

    </block>
    <block type="ir_read" id="ir_read">

    </block>
    <block type="ir_refresh" id="ir_refresh">

    </block>
</category>
<category name="%{BKY_WIFI_CATEGORY}" id="WIFI_CATEGORY" colour="#2f4f4f" secondaryColour="#2f4f4f">
    <block type="wifi_init" id="wifi_init">
        <value name="SSID">
            <shadow type="text">
                <field name="TEXT">ChinaNet_2.4G</field>
            </shadow>
        </value>
        <value name="PASSWD">
            <shadow type="text">
                <field name="TEXT">ChinaNet@233</field>
            </shadow>
        </value>
    </block>

    <block type="wifi_read_ip" id="wifi_read_ip"></block>

</category>
`;
}
exports = addToolbox;
