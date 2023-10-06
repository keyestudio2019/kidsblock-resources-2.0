/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {

  var sentry1_color = '#0066CC';
  var sentry1_secondaryColour = '#005AB5';

  var sentry2_color = '#005AB5';
  var sentry2_secondaryColour = '#005AB5';

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

  const get_sentry2_vision_blod_objs = () => [
    [Blockly.Msg.SENTRY_COLOR_BLACK, "Sentry2::kColorBlack"],
    [Blockly.Msg.SENTRY_COLOR_WHITE, "Sentry2::kColorWhite"],
    [Blockly.Msg.SENTRY_COLOR_RED, "Sentry2::kColorRed"],
    [Blockly.Msg.SENTRY_COLOR_GREEN, "Sentry2::kColorGreen"],
    [Blockly.Msg.SENTRY_COLOR_BLUE, "Sentry2::kColorBlue"],
    [Blockly.Msg.SENTRY_COLOR_YELLOW, "Sentry2::kColorYellow"]
  ];

  const get_sentry2_vision_objs = () => [
    [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"],
    [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"],
    [Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG, "Sentry2::kVisionAprilTag"],
    [Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry2::kVisionLine"],
    [Blockly.Msg.SENTRY_VISION_VISIONLEARNING, "Sentry2::kVisionLearning"],
    [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"],
    [Blockly.Msg.SENTRY_VISION_VISIONFACE, "Sentry2::kVisionFace"],
    [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"],
    [Blockly.Msg.SENTRY_VISION_VISIONQRCODE, "Sentry2::kVisionQrCode"],
    [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT, "Sentry2::kVisionMotionDetect"],
    [Blockly.Msg.SENTRY_VISION_VISIONCUSTOM, "Sentry2::kVisionCustom"]
  ];

  const get_sentry2_vision_custom = () => [
    [Blockly.Msg.SENTRY_VISION_VISIONCUSTOM, "Sentry2::kVisionCustom"],
    [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"],
    [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"],
    [Blockly.Msg.SENTRY_VISION_VISIONAPRILTAG, "Sentry2::kVisionAprilTag"],
    [Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry2::kVisionLine"],
    [Blockly.Msg.SENTRY_VISION_VISIONLEARNING, "Sentry2::kVisionLearning"],
    [Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"],
    [Blockly.Msg.SENTRY_VISION_VISIONFACE, "Sentry2::kVisionFace"],
    [Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"],
    [Blockly.Msg.SENTRY_VISION_VISIONQRCODE, "Sentry2::kVisionQrCode"],
    [Blockly.Msg.SENTRY_VISION_VISIONMOTIONDETECT, "Sentry2::kVisionMotionDetect"]
  ];

  const get_sentry2_vision_20class_objs = () => [
    [Blockly.Msg.SENTRY_CLASS20_AIRPLANE, "Sentry2::kAirplane"],
    [Blockly.Msg.SENTRY_CLASS20_BICYCLE, "Sentry2::kBicycle"],
    [Blockly.Msg.SENTRY_CLASS20_BIRD, "Sentry2::kBird"],
    [Blockly.Msg.SENTRY_CLASS20_BOAT, "Sentry2::kBoat"],
    [Blockly.Msg.SENTRY_CLASS20_BOTTLE, "Sentry2::kBottle"],
    [Blockly.Msg.SENTRY_CLASS20_BUS, "Sentry2::kBus"],
    [Blockly.Msg.SENTRY_CLASS20_CAR, "Sentry2::kCar"],
    [Blockly.Msg.SENTRY_CLASS20_CAT, "Sentry2::kCat"],
    [Blockly.Msg.SENTRY_CLASS20_CHAIR, "Sentry2::kChair"],
    [Blockly.Msg.SENTRY_CLASS20_COW, "Sentry2::kCow"],
    [Blockly.Msg.SENTRY_CLASS20_TABLE, "Sentry2::kTable"],
    [Blockly.Msg.SENTRY_CLASS20_DOG, "Sentry2::kDog"],
    [Blockly.Msg.SENTRY_CLASS20_HORSE, "Sentry2::kHorse"],
    [Blockly.Msg.SENTRY_CLASS20_MOTORBIKE, "Sentry2::kMotorBike"],
    [Blockly.Msg.SENTRY_CLASS20_PERSON, "Sentry2::kPerson"],
    [Blockly.Msg.SENTRY_CLASS20_PLANT, "Sentry2::kPlant"],
    [Blockly.Msg.SENTRY_CLASS20_SHEEP, "Sentry2::kSheep"],
    [Blockly.Msg.SENTRY_CLASS20_SOFA, "Sentry2::kSofa"],
    [Blockly.Msg.SENTRY_CLASS20_TRAIN, "Sentry2::kTrain"],
    [Blockly.Msg.SENTRY_CLASS20_MONITOR, "Sentry2::kMonitor"]
  ];


  const get_sentry2_vision_card_objs = () => [
    [Blockly.Msg.SENTRY_CARD_FORWARD, "Sentry2::kCardForward"],
    [Blockly.Msg.SENTRY_CARD_LEFT, "Sentry2::kCardLeft"],
    [Blockly.Msg.SENTRY_CARD_RIGHT, "Sentry2::kCardRight"],
    [Blockly.Msg.SENTRY_CARD_TURN_AROUND, "Sentry2::kCardTurnAround"],
    [Blockly.Msg.SENTRY_CARD_PARK, "Sentry2::kCardPark"],
    [Blockly.Msg.SENTRY_CARD_GREEN_LIGHT, "Sentry2::kCardGreenLight"],
    [Blockly.Msg.SENTRY_CARD_RED_LIGHT, "Sentry2::kCardRedLight"],
    [Blockly.Msg.SENTRY_CARD_SPEED_40, "Sentry2::kCardSpeed40"],
    [Blockly.Msg.SENTRY_CARD_SPEED_60, "Sentry2::kCardSpeed60"],
    [Blockly.Msg.SENTRY_CARD_SPEED_80, "Sentry2::kCardSpeed80"],
    [Blockly.Msg.SENTRY_CARD_CHECK, "Sentry2::kCardCheck"],
    [Blockly.Msg.SENTRY_CARD_CROSS, "Sentry2::kCardCross"],
    [Blockly.Msg.SENTRY_CARD_CIRCLE, "Sentry2::kCardCircle"],
    [Blockly.Msg.SENTRY_CARD_SQUARE, "Sentry2::kCardSquare"],
    [Blockly.Msg.SENTRY_CARD_TRIANGLE, "Sentry2::kCardTriangle"],
    [Blockly.Msg.SENTRY_CARD_PLUS, "Sentry2::kCardPlus"],
    [Blockly.Msg.SENTRY_CARD_MINUS, "Sentry2::kCardMinus"],
    [Blockly.Msg.SENTRY_CARD_DIVIDE, "Sentry2::kCardDivide"],
    [Blockly.Msg.SENTRY_CARD_EQUAL, "Sentry2::kCardEqual"],
    [Blockly.Msg.SENTRY_CARD_1, "Sentry2::kCardOne"],
    [Blockly.Msg.SENTRY_CARD_2, "Sentry2::kCardTwo"],
    [Blockly.Msg.SENTRY_CARD_3, "Sentry2::kCardThree"],
    [Blockly.Msg.SENTRY_CARD_4, "Sentry2::kCardFour"],
    [Blockly.Msg.SENTRY_CARD_5, "Sentry2::kCardFive"],
    [Blockly.Msg.SENTRY_CARD_6, "Sentry2::kCardSix"],
    [Blockly.Msg.SENTRY_CARD_7, "Sentry2::kCardSeven"],
    [Blockly.Msg.SENTRY_CARD_8, "Sentry2::kCardEight"],
    [Blockly.Msg.SENTRY_CARD_9, "Sentry2::kCardNine"],
    [Blockly.Msg.SENTRY_CARD_0, "Sentry2::kCardZero"]
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

  // 初始化 Sentry2
  Blockly.Blocks.Sentry2Begin = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
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
        message0: Blockly.Msg.SENTRY2_BEGIN_MESSAGE0,
        extensions: ['shape_statement'],
      });
    },
  };

  // 启用算法
  Blockly.Blocks.Sentry2VisionSetStatus = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
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
            options: get_sentry2_vision_objs(),
            type: "field_dropdown"
          },
        ],
        message0: Blockly.Msg.SENTRY2_VISION_SET_STATUS_MESSAGE0,
        extensions: ['shape_statement'],


      });
    },
  };

  Blockly.Blocks.Sentry2CameraSetAwb = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "awb_obj",
            options: get_white_balance_objs(),
            type: "field_dropdown",
          },
        ],
        message0: Blockly.Msg.SENTRY2_CAMERA_SET_AWB_MESSAGE0,
        extensions: ['shape_statement'],
      });
    },
  };

  Blockly.Blocks.Sentry2SetParamNum = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: get_sentry2_vision_objs(),
            type: "field_dropdown"
          },
          {

            type: "input_value",
            name: "max_num",
          },
        ],


        extensions: ['shape_statement'],
        message0: Blockly.Msg.SENTRY2_SET_PARAMNUM_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry2SetColorParam = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: [
              [Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"],
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
        extensions: ['shape_statement'],
        message0: Blockly.Msg.SENTRY2_COLORPARAM_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry2SetVisionParam = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: get_sentry2_vision_objs(),
            type: "field_dropdown"
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
            name: "lable",
          },
          {

            type: "input_value",
            name: "index",
          },
        ],
        message0: Blockly.Msg.SENTRY2_VISIONPARAM_MESSAGE0,
        extensions: ['shape_statement'],
      });
    },
  };

  Blockly.Blocks.Sentry2SetBlodParam = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: [
              [Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"],
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
            options: get_sentry2_vision_blod_objs(),
          },
          {

            type: "input_value",
            name: "index",
          },
        ],
        extensions: ['shape_statement'],
        message0: Blockly.Msg.SENTRY2_BOLDPARAM_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry2VisionDetectedCount = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: get_sentry2_vision_objs(),
            type: "field_dropdown"
          },
        ],

        extensions: ['output_number'],
        message0: Blockly.Msg.SENTRY2_DETECTED_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry2GetValue = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: get_sentry2_vision_objs(),
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
        extensions: ['output_number'],
        message0: Blockly.Msg.SENTRY2_GET_VALUE_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry2GetValueNomal = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: get_sentry2_vision_custom(),
            type: "field_dropdown"
          },
          {
            type: "field_dropdown",
            name: "vision_res_obj",
            options: get_vision_custom_objs(),
          },
          {

            type: "input_value",
            name: "index",
          },
        ],
        extensions: ['output_number'],
        message0: Blockly.Msg.SENTRY2_GET_VALUE_MESSAGE0,
      });
    },
  };


  Blockly.Blocks.Sentry2ColorRcgValue = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"]],
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
        extensions: ['output_number'],
        message0: Blockly.Msg.SENTRY2_COLORRCGVALUE_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry2QrRcgValue = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONQRCODE, "Sentry2::kVisionQrCode"]],
            type: "field_dropdown"
          },
          {
            type: "field_dropdown",
            name: "vision_res_obj",
            options: get_vision_qr_objs(),
          },
        ],
        extensions: ['output_number'],
        message0: Blockly.Msg.SENTRY2_QRRCGVALUE_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry2GetQrCodeValue = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        extensions: ['output_string'],
        message0: Blockly.Msg.SENTRY2_GET_QRCODEVALUE_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry2LineValue = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONLINE, "Sentry2::kVisionLine"]],
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
        message0: Blockly.Msg.SENTRY2_LINEVALUE_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry2DetectedColor = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONCOLOR, "Sentry2::kVisionColor"]],
            type: "field_dropdown"
          },
          {
            type: "field_dropdown",
            name: "vision_card_obj",
            options: get_sentry2_vision_blod_objs(),
          },
          {

            type: "input_value",
            name: "index",
          },
        ],
        extensions: ['output_boolean'],
        message0: Blockly.Msg.SENTRY2_DETECTEDCOLOR_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry2DetectedBlob = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONBLOB, "Sentry2::kVisionBlob"]],
            type: "field_dropdown"
          },
          {
            type: "field_dropdown",
            name: "vision_card_obj",
            options: get_sentry2_vision_blod_objs(),
          },
          {

            type: "input_value",
            name: "index",
          },
        ],
        extensions: ['output_boolean'],
        message0: Blockly.Msg.SENTRY2_DETECTEDBLOB_MESSAGE0,
      });
    },
  };


  Blockly.Blocks.Sentry2DetectedCard = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISIONCARD, "Sentry2::kVisionCard"]],
            type: "field_dropdown"
          },
          {
            name: "vision_card_obj",
            options: get_sentry2_vision_card_objs(),
            type: "field_dropdown",
          },
          {

            type: "input_value",
            name: "index",
          },
        ],

        extensions: ['output_boolean'],
        message0: Blockly.Msg.SENTRY2_DETECTEDCARD_MESSAGE0,
      });
    },
  };

  Blockly.Blocks.Sentry2Detected20Class = {
    init: function () {
      this.jsonInit({
        colour: sentry2_color,
        args0: [
          {
            name: "vision_obj",
            options: [[Blockly.Msg.SENTRY_VISION_VISION20CLASSES, "Sentry2::kVision20Classes"]],
            type: "field_dropdown"
          },
          {
            name: "vision_card_obj",
            options: get_sentry2_vision_20class_objs(),
            type: "field_dropdown",
          },
          {

            type: "input_value",
            name: "index",
          },
        ],
        extensions: ['output_boolean'],
        message0: Blockly.Msg.SENTRY2_DETECTED20CLASS_MESSAGE0,
      });
    },
  };

  return Blockly;
}

exports = addBlocks;
