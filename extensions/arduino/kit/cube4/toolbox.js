/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    return `
<category name="%{BKY_CUBE4_CATEGORY}" id="CUBE4_CATEGORY" colour="#0000ff" secondaryColour="#0000ff">
<block type="CUBE4_init" id="CUBE4_init">
</block>

<block type="CUBE4_one" id="CUBE4_one">
   <value name="LAYER">
   </value>
   <value name="MATRIX_CUSTOM">
      <shadow type="matrix_custom">
         <field name="MATRIX_CUSTOM">0000000000000000</field>
      </shadow>
   </value>
</block>

<block type="CUBE4_effect" id="CUBE4_effect">

<value name="SPEED">
    <shadow type="math_whole_number">
        <field name="NUM">200</field>
    </shadow>
</value>


<value name="CYCLES">
    <shadow type="math_whole_number">
         <field name="NUM">1</field>
    </shadow>
</value>
</block>

<block type="CUBE4_all_on" id="CUBE4_all_on">
</block>

<block type="CUBE4_all_off" id="CUBE4_all_off">
</block>

</category>`;
}

exports = addToolbox;
