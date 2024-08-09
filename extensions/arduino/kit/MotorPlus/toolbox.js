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

<category name="%{BKY_KS_TEXT_LABEL}" id="KS_TEXT_LABEL" colour="#41be8a" secondaryColour="#42CCFF">
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
<category name="%{BKY_ROBOT_CATEGORY}" id="ROBOT_CATEGORY" colour="#0000ff" secondaryColour="#0000ff">

     <block type="robot_forward" id="robot_forward">
       <value name="SPEED_L">
          <shadow type="math_uint8_number">
            <field name="NUM">200</field>
          </shadow>
       </value>
       <value name="SPEED_R">
         <shadow type="math_uint8_number">
            <field name="NUM">200</field>
         </shadow>
       </value>
    </block>
    <block type="robot_back" id="robot_back">
    <value name="SPEED_L">
    <shadow type="math_uint8_number">
      <field name="NUM">200</field>
    </shadow>
 </value>
 <value name="SPEED_R">
   <shadow type="math_uint8_number">
      <field name="NUM">200</field>
   </shadow>
 </value>
    </block>

    <block type="robot_left" id="robot_left">
    <value name="SPEED_L">
    <shadow type="math_uint8_number">
      <field name="NUM">200</field>
    </shadow>
 </value>
 <value name="SPEED_R">
   <shadow type="math_uint8_number">
      <field name="NUM">200</field>
   </shadow>
 </value>
    </block>

  <block type="robot_right" id="robot_right">
    <value name="SPEED_L">
    <shadow type="math_uint8_number">
        <field name="NUM">200</field>
    </shadow>
    </value>
    <value name="SPEED_R">
    <shadow type="math_uint8_number">
        <field name="NUM">200</field>
    </shadow>
    </value>
  </block>

  <block type="robot_stop" id="robot_stop">
  </block>

</category>
`;
}

exports = addToolbox;
