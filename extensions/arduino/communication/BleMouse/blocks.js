/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#27b6ac';
    const secondaryColour = '#C71585';

    const MOUSE_ICO ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyUlEQVR4nO2ZO2gUQRjHN0FJCk0TTBRFsbERi0VELETBoHYpQ1DEJlYSvGh8pTkLYxGSIkFUFAkaUWOrQXx1CtorCJomgu9CQ1Jokp8M+VbGZXdu9+52ZiP3g4G7ee3/fzuPb+Y8r8Z/BNAIbAM6gAJwSlJB8lRZo5cngI3AGeAF8IvSqDrPgdOqrUvhO4AJYJ7ymQceANttCl8DjBtEvQPuA6PAgKRRyVNlcdwBVmctfj/wPeLhT4DDwPoEfWyQuqpNmG/AvqzE744YLupX8yvo0wfuRgyrXdVVv/iwbu0hX4D2mHpNwF6gCzgrqUvymmLatEufAUezMLASuAxcAlpDZQ3AQVld5gzjfE7qqLoNoT5agSvARWBF1Q0YjO0E3pKeSaDNmtAY8WoyLoSE/QZeAleB85LU51dSprOg+nBpYEwT8xXoBZoN9ZuBk7LaBNy0q/pfQVuAZ8A1oCVFuxZp8xTY7OUJoF6J0oUF31WZl1eAdcAFbTksamVFyfsM9ANrvbwA1AFHgOnQBI0yEDAjUWq9a/HLgBsxy6TJQMBtYLnLX/5ejLCkBpBQos6FgWOYSWpA0W1bvAqpZ4lnVo+VJNYx1Z8JhydZGxg0iFHR5J6INm0Ru7bOgM11/hPxTBjaPjS0+2hlLgBbMdMfipX+xjqyB5jwbRg4lHLyppnMB2wY6M3QwAkbBkqJGNbqblJJ+z6S1LxLA+/VDh2za08uBQOK6/qRUY6cKo+lYkDRp7XpIxnFPBlIM3kDagayegPn0rbJg4FHEnao9DhPBo6TnNfAmxT1e2wY6CQ7OvIQzFWCb+soOZWB+A/WjpbAUAYGBq2IFwOrgB9VFD9t9UhZxmpUioJV8dpc0C93y2XcybWK9r/wrQrEjzn/31jeRE/E1aKJn06GTYIr8yFZDuOYkiuZxFfxrt6ILzt2QVKn5LkZ6zW87PgD4IXkw46cJz0AAAAASUVORK5CYII=";


    Blockly.Blocks.BLE_MOUSE_INIT = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.BLE_MOUSE_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: MOUSE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                      type: "input_value",
                      name: "name"
                    },
                    {
                      type: "input_value",
                      name: "id"
                    },
                    {
                      type: "input_value",
                      name: "battery"
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.BLE_MOUSE_CONNECTED = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.BLE_MOUSE_CONNECTED,
                args0: [
                    {
                        type: 'field_image',
                        src: MOUSE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.BLE_MOUSE_CLICK = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.BLE_MOUSE_CLICK,
                args0: [
                    {
                        type: 'field_image',
                        src: MOUSE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Type',
                        options:[
                                [Blockly.Msg.LEFT_BUT,'MOUSE_LEFT'],
                                [Blockly.Msg.RIGHT_BUT,'MOUSE_RIGHT'],
                                [Blockly.Msg.WHEEL,'MOUSE_MIDDLE'],
                                [Blockly.Msg.FORWARD,'MOUSE_FORWARD'],
                                [Blockly.Msg.BACKWARD,'MOUSE_BACK']
                                ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.BLE_MOUSE_WHEEL_MOVE = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.BLE_MOUSE_WHEEL_MOVE,
                args0: [
                    {
                        type: 'field_image',
                        src: MOUSE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Dir',
                        options:[
                                [Blockly.Msg.BLE_MOUSE_WHEEL_MOVE_UP,"(0,0,1)"],
                                [Blockly.Msg.BLE_MOUSE_WHEEL_MOVE_DOWN,"(0,0,-1)"],
                                [Blockly.Msg.BLE_MOUSE_WHEEL_MOVE_LEFT,"(0,0,0,-1)"],
                                [Blockly.Msg.BLE_MOUSE_WHEEL_MOVE_RIGHT,"(0,0,0,1)"]                                ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.BLE_MOUSE_MOVE = {
        init: function () {
            this.jsonInit({
                message0:'%1',
                message1: Blockly.Msg.BLE_MOUSE_MOVE,
                args0: [
                    {
                        type: 'field_image',
                        src: MOUSE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'Dir',
                        options:[
                                [Blockly.Msg.BLE_MOUSE_WHEEL_MOVE_UP,"(0,1)"],
                                [Blockly.Msg.BLE_MOUSE_WHEEL_MOVE_DOWN,"(0,-1)"],
                                [Blockly.Msg.BLE_MOUSE_WHEEL_MOVE_LEFT,"(-1,0)"],
                                [Blockly.Msg.BLE_MOUSE_WHEEL_MOVE_RIGHT,"(1,0)"]                                ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


   

    return Blockly;
}

exports = addBlocks;
