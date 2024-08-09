/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF4500';
    const color2 = '#41be8a';
    const color3 = '#573e00';
    const color4 = '#008000';
    const color5 = '#0000FF';

    const secondaryColour = '#CD5C5C';
    const IMG_TFT_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzNjYwNTYxNDQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNjYyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiPjxwYXRoIGQ9Ik04NDggODY0SDE3NmMtMTcuNiAwLTMyIDE0LjQtMzIgMzJzMTQuNCAzMiAzMiAzMmg2NzJjMTcuNiAwIDMyLTE0LjQgMzItMzJzLTE0LjQtMzItMzItMzJ6TTYwOCAyNzYuOGwtMTkyIDExMmMtMTQuNCA5LjYtMjAuOCAyOC44LTExLjIgNDMuMiA4IDE2IDI4LjggMjAuOCA0My4yIDExLjJsMTkyLTExMmMxNC40LTkuNiAyMC44LTI4LjggMTEuMi00My4yLTgtMTYtMjcuMi0yMC44LTQzLjItMTEuMnpNODk2IDk2SDEyOGMtMzUuMiAwLTY0IDI4LjgtNjQgNjR2NTc2YzAgMzUuMiAyOC44IDY0IDY0IDY0aDc2OGMzNS4yIDAgNjQtMjguOCA2NC02NFYxNjBjMC0zNS4yLTI4LjgtNjQtNjQtNjR6IG0wIDYyNGMwIDkuNi02LjQgMTYtMTYgMTZIMTQ0Yy05LjYgMC0xNi02LjQtMTYtMTZWMTc2YzAtOS42IDYuNC0xNiAxNi0xNmg3MzZjOS42IDAgMTYgNi40IDE2IDE2djU0NHpNNTYwIDQ1Mi44bC0xOTIgMTEyYy0xNC40IDkuNi0yMC44IDI4LjgtMTEuMiA0My4yIDggMTYgMjguOCAyMC44IDQzLjIgMTEuMmwxOTItMTEyYzE0LjQtOS42IDIwLjgtMjguOCAxMS4yLTQzLjItOC0xNi0yNy4yLTIwLjgtNDMuMi0xMS4yeiIgcC1pZD0iMTA2NjMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";
    const IMG_QR_CODE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzNjYxNDQxNDY0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTQ4OS42IDQ4OS44SDE5OC40Yy0zNy4xIDAtNjcuMi0zMC4xLTY3LjItNjcuMnYtMjI0YzAtMzcuMSAzMC4xLTY3LjIgNjcuMi02Ny4yaDIyNGMzNy4xIDAgNjcuMiAzMC4xIDY3LjIgNjcuMnYyOTEuMnogbS0yNjguOC04OS42SDQwMFYyMjFIMjIwLjh2MTc5LjJ6TTgyNS42IDQ4OS44SDUzNC40VjE5OC42YzAtMzcuMSAzMC4xLTY3LjIgNjcuMi02Ny4yaDIyNGMzNy4xIDAgNjcuMiAzMC4xIDY3LjIgNjcuMnYyMjRjMCAzNy4xLTMwLjEgNjcuMi02Ny4yIDY3LjJ6TTYyNCA0MDAuMmgxNzkuMlYyMjFINjI0djE3OS4yek00MjIuNCA4OTNoLTIyNGMtMzcuMSAwLTY3LjItMzAuMS02Ny4yLTY3LjJ2LTIyNGMwLTM3LjEgMzAuMS02Ny4yIDY3LjItNjcuMmgyOTEuMnYyOTEuMmMwIDM3LjEtMzAuMSA2Ny4yLTY3LjIgNjcuMnogbS0yMDEuNi04OS42SDQwMFY2MjQuMkgyMjAuOHYxNzkuMnpNNTM0LjQgNTM0LjZoMTM0LjRWNjY5SDUzNC40eiIgcC1pZD0iMjQwNyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02NDYuNCA2NDYuNmgxMzQuNFY3ODFINjQ2LjR6IiBwLWlkPSIyNDA4IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTc1OC40IDUzNC42aDEzNC40VjY2OUg3NTguNHpNNTM0LjQgNzU4LjZoMTM0LjRWODkzSDUzNC40ek03NTguNCA3NTguNmgxMzQuNFY4OTNINzU4LjR6IiBwLWlkPSIyNDA5IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+';
    const sdIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgNjAuNSA4MC44IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MC41IDgwLjg7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSJTROWNoS5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMC4yLTIgKGU4NmM4NzA4NzksIDIwMjEtMDEtMTUpIj48bWV0YWRhdGEKICAgaWQ9Im1ldGFkYXRhMTEiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMKICAgaWQ9ImRlZnM5IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgYm9yZGVyb3BhY2l0eT0iMSIKICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgIGd1aWRldG9sZXJhbmNlPSIxMCIKICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAxNyIKICAgaWQ9Im5hbWVkdmlldzciCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTAuNzMwMTk4IgogICBpbmtzY2FwZTpjeD0iMzAuMjUiCiAgIGlua3NjYXBlOmN5PSI0Ny44NTU1OTYiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbDojRkZFNjAwO30KPC9zdHlsZT4KPHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSA2MC41LDgwLjggViA1MS45IEMgNjAuMyw1MiA2MC4xLDUyIDU5LjgsNTIgSCA1OS40IEMgNTguMSw1MiA1Nyw1MC45IDU3LDQ5LjYgdiAtMTIgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgaCAwLjQgYyAwLjIsMCAwLjUsMCAwLjcsMC4xIFYgMC45IEwgMTkuNiwwIDAsMTYuNCBWIDgwLjMgWiBNIDUyLjEsOC43IGMgMS4zLDAgMi40LDEuMSAyLjQsMi40IHYgMTYuNyBjIDAsMS4zIC0xLjEsMi40IC0yLjQsMi40IGggLTMuMyBjIC0xLjMsMCAtMi40LC0xLjEgLTIuNCwtMi40IFYgMTEuMSBjIDAsLTEuMyAxLjEsLTIuNCAyLjQsLTIuNCB6IG0gLTEzLjIsMCBjIDEuMywwIDIuNCwxLjEgMi40LDIuNCB2IDE2LjcgYyAwLDEuMyAtMS4xLDIuNCAtMi40LDIuNCBoIC0zLjMgYyAtMS4zLDAgLTIuNCwtMS4xIC0yLjQsLTIuNCBWIDExLjEgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgeiBtIC0xOSwyLjQgYyAwLC0xLjMgMS4xLC0yLjQgMi40LC0yLjQgaCAzLjMgYyAxLjMsMCAyLjQsMS4xIDIuNCwyLjQgdiAxNi43IGMgMCwxLjMgLTEuMSwyLjQgLTIuNCwyLjQgaCAtMy4zIGMgLTEuMywwIC0yLjQsLTEuMSAtMi40LC0yLjQgeiBNIDkuNiwzNy44IGMgLTEuMywwIC0yLjQsLTEuMSAtMi40LC0yLjQgdiAtMTIgQyA3LjIsMjIuMSA4LjMsMjEgOS42LDIxIEggMTAgYyAxLjMsMCAyLjQsMS4xIDIuNCwyLjQgdiAxMiBjIDAsMS4zIC0xLjEsMi40IC0yLjQsMi40IHoiCiAgIGlkPSJwYXRoNCIKICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz4KPC9zdmc+Cg==';
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    //变量
    Blockly.Blocks.KS_variables_declare = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_declare,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'variables_type',
                        options:[[(Blockly.Msg.KS_global), "global_variate"],[(Blockly.Msg.KS_local), "local_variate"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options:[[Blockly.Msg.KS_MATH_INT, 'int'],[Blockly.Msg.KS_MATH_UNSIGNED_INT, 'unsigned int'],[Blockly.Msg.KS_MATH_LONG, 'long'],[Blockly.Msg.KS_MATH_UNSIGNED_LONG, 'unsigned long'],[Blockly.Msg.KS_MATH_FLOAT, 'float'],[Blockly.Msg.KS_MATH_DOUBLE, 'double'],[Blockly.Msg.KS_MATH_BOOLEAN, 'boolean'],[Blockly.Msg.KS_MATH_BYTE, 'byte'],[Blockly.Msg.KS_MATH_CHAR, 'char'],[Blockly.Msg.KS_MATH_UNSIGNED_CHAR, 'unsigned char'],[Blockly.Msg.KS_MATH_STRING, 'String']]
                    },
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE',
                    },    
                ],
                "tooltip": "创建变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }
    };
    //变量get
    Blockly.Blocks.KS_variables_get = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_value,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color,
                extensions: ['output_number']
            });
        }
    };
    //变量set
    Blockly.Blocks.KS_variables_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_set,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }  
                ],
                "tooltip": "设置变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };
    //变量++--
    Blockly.Blocks.KS_variables_change = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_change,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TYPE',
                        options:[['++', '++'],['- -', '--']]
                    }
                ],
                "tooltip": "设置变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };

    //字符串变量set
    Blockly.Blocks.KS_variables_stringSet = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_variables_setString,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }  
                ],
                "tooltip": "设置字符串变量",
                colour:color,
                extensions: ['shape_statement']
            });
        }     
    };

    //字符
    Blockly.Blocks.KS_CHAR = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_char,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }     
    };

    Blockly.Blocks.KS_STRING = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_string,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }     
    };

    Blockly.Blocks.KS_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_data,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:color2,
                extensions: ['output_number']
            });
        }
    };
    
    //logic
    Blockly.Blocks.KS_judge = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.KS_judge,
                args0: [
                    {
                        type: 'input_value',
                        name: 'VALUE1',
                    }, 
                    {
                        type: 'field_dropdown',
                        name: 'judge',
                        options:[["==", "=="],["≠", "!="],[">", ">"],[">=", ">="],["<", "<"],["<=", "<="]]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE2',
                    },    
                ],
                "tooltip": "逻辑比较",
                colour:color3,
                extensions: ['output_boolean']
            });
        }
    };
 
    Blockly.Blocks.Arduino_TFT_begin1 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_begin1,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'TFT_tab',
                        options: [[Blockly.Msg.INITR_GREENTAB,"INITR_GREENTAB"],
                            [Blockly.Msg.INITR_REDTAB,"INITR_REDTAB"],
                            [Blockly.Msg.INITR_BLACKTAB,"INITR_BLACKTAB"],
                            ["160×80(ST7735)","INITR_MINI160x80"],
                            ["160×128(ST7789)","128, 160"],
                            ["240×135(ST7789)","135, 240"],
                            ["240×240(ST7789)","240, 240"],
                            ["320×240(ST7789)","240, 320"],
                            ["480×320(ST7796)","480×320(ST7796)"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RST',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CS',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DC',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'MOSI',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'SCLK',
                        options: digitalPins
                    }
                    ],
                "tooltip": "Arduino TFT 初始化",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Arduino_TFT_begin2 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_begin2,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'TFT_tab',
                        options: [[Blockly.Msg.INITR_GREENTAB,"INITR_GREENTAB"],
                            [Blockly.Msg.INITR_REDTAB,"INITR_REDTAB"],
                            [Blockly.Msg.INITR_BLACKTAB,"INITR_BLACKTAB"],
                            ["160×80(ST7735)","INITR_MINI160x80"],
                            ["160×128(ST7789)","128, 160"],
                            ["240×135(ST7789)","135, 240"],
                            ["240×240(ST7789)","240, 240"],
                            ["320×240(ST7789)","240, 320"],
                            ["480×320(ST7796)","480×320(ST7796)"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'RST',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CS',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DC',
                        options: digitalPins
                    },
                    ],
                "tooltip": "Arduino TFT 初始化SCLK:13 MOSI:11",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Arduino_TFT_invertDisplay = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_invertDisplay,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'invert',
                        options: [[Blockly.Msg.NO,"false"],
                            [Blockly.Msg.YES,"true"]]
                    }
                    ],
                "tooltip": "当TFT颜色显示异常时(如显示白色时为黑色)使用此指令",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Arduino_TFT_backlight = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_backlight,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'pin',
                        options: digitalPins
                    },
                    { 
                        type: "input_value", 
                        name: "brightness" 
                    }
                    ],
                "tooltip": "调节TFT的背光，为0时关，为255时最亮。",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Arduino_TFT_setRotation = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_setRotation,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'angle',
                        options: [["0°","0"],["90°","1"],["180°","2"],["270°","3"]]
                    }                   
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Arduino_TFT_set_cursor = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_set_cursor,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "set_cursor_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_cursor_y" 
                    }
                    
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    //创建二维码
    Blockly.Blocks.Arduino_TFT_qr_code_display = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_qr_code_display,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_QR_CODE_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "text" 
                    },
                    { 
                        type: "input_value", 
                        name: "X" 
                    },
                    { 
                        type: "input_value", 
                        name: "Y" 
                    },
                    { 
                        type: "input_value", 
                        name: "Zoom" 
                    }
                ],
                "tooltip": "创建显示二维码",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Arduino_TFT_setTextSize = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_setTextSize,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'size',
                        options: [[Blockly.Msg.font_micro,"0"],[Blockly.Msg.font_small,"1"],[Blockly.Msg.font_middle,"2"],[Blockly.Msg.font_big,"3"],[Blockly.Msg.font_large,"4"]]
                    }
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.color_rgb565 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    { 
                        type: "input_value", 
                        name: "color" 
                    }
                    
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.Arduino_TFT_set_screen_color = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_set_screen_color,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'choose_type',
                        options: [[Blockly.Msg.fillScreen,"fillScreen"],[Blockly.Msg.setTextColor,"setTextColor"]]
                    },
                    { 
                        type: "input_value", 
                        name: "set_text_color_data" 
                    }
                    
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Arduino_TFT_set_text_background_color = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_set_text_background_color,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "set_text_color_data" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_text_color_background" 
                    }
                    
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.Arduino_TFT_show_english = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_show_english,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "set_text_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_text_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_text_color" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_background_color" 
                    },
                    { 
                        type: "input_value", 
                        name: "set_text_data" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'size',
                        options: [[Blockly.Msg.font_micro,"0"],[Blockly.Msg.font_small,"1"],[Blockly.Msg.font_middle,"2"],[Blockly.Msg.font_big,"3"],[Blockly.Msg.font_large,"4"]]
                    },
                    {
                      "type": "field_checkbox",
                      "name": "set_text_linebreak",
                      "checked": false
                    }
                    
                ],
                "tooltip": "显示英文以及英文变量，字体大小可调节。",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
 
    Blockly.Blocks.Arduino_TFT_show_text = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_show_text,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'choose_type',
                        options: [[Blockly.Msg.print,"print"],[Blockly.Msg.println,"println"]]
                    },
                    { 
                        type: "input_value", 
                        name: "content" 
                    }                
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Arduino_TFT_show_num = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Arduino_TFT_show_num,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'choose_type',
                        options: [[Blockly.Msg.print,"print"],[Blockly.Msg.println,"println"]]
                    },
                    { 
                        type: "input_value", 
                        name: "NUM" 
                    },
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options: [[Blockly.Msg.DEC,"DEC"],[Blockly.Msg.BIN,"BIN"],[Blockly.Msg.OCT,"OCT"],[Blockly.Msg.HEX,"HEX"]]
                    },                
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.Fast_TFT_draw_pixel = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Fast_TFT_draw_pixel,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_color" 
                    }                   
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Fast_TFT_draw_line = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Fast_TFT_draw_line,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_start_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_start_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_end_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_end_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_color" 
                    }                   
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Fast_TFT_draw_angle_line = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Fast_TFT_draw_angle_line,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "st7735_draw_angle_line_x1" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_angle_line_y1" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_angle_line_length" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_angle_line_angle" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_angle_line_color" 
                    }                   
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Fast_TFT_draw_line1 = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Fast_TFT_draw_line1,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'st7735_draw_line1_type',
                        options:[[Blockly.Msg.drawFastHLine, "drawFastHLine"],[Blockly.Msg.drawFastVLine, "drawFastVLine"]]
                    }, 
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_start_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_start_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_length" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_pixel_color" 
                    }               
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Fast_TFT_draw_rect_change = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Fast_TFT_draw_rect_change,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'st7735_draw_rect_type_1',
                        options:[[Blockly.Msg.draw, "draw"],[Blockly.Msg.fill, "fill"]]
                    }, 
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_width" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_hight" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_color" 
                    }                   
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Fast_TFT_draw_Roundrect_change = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Fast_TFT_draw_Roundrect_change,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'st7735_draw_rect_type_1',
                        options:[[Blockly.Msg.draw, "draw"],[Blockly.Msg.fill, "fill"]]
                    }, 
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_width" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_hight" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_radius" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_rect_color" 
                    }                   
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Fast_TFT_draw_circle = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Fast_TFT_draw_circle,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'oled_draw_circle_type',
                        options:[[Blockly.Msg.draw, "draw"],[Blockly.Msg.fill, "fill"]]
                    }, 
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_radius" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_color" 
                    }                   
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Fast_TFT_draw_CircleHelper = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Fast_TFT_draw_CircleHelper,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_radius" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_cornername" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_color" 
                    }                   
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.Fast_TFT_draw_CircleHelper_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.Fast_TFT_draw_CircleHelper_data,
                args0: [
                    {
                      "type": "field_checkbox",
                      "name": "LEFT_UP",
                      "checked": true
                    },
                    {
                      "type": "field_checkbox",
                      "name": "RIGHT_UP",
                      "checked": true
                    },
                    {
                      "type": "field_checkbox",
                      "name": "LEFT_DOWN",
                      "checked": true
                    },
                    {
                      "type": "field_checkbox",
                      "name": "RIGHT_DOWN",
                      "checked": true
                    }                 
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.Fast_TFT_oled_fill_CircleHelper_data = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.Fast_TFT_oled_fill_CircleHelper_data,
                args0: [
                    {
                      "type": "field_checkbox",
                      "name": "LEFT",
                      "checked": true
                    },
                    {
                      "type": "field_checkbox",
                      "name": "RIGHT",
                      "checked": true
                    }                
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.Fast_TFT_fill_CircleHelper = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Fast_TFT_fill_CircleHelper,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_x" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_y" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_radius" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_cornername" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_delta" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_circle_color" 
                    }                   
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

   
    Blockly.Blocks.Fast_TFT_draw_triangle = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.Fast_TFT_draw_triangle,
                args0: [
                    {
                        type: 'field_image',
                        src: IMG_TFT_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'st7735_draw_triangle_type',
                        options:[[Blockly.Msg.draw, "draw"],[Blockly.Msg.fill, "fill"]]
                    }, 
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_x1" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_y1" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_x2" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_y2" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_x3" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_y3" 
                    },
                    { 
                        type: "input_value", 
                        name: "st7735_draw_triangle_color" 
                    }                   
                ],
                "tooltip": "",
                colour: color4,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };
    
    Blockly.Blocks.sd_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    },
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'cs'
                    },
                ],
                
                colour: color5,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_type = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_TYPE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'cs'
                    },
                ],
                colour: color5,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sd_list = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_LIST,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'cs'
                    },
                ],
                
                colour: color5,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_var = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_VAR,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['Cluster Count', 'volume.clusterCount()'],
                            ['Blocks Per Cluster', 'volume.blocksPerCluster()'],
                            ['Total blocks', 'volume.blocksPerCluster() * volume.clusterCount()'],
                            ['FatType', 'volume.fatType()'],
                            ['Volume(KB)', 'volume.blocksPerCluster()*volume.clusterCount()/2'],
                            ['Volume(MB)', 'volume.blocksPerCluster()*volume.clusterCount()/2/1024'],
                            ['Volume(GB)', 'volume.blocksPerCluster()*volume.clusterCount()/2/1024/1024.0'],
                            ]
                    },
                    {
                        type: 'input_value',
                        name: 'cs'
                    },
                ],
                
                colour: color5,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sd_judge = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_JUDGE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                ],
                
                colour: color5,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.sd_delete = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_DELETE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                ],
                
                colour: color5,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_read = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_READ,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                ],
                
                colour: color5,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.sd_write = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.SD_WRITE,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'file'
                    },
                    {
                        type: 'input_value',
                        name: 'data'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'unit',
                        options: [
                            ['true', 'datafile.println("");'],
                            ['fasle', ''],
                            ]
                    }
                ],
                
                colour: color5,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.TFTSD_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFTSD_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                
                colour: color5,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.TFTSD_display = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.TFTSD_DISPLAY,
                args0: [
                    {
                        type: 'field_image',
                        src: sdIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    { 
                        type: "input_value", 
                        name: "SD_TUPIAN" 
                    },
                    { 
                        type: "input_value", 
                        name: "SD_X" 
                    },
                    { 
                        type: "input_value", 
                        name: "SD_Y" 
                    }
                    
                ],
                "tooltip": "",
                colour: color5,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;

