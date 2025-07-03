function addToolbox() {
    return `
<category name="%{BKY_SENGO1_CATEGORY}" id="SENGO1_CATEGORY" colour="#EF5411" secondaryColour="#FF5309">
    <label text="%{BKY_SENGO1_SETUP}"></label>
    <block type="sengo1_begin" id="sengo1_begin">
        <field name="mode_obj">Wire</field>
        <field name="addr_obj">0x60</field>
    </block>
        <block type="sengo1_led_set_color" id="sengo1_led_set_color">
        <field name="led_color_obj1">kLedBlue</field>
        <field name="led_color_obj2">kLedRed</field>
        <value name="level">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo1_vision_set_status" id="sengo1_vision_set_status"></block>
    <block type="sengo1_vision_color_set_param" id="sengo1_vision_color_set_param">
        <value name="x">
            <shadow type="math_whole_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="y">
            <shadow type="math_whole_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="w">
            <shadow type="math_whole_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="h">
            <shadow type="math_whole_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
    </block>
    <block type="sengo1_vision_blob_set_param" id="sengo1_vision_blob_set_param">
        <value name="w">
            <shadow type="math_whole_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="h">
            <shadow type="math_whole_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <field name="lable">Sengo1::kColorRed</field>
    </block>
    <block type="sengo1_vision_face_set_param" id="sengo1_vision_face_set_param">
        <field name="lable">100</field>
        <value name="index">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    
    <label text="%{BKY_SENGO1_RUN}"></label>
    <block type="sengo1_vision_detected_count" id="sengo1_vision_detected_count"></block>
    <block type="sengo1_vision_obj_color" id="sengo1_vision_obj_color"></block>
    <block type="sengo1_vision_obj" id="sengo1_vision_obj"></block>
    <block type="sengo1_vision_obj_line" id="sengo1_vision_obj_line"></block>
    <block type="sengo1_vision_obj_qr" id="sengo1_vision_obj_qr"></block>
    <block type="sengo1_get_qr_value" id="sengo1_get_qr_value"></block>
    <block type="sengo1_vision_color" id="sengo1_vision_color"></block>
    <block type="sengo1_vision_card_blob" id="sengo1_vision_card_blob">
        <field name="vision_card_obj">Sengo1::kColorRed</field>
    </block>
    <block type="sengo1_vision_ball" id="sengo1_vision_ball"></block>
    <block type="sengo1_vision_card" id="sengo1_vision_card"></block>
</category>`;
}

exports = addToolbox; 