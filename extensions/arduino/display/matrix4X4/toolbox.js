/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    return `
<category name="%{BKY_MATRIX4X4_CATEGORY}" id="MATRIX4X4_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">



<block type="extend_matrix" id="extend_matrix">
<value name="MATRIX_CUSTOM">
<shadow type="matrix_custom">
    <field name="MATRIX_CUSTOM">1111111111111111</field>
</shadow>
</value>
</block>


</category>`;
}

exports = addToolbox;
