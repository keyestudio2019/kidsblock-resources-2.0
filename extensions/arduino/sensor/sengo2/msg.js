
// 块翻译
function addMsg(Blockly) {
    // 英文翻译
    Object.assign(Blockly.ScratchMsgs.locales["en"], {
        "SENGO2_CATEGORY": "Sengo2 Vision Sensor",
        "SENGO2_SETUP": "Setup Module",
        "SENGO2_RUN": "Run Module",
        "SENGO2_BEGIN": "Initialize  Sengo2  port %1 addr %2",
        "SENGO2_SET_DEFAULT": "Reset Sengo2 to default settings",
        "SENGO2_CAMERA_SET_AWB": "Set Sengo2 white balance mode %1",
        "SENGO2_LED_SET_COLOR": "Set  Sengo2  LEDs' color %1 when targets were detected otherwise %2 luma(1-15) %3",
        "SENGO2_VISION_SET": "Set  Sengo2  %1  algo %2",
        "SENGO2_VISION_SET_PARAM_NUM": "Set  Sengo2  algo %1   %2 sets of params",
        "SENGO2_VISION_COLOR_PARAM": "Set  Sengo2  algo Color  x-coord %1 y-coord %2 width %3 height %4 paramset %5",
        "SENGO2_VISION_BLOB_PARAM": "Set  Sengo2  algo Blob  min-width %1 min-height %2 color %3 paramset %4",
        "SENGO2_VISION_GENERAL_PARAM": "Set Sengo2 %1 param1 %2 param2 %3 param3 %4 param4 %5 param5 %6 paramset %7",
        "SENGO2_VISION_BLOB_MAX": "Set  Sengo2  algo Blob  max num of blobs for each color(1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "Set  Sengo2  algo AprilTag  standard %1",
        "SENGO2_VISION_LINE_MAX": "Set  Sengo2  algo Line  max num of lines(1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "Set  Sengo2  algo %1  %2 ID %3",
        "SENGO2_VISION_GET_RESULT": "  Sengo2  algo %1  num of results",
        "SENGO2_VISION_COLOR_VALUE": "  Sengo2  algo Color  %1 of result %2",
        "SENGO2_VISION_GET_VALUE": "  Sengo2  algo %1   %2 of result %3",
        "SENGO2_VISION_LINE_VALUE": "  Sengo2  algo Line   %1 of result %2",
        "SENGO2_VISION_QRCODE_VALUE": "  Sengo2  algo QrCode   %1 of result %2",
        "SENGO2_VISION_QRCODE_STRING": "  Sengo2  algo QrCode  string of decoding result",
        "SENGO2_VISION_CUSTOM_VALUE": "Sengo2  algo Custom  %1 of result %2",
        "SENGO2_VISION_COLOR_LABEL": "  Sengo2  algo Color  recognized %1 result %2",
        "SENGO2_VISION_BLOB_LABEL": "  Sengo2  algo Blob  detected %1 blob result %2",
        "SENGO2_VISION_CARD_LABEL": "  Sengo2  algo Card  recognized %1 result %2",
        "SENGO2_VISION_CLASS20_LABEL": "  Sengo2  algo 20Class  recognized %1 result %2",
        
        // 状态
        "SENGO2_ENABLE": "run",
        "SENGO2_DISABLE": "stop",
        
        // 白平衡模式
        "SENGO2_AWB_AUTO": "Auto",
        "SENGO2_AWB_LOCK": "Lock",
        "SENGO2_AWB_WHITE_LIGHT": "WhiteLight",
        "SENGO2_AWB_YELLOW_LIGHT": "YellowLight",
        "SENGO2_AWB_CALIBRATE": "WhiteBalanceCalibrating",
        
        // 颜色
        "SENGO2_COLOR_BLACK": "Black",
        "SENGO2_COLOR_WHITE": "White",
        "SENGO2_COLOR_RED": "Red",
        "SENGO2_COLOR_GREEN": "Green",
        "SENGO2_COLOR_BLUE": "Blue",
        "SENGO2_COLOR_YELLOW": "Yellow",
        
        // LED颜色
        "SENGO2_LED_CLOSE": "Black",
        "SENGO2_LED_RED": "Red",
        "SENGO2_LED_GREEN": "Green",
        "SENGO2_LED_YELLOW": "Yellow",
        "SENGO2_LED_BLUE": "Blue",
        "SENGO2_LED_PURPLE": "Purple",
        "SENGO2_LED_CYAN": "Cyan",
        "SENGO2_LED_WHITE": "White",
        
        // 算法参数操作
        "SENGO2_OPERA_SAVE": "save data as",
        "SENGO2_OPERA_DELETE": "delete data",
        
        // 自定义数据
        "SENGO2_CUSTOM_VALUE1": "Value1",
        "SENGO2_CUSTOM_VALUE2": "Value2",
        "SENGO2_CUSTOM_VALUE3": "Value3",
        "SENGO2_CUSTOM_VALUE4": "Value4",
        "SENGO2_CUSTOM_VALUE5": "Value5",
        
        // 卡片标签
        "SENGO2_CARD_FORWARD": "Forward",
        "SENGO2_CARD_LEFT": "Left",
        "SENGO2_CARD_RIGHT": "Right",
        "SENGO2_CARD_TURN_AROUND": "Turn Around",
        "SENGO2_CARD_PARK": "Park",
        "SENGO2_CARD_GREEN_LIGHT": "Green Light",
        "SENGO2_CARD_RED_LIGHT": "Red Light",
        "SENGO2_CARD_SPEED40": "Speed 40",
        "SENGO2_CARD_SPEED60": "Speed 60",
        "SENGO2_CARD_SPEED80": "Speed 80",
        
        // 20类物体
        "SENGO2_CLASS20_AIRPLANE": "Airplane",
        "SENGO2_CLASS20_BICYCLE": "Bicycle",
        "SENGO2_CLASS20_BIRD": "Bird",
        "SENGO2_CLASS20_BOAT": "Boat",
        "SENGO2_CLASS20_BOTTLE": "Bottle",
        "SENGO2_CLASS20_BUS": "Bus",
        "SENGO2_CLASS20_CAR": "Car",
        "SENGO2_CLASS20_CAT": "Cat",
        "SENGO2_CLASS20_CHAIR": "Chair",
        "SENGO2_CLASS20_COW": "Cow",
        "SENGO2_CLASS20_TABLE": "DiningTable",
        "SENGO2_CLASS20_DOG": "Dog",
        "SENGO2_CLASS20_HORSE": "Horse",
        "SENGO2_CLASS20_MOTORBIKE": "Motorbike",
        "SENGO2_CLASS20_PERSON": "Person",
        "SENGO2_CLASS20_PLANT": "PottedPlant",
        "SENGO2_CLASS20_SHEEP": "Sheep",
        "SENGO2_CLASS20_SOFA": "Sofa",
        "SENGO2_CLASS20_TRAIN": "Train",
        "SENGO2_CLASS20_MONITOR": "Tvmonitor",
        
        // 视觉算法类型
        "SENGO2_VISION_VISIONCOLOR": "Color",
        "SENGO2_VISION_VISIONBLOB": "Blob",
        "SENGO2_VISION_VISIONAPRILTAG": "AprilTag",
        "SENGO2_VISION_VISIONLINE": "Line",
        "SENGO2_VISION_VISIONLEARNING": "Learning",
        "SENGO2_VISION_VISIONCARD": "Card",
        "SENGO2_VISION_VISIONFACE": "Face",
        "SENGO2_VISION_VISION20CLASSES": "20Class",
        "SENGO2_VISION_VISIONQRCODE": "QrCode",
        "SENGO2_VISION_VISIONMOTIONDETECT": "Motion",
        "SENGO2_VISION_VISIONCUSTOM": "Custom",
        
        // 状态值
        "SENGO2_STATE_VALUE_X": "x-coord",
        "SENGO2_STATE_VALUE_Y": "y-coord",
        "SENGO2_STATE_VALUE_WIDTH": "width",
        "SENGO2_STATE_VALUE_HEIGHT": "height",
        "SENGO2_STATE_VALUE_LABEL": "label",
        "SENGO2_STATE_VALUE_R": "red CH value",
        "SENGO2_STATE_VALUE_G": "green CH value",
        "SENGO2_STATE_VALUE_B": "blue CH value",
        
        // 线条检测值
        "SENGO2_STATE_LINE_EX": "x-coord of ending point",
        "SENGO2_STATE_LINE_EY": "y-coord of ending point",
        "SENGO2_STATE_LINE_SX": "x-coord of starting point",
        "SENGO2_STATE_LINE_SY": "y-coord of starting point",
        "SENGO2_STATE_LINE_A": "inclination angle",
        
        // 视觉数据
        "SENGO2_VISION_DATA": "Value"
    });
    
    // 中文简体翻译
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"], {
        "SENGO2_CATEGORY": "Sengo2 视觉传感器",
        "SENGO2_SETUP": "设置模块",
        "SENGO2_RUN": "运行模块",
        "SENGO2_BEGIN": "初始化  Sengo2  端口 %1 地址 %2",
        "SENGO2_SET_DEFAULT": "恢复 Sengo2 默认参数",
        "SENGO2_CAMERA_SET_AWB": "设置 Sengo2 白平衡模式 %1",
        "SENGO2_LED_SET_COLOR": "设置  Sengo2  检测到目标时LED显示 %1 否则 %2 亮度(1~15) %3",
        "SENGO2_VISION_SET": "设置  Sengo2  %1  算法 %2",
        "SENGO2_VISION_SET_PARAM_NUM": "设置  Sengo2  %1  %2 组参数",
        "SENGO2_VISION_COLOR_PARAM": "设置  Sengo2  颜色识别  中心横坐标 %1 中心纵坐标 %2 宽度 %3 高度 %4 参数组 %5",
        "SENGO2_VISION_BLOB_PARAM": "设置  Sengo2  色块检测  最小宽度 %1 最小高度 %2 颜色 %3 参数组 %4",
        "SENGO2_VISION_GENERAL_PARAM": "设置 Sengo2 %1 参数1 %2 参数2 %3 参数3 %4 参数4 %5 参数5 %6 参数组 %7",
        "SENGO2_VISION_BLOB_MAX": "设置  Sengo2  色块检测  每种颜色最大可检测数量(1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "设置  Sengo2  标签识别  编码格式 %1",
        "SENGO2_VISION_LINE_MAX": "设置  Sengo2  线条检测  最大可检测数量(1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "设置  Sengo2  %1  %2 编号 %3",
        "SENGO2_VISION_GET_RESULT": "  Sengo2  %1  返回的结果数量",
        "SENGO2_VISION_COLOR_VALUE": "  Sengo2  颜色识别  返回值 %1 结果 %2 的",
        "SENGO2_VISION_GET_VALUE": "  Sengo2  %1  返回值 %2 结果 %3 的",
        "SENGO2_VISION_LINE_VALUE": "  Sengo2  线条检测  返回值 %1 结果 %2 的",
        "SENGO2_VISION_QRCODE_VALUE": "  Sengo2  二维码  返回值 %1 结果 %2 的",
        "SENGO2_VISION_QRCODE_STRING": "  Sengo2  二维码  返回的结果字符串",
        "SENGO2_VISION_CUSTOM_VALUE": "  Sengo2  自定义 返回值 %1 结果 %2 的",
        "SENGO2_VISION_COLOR_LABEL": "  Sengo2  颜色识别  识别到 %1 结果 %2",
        "SENGO2_VISION_BLOB_LABEL": "  Sengo2  色块检测  检测到 %1块 结果 %2",
        "SENGO2_VISION_CARD_LABEL": "  Sengo2  卡片识别  识别到 %1 结果 %2",
        "SENGO2_VISION_CLASS20_LABEL": "  Sengo2  20类物体  识别到 %1 结果 %2",
        
        // 状态
        "SENGO2_ENABLE": "开启",
        "SENGO2_DISABLE": "关闭",
        
        // 白平衡模式
        "SENGO2_AWB_AUTO": "自动",
        "SENGO2_AWB_LOCK": "锁定",
        "SENGO2_AWB_WHITE_LIGHT": "白光",
        "SENGO2_AWB_YELLOW_LIGHT": "黄光",
        "SENGO2_AWB_CALIBRATE": "校准",
        
        // 颜色
        "SENGO2_COLOR_BLACK": "黑色",
        "SENGO2_COLOR_WHITE": "白色",
        "SENGO2_COLOR_RED": "红色",
        "SENGO2_COLOR_GREEN": "绿色",
        "SENGO2_COLOR_BLUE": "蓝色",
        "SENGO2_COLOR_YELLOW": "黄色",
        
        // LED颜色
        "SENGO2_LED_CLOSE": "黑色",
        "SENGO2_LED_RED": "红色",
        "SENGO2_LED_GREEN": "绿色",
        "SENGO2_LED_YELLOW": "黄色",
        "SENGO2_LED_BLUE": "蓝色",
        "SENGO2_LED_PURPLE": "紫色",
        "SENGO2_LED_CYAN": "青色",
        "SENGO2_LED_WHITE": "白色",
        
        // 算法参数操作
        "SENGO2_OPERA_SAVE": "保存数据并",
        "SENGO2_OPERA_DELETE": "删除数据",
        
        // 自定义数据
        "SENGO2_CUSTOM_VALUE1": "数据1",
        "SENGO2_CUSTOM_VALUE2": "数据2",
        "SENGO2_CUSTOM_VALUE3": "数据3",
        "SENGO2_CUSTOM_VALUE4": "数据4",
        "SENGO2_CUSTOM_VALUE5": "数据5",
        
        // 卡片标签
        "SENGO2_CARD_FORWARD": "前进",
        "SENGO2_CARD_LEFT": "左转",
        "SENGO2_CARD_RIGHT": "右转",
        "SENGO2_CARD_TURN_AROUND": "掉头",
        "SENGO2_CARD_PARK": "停车",
        "SENGO2_CARD_GREEN_LIGHT": "绿灯",
        "SENGO2_CARD_RED_LIGHT": "红灯",
        "SENGO2_CARD_SPEED40": "速度40",
        "SENGO2_CARD_SPEED60": "速度60",
        "SENGO2_CARD_SPEED80": "速度80",
        
        // 20类物体
        "SENGO2_CLASS20_AIRPLANE": "飞机",
        "SENGO2_CLASS20_BICYCLE": "自行车",
        "SENGO2_CLASS20_BIRD": "鸟",
        "SENGO2_CLASS20_BOAT": "船",
        "SENGO2_CLASS20_BOTTLE": "瓶子",
        "SENGO2_CLASS20_BUS": "公交车",
        "SENGO2_CLASS20_CAR": "汽车",
        "SENGO2_CLASS20_CAT": "猫",
        "SENGO2_CLASS20_CHAIR": "椅子",
        "SENGO2_CLASS20_COW": "牛",
        "SENGO2_CLASS20_TABLE": "餐桌",
        "SENGO2_CLASS20_DOG": "狗",
        "SENGO2_CLASS20_HORSE": "马",
        "SENGO2_CLASS20_MOTORBIKE": "摩托车",
        "SENGO2_CLASS20_PERSON": "人",
        "SENGO2_CLASS20_PLANT": "盆栽植物",
        "SENGO2_CLASS20_SHEEP": "羊",
        "SENGO2_CLASS20_SOFA": "沙发",
        "SENGO2_CLASS20_TRAIN": "火车",
        "SENGO2_CLASS20_MONITOR": "显示器",
        
        // 视觉算法类型
        "SENGO2_VISION_VISIONCOLOR": "颜色识别",
        "SENGO2_VISION_VISIONBLOB": "色块检测",
        "SENGO2_VISION_VISIONAPRILTAG": "标签识别",
        "SENGO2_VISION_VISIONLINE": "线条检测",
        "SENGO2_VISION_VISIONLEARNING": "深度学习",
        "SENGO2_VISION_VISIONCARD": "卡片识别",
        "SENGO2_VISION_VISIONFACE": "人脸识别",
        "SENGO2_VISION_VISION20CLASSES": "20类物体",
        "SENGO2_VISION_VISIONQRCODE": "二维码",
        "SENGO2_VISION_VISIONMOTIONDETECT": "运动物体",
        "SENGO2_VISION_VISIONCUSTOM": "自定义",
        
        // 状态值
        "SENGO2_STATE_VALUE_X": "横坐标",
        "SENGO2_STATE_VALUE_Y": "纵坐标",
        "SENGO2_STATE_VALUE_WIDTH": "宽度",
        "SENGO2_STATE_VALUE_HEIGHT": "高度",
        "SENGO2_STATE_VALUE_LABEL": "标签",
        "SENGO2_STATE_VALUE_R": "红色通道值",
        "SENGO2_STATE_VALUE_G": "绿色通道值",
        "SENGO2_STATE_VALUE_B": "蓝色通道值",
        
        // 线条检测值
        "SENGO2_STATE_LINE_EX": "终点横坐标",
        "SENGO2_STATE_LINE_EY": "终点纵坐标",
        "SENGO2_STATE_LINE_SX": "起点横坐标",
        "SENGO2_STATE_LINE_SY": "起点纵坐标",
        "SENGO2_STATE_LINE_A": "倾斜角度",
        
        // 视觉数据
        "SENGO2_VISION_DATA": "数据"
    });
    
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        "SENGO2_CATEGORY": "Sengo2-Visionssensor",
        "SENGO2_SETUP": "Einrichtungsmodul",
        "SENGO2_RUN": "Modul ausführen",
        "SENGO2_BEGIN": "Sengo2-Port %1 Adresse %2 initialisieren",
        "SENGO2_SET_DEFAULT": "Sengo2 auf die Standardeinstellungen zurücksetzen",
        "SENGO2_CAMERA_SET_AWB": "Setze Sengo2 Weißabgleichmodus %1",
        "SENGO2_LED_SET_COLOR": "Setze die LED-Farbe von Sengo2 %1, wenn Ziele erkannt werden, sonst %2 Luminanz (1-15) %3",
        "SENGO2_VISION_SET": "Setze Sengo2 %1 Algorithmus %2",
        "SENGO2_VISION_SET_PARAM_NUM": "Setze Sengo2 Algorithmus %1 %2 Parametergruppen",
        "SENGO2_VISION_COLOR_PARAM": "Setze Sengo2 Algorithmus Farbe x-Koordinate %1 y-Koordinate %2 Breite %3 Höhe %4 Parametergroup %5",
        "SENGO2_VISION_BLOB_PARAM": "Setze Sengo2 Algorithmus Blob Mindestbreite %1 Mindesthöhe %2 Farbe %3 Parametergroup %4",
        "SENGO2_VISION_GENERAL_PARAM": "Setze Sengo2 %1 Parameter1 %2 Parameter2 %3 Parameter3 %4 Parameter4 %5 Parameter5 %6 Parametergroup %7",
        "SENGO2_VISION_BLOB_MAX": "Setze Sengo2 Algorithmus Blob maximale Anzahl von Blobs für jede Farbe (1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "Setze Sengo2 Algorithmus AprilTag Standard %1",
        "SENGO2_VISION_LINE_MAX": "Setze Sengo2 Algorithmus Linie maximale Anzahl an Linien (1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "Setze Sengo2 Algorithmus %1 %2 ID %3",
        "SENGO2_VISION_GET_RESULT": "Sengo2 Algorithmus %1 Anzahl der Ergebnisse",
        "SENGO2_VISION_COLOR_VALUE": "Sengo2 Algorithmus Farbe %1 Ergebnis %2",
        "SENGO2_VISION_GET_VALUE": "Sengo2 Algorithmus %1 %2 Ergebnis %3",
        "SENGO2_VISION_LINE_VALUE": "Sengo2 Algorithmus Linie %1 Ergebnis %2",
        "SENGO2_VISION_QRCODE_VALUE": "Sengo2 Algorithmus QrCode %1 Ergebnis %2",
        "SENGO2_VISION_QRCODE_STRING": "Sengo2 Algorithmus QrCode decodierte Ergebniszeichenfolge",
        "SENGO2_VISION_CUSTOM_VALUE": "Sengo2 Algorithmus Benutzerdefiniert %1 Ergebnis %2",
        "SENGO2_VISION_COLOR_LABEL": "Sengo2 Algorithmus Farbe erkannt %1 Ergebnis %2",
        "SENGO2_VISION_BLOB_LABEL": "Sengo2 Algorithmus Blob erkannt %1 Blob Ergebnis %2",
        "SENGO2_VISION_CARD_LABEL": "Sengo2 Algorithmus Karte erkannt %1 Ergebnis %2",
        "SENGO2_VISION_CLASS20_LABEL": "Sengo2 Algorithmus 20Klasse erkannt %1 Ergebnis %2",
        
        // Status
        "SENGO2_ENABLE": "ausführen",
        "SENGO2_DISABLE": "stoppen",
        
        // Weißabgleichmodus
        "SENGO2_AWB_AUTO": "Automatisch",
        "SENGO2_AWB_LOCK": "Sperren",
        "SENGO2_AWB_WHITE_LIGHT": "Weißes Licht",
        "SENGO2_AWB_YELLOW_LIGHT": "Gelbes Licht",
        "SENGO2_AWB_CALIBRATE": "Weißabgleich kalibrieren",
        
        // Farben
        "SENGO2_COLOR_BLACK": "Schwarz",
        "SENGO2_COLOR_WHITE": "Weiß",
        "SENGO2_COLOR_RED": "Rot",
        "SENGO2_COLOR_GREEN": "Grün",
        "SENGO2_COLOR_BLUE": "Blau",
        "SENGO2_COLOR_YELLOW": "Gelb",
        
        // LED-Farben
        "SENGO2_LED_CLOSE": "Schwarz",
        "SENGO2_LED_RED": "Rot",
        "SENGO2_LED_GREEN": "Grün",
        "SENGO2_LED_YELLOW": "Gelb",
        "SENGO2_LED_BLUE": "Blau",
        "SENGO2_LED_PURPLE": "Lila",
        "SENGO2_LED_CYAN": "Cyan",
        "SENGO2_LED_WHITE": "Weiß",
        
        // Algorithmusparameteroperation
        "SENGO2_OPERA_SAVE": "Daten speichern als",
        "SENGO2_OPERA_DELETE": "Daten löschen",
        
        // Benutzerdefinierte Daten
        "SENGO2_CUSTOM_VALUE1": "Wert1",
        "SENGO2_CUSTOM_VALUE2": "Wert2",
        "SENGO2_CUSTOM_VALUE3": "Wert3",
        "SENGO2_CUSTOM_VALUE4": "Wert4",
        "SENGO2_CUSTOM_VALUE5": "Wert5",
        
        // Kartenlabel
        "SENGO2_CARD_FORWARD": "Vorwärts",
        "SENGO2_CARD_LEFT": "Links",
        "SENGO2_CARD_RIGHT": "Rechts",
        "SENGO2_CARD_TURN_AROUND": "Drehen",
        "SENGO2_CARD_PARK": "Parken",
        "SENGO2_CARD_GREEN_LIGHT": "Grünes Licht",
        "SENGO2_CARD_RED_LIGHT": "Rotes Licht",
        "SENGO2_CARD_SPEED40": "Geschwindigkeit 40",
        "SENGO2_CARD_SPEED60": "Geschwindigkeit 60",
        "SENGO2_CARD_SPEED80": "Geschwindigkeit 80",
        
        // 20 Klassen von Objekten
        "SENGO2_CLASS20_AIRPLANE": "Flugzeug",
        "SENGO2_CLASS20_BICYCLE": "Fahrrad",
        "SENGO2_CLASS20_BIRD": "Vogel",
        "SENGO2_CLASS20_BOAT": "Boot",
        "SENGO2_CLASS20_BOTTLE": "Flasche",
        "SENGO2_CLASS20_BUS": "Bus",
        "SENGO2_CLASS20_CAR": "Auto",
        "SENGO2_CLASS20_CAT": "Katze",
        "SENGO2_CLASS20_CHAIR": "Stuhl",
        "SENGO2_CLASS20_COW": "Kuh",
        "SENGO2_CLASS20_TABLE": "Esstisch",
        "SENGO2_CLASS20_DOG": "Hund",
        "SENGO2_CLASS20_HORSE": "Pferd",
        "SENGO2_CLASS20_MOTORBIKE": "Motorrad",
        "SENGO2_CLASS20_PERSON": "Person",
        "SENGO2_CLASS20_PLANT": "Topfpflanze",
        "SENGO2_CLASS20_SHEEP": "Schaf",
        "SENGO2_CLASS20_SOFA": "Sofa",
        "SENGO2_CLASS20_TRAIN": "Zug",
        "SENGO2_CLASS20_MONITOR": "Fernseher",
        
        // Arten von visuellen Algorithmen
        "SENGO2_VISION_VISIONCOLOR": "Farbe",
        "SENGO2_VISION_VISIONBLOB": "Blob",
        "SENGO2_VISION_VISIONAPRILTAG": "AprilTag",
        "SENGO2_VISION_VISIONLINE": "Linie",
        "SENGO2_VISION_VISIONLEARNING": "Lernen",
        "SENGO2_VISION_VISIONCARD": "Karte",
        "SENGO2_VISION_VISIONFACE": "Gesicht",
        "SENGO2_VISION_VISION20CLASSES": "20Klasse",
        "SENGO2_VISION_VISIONQRCODE": "QrCode",
        "SENGO2_VISION_VISIONMOTIONDETECT": "Bewegung",
        "SENGO2_VISION_VISIONCUSTOM": "Benutzerdefiniert",
        
        // Statuswerte
        "SENGO2_STATE_VALUE_X": "x-Koordinate",
        "SENGO2_STATE_VALUE_Y": "y-Koordinate",
        "SENGO2_STATE_VALUE_WIDTH": "Breite",
        "SENGO2_STATE_VALUE_HEIGHT": "Höhe",
        "SENGO2_STATE_VALUE_LABEL": "Etikett",
        "SENGO2_STATE_VALUE_R": "roter CH-Wert",
        "SENGO2_STATE_VALUE_G": "grüner CH-Wert",
        "SENGO2_STATE_VALUE_B": "blauer CH-Wert",
        
        // Linienerkennungswerte
        "SENGO2_STATE_LINE_EX": "x-Koordinate des Endpunkts",
        "SENGO2_STATE_LINE_EY": "y-Koordinate des Endpunkts",
        "SENGO2_STATE_LINE_SX": "x-Koordinate des Startpunkts",
        "SENGO2_STATE_LINE_SY": "y-Koordinate des Startpunkts",
        "SENGO2_STATE_LINE_A": "Neigungswinkel",
        
        // Visuelle Daten
        "SENGO2_VISION_DATA": "Wert"
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        "SENGO2_CATEGORY": "Sensor de Visión Sengo2",
        "SENGO2_SETUP": "Módulo de Configuración",
        "SENGO2_RUN": "Ejecutar Módulo",
        "SENGO2_BEGIN": "Inicializar puerto Sengo2 %1 dirección %2",
        "SENGO2_SET_DEFAULT": "Restablecer Sengo2 a la configuración predeterminada",
        "SENGO2_CAMERA_SET_AWB": "Establecer modo de balance de blancos Sengo2 %1",
        "SENGO2_LED_SET_COLOR": "Establecer color de LED de Sengo2 %1 cuando se detecten objetivos, de lo contrario %2 luminancia (1-15) %3",
        "SENGO2_VISION_SET": "Establecer Sengo2 %1 algoritmo %2",
        "SENGO2_VISION_SET_PARAM_NUM": "Establecer Sengo2 algoritmo %1 %2 conjuntos de parámetros",
        "SENGO2_VISION_COLOR_PARAM": "Establecer Sengo2 algoritmo Color coordenada-x %1 coordenada-y %2 ancho %3 alto %4 conjunto de parámetros %5",
        "SENGO2_VISION_BLOB_PARAM": "Establecer Sengo2 algoritmo Blob ancho mínimo %1 alto mínimo %2 color %3 conjunto de parámetros %4",
        "SENGO2_VISION_GENERAL_PARAM": "Establecer Sengo2 %1 parámetro1 %2 parámetro2 %3 parámetro3 %4 parámetro4 %5 parámetro5 %6 conjunto de parámetros %7",
        "SENGO2_VISION_BLOB_MAX": "Establecer Sengo2 algoritmo Blob número máximo de blobs para cada color (1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "Establecer Sengo2 algoritmo AprilTag estándar %1",
        "SENGO2_VISION_LINE_MAX": "Establecer Sengo2 algoritmo Línea número máximo de líneas (1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "Establecer Sengo2 algoritmo %1 %2 ID %3",
        "SENGO2_VISION_GET_RESULT": "Sengo2 algoritmo %1 número de resultados",
        "SENGO2_VISION_COLOR_VALUE": "Sengo2 algoritmo Color %1 del resultado %2",
        "SENGO2_VISION_GET_VALUE": "Sengo2 algoritmo %1 %2 del resultado %3",
        "SENGO2_VISION_LINE_VALUE": "Sengo2 algoritmo Línea %1 del resultado %2",
        "SENGO2_VISION_QRCODE_VALUE": "Sengo2 algoritmo QrCode %1 del resultado %2",
        "SENGO2_VISION_QRCODE_STRING": "Sengo2 algoritmo QrCode cadena de resultado de decodificación",
        "SENGO2_VISION_CUSTOM_VALUE": "Sengo2 algoritmo Personalizado %1 del resultado %2",
        "SENGO2_VISION_COLOR_LABEL": "Sengo2 algoritmo Color reconocido %1 resultado %2",
        "SENGO2_VISION_BLOB_LABEL": "Sengo2 algoritmo Blob detectado %1 blob resultado %2",
        "SENGO2_VISION_CARD_LABEL": "Sengo2 algoritmo Tarjeta reconocido %1 resultado %2",
        "SENGO2_VISION_CLASS20_LABEL": "Sengo2 algoritmo 20Clase reconocido %1 resultado %2",
        
        // Estado
        "SENGO2_ENABLE": "ejecutar",
        "SENGO2_DISABLE": "detener",
        
        // Modo de balance de blancos
        "SENGO2_AWB_AUTO": "Automático",
        "SENGO2_AWB_LOCK": "Bloquear",
        "SENGO2_AWB_WHITE_LIGHT": "Luz Blanca",
        "SENGO2_AWB_YELLOW_LIGHT": "Luz Amarilla",
        "SENGO2_AWB_CALIBRATE": "Calibrando el Balance de Blancos",
        
        // Colores
        "SENGO2_COLOR_BLACK": "Negro",
        "SENGO2_COLOR_WHITE": "Blanco",
        "SENGO2_COLOR_RED": "Rojo",
        "SENGO2_COLOR_GREEN": "Verde",
        "SENGO2_COLOR_BLUE": "Azul",
        "SENGO2_COLOR_YELLOW": "Amarillo",
        
        // Colores de LED
        "SENGO2_LED_CLOSE": "Negro",
        "SENGO2_LED_RED": "Rojo",
        "SENGO2_LED_GREEN": "Verde",
        "SENGO2_LED_YELLOW": "Amarillo",
        "SENGO2_LED_BLUE": "Azul",
        "SENGO2_LED_PURPLE": "Púrpura",
        "SENGO2_LED_CYAN": "Cian",
        "SENGO2_LED_WHITE": "Blanco",
        
        // Operaciones de parámetros de algoritmo
        "SENGO2_OPERA_SAVE": "guardar datos como",
        "SENGO2_OPERA_DELETE": "eliminar datos",
        
        // Datos personalizados
        "SENGO2_CUSTOM_VALUE1": "Valor1",
        "SENGO2_CUSTOM_VALUE2": "Valor2",
        "SENGO2_CUSTOM_VALUE3": "Valor3",
        "SENGO2_CUSTOM_VALUE4": "Valor4",
        "SENGO2_CUSTOM_VALUE5": "Valor5",
        
        // Etiquetas de tarjetas
        "SENGO2_CARD_FORWARD": "Adelante",
        "SENGO2_CARD_LEFT": "Izquierda",
        "SENGO2_CARD_RIGHT": "Derecha",
        "SENGO2_CARD_TURN_AROUND": "Dar la Vuelta",
        "SENGO2_CARD_PARK": "Estacionar",
        "SENGO2_CARD_GREEN_LIGHT": "Luz Verde",
        "SENGO2_CARD_RED_LIGHT": "Luz Roja",
        "SENGO2_CARD_SPEED40": "Velocidad 40",
        "SENGO2_CARD_SPEED60": "Velocidad 60",
        "SENGO2_CARD_SPEED80": "Velocidad 80",
        
        // 20 clases de objetos
        "SENGO2_CLASS20_AIRPLANE": "Avión",
        "SENGO2_CLASS20_BICYCLE": "Bicicleta",
        "SENGO2_CLASS20_BIRD": "Pájaro",
        "SENGO2_CLASS20_BOAT": "Barco",
        "SENGO2_CLASS20_BOTTLE": "Botella",
        "SENGO2_CLASS20_BUS": "Autobús",
        "SENGO2_CLASS20_CAR": "Coche",
        "SENGO2_CLASS20_CAT": "Gato",
        "SENGO2_CLASS20_CHAIR": "Silla",
        "SENGO2_CLASS20_COW": "Vaca",
        "SENGO2_CLASS20_TABLE": "Mesa de Comedor",
        "SENGO2_CLASS20_DOG": "Perro",
        "SENGO2_CLASS20_HORSE": "Caballo",
        "SENGO2_CLASS20_MOTORBIKE": "Motocicleta",
        "SENGO2_CLASS20_PERSON": "Persona",
        "SENGO2_CLASS20_PLANT": "Planta en Maceta",
        "SENGO2_CLASS20_SHEEP": "Oveja",
        "SENGO2_CLASS20_SOFA": "Sofá",
        "SENGO2_CLASS20_TRAIN": "Tren",
        "SENGO2_CLASS20_MONITOR": "Televisor",
        
        // Tipos de algoritmos de visión
        "SENGO2_VISION_VISIONCOLOR": "Color",
        "SENGO2_VISION_VISIONBLOB": "Blob",
        "SENGO2_VISION_VISIONAPRILTAG": "AprilTag",
        "SENGO2_VISION_VISIONLINE": "Línea",
        "SENGO2_VISION_VISIONLEARNING": "Aprendizaje",
        "SENGO2_VISION_VISIONCARD": "Tarjeta",
        "SENGO2_VISION_VISIONFACE": "Cara",
        "SENGO2_VISION_VISION20CLASSES": "20Clases",
        "SENGO2_VISION_VISIONQRCODE": "QrCode",
        "SENGO2_VISION_VISIONMOTIONDETECT": "Movimiento",
        "SENGO2_VISION_VISIONCUSTOM": "Personalizado",
        
        // Valores de estado
        "SENGO2_STATE_VALUE_X": "coordenada-x",
        "SENGO2_STATE_VALUE_Y": "coordenada-y",
        "SENGO2_STATE_VALUE_WIDTH": "ancho",
        "SENGO2_STATE_VALUE_HEIGHT": "alto",
        "SENGO2_STATE_VALUE_LABEL": "etiqueta",
        "SENGO2_STATE_VALUE_R": "valor CH rojo",
        "SENGO2_STATE_VALUE_G": "valor CH verde",
        "SENGO2_STATE_VALUE_B": "valor CH azul",
        
        // Valores de detección de líneas
        "SENGO2_STATE_LINE_EX": "coordenada-x del punto final",
        "SENGO2_STATE_LINE_EY": "coordenada-y del punto final",
        "SENGO2_STATE_LINE_SX": "coordenada-x del punto inicial",
        "SENGO2_STATE_LINE_SY": "coordenada-y del punto inicial",
        "SENGO2_STATE_LINE_A": "ángulo de inclinación",
        
        // Datos visuales
        "SENGO2_VISION_DATA": "Valor"
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        "SENGO2_CATEGORY": "Capteur de Vision Sengo2",
        "SENGO2_SETUP": "Module de Configuration",
        "SENGO2_RUN": "Exécuter le Module",
        "SENGO2_BEGIN": "Initialiser le port Sengo2 %1 adresse %2",
        "SENGO2_SET_DEFAULT": "Restaurer Sengo2 aux paramètres par défaut",
        "SENGO2_CAMERA_SET_AWB": "Définir le mode de balance des blancs Sengo2 %1",
        "SENGO2_LED_SET_COLOR": "Définir la couleur des LED Sengo2 %1 lorsque des cibles sont détectées sinon %2 luminance (1-15) %3",
        "SENGO2_VISION_SET": "Définir Sengo2 %1 algorithme %2",
        "SENGO2_VISION_SET_PARAM_NUM": "Définir Sengo2 algorithme %1 %2 ensembles de paramètres",
        "SENGO2_VISION_COLOR_PARAM": "Définir Sengo2 algorithme Couleur coordonnée-x %1 coordonnée-y %2 largeur %3 hauteur %4 ensemble de paramètres %5",
        "SENGO2_VISION_BLOB_PARAM": "Définir Sengo2 algorithme Blob largeur minimale %1 hauteur minimale %2 couleur %3 ensemble de paramètres %4",
        "SENGO2_VISION_GENERAL_PARAM": "Définir Sengo2 %1 paramètre1 %2 paramètre2 %3 paramètre3 %4 paramètre4 %5 paramètre5 %6 ensemble de paramètres %7",
        "SENGO2_VISION_BLOB_MAX": "Définir Sengo2 algorithme Blob nombre maximum de blobs pour chaque couleur (1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "Définir Sengo2 algorithme AprilTag standard %1",
        "SENGO2_VISION_LINE_MAX": "Définir Sengo2 algorithme Ligne nombre maximum de lignes (1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "Définir Sengo2 algorithme %1 %2 ID %3",
        "SENGO2_VISION_GET_RESULT": "Sengo2 algorithme %1 nombre de résultats",
        "SENGO2_VISION_COLOR_VALUE": "Sengo2 algorithme Couleur %1 du résultat %2",
        "SENGO2_VISION_GET_VALUE": "Sengo2 algorithme %1 %2 du résultat %3",
        "SENGO2_VISION_LINE_VALUE": "Sengo2 algorithme Ligne %1 du résultat %2",
        "SENGO2_VISION_QRCODE_VALUE": "Sengo2 algorithme QrCode %1 du résultat %2",
        "SENGO2_VISION_QRCODE_STRING": "Sengo2 algorithme QrCode chaîne du résultat de décodage",
        "SENGO2_VISION_CUSTOM_VALUE": "Sengo2 algorithme Personnalisé %1 du résultat %2",
        "SENGO2_VISION_COLOR_LABEL": "Sengo2 algorithme Couleur reconnu %1 résultat %2",
        "SENGO2_VISION_BLOB_LABEL": "Sengo2 algorithme Blob détecté %1 blob résultat %2",
        "SENGO2_VISION_CARD_LABEL": "Sengo2 algorithme Carte reconnu %1 résultat %2",
        "SENGO2_VISION_CLASS20_LABEL": "Sengo2 algorithme 20Classe reconnu %1 résultat %2",
        
        // État
        "SENGO2_ENABLE": "exécuter",
        "SENGO2_DISABLE": "arrêter",
        
        // Mode de balance des blancs
        "SENGO2_AWB_AUTO": "Automatique",
        "SENGO2_AWB_LOCK": "Verrouiller",
        "SENGO2_AWB_WHITE_LIGHT": "Lumière Blanche",
        "SENGO2_AWB_YELLOW_LIGHT": "Lumière Jaune",
        "SENGO2_AWB_CALIBRATE": "Calibrage du Balance des Blancs",
        
        // Couleurs
        "SENGO2_COLOR_BLACK": "Noir",
        "SENGO2_COLOR_WHITE": "Blanc",
        "SENGO2_COLOR_RED": "Rouge",
        "SENGO2_COLOR_GREEN": "Vert",
        "SENGO2_COLOR_BLUE": "Bleu",
        "SENGO2_COLOR_YELLOW": "Jaune",
        
        // Couleurs des LED
        "SENGO2_LED_CLOSE": "Noir",
        "SENGO2_LED_RED": "Rouge",
        "SENGO2_LED_GREEN": "Vert",
        "SENGO2_LED_YELLOW": "Jaune",
        "SENGO2_LED_BLUE": "Bleu",
        "SENGO2_LED_PURPLE": "Violet",
        "SENGO2_LED_CYAN": "Cyan",
        "SENGO2_LED_WHITE": "Blanc",
        
        // Opérations de paramètres d'algorithme
        "SENGO2_OPERA_SAVE": "enregistrer les données sous",
        "SENGO2_OPERA_DELETE": "supprimer les données",
        
        // Données personnalisées
        "SENGO2_CUSTOM_VALUE1": "Valeur1",
        "SENGO2_CUSTOM_VALUE2": "Valeur2",
        "SENGO2_CUSTOM_VALUE3": "Valeur3",
        "SENGO2_CUSTOM_VALUE4": "Valeur4",
        "SENGO2_CUSTOM_VALUE5": "Valeur5",
        
        // Étiquettes de carte
        "SENGO2_CARD_FORWARD": "Avancer",
        "SENGO2_CARD_LEFT": "Gauche",
        "SENGO2_CARD_RIGHT": "Droit",
        "SENGO2_CARD_TURN_AROUND": "Faire Demi-Tour",
        "SENGO2_CARD_PARK": "Se Garer",
        "SENGO2_CARD_GREEN_LIGHT": "Lumière Verte",
        "SENGO2_CARD_RED_LIGHT": "Lumière Rouge",
        "SENGO2_CARD_SPEED40": "Vitesse 40",
        "SENGO2_CARD_SPEED60": "Vitesse 60",
        "SENGO2_CARD_SPEED80": "Vitesse 80",
        
        // 20 classes d'objets
        "SENGO2_CLASS20_AIRPLANE": "Avion",
        "SENGO2_CLASS20_BICYCLE": "Vélo",
        "SENGO2_CLASS20_BIRD": "Oiseau",
        "SENGO2_CLASS20_BOAT": "Bateau",
        "SENGO2_CLASS20_BOTTLE": "Bouteille",
        "SENGO2_CLASS20_BUS": "Bus",
        "SENGO2_CLASS20_CAR": "Voiture",
        "SENGO2_CLASS20_CAT": "Chat",
        "SENGO2_CLASS20_CHAIR": "Chaise",
        "SENGO2_CLASS20_COW": "Vache",
        "SENGO2_CLASS20_TABLE": "Table à Manger",
        "SENGO2_CLASS20_DOG": "Chien",
        "SENGO2_CLASS20_HORSE": "Cheval",
        "SENGO2_CLASS20_MOTORBIKE": "Moto",
        "SENGO2_CLASS20_PERSON": "Personne",
        "SENGO2_CLASS20_PLANT": "Plante en Pot",
        "SENGO2_CLASS20_SHEEP": "Mouton",
        "SENGO2_CLASS20_SOFA": "Canapé",
        "SENGO2_CLASS20_TRAIN": "Train",
        "SENGO2_CLASS20_MONITOR": "Téléviseur",
        
        // Types d'algorithmes de vision
        "SENGO2_VISION_VISIONCOLOR": "Couleur",
        "SENGO2_VISION_VISIONBLOB": "Blob",
        "SENGO2_VISION_VISIONAPRILTAG": "AprilTag",
        "SENGO2_VISION_VISIONLINE": "Ligne",
        "SENGO2_VISION_VISIONLEARNING": "Apprentissage",
        "SENGO2_VISION_VISIONCARD": "Carte",
        "SENGO2_VISION_VISIONFACE": "Visage",
        "SENGO2_VISION_VISION20CLASSES": "20Classes",
        "SENGO2_VISION_VISIONQRCODE": "QrCode",
        "SENGO2_VISION_VISIONMOTIONDETECT": "Mouvement",
        "SENGO2_VISION_VISIONCUSTOM": "Personnalisé",
        
        // Valeurs d'état
        "SENGO2_STATE_VALUE_X": "coordonnée-x",
        "SENGO2_STATE_VALUE_Y": "coordonnée-y",
        "SENGO2_STATE_VALUE_WIDTH": "largeur",
        "SENGO2_STATE_VALUE_HEIGHT": "hauteur",
        "SENGO2_STATE_VALUE_LABEL": "étiquette",
        "SENGO2_STATE_VALUE_R": "valeur CH rouge",
        "SENGO2_STATE_VALUE_G": "valeur CH verte",
        "SENGO2_STATE_VALUE_B": "valeur CH bleue",
        
        // Valeurs de détection de lignes
        "SENGO2_STATE_LINE_EX": "coordonnée-x du point final",
        "SENGO2_STATE_LINE_EY": "coordonnée-y du point final",
        "SENGO2_STATE_LINE_SX": "coordonnée-x du point de départ",
        "SENGO2_STATE_LINE_SY": "coordonnée-y du point de départ",
        "SENGO2_STATE_LINE_A": "angle d'inclinaison",
        
        // Données visuelles
        "SENGO2_VISION_DATA": "Valeur"
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        "SENGO2_CATEGORY": "Sengo2ビジョンセンサー",
        "SENGO2_SETUP": "セットアップモジュール",
        "SENGO2_RUN": "モジュールを実行する",
        "SENGO2_BEGIN": "Sengo2ポートを初期化 %1 アドレス %2",
        "SENGO2_SET_DEFAULT": "Sengo2をデフォルト設定にリセット",
        "SENGO2_CAMERA_SET_AWB": "Sengo2のホワイトバランスモードを設定 %1",
        "SENGO2_LED_SET_COLOR": "Sengo2のLEDの色を設定 %1 （ターゲットが検出されたとき）、そうでない場合は %2 輝度（1-15） %3",
        "SENGO2_VISION_SET": "Sengo2 %1 アルゴリズムを設定 %2",
        "SENGO2_VISION_SET_PARAM_NUM": "Sengo2 アルゴリズム %1 パラメータのセット数を設定 %2",
        "SENGO2_VISION_COLOR_PARAM": "Sengo2 アルゴリズムの色 x座標 %1 y座標 %2 幅 %3 高さ %4 パラメータセット %5 を設定",
        "SENGO2_VISION_BLOB_PARAM": "Sengo2 アルゴリズムのブロブ 最小幅 %1 最小高さ %2 色 %3 パラメータセット %4 を設定",
        "SENGO2_VISION_GENERAL_PARAM": "Sengo2 %1 パラメータ1 %2 パラメータ2 %3 パラメータ3 %4 パラメータ4 %5 パラメータ5 %6 パラメータセット %7 を設定",
        "SENGO2_VISION_BLOB_MAX": "Sengo2 アルゴリズムのブロブ 各色の最大ブロブ数（1-5） %1 を設定",
        "SENGO2_VISION_APRILTAG_MODE": "Sengo2 アルゴリズムのAprilTag 標準 %1 を設定",
        "SENGO2_VISION_LINE_MAX": "Sengo2 アルゴリズムのライン 最大本数（1-5） %1 を設定",
        "SENGO2_VISION_OPERA_PARAM": "Sengo2 アルゴリズム %1 %2 ID %3 を設定",
        "SENGO2_VISION_GET_RESULT": "Sengo2 アルゴリズム %1 結果数",
        "SENGO2_VISION_COLOR_VALUE": "Sengo2 アルゴリズムの色 %1 が結果 %2 に含まれます",
        "SENGO2_VISION_GET_VALUE": "Sengo2 アルゴリズム %1 結果 %2 の %3 を取得",
        "SENGO2_VISION_LINE_VALUE": "Sengo2 アルゴリズムのライン %1 が結果 %2 に含まれます",
        "SENGO2_VISION_QRCODE_VALUE": "Sengo2 アルゴリズムのQrCode %1 が結果 %2 に含まれます",
        "SENGO2_VISION_QRCODE_STRING": "Sengo2 アルゴリズムのQrCode デコード結果の文字列",
        "SENGO2_VISION_CUSTOM_VALUE": "Sengo2 アルゴリズムのカスタム %1 が結果 %2 に含まれます",
        "SENGO2_VISION_COLOR_LABEL": "Sengo2 アルゴリズムの色 %1 を認識しました 結果 %2",
        "SENGO2_VISION_BLOB_LABEL": "Sengo2 アルゴリズムのブロブ %1 を検出しました 結果 %2",
        "SENGO2_VISION_CARD_LABEL": "Sengo2 アルゴリズムのカード %1 を認識しました 結果 %2",
        "SENGO2_VISION_CLASS20_LABEL": "Sengo2 アルゴリズムの20クラス %1 を認識しました 結果 %2",
        
        // 状態
        "SENGO2_ENABLE": "実行する",
        "SENGO2_DISABLE": "停止する",
        
        // ホワイトバランスモード
        "SENGO2_AWB_AUTO": "自動",
        "SENGO2_AWB_LOCK": "ロック",
        "SENGO2_AWB_WHITE_LIGHT": "白色光",
        "SENGO2_AWB_YELLOW_LIGHT": "黄色光",
        "SENGO2_AWB_CALIBRATE": "ホワイトバランスをキャリブレーション中",
        
        // 色
        "SENGO2_COLOR_BLACK": "黒",
        "SENGO2_COLOR_WHITE": "白",
        "SENGO2_COLOR_RED": "赤",
        "SENGO2_COLOR_GREEN": "緑",
        "SENGO2_COLOR_BLUE": "青",
        "SENGO2_COLOR_YELLOW": "黄色",
        
        // LEDの色
        "SENGO2_LED_CLOSE": "黒",
        "SENGO2_LED_RED": "赤",
        "SENGO2_LED_GREEN": "緑",
        "SENGO2_LED_YELLOW": "黄色",
        "SENGO2_LED_BLUE": "青",
        "SENGO2_LED_PURPLE": "紫",
        "SENGO2_LED_CYAN": "シアン",
        "SENGO2_LED_WHITE": "白",
        
        // アルゴリズムパラメータ操作
        "SENGO2_OPERA_SAVE": "データを保存",
        "SENGO2_OPERA_DELETE": "データを削除",
        
        // カスタムデータ
        "SENGO2_CUSTOM_VALUE1": "値1",
        "SENGO2_CUSTOM_VALUE2": "値2",
        "SENGO2_CUSTOM_VALUE3": "値3",
        "SENGO2_CUSTOM_VALUE4": "値4",
        "SENGO2_CUSTOM_VALUE5": "値5",
        
        // カードラベル
        "SENGO2_CARD_FORWARD": "前進",
        "SENGO2_CARD_LEFT": "左",
        "SENGO2_CARD_RIGHT": "右",
        "SENGO2_CARD_TURN_AROUND": "回転する",
        "SENGO2_CARD_PARK": "駐車する",
        "SENGO2_CARD_GREEN_LIGHT": "青信号",
        "SENGO2_CARD_RED_LIGHT": "赤信号",
        "SENGO2_CARD_SPEED40": "速度 40",
        "SENGO2_CARD_SPEED60": "速度 60",
        "SENGO2_CARD_SPEED80": "速度 80",
        
        // 20クラスの物体
        "SENGO2_CLASS20_AIRPLANE": "飛行機",
        "SENGO2_CLASS20_BICYCLE": "自転車",
        "SENGO2_CLASS20_BIRD": "鳥",
        "SENGO2_CLASS20_BOAT": "船",
        "SENGO2_CLASS20_BOTTLE": "ボトル",
        "SENGO2_CLASS20_BUS": "バス",
        "SENGO2_CLASS20_CAR": "車",
        "SENGO2_CLASS20_CAT": "猫",
        "SENGO2_CLASS20_CHAIR": "椅子",
        "SENGO2_CLASS20_COW": "牛",
        "SENGO2_CLASS20_TABLE": "ダイニングテーブル",
        "SENGO2_CLASS20_DOG": "犬",
        "SENGO2_CLASS20_HORSE": "馬",
        "SENGO2_CLASS20_MOTORBIKE": "オートバイ",
        "SENGO2_CLASS20_PERSON": "人",
        "SENGO2_CLASS20_PLANT": "鉢植え",
        "SENGO2_CLASS20_SHEEP": "羊",
        "SENGO2_CLASS20_SOFA": "ソファ",
        "SENGO2_CLASS20_TRAIN": "電車",
        "SENGO2_CLASS20_MONITOR": "テレビモニター",
        
        // ビジョンアルゴリズムの種類
        "SENGO2_VISION_VISIONCOLOR": "色",
        "SENGO2_VISION_VISIONBLOB": "ブロブ",
        "SENGO2_VISION_VISIONAPRILTAG": "AprilTag",
        "SENGO2_VISION_VISIONLINE": "ライン",
        "SENGO2_VISION_VISIONLEARNING": "学習",
        "SENGO2_VISION_VISIONCARD": "カード",
        "SENGO2_VISION_VISIONFACE": "顔",
        "SENGO2_VISION_VISION20CLASSES": "20クラス",
        "SENGO2_VISION_VISIONQRCODE": "QrCode",
        "SENGO2_VISION_VISIONMOTIONDETECT": "動き",
        "SENGO2_VISION_VISIONCUSTOM": "カスタム",
        
        // ステータス値
        "SENGO2_STATE_VALUE_X": "x座標",
        "SENGO2_STATE_VALUE_Y": "y座標",
        "SENGO2_STATE_VALUE_WIDTH": "幅",
        "SENGO2_STATE_VALUE_HEIGHT": "高さ",
        "SENGO2_STATE_VALUE_LABEL": "ラベル",
        "SENGO2_STATE_VALUE_R": "赤のCH値",
        "SENGO2_STATE_VALUE_G": "緑のCH値",
        "SENGO2_STATE_VALUE_B": "青のCH値",
        
        // ライン検出値
        "SENGO2_STATE_LINE_EX": "終了点のx座標",
        "SENGO2_STATE_LINE_EY": "終了点のy座標",
        "SENGO2_STATE_LINE_SX": "開始点のx座標",
        "SENGO2_STATE_LINE_SY": "開始点のy座標",
        "SENGO2_STATE_LINE_A": "傾斜角",
        
        // ビジュアルデータ
        "SENGO2_VISION_DATA": "値"
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        "SENGO2_CATEGORY": "Sengo2 비전 센서",
        "SENGO2_SETUP": "설정 모듈",
        "SENGO2_RUN": "모듈 실행하기",
        "SENGO2_BEGIN": "Sengo2 포트 초기화 %1 주소 %2",
        "SENGO2_SET_DEFAULT": "Sengo2를 기본 설정으로 재설정",
        "SENGO2_CAMERA_SET_AWB": "Sengo2 화이트 밸런스 모드 설정 %1",
        "SENGO2_LED_SET_COLOR": "Sengo2 LED 색상 설정 %1 (타겟이 감지되었을 때), 그렇지 않으면 %2 밝기 (1-15) %3",
        "SENGO2_VISION_SET": "Sengo2 %1 알고리즘 설정 %2",
        "SENGO2_VISION_SET_PARAM_NUM": "Sengo2 알고리즘 %1 %2 파라미터 세트 설정",
        "SENGO2_VISION_COLOR_PARAM": "Sengo2 알고리즘 색상 x좌표 %1 y좌표 %2 너비 %3 높이 %4 파라미터 세트 %5 설정",
        "SENGO2_VISION_BLOB_PARAM": "Sengo2 알고리즘 Blob 최소 너비 %1 최소 높이 %2 색상 %3 파라미터 세트 %4 설정",
        "SENGO2_VISION_GENERAL_PARAM": "Sengo2 %1 파라미터1 %2 파라미터2 %3 파라미터3 %4 파라미터4 %5 파라미터5 %6 파라미터 세트 %7 설정",
        "SENGO2_VISION_BLOB_MAX": "Sengo2 알고리즘 Blob 각 색상의 최대 블롭 수(1-5) %1 설정",
        "SENGO2_VISION_APRILTAG_MODE": "Sengo2 알고리즘 AprilTag 표준 %1 설정",
        "SENGO2_VISION_LINE_MAX": "Sengo2 알고리즘 선 최대 수(1-5) %1 설정",
        "SENGO2_VISION_OPERA_PARAM": "Sengo2 알고리즘 %1 %2 ID %3 설정",
        "SENGO2_VISION_GET_RESULT": "Sengo2 알고리즘 %1 결과 수",
        "SENGO2_VISION_COLOR_VALUE": "Sengo2 알고리즘 색상 %1 결과 %2",
        "SENGO2_VISION_GET_VALUE": "Sengo2 알고리즘 %1 %2 결과 %3",
        "SENGO2_VISION_LINE_VALUE": "Sengo2 알고리즘 선 %1 결과 %2",
        "SENGO2_VISION_QRCODE_VALUE": "Sengo2 알고리즘 QrCode %1 결과 %2",
        "SENGO2_VISION_QRCODE_STRING": "Sengo2 알고리즘 QrCode 디코딩 결과 문자열",
        "SENGO2_VISION_CUSTOM_VALUE": "Sengo2 알고리즘 사용자 정의 %1 결과 %2",
        "SENGO2_VISION_COLOR_LABEL": "Sengo2 알고리즘 색상 인식 %1 결과 %2",
        "SENGO2_VISION_BLOB_LABEL": "Sengo2 알고리즘 블롭 감지 %1 블롭 결과 %2",
        "SENGO2_VISION_CARD_LABEL": "Sengo2 알고리즘 카드 인식 %1 결과 %2",
        "SENGO2_VISION_CLASS20_LABEL": "Sengo2 알고리즘 20클래스 인식 %1 결과 %2",
        
        // 상태
        "SENGO2_ENABLE": "실행",
        "SENGO2_DISABLE": "중지",
        
        // 화이트 밸런스 모드
        "SENGO2_AWB_AUTO": "자동",
        "SENGO2_AWB_LOCK": "잠금",
        "SENGO2_AWB_WHITE_LIGHT": "백색광",
        "SENGO2_AWB_YELLOW_LIGHT": "황색광",
        "SENGO2_AWB_CALIBRATE": "화이트 밸런스 보정 중",
        
        // 색상
        "SENGO2_COLOR_BLACK": "검정",
        "SENGO2_COLOR_WHITE": "흰색",
        "SENGO2_COLOR_RED": "빨강",
        "SENGO2_COLOR_GREEN": "초록",
        "SENGO2_COLOR_BLUE": "파랑",
        "SENGO2_COLOR_YELLOW": "노랑",
        
        // LED 색상
        "SENGO2_LED_CLOSE": "검정",
        "SENGO2_LED_RED": "빨강",
        "SENGO2_LED_GREEN": "초록",
        "SENGO2_LED_YELLOW": "노랑",
        "SENGO2_LED_BLUE": "파랑",
        "SENGO2_LED_PURPLE": "보라",
        "SENGO2_LED_CYAN": "청록",
        "SENGO2_LED_WHITE": "흰색",
        
        // 알고리즘 파라미터 조작
        "SENGO2_OPERA_SAVE": "데이터 저장으로",
        "SENGO2_OPERA_DELETE": "데이터 삭제",
        
        // 사용자 정의 데이터
        "SENGO2_CUSTOM_VALUE1": "값1",
        "SENGO2_CUSTOM_VALUE2": "값2",
        "SENGO2_CUSTOM_VALUE3": "값3",
        "SENGO2_CUSTOM_VALUE4": "값4",
        "SENGO2_CUSTOM_VALUE5": "값5",
        
        // 카드 라벨
        "SENGO2_CARD_FORWARD": "앞으로",
        "SENGO2_CARD_LEFT": "왼쪽",
        "SENGO2_CARD_RIGHT": "오른쪽",
        "SENGO2_CARD_TURN_AROUND": "회전",
        "SENGO2_CARD_PARK": "주차",
        "SENGO2_CARD_GREEN_LIGHT": "녹색 신호",
        "SENGO2_CARD_RED_LIGHT": "적색 신호",
        "SENGO2_CARD_SPEED40": "속도 40",
        "SENGO2_CARD_SPEED60": "속도 60",
        "SENGO2_CARD_SPEED80": "속도 80",
        
        // 20개 클래스의 물체
        "SENGO2_CLASS20_AIRPLANE": "비행기",
        "SENGO2_CLASS20_BICYCLE": "자전거",
        "SENGO2_CLASS20_BIRD": "새",
        "SENGO2_CLASS20_BOAT": "배",
        "SENGO2_CLASS20_BOTTLE": "병",
        "SENGO2_CLASS20_BUS": "버스",
        "SENGO2_CLASS20_CAR": "자동차",
        "SENGO2_CLASS20_CAT": "고양이",
        "SENGO2_CLASS20_CHAIR": "의자",
        "SENGO2_CLASS20_COW": "소",
        "SENGO2_CLASS20_TABLE": "식탁",
        "SENGO2_CLASS20_DOG": "개",
        "SENGO2_CLASS20_HORSE": "말",
        "SENGO2_CLASS20_MOTORBIKE": "오토바이",
        "SENGO2_CLASS20_PERSON": "사람",
        "SENGO2_CLASS20_PLANT": "화분 식물",
        "SENGO2_CLASS20_SHEEP": "양",
        "SENGO2_CLASS20_SOFA": "소파",
        "SENGO2_CLASS20_TRAIN": "기차",
        "SENGO2_CLASS20_MONITOR": "TV 모니터",
        
        // 비전 알고리즘 유형
        "SENGO2_VISION_VISIONCOLOR": "색상",
        "SENGO2_VISION_VISIONBLOB": "블롭",
        "SENGO2_VISION_VISIONAPRILTAG": "AprilTag",
        "SENGO2_VISION_VISIONLINE": "라인",
        "SENGO2_VISION_VISIONLEARNING": "학습",
        "SENGO2_VISION_VISIONCARD": "카드",
        "SENGO2_VISION_VISIONFACE": "얼굴",
        "SENGO2_VISION_VISION20CLASSES": "20클래스",
        "SENGO2_VISION_VISIONQRCODE": "QrCode",
        "SENGO2_VISION_VISIONMOTIONDETECT": "움직임",
        "SENGO2_VISION_VISIONCUSTOM": "사용자 정의",
        
        // 상태 값
        "SENGO2_STATE_VALUE_X": "x좌표",
        "SENGO2_STATE_VALUE_Y": "y좌표",
        "SENGO2_STATE_VALUE_WIDTH": "너비",
        "SENGO2_STATE_VALUE_HEIGHT": "높이",
        "SENGO2_STATE_VALUE_LABEL": "라벨",
        "SENGO2_STATE_VALUE_R": "빨강 CH 값",
        "SENGO2_STATE_VALUE_G": "초록 CH 값",
        "SENGO2_STATE_VALUE_B": "파랑 CH 값",
        
        // 선 탐지 값
        "SENGO2_STATE_LINE_EX": "종료점의 x좌표",
        "SENGO2_STATE_LINE_EY": "종료점의 y좌표",
        "SENGO2_STATE_LINE_SX": "시작점의 x좌표",
        "SENGO2_STATE_LINE_SY": "시작점의 y좌표",
        "SENGO2_STATE_LINE_A": "기울기 각도",
        
        // 비주얼 데이터
        "SENGO2_VISION_DATA": "값"
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        "SENGO2_CATEGORY": "Czujnik Wizji Sengo2",
        "SENGO2_SETUP": "Moduł Ustawień",
        "SENGO2_RUN": "Uruchom Moduł",
        "SENGO2_BEGIN": "Inicjalizuj port Sengo2 %1 adres %2",
        "SENGO2_SET_DEFAULT": "Przywróć Sengo2 do ustawień fabrycznych",
        "SENGO2_CAMERA_SET_AWB": "Ustaw tryb balansu bieli Sengo2 %1",
        "SENGO2_LED_SET_COLOR": "Ustaw kolor LED w Sengo2 %1, gdy wykryto cele, w przeciwnym razie %2 jasność (1-15) %3",
        "SENGO2_VISION_SET": "Ustaw Sengo2 %1 algorytm %2",
        "SENGO2_VISION_SET_PARAM_NUM": "Ustaw Sengo2 algorytm %1 %2 zestawy parametrów",
        "SENGO2_VISION_COLOR_PARAM": "Ustaw Sengo2 algorytm Kolor współrzędna-x %1 współrzędna-y %2 szerokość %3 wysokość %4 zestaw parametrów %5",
        "SENGO2_VISION_BLOB_PARAM": "Ustaw Sengo2 algorytm Blob minimalna szerokość %1 minimalna wysokość %2 kolor %3 zestaw parametrów %4",
        "SENGO2_VISION_GENERAL_PARAM": "Ustaw Sengo2 %1 parametr1 %2 parametr2 %3 parametr3 %4 parametr4 %5 parametr5 %6 zestaw parametrów %7",
        "SENGO2_VISION_BLOB_MAX": "Ustaw Sengo2 algorytm Blob maksymalna liczba blobów dla każdego koloru (1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "Ustaw Sengo2 algorytm AprilTag standard %1",
        "SENGO2_VISION_LINE_MAX": "Ustaw Sengo2 algorytm Linia maksymalna liczba linii (1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "Ustaw Sengo2 algorytm %1 %2 ID %3",
        "SENGO2_VISION_GET_RESULT": "Sengo2 algorytm %1 liczba wyników",
        "SENGO2_VISION_COLOR_VALUE": "Sengo2 algorytm Kolor %1 wyniku %2",
        "SENGO2_VISION_GET_VALUE": "Sengo2 algorytm %1 %2 wyniku %3",
        "SENGO2_VISION_LINE_VALUE": "Sengo2 algorytm Linia %1 wyniku %2",
        "SENGO2_VISION_QRCODE_VALUE": "Sengo2 algorytm QrCode %1 wyniku %2",
        "SENGO2_VISION_QRCODE_STRING": "Sengo2 algorytm QrCode ciąg wyniku dekodowania",
        "SENGO2_VISION_CUSTOM_VALUE": "Sengo2 algorytm Niestandardowy %1 wyniku %2",
        "SENGO2_VISION_COLOR_LABEL": "Sengo2 algorytm Kolor rozpoznany %1 wynik %2",
        "SENGO2_VISION_BLOB_LABEL": "Sengo2 algorytm Blob wykryty %1 blob wynik %2",
        "SENGO2_VISION_CARD_LABEL": "Sengo2 algorytm Karta rozpoznana %1 wynik %2",
        "SENGO2_VISION_CLASS20_LABEL": "Sengo2 algorytm 20Klasa rozpoznana %1 wynik %2",
        
        // Stan
        "SENGO2_ENABLE": "uruchomić",
        "SENGO2_DISABLE": "zatrzymać",
        
        // Tryb balansu bieli
        "SENGO2_AWB_AUTO": "Automatyczne",
        "SENGO2_AWB_LOCK": "Zablokować",
        "SENGO2_AWB_WHITE_LIGHT": "Białe światło",
        "SENGO2_AWB_YELLOW_LIGHT": "Żółte światło",
        "SENGO2_AWB_CALIBRATE": "Kalibracja balansu bieli",
        
        // Kolory
        "SENGO2_COLOR_BLACK": "Czarny",
        "SENGO2_COLOR_WHITE": "Biały",
        "SENGO2_COLOR_RED": "Czerwony",
        "SENGO2_COLOR_GREEN": "Zielony",
        "SENGO2_COLOR_BLUE": "Niebieski",
        "SENGO2_COLOR_YELLOW": "Żółty",
        
        // Kolory LED
        "SENGO2_LED_CLOSE": "Czarny",
        "SENGO2_LED_RED": "Czerwony",
        "SENGO2_LED_GREEN": "Zielony",
        "SENGO2_LED_YELLOW": "Żółty",
        "SENGO2_LED_BLUE": "Niebieski",
        "SENGO2_LED_PURPLE": "Fioletowy",
        "SENGO2_LED_CYAN": "Cyan",
        "SENGO2_LED_WHITE": "Biały",
        
        // Operacje parametrów algorytmu
        "SENGO2_OPERA_SAVE": "zapisz dane jako",
        "SENGO2_OPERA_DELETE": "usuń dane",
        
        // Dane niestandardowe
        "SENGO2_CUSTOM_VALUE1": "Wartość1",
        "SENGO2_CUSTOM_VALUE2": "Wartość2",
        "SENGO2_CUSTOM_VALUE3": "Wartość3",
        "SENGO2_CUSTOM_VALUE4": "Wartość4",
        "SENGO2_CUSTOM_VALUE5": "Wartość5",
        
        // Etykiety kart
        "SENGO2_CARD_FORWARD": "Do przodu",
        "SENGO2_CARD_LEFT": "W lewo",
        "SENGO2_CARD_RIGHT": "W prawo",
        "SENGO2_CARD_TURN_AROUND": "Zawrót",
        "SENGO2_CARD_PARK": "Parkować",
        "SENGO2_CARD_GREEN_LIGHT": "Zielone światło",
        "SENGO2_CARD_RED_LIGHT": "Czerwone światło",
        "SENGO2_CARD_SPEED40": "Prędkość 40",
        "SENGO2_CARD_SPEED60": "Prędkość 60",
        "SENGO2_CARD_SPEED80": "Prędkość 80",
        
        // 20 klas obiektów
        "SENGO2_CLASS20_AIRPLANE": "Samolot",
        "SENGO2_CLASS20_BICYCLE": "Rower",
        "SENGO2_CLASS20_BIRD": "Ptak",
        "SENGO2_CLASS20_BOAT": "Łódź",
        "SENGO2_CLASS20_BOTTLE": "Butelka",
        "SENGO2_CLASS20_BUS": "Autobus",
        "SENGO2_CLASS20_CAR": "Samochód",
        "SENGO2_CLASS20_CAT": "Kot",
        "SENGO2_CLASS20_CHAIR": "Krzesło",
        "SENGO2_CLASS20_COW": "Krowa",
        "SENGO2_CLASS20_TABLE": "Stół jadalny",
        "SENGO2_CLASS20_DOG": "Pies",
        "SENGO2_CLASS20_HORSE": "Koń",
        "SENGO2_CLASS20_MOTORBIKE": "Motocykl",
        "SENGO2_CLASS20_PERSON": "Osoba",
        "SENGO2_CLASS20_PLANT": "Roślina doniczkowa",
        "SENGO2_CLASS20_SHEEP": "Owca",
        "SENGO2_CLASS20_SOFA": "Sofa",
        "SENGO2_CLASS20_TRAIN": "Pociąg",
        "SENGO2_CLASS20_MONITOR": "Telewizor",
        
        // Typy algorytmów wizji
        "SENGO2_VISION_VISIONCOLOR": "Kolor",
        "SENGO2_VISION_VISIONBLOB": "Blob",
        "SENGO2_VISION_VISIONAPRILTAG": "AprilTag",
        "SENGO2_VISION_VISIONLINE": "Linia",
        "SENGO2_VISION_VISIONLEARNING": "Uczenie się",
        "SENGO2_VISION_VISIONCARD": "Karta",
        "SENGO2_VISION_VISIONFACE": "Twarz",
        "SENGO2_VISION_VISION20CLASSES": "20Klas",
        "SENGO2_VISION_VISIONQRCODE": "QrCode",
        "SENGO2_VISION_VISIONMOTIONDETECT": "Ruch",
        "SENGO2_VISION_VISIONCUSTOM": "Niestandardowy",
        
        // Wartości stanu
        "SENGO2_STATE_VALUE_X": "współrzędna-x",
        "SENGO2_STATE_VALUE_Y": "współrzędna-y",
        "SENGO2_STATE_VALUE_WIDTH": "szerokość",
        "SENGO2_STATE_VALUE_HEIGHT": "wysokość",
        "SENGO2_STATE_VALUE_LABEL": "etykieta",
        "SENGO2_STATE_VALUE_R": "wartość CH czerwony",
        "SENGO2_STATE_VALUE_G": "wartość CH zielony",
        "SENGO2_STATE_VALUE_B": "wartość CH niebieski",
        
        // Wartości wykrywania linii
        "SENGO2_STATE_LINE_EX": "współrzędna-x końcowego punktu",
        "SENGO2_STATE_LINE_EY": "współrzędna-y końcowego punktu",
        "SENGO2_STATE_LINE_SX": "współrzędna-x początkowego punktu",
        "SENGO2_STATE_LINE_SY": "współrzędna-y początkowego punktu",
        "SENGO2_STATE_LINE_A": "kąt nachylenia",
        
        // Dane wizualne
        "SENGO2_VISION_DATA": "Wartość"
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        "SENGO2_CATEGORY": "Sensor de Visão Sengo2",
        "SENGO2_SETUP": "Módulo de Configuração",
        "SENGO2_RUN": "Executar Módulo",
        "SENGO2_BEGIN": "Inicializar porta Sengo2 %1 endereço %2",
        "SENGO2_SET_DEFAULT": "Restaurar Sengo2 para as configurações padrão",
        "SENGO2_CAMERA_SET_AWB": "Definir modo de balanço de brancos Sengo2 %1",
        "SENGO2_LED_SET_COLOR": "Definir a cor do LED Sengo2 %1 quando os alvos forem detectados, caso contrário %2 luminância (1-15) %3",
        "SENGO2_VISION_SET": "Definir Sengo2 %1 algoritmo %2",
        "SENGO2_VISION_SET_PARAM_NUM": "Definir Sengo2 algoritmo %1 %2 conjuntos de parâmetros",
        "SENGO2_VISION_COLOR_PARAM": "Definir Sengo2 algoritmo Cor coordenada-x %1 coordenada-y %2 largura %3 altura %4 conjunto de parâmetros %5",
        "SENGO2_VISION_BLOB_PARAM": "Definir Sengo2 algoritmo Blob largura mínima %1 altura mínima %2 cor %3 conjunto de parâmetros %4",
        "SENGO2_VISION_GENERAL_PARAM": "Definir Sengo2 %1 parâmetro1 %2 parâmetro2 %3 parâmetro3 %4 parâmetro4 %5 parâmetro5 %6 conjunto de parâmetros %7",
        "SENGO2_VISION_BLOB_MAX": "Definir Sengo2 algoritmo Blob número máximo de blobs para cada cor (1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "Definir Sengo2 algoritmo AprilTag padrão %1",
        "SENGO2_VISION_LINE_MAX": "Definir Sengo2 algoritmo Linha número máximo de linhas (1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "Definir Sengo2 algoritmo %1 %2 ID %3",
        "SENGO2_VISION_GET_RESULT": "Sengo2 algoritmo %1 número de resultados",
        "SENGO2_VISION_COLOR_VALUE": "Sengo2 algoritmo Cor %1 do resultado %2",
        "SENGO2_VISION_GET_VALUE": "Sengo2 algoritmo %1 %2 do resultado %3",
        "SENGO2_VISION_LINE_VALUE": "Sengo2 algoritmo Linha %1 do resultado %2",
        "SENGO2_VISION_QRCODE_VALUE": "Sengo2 algoritmo QrCode %1 do resultado %2",
        "SENGO2_VISION_QRCODE_STRING": "Sengo2 algoritmo QrCode string do resultado da decodificação",
        "SENGO2_VISION_CUSTOM_VALUE": "Sengo2 algoritmo Personalizado %1 do resultado %2",
        "SENGO2_VISION_COLOR_LABEL": "Sengo2 algoritmo Cor reconhecida %1 resultado %2",
        "SENGO2_VISION_BLOB_LABEL": "Sengo2 algoritmo Blob detectado %1 blob resultado %2",
        "SENGO2_VISION_CARD_LABEL": "Sengo2 algoritmo Cartão reconhecido %1 resultado %2",
        "SENGO2_VISION_CLASS20_LABEL": "Sengo2 algoritmo 20Classe reconhecido %1 resultado %2",
        
        // Estado
        "SENGO2_ENABLE": "executar",
        "SENGO2_DISABLE": "parar",
        
        // Modo de balanço de brancos
        "SENGO2_AWB_AUTO": "Automático",
        "SENGO2_AWB_LOCK": "Bloquear",
        "SENGO2_AWB_WHITE_LIGHT": "Luz Branca",
        "SENGO2_AWB_YELLOW_LIGHT": "Luz Amarela",
        "SENGO2_AWB_CALIBRATE": "Calibrando o Balanço de Brancos",
        
        // Cores
        "SENGO2_COLOR_BLACK": "Preto",
        "SENGO2_COLOR_WHITE": "Branco",
        "SENGO2_COLOR_RED": "Vermelho",
        "SENGO2_COLOR_GREEN": "Verde",
        "SENGO2_COLOR_BLUE": "Azul",
        "SENGO2_COLOR_YELLOW": "Amarelo",
        
        // Cores do LED
        "SENGO2_LED_CLOSE": "Preto",
        "SENGO2_LED_RED": "Vermelho",
        "SENGO2_LED_GREEN": "Verde",
        "SENGO2_LED_YELLOW": "Amarelo",
        "SENGO2_LED_BLUE": "Azul",
        "SENGO2_LED_PURPLE": "Roxo",
        "SENGO2_LED_CYAN": "Ciano",
        "SENGO2_LED_WHITE": "Branco",
        
        // Operações de parâmetros do algoritmo
        "SENGO2_OPERA_SAVE": "salvar dados como",
        "SENGO2_OPERA_DELETE": "deletar dados",
        
        // Dados personalizados
        "SENGO2_CUSTOM_VALUE1": "Valor1",
        "SENGO2_CUSTOM_VALUE2": "Valor2",
        "SENGO2_CUSTOM_VALUE3": "Valor3",
        "SENGO2_CUSTOM_VALUE4": "Valor4",
        "SENGO2_CUSTOM_VALUE5": "Valor5",
        
        // Etiquetas de cartões
        "SENGO2_CARD_FORWARD": "Frente",
        "SENGO2_CARD_LEFT": "Esquerda",
        "SENGO2_CARD_RIGHT": "Direita",
        "SENGO2_CARD_TURN_AROUND": "Virar",
        "SENGO2_CARD_PARK": "Estacionar",
        "SENGO2_CARD_GREEN_LIGHT": "Luz Verde",
        "SENGO2_CARD_RED_LIGHT": "Luz Vermelha",
        "SENGO2_CARD_SPEED40": "Velocidade 40",
        "SENGO2_CARD_SPEED60": "Velocidade 60",
        "SENGO2_CARD_SPEED80": "Velocidade 80",
        
        // 20 Classes de Objetos
        "SENGO2_CLASS20_AIRPLANE": "Avião",
        "SENGO2_CLASS20_BICYCLE": "Bicicleta",
        "SENGO2_CLASS20_BIRD": "Pássaro",
        "SENGO2_CLASS20_BOAT": "Barco",
        "SENGO2_CLASS20_BOTTLE": "Garrafa",
        "SENGO2_CLASS20_BUS": "Ônibus",
        "SENGO2_CLASS20_CAR": "Carro",
        "SENGO2_CLASS20_CAT": "Gato",
        "SENGO2_CLASS20_CHAIR": "Cadeira",
        "SENGO2_CLASS20_COW": "Vaca",
        "SENGO2_CLASS20_TABLE": "Mesa de Jantar",
        "SENGO2_CLASS20_DOG": "Cão",
        "SENGO2_CLASS20_HORSE": "Cavalo",
        "SENGO2_CLASS20_MOTORBIKE": "Motocicleta",
        "SENGO2_CLASS20_PERSON": "Pessoa",
        "SENGO2_CLASS20_PLANT": "Planta em Vaso",
        "SENGO2_CLASS20_SHEEP": "Ovelha",
        "SENGO2_CLASS20_SOFA": "Sofá",
        "SENGO2_CLASS20_TRAIN": "Trem",
        "SENGO2_CLASS20_MONITOR": "Televisor",
        
        // Tipos de Algoritmos de Visão
        "SENGO2_VISION_VISIONCOLOR": "Cor",
        "SENGO2_VISION_VISIONBLOB": "Blob",
        "SENGO2_VISION_VISIONAPRILTAG": "AprilTag",
        "SENGO2_VISION_VISIONLINE": "Linha",
        "SENGO2_VISION_VISIONLEARNING": "Aprendizagem",
        "SENGO2_VISION_VISIONCARD": "Cartão",
        "SENGO2_VISION_VISIONFACE": "Face",
        "SENGO2_VISION_VISION20CLASSES": "20Classes",
        "SENGO2_VISION_VISIONQRCODE": "QrCode",
        "SENGO2_VISION_VISIONMOTIONDETECT": "Movimento",
        "SENGO2_VISION_VISIONCUSTOM": "Personalizado",
        
        // Valores de Estado
        "SENGO2_STATE_VALUE_X": "coordenada-x",
        "SENGO2_STATE_VALUE_Y": "coordenada-y",
        "SENGO2_STATE_VALUE_WIDTH": "largura",
        "SENGO2_STATE_VALUE_HEIGHT": "altura",
        "SENGO2_STATE_VALUE_LABEL": "rótulo",
        "SENGO2_STATE_VALUE_R": "valor CH vermelho",
        "SENGO2_STATE_VALUE_G": "valor CH verde",
        "SENGO2_STATE_VALUE_B": "valor CH azul",
        
        // Valores de Detecção de Linhas
        "SENGO2_STATE_LINE_EX": "coordenada-x do ponto final",
        "SENGO2_STATE_LINE_EY": "coordenada-y do ponto final",
        "SENGO2_STATE_LINE_SX": "coordenada-x do ponto de partida",
        "SENGO2_STATE_LINE_SY": "coordenada-y do ponto de partida",
        "SENGO2_STATE_LINE_A": "ângulo de inclinação",
        
        // Dados Visuais
        "SENGO2_VISION_DATA": "Valor"
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        "SENGO2_CATEGORY": "Датчик зрения Sengo2",
        "SENGO2_SETUP": "Модуль настройки",
        "SENGO2_RUN": "Запустить модуль",
        "SENGO2_BEGIN": "Инициализировать порт Sengo2 %1 адрес %2",
        "SENGO2_SET_DEFAULT": "Сбросить Sengo2 к заводским настройкам",
        "SENGO2_CAMERA_SET_AWB": "Установить режим баланса белого Sengo2 %1",
        "SENGO2_LED_SET_COLOR": "Установить цвет светодиодов Sengo2 %1 при обнаружении объектов, в противном случае %2 яркость (1-15) %3",
        "SENGO2_VISION_SET": "Установить Sengo2 %1 алгоритм %2",
        "SENGO2_VISION_SET_PARAM_NUM": "Установить Sengo2 алгоритм %1 %2 наборов параметров",
        "SENGO2_VISION_COLOR_PARAM": "Установить Sengo2 алгоритм Цвет x-координата %1 y-координата %2 ширина %3 высота %4 набор параметров %5",
        "SENGO2_VISION_BLOB_PARAM": "Установить Sengo2 алгоритм Blob минимальная ширина %1 минимальная высота %2 цвет %3 набор параметров %4",
        "SENGO2_VISION_GENERAL_PARAM": "Установить Sengo2 %1 параметр1 %2 параметр2 %3 параметр3 %4 параметр4 %5 параметр5 %6 набор параметров %7",
        "SENGO2_VISION_BLOB_MAX": "Установить Sengo2 алгоритм Blob максимальное количество блобов для каждого цвета (1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "Установить Sengo2 алгоритм AprilTag стандарт %1",
        "SENGO2_VISION_LINE_MAX": "Установить Sengo2 алгоритм Линия максимальное количество линий (1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "Установить Sengo2 алгоритм %1 %2 ID %3",
        "SENGO2_VISION_GET_RESULT": "Sengo2 алгоритм %1 количество результатов",
        "SENGO2_VISION_COLOR_VALUE": "Sengo2 алгоритм Цвет %1 результата %2",
        "SENGO2_VISION_GET_VALUE": "Sengo2 алгоритм %1 %2 результата %3",
        "SENGO2_VISION_LINE_VALUE": "Sengo2 алгоритм Линия %1 результата %2",
        "SENGO2_VISION_QRCODE_VALUE": "Sengo2 алгоритм QrCode %1 результата %2",
        "SENGO2_VISION_QRCODE_STRING": "Sengo2 алгоритм QrCode строка результата декодирования",
        "SENGO2_VISION_CUSTOM_VALUE": "Sengo2 алгоритм Пользовательский %1 результата %2",
        "SENGO2_VISION_COLOR_LABEL": "Sengo2 алгоритм Цвет распознан %1 результат %2",
        "SENGO2_VISION_BLOB_LABEL": "Sengo2 алгоритм Blob обнаружен %1 блоб результат %2",
        "SENGO2_VISION_CARD_LABEL": "Sengo2 алгоритм Карта распознана %1 результат %2",
        "SENGO2_VISION_CLASS20_LABEL": "Sengo2 алгоритм 20Класса распознан %1 результат %2",
        
        // Статус
        "SENGO2_ENABLE": "включить",
        "SENGO2_DISABLE": "остановить",
        
        // Режим баланса белого
        "SENGO2_AWB_AUTO": "Авто",
        "SENGO2_AWB_LOCK": "Блокировка",
        "SENGO2_AWB_WHITE_LIGHT": "Белый свет",
        "SENGO2_AWB_YELLOW_LIGHT": "Желтый свет",
        "SENGO2_AWB_CALIBRATE": "Калибровка баланса белого",
        
        // Цвета
        "SENGO2_COLOR_BLACK": "Черный",
        "SENGO2_COLOR_WHITE": "Белый",
        "SENGO2_COLOR_RED": "Красный",
        "SENGO2_COLOR_GREEN": "Зеленый",
        "SENGO2_COLOR_BLUE": "Синий",
        "SENGO2_COLOR_YELLOW": "Желтый",
        
        // Цвета светодиодов
        "SENGO2_LED_CLOSE": "Черный",
        "SENGO2_LED_RED": "Красный",
        "SENGO2_LED_GREEN": "Зеленый",
        "SENGO2_LED_YELLOW": "Желтый",
        "SENGO2_LED_BLUE": "Синий",
        "SENGO2_LED_PURPLE": "Фиолетовый",
        "SENGO2_LED_CYAN": "Циан",
        "SENGO2_LED_WHITE": "Белый",
        
        // Операции с параметрами алгоритма
        "SENGO2_OPERA_SAVE": "сохранить данные как",
        "SENGO2_OPERA_DELETE": "удалить данные",
        
        // Пользовательские данные
        "SENGO2_CUSTOM_VALUE1": "Значение1",
        "SENGO2_CUSTOM_VALUE2": "Значение2",
        "SENGO2_CUSTOM_VALUE3": "Значение3",
        "SENGO2_CUSTOM_VALUE4": "Значение4",
        "SENGO2_CUSTOM_VALUE5": "Значение5",
        
        // Этикетки карты
        "SENGO2_CARD_FORWARD": "Вперед",
        "SENGO2_CARD_LEFT": "Налево",
        "SENGO2_CARD_RIGHT": "Направо",
        "SENGO2_CARD_TURN_AROUND": "Развернуться",
        "SENGO2_CARD_PARK": "Парковка",
        "SENGO2_CARD_GREEN_LIGHT": "Зеленый свет",
        "SENGO2_CARD_RED_LIGHT": "Красный свет",
        "SENGO2_CARD_SPEED40": "Скорость 40",
        "SENGO2_CARD_SPEED60": "Скорость 60",
        "SENGO2_CARD_SPEED80": "Скорость 80",
        
        // 20 классов объектов
        "SENGO2_CLASS20_AIRPLANE": "Самолет",
        "SENGO2_CLASS20_BICYCLE": "Велосипед",
        "SENGO2_CLASS20_BIRD": "Птица",
        "SENGO2_CLASS20_BOAT": "Лодка",
        "SENGO2_CLASS20_BOTTLE": "Бутылка",
        "SENGO2_CLASS20_BUS": "Автобус",
        "SENGO2_CLASS20_CAR": "Автомобиль",
        "SENGO2_CLASS20_CAT": "Кот",
        "SENGO2_CLASS20_CHAIR": "Стул",
        "SENGO2_CLASS20_COW": "Корова",
        "SENGO2_CLASS20_TABLE": "Обеденный стол",
        "SENGO2_CLASS20_DOG": "Собака",
        "SENGO2_CLASS20_HORSE": "Лошадь",
        "SENGO2_CLASS20_MOTORBIKE": "Мотоцикл",
        "SENGO2_CLASS20_PERSON": "Человек",
        "SENGO2_CLASS20_PLANT": "Комнатное растение",
        "SENGO2_CLASS20_SHEEP": "Овца",
        "SENGO2_CLASS20_SOFA": "Диван",
        "SENGO2_CLASS20_TRAIN": "Поезд",
        "SENGO2_CLASS20_MONITOR": "Монитор",
        
        // Типы алгоритмов зрения
        "SENGO2_VISION_VISIONCOLOR": "Цвет",
        "SENGO2_VISION_VISIONBLOB": "Blob",
        "SENGO2_VISION_VISIONAPRILTAG": "AprilTag",
        "SENGO2_VISION_VISIONLINE": "Линия",
        "SENGO2_VISION_VISIONLEARNING": "Обучение",
        "SENGO2_VISION_VISIONCARD": "Карта",
        "SENGO2_VISION_VISIONFACE": "Лицо",
        "SENGO2_VISION_VISION20CLASSES": "20Классов",
        "SENGO2_VISION_VISIONQRCODE": "QrCode",
        "SENGO2_VISION_VISIONMOTIONDETECT": "Движение",
        "SENGO2_VISION_VISIONCUSTOM": "Пользовательский",
        
        // Значения состояния
        "SENGO2_STATE_VALUE_X": "x-координата",
        "SENGO2_STATE_VALUE_Y": "y-координата",
        "SENGO2_STATE_VALUE_WIDTH": "ширина",
        "SENGO2_STATE_VALUE_HEIGHT": "высота",
        "SENGO2_STATE_VALUE_LABEL": "метка",
        "SENGO2_STATE_VALUE_R": "значение CH красный",
        "SENGO2_STATE_VALUE_G": "значение CH зеленый",
        "SENGO2_STATE_VALUE_B": "значение CH синий",
        
        // Значения обнаружения линий
        "SENGO2_STATE_LINE_EX": "x-координата конечной точки",
        "SENGO2_STATE_LINE_EY": "y-координата конечной точки",
        "SENGO2_STATE_LINE_SX": "x-координата начальной точки",
        "SENGO2_STATE_LINE_SY": "y-координата начальной точки",
        "SENGO2_STATE_LINE_A": "угол наклона",
        
        // Визуальные данные
        "SENGO2_VISION_DATA": "Значение"
    });

    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        "SENGO2_CATEGORY": "Sengo2 視覺傳感器",
        "SENGO2_SETUP": "設置模塊",
        "SENGO2_RUN": "運行模塊",
        "SENGO2_BEGIN": "初始化  Sengo2  埠口 %1 地址 %2",
        "SENGO2_SET_DEFAULT": "恢復 Sengo2 默認參數",
        "SENGO2_CAMERA_SET_AWB": "設置 Sengo2 白平衡模式 %1",
        "SENGO2_LED_SET_COLOR": "設置  Sengo2  檢測到目標時LED顯示 %1 否則 %2 亮度(1~15) %3",
        "SENGO2_VISION_SET": "設置  Sengo2  %1  算法 %2",
        "SENGO2_VISION_SET_PARAM_NUM": "設置  Sengo2  %1  %2 組參數",
        "SENGO2_VISION_COLOR_PARAM": "設置  Sengo2  顏色識別  中心橫坐標 %1 中心縱坐標 %2 寬度 %3 高度 %4 參數組 %5",
        "SENGO2_VISION_BLOB_PARAM": "設置  Sengo2  色塊檢測  最小寬度 %1 最小高度 %2 顏色 %3 參數組 %4",
        "SENGO2_VISION_GENERAL_PARAM": "設置  Sengo2  %1 參數1 %2 參數2 %3 參數3 %4 參數4 %5 參數5 %6 參數組 %7",
        "SENGO2_VISION_BLOB_MAX": "設置  Sengo2  色塊檢測  每種顏色最大可檢測數量(1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "設置  Sengo2  標籤識別  編碼格式 %1",
        "SENGO2_VISION_LINE_MAX": "設置  Sengo2  線條檢測  最大可檢測數量(1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "設置  Sengo2  %1  %2 編號 %3",
        "SENGO2_VISION_GET_RESULT": "  Sengo2  %1  返回的結果數量",
        "SENGO2_VISION_COLOR_VALUE": "  Sengo2  顏色識別  返回值 %1 結果 %2 的",
        "SENGO2_VISION_GET_VALUE": "  Sengo2  %1  返回值 %2 結果 %3 的",
        "SENGO2_VISION_LINE_VALUE": "  Sengo2  線條檢測  返回值 %1 結果 %2 的",
        "SENGO2_VISION_QRCODE_VALUE": "  Sengo2  二維碼  返回值 %1 結果 %2 的",
        "SENGO2_VISION_QRCODE_STRING": "  Sengo2  二維碼  返回的結果字符串",
        "SENGO2_VISION_CUSTOM_VALUE": "  Sengo2 自定義 返回值 %1 結果 %2 的",
        "SENGO2_VISION_COLOR_LABEL": "  Sengo2  顏色識別  識別到 %1 結果 %2",
        "SENGO2_VISION_BLOB_LABEL": "  Sengo2  色塊檢測  檢測到 %1塊 結果 %2",
        "SENGO2_VISION_CARD_LABEL": "  Sengo2  卡片識別  識別到 %1 結果 %2",
        "SENGO2_VISION_CLASS20_LABEL": "  Sengo2  20類物體  識別到 %1 結果 %2",
        
        // 状态
        "SENGO2_ENABLE": "開啟",
        "SENGO2_DISABLE": "關閉",
        
        // 白平衡模式
        "SENGO2_AWB_AUTO": "自動",
        "SENGO2_AWB_LOCK": "鎖定",
        "SENGO2_AWB_WHITE_LIGHT": "白光",
        "SENGO2_AWB_YELLOW_LIGHT": "黃光",
        "SENGO2_AWB_CALIBRATE": "校準",
        
        // 颜色
        "SENGO2_COLOR_BLACK": "黑色",
        "SENGO2_COLOR_WHITE": "白色",
        "SENGO2_COLOR_RED": "紅色",
        "SENGO2_COLOR_GREEN": "綠色",
        "SENGO2_COLOR_BLUE": "藍色",
        "SENGO2_COLOR_YELLOW": "黃色",
        
        // LED颜色
        "SENGO2_LED_CLOSE": "黑色",
        "SENGO2_LED_RED": "紅色",
        "SENGO2_LED_GREEN": "綠色",
        "SENGO2_LED_YELLOW": "黃色",
        "SENGO2_LED_BLUE": "藍色",
        "SENGO2_LED_PURPLE": "紫色",
        "SENGO2_LED_CYAN": "青色",
        "SENGO2_LED_WHITE": "白色",
        
        // 算法参数操作
        "SENGO2_OPERA_SAVE": "保存數據並",
        "SENGO2_OPERA_DELETE": "刪除數據",
        
        // 自定义数据
        "SENGO2_CUSTOM_VALUE1": "數據1",
        "SENGO2_CUSTOM_VALUE2": "數據2",
        "SENGO2_CUSTOM_VALUE3": "數據3",
        "SENGO2_CUSTOM_VALUE4": "數據4",
        "SENGO2_CUSTOM_VALUE5": "數據5",
        
        // 卡片标签
        "SENGO2_CARD_FORWARD": "前進",
        "SENGO2_CARD_LEFT": "左轉",
        "SENGO2_CARD_RIGHT": "右轉",
        "SENGO2_CARD_TURN_AROUND": "掉頭",
        "SENGO2_CARD_PARK": "停車",
        "SENGO2_CARD_GREEN_LIGHT": "綠燈",
        "SENGO2_CARD_RED_LIGHT": "紅燈",
        "SENGO2_CARD_SPEED40": "速度40",
        "SENGO2_CARD_SPEED60": "速度60",
        "SENGO2_CARD_SPEED80": "速度80",
        
        // 20类物体
        "SENGO2_CLASS20_AIRPLANE": "飛機",
        "SENGO2_CLASS20_BICYCLE": "自行車",
        "SENGO2_CLASS20_BIRD": "鳥",
        "SENGO2_CLASS20_BOAT": "船",
        "SENGO2_CLASS20_BOTTLE": "瓶子",
        "SENGO2_CLASS20_BUS": "公交車",
        "SENGO2_CLASS20_CAR": "汽車",
        "SENGO2_CLASS20_CAT": "貓",
        "SENGO2_CLASS20_CHAIR": "椅子",
        "SENGO2_CLASS20_COW": "牛",
        "SENGO2_CLASS20_TABLE": "餐桌",
        "SENGO2_CLASS20_DOG": "狗",
        "SENGO2_CLASS20_HORSE": "馬",
        "SENGO2_CLASS20_MOTORBIKE": "摩托車",
        "SENGO2_CLASS20_PERSON": "人",
        "SENGO2_CLASS20_PLANT": "盆栽植物",
        "SENGO2_CLASS20_SHEEP": "羊",
        "SENGO2_CLASS20_SOFA": "沙發",
        "SENGO2_CLASS20_TRAIN": "火車",
        "SENGO2_CLASS20_MONITOR": "顯示器",
        
        // 视觉算法类型
        "SENGO2_VISION_VISIONCOLOR": "顏色識別",
        "SENGO2_VISION_VISIONBLOB": "色塊檢測",
        "SENGO2_VISION_VISIONAPRILTAG": "標籤識別",
        "SENGO2_VISION_VISIONLINE": "線條檢測",
        "SENGO2_VISION_VISIONLEARNING": "深度學習",
        "SENGO2_VISION_VISIONCARD": "卡片識別",
        "SENGO2_VISION_VISIONFACE": "人臉識別",
        "SENGO2_VISION_VISION20CLASSES": "20類物體",
        "SENGO2_VISION_VISIONQRCODE": "二維碼",
        "SENGO2_VISION_VISIONMOTIONDETECT": "運動物體",
        "SENGO2_VISION_VISIONCUSTOM": "自定義",
        
        // 状态值
        "SENGO2_STATE_VALUE_X": "橫坐標",
        "SENGO2_STATE_VALUE_Y": "縱坐標",
        "SENGO2_STATE_VALUE_WIDTH": "寬度",
        "SENGO2_STATE_VALUE_HEIGHT": "高度",
        "SENGO2_STATE_VALUE_LABEL": "標籤",
        "SENGO2_STATE_VALUE_R": "紅色通道值",
        "SENGO2_STATE_VALUE_G": "綠色通道值",
        "SENGO2_STATE_VALUE_B": "藍色通道值",
        
        // 线条检测值
        "SENGO2_STATE_LINE_EX": "終點橫坐標",
        "SENGO2_STATE_LINE_EY": "終點縱坐標",
        "SENGO2_STATE_LINE_SX": "起點橫坐標",
        "SENGO2_STATE_LINE_SY": "起點縱坐標",
        "SENGO2_STATE_LINE_A": "傾斜角度",
        
        // 视觉数据
        "SENGO2_VISION_DATA": "數據"
    });

    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        "SENGO2_CATEGORY": "Sensore di Visione Sengo2",
        "SENGO2_SETUP": "Modulo di Configurazione",
        "SENGO2_RUN": "Esegui Modulo",
        "SENGO2_BEGIN": "Inizializza porta Sengo2 %1 indirizzo %2",
        "SENGO2_SET_DEFAULT": "Ripristina Sengo2 alle impostazioni predefinite",
        "SENGO2_CAMERA_SET_AWB": "Imposta modalità di bilanciamento del bianco Sengo2 %1",
        "SENGO2_LED_SET_COLOR": "Imposta colore LED Sengo2 %1 quando si rilevano obiettivi, altrimenti %2 luminosità (1-15) %3",
        "SENGO2_VISION_SET": "Imposta Sengo2 %1 algoritmo %2",
        "SENGO2_VISION_SET_PARAM_NUM": "Imposta Sengo2 algoritmo %1 %2 set di parametri",
        "SENGO2_VISION_COLOR_PARAM": "Imposta Sengo2 algoritmo Colore coordinata-x %1 coordinata-y %2 larghezza %3 altezza %4 set di parametri %5",
        "SENGO2_VISION_BLOB_PARAM": "Imposta Sengo2 algoritmo Blob larghezza minima %1 altezza minima %2 colore %3 set di parametri %4",
        "SENGO2_VISION_GENERAL_PARAM": "Imposta Sengo2 %1 parametro1 %2 parametro2 %3 parametro3 %4 parametro4 %5 parametro5 %6 set di parametri %7",
        "SENGO2_VISION_BLOB_MAX": "Imposta Sengo2 algoritmo Blob numero massimo di blob per ciascun colore (1-5) %1",
        "SENGO2_VISION_APRILTAG_MODE": "Imposta Sengo2 algoritmo AprilTag standard %1",
        "SENGO2_VISION_LINE_MAX": "Imposta Sengo2 algoritmo Linea numero massimo di linee (1-5) %1",
        "SENGO2_VISION_OPERA_PARAM": "Imposta Sengo2 algoritmo %1 %2 ID %3",
        "SENGO2_VISION_GET_RESULT": "Sengo2 algoritmo %1 numero di risultati",
        "SENGO2_VISION_COLOR_VALUE": "Sengo2 algoritmo Colore %1 del risultato %2",
        "SENGO2_VISION_GET_VALUE": "Sengo2 algoritmo %1 %2 del risultato %3",
        "SENGO2_VISION_LINE_VALUE": "Sengo2 algoritmo Linea %1 del risultato %2",
        "SENGO2_VISION_QRCODE_VALUE": "Sengo2 algoritmo QrCode %1 del risultato %2",
        "SENGO2_VISION_QRCODE_STRING": "Sengo2 algoritmo QrCode stringa del risultato di decodifica",
        "SENGO2_VISION_CUSTOM_VALUE": "Sengo2 algoritmo Personalizzato %1 del risultato %2",
        "SENGO2_VISION_COLOR_LABEL": "Sengo2 algoritmo Colore riconosciuto %1 risultato %2",
        "SENGO2_VISION_BLOB_LABEL": "Sengo2 algoritmo Blob rilevato %1 blob risultato %2",
        "SENGO2_VISION_CARD_LABEL": "Sengo2 algoritmo Carta riconosciuta %1 risultato %2",
        "SENGO2_VISION_CLASS20_LABEL": "Sengo2 algoritmo 20Classe riconosciuta %1 risultato %2",
        
        // Stato
        "SENGO2_ENABLE": "eseguire",
        "SENGO2_DISABLE": "fermare",
        
        // Modalità di bilanciamento del bianco
        "SENGO2_AWB_AUTO": "Automatico",
        "SENGO2_AWB_LOCK": "Bloccare",
        "SENGO2_AWB_WHITE_LIGHT": "Luce Bianca",
        "SENGO2_AWB_YELLOW_LIGHT": "Luce Gialla",
        "SENGO2_AWB_CALIBRATE": "Calibrazione del bilanciamento del bianco",
        
        // Colori
        "SENGO2_COLOR_BLACK": "Nero",
        "SENGO2_COLOR_WHITE": "Bianco",
        "SENGO2_COLOR_RED": "Rosso",
        "SENGO2_COLOR_GREEN": "Verde",
        "SENGO2_COLOR_BLUE": "Blu",
        "SENGO2_COLOR_YELLOW": "Giallo",
        
        // Colori LED
        "SENGO2_LED_CLOSE": "Nero",
        "SENGO2_LED_RED": "Rosso",
        "SENGO2_LED_GREEN": "Verde",
        "SENGO2_LED_YELLOW": "Giallo",
        "SENGO2_LED_BLUE": "Blu",
        "SENGO2_LED_PURPLE": "Viola",
        "SENGO2_LED_CYAN": "Ciano",
        "SENGO2_LED_WHITE": "Bianco",
        
        // Operazioni di parametri dell'algoritmo
        "SENGO2_OPERA_SAVE": "salva dati come",
        "SENGO2_OPERA_DELETE": "elimina dati",
        
        // Dati personalizzati
        "SENGO2_CUSTOM_VALUE1": "Valore1",
        "SENGO2_CUSTOM_VALUE2": "Valore2",
        "SENGO2_CUSTOM_VALUE3": "Valore3",
        "SENGO2_CUSTOM_VALUE4": "Valore4",
        "SENGO2_CUSTOM_VALUE5": "Valore5",
        
        // Etichette delle carte
        "SENGO2_CARD_FORWARD": "Avanti",
        "SENGO2_CARD_LEFT": "Sinistra",
        "SENGO2_CARD_RIGHT": "Destra",
        "SENGO2_CARD_TURN_AROUND": "Girare",
        "SENGO2_CARD_PARK": "Parcheggiare",
        "SENGO2_CARD_GREEN_LIGHT": "Luce Verde",
        "SENGO2_CARD_RED_LIGHT": "Luce Rossa",
        "SENGO2_CARD_SPEED40": "Velocità 40",
        "SENGO2_CARD_SPEED60": "Velocità 60",
        "SENGO2_CARD_SPEED80": "Velocità 80",
        
        // 20 classi di oggetti
        "SENGO2_CLASS20_AIRPLANE": "Aereo",
        "SENGO2_CLASS20_BICYCLE": "Bicicletta",
        "SENGO2_CLASS20_BIRD": "Uccello",
        "SENGO2_CLASS20_BOAT": "Barca",
        "SENGO2_CLASS20_BOTTLE": "Bottiglia",
        "SENGO2_CLASS20_BUS": "Autobus",
        "SENGO2_CLASS20_CAR": "Auto",
        "SENGO2_CLASS20_CAT": "Gatto",
        "SENGO2_CLASS20_CHAIR": "Sedia",
        "SENGO2_CLASS20_COW": "Mucca",
        "SENGO2_CLASS20_TABLE": "Tavolo da Pranzo",
        "SENGO2_CLASS20_DOG": "Cane",
        "SENGO2_CLASS20_HORSE": "Cavallo",
        "SENGO2_CLASS20_MOTORBIKE": "Moto",
        "SENGO2_CLASS20_PERSON": "Persona",
        "SENGO2_CLASS20_PLANT": "Pianta in Vaso",
        "SENGO2_CLASS20_SHEEP": "Pecora",
        "SENGO2_CLASS20_SOFA": "Divano",
        "SENGO2_CLASS20_TRAIN": "Treno",
        "SENGO2_CLASS20_MONITOR": "Televisore",
        
        // Tipi di algoritmi di visione
        "SENGO2_VISION_VISIONCOLOR": "Colore",
        "SENGO2_VISION_VISIONBLOB": "Blob",
        "SENGO2_VISION_VISIONAPRILTAG": "AprilTag",
        "SENGO2_VISION_VISIONLINE": "Linea",
        "SENGO2_VISION_VISIONLEARNING": "Apprendimento",
        "SENGO2_VISION_VISIONCARD": "Carta",
        "SENGO2_VISION_VISIONFACE": "Faccia",
        "SENGO2_VISION_VISION20CLASSES": "20Classi",
        "SENGO2_VISION_VISIONQRCODE": "QrCode",
        "SENGO2_VISION_VISIONMOTIONDETECT": "Movimento",
        "SENGO2_VISION_VISIONCUSTOM": "Personalizzato",
        
        // Valori di stato
        "SENGO2_STATE_VALUE_X": "coordinata-x",
        "SENGO2_STATE_VALUE_Y": "coordinata-y",
        "SENGO2_STATE_VALUE_WIDTH": "larghezza",
        "SENGO2_STATE_VALUE_HEIGHT": "altezza",
        "SENGO2_STATE_VALUE_LABEL": "etichetta",
        "SENGO2_STATE_VALUE_R": "valore CH rosso",
        "SENGO2_STATE_VALUE_G": "valore CH verde",
        "SENGO2_STATE_VALUE_B": "valore CH blu",
        
        // Valori di rilevamento delle linee
        "SENGO2_STATE_LINE_EX": "coordinata-x del punto finale",
        "SENGO2_STATE_LINE_EY": "coordinata-y del punto finale",
        "SENGO2_STATE_LINE_SX": "coordinata-x del punto di partenza",
        "SENGO2_STATE_LINE_SY": "coordinata-y del punto di partenza",
        "SENGO2_STATE_LINE_A": "angolo di inclinazione",
        
        // Dati visivi
        "SENGO2_VISION_DATA": "Valore"
    });
    
    return Blockly;
}

exports = addMsg; 