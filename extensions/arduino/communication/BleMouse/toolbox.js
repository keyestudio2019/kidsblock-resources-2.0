/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const MOUSE_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwElEQVR4nO2ZPWgUQRTHfxcisVAbMSqKYmMjFocEsRAFg9pdGYJB0sRKxFPjV5qzMCkkKRRRUSRoRI2tivjVKWivIESbCH4XGpJCk6wMvIVl2J3duXNnNnJ/+MPdzHuz77838+bNHDTxf2Ex0AF0AVXghLAqbR1iUyhsAE4BL4HfQJBCZfMCOCm+3rANeAjMZQg6iXPAA2Cry8BXA+OGoCaA+8AocE44Km0TBr87wKq8g98L/Ih5+FOgF1iXYYz1Yqt89HG+A3vyCn5nzHRRb63cwJhl4G7MtNpBDjgUechXoJJgtwzYDfQBp4V90qb64lCRMcPxD+YhYClwGbgErNT62oAeyS6zhnk+KzY94hOFGvMKcBFYgkNsB97VkYE+AJ14hlqM81pgf4BXwFXgrFB9fi19Udt5GcMbxiLBfAP6geUGe9V3XLJN6HcTj9gMPAeuAe0Wfu3i8wzYRMHQIkFFAwu/q77CYi0wFEmHtUhfTdq+AIPAGgqEEnAAmNIWaJyAkNNSpbbgGa3AjYQ0aRIQ8jawyOebv2fI81kEBFJKqLGc43DKRpVVQCBlCq5L6hlDQDNarVRJsZ+OKU9yxXDKIWVXjE9nzK4dRKjODU6gMsdnQyDqlJaERwa/T67WwpaU+azyfIherdYZTPEtuxCw33Lx2izmfS4E9Oco4JgLAWlBnI/YbhSGuGAh3puA97JD62iVQ0zhBQTAde3I2CZtwUIREAADEZ+BjD61IgmwWbxBU4AF6nmbZxbiL/BYyg7FJ0UScDRjMIpvgLcW9kdcCOi2CMiWXUUo5hph2YUAVfJO5hD8R5dHy5EcBAzjECuAn/8w+CnXR0rbbJTGKh5Q0i536+W4r2sV5D/fWw0EP1aE/41LsgHpV4sm/vI1bdKuzEckHSYFPinZxuYq3ssvUpYduyrsljZvc70JcsJf/kCKnwBbbbMAAAAASUVORK5CYII=';
    return `
<category name="%{BKY_BLE_MOUSE_CATEGORY}" id="BLE_MOUSE_CATEGORY" colour="#FF3399" secondaryColour="#C71585" iconURI="${MOUSE_ICO}">
    <block type="BLE_MOUSE_INIT" id="BLE_MOUSE_INIT">
        <value name="name">
            <shadow type="text">
                <field name="TEXT">BLE_Mouse</field>
            </shadow>
        </value>
        <value name="id">
            <shadow type="text">
                <field name="TEXT">QHrobot</field>
            </shadow>
        </value>
        <value name="battery">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
    <block type="BLE_MOUSE_CONNECTED" id="BLE_MOUSE_CONNECTED"> </block>
    <block type="BLE_MOUSE_CLICK" id="BLE_MOUSE_CLICK"> </block>
    <block type="BLE_MOUSE_WHEEL_MOVE" id="BLE_MOUSE_WHEEL_MOVE"> </block>
    <block type="BLE_MOUSE_MOVE" id="BLE_MOUSE_MOVE"> </block>
</category>`;
}

exports = addToolbox;
