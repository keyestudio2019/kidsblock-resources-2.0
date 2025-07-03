/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {

    const color = '#4C97FF';
    
    const yuyinIconUrl = 'data:image/png;base64,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';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    //语音识别初始化
    Blockly.Blocks.yuyininit = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.YUNYININIT,
                args0: [
                    {
                        type: 'field_image',
                        src: yuyinIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'mode',
                        options: [[Blockly.Msg.SOFT_SERIAL, "1"],[Blockly.Msg.HARD_SERIAL, "2"]]
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN1',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'PIN2',
                        options: digitalPins
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    //特定10进制指令词
    Blockly.Blocks.yuyinshibie = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.YUNYINSHIBIE,
                args0: [
                    {
                        type: 'field_image',
                        src: yuyinIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'VALUE',
                       options: [[Blockly.Msg.TURN_ON_LIGHT, "1"],
                                [Blockly.Msg.TURN_OFF_LIGHT, "2"],
                                [Blockly.Msg.INCREASE_BRIGHTNESS, "3"],
                                [Blockly.Msg.DECREASE_BRIGHTNESS, "4"],
                                [Blockly.Msg.TURN_ON_FAN, "5"],
                                [Blockly.Msg.TURN_OFF_FAN, "6"],
                                [Blockly.Msg.INCREASE_WIND_SPEED, "7"],
                                [Blockly.Msg.DECREASE_WIND_SPEED, "8"],
                                [Blockly.Msg.WATER_PLANTS, "9"],
                                [Blockly.Msg.STOP_WATERING, "10"],
                                [Blockly.Msg.PLAY_MUSIC, "11"],
                                [Blockly.Msg.STOP_MUSIC, "12"],
                                [Blockly.Msg.TURN_ON_RED_LIGHT, "13"],
                                [Blockly.Msg.TURN_OFF_RED_LIGHT, "14"],
                                [Blockly.Msg.TURN_ON_GREEN_LIGHT, "15"],
                                [Blockly.Msg.TURN_OFF_GREEN_LIGHT, "16"],
                                [Blockly.Msg.TURN_ON_BLUE_LIGHT, "17"],
                                [Blockly.Msg.TURN_OFF_BLUE_LIGHT, "18"],
                                [Blockly.Msg.TURN_ON_LED_MATRIX, "19"],
                                [Blockly.Msg.TURN_OFF_LED_MATRIX, "20"],
                                [Blockly.Msg.SOMEONE_IS_APPROACHING, "21"],
                                [Blockly.Msg.PERSON_IS_MOVING_AWAY, "22"],
                                [Blockly.Msg.ITS_RAINING, "23"],
                                [Blockly.Msg.STOP_RAIN, "24"],
                                [Blockly.Msg.MOVE_FORWARD, "25"],
                                [Blockly.Msg.MOVE_BACKWARD, "26"],
                                [Blockly.Msg.TURN_LEFT, "27"],
                                [Blockly.Msg.TURN_RIGHT, "28"],
                                [Blockly.Msg.FOLLOW_TRACK, "29"],
                                [Blockly.Msg.FOLLOW_PERSON, "30"],
                                [Blockly.Msg.AVOID_OBSTACLE, "31"],
                                [Blockly.Msg.SEEK_LIGHT, "32"],
                                [Blockly.Msg.STOP, "33"],
                                [Blockly.Msg.START_FEEDING, "34"],
                                [Blockly.Msg.STOP_FEEDING, "35"],
                                [Blockly.Msg.TURN_ON_COLORFUL_LIGHT, "36"],
                                [Blockly.Msg.TURN_OFF_COLORFUL_LIGHT, "37"],
                                [Blockly.Msg.TURN_ON_BUZZER, "38"],
                                [Blockly.Msg.TURN_OFF_BUZZER, "39"],
                                [Blockly.Msg.INCREASE_VOLUME, "40"],
                                [Blockly.Msg.DECREASE_VOLUME, "41"],
                                [Blockly.Msg.MAXIMUM_VOLUME, "42"],
                                [Blockly.Msg.MEDIUM_VOLUME, "43"],
                                [Blockly.Msg.MINIMUM_VOLUME, "44"],
                                [Blockly.Msg.INCREASE_SERVO_ANGLE, "45"],
                                [Blockly.Msg.DECREASE_SERVO_ANGLE, "46"],
                                [Blockly.Msg.CURRENT_TEMPERATURE, "47"],
                                [Blockly.Msg.CURRENT_HUMIDITY, "48"],
                                [Blockly.Msg.CURRENT_RAINFALL_AMOUNT, "49"],
                                [Blockly.Msg.CURRENT_LIGHT_INTENSITY, "50"],
                                [Blockly.Msg.CURRENT_SOIL_MOISTURE, "51"],
                                [Blockly.Msg.CURRENT_WATER_LEVEL, "52"],
                                [Blockly.Msg.WHAT_TIME_IS_IT, "53"],
                                [Blockly.Msg.CURRENT_DISTANCE, "54"],
                                [Blockly.Msg.TURN_ON, "55"],
                                [Blockly.Msg.TURN_OFF, "56"]
                            ]
                    }
                ],
                colour:color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.yuyinqinchu = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.YUNYINQINGCHU,
                args0: [
                    {
                        type: 'field_image',
                        src: yuyinIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.boxiaoshu = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BOXIAOSHU,
                args0: [
                    {
                        type: 'field_image',
                        src: yuyinIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'XIAOSHU'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.bozhengshu = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.BOZHENGSHU,
                args0: [
                    {
                        type: 'field_image',
                        src: yuyinIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'ZHENGSHU'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.yuyinbobao = {
        init: function() {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.YUYINBOBAO,
                args0: [
                    {
                        type: 'field_image',
                        src: yuyinIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'PIN3',
                        options: [
                            [Blockly.Msg.CURRENT_TEMPERATURE_IS, "1"],
                            [Blockly.Msg.DEGREES, "2"],
                            [Blockly.Msg.CURRENT_RAINFALL_PERCENTAGE, "3"],
                            [Blockly.Msg.CURRENT_HUMIDITY_PERCENTAGE, "4"],
                            [Blockly.Msg.CURRENT_LIGHT_INTENSITY_IS, "5"],
                            [Blockly.Msg.CURRENT_SOIL_MOISTURE_PERCENTAGE, "6"],
                            [Blockly.Msg.CURRENT_WATER_LEVEL_IS, "7"],
                            [Blockly.Msg.CURRENT_BEIJING_TIME, "8"],
                            [Blockly.Msg.CURRENT_DISTANCE_IS, "9"],
                            [Blockly.Msg.POINT, "10"],
                            [Blockly.Msg.MINUTE, "11"],
                            [Blockly.Msg.SECOND, "12"],
                            [Blockly.Msg.ROUND_HOUR, "13"],
                            [Blockly.Msg.MILLILITERS, "14"],
                            [Blockly.Msg.MILLIMETERS, "15"],
                            [Blockly.Msg.CENTIMETERS, "16"],
                            [Blockly.Msg.METERS, "17"],
                            [Blockly.Msg.KILOMETERS, "18"],
                        ]
                    }
                ],
               colour: color,
               extensions: ['shape_statement']
            });
        }
    };
    return Blockly;
}

exports = addBlocks;
