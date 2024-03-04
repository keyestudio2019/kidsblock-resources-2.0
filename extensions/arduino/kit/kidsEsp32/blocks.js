/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF4500';
    const color2 = '#41be8a';
    const color3 = '#573e00';
    const color4 = '#000099';
    const color9 = '#930093';

    const secondaryColour = '#CD5C5C';
    const wifiIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+Cgo8c3ZnCiAgIHZlcnNpb249IjEuMSIKICAgeD0iMHB4IgogICB5PSIwcHgiCiAgIHZpZXdCb3g9IjAgMCA5ODAuMDM5ODYgODYxLjI5OTk5IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiCiAgIHhtbDpzcGFjZT0icHJlc2VydmUiCiAgIGlkPSJzdmcxMCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iV2lGaS5zdmciCiAgIHdpZHRoPSI5ODAuMDM5ODYiCiAgIGhlaWdodD0iODYxLjI5OTk5IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoNzMyYTAxZGE2MywgMjAyMi0xMi0wOSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnMKICAgaWQ9ImRlZnMxNCIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIGlkPSJuYW1lZHZpZXcxMiIKICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgc2hvd2dyaWQ9ImZhbHNlIgogICBzaG93Z3VpZGVzPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC41MzU5ODY5NCIKICAgaW5rc2NhcGU6Y3g9IjQ5MC42ODM2IgogICBpbmtzY2FwZTpjeT0iNDQ0Ljk3MzUzIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyODAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk0NSIKICAgaW5rc2NhcGU6d2luZG93LXg9IjEyNzEiCiAgIGlua3NjYXBlOndpbmRvdy15PSItOSIKICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnMTAiPjxzb2RpcG9kaTpndWlkZQogICAgIHBvc2l0aW9uPSIxODcuODEwNzcsLTEzNi42ODIzMyIKICAgICBvcmllbnRhdGlvbj0iLTAuNzA3MTA2NzgsLTAuNzA3MTA2NzgiCiAgICAgaWQ9Imd1aWRlMTYiCiAgICAgaW5rc2NhcGU6bG9ja2VkPSJmYWxzZSIgLz48L3NvZGlwb2RpOm5hbWVkdmlldz4KPG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTIiPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPgo8ZwogICBpZD0iZzgiCiAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMC4wNzg0MDYsLTY5LjMpIgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj48cGF0aAogICAgIGQ9Im0gNDk4LjUsNjkuMyBjIC0xNzYuMiwwIC0zNTIuNCw3MS40IC00NzguMiwxOTQuNSAtMTguNSwyMy44IC0xMS45LDY4LjggMTkuOSw3OS40IDIxLjIsNy45IDQ1LDEuMyA1OS42LC0xNS45IDEzMy44LC0xMjMuMSAzMjguNSwtMTc5LjkgNTA4LjcsLTE0NC4yIDExMS4zLDIxLjIgMjE4LjYsNzQuMSAyOTkuNCwxNTMuNSAyNS4yLDE5LjggNjguOSwxMS45IDc5LjUsLTE4LjUgNi42LC0yMi41IDEuMywtNDkgLTE3LjIsLTYyLjIgQyA4NDQuMiwxMzguMSA2NzIsNjkuMyA0OTguNSw2OS4zIFogbSAtOCwyMDUuMSBjIC04Mi4xLDIuNiAtMTY0LjMsMjMuOCAtMjM0LjUsNjYuMiAtMzguNCwyMi41IC03NC4yLDQ5IC0xMDIsODIgLTE1LjksMTkuOCAtMTEuOSw1MC4zIDcuOSw2Ni4yIDE5LjksMTcuMiA1MS43LDE1LjkgNzAuMiwtMS4zIEMgMzA5LDQwOCA0MjQuMywzNjUuNyA1MzUuNSwzNzguOSBjIDg2LjEsNy45IDE3MC45LDQ2LjMgMjMwLjUsMTA4LjUgMTguNSwxNy4yIDUwLjMsMTguNSA3MC4yLDEuMyAxOS45LC0xNS45IDIzLjgsLTQ2LjMgNy45LC02Ni4yIEMgODEyLjMsMzg2LjggNzcyLjYsMzU3LjcgNzMxLjUsMzMzLjggNjU3LjQsMjkyLjkgNTc0LDI3My4xIDQ5MC41LDI3NC40IFogbSA2LjYsMjA1LjEgYyAtNDcuNywxLjMgLTk2LjcsMTQuNiAtMTM3LjgsMzkuNyAtMjMuOCwxNC42IC00Ni40LDMwLjQgLTYzLjYsNTEuNiAtMjEuMiwzMy4xIDkuMyw4MC43IDQ3LjcsNzguMSAyMy44LC0xLjMgMzguNCwtMjMuOCA1NywtMzQuNCAzOS43LC0yNy44IDg4LjgsLTQxIDEzNi40LC0yOS4xIDM1LjgsNS4zIDY2LjIsMjcuOCA5MS40LDUyLjkgMTguNSwxNS45IDQ5LDEzLjIgNjQuOSwtNS4zIDE4LjUsLTE3LjIgMjEuMiwtNDkgMi42LC02OC44IC01MC4yLC01MS42IC0xMjMuMSwtODcuNCAtMTk4LjYsLTg0LjcgeiIKICAgICBpZD0icGF0aDQiCiAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIgLz48cGF0aAogICAgIGQ9Im0gNDk5LjgsNjk3LjggYyAtNjQuOSwwIC0xMTcuOSw1MS42IC0xMTcuOSwxMTYuNCAwLDYzLjUgNTMsMTE2LjQgMTE3LjksMTE2LjQgNjQuOSwwIDExNi42LC01Mi45IDExNi42LC0xMTYuNCAwLC02NC44IC01MS43LC0xMTYuNCAtMTE2LjYsLTExNi40IHoiCiAgICAgaWQ9InBhdGg2IgogICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+PC9nPgo8L3N2Zz4K';
 

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


