/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
  
    return `
<category name="%{BKY_MATRIX8_16_CATEGORY}" id="MATRIX8_16_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="matrix8_16_init" id="matrix8_16_init">
        <field name="SDA">A4</field>>
        <field name="SCL">A5</field>>
    </block>

    <block type="matrix8_16_display" id="matrix8_16_display">
    <value name="MATRIX_SIXTEEN">
        <shadow type="matrix_sixteen">
             <field name="MATRIX_SIXTEEN">0000000000</field>
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

    <block type="matrix8_16_face" id="matrix8_16_face">

    </block>

    <block type="matrix8_16_clear" id="matrix8_16_clear">

    </block>

</category>`;
}

exports = addToolbox;
