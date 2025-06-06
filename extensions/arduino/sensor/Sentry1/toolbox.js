/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
    <category name="%{BKY_SENTRY_CATEGORY}" id="SENTRY_CATEGORY" colour="#0066CC" secondaryColour="#005AB5">
        <block id="Sentry1Begin" type="Sentry1Begin"></block>
        <block id="Sentry1VisionSetStatus" type="Sentry1VisionSetStatus"></block>
        <block id="Sentry1LedSetColor" type="Sentry1LedSetColor">
          <value name="level">
            <shadow type="led_leval_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry1VisionSetParamNum" type="Sentry1VisionSetParamNum">
          <value name="max_num">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry1SetColorParam" type="Sentry1SetColorParam">
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
        <block id="Sentry1SetBlodParam" type="Sentry1SetBlodParam">
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
        <block id="Sentry1CameraSetAwb" type="Sentry1CameraSetAwb"></block>
        <block id="Sentry1VisionDetectedCount" type="Sentry1VisionDetectedCount"></block>
        <block id="Sentry1GetValue" type="Sentry1GetValue">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry1ColorRcgValue" type="Sentry1ColorRcgValue">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry1LineValue" type="Sentry1LineValue">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry1QrRcgValue" type="Sentry1QrRcgValue"></block>
        <block id="Sentry1GetQrCodeValue" type="Sentry1GetQrCodeValue"></block>
        <block id="Sentry1DetectedColor" type="Sentry1DetectedColor">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry1DetectedBlob" type="Sentry1DetectedBlob">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry1DetectedCard" type="Sentry1DetectedCard">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block id="Sentry1DetectedBall" type="Sentry1DetectedBall">
          <value name="index">
            <shadow type="vision_objs_slider">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
  </category>`;
}

exports = addToolbox;
