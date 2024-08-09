/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
      
    return `
<category name="%{BKY_MOTOR130_CATEGORY}" id="MOTOR130_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00">
    <block type="motor130_digital" id="motor130_digital">
        <field name="IN1">2</field>
        <field name="IN2">6</field>
    </block>

    <block type="motor130_analog" id="motor130_analog">
        <field name="IN1">2</field>

        <field name="IN2">6</field>

        <value name="SPEED2">
            <shadow type="math_number">
                <field name="NUM">4096</field>
            </shadow>
        </value>
    </block>

</category>`;
}

exports = addToolbox;
