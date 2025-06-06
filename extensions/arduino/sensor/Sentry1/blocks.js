/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {

  var sentry1_color = '#0066CC';
  var sentry1_secondaryColour = '#005AB5';

  const get_mode_objs = () => [["I2C", "Wire"]];

  const get_addr_objs = () => [['0x60', '0x60'],
  ['0x61', '0x61'],
  ['0x62', '0x62'],
  ['0x63', '0x63']];

  const get_white_balance_objs = () => [
    [Blockly.Msg.SENTRY_AWB_AUTO, "kAutoWhiteBalance"],
    [Blockly.Msg.SENTRY_AWB_LOCK, "kWhiteLight"],
    [Blockly.Msg.SENTRY_AWB_WHITE_LIGHT, "kYellowLight"],
    [Blockly.Msg.SENTRY_AWB_YELLOW_LIGHT, "kWhiteBalanceCalibrating"]
  ];

  var get_led_color_objs = () => [
    [Blockly.Msg.SENTRY_LED_CLOSE, "kLedClose"],
    [Blockly.Msg.SENTRY_LED_RED, "kLedRed"],
    [Blockly.Msg.SENTRY_LED_GREEN, "kLedGreen"],
    [Blockly.Msg.SENTRY_LED_YELLOW, "kLedYellow"],
    [Blockly.Msg.SENTRY_LED_BLUE, "kLedBlue"],
    [Blockly.Msg.SENTRY_LED_PURPLE, "kLedPurple"],
    [Blockly.Msg.SENTRY_LED_CYAN, "kLedCyan"],
    [Blockly.Msg.SENTRY_LED_WHITE, "kLedWhite"]
  ];

  const get_vision_res_objs = () => [
    [Blockly.Msg.SENTRY_STATE_VALUE_X, "kXValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE_Y, "kYValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE_WIDTH, "kWidthValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT, "kHeightValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE_LABEL, "kLabel"]
  ];

  const get_vision_custom_objs = () => [
    [Blockly.Msg.SENTRY_STATE_VALUE + "1", "kXValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE + "2", "kYValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE + "3", "kWidthValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE + "4", "kHeightValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE + "5", "kLabel"]
  ];

  const get_vision_qr_objs = () => [
    [Blockly.Msg.SENTRY_STATE_VALUE_X, "kXValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE_Y, "kYValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE_WIDTH, "kWidthValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE_HEIGHT, "kHeightValue"]
  ];

  const get_vision_color_objs = () => [
    [Blockly.Msg.SENTRY_STATE_VALUE_R, "kRValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE_G, "kGValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE_B, "kBValue"],
    [Blockly.Msg.SENTRY_STATE_VALUE_LABEL, "kLabel"]
  ];

  const get_vision_line_objs = () => [
    [Blockly.Msg.SENTRY_STATE_LINE_EX, "kXValue"],
    [Blockly.Msg.SENTRY_STATE_LINE_EY, "kYValue"],
    [Blockly.Msg.SENTRY_STATE_LINE_SX, "kWidthValue"],
    [Blockly.Msg.SENTRY_STATE_LINE_SY, "kHeightValue"],
    [Blockly.Msg.SENTRY_STATE_LINE_A, "kLabel"],
  ]

  const get_sentry1_vision_blod_objs = () => [
    [Blockly.Msg.SENTRY_COLOR_BLACK, "Sentry1::kColorBlack"],
    [Blockly.Msg.SENTRY_COLOR_WHITE, "Sentry1::kColorWhite"],
    [Blockly.Msg.SENTRY_COLOR_RED, "Sentry1::kColorRed"],
    [Blockly.Msg.SENTRY_COLOR_GREEN, "Sentry1::kColorGreen"],
    [Blockly.Msg.SENTRY_COLOR_BLUE, "Sentry1::kColorBlue"],
    [Blockly.Msg.SENTRY_COLOR_YELLOW, "Sentry1::kColorYellow"]
  ];

  const get_sentry1_vision_objs = () => [
    [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry1::kVisionBlob"],
    [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry1::kVisionColor"],
    [Blockly.Msg.SENTRY_VISION_VISIONBALL, "Sentry1::kVisionBall"],
    [Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry1::kVisionLine"],
    [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry1::kVisionCard"],
    [Blockly.Msg.SENTRY_VISION_VISIONBODY, "Sentry1::kVisionBody"],
    [Blockly.Msg.SENTRY_VISION_VISIONQRCODE + Blockly.Msg.SENTRY_VISION_ENTERPRISE, "Sentry1::kVisionQrCode"],
    [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT + Blockly.Msg.SENTRY_VISION_ENTERPRISE, "Sentry1::kVisionMotionDetect"],
  ];


  const get_sentry1_vision_prama_support_objs = () => [
    [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry1::kVisionColor"],
    [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry1::kVisionBlob"]
  ];

  const get_sentry1_vision_card_objs = () => [
    [Blockly.Msg.SENTRY_CARD_FORWARD, "Sentry1::kCardForward"],
    [Blockly.Msg.SENTRY_CARD_LEFT, "Sentry1::kCardLeft"],
    [Blockly.Msg.SENTRY_CARD_RIGHT, "Sentry1::kCardRight"],
    [Blockly.Msg.SENTRY_CARD_TURN_AROUND, "Sentry1::kCardTurnAround"],
    [Blockly.Msg.SENTRY_CARD_PARK, "Sentry1::kCardPark"]
  ];


  const get_sentry1_vision_ball_objs = () => [
    [Blockly.Msg.SENTRY_BALLTABLETENNIS, "Sentry1::kBallTableTennis"],
    [Blockly.Msg.SENTRY_BALLTENNIS, "Sentry1::kBallTennis"],
  ];

 
  Blockly.Blocks.led_leval_slider = {
    init: function () {
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_slider',
            name: 'NUM', // 值名称
            value: '0', // 默认值
            precision: 1,  // 精度
            min: '0', // 最小值
            max: '15' // 最大值
          }
        ],
        output: 'Number',
        outputShape: Blockly.OUTPUT_SHAPE_ROUND,
        colour: Blockly.Colours.textField,
        colourSecondary: Blockly.Colours.textField,
        colourTertiary: Blockly.Colours.textField
      });
    }
  };

  Blockly.Blocks.vision_objs_slider = {
    init: function () {
      this.jsonInit({
        message0: '%1',
        args0: [
          {
            type: 'field_slider',
            name: 'NUM', // 值名称
            value: '1', // 默认值
            precision: 1,  // 精度
            min: '1', // 最小值
            max: '25' // 最大值
          }
        ],
        output: 'Number',
        outputShape: Blockly.OUTPUT_SHAPE_ROUND,
        colour: Blockly.Colours.textField,
        colourSecondary: Blockly.Colours.textField,
        colourTertiary: Blockly.Colours.textField
      });
    }
  };

  // 初始化 Sentry
  Blockly.Blocks.Sentry1Begin = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "mode_obj",
            options: get_mode_objs(),
            type: "field_dropdown",
          },
          {
            name: "addr_obj",
            options: get_addr_objs(),
            type: "field_dropdown",
          },
        ],
        message0: Blockly.Msg.SENTRY1_BEGIN_MESSAGE0,
        colour: sentry1_color,
        sentry1_secondaryColour: sentry1_secondaryColour,
        extensions: ['shape_statement']
      });
    },
  };

  // 启用算法
  Blockly.Blocks.Sentry1VisionSetStatus = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "VisionStatus",
            options: [
              [Blockly.Msg.SENTRY_ENABLE, "Begin"],
              [Blockly.Msg.SENTRY_DISABLE, "End"],
            ],
            type: "field_dropdown",
          },
          {
            name: "vision_obj",
            options: get_sentry1_vision_objs(),
            type: "field_dropdown"
          },
        ],
        message0: Blockly.Msg.SENTRY1_VISION_SET_STATUS_MESSAGE0,
        extensions: ['shape_statement'],


      });
    },
  };

  // 设置 LED
  Blockly.Blocks.Sentry1LedSetColor = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            type: "input_value",
            name: "level"
          },
          {
            type: "field_dropdown",
            name: "detected_color",
            options: get_led_color_objs()
          },
          {
            type: "field_dropdown",
            name: "undetected_color",
            options: get_led_color_objs()
          }
        ],
        message0: Blockly.Msg.SENTRY1_LED_SET_COLOR_MESSAGE0,
        extensions: ['shape_statement']
      });
    },
  };

  Blockly.Blocks.Sentry1VisionSetParamNum = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: get_sentry1_vision_prama_support_objs(),
            type: "field_dropdown"
          },
          {

            type: "input_value",
            name: "max_num",
          },
        ],
        message0: Blockly.Msg.SENTRY1_SET_PARAMNUM_MESSAGE0,
        extensions: ['shape_statement']
      });
    },
  };

  Blockly.Blocks.Sentry1SetColorParam = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: [
              [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry1::kVisionColor"],
            ],
            type: "field_dropdown",
          },
          {

            type: "input_value",
            name: "x",
          },
          {

            type: "input_value",
            name: "y",
          },
          {

            type: "input_value",
            name: "w",
          },
          {

            type: "input_value",
            name: "h",
          },
          {

            type: "input_value",
            name: "index",
          },
        ],
        message0: Blockly.Msg.SENTRY1_COLORPARAM_MESSAGE0,
        extensions: ['shape_statement']
      });
    },
  };

  Blockly.Blocks.Sentry1SetBlodParam = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: [
              [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry1::kVisionBlob"],
            ],
            type: "field_dropdown",
          },
          {

            type: "input_value",
            name: "w",
          },
          {

            type: "input_value",
            name: "h",
          },
          {
            type: "field_dropdown",
            name: "lable",
            options: get_sentry1_vision_blod_objs(),
          },
          {

            type: "input_value",
            name: "index",
          },
        ],
        message0: Blockly.Msg.SENTRY1_BOLDPARAM_MESSAGE0,
        extensions: ['shape_statement']
      });
    },
  };

  Blockly.Blocks.Sentry1CameraSetAwb = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "awb_obj",
            options: get_white_balance_objs(),
            type: "field_dropdown",
          },
        ],
        message0: Blockly.Msg.SENTRY1_CAMERA_SET_AWB_MESSAGE0,
        extensions: ['shape_statement'],
      });
    },
  };


  Blockly.Blocks.Sentry1VisionDetectedCount = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: get_sentry1_vision_objs(),
            type: "field_dropdown"
          },
        ],
        message0: Blockly.Msg.SENTRY1_DETECTED_MESSAGE0,
        extensions: ['output_number'],
      });
    },
  };

  Blockly.Blocks.Sentry1GetValue = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: get_sentry1_vision_objs(),
            type: "field_dropdown"
          },
          {
            type: "field_dropdown",
            name: "vision_res_obj",
            options: get_vision_res_objs(),
          },
          {

            type: "input_value",
            name: "index",
          },
        ],
        message0: Blockly.Msg.SENTRY1_GET_VALUE_MESSAGE0,
        extensions: ['output_number'],
      });
    },
  };

  Blockly.Blocks.Sentry1ColorRcgValue = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry1::kVisionColor"]],
            type: "field_dropdown"
          },
          {
            type: "field_dropdown",
            name: "vision_res_obj",
            options: get_vision_color_objs(),
          },
          {

            type: "input_value",
            name: "index",
          },
        ],
        message0: Blockly.Msg.SENTRY1_GET_VALUE_MESSAGE0,
        extensions: ['output_number'],
      });
    },
  };

  Blockly.Blocks.Sentry1QrRcgValue = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONQRCODE + Blockly.Msg.SENTRY_VISION_ENTERPRISE, "Sentry1::kVisionQrCode"]],
            type: "field_dropdown"
          },
          {
            type: "field_dropdown",
            name: "vision_res_obj",
            options: get_vision_qr_objs(),
          },
        ],
        extensions: ['output_number'],
        message0: Blockly.Msg.SENTRY1_QRRCGVALUE_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry1GetQrCodeValue = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        extensions: ['output_string'],
        message0: Blockly.Msg.SENTRY1_GET_QRCODEVALUE_MESSAGE0,
      });
    },
  };


  Blockly.Blocks.Sentry1LineValue = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry1::kVisionLine"]],
            type: "field_dropdown"
          },
          {
            type: "field_dropdown",
            name: "vision_res_obj",
            options: get_vision_line_objs(),
          },
          {

            type: "input_value",
            name: "index",
          },
        ],

        extensions: ['output_number'],
        message0: Blockly.Msg.SENTRY1_LINEVALUE_MESSAGE0,
      });
    },
  };


  Blockly.Blocks.Sentry1DetectedColor = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry1::kVisionColor"]],
            type: "field_dropdown"
          },
          {
            type: "field_dropdown",
            name: "vision_card_obj",
            options: get_sentry1_vision_blod_objs(),
          },
          {

            type: "input_value",
            name: "index",
          },
        ],

        extensions: ['output_boolean'],
        message0: Blockly.Msg.SENTRY1_DETECTEDCOLOR_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry1DetectedBlob = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry1::kVisionBlob"]],
            type: "field_dropdown"
          },
          {
            type: "field_dropdown",
            name: "vision_card_obj",
            options: get_sentry1_vision_blod_objs(),
          },
          {

            type: "input_value",
            name: "index",
          },
        ],

        extensions: ['output_boolean'],
        message0: Blockly.Msg.SENTRY1_DETECTEDBLOB_MESSAGE0,
      });
    },
  };


  Blockly.Blocks.Sentry1DetectedCard = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry1::kVisionCard"]],
            type: "field_dropdown"
          },
          {
            name: "vision_card_obj",
            options: get_sentry1_vision_card_objs(),
            type: "field_dropdown",
          },
          {

            type: "input_value",
            name: "index",
          },
        ],

        extensions: ['output_boolean'],
        message0: Blockly.Msg.SENTRY1_DETECTEDCARD_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry1DetectedBall = {
    init: function () {
      this.jsonInit({
        colour: sentry1_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONBALL, "Sentry1::kVisionBall"]],
            type: "field_dropdown"
          },
          {
            name: "vision_card_obj",
            options: get_sentry1_vision_ball_objs(),
            type: "field_dropdown",
          },
          {

            type: "input_value",
            name: "index",
          },
        ],

        extensions: ['output_boolean'],
        message0: Blockly.Msg.SENTRY1_DETECTEDBALL_MESSAGE0,
      });
    },
  };

  return Blockly;
}

exports = addBlocks;
