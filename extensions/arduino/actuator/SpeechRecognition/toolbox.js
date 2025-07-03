/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
    
<category name="%{BKY_SPEECH_RECOGNITION}" id="SPEECH_RECOGNITION" colour="#4C97FF" secondaryColour="#4C97FF">
    <block type="yuyininit" id="yuyininit">
        <field name="PIN1">0</field>
        <field name="PIN2">1</field>
    </block>

    <block type="yuyinshibie" id="yuyinshibie"></block>

    <block type="yuyinqinchu" id="yuyinqinchu"></block>

    <block type="boxiaoshu" id="boxiaoshu">
        <value name="XIAOSHU">
            <shadow type="math_number">
                <field name="NUM">12.34</field>
            </shadow>
        </value>
    </block>
    
    <block type="bozhengshu" id="bozhengshu">
        <value name="ZHENGSHU">
            <shadow type="math_number">
                <field name="NUM">25</field>
            </shadow>
        </value>
    </block>
    
    <block type="yuyinbobao" id="yuyinbobao">
    </block>
</category>

`;
}

exports = addToolbox;







