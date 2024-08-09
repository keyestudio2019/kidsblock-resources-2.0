/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    
    return `
<category name="%{BKY_MP3_CATEGORY}" id="MP3_CATEGORY" colour="#009900" secondaryColour="#009900">
        <block type="MP3_control">
            <field name="RXPIN">4</field>
            <field name="TXPIN">5</field>
        </block>
        <block type="MP3_loop">
            <field name="RXPIN">4</field>
            <field name="TXPIN">5</field>
        </block>
        <block type="MP3_eq">
            <field name="RXPIN">4</field>
            <field name="TXPIN">5</field>
        </block>
        <block type="MP3_vol">
            <field name="RXPIN">4</field>
            <field name="TXPIN">5</field>
            <value name="vol">
                <shadow type="math_number">
                    <field name="NUM">20</field>
                </shadow>
            </value>
        </block>
        <block type="MP3_play">
            <field name="RXPIN">4</field>
            <field name="TXPIN">5</field>
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block> 
</category>`;
}

exports = addToolbox;
