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

<category name="%{BKY_LED_CATEGORY}" id="BKY_LED_CATEGORY" colour="#00BFFF" secondaryColour="#00BFFF">
    <block type="LED_setLEDState" id="LED_setLEDState">
        <field name="pin">2</field>
    </block>
    
    <block type="led_analog" id="led_analog">
    <field name="PIN">2</field>>

    <value name="VAL">
        <shadow type="math_uint8_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    </block>
</category>

<category name="%{BKY_BBRGBLEDSTRIP_CATEGORY}" id="BBRGBLEDSTRIP_CATEGORY" colour="#00BFFF" secondaryColour="#00BFFF">
    <block type="bbrgbLedStrip_init" id="bbrgbLedStrip_init">
        <value name="LEN">
            <shadow type="math_number">
                <field name="NUM">4</field>
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
                <field name="NUM">3</field>
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

<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#00BFFF" secondaryColour="#00BFFF">

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

<category name="%{BKY_BUTTON_CATEGORY}" id="BUTTON_CATEGORY" colour="#4169E1" secondaryColour="#4169E1" >
    <block type="Button_readState" id="Button_readState">
        <field name="pin">3</field>
    </block>
    <block type="Button_readValue" id="Button_readValue">
        <field name="pin">IO3</field>
    </block>
</category>

<category name="%{BKY_PIR_CATEGORY}" id="PIR_CATEGORY" colour="#4169E1" secondaryColour="#4169E1" >
    <block type="pir_readValue" id="pir_readValue">
        <field name="pin">3</field>
    </block>
</category>

<category name="%{BKY_INFRARED_CATEGORY}" id="INFRARED_CATEGORY" colour="#4169E1" secondaryColour="#4169E1" >
    <block type="infrared_readValue" id="infrared_readValue">
        <field name="pin">3</field>
    </block>
</category>

<category name="%{BKY_LIGHTSENSOR_CATEGORY}" id="LIGHTSENSOR_CATEGORY" colour="#000080" secondaryColour="#000080">
    <block type="lightSensor_readValue" id="lightSensor_readValue">
        <field name="pin">33</field>
    </block>
</category>

<category name="%{BKY_AHT20_CATEGORY}" id="AHT20_CATEGORY" colour="#000080" secondaryColour="#000080">
    <block type="aht20_read" id="aht20_read">
    </block>
</category>

<category name="%{BKY_ENS160_CATEGORY}" id="ENS160_CATEGORY" colour="#000080" secondaryColour="#000080" >
    <block type="ens160_read" id="ens160_read">
    </block>
</category>

<category name="%{BKY_KS_SERVO_CATEGORY}" id="KS_SERVO_CATEGORY" colour="#008B8B" secondaryColour="#008B8B">
   <block type="ks_servo_angle" id="ks_servo_angle">

   <field name="pin">5</field>>
   <field name="CH">0</field>>

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
<field name="pin">IO5</field>>
</block>

</category>

<category name="%{BKY_MOTOR130_CATEGORY}" id="MOTOR130_CATEGORY" colour="#008B8B" secondaryColour="#008B8B">
    <block type="motor130" id="motor130">
        <field name="IN1">18</field>
        <field name="IN2">19</field>
        <value name="SPEED2">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_RC522_CATEGORY}" id="RC522_CATEGORY" colour="#FF6347" secondaryColour="#FF6347">
    <block type="rc522_init" id="rc522_init">
    </block>
    <block type="rc522_read" id="rc522_read">
    </block>
</category>

<category name="%{BKY_OLED_CATEGORY}" id="OLED_CATEGORY" colour="#DC143C" secondaryColour="#DC143C">
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

</category>

<category name="%{BKY_WIFI_CATEGORY}" id="WIFI_CATEGORY" colour="#FFA500" secondaryColour="#FFA500">
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

    <block type="wifi_client_init" id="wifi_client_init"></block>

    <block type="wifi_client_connected" id="wifi_client_connected"></block>

    <block type="wifi_send_data" id="wifi_send_data"></block>

    <block type="wifi_read_data" id="wifi_read_data"></block>

</category>
`;
}
exports = addToolbox;
