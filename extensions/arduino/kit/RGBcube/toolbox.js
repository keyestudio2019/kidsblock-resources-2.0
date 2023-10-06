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

        <block type="RGBcube_single2" id="RGBcube_single2">
            <value name="X">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Z">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
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

        <block type="RGBcube_line2" id="RGBcube_line2">
            <value name="X1">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y1">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Z1">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="X2">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y2">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Z2">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="R">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="G">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="B">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>

        <block type="RGBcube_plane" id="RGBcube_plane">
        </block>

        <block type="RGBcube_plane2" id="RGBcube_plane2">
            <value name="AXIS">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="LAY">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="R">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="G">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="B">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>

        <block type="RGBcube_sphere" id="RGBcube_sphere">
        </block>

        <block type="RGBcube_sphere2" id="RGBcube_sphere2">
            <value name="X">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Z">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="SIZE">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="R1">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="G1">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="B1">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="R2">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="G2">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="B2">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>

        <block type="RGBcube_box" id="RGBcube_box">
        </block>

        <block type="RGBcube_box2" id="RGBcube_box2">
            <value name="X1">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y1">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Z1">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="X2">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y2">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Z2">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="R1">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="G1">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="B1">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="STYLE">
                <shadow type="math_whole_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="R2">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="G2">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="B2">
                <shadow type="math_uint8_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        
        <block type="RGBcube_light_effect" id="RGBcube_light_effect">
        </block>

    </category>`;
}

exports = addToolbox;
