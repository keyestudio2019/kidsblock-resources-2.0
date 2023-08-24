/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_JOYSTICK_CATEGORY}" id="JOYSTICK_CATEGORY" colour="#4C97FF" secondaryColour="#3373CC" iconURI="">
    <block type="joyStick_i2c" id="joyStick_i2c">
    </block>
    <block type="joyStick_data" id="joyStick_data">
    </block>
</category>`;
}
exports = addToolbox;
