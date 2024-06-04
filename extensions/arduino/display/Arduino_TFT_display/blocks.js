/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    const color_eb_tft = '#5ba5a5';

    const IMG_TFT_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzNjYwNTYxNDQ1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNjYyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiPjxwYXRoIGQ9Ik04NDggODY0SDE3NmMtMTcuNiAwLTMyIDE0LjQtMzIgMzJzMTQuNCAzMiAzMiAzMmg2NzJjMTcuNiAwIDMyLTE0LjQgMzItMzJzLTE0LjQtMzItMzItMzJ6TTYwOCAyNzYuOGwtMTkyIDExMmMtMTQuNCA5LjYtMjAuOCAyOC44LTExLjIgNDMuMiA4IDE2IDI4LjggMjAuOCA0My4yIDExLjJsMTkyLTExMmMxNC40LTkuNiAyMC44LTI4LjggMTEuMi00My4yLTgtMTYtMjcuMi0yMC44LTQzLjItMTEuMnpNODk2IDk2SDEyOGMtMzUuMiAwLTY0IDI4LjgtNjQgNjR2NTc2YzAgMzUuMiAyOC44IDY0IDY0IDY0aDc2OGMzNS4yIDAgNjQtMjguOCA2NC02NFYxNjBjMC0zNS4yLTI4LjgtNjQtNjQtNjR6IG0wIDYyNGMwIDkuNi02LjQgMTYtMTYgMTZIMTQ0Yy05LjYgMC0xNi02LjQtMTYtMTZWMTc2YzAtOS42IDYuNC0xNiAxNi0xNmg3MzZjOS42IDAgMTYgNi40IDE2IDE2djU0NHpNNTYwIDQ1Mi44bC0xOTIgMTEyYy0xNC40IDkuNi0yMC44IDI4LjgtMTEuMiA0My4yIDggMTYgMjguOCAyMC44IDQzLjIgMTEuMmwxOTItMTEyYzE0LjQtOS42IDIwLjgtMjguOCAxMS4yLTQzLjItOC0xNi0yNy4yLTIwLjgtNDMuMi0xMS4yeiIgcC1pZD0iMTA2NjMiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=";

    const IMG_QR_CODE_ICO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjYzNjYxNDQxNDY0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0MDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTQ4OS42IDQ4OS44SDE5OC40Yy0zNy4xIDAtNjcuMi0zMC4xLTY3LjItNjcuMnYtMjI0YzAtMzcuMSAzMC4xLTY3LjIgNjcuMi02Ny4yaDIyNGMzNy4xIDAgNjcuMiAzMC4xIDY3LjIgNjcuMnYyOTEuMnogbS0yNjguOC04OS42SDQwMFYyMjFIMjIwLjh2MTc5LjJ6TTgyNS42IDQ4OS44SDUzNC40VjE5OC42YzAtMzcuMSAzMC4xLTY3LjIgNjcuMi02Ny4yaDIyNGMzNy4xIDAgNjcuMiAzMC4xIDY3LjIgNjcuMnYyMjRjMCAzNy4xLTMwLjEgNjcuMi02Ny4yIDY3LjJ6TTYyNCA0MDAuMmgxNzkuMlYyMjFINjI0djE3OS4yek00MjIuNCA4OTNoLTIyNGMtMzcuMSAwLTY3LjItMzAuMS02Ny4yLTY3LjJ2LTIyNGMwLTM3LjEgMzAuMS02Ny4yIDY3LjItNjcuMmgyOTEuMnYyOTEuMmMwIDM3LjEtMzAuMSA2Ny4yLTY3LjIgNjcuMnogbS0yMDEuNi04OS42SDQwMFY2MjQuMkgyMjAuOHYxNzkuMnpNNTM0LjQgNTM0LjZoMTM0LjRWNjY5SDUzNC40eiIgcC1pZD0iMjQwNyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik02NDYuNCA2NDYuNmgxMzQuNFY3ODFINjQ2LjR6IiBwLWlkPSIyNDA4IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTc1OC40IDUzNC42aDEzNC40VjY2OUg3NTguNHpNNTM0LjQgNzU4LjZoMTM0LjRWODkzSDUzNC40ek03NTguNCA3NTguNmgxMzQuNFY4OTNINzU4LjR6IiBwLWlkPSIyNDA5IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

   
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
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
                colour: color_eb_tft,
                colourTertiary: '#C0C0C0',
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}
exports = addBlocks;