/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
   
    
    return `
<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00">
<block type="buzzer_tone_d" id="buzzer_tone_d">
<field name="PIN">33</field>
<value name="dur">
    <shadow type="math_number">
        <field name="NUM">131</field>
    </shadow>
</value>
</block>

<block type="buzzer_music" id="buzzer_music">
<field name="PIN">33</field>
</block>

<block type="buzzer_notone" id="buzzer_notone">
<field name="PIN">33</field>
</block>
    
</category>`;
}

exports = addToolbox;
