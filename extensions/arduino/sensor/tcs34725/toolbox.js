/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {


    return `
<category name="%{BKY_TCS34725_CATEGORY}" id="TCS34725_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">

    <block type="tcs34725_init" id="tcs34725_init">
    </block>
    <block type="tcs34725_get_rgb" id="tcs34725_get_rgb">
    </block>

</category>`;
}

exports = addToolbox;