//OLED
Blockly.Blocks.oled_init = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_INIT,
            args0: [
                {
                    type: 'input_value',
                    name: 'W'
                },
                {
                    type: 'input_value',
                    name: 'H'
                },
                {
                    type: 'field_dropdown',
                    name: 'ADDR',
                    options: [
                        ['0x78 (0x3c)', '0x3c'],
                        ['0x7a (0x3d)', '0x3d']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_drawLine = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_DRAWLINE,
            args0: [
                {
                    type: 'input_value',
                    name: 'X0'
                },
                {
                    type: 'input_value',
                    name: 'Y0'
                },
                {
                    type: 'input_value',
                    name: 'X1'
                },
                {
                    type: 'input_value',
                    name: 'Y1'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_drawRect = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_DRAWRECT,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'W'
                },
                {
                    type: 'input_value',
                    name: 'H'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_fillRect = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_FILLRECT,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'W'
                },
                {
                    type: 'input_value',
                    name: 'H'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_drawCircle = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_DRAWCIRCLE,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'R'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_fillCircle = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_FILLCIRCLE,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'R'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_drawRoundRect = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_DRAWROUNDRECT,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'W'
                },
                {
                    type: 'input_value',
                    name: 'H'
                },
                {
                    type: 'input_value',
                    name: 'R'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_fillRoundRect = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_FILLROUNDRECT,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                },
                {
                    type: 'input_value',
                    name: 'W'
                },
                {
                    type: 'input_value',
                    name: 'H'
                },
                {
                    type: 'input_value',
                    name: 'R'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_drawTriangle = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_DRAWTRIANGLE,
            args0: [
                {
                    type: 'input_value',
                    name: 'X0'
                },
                {
                    type: 'input_value',
                    name: 'Y0'
                },
                {
                    type: 'input_value',
                    name: 'X1'
                },
                {
                    type: 'input_value',
                    name: 'Y1'
                },
                {
                    type: 'input_value',
                    name: 'X2'
                },
                {
                    type: 'input_value',
                    name: 'Y2'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_fillTriangle = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_FILLTRIANGLE,
            args0: [
                {
                    type: 'input_value',
                    name: 'X0'
                },
                {
                    type: 'input_value',
                    name: 'Y0'
                },
                {
                    type: 'input_value',
                    name: 'X1'
                },
                {
                    type: 'input_value',
                    name: 'Y1'
                },
                {
                    type: 'input_value',
                    name: 'X2'
                },
                {
                    type: 'input_value',
                    name: 'Y2'
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK'],
                        [Blockly.Msg.OLED_COLOR_INVERSE, 'SSD1306_INVERSE']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_setText = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_SETTEXT,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'SIZE',
                    options: [
                        ['6x8', '1'],
                        ['12x16', '2'],
                        ['18x24', '3'],
                        ['24x32', '4'],
                        ['30x40', '5'],
                        ['36x48', '6'],
                        ['42x56', '7'],
                        ['48x64', '8']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'COLOUR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'BGCOLOR',
                    options: [
                        [Blockly.Msg.OLED_COLOR_WHITE, 'SSD1306_WHITE'],
                        [Blockly.Msg.OLED_COLOR_BLACK, 'SSD1306_BLACK']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_setCursor = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_SETCURSOR,
            args0: [
                {
                    type: 'input_value',
                    name: 'X'
                },
                {
                    type: 'input_value',
                    name: 'Y'
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_print = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_PRINT,
            args0: [
                {
                    type: 'input_value',
                    name: 'DATA'
                },
                {
                    type: 'field_dropdown',
                    name: 'EOL',
                    options: [
                        [Blockly.Msg.OLED_EOL_WARP, 'warp'],
                        [Blockly.Msg.OLED_EOL_NOWARP, 'noWarp']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_image = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_IMAGE,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'IMAGE',
                    options: [
                        ['∩_∩', 'smile'],
                        ['U_U', 'angry'],
                        ['T_T', 'cry'],
                        ['↑', 'front'],
                        ['↓', 'back'],
                        ['←', 'left'],
                        ['→', 'right'],
                        ['❤', 'heart']
                        ],
                }
            ],
            colour: color4,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_clear = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_CLEAR,
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_refresh = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_REFRESH,
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_startScroll = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_STARTSCROLL,
            args0: [
                {
                    type: 'field_dropdown',
                    name: 'TYPE',
                    options: [
                        [Blockly.Msg.OLED_SCROLL_RIGHT, '0'],
                        [Blockly.Msg.OLED_SCROLL_LEFT, '1'],
                        [Blockly.Msg.OLED_SCROLL_DIAGRIGHT, '2'],
                        [Blockly.Msg.OLED_SCROLL_DIAGLEFT, '3']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'Y0',
                    options: [
                        ['0', '0x00'],
                        ['8', '0x01'],
                        ['16', '0x02'],
                        ['24', '0x03'],
                        ['32', '0x04'],
                        ['10', '0x05'],
                        ['48', '0x06'],
                        ['56', '0x07']
                    ]
                },
                {
                    type: 'field_dropdown',
                    name: 'Y1',
                    options: [
                        ['8', '0x00'],
                        ['16', '0x01'],
                        ['24', '0x02'],
                        ['32', '0x03'],
                        ['40', '0x04'],
                        ['48', '0x05'],
                        ['56', '0x06'],
                        ['64', '0x07']
                    ]
                }
            ],
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};

Blockly.Blocks.oled_stopScroll = {
    init: function () {
        this.jsonInit({
            message0: Blockly.Msg.OLED_STOPSCROLL,
            colour: color4,
            secondaryColour: secondaryColour,
            extensions: ['shape_statement']
        });
    }
};   

//
     Blockly.Blocks.wifi_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'SSID'
                    },
                    {
                        type: 'input_value',
                        name: 'PASSWD'
                    }
                ],
                colour: color9,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifi_read_ip = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_READ_IP,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    
                ],
                colour: color9,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.wifi_client_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_CLIENT_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                ],
                colour: color9,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.wifi_client_connected = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_CLIENT_CONNECTED,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                ],
                colour: color9,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.wifi_read_connected = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_READ_CONNECTED,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                ],
                colour: color9,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.wifi_read_data = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.WIFI_READ_DATA,
                args0: [
                    {
                        type: 'field_image',
                        src: wifiIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                ],
                colour: color9,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;

