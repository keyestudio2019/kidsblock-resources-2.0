/**
 * Sengo2视觉传感器工具箱配置
 */

function addToolbox() {
    return `
<category name="%{BKY_SENGO2_CATEGORY}" id="SENGO2_CATEGORY" colour="#EF5411" secondaryColour="#CC4A0E">
    <label text="%{BKY_SENGO2_SETUP}"></label>
    <block type="sengo2_begin" id="sengo2_begin">
        <field name="MODE">Wire</field>
        <field name="ADDR">0x60</field>
    </block>
    <block type="sengo2_led_set_color" id="sengo2_led_set_color">
        <field name="DETECTED_COLOR">kLedGreen</field>
        <field name="UNDETECTED_COLOR">kLedRed</field>
        <value name="LEVAL">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_set" id="sengo2_vision_set">
        <field name="VISION_STA">ON</field>
        <field name="VISION_TYPE">Sengo2::kVisionColor</field>
    </block>
    <block type="sengo2_vision_set_param_num" id="sengo2_vision_set_param_num">
        <field name="VISION_TYPE">Sengo2::kVisionColor</field>
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_color_param" id="sengo2_vision_color_param">
        <value name="XVALUE">
            <shadow type="math_whole_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="YVALUE">
            <shadow type="math_whole_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="WIDTH">
            <shadow type="math_whole_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="HIGHT">
            <shadow type="math_whole_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_blob_param" id="sengo2_vision_blob_param">
        <value name="WIDTH">
            <shadow type="math_whole_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="HIGHT">
            <shadow type="math_whole_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <field name="COLOR_LABLE">Sengo2::kColorRed</field>
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_blob_max" id="sengo2_vision_blob_max">
        <value name="MODE">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_apriltag_mode" id="sengo2_vision_apriltag_mode">
        <field name="MODE">Sengo2::kVisionModeFamily36H11</field>
    </block>
    <block type="sengo2_vision_line_max" id="sengo2_vision_line_max">
        <value name="MODE">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_opera_param" id="sengo2_vision_opera_param">
        <field name="VISION_TYPE">Sengo2::kVisionLearning</field>
        <field name="COLOR_LABLE">100</field>
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    
    <label text="%{BKY_SENGO2_RUN}"></label>
    <block type="sengo2_vision_get_result" id="sengo2_vision_get_result">
        <field name="VISION_TYPE">Sengo2::kVisionColor</field>
    </block>
    <block type="sengo2_vision_color_value" id="sengo2_vision_color_value">
        <field name="OBJ_INFO">kLabel</field>
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_get_value" id="sengo2_vision_get_value">
        <field name="VISION_TYPE">Sengo2::kVisionBlob</field>
        <field name="OBJ_INFO">kXValue</field>
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_line_value" id="sengo2_vision_line_value">
        <field name="OBJ_INFO">kXValue</field>
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_qrcode_value" id="sengo2_vision_qrcode_value">
        <field name="OBJ_INFO">kXValue</field>
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_qrcode_string" id="sengo2_vision_qrcode_string"></block>
    <block type="sengo2_vision_color_label" id="sengo2_vision_color_label">
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_blob_label" id="sengo2_vision_blob_label">
        <field name="COLOR_LABLE">Sengo2::kColorRed</field>
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_card_label" id="sengo2_vision_card_label">
        <field name="CARD_LABLE">Sengo2::kCardForward</field>
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="sengo2_vision_class20_label" id="sengo2_vision_class20_label">
        <field name="Class20_LABLE">Sengo2::kAirplane</field>
        <value name="NUM">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox; 