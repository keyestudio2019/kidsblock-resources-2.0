/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#27b6ac';

    const BLEKEYBOARD_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAErElEQVR4nO2aa4hVVRTH9yRZRPSSILGChiw1LHpIZZmQlfpNrA+iUZhJRAVFkhUyJdGTSutDZQ8rKbI0IiWLIuxND8tsRKIaC3sYoU2ZPWZq+sXirq3rLvfcMzrMdO+c/YPzYeZ/1557/nPO3muvvULIZDKZTP0BHABMAuYADwDPAauAZcAS4BZgBnB0GGgAhwBXAu8Cf9NzNgELgBNDIwMcDtwP/JG4ya3Ae8BL+lSsBN4CfujGlDeACaGRAPYGrgd+NzciT8IKYCZwZEH8EGAqsBjY5gx5ATgi1DvAUcBH5ov/BtwJDN3D8fYDrgK+NWO2A1NCvQKcBfxsvvAze2pAN4bcDnTq2P8CN4d6AzjPzAXyFEzro79zuns6FoR6AnhHv9hmYHTBZ5uAU4CLgBuAhfLfBS5TQ/ctiD8M+NSYcVyoF4BLgVeA4TU+06yriCyLtdiuecXEGmMdDLwIPA3sExooj7gX6HA33KXL5VqgDfgzYcprwAmh0QFGARvNjcmS+ggwGRic+PxooAX4wsSIgReHRoXKKtJuZvkngGG7kYtINrrFGDI/NCJUssH4H53Ri7zEPh3HhEYDmAY8D4zr5TiHAi9rXrLL65QZKAB76WR6jk6Sg0KZAAZpPUKSL8tPwDyZKEMZoFKQqcWqUAaA+QVG3BfKApWdZIrHZO4IZYJdzSifCRHdg6BpdzlNsLXNHT9kMvUNMFwzPnsdFBoEqVq57342sH9Pg5u08jNSiyaeD1Wv9+vMbpbm181nmroz4RJXgR7oyL1e7k0YZsrkZaKrqtAMnEt5mW2NmER5uSIbUSEbUcuIrXKGoAcxzZpLvBojgOXSwGH0Me4sYqbRmvVEPCJnFyOMNsoVZe9ysVOMJhXw8U5/1OgfAMcaTXKIb4w+28XOKTKiNbGs3m2C5iX0741e1eUiRVujPZuIlYJsZKrTDjRaRyJWjgcjTyb01UYfkTg/zUaQjei5Eb9Iew5wsl6nmlNu9FEeY/TJ7jzzWqPJdYfRNgBnGG2ce48fcrGz3BxxvtHkJH2p0dcBY40+3r2yc93YtxYZUUayEUVGfA6s0esTtwf5C/jY6F9SzWajrdHl2Ob164zWqo985FcX+50b+2un20a1f7RxJGrrXeyPLnZLkRFtO365U3vQBN2WOKmyO9bjnT7RaCsTY0s7YeRCpw11N1rVRQNcY/RlibGlZBA5yWkTioxoTQyY84gyG7EhMaC0AEdaErq8f8neBV3GIssTsTZ9vyDRbhTp9BUlKaoY/amC166q2cxVsJJGdGlj+CK9HnY3usloi7RfwbLa6fY93ab7g6gtdq3Jn7lY+7TEjlur231Kuxv7cZ3YI2+62PeLjCgj2YhaRnToSfVcvaQZ9KsYAbxttL6+pPHMstDp9rWTFsUbjdbimtmXutgVRUasT0w695ig6aGfkDMU83c7C1aNJTUa2YSRThvb2zxieugn/u/lszUxYCmNaCto85kV+olEil3Vbw1cXZBiS/lut1Ps01zdwG66OmpsjPry8o3rG52+3Rm1tsaGzm8GpWktsrMRFhiswWVDDBqSmqWvcxnYQL5u6mlfeCaTyWRChf8Aq2O2mA1FK74AAAAASUVORK5CYII=';


    //蓝牙键盘初始化
    Blockly.Blocks.esp32_BleKeyboard_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.esp32_BleKeyboard_init,
                args0: [
                    {
                        type: 'field_image',
                        src: BLEKEYBOARD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'deviceName'
                    },
                    {
                        type: 'input_value',
                        name: 'deviceManufacturer'
                    }               
                ],
                "tooltip": "蓝牙键盘初始化",
                colour: color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //蓝牙键盘已连接
    Blockly.Blocks.esp32_BleKeyboard_isConnected = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.esp32_BleKeyboard_isConnected,
                args0: [
                    {
                        type: 'field_image',
                        src: BLEKEYBOARD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [             
                ],
                "tooltip": "当蓝牙键盘已连接时执行的动作，要放在执行键盘的最前面",
                colour: color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_boolean']
            });
        }
    };

    //蓝牙键盘键值
    Blockly.Blocks.esp32_BleKeyboard_KeyValue = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.esp32_BleKeyboard_KeyValue,
                args0: [
                    {
                        type: 'field_image',
                        src: BLEKEYBOARD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [  
                    {
                        type: 'field_dropdown',
                        name: 'KeyValue',
                        options: [
                                  ['KEY_LEFT_CTRL' , 'KEY_LEFT_CTRL'],
                                  ['KEY_LEFT_SHIFT' , 'KEY_LEFT_SHIFT'],
                                  ['KEY_LEFT_ALT' , 'KEY_LEFT_ALT'],
                                  ['KEY_LEFT_GUI' , 'KEY_LEFT_GUI'],
                                  ['KEY_RIGHT_CTRL' , 'KEY_RIGHT_CTRL'],
                                  ['KEY_RIGHT_SHIFT' , 'KEY_RIGHT_SHIFT'],
                                  ['KEY_RIGHT_ALT' , 'KEY_RIGHT_ALT'],
                                  ['KEY_RIGHT_GUI' , 'KEY_RIGHT_GUI'],
                                  ['KEY_UP_ARROW' , 'KEY_UP_ARROW'],
                                  ['KEY_DOWN_ARROW' , 'KEY_DOWN_ARROW'],
                                  ['KEY_LEFT_ARROW' , 'KEY_LEFT_ARROW'],
                                  ['KEY_RIGHT_ARROW' , 'KEY_RIGHT_ARROW'],
                                  ['KEY_BACKSPACE' , 'KEY_BACKSPACE'],
                                  ['KEY_TAB' , 'KEY_TAB'],
                                  ['KEY_RETURN' , 'KEY_RETURN'],
                                  ['KEY_ESC' , 'KEY_ESC'],
                                  ['KEY_INSERT' , 'KEY_INSERT'],
                                  ['KEY_DELETE' , 'KEY_DELETE'],
                                  ['KEY_PAGE_UP' , 'KEY_PAGE_UP'],
                                  ['KEY_PAGE_DOWN' , 'KEY_PAGE_DOWN'],
                                  ['KEY_HOME' , 'KEY_HOME'],
                                  ['KEY_END' , 'KEY_END'],
                                  ['KEY_CAPS_LOCK' , 'KEY_CAPS_LOCK'],
                                  ['KEY_F1' , 'KEY_F1'],
                                  ['KEY_F2' , 'KEY_F2'],
                                  ['KEY_F3' , 'KEY_F3'],
                                  ['KEY_F4' , 'KEY_F4'],
                                  ['KEY_F5' , 'KEY_F5'],
                                  ['KEY_F6' , 'KEY_F6'],
                                  ['KEY_F7' , 'KEY_F7'],
                                  ['KEY_F8' , 'KEY_F8'],
                                  ['KEY_F9' , 'KEY_F9'],
                                  ['KEY_F10' , 'KEY_F10'],
                                  ['KEY_F11' , 'KEY_F11'],
                                  ['KEY_F12' , 'KEY_F12']
                                ]
                    }              
                ],
                "tooltip": "蓝牙键盘值",
                colour: color,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    //蓝牙键盘动作
    Blockly.Blocks.esp32_BleKeyboard_write_press = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.esp32_BleKeyboard_write_press,
                args0: [
                    {
                        type: 'field_image',
                        src: BLEKEYBOARD_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'model',
                        options: [
                                  [Blockly.Msg.esp32_BleKeyboard_write, "0"],
                                  [Blockly.Msg.esp32_BleKeyboard_print, "1"],
                                  [Blockly.Msg.esp32_BleKeyboard_press, "2"],
                                  [Blockly.Msg.esp32_BleKeyboard_release, "3"],
                                  [Blockly.Msg.esp32_BleKeyboard_releaseAll, "4"]
                                ]
                    },
                    {
                        type: 'input_value',
                        name: 'KeyValue'
                    }             
                ],
                "tooltip": "蓝牙键盘动作,单字节为键盘动作，多字符串时为“打印”输出",
                colour: color,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

   

    return Blockly;
}

exports = addBlocks;
