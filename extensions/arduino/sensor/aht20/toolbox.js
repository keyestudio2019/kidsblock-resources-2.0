/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
 
    return `
<category name="%{BKY_AHT20_CATEGORY}" id="AHT20_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="aht20_read" id="aht20_read">

    </block>
</category>`;
}

exports = addToolbox;
