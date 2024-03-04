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

<category name="%{BKY_RELAY_CATEGORY}" id="BKY_RELAY_CATEGORY" colour="#4682b4" secondaryColour="#4682b4">
    <block type="RelayState" id="RelayState">
        <field name="pin">10</field>
    </block>
</category>

<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#00bfff" secondaryColour="#00bfff">
    <block type="buzzer_tone" id="buzzer_tone">
        <field name="PIN">4</field>
    </block>

    <block type="buzzer_tone_d" id="buzzer_tone_d">
        <field name="PIN">4</field>
    </block>

    <block type="buzzer_music" id="buzzer_music">
        <field name="PIN">4</field>
    </block>

    <block type="buzzer_notone" id="buzzer_notone">
        <field name="PIN">4</field>
    </block>
    
</category>

<category name="%{BKY_BUTTON_CATEGORY}" id="BUTTON_CATEGORY" colour="#0000ff" secondaryColour="#0000ff" >
    <block type="Button_readState" id="Button_readState">
        <field name="pin">A0</field>
    </block>
    <block type="Button_readValue" id="Button_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_PIR_CATEGORY}" id="PIR_CATEGORY" colour="#7fff00" secondaryColour="#7fff00" >
    <block type="pir_readValue" id="pir_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_LIGHTSENSOR_CATEGORY}" id="LIGHTSENSOR_CATEGORY" colour="#9acd32" secondaryColour="#9acd32">
    <block type="lightSensor_readValue" id="lightSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_UVSENSOR_CATEGORY}" id="UVSENSOR_CATEGORY" colour="#556b2f" secondaryColour="#556b2f">
    <block type="UVSensor_readValue" id="UVSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>


<category name="%{BKY_ADKEYSENSOR_CATEGORY}" id="ADKEYSENSOR_CATEGORY" colour="#008b8b" secondaryColour="#008b8b">
    <block type="adkeySensor_readValue" id="adkeySensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_WATERSENSOR_CATEGORY}" id="WATERSENSOR_CATEGORY" colour="#ff1493" secondaryColour="#ff1493">
    <block type="waterSensor_readValue" id="waterSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_SOILSENSOR_CATEGORY}" id="SOILSENSOR_CATEGORY" colour="#ff00ff" secondaryColour="#ff00ff">
    <block type="SoilSensor_readValue" id="SoilSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>

<category name="%{BKY_DHT_CATEGORY}" id="DHT_CATEGORY" colour="#4b0082" secondaryColour="#4b0082">
    <block type="dht_init" id="dht_init">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <field name="PIN">2</field>
    </block>
    <block type="dht_readHumidity" id="dht_readHumidity">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="dht_readTemperature" id="dht_readTemperature">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>

<category name="%{BKY_WS2812B_CATEGORY}" id="WS2812B_CATEGORY" colour="#008000" secondaryColour="#008000">
    <block type="ws2812b_init" id="ws2812b_init">
        <field name="PIN">A0</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_setBrightness" id="ws2812b_setBrightness">
        <field name="PIN">A0</field>
        <value name="BRIGHTNESS">
            <shadow type="ws2812b_brightnessNumber">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_clear" id="ws2812b_clear">
        <field name="PIN">A0</field>
    </block>
    <block type="ws2812b_setRangeColor" id="ws2812b_setRangeColor">
        <field name="PIN">A0</field>
        <value name="START">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="END">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
     <block type="ws2812b_rgbToColor" id="ws2812b_rgbToColor">
        <value name="RED">
            <shadow type="ws2812b_brightnessNumber">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="GREEN">
            <shadow type="ws2812b_brightnessNumber">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="BLUE">
            <shadow type="ws2812b_brightnessNumber">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_showRainbow" id="ws2812b_showRainbow">
        <field name="PIN">A0</field>
        <value name="NUM1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="NUM2">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="COR1">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="COR2">
            <shadow type="math_number">
                <field name="NUM">360</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_shift" id="ws2812b_shift">
        <field name="PIN">A0</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_rotate" id="ws2812b_rotate">
        <field name="PIN">A0</field>
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="ws2812b_showBarGraph" id="ws2812b_showBarGraph">
        <field name="PIN">A0</field>
        <value name="NUM1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="NUM2">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="VAL1">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="VAL2">
            <shadow type="math_number">
                <field name="NUM">360</field>
            </shadow>
        </value>
    </block>
</category>

<category name="%{BKY_LCD_CATEGORY}" id="LCD_CATEGORY" colour="#008b8b" secondaryColour="#008b8b">
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

`;
}

exports = addToolbox;
