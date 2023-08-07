/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    return `
<category name="%{BKY_MATRIX8X16_CATEGORY}" id="MATRIX8X16_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">



<block type="matrix_8X16" id="matrix_8X16">
<value name="MATRIX_SIXTEEN">
<shadow type="matrix_sixteen">
    <field name="MATRIX_SIXTEEN">00000000000000000000000000</field>
</shadow>
</value>
</block>


</category>`;
}

exports = addToolbox;
