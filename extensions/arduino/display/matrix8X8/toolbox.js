/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    return `
<category name="%{BKY_MATRIX_EIGHT_CATEGORY}" id="MATRIX_EIGHT_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">

<block type="matrix_e" id="matrix_e">
  <value name="MATRIX_EIGHT">
      <shadow type="matrix_eight">
           <field name="MATRIX_EIGHT">0000000000</field>
      </shadow>
   </value>
</block>
</category>`;
}

exports = addToolbox;
