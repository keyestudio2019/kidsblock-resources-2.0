function addBlocks(Blockly) {
    const set_color = '#EF5411';
    const set_secondaryColor = '#FF5309';

    const get_color = '#EAA20A';
    const get_secondaryColor = '#FDAF07';

    const getSerialPortOptions = function() {
    return Blockly.getMainWorkspace().getFlyout().getFlyoutItems().find(function(b) {
    return b.type === 'arduino_serial_multiSerialBegin'
    })?.getField("NO")?.getOptions() || []
    };

    const serialPortOptions = getSerialPortOptions();

    console.log(serialPortOptions);

    // 初始化传感器
    Blockly.Blocks.sengo1_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_BEGIN,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'mode_obj',
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
                        name: 'addr_obj',
                        options: [
                            ['0x60', '0x60']
                        ]
                    }
                ],
                colour: set_color,
                secondaryColor: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 恢复默认参数
    Blockly.Blocks.sengo1_set_default = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_SET_DEFAULT,
                colour: set_color,
                secondaryColor: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 开启/关闭算法
    Blockly.Blocks.sengo1_vision_set_status = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_SET_STATUS,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'VisionStatus',
                        options: [
                            [Blockly.Msg.SENGO1_ENABLE, 'Begin'],
                            [Blockly.Msg.SENGO1_DISABLE, 'End']
                        ]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'vision_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_VISION_VISIONCOLOR, 'Sengo1::kVisionColor'],
                                [Blockly.Msg.SENGO1_VISION_VISIONBLOB, 'Sengo1::kVisionBlob'],
                                [Blockly.Msg.SENGO1_VISION_VISIONBALL, 'Sengo1::kVisionBall'],
                                [Blockly.Msg.SENGO1_VISION_VISIONLINE, 'Sengo1::kVisionLine'],
                                [Blockly.Msg.SENGO1_VISION_VISIONCARD, 'Sengo1::kVisionCard'],
                                [Blockly.Msg.SENGO1_VISION_VISIONBODY, 'Sengo1::kVisionBody'],
                                [Blockly.Msg.SENGO1_VISION_VISIONFACE, 'Sengo1::kVisionFace'],
                                [Blockly.Msg.SENGO1_VISION_VISIONQRCODE, 'Sengo1::kVisionQrCode']
                            ];
                        }
                    }
                ],
                colour: set_color,
                secondaryColor: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置参数组数量
    Blockly.Blocks.sengo1_vision_set_param_num = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_SET_PARAM_NUM,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'vision_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_VISION_VISIONCOLOR, 'Sengo1::kVisionColor'],
                                [Blockly.Msg.SENGO1_VISION_VISIONBLOB, 'Sengo1::kVisionBlob']
                            ];
                        }
                    },
                    {
                        type: 'input_value',
                        name: 'num'
                    }
                ],
                colour: set_color,
                secondaryColor: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置色块检测参数
    Blockly.Blocks.sengo1_vision_blob_set_param = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_BLOB_SET_PARAM,
                args0: [
                    {
                        type: 'input_value',
                        name: 'w'
                    },
                    {
                        type: 'input_value',
                        name: 'h'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'lable',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_COLOR_BLACK, 'Sengo1::kColorBlack'],
                                [Blockly.Msg.SENGO1_COLOR_WHITE, 'Sengo1::kColorWhite'],
                                [Blockly.Msg.SENGO1_COLOR_RED, 'Sengo1::kColorRed'],
                                [Blockly.Msg.SENGO1_COLOR_GREEN, 'Sengo1::kColorGreen'],
                                [Blockly.Msg.SENGO1_COLOR_BLUE, 'Sengo1::kColorBlue'],
                                [Blockly.Msg.SENGO1_COLOR_YELLOW, 'Sengo1::kColorYellow']   
                            ];
                        }
                    }
                ],
                colour: set_color,
                secondaryColor: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置颜色识别参数
    Blockly.Blocks.sengo1_vision_color_set_param = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_COLOR_SET_PARAM,
                args0: [
                    {
                        type: 'input_value',
                        name: 'x'
                    },
                    {
                        type: 'input_value',
                        name: 'y'
                    },
                    {
                        type: 'input_value',
                        name: 'w'
                    },
                    {
                        type: 'input_value',
                        name: 'h'
                    }
                ],
                colour: set_color,
                secondaryColor: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置人脸识别参数
    Blockly.Blocks.sengo1_vision_face_set_param = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_FACE_SET_PARAM,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'lable',
                        options: [
                            [Blockly.Msg.SENGO1_SAVE_DATA, '100'],
                            [Blockly.Msg.SENGO1_DEL_DATA, '0']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'index'
                    }
                ],
                colour: set_color,
                secondaryColor: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置LED颜色
    Blockly.Blocks.sengo1_led_set_color = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_LED_SET_COLOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'led_color_obj1',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_COLOR_BLACK, 'kLedClose'],
                                [Blockly.Msg.SENGO1_COLOR_RED, 'kLedRed'],
                                [Blockly.Msg.SENGO1_COLOR_GREEN, 'kLedGreen'],
                                [Blockly.Msg.SENGO1_COLOR_YELLOW, 'kLedYellow'],
                                [Blockly.Msg.SENGO1_COLOR_BLUE, 'kLedBlue'],
                                [Blockly.Msg.SENGO1_COLOR_PURPLE, 'kLedPurple'],
                                [Blockly.Msg.SENGO1_COLOR_CYAN, 'kLedCyan'],
                                [Blockly.Msg.SENGO1_COLOR_WHITE, 'kLedWhite']
                            ];
                        }
                    },
                    {
                        type: 'field_dropdown',
                        name: 'led_color_obj2',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_COLOR_BLACK, 'kLedClose'],
                                [Blockly.Msg.SENGO1_COLOR_RED, 'kLedRed'],
                                [Blockly.Msg.SENGO1_COLOR_GREEN, 'kLedGreen'],
                                [Blockly.Msg.SENGO1_COLOR_YELLOW, 'kLedYellow'],
                                [Blockly.Msg.SENGO1_COLOR_BLUE, 'kLedBlue'],
                                [Blockly.Msg.SENGO1_COLOR_PURPLE, 'kLedPurple'],
                                [Blockly.Msg.SENGO1_COLOR_CYAN, 'kLedCyan'],
                                [Blockly.Msg.SENGO1_COLOR_WHITE, 'kLedWhite']
                            ];
                        }
                    },
                    {
                        type: 'input_value',
                        name: 'level'
                    }
                ],
                colour: set_color,
                secondaryColor: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 设置白平衡模式
    Blockly.Blocks.sengo1_set_awb = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_CAMERA_SET_AWB,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'awb_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_AUTO, 'kAutoWhiteBalance'],
                                [Blockly.Msg.SENGO1_LOCK_AWB, 'kWhiteLight'],
                                [Blockly.Msg.SENGO1_WHITE_LIGHT, 'kYellowLight'],
                                [Blockly.Msg.SENGO1_YELLOW_LIGHT, 'kWhiteBalanceCalibrating']
                            ];
                        }
                    }
                ],
                colour: set_color,
                secondaryColor: set_secondaryColor,
                extensions: ['shape_statement']
            });
        }
    };

    // 获取算法检测到的数量
    Blockly.Blocks.sengo1_vision_detected_count = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_DETECTED_COUNT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'vision_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_VISION_VISIONCOLOR, 'Sengo1::kVisionColor'],
                                [Blockly.Msg.SENGO1_VISION_VISIONBLOB, 'Sengo1::kVisionBlob'],
                                [Blockly.Msg.SENGO1_VISION_VISIONBALL, 'Sengo1::kVisionBall'],
                                [Blockly.Msg.SENGO1_VISION_VISIONLINE, 'Sengo1::kVisionLine'],
                                [Blockly.Msg.SENGO1_VISION_VISIONCARD, 'Sengo1::kVisionCard'],
                                [Blockly.Msg.SENGO1_VISION_VISIONBODY, 'Sengo1::kVisionBody'],
                                [Blockly.Msg.SENGO1_VISION_VISIONFACE, 'Sengo1::kVisionFace'],
                                [Blockly.Msg.SENGO1_VISION_VISIONQRCODE, 'Sengo1::kVisionQrCode']
                            ];
                        }
                    }
                ],
                colour: get_color,
                secondaryColor: get_secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    // 获取二维码值
    Blockly.Blocks.sengo1_get_qr_value = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_GET_QR_VALUE,
                colour: get_color,
                secondaryColor: get_secondaryColor,
                extensions: ['output_string']
            });
        }
    };

    // 获取检测对象属性值
    Blockly.Blocks.sengo1_vision_obj = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_OBJ,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'vision_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_VISION_VISIONBLOB, 'Sengo1::kVisionBlob'],
                                [Blockly.Msg.SENGO1_VISION_VISIONBALL, 'Sengo1::kVisionBall'],
                                [Blockly.Msg.SENGO1_VISION_VISIONCARD, 'Sengo1::kVisionCard'],
                                [Blockly.Msg.SENGO1_VISION_VISIONBODY, 'Sengo1::kVisionBody'],
                                [Blockly.Msg.SENGO1_VISION_VISIONFACE, 'Sengo1::kVisionFace']
                            ];
                        }
                    },
                    {
                        type: 'field_dropdown',
                        name: 'vision_res_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_STATE_VALUE_X, 'kXValue'],
                                [Blockly.Msg.SENGO1_STATE_VALUE_Y, 'kYValue'],
                                [Blockly.Msg.SENGO1_STATE_VALUE_WIDTH, 'kWidthValue'],
                                [Blockly.Msg.SENGO1_STATE_VALUE_HEIGHT, 'kHeightValue'],
                                [Blockly.Msg.SENGO1_STATE_VALUE_LABEL, 'kLabel']
                            ];
                        }
                    }
                ],
                colour: get_color,
                secondaryColor: get_secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    // 获取颜色识别属性值
    Blockly.Blocks.sengo1_vision_obj_color = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_OBJ_COLOR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'vision_res_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_STATE_VALUE_LABEL, 'kLabel'],
                                [Blockly.Msg.SENGO1_STATE_VALUE_R, 'kRValue'],
                                [Blockly.Msg.SENGO1_STATE_VALUE_G, 'kGValue'],
                                [Blockly.Msg.SENGO1_STATE_VALUE_B, 'kBValue']
                            ];
                        }
                    }
                ],
                colour: get_color,
                secondaryColor: get_secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    // 获取线条检测属性值
    Blockly.Blocks.sengo1_vision_obj_line = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_OBJ_LINE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'vision_res_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_STATE_LINE_EX, 'kXValue'],
                                [Blockly.Msg.SENGO1_STATE_LINE_EY, 'kYValue'],
                                [Blockly.Msg.SENGO1_STATE_LINE_SX, 'kWidthValue'],
                                [Blockly.Msg.SENGO1_STATE_LINE_SY, 'kHeightValue'],
                                [Blockly.Msg.SENGO1_STATE_LINE_A, 'kLabel']
                            ];
                        }
                    }
                ],
                colour: get_color,
                secondaryColor: get_secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    // 获取二维码属性值
    Blockly.Blocks.sengo1_vision_obj_qr = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_OBJ_QR,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'vision_res_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_STATE_VALUE_X, 'kXValue'],
                                [Blockly.Msg.SENGO1_STATE_VALUE_Y, 'kYValue'],
                                [Blockly.Msg.SENGO1_STATE_VALUE_WIDTH, 'kWidthValue'],
                                [Blockly.Msg.SENGO1_STATE_VALUE_HEIGHT, 'kHeightValue']
                            ];
                        }
                    }
                ],
                colour: get_color,
                secondaryColor: get_secondaryColor,
                extensions: ['output_number']
            });
        }
    };

    // 检测颜色
    Blockly.Blocks.sengo1_vision_color = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_COLOR_DETECT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'vision_card_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_COLOR_BLACK, 'Sengo1::kColorBlack'],
                                [Blockly.Msg.SENGO1_COLOR_WHITE, 'Sengo1::kColorWhite'],
                                [Blockly.Msg.SENGO1_COLOR_RED, 'Sengo1::kColorRed'],
                                [Blockly.Msg.SENGO1_COLOR_GREEN, 'Sengo1::kColorGreen'],
                                [Blockly.Msg.SENGO1_COLOR_BLUE, 'Sengo1::kColorBlue'],
                                [Blockly.Msg.SENGO1_COLOR_YELLOW, 'Sengo1::kColorYellow']
                            ];
                        }
                    }
                ],
                colour: get_color,
                secondaryColor: get_secondaryColor,
                extensions: ['output_boolean']
            });
        }
    };

    // 检测色块
    Blockly.Blocks.sengo1_vision_card_blob = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_CARD_BLOB_DETECT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'vision_card_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_COLOR_BLACK, 'Sengo1::kColorBlack'],
                                [Blockly.Msg.SENGO1_COLOR_WHITE, 'Sengo1::kColorWhite'],
                                [Blockly.Msg.SENGO1_COLOR_RED, 'Sengo1::kColorRed'],
                                [Blockly.Msg.SENGO1_COLOR_GREEN, 'Sengo1::kColorGreen'],
                                [Blockly.Msg.SENGO1_COLOR_BLUE, 'Sengo1::kColorBlue'],
                                [Blockly.Msg.SENGO1_COLOR_YELLOW, 'Sengo1::kColorYellow']
                            ];
                        }
                    }
                ],
                colour: get_color,
                secondaryColor: get_secondaryColor,
                extensions: ['output_boolean']
            });
        }
    };

    // 识别卡片
    Blockly.Blocks.sengo1_vision_card = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_CARD_DETECT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'vision_card_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_CARD_FORWARD, 'Sengo1::kCardForward'],
                                [Blockly.Msg.SENGO1_CARD_LEFT, 'Sengo1::kCardLeft'],
                                [Blockly.Msg.SENGO1_CARD_RIGHT, 'Sengo1::kCardRight'],
                                [Blockly.Msg.SENGO1_CARD_TURN_AROUND, 'Sengo1::kCardTurnAround'],
                                [Blockly.Msg.SENGO1_CARD_PARK, 'Sengo1::kCardPark']
                            ];
                        }
                    }
                ],
                colour: get_color,
                secondaryColor: get_secondaryColor,
                extensions: ['output_boolean']
            });
        }
    };

    // 识别球体
    Blockly.Blocks.sengo1_vision_ball = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SENGO1_VISION_BALL_DETECT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'vision_card_obj',
                        options: function() {
                            return [
                                [Blockly.Msg.SENGO1_BALLTABLETENNIS, 'Sengo1::kBallTableTennis'],
                                [Blockly.Msg.SENGO1_BALLTENNIS, 'Sengo1::kBallTennis']
                            ];
                        }
                    }
                ],
                colour: get_color,
                secondaryColor: get_secondaryColor,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks; 