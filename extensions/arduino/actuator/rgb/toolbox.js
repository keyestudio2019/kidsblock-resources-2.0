/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
   
    
    return `
<category name="%{BKY_RGB_CATEGORY}" id="RGB_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00">
    <block type="rgb_digital" id="rgb_digital">
        <field name="PIN1">7</field>
        <field name="PIN2">A1</field>
        <field name="PIN3">A0</field>
    </block>

    <block type="rgb_analog" id="rgb_analog">
        <field name="PIN1">3</field>>

        <value name="val1">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>

        <field name="PIN2">5</field>

        <value name="val2">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>

        <field name="PIN3">6</field>

        <value name="val3">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

</category>`;
}

exports = addToolbox;
