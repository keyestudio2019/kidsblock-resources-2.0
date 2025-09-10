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
        <field name="pin">23</field>
    </block>
    
    <block type="led_analog" id="led_analog">
    <field name="PIN">23</field>>

    <value name="VAL">
        <shadow type="math_uint8_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    </block>
</category>

<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#00bfff" secondaryColour="#00bfff">

<block type="buzzer_tone_d" id="buzzer_tone_d">
<field name="PIN">32</field>
<value name="dur">
    <shadow type="math_number">
        <field name="NUM">131</field>
    </shadow>
</value>
</block>

<block type="buzzer_music" id="buzzer_music">
<field name="PIN">32</field>
</block>

<block type="buzzer_notone" id="buzzer_notone">
<field name="PIN">32</field>
</block>
    
</category>
<category name="%{BKY_MOTOR130_CATEGORY}" id="MOTOR130_CATEGORY" colour="#0000ff" secondaryColour="#0000ff">
    <block type="motor130_digital" id="motor130_digital">
        <field name="IN1">17</field>
        <field name="IN2">18</field>
    </block>

    <block type="motor130_analog" id="motor130_analog">
        <field name="IN1">17</field>

        <field name="IN2">18</field>

        <value name="SPEED2">
            <shadow type="math_number">
                <field name="NUM">4096</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_PIR_CATEGORY}" id="PIR_CATEGORY" colour="#7fff00" secondaryColour="#7fff00" >
    <block type="pir_readValue" id="pir_readValue">
        <field name="pin">19</field>
    </block>
</category>

<category name="%{BKY_LIGHTSENSOR_CATEGORY}" id="LIGHTSENSOR_CATEGORY" colour="#9acd32" secondaryColour="#9acd32">
    <block type="lightSensor_readValue" id="lightSensor_readValue">
        <field name="pin">36</field>
    </block>
</category>

<category name="%{BKY_SOUNDSENSOR_CATEGORY}" id="SOUNDSENSOR_CATEGORY" colour="#556b2f" secondaryColour="#556b2f">
    <block type="SoundSensor_readValue" id="SoundSensor_readValue">
        <field name="pin">34</field>
    </block>
</category>
<category name="%{BKY_ADKEYSENSOR_CATEGORY}" id="ADKEYSENSOR_CATEGORY" colour="#008b8b" secondaryColour="#008b8b">
    <block type="adkeySensor_readValue" id="adkeySensor_readValue">
        <field name="pin">33</field>
    </block>
</category>
<category name="%{BKY_HC_SR04_CATEGORY}" id="HC_SR04_CATEGORY" colour="#ff1493" secondaryColour="#ff1493">
<block type="hc_sr04_read_distance" id="hc_sr04_read_distance">
    <field name="trig_pin">5</field>>
    <field name="echo_pin">4</field>>
</block>
</category>

<category name="%{BKY_JOYSTICK_CATEGORY}" id="JOYSTICK_CATEGORY" colour="#ff00ff" secondaryColour="#ff00ff">
    <block type="joyStick_xyValue" id="joyStick_xyValue">
        <field name="pin">35</field>
        <field name="xy">X</field>
    </block>
</category>

<category name="%{BKY_KS_SERVO_CATEGORY}" id="KS_SERVO_CATEGORY" colour="#4b0082" secondaryColour="#4b0082">
   <block type="ks_servo_angle" id="ks_servo_angle">

   <field name="pin">25</field>>
   <field name="CH">1</field>>

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
<field name="pin">25</field>>
</block>

</category>

<category name="%{BKY_BBRGBLEDSTRIP_CATEGORY}" id="BBRGBLEDSTRIP_CATEGORY" colour="#7b68ee" secondaryColour="#7b68ee">
    <block type="bbrgbLedStrip_init" id="bbrgbLedStrip_init">
        <value name="LEN">
            <shadow type="math_number">
                <field name="NUM">12</field>
            </shadow>
        </value>
        <field name="PIN">16</field>
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
                <field name="NUM">11</field>
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
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
    <block type="rgbLedStrip_clear" id="rgbLedStrip_clear">
    </block>
    <block type="rgbLedStrip_show" id="rgbLedStrip_show">
    </block>
</category>

<category name="%{BKY_BMP388_CATEGORY}" id="BMP388_CATEGORY" colour="#006400" secondaryColour="#006400">
    <block type="bmp388_init" id="bmp388_init">

    </block>
    <block type="bmp388_read_data" id="bmp388_read_data">

    </block>
    <block type="bmp388_show_data" id="bmp388_show_data">

    </block>

</category> 
<category name="%{BKY_AHT20_CATEGORY}" id="AHT20_CATEGORY" colour="#00ff00" secondaryColour="#00ff00">
    <block type="aht20_read" id="aht20_read">

    </block>
</category>
<category name="%{BKY_AK8975_CATEGORY}" id="AK8975_CATEGORY" colour="#8fbc8b" secondaryColour="#8fbc8b">
<block type="ak8975_init" id="ak8975_init">
</block>

<block type="ak8975_read" id="ak8975_read">
</block>
<block type="ak8975_degree" id="ak8975_degree">
</block>
</category>
<category name="%{BKY_RC522_CATEGORY}" id="RC522_CATEGORY" colour="#008080" secondaryColour="#008080">
    <block type="rc522_init" id="rc522_init">

    </block>

    <block type="rc522_read" id="rc522_read">

    </block>
</category>
<category name="%{BKY_OLED_CATEGORY}" id="OLED_CATEGORY" colour="#fe8780" secondaryColour="#fe8780">
    <block type="oled_init" id="oled_init">
    </block>
  
    <block type="oled_setText" id="oled_setText">
    </block>
    <block type="oled_setCursor" id="oled_setCursor">
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
    <block type="oled_print" id="oled_print">
        <value name="DATA">
            <shadow type="text">
                <field name="TEXT">Hello KidsBlock</field>
            </shadow>
        </value>
    </block>

    <block type="oled_image" id="oled_image">
    </block>
    <block type="oled_clear" id="oled_clear">
    </block>
    <block type="oled_refresh" id="oled_refresh">
    </block>

        <block type="oled_drawLine" id="oled_drawLine">
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
                <field name="NUM">128</field>
            </shadow>
        </value>
        <value name="Y1">
            <shadow type="math_whole_number">
                <field name="NUM">64</field>
            </shadow>
        </value>
    </block>
    <block type="oled_drawRect" id="oled_drawRect">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="W">
            <shadow type="math_whole_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="H">
            <shadow type="math_whole_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    
    <block type="oled_drawCircle" id="oled_drawCircle">
        <value name="X">
            <shadow type="math_whole_number">
                <field name="NUM">16</field>
            </shadow>
        </value>
        <value name="Y">
            <shadow type="math_whole_number">
                <field name="NUM">16</field>
            </shadow>
        </value>
        <value name="R">
            <shadow type="math_whole_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
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



