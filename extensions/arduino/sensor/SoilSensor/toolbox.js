/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SOILSENSOR_CATEGORY}" id="SOILSENSOR_CATEGORY" colour="#D39DDB" secondaryColour="#BA55D3" iconURI="">
    <block type="soilSensor_readValue" id="soilSensor_readValue">
        <field name="pin">A0</field>
    </block>
</category>`;
}
exports = addToolbox;
