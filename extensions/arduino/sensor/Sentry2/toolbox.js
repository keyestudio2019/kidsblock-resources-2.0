/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
    <category name="%{BKY_SENTRY2_CATEGORY}" id="SENTRY2_CATEGORY" colour="#0066CC" secondaryColour="#005AB5">
        <block id="Sentry2Begin" type="Sentry2Begin"></block>
        <block id="Sentry2VisionSetStatus" type="Sentry2VisionSetStatus"></block>
        <block id="Sentry2CameraSetAwb" type="Sentry2CameraSetAwb"></block>
        <block id="Sentry2SetParamNum" type="Sentry2SetParamNum">
        <value name="max_num">
        <shadow type="vision_objs_slider">
          <field name="NUM">1</field>
        </shadow>
      </value>
        </block>
        <block id="Sentry2SetVisionParam" type="Sentry2SetVisionParam">
          <value name="x">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="y">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="w">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="h">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="lable">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <!-- Color 算法参数-->
        <block id="Sentry2SetColorParam" type="Sentry2SetColorParam">
          <value name="x">
            <shadow type="math_number">
              <field name="NUM">120</field>
            </shadow>
          </value>
          <value name="y">
            <shadow type="math_number">
              <field name="NUM">120</field>
            </shadow>
          </value>
          <value name="w">
            <shadow type="math_number">
              <field name="NUM">20</field>
            </shadow>
          </value>
          <value name="h">
            <shadow type="math_number">
              <field name="NUM">20</field>
            </shadow>
          </value>
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry2SetBlodParam" type="Sentry2SetBlodParam">
          <value name="w">
            <shadow type="math_number">
              <field name="NUM">15</field>
            </shadow>
          </value>
          <value name="h">
            <shadow type="math_number">
              <field name="NUM">15</field>
            </shadow>
          </value>
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry2VisionDetectedCount" type="Sentry2VisionDetectedCount"></block>
        <block id="Sentry2GetValue" type="Sentry2GetValue">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry2GetValueNomal" type="Sentry2GetValueNomal">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry2ColorRcgValue" type="Sentry2ColorRcgValue">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry2LineValue" type="Sentry2LineValue">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry2QrRcgValue" type="Sentry2QrRcgValue"></block>
        <block id="Sentry2GetQrCodeValue" type="Sentry2GetQrCodeValue"></block>
        <block id="Sentry2DetectedColor" type="Sentry2DetectedColor">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry2DetectedBlob" type="Sentry2DetectedBlob">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry2DetectedCard" type="Sentry2DetectedCard">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry2Detected20Class" type="Sentry2Detected20Class">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
  </category>`;
}

exports = addToolbox;
