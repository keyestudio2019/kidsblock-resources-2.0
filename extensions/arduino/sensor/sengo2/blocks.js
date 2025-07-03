/**
 * Sengo2视觉传感器块定义
 */


// 块定义
function addBlocks(Blockly) {
    // 定义颜色
    const set_color = '#EF5411';
    const set_secondaryColor = '#FF5309';

    const get_color = '#EAA20A';
    const get_secondaryColor = '#FDAF07';

    const getSerialPortOptions = function () {
        return Blockly.getMainWorkspace().getFlyout().getFlyoutItems().find(function (b) {
            return b.type === 'arduino_serial_multiSerialBegin'
        })?.getField("NO")?.getOptions() || []
    };

    const serialPortOptions = getSerialPortOptions();

    console.log(serialPortOptions);

    // 初始化Sengo2
    Blockly.Blocks.sengo2_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_BEGIN,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: function() {
                            let options = [['I2C', 'Wire'],['Serial', 'Serial']];
                            if (serialPortOptions && serialPortOptions.length > 0) {
                                serialPortOptions.forEach(function(port) {
                                    if (port[0] != '0') {
                                        options.push(['Serial' + port[0], 'Serial' + port[0]]);
                                    }
                                });
                            }
                            return options;
                        }
                    },
                    {
                        type: 'field_dropdown',
                        name: 'ADDR',
                        options: [['0x60', '0x60']]
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 恢复默认设置
    Blockly.Blocks.sengo2_set_default = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_SET_DEFAULT,
                args0: [],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置白平衡模式
    Blockly.Blocks.sengo2_camera_set_awb = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_CAMERA_SET_AWB,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'AWB',
                        options: [
                            [Blockly.Msg.SENGO2_AWB_AUTO, 'kAutoWhiteBalance'],
                            [Blockly.Msg.SENGO2_AWB_LOCK, 'kLockWhiteBalance'],
                            [Blockly.Msg.SENGO2_AWB_WHITE_LIGHT, 'kWhiteLight'],
                            [Blockly.Msg.SENGO2_AWB_YELLOW_LIGHT, 'kYellowLight'],
                            [Blockly.Msg.SENGO2_AWB_CALIBRATE, 'kWhiteBalanceCalibrating']
                        ]
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置LED颜色
    Blockly.Blocks.sengo2_led_set_color = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_LED_SET_COLOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DETECTED_COLOR',
                        options: [
                            [Blockly.Msg.SENGO2_LED_CLOSE, 'kLedClose'],
                            [Blockly.Msg.SENGO2_LED_RED, 'kLedRed'],
                            [Blockly.Msg.SENGO2_LED_GREEN, 'kLedGreen'],
                            [Blockly.Msg.SENGO2_LED_YELLOW, 'kLedYellow'],
                            [Blockly.Msg.SENGO2_LED_BLUE, 'kLedBlue'],
                            [Blockly.Msg.SENGO2_LED_PURPLE, 'kLedPurple'],
                            [Blockly.Msg.SENGO2_LED_CYAN, 'kLedCyan'],
                            [Blockly.Msg.SENGO2_LED_WHITE, 'kLedWhite']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'UNDETECTED_COLOR',
                        options: [
                            [Blockly.Msg.SENGO2_LED_CLOSE, 'kLedClose'],
                            [Blockly.Msg.SENGO2_LED_RED, 'kLedRed'],
                            [Blockly.Msg.SENGO2_LED_GREEN, 'kLedGreen'],
                            [Blockly.Msg.SENGO2_LED_YELLOW, 'kLedYellow'],
                            [Blockly.Msg.SENGO2_LED_BLUE, 'kLedBlue'],
                            [Blockly.Msg.SENGO2_LED_PURPLE, 'kLedPurple'],
                            [Blockly.Msg.SENGO2_LED_CYAN, 'kLedCyan'],
                            [Blockly.Msg.SENGO2_LED_WHITE, 'kLedWhite']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'LEVAL'
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置算法开启/关闭
    Blockly.Blocks.sengo2_vision_set = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_SET,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'VISION_STA',
                        options: [
                            [Blockly.Msg.SENGO2_ENABLE, 'ON'],
                            [Blockly.Msg.SENGO2_DISABLE, 'OFF']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'VISION_TYPE',
                        options: [
                            [Blockly.Msg.SENGO2_VISION_VISIONCOLOR, 'Sengo2::kVisionColor'],
                            [Blockly.Msg.SENGO2_VISION_VISIONBLOB, 'Sengo2::kVisionBlob'],
                            [Blockly.Msg.SENGO2_VISION_VISIONAPRILTAG, 'Sengo2::kVisionAprilTag'],
                            [Blockly.Msg.SENGO2_VISION_VISIONLINE, 'Sengo2::kVisionLine'],
                            [Blockly.Msg.SENGO2_VISION_VISIONLEARNING, 'Sengo2::kVisionLearning'],
                            [Blockly.Msg.SENGO2_VISION_VISIONCARD, 'Sengo2::kVisionCard'],
                            [Blockly.Msg.SENGO2_VISION_VISIONFACE, 'Sengo2::kVisionFace'],
                            [Blockly.Msg.SENGO2_VISION_VISION20CLASSES, 'Sengo2::kVision20Classes'],
                            [Blockly.Msg.SENGO2_VISION_VISIONQRCODE, 'Sengo2::kVisionQrCode'],
                            [Blockly.Msg.SENGO2_VISION_VISIONMOTIONDETECT, 'Sengo2::kVisionMotionDetect']
                        ]
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置算法参数组数
    Blockly.Blocks.sengo2_vision_set_param_num = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_SET_PARAM_NUM,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'VISION_TYPE',
                        options: [
                            [Blockly.Msg.SENGO2_VISION_VISIONCOLOR, 'Sengo2::kVisionColor'],
                            [Blockly.Msg.SENGO2_VISION_VISIONBLOB, 'Sengo2::kVisionBlob']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置颜色识别参数
    Blockly.Blocks.sengo2_vision_color_param = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_COLOR_PARAM,
                args0: [
                    {
                        type: 'input_value',
                        name: 'XVALUE'
                    },
                    {
                        type: 'input_value',
                        name: 'YVALUE'
                    },
                    {
                        type: 'input_value',
                        name: 'WIDTH'
                    },
                    {
                        type: 'input_value',
                        name: 'HIGHT'
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置色块检测参数
    Blockly.Blocks.sengo2_vision_blob_param = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_BLOB_PARAM,
                args0: [
                    {
                        type: 'input_value',
                        name: 'WIDTH'
                    },
                    {
                        type: 'input_value',
                        name: 'HIGHT'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOR_LABLE',
                        options: [
                            [Blockly.Msg.SENGO2_COLOR_BLACK, 'Sengo2::kColorBlack'],
                            [Blockly.Msg.SENGO2_COLOR_WHITE, 'Sengo2::kColorWhite'],
                            [Blockly.Msg.SENGO2_COLOR_RED, 'Sengo2::kColorRed'],
                            [Blockly.Msg.SENGO2_COLOR_GREEN, 'Sengo2::kColorGreen'],
                            [Blockly.Msg.SENGO2_COLOR_BLUE, 'Sengo2::kColorBlue'],
                            [Blockly.Msg.SENGO2_COLOR_YELLOW, 'Sengo2::kColorYellow']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置通用视觉参数
    Blockly.Blocks.sengo2_vision_general_param = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_GENERAL_PARAM,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'VISION_TYPE',
                        options: [
                            [Blockly.Msg.SENGO2_VISION_VISIONCOLOR, 'Sengo2::kVisionColor'],
                            [Blockly.Msg.SENGO2_VISION_VISIONBLOB, 'Sengo2::kVisionBlob'],
                            [Blockly.Msg.SENGO2_VISION_VISIONAPRILTAG, 'Sengo2::kVisionAprilTag'],
                            [Blockly.Msg.SENGO2_VISION_VISIONLINE, 'Sengo2::kVisionLine'],
                            [Blockly.Msg.SENGO2_VISION_VISIONLEARNING, 'Sengo2::kVisionLearning'],
                            [Blockly.Msg.SENGO2_VISION_VISIONCARD, 'Sengo2::kVisionCard'],
                            [Blockly.Msg.SENGO2_VISION_VISIONFACE, 'Sengo2::kVisionFace'],
                            [Blockly.Msg.SENGO2_VISION_VISION20CLASSES, 'Sengo2::kVision20Classes'],
                            [Blockly.Msg.SENGO2_VISION_VISIONQRCODE, 'Sengo2::kVisionQrCode'],
                            [Blockly.Msg.SENGO2_VISION_VISIONMOTIONDETECT, 'Sengo2::kVisionMotionDetect']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'XVALUE'
                    },
                    {
                        type: 'input_value',
                        name: 'YVALUE'
                    },
                    {
                        type: 'input_value',
                        name: 'WIDTH'
                    },
                    {
                        type: 'input_value',
                        name: 'HIGHT'
                    },
                    {
                        type: 'input_value',
                        name: 'COLOR_LABLE'
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置色块检测最大数量
    Blockly.Blocks.sengo2_vision_blob_max = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_BLOB_MAX,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MODE'
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置AprilTag标准
    Blockly.Blocks.sengo2_vision_apriltag_mode = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_APRILTAG_MODE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'MODE',
                        options: [
                            ["36H11", 'Sengo2::kVisionModeFamily36H11'],
                            ["16H5", 'Sengo2::kVisionModeFamily16H5'],
                            ["25H9", 'Sengo2::kVisionModeFamily25H9']
                        ]
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置线条检测最大数量
    Blockly.Blocks.sengo2_vision_line_max = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_LINE_MAX,
                args0: [
                    {
                        type: 'input_value',
                        name: 'MODE'
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置人脸/学习参数
    Blockly.Blocks.sengo2_vision_opera_param = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_OPERA_PARAM,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'VISION_TYPE',
                        options: [
                            [Blockly.Msg.SENGO2_VISION_VISIONLEARNING, 'Sengo2::kVisionLearning'],
                            [Blockly.Msg.SENGO2_VISION_VISIONFACE, 'Sengo2::kVisionFace']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'COLOR_LABLE',
                        options: [
                            [Blockly.Msg.SENGO2_OPERA_SAVE, '100'],
                            [Blockly.Msg.SENGO2_OPERA_DELETE, '0']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: set_color,
                secondaryColour: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 获取算法检测结果
    Blockly.Blocks.sengo2_vision_get_result = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_GET_RESULT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'VISION_TYPE',
                        options: [
                            [Blockly.Msg.SENGO2_VISION_VISIONCOLOR, 'Sengo2::kVisionColor'],
                            [Blockly.Msg.SENGO2_VISION_VISIONBLOB, 'Sengo2::kVisionBlob'],
                            [Blockly.Msg.SENGO2_VISION_VISIONAPRILTAG, 'Sengo2::kVisionAprilTag'],
                            [Blockly.Msg.SENGO2_VISION_VISIONLINE, 'Sengo2::kVisionLine'],
                            [Blockly.Msg.SENGO2_VISION_VISIONLEARNING, 'Sengo2::kVisionLearning'],
                            [Blockly.Msg.SENGO2_VISION_VISIONCARD, 'Sengo2::kVisionCard'],
                            [Blockly.Msg.SENGO2_VISION_VISIONFACE, 'Sengo2::kVisionFace'],
                            [Blockly.Msg.SENGO2_VISION_VISION20CLASSES, 'Sengo2::kVision20Classes'],
                            [Blockly.Msg.SENGO2_VISION_VISIONQRCODE, 'Sengo2::kVisionQrCode'],
                            [Blockly.Msg.SENGO2_VISION_VISIONMOTIONDETECT, 'Sengo2::kVisionMotionDetect']
                        ]
                    }
                ],
                colour: get_color,
                secondaryColour: get_secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    // 获取颜色识别结果
    Blockly.Blocks.sengo2_vision_color_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_COLOR_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'OBJ_INFO',
                        options: [
                            [Blockly.Msg.SENGO2_STATE_VALUE_LABEL, 'kLabel'],
                            [Blockly.Msg.SENGO2_STATE_VALUE_R, 'kRValue'],
                            [Blockly.Msg.SENGO2_STATE_VALUE_G, 'kGValue'],
                            [Blockly.Msg.SENGO2_STATE_VALUE_B, 'kBValue']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: get_color,
                secondaryColour: get_secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    // 获取通用算法结果
    Blockly.Blocks.sengo2_vision_get_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_GET_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'VISION_TYPE',
                        options: [
                            [Blockly.Msg.SENGO2_VISION_VISIONBLOB, 'Sengo2::kVisionBlob'],
                            [Blockly.Msg.SENGO2_VISION_VISIONAPRILTAG, 'Sengo2::kVisionAprilTag'],
                            [Blockly.Msg.SENGO2_VISION_VISIONLEARNING, 'Sengo2::kVisionLearning'],
                            [Blockly.Msg.SENGO2_VISION_VISIONCARD, 'Sengo2::kVisionCard'],
                            [Blockly.Msg.SENGO2_VISION_VISIONFACE, 'Sengo2::kVisionFace'],
                            [Blockly.Msg.SENGO2_VISION_VISION20CLASSES, 'Sengo2::kVision20Classes'],
                            [Blockly.Msg.SENGO2_VISION_VISIONMOTIONDETECT, 'Sengo2::kVisionMotionDetect']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'OBJ_INFO',
                        options: [
                            [Blockly.Msg.SENGO2_STATE_VALUE_X, 'kXValue'],
                            [Blockly.Msg.SENGO2_STATE_VALUE_Y, 'kYValue'],
                            [Blockly.Msg.SENGO2_STATE_VALUE_WIDTH, 'kWidthValue'],
                            [Blockly.Msg.SENGO2_STATE_VALUE_HEIGHT, 'kHeightValue'],
                            [Blockly.Msg.SENGO2_STATE_VALUE_LABEL, 'kLabel']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: get_color,
                secondaryColour: get_secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    // 获取线条检测结果
    Blockly.Blocks.sengo2_vision_line_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_LINE_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'OBJ_INFO',
                        options: [
                            [Blockly.Msg.SENGO2_STATE_LINE_EX, 'kXValue'],
                            [Blockly.Msg.SENGO2_STATE_LINE_EY, 'kYValue'],
                            [Blockly.Msg.SENGO2_STATE_LINE_SX, 'kWidthValue'],
                            [Blockly.Msg.SENGO2_STATE_LINE_SY, 'kHeightValue'],
                            [Blockly.Msg.SENGO2_STATE_LINE_A, 'kLabel']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: get_color,
                secondaryColour: get_secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    // 获取二维码识别结果
    Blockly.Blocks.sengo2_vision_qrcode_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_QRCODE_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'OBJ_INFO',
                        options: [
                            [Blockly.Msg.SENGO2_STATE_VALUE_X, 'kXValue'],
                            [Blockly.Msg.SENGO2_STATE_VALUE_Y, 'kYValue'],
                            [Blockly.Msg.SENGO2_STATE_VALUE_WIDTH, 'kWidthValue'],
                            [Blockly.Msg.SENGO2_STATE_VALUE_HEIGHT, 'kHeightValue']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: get_color,
                secondaryColour: get_secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    // 获取二维码字符串结果
    Blockly.Blocks.sengo2_vision_qrcode_string = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_QRCODE_STRING,
                args0: [],
                colour: get_color,
                secondaryColour: get_secondaryColor,
                extensions: ['output_string']
            });
        }
    };

    // 获取自定义值结果
    Blockly.Blocks.sengo2_vision_custom_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_CUSTOM_VALUE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'OBJ_INFO',
                        options: [
                            [Blockly.Msg.SENGO2_CUSTOM_VALUE1, 'kXValue'],
                            [Blockly.Msg.SENGO2_CUSTOM_VALUE2, 'kYValue'],
                            [Blockly.Msg.SENGO2_CUSTOM_VALUE3, 'kWidthValue'],
                            [Blockly.Msg.SENGO2_CUSTOM_VALUE4, 'kHeightValue'],
                            [Blockly.Msg.SENGO2_CUSTOM_VALUE5, 'kLabel']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: get_color,
                secondaryColour: get_secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    // 颜色识别布尔值结果
    Blockly.Blocks.sengo2_vision_color_label = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_COLOR_LABEL,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOR_LABLE',
                        options: [
                            [Blockly.Msg.SENGO2_COLOR_BLACK, 'Sengo2::kColorBlack'],
                            [Blockly.Msg.SENGO2_COLOR_WHITE, 'Sengo2::kColorWhite'],
                            [Blockly.Msg.SENGO2_COLOR_RED, 'Sengo2::kColorRed'],
                            [Blockly.Msg.SENGO2_COLOR_GREEN, 'Sengo2::kColorGreen'],
                            [Blockly.Msg.SENGO2_COLOR_BLUE, 'Sengo2::kColorBlue'],
                            [Blockly.Msg.SENGO2_COLOR_YELLOW, 'Sengo2::kColorYellow']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: get_color,
                secondaryColour: get_secondaryColor,
                extensions: ['output_boolean']
            });
        }
    };

    // 色块检测布尔值结果
    Blockly.Blocks.sengo2_vision_blob_label = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_BLOB_LABEL,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'COLOR_LABLE',
                        options: [
                            [Blockly.Msg.SENGO2_COLOR_BLACK, 'Sengo2::kColorBlack'],
                            [Blockly.Msg.SENGO2_COLOR_WHITE, 'Sengo2::kColorWhite'],
                            [Blockly.Msg.SENGO2_COLOR_RED, 'Sengo2::kColorRed'],
                            [Blockly.Msg.SENGO2_COLOR_GREEN, 'Sengo2::kColorGreen'],
                            [Blockly.Msg.SENGO2_COLOR_BLUE, 'Sengo2::kColorBlue'],
                            [Blockly.Msg.SENGO2_COLOR_YELLOW, 'Sengo2::kColorYellow']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: get_color,
                secondaryColour: get_secondaryColor,
                extensions: ['output_boolean']
            });
        }
    };

    // 卡片识别布尔值结果
    Blockly.Blocks.sengo2_vision_card_label = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_CARD_LABEL,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'CARD_LABLE',
                        options: [
                            [Blockly.Msg.SENGO2_CARD_FORWARD, 'Sengo2::kCardForward'],
                            [Blockly.Msg.SENGO2_CARD_LEFT, 'Sengo2::kCardLeft'],
                            [Blockly.Msg.SENGO2_CARD_RIGHT, 'Sengo2::kCardRight'],
                            [Blockly.Msg.SENGO2_CARD_TURN_AROUND, 'Sengo2::kCardTurnAround'],
                            [Blockly.Msg.SENGO2_CARD_PARK, 'Sengo2::kCardPark'],
                            [Blockly.Msg.SENGO2_CARD_GREEN_LIGHT, 'Sengo2::kCardGreenLight'],
                            [Blockly.Msg.SENGO2_CARD_RED_LIGHT, 'Sengo2::kCardRedLight'],
                            [Blockly.Msg.SENGO2_CARD_SPEED40, 'Sengo2::kCardSpeed40'],
                            [Blockly.Msg.SENGO2_CARD_SPEED60, 'Sengo2::kCardSpeed60'],
                            [Blockly.Msg.SENGO2_CARD_SPEED80, 'Sengo2::kCardSpeed80']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: get_color,
                secondaryColour: get_secondaryColor,
                extensions: ['output_boolean']
            });
        }
    };

    // 20类物体识别布尔值结果
    Blockly.Blocks.sengo2_vision_class20_label = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO2_VISION_CLASS20_LABEL,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'Class20_LABLE',
                        options: [
                            [Blockly.Msg.SENGO2_CLASS20_AIRPLANE, 'Sengo2::kAirplane'],
                            [Blockly.Msg.SENGO2_CLASS20_BICYCLE, 'Sengo2::kBicycle'],
                            [Blockly.Msg.SENGO2_CLASS20_BIRD, 'Sengo2::kBird'],
                            [Blockly.Msg.SENGO2_CLASS20_BOAT, 'Sengo2::kBoat'],
                            [Blockly.Msg.SENGO2_CLASS20_BOTTLE, 'Sengo2::kBottle'],
                            [Blockly.Msg.SENGO2_CLASS20_BUS, 'Sengo2::kBus'],
                            [Blockly.Msg.SENGO2_CLASS20_CAR, 'Sengo2::kCar'],
                            [Blockly.Msg.SENGO2_CLASS20_CAT, 'Sengo2::kCat'],
                            [Blockly.Msg.SENGO2_CLASS20_CHAIR, 'Sengo2::kChair'],
                            [Blockly.Msg.SENGO2_CLASS20_COW, 'Sengo2::kCow'],
                            [Blockly.Msg.SENGO2_CLASS20_TABLE, 'Sengo2::kDiningTable'],
                            [Blockly.Msg.SENGO2_CLASS20_DOG, 'Sengo2::kDog'],
                            [Blockly.Msg.SENGO2_CLASS20_HORSE, 'Sengo2::kHorse'],
                            [Blockly.Msg.SENGO2_CLASS20_MOTORBIKE, 'Sengo2::kMotorBike'],
                            [Blockly.Msg.SENGO2_CLASS20_PERSON, 'Sengo2::kPerson'],
                            [Blockly.Msg.SENGO2_CLASS20_PLANT, 'Sengo2::kPottedPlant'],
                            [Blockly.Msg.SENGO2_CLASS20_SHEEP, 'Sengo2::kSheep'],
                            [Blockly.Msg.SENGO2_CLASS20_SOFA, 'Sengo2::kSofa'],
                            [Blockly.Msg.SENGO2_CLASS20_TRAIN, 'Sengo2::kTrain'],
                            [Blockly.Msg.SENGO2_CLASS20_MONITOR, 'Sengo2::kTvMonitor']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'NUM'
                    }
                ],
                colour: get_color,
                secondaryColour: get_secondaryColor,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks; 