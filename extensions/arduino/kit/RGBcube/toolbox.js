/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    return `
<category name="%{BKY_RGBCUBE_CATEGORY}" id="RGBCUBE_CATEGORY" colour="#0000ff" secondaryColour="#0000ff">

<block type="RGBcube_init" id="RGBcube_init">
</block>


<block type="RGBcube_all" id="RGBcube_all">
</block>


<block type="RGBcube_any" id="RGBcube_any">
<value name="red">
<shadow type="math_uint8_number">
    <field name="NUM">0</field>
</shadow>
</value>
<value name="green">
<shadow type="math_uint8_number">
    <field name="NUM">0</field>
</shadow>
</value>
<value name="blue">
<shadow type="math_uint8_number">
    <field name="NUM">0</field>
</shadow>
</value>
</block>

<block type="RGBcube_single" id="RGBcube_single">
<value name="red">
<shadow type="math_uint8_number">
    <field name="NUM">0</field>
</shadow>
</value>
<value name="green">
<shadow type="math_uint8_number">
    <field name="NUM">0</field>
</shadow>
</value>
<value name="blue">
<shadow type="math_uint8_number">
    <field name="NUM">0</field>
</shadow>
</value>
</block>


<block type="RGBcube_line" id="RGBcube_line">
</block>

<block type="RGBcube_plane" id="RGBcube_plane">
</block>

<block type="RGBcube_sphere" id="RGBcube_sphere">
</block>

<block type="RGBcube_box" id="RGBcube_box">
</block>

</category>`;
}

exports = addToolbox;
