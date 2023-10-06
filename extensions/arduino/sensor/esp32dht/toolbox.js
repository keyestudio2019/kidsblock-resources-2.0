/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
    <category name="%{BKY_DHT_CATEGORY}" id="DHT_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="DHT_init">
          <field name="PIN">26</field>
    </block>

   <block type="KE_dht">
   </block>
</category>`;
}

exports = addToolbox;
