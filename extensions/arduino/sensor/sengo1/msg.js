
function addMsg(Blockly) {
    // 英文翻译
    Object.assign(Blockly.ScratchMsgs.locales["en"], {
        "SENGO1_CATEGORY": "Sengo1 Vision Sensor",
        "SENGO1_SETUP": "Setup Module",
        "SENGO1_RUN": "Run Module",
        "SENGO1_NAME": "  Sengo1  ",
        "SENGO1_BEGIN": "Initialize   Sengo1   port %1 addr %2",
        "SENGO1_SET_DEFAULT": "Restore default parameters",
        "SENGO1_VISION_SET_STATUS": "Set   Sengo1   %1 algo %2",
        "SENGO1_VISION_SET_PARAM_NUM": "Set   Sengo1   algo %1  parameter groups number %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "Set   Sengo1   algo Blob  min-width %1 min-height %2 color %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "Set   Sengo1   algo Color  x-coord %1 y-coord %2 width %3 height %4",
        "SENGO1_VISION_FACE_SET_PARAM": "Set   Sengo1   algo Face  %1 ID %2",
        "SENGO1_ENABLE": "run",
        "SENGO1_DISABLE": "stop",
        "SENGO1_LED_SET_COLOR": "Set   Sengo1   LEDs' color %1 when targets were detected otherwise %2 luma(1-15) %3",
        "SENGO1_CAMERA_SET_AWB": "Set   Sengo1   white balance mode %1",
        "SENGO1_VISION_DETECTED": "Detected",
        "SENGO1_VISION_DETECTED_1": "Detected",
        "SENGO1_DETECTED_NUMBER": "result count",
        "SENGO1_VISION_RETURN": "return",
        "SENGO1_VISION_RESULT": "result",
        "SENGO1_GET_QRCODEVALUE": "result string",
        "SENGO1_COLOR": "color",
        "SENGO1_VISION_BLOCK": "block",
        "SENGO1_SAVE_DATA": "save data as",
        "SENGO1_DEL_DATA": "delete data",
        
        // Vision type
        "SENGO1_VISION_VISIONCOLOR": "Color",
        "SENGO1_VISION_VISIONBLOB": "Blob",
        "SENGO1_VISION_VISIONBALL": "Ball",
        "SENGO1_VISION_VISIONLINE": "Line",
        "SENGO1_VISION_VISIONCARD": "Card",
        "SENGO1_VISION_VISIONBODY": "Body",
        "SENGO1_VISION_VISIONFACE": "Face",
        "SENGO1_VISION_VISIONQRCODE": "QrCode",

        // Color
        "SENGO1_COLOR_BLACK": "Black",
        "SENGO1_COLOR_WHITE": "White",
        "SENGO1_COLOR_RED": "Red",
        "SENGO1_COLOR_GREEN": "Green",
        "SENGO1_COLOR_BLUE": "Blue",
        "SENGO1_COLOR_YELLOW": "Yellow",
        "SENGO1_COLOR_CYAN": "Cyan",
        "SENGO1_COLOR_PURPLE": "Purple",

        // State Values
        "SENGO1_STATE_VALUE_X": "x-coord",
        "SENGO1_STATE_VALUE_Y": "y-coord",
        "SENGO1_STATE_VALUE_WIDTH": "width",
        "SENGO1_STATE_VALUE_HEIGHT": "height",
        "SENGO1_STATE_VALUE_LABEL": "label",

        // Color Values
        "SENGO1_STATE_VALUE_R": "red CH value",
        "SENGO1_STATE_VALUE_G": "green CH value",
        "SENGO1_STATE_VALUE_B": "blue CH value",

        // Line Values
        "SENGO1_STATE_LINE_EX": "x-coord of ending point",
        "SENGO1_STATE_LINE_EY": "y-coord of ending point",
        "SENGO1_STATE_LINE_SX": "x-coord of starting point",
        "SENGO1_STATE_LINE_SY": "y-coord of starting point",
        "SENGO1_STATE_LINE_A": "inclination angle",

        // Ball Types
        "SENGO1_BALLTABLETENNIS": "Table Tennis",
        "SENGO1_BALLTENNIS": "Tennis",

        // Card Types
        "SENGO1_CARD_FORWARD": "Forward",
        "SENGO1_CARD_LEFT": "Left",
        "SENGO1_CARD_RIGHT": "Right",
        "SENGO1_CARD_TURN_AROUND": "Turn Around",
        "SENGO1_CARD_PARK": "Park",

        // White Balance
        "SENGO1_AUTO": "Auto",
        "SENGO1_LOCK_AWB": "Lock",
        "SENGO1_WHITE_LIGHT": "White light",
        "SENGO1_YELLOW_LIGHT": "Yellow light",

        // 检测块完整消息
        "SENGO1_VISION_DETECTED_COUNT": "  Sengo1   algo %1   num of result",
        "SENGO1_VISION_GET_QR_VALUE": "  Sengo1   algo QrCode   string of decoding result",
        "SENGO1_VISION_OBJ": "  Sengo1   algo %1   %2 ",
        "SENGO1_VISION_OBJ_COLOR": "  Sengo1   algo Color   %1 ",
        "SENGO1_VISION_OBJ_LINE": "  Sengo1   algo Line   %1 ",
        "SENGO1_VISION_OBJ_QR": "  Sengo1   algo QrCode   %1 ",
        "SENGO1_VISION_COLOR_DETECT": "  Sengo1   algo Color   recognized %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "  Sengo1   algo Blob   detected %1 blob",
        "SENGO1_VISION_CARD_DETECT": "  Sengo1   algo Card   recognized %1",
        "SENGO1_VISION_BALL_DETECT": "  Sengo1   algo Ball   recognized %1"
    });

    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        "SENGO1_CATEGORY": "Sengo1 Vision Sensor",
        "SENGO1_SETUP": "Setup-Modul",
        "SENGO1_RUN": "Modul starten",
        "SENGO1_NAME": "Sengo1",
        "SENGO1_BEGIN": "Sengo1-Port %1 addr %2 initialisieren",
        "SENGO1_SET_DEFAULT": "Standardparameter wiederherstellen",
        "SENGO1_VISION_SET_STATUS": "Sengo1 %1 Algorithmus %2 einstellen",
        "SENGO1_VISION_SET_PARAM_NUM": "Sengo1 Algorithmus %1 Parametergruppenanzahl %2 einstellen",
        "SENGO1_VISION_BLOB_SET_PARAM": "Sengo1 Algorithmus Blob Mindestbreite %1 Mindesthöhe %2 Farbe %3 einstellen",
        "SENGO1_VISION_COLOR_SET_PARAM": "Sengo1 Algorithmus Farbe x-Koordinate %1 y-Koordinate %2 Breite %3 Höhe %4 einstellen",
        "SENGO1_VISION_FACE_SET_PARAM": "Sengo1 Algorithmus Gesicht %1 ID %2 einstellen",
        "SENGO1_ENABLE": "starten",
        "SENGO1_DISABLE": "stoppen",
        "SENGO1_LED_SET_COLOR": "Sengo1 LEDs Farbe %1 einstellen, wenn Ziele erkannt werden, sonst %2 Helligkeit 1-15 %3",
        "SENGO1_CAMERA_SET_AWB": "Sengo1 Weißabgleichmodus %1 einstellen",
        "SENGO1_VISION_DETECTED": "Erkannt",
        "SENGO1_VISION_DETECTED_1": "Erkannt",
        "SENGO1_DETECTED_NUMBER": "Ergebnisanzahl",
        "SENGO1_VISION_RETURN": "zurückgeben",
        "SENGO1_VISION_RESULT": "Ergebnis",
        "SENGO1_GET_QRCODEVALUE": "Ergebniszeichenfolge",
        "SENGO1_COLOR": "Farbe",
        "SENGO1_VISION_BLOCK": "Block",
        "SENGO1_SAVE_DATA": "Daten speichern als",
        "SENGO1_DEL_DATA": "Daten löschen",
        
        // Vision type
        "SENGO1_VISION_VISIONCOLOR": "Farbe",
        "SENGO1_VISION_VISIONBLOB": "Blob",
        "SENGO1_VISION_VISIONBALL": "Ball",
        "SENGO1_VISION_VISIONLINE": "Linie",
        "SENGO1_VISION_VISIONCARD": "Karte",
        "SENGO1_VISION_VISIONBODY": "Körper",
        "SENGO1_VISION_VISIONFACE": "Gesicht",
        "SENGO1_VISION_VISIONQRCODE": "QrCode",
    
        // Color
        "SENGO1_COLOR_BLACK": "Schwarz",
        "SENGO1_COLOR_WHITE": "Weiß",
        "SENGO1_COLOR_RED": "Rot",
        "SENGO1_COLOR_GREEN": "Grün",
        "SENGO1_COLOR_BLUE": "Blau",
        "SENGO1_COLOR_YELLOW": "Gelb",
        "SENGO1_COLOR_CYAN": "Cyan",
        "SENGO1_COLOR_PURPLE": "Lila",
    
        // State Values
        "SENGO1_STATE_VALUE_X": "x-Koordinate",
        "SENGO1_STATE_VALUE_Y": "y-Koordinate",
        "SENGO1_STATE_VALUE_WIDTH": "Breite",
        "SENGO1_STATE_VALUE_HEIGHT": "Höhe",
        "SENGO1_STATE_VALUE_LABEL": "Label",
    
        // Color Values
        "SENGO1_STATE_VALUE_R": "Rotes CH-Wert",
        "SENGO1_STATE_VALUE_G": "Grünes CH-Wert",
        "SENGO1_STATE_VALUE_B": "Blaues CH-Wert",
    
        // Line Values
        "SENGO1_STATE_LINE_EX": "x-Koordinate des Endpunkts",
        "SENGO1_STATE_LINE_EY": "y-Koordinate des Endpunkts",
        "SENGO1_STATE_LINE_SX": "x-Koordinate des Startpunkts",
        "SENGO1_STATE_LINE_SY": "y-Koordinate des Startpunkts",
        "SENGO1_STATE_LINE_A": "Neigungswinkel",
    
        // Ball Types
        "SENGO1_BALLTABLETENNIS": "Tischtennis",
        "SENGO1_BALLTENNIS": "Tennis",
    
        // Card Types
        "SENGO1_CARD_FORWARD": "Vorwärts",
        "SENGO1_CARD_LEFT": "Links",
        "SENGO1_CARD_RIGHT": "Rechts",
        "SENGO1_CARD_TURN_AROUND": "Umkehren",
        "SENGO1_CARD_PARK": "Parken",
    
        // White Balance
        "SENGO1_AUTO": "Automatisch",
        "SENGO1_LOCK_AWB": "Sperren",
        "SENGO1_WHITE_LIGHT": "Weißes Licht",
        "SENGO1_YELLOW_LIGHT": "Gelbes Licht",
    
        // Detection messages
        "SENGO1_VISION_DETECTED_COUNT": "Sengo1 Algorithmus %1 Anzahl der Ergebnisse",
        "SENGO1_VISION_GET_QR_VALUE": "Sengo1 Algorithmus QrCode Zeichenfolge des Dekodierungsergebnisses",
        "SENGO1_VISION_OBJ": "Sengo1 Algorithmus %1 %2",
        "SENGO1_VISION_OBJ_COLOR": "Sengo1 Algorithmus Farbe %1",
        "SENGO1_VISION_OBJ_LINE": "Sengo1 Algorithmus Linie %1",
        "SENGO1_VISION_OBJ_QR": "Sengo1 Algorithmus QrCode %1",
        "SENGO1_VISION_COLOR_DETECT": "Sengo1 Algorithmus Farbe erkannt %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "Sengo1 Algorithmus Blob %1 Blob erkannt",
        "SENGO1_VISION_CARD_DETECT": "Sengo1 Algorithmus Karte erkannt %1",
        "SENGO1_VISION_BALL_DETECT": "Sengo1 Algorithmus Ball erkannt %1"
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        "SENGO1_CATEGORY": "Sensor de visión Sengo1",
        "SENGO1_SETUP": "Módulo de configuración",
        "SENGO1_RUN": "Ejecutar módulo",
        "SENGO1_NAME": "Sengo1",
        "SENGO1_BEGIN": "Inicializar puerto Sengo1 %1 addr %2",
        "SENGO1_SET_DEFAULT": "Restaurar parámetros predeterminados",
        "SENGO1_VISION_SET_STATUS": "Establecer Sengo1 %1 algoritmo %2",
        "SENGO1_VISION_SET_PARAM_NUM": "Establecer número de grupos de parámetros del algoritmo Sengo1 %1 %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "Establecer Sengo1 algoritmo Blob ancho mínimo %1 altura mínima %2 color %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "Establecer Sengo1 algoritmo Color coordenada-x %1 coordenada-y %2 ancho %3 altura %4",
        "SENGO1_VISION_FACE_SET_PARAM": "Establecer Sengo1 algoritmo Rostro %1 ID %2",
        "SENGO1_ENABLE": "ejecutar",
        "SENGO1_DISABLE": "detener",
        "SENGO1_LED_SET_COLOR": "Establecer color de LEDs de Sengo1 %1 cuando se detecten objetivos, de lo contrario %2 luminiscencia 1-15 %3",
        "SENGO1_CAMERA_SET_AWB": "Establecer modo de balance de blancos Sengo1 %1",
        "SENGO1_VISION_DETECTED": "Detectado",
        "SENGO1_VISION_DETECTED_1": "Detectado",
        "SENGO1_DETECTED_NUMBER": "contador de resultados",
        "SENGO1_VISION_RETURN": "devolver",
        "SENGO1_VISION_RESULT": "resultado",
        "SENGO1_GET_QRCODEVALUE": "cadena de resultado",
        "SENGO1_COLOR": "color",
        "SENGO1_VISION_BLOCK": "bloque",
        "SENGO1_SAVE_DATA": "guardar datos como",
        "SENGO1_DEL_DATA": "eliminar datos",
        
        // Vision type
        "SENGO1_VISION_VISIONCOLOR": "Color",
        "SENGO1_VISION_VISIONBLOB": "Blob",
        "SENGO1_VISION_VISIONBALL": "Pelota",
        "SENGO1_VISION_VISIONLINE": "Línea",
        "SENGO1_VISION_VISIONCARD": "Tarjeta",
        "SENGO1_VISION_VISIONBODY": "Cuerpo",
        "SENGO1_VISION_VISIONFACE": "Rostro",
        "SENGO1_VISION_VISIONQRCODE": "QrCode",
    
        // Color
        "SENGO1_COLOR_BLACK": "Negro",
        "SENGO1_COLOR_WHITE": "Blanco",
        "SENGO1_COLOR_RED": "Rojo",
        "SENGO1_COLOR_GREEN": "Verde",
        "SENGO1_COLOR_BLUE": "Azul",
        "SENGO1_COLOR_YELLOW": "Amarillo",
        "SENGO1_COLOR_CYAN": "Cian",
        "SENGO1_COLOR_PURPLE": "Púrpura",
    
        // State Values
        "SENGO1_STATE_VALUE_X": "coordenada-x",
        "SENGO1_STATE_VALUE_Y": "coordenada-y",
        "SENGO1_STATE_VALUE_WIDTH": "ancho",
        "SENGO1_STATE_VALUE_HEIGHT": "altura",
        "SENGO1_STATE_VALUE_LABEL": "etiqueta",
    
        // Color Values
        "SENGO1_STATE_VALUE_R": "valor CH rojo",
        "SENGO1_STATE_VALUE_G": "valor CH verde",
        "SENGO1_STATE_VALUE_B": "valor CH azul",
    
        // Line Values
        "SENGO1_STATE_LINE_EX": "coordenada-x del punto final",
        "SENGO1_STATE_LINE_EY": "coordenada-y del punto final",
        "SENGO1_STATE_LINE_SX": "coordenada-x del punto inicial",
        "SENGO1_STATE_LINE_SY": "coordenada-y del punto inicial",
        "SENGO1_STATE_LINE_A": "ángulo de inclinación",
    
        // Ball Types
        "SENGO1_BALLTABLETENNIS": "Tenis de mesa",
        "SENGO1_BALLTENNIS": "Tenis",
    
        // Card Types
        "SENGO1_CARD_FORWARD": "Adelante",
        "SENGO1_CARD_LEFT": "Izquierda",
        "SENGO1_CARD_RIGHT": "Derecha",
        "SENGO1_CARD_TURN_AROUND": "Dar la vuelta",
        "SENGO1_CARD_PARK": "Estacionar",
    
        // White Balance
        "SENGO1_AUTO": "Automático",
        "SENGO1_LOCK_AWB": "Bloquear",
        "SENGO1_WHITE_LIGHT": "Luz blanca",
        "SENGO1_YELLOW_LIGHT": "Luz amarilla",
    
        // Detection messages
        "SENGO1_VISION_DETECTED_COUNT": "Sengo1 algoritmo %1 número de resultados",
        "SENGO1_VISION_GET_QR_VALUE": "Sengo1 algoritmo QrCode cadena del resultado de decodificación",
        "SENGO1_VISION_OBJ": "Sengo1 algoritmo %1 %2",
        "SENGO1_VISION_OBJ_COLOR": "Sengo1 algoritmo Color %1",
        "SENGO1_VISION_OBJ_LINE": "Sengo1 algoritmo Línea %1",
        "SENGO1_VISION_OBJ_QR": "Sengo1 algoritmo QrCode %1",
        "SENGO1_VISION_COLOR_DETECT": "Sengo1 algoritmo Color reconocido %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "Sengo1 algoritmo Blob detectado %1 blob",
        "SENGO1_VISION_CARD_DETECT": "Sengo1 algoritmo Tarjeta reconocida %1",
        "SENGO1_VISION_BALL_DETECT": "Sengo1 algoritmo Pelota reconocida %1"
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        "SENGO1_CATEGORY": "Capteur de vision Sengo1",
        "SENGO1_SETUP": "Module de configuration",
        "SENGO1_RUN": "Exécuter le module",
        "SENGO1_NAME": "Sengo1",
        "SENGO1_BEGIN": "Initialiser le port Sengo1 %1 addr %2",
        "SENGO1_SET_DEFAULT": "Restaurer les paramètres par défaut",
        "SENGO1_VISION_SET_STATUS": "Définir Sengo1 %1 algorithme %2",
        "SENGO1_VISION_SET_PARAM_NUM": "Définir le nombre de groupes de paramètres de l'algorithme Sengo1 %1 %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "Définir Sengo1 algorithme Blob largeur minimale %1 hauteur minimale %2 couleur %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "Définir Sengo1 algorithme Couleur coordonnée-x %1 coordonnée-y %2 largeur %3 hauteur %4",
        "SENGO1_VISION_FACE_SET_PARAM": "Définir Sengo1 algorithme Visage %1 ID %2",
        "SENGO1_ENABLE": "exécuter",
        "SENGO1_DISABLE": "arrêter",
        "SENGO1_LED_SET_COLOR": "Définir la couleur des LEDs Sengo1 %1 lorsque des cibles sont détectées, sinon %2 luminosité 1-15 %3",
        "SENGO1_CAMERA_SET_AWB": "Définir le mode de balance des blancs Sengo1 %1",
        "SENGO1_VISION_DETECTED": "Détecté",
        "SENGO1_VISION_DETECTED_1": "Détecté",
        "SENGO1_DETECTED_NUMBER": "nombre de résultats",
        "SENGO1_VISION_RETURN": "retourner",
        "SENGO1_VISION_RESULT": "résultat",
        "SENGO1_GET_QRCODEVALUE": "chaîne de résultat",
        "SENGO1_COLOR": "couleur",
        "SENGO1_VISION_BLOCK": "bloc",
        "SENGO1_SAVE_DATA": "enregistrer les données sous",
        "SENGO1_DEL_DATA": "supprimer les données",
        
        // Vision type
        "SENGO1_VISION_VISIONCOLOR": "Couleur",
        "SENGO1_VISION_VISIONBLOB": "Blob",
        "SENGO1_VISION_VISIONBALL": "Balle",
        "SENGO1_VISION_VISIONLINE": "Ligne",
        "SENGO1_VISION_VISIONCARD": "Carte",
        "SENGO1_VISION_VISIONBODY": "Corps",
        "SENGO1_VISION_VISIONFACE": "Visage",
        "SENGO1_VISION_VISIONQRCODE": "QrCode",
    
        // Color
        "SENGO1_COLOR_BLACK": "Noir",
        "SENGO1_COLOR_WHITE": "Blanc",
        "SENGO1_COLOR_RED": "Rouge",
        "SENGO1_COLOR_GREEN": "Vert",
        "SENGO1_COLOR_BLUE": "Bleu",
        "SENGO1_COLOR_YELLOW": "Jaune",
        "SENGO1_COLOR_CYAN": "Cyan",
        "SENGO1_COLOR_PURPLE": "Violet",
    
        // State Values
        "SENGO1_STATE_VALUE_X": "coordonnée-x",
        "SENGO1_STATE_VALUE_Y": "coordonnée-y",
        "SENGO1_STATE_VALUE_WIDTH": "largeur",
        "SENGO1_STATE_VALUE_HEIGHT": "hauteur",
        "SENGO1_STATE_VALUE_LABEL": "étiquette",
    
        // Color Values
        "SENGO1_STATE_VALUE_R": "valeur CH rouge",
        "SENGO1_STATE_VALUE_G": "valeur CH verte",
        "SENGO1_STATE_VALUE_B": "valeur CH bleue",
    
        // Line Values
        "SENGO1_STATE_LINE_EX": "coordonnée-x du point final",
        "SENGO1_STATE_LINE_EY": "coordonnée-y du point final",
        "SENGO1_STATE_LINE_SX": "coordonnée-x du point de départ",
        "SENGO1_STATE_LINE_SY": "coordonnée-y du point de départ",
        "SENGO1_STATE_LINE_A": "angle d'inclinaison",
    
        // Ball Types
        "SENGO1_BALLTABLETENNIS": "Tennis de table",
        "SENGO1_BALLTENNIS": "Tennis",
    
        // Card Types
        "SENGO1_CARD_FORWARD": "Avant",
        "SENGO1_CARD_LEFT": "Gauche",
        "SENGO1_CARD_RIGHT": "Droite",
        "SENGO1_CARD_TURN_AROUND": "Faire demi-tour",
        "SENGO1_CARD_PARK": "Se garer",
    
        // White Balance
        "SENGO1_AUTO": "Automatique",
        "SENGO1_LOCK_AWB": "Verrouiller",
        "SENGO1_WHITE_LIGHT": "Lumière blanche",
        "SENGO1_YELLOW_LIGHT": "Lumière jaune",
    
        // Detection messages
        "SENGO1_VISION_DETECTED_COUNT": "Sengo1 algorithme %1 nombre de résultats",
        "SENGO1_VISION_GET_QR_VALUE": "Sengo1 algorithme QrCode chaîne du résultat de décodage",
        "SENGO1_VISION_OBJ": "Sengo1 algorithme %1 %2",
        "SENGO1_VISION_OBJ_COLOR": "Sengo1 algorithme Couleur %1",
        "SENGO1_VISION_OBJ_LINE": "Sengo1 algorithme Ligne %1",
        "SENGO1_VISION_OBJ_QR": "Sengo1 algorithme QrCode %1",
        "SENGO1_VISION_COLOR_DETECT": "Sengo1 algorithme Couleur reconnu %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "Sengo1 algorithme Blob %1 blob détecté",
        "SENGO1_VISION_CARD_DETECT": "Sengo1 algorithme Carte reconnue %1",
        "SENGO1_VISION_BALL_DETECT": "Sengo1 algorithme Balle reconnue %1"
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        "SENGO1_CATEGORY": "Sengo1ビジョンセンサー",
        "SENGO1_SETUP": "セットアップモジュール",
        "SENGO1_RUN": "モジュール実行",
        "SENGO1_NAME": "Sengo1",
        "SENGO1_BEGIN": "Sengo1ポート%1 アドレス%2を初期化",
        "SENGO1_SET_DEFAULT": "デフォルトパラメータを復元",
        "SENGO1_VISION_SET_STATUS": "Sengo1 %1 アルゴリズム %2 を設定",
        "SENGO1_VISION_SET_PARAM_NUM": "Sengo1 アルゴリズム %1 パラメータグループ数 %2 を設定",
        "SENGO1_VISION_BLOB_SET_PARAM": "Sengo1 アルゴリズム ブロブ 最小幅 %1 最小高さ %2 色 %3 を設定",
        "SENGO1_VISION_COLOR_SET_PARAM": "Sengo1 アルゴリズム 色 x座標 %1 y座標 %2 幅 %3 高さ %4 を設定",
        "SENGO1_VISION_FACE_SET_PARAM": "Sengo1 アルゴリズム 顔 %1 ID %2 を設定",
        "SENGO1_ENABLE": "実行",
        "SENGO1_DISABLE": "停止",
        "SENGO1_LED_SET_COLOR": "Sengo1 LED の色 %1 を設定、目標が検出された場合、それ以外は %2 明るさ 1-15 %3",
        "SENGO1_CAMERA_SET_AWB": "Sengo1 ホワイトバランスモード %1 を設定",
        "SENGO1_VISION_DETECTED": "検出",
        "SENGO1_VISION_DETECTED_1": "検出",
        "SENGO1_DETECTED_NUMBER": "結果数",
        "SENGO1_VISION_RETURN": "返す",
        "SENGO1_VISION_RESULT": "結果",
        "SENGO1_GET_QRCODEVALUE": "結果文字列",
        "SENGO1_COLOR": "色",
        "SENGO1_VISION_BLOCK": "ブロック",
        "SENGO1_SAVE_DATA": "データを以下のように保存",
        "SENGO1_DEL_DATA": "データを削除",
        
        // Vision type
        "SENGO1_VISION_VISIONCOLOR": "色",
        "SENGO1_VISION_VISIONBLOB": "ブロブ",
        "SENGO1_VISION_VISIONBALL": "ボール",
        "SENGO1_VISION_VISIONLINE": "ライン",
        "SENGO1_VISION_VISIONCARD": "カード",
        "SENGO1_VISION_VISIONBODY": "体",
        "SENGO1_VISION_VISIONFACE": "顔",
        "SENGO1_VISION_VISIONQRCODE": "QrCode",
    
        // Color
        "SENGO1_COLOR_BLACK": "黒",
        "SENGO1_COLOR_WHITE": "白",
        "SENGO1_COLOR_RED": "赤",
        "SENGO1_COLOR_GREEN": "緑",
        "SENGO1_COLOR_BLUE": "青",
        "SENGO1_COLOR_YELLOW": "黄",
        "SENGO1_COLOR_CYAN": "シアン",
        "SENGO1_COLOR_PURPLE": "紫",
    
        // State Values
        "SENGO1_STATE_VALUE_X": "x座標",
        "SENGO1_STATE_VALUE_Y": "y座標",
        "SENGO1_STATE_VALUE_WIDTH": "幅",
        "SENGO1_STATE_VALUE_HEIGHT": "高さ",
        "SENGO1_STATE_VALUE_LABEL": "ラベル",
    
        // Color Values
        "SENGO1_STATE_VALUE_R": "赤のCH値",
        "SENGO1_STATE_VALUE_G": "緑のCH値",
        "SENGO1_STATE_VALUE_B": "青のCH値",
    
        // Line Values
        "SENGO1_STATE_LINE_EX": "終点のx座標",
        "SENGO1_STATE_LINE_EY": "終点のy座標",
        "SENGO1_STATE_LINE_SX": "始点のx座標",
        "SENGO1_STATE_LINE_SY": "始点のy座標",
        "SENGO1_STATE_LINE_A": "傾き角度",
    
        // Ball Types
        "SENGO1_BALLTABLETENNIS": "卓球",
        "SENGO1_BALLTENNIS": "テニス",
    
        // Card Types
        "SENGO1_CARD_FORWARD": "前進",
        "SENGO1_CARD_LEFT": "左",
        "SENGO1_CARD_RIGHT": "右",
        "SENGO1_CARD_TURN_AROUND": "振り返る",
        "SENGO1_CARD_PARK": "駐車",
    
        // White Balance
        "SENGO1_AUTO": "自動",
        "SENGO1_LOCK_AWB": "ロック",
        "SENGO1_WHITE_LIGHT": "白色光",
        "SENGO1_YELLOW_LIGHT": "黄色光",
    
        // Detection messages
        "SENGO1_VISION_DETECTED_COUNT": "Sengo1 アルゴリズム %1 の結果数",
        "SENGO1_VISION_GET_QR_VALUE": "Sengo1 アルゴリズム QrCode のデコード結果文字列",
        "SENGO1_VISION_OBJ": "Sengo1 アルゴリズム %1 %2",
        "SENGO1_VISION_OBJ_COLOR": "Sengo1 アルゴリズム 色 %1",
        "SENGO1_VISION_OBJ_LINE": "Sengo1 アルゴリズム ライン %1",
        "SENGO1_VISION_OBJ_QR": "Sengo1 アルゴリズム QrCode %1",
        "SENGO1_VISION_COLOR_DETECT": "Sengo1 アルゴリズム 色 認識 %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "Sengo1 アルゴリズム ブロブ %1 ブロブ検出",
        "SENGO1_VISION_CARD_DETECT": "Sengo1 アルゴリズム カード 認識 %1",
        "SENGO1_VISION_BALL_DETECT": "Sengo1 アルゴリズム ボール 認識 %1"
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        "SENGO1_CATEGORY": "Sengo1 비전 센서",
        "SENGO1_SETUP": "설정 모듈",
        "SENGO1_RUN": "모듈 실행",
        "SENGO1_NAME": "Sengo1",
        "SENGO1_BEGIN": "Sengo1 포트 %1 주소 %2 초기화",
        "SENGO1_SET_DEFAULT": "기본 매개변수 복원",
        "SENGO1_VISION_SET_STATUS": "Sengo1 %1 알고리즘 %2 설정",
        "SENGO1_VISION_SET_PARAM_NUM": "Sengo1 알고리즘 %1 매개변수 그룹 수 %2 설정",
        "SENGO1_VISION_BLOB_SET_PARAM": "Sengo1 알고리즘 Blob 최소 너비 %1 최소 높이 %2 색상 %3 설정",
        "SENGO1_VISION_COLOR_SET_PARAM": "Sengo1 알고리즘 색상 x좌표 %1 y좌표 %2 너비 %3 높이 %4 설정",
        "SENGO1_VISION_FACE_SET_PARAM": "Sengo1 알고리즘 얼굴 %1 ID %2 설정",
        "SENGO1_ENABLE": "실행",
        "SENGO1_DISABLE": "중지",
        "SENGO1_LED_SET_COLOR": "Sengo1 LED 색상 %1 설정, 목표가 감지되면 %2 밝기 1-15 %3",
        "SENGO1_CAMERA_SET_AWB": "Sengo1 화이트 밸런스 모드 %1 설정",
        "SENGO1_VISION_DETECTED": "감지됨",
        "SENGO1_VISION_DETECTED_1": "감지됨",
        "SENGO1_DETECTED_NUMBER": "결과 수",
        "SENGO1_VISION_RETURN": "반환",
        "SENGO1_VISION_RESULT": "결과",
        "SENGO1_GET_QRCODEVALUE": "결과 문자열",
        "SENGO1_COLOR": "색상",
        "SENGO1_VISION_BLOCK": "블록",
        "SENGO1_SAVE_DATA": "데이터 저장",
        "SENGO1_DEL_DATA": "데이터 삭제",
        
        // Vision type
        "SENGO1_VISION_VISIONCOLOR": "색상",
        "SENGO1_VISION_VISIONBLOB": "Blob",
        "SENGO1_VISION_VISIONBALL": "공",
        "SENGO1_VISION_VISIONLINE": "선",
        "SENGO1_VISION_VISIONCARD": "카드",
        "SENGO1_VISION_VISIONBODY": "신체",
        "SENGO1_VISION_VISIONFACE": "얼굴",
        "SENGO1_VISION_VISIONQRCODE": "QrCode",
    
        // Color
        "SENGO1_COLOR_BLACK": "검정",
        "SENGO1_COLOR_WHITE": "흰색",
        "SENGO1_COLOR_RED": "빨강",
        "SENGO1_COLOR_GREEN": "초록",
        "SENGO1_COLOR_BLUE": "파랑",
        "SENGO1_COLOR_YELLOW": "노랑",
        "SENGO1_COLOR_CYAN": "청록",
        "SENGO1_COLOR_PURPLE": "보라",
    
        // State Values
        "SENGO1_STATE_VALUE_X": "x좌표",
        "SENGO1_STATE_VALUE_Y": "y좌표",
        "SENGO1_STATE_VALUE_WIDTH": "너비",
        "SENGO1_STATE_VALUE_HEIGHT": "높이",
        "SENGO1_STATE_VALUE_LABEL": "레이블",
    
        // Color Values
        "SENGO1_STATE_VALUE_R": "빨강 CH 값",
        "SENGO1_STATE_VALUE_G": "초록 CH 값",
        "SENGO1_STATE_VALUE_B": "파랑 CH 값",
    
        // Line Values
        "SENGO1_STATE_LINE_EX": "끝점의 x좌표",
        "SENGO1_STATE_LINE_EY": "끝점의 y좌표",
        "SENGO1_STATE_LINE_SX": "시작점의 x좌표",
        "SENGO1_STATE_LINE_SY": "시작점의 y좌표",
        "SENGO1_STATE_LINE_A": "경사각",
    
        // Ball Types
        "SENGO1_BALLTABLETENNIS": "탁구",
        "SENGO1_BALLTENNIS": "테니스",
    
        // Card Types
        "SENGO1_CARD_FORWARD": "앞으로",
        "SENGO1_CARD_LEFT": "왼쪽",
        "SENGO1_CARD_RIGHT": "오른쪽",
        "SENGO1_CARD_TURN_AROUND": "돌아가기",
        "SENGO1_CARD_PARK": "주차",
    
        // White Balance
        "SENGO1_AUTO": "자동",
        "SENGO1_LOCK_AWB": "잠금",
        "SENGO1_WHITE_LIGHT": "백색광",
        "SENGO1_YELLOW_LIGHT": "황색광",
    
        // Detection messages
        "SENGO1_VISION_DETECTED_COUNT": "Sengo1 알고리즘 %1 결과 수",
        "SENGO1_VISION_GET_QR_VALUE": "Sengo1 알고리즘 QrCode 디코딩 결과 문자열",
        "SENGO1_VISION_OBJ": "Sengo1 알고리즘 %1 %2",
        "SENGO1_VISION_OBJ_COLOR": "Sengo1 알고리즘 색상 %1",
        "SENGO1_VISION_OBJ_LINE": "Sengo1 알고리즘 선 %1",
        "SENGO1_VISION_OBJ_QR": "Sengo1 알고리즘 QrCode %1",
        "SENGO1_VISION_COLOR_DETECT": "Sengo1 알고리즘 색상 인식 %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "Sengo1 알고리즘 Blob %1 블롭 감지됨",
        "SENGO1_VISION_CARD_DETECT": "Sengo1 알고리즘 카드 인식 %1",
        "SENGO1_VISION_BALL_DETECT": "Sengo1 알고리즘 공 인식 %1"
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        "SENGO1_CATEGORY": "Czujnik wizji Sengo1",
        "SENGO1_SETUP": "Moduł konfiguracji",
        "SENGO1_RUN": "Uruchom moduł",
        "SENGO1_NAME": "Sengo1",
        "SENGO1_BEGIN": "Zainicjuj port Sengo1 %1 adres %2",
        "SENGO1_SET_DEFAULT": "Przywróć domyślne parametry",
        "SENGO1_VISION_SET_STATUS": "Ustaw Sengo1 %1 algorytm %2",
        "SENGO1_VISION_SET_PARAM_NUM": "Ustaw liczbę grup parametrów algorytmu Sengo1 %1 %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "Ustaw Sengo1 algorytm Blob minimalna szerokość %1 minimalna wysokość %2 kolor %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "Ustaw Sengo1 algorytm Kolor współrzędna x %1 współrzędna y %2 szerokość %3 wysokość %4",
        "SENGO1_VISION_FACE_SET_PARAM": "Ustaw Sengo1 algorytm Twarz %1 ID %2",
        "SENGO1_ENABLE": "uruchom",
        "SENGO1_DISABLE": "zatrzymaj",
        "SENGO1_LED_SET_COLOR": "Ustaw kolor diod LED Sengo1 %1 po wykryciu celów, w przeciwnym razie %2 jasność 1-15 %3",
        "SENGO1_CAMERA_SET_AWB": "Ustaw tryb balansu bieli Sengo1 %1",
        "SENGO1_VISION_DETECTED": "Wykryto",
        "SENGO1_VISION_DETECTED_1": "Wykryto",
        "SENGO1_DETECTED_NUMBER": "liczba wyników",
        "SENGO1_VISION_RETURN": "zwróć",
        "SENGO1_VISION_RESULT": "wynik",
        "SENGO1_GET_QRCODEVALUE": "ciąg wynikowy",
        "SENGO1_COLOR": "kolor",
        "SENGO1_VISION_BLOCK": "blok",
        "SENGO1_SAVE_DATA": "zapisz dane jako",
        "SENGO1_DEL_DATA": "usuń dane",
        
        // Vision type
        "SENGO1_VISION_VISIONCOLOR": "Kolor",
        "SENGO1_VISION_VISIONBLOB": "Blob",
        "SENGO1_VISION_VISIONBALL": "Piłka",
        "SENGO1_VISION_VISIONLINE": "Linia",
        "SENGO1_VISION_VISIONCARD": "Karta",
        "SENGO1_VISION_VISIONBODY": "Ciało",
        "SENGO1_VISION_VISIONFACE": "Twarz",
        "SENGO1_VISION_VISIONQRCODE": "QrCode",
    
        // Color
        "SENGO1_COLOR_BLACK": "Czarny",
        "SENGO1_COLOR_WHITE": "Biały",
        "SENGO1_COLOR_RED": "Czerwony",
        "SENGO1_COLOR_GREEN": "Zielony",
        "SENGO1_COLOR_BLUE": "Niebieski",
        "SENGO1_COLOR_YELLOW": "Żółty",
        "SENGO1_COLOR_CYAN": "Cyjan",
        "SENGO1_COLOR_PURPLE": "Fioletowy",
    
        // State Values
        "SENGO1_STATE_VALUE_X": "współrzędna x",
        "SENGO1_STATE_VALUE_Y": "współrzędna y",
        "SENGO1_STATE_VALUE_WIDTH": "szerokość",
        "SENGO1_STATE_VALUE_HEIGHT": "wysokość",
        "SENGO1_STATE_VALUE_LABEL": "etykieta",
    
        // Color Values
        "SENGO1_STATE_VALUE_R": "wartość CH czerwony",
        "SENGO1_STATE_VALUE_G": "wartość CH zielony",
        "SENGO1_STATE_VALUE_B": "wartość CH niebieski",
    
        // Line Values
        "SENGO1_STATE_LINE_EX": "współrzędna x punktu końcowego",
        "SENGO1_STATE_LINE_EY": "współrzędna y punktu końcowego",
        "SENGO1_STATE_LINE_SX": "współrzędna x punktu początkowego",
        "SENGO1_STATE_LINE_SY": "współrzędna y punktu początkowego",
        "SENGO1_STATE_LINE_A": "kąt nachylenia",
    
        // Ball Types
        "SENGO1_BALLTABLETENNIS": "Tenis stołowy",
        "SENGO1_BALLTENNIS": "Tenis",
    
        // Card Types
        "SENGO1_CARD_FORWARD": "Do przodu",
        "SENGO1_CARD_LEFT": "W lewo",
        "SENGO1_CARD_RIGHT": "W prawo",
        "SENGO1_CARD_TURN_AROUND": "Obróć się",
        "SENGO1_CARD_PARK": "Zaparkuj",
    
        // White Balance
        "SENGO1_AUTO": "Automatycznie",
        "SENGO1_LOCK_AWB": "Zablokuj",
        "SENGO1_WHITE_LIGHT": "Białe światło",
        "SENGO1_YELLOW_LIGHT": "Żółte światło",
    
        // Detection messages
        "SENGO1_VISION_DETECTED_COUNT": "Czujnik Sengo1 algorytm %1 liczba wyników",
        "SENGO1_VISION_GET_QR_VALUE": "Czujnik Sengo1 algorytm QrCode ciąg wyniku dekodowania",
        "SENGO1_VISION_OBJ": "Czujnik Sengo1 algorytm %1 %2",
        "SENGO1_VISION_OBJ_COLOR": "Czujnik Sengo1 algorytm Kolor %1",
        "SENGO1_VISION_OBJ_LINE": "Czujnik Sengo1 algorytm Linia %1",
        "SENGO1_VISION_OBJ_QR": "Czujnik Sengo1 algorytm QrCode %1",
        "SENGO1_VISION_COLOR_DETECT": "Czujnik Sengo1 algorytm Kolor rozpoznany %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "Czujnik Sengo1 algorytm Blob wykryty %1 blob",
        "SENGO1_VISION_CARD_DETECT": "Czujnik Sengo1 algorytm Karta rozpoznana %1",
        "SENGO1_VISION_BALL_DETECT": "Czujnik Sengo1 algorytm Piłka rozpoznana %1"
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        "SENGO1_CATEGORY": "Sensor de Visão Sengo1",
        "SENGO1_SETUP": "Módulo de Configuração",
        "SENGO1_RUN": "Executar Módulo",
        "SENGO1_NAME": "Sengo1",
        "SENGO1_BEGIN": "Inicializar porta Sengo1 %1 endereço %2",
        "SENGO1_SET_DEFAULT": "Restaurar parâmetros padrões",
        "SENGO1_VISION_SET_STATUS": "Definir Sengo1 %1 algoritmo %2",
        "SENGO1_VISION_SET_PARAM_NUM": "Definir número de grupos de parâmetros do algoritmo Sengo1 %1 %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "Definir Sengo1 algoritmo Blob largura mínima %1 altura mínima %2 cor %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "Definir Sengo1 algoritmo Cor coordenada-x %1 coordenada-y %2 largura %3 altura %4",
        "SENGO1_VISION_FACE_SET_PARAM": "Definir Sengo1 algoritmo Rosto %1 ID %2",
        "SENGO1_ENABLE": "executar",
        "SENGO1_DISABLE": "parar",
        "SENGO1_LED_SET_COLOR": "Definir cor dos LEDs do Sengo1 %1 quando alvos forem detectados, caso contrário %2 luminância 1-15 %3",
        "SENGO1_CAMERA_SET_AWB": "Definir modo de balanço de brancos do Sengo1 %1",
        "SENGO1_VISION_DETECTED": "Detectado",
        "SENGO1_VISION_DETECTED_1": "Detectado",
        "SENGO1_DETECTED_NUMBER": "quantidade de resultados",
        "SENGO1_VISION_RETURN": "retornar",
        "SENGO1_VISION_RESULT": "resultado",
        "SENGO1_GET_QRCODEVALUE": "string de resultado",
        "SENGO1_COLOR": "cor",
        "SENGO1_VISION_BLOCK": "bloco",
        "SENGO1_SAVE_DATA": "salvar dados como",
        "SENGO1_DEL_DATA": "deletar dados",
        
        // Vision type
        "SENGO1_VISION_VISIONCOLOR": "Cor",
        "SENGO1_VISION_VISIONBLOB": "Blob",
        "SENGO1_VISION_VISIONBALL": "Bola",
        "SENGO1_VISION_VISIONLINE": "Linha",
        "SENGO1_VISION_VISIONCARD": "Cartão",
        "SENGO1_VISION_VISIONBODY": "Corpo",
        "SENGO1_VISION_VISIONFACE": "Rosto",
        "SENGO1_VISION_VISIONQRCODE": "QrCode",
    
        // Color
        "SENGO1_COLOR_BLACK": "Preto",
        "SENGO1_COLOR_WHITE": "Branco",
        "SENGO1_COLOR_RED": "Vermelho",
        "SENGO1_COLOR_GREEN": "Verde",
        "SENGO1_COLOR_BLUE": "Azul",
        "SENGO1_COLOR_YELLOW": "Amarelo",
        "SENGO1_COLOR_CYAN": "Ciano",
        "SENGO1_COLOR_PURPLE": "Roxo",
    
        // State Values
        "SENGO1_STATE_VALUE_X": "coordenada-x",
        "SENGO1_STATE_VALUE_Y": "coordenada-y",
        "SENGO1_STATE_VALUE_WIDTH": "largura",
        "SENGO1_STATE_VALUE_HEIGHT": "altura",
        "SENGO1_STATE_VALUE_LABEL": "rótulo",
    
        // Color Values
        "SENGO1_STATE_VALUE_R": "valor CH vermelho",
        "SENGO1_STATE_VALUE_G": "valor CH verde",
        "SENGO1_STATE_VALUE_B": "valor CH azul",
    
        // Line Values
        "SENGO1_STATE_LINE_EX": "coordenada-x do ponto final",
        "SENGO1_STATE_LINE_EY": "coordenada-y do ponto final",
        "SENGO1_STATE_LINE_SX": "coordenada-x do ponto inicial",
        "SENGO1_STATE_LINE_SY": "coordenada-y do ponto inicial",
        "SENGO1_STATE_LINE_A": "ângulo de inclinação",
    
        // Ball Types
        "SENGO1_BALLTABLETENNIS": "Tênis de Mesa",
        "SENGO1_BALLTENNIS": "Tênis",
    
        // Card Types
        "SENGO1_CARD_FORWARD": "Para Frente",
        "SENGO1_CARD_LEFT": "Esquerda",
        "SENGO1_CARD_RIGHT": "Direita",
        "SENGO1_CARD_TURN_AROUND": "Virar",
        "SENGO1_CARD_PARK": "Estacionar",
    
        // White Balance
        "SENGO1_AUTO": "Automático",
        "SENGO1_LOCK_AWB": "Trancar",
        "SENGO1_WHITE_LIGHT": "Luz Branca",
        "SENGO1_YELLOW_LIGHT": "Luz Amarela",
    
        // Detection messages
        "SENGO1_VISION_DETECTED_COUNT": "Sengo1 algoritmo %1 número de resultados",
        "SENGO1_VISION_GET_QR_VALUE": "Sengo1 algoritmo QrCode string do resultado da decodificação",
        "SENGO1_VISION_OBJ": "Sengo1 algoritmo %1 %2",
        "SENGO1_VISION_OBJ_COLOR": "Sengo1 algoritmo Cor %1",
        "SENGO1_VISION_OBJ_LINE": "Sengo1 algoritmo Linha %1",
        "SENGO1_VISION_OBJ_QR": "Sengo1 algoritmo QrCode %1",
        "SENGO1_VISION_COLOR_DETECT": "Sengo1 algoritmo Cor reconhecida %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "Sengo1 algoritmo Blob detectado %1 blob",
        "SENGO1_VISION_CARD_DETECT": "Sengo1 algoritmo Cartão reconhecido %1",
        "SENGO1_VISION_BALL_DETECT": "Sengo1 algoritmo Bola reconhecida %1"
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        "SENGO1_CATEGORY": "Датчик зрения Sengo1",
        "SENGO1_SETUP": "Модуль настройки",
        "SENGO1_RUN": "Запустить модуль",
        "SENGO1_NAME": "Sengo1",
        "SENGO1_BEGIN": "Инициализировать порт Sengo1 %1 адрес %2",
        "SENGO1_SET_DEFAULT": "Восстановить параметры по умолчанию",
        "SENGO1_VISION_SET_STATUS": "Установить Sengo1 %1 алгоритм %2",
        "SENGO1_VISION_SET_PARAM_NUM": "Установить число групп параметров алгоритма Sengo1 %1 %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "Установить Sengo1 алгоритм Blob минимальная ширина %1 минимальная высота %2 цвет %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "Установить Sengo1 алгоритм Цвет координата-x %1 координата-y %2 ширина %3 высота %4",
        "SENGO1_VISION_FACE_SET_PARAM": "Установить Sengo1 алгоритм Лицо %1 ID %2",
        "SENGO1_ENABLE": "запустить",
        "SENGO1_DISABLE": "остановить",
        "SENGO1_LED_SET_COLOR": "Установить цвет светодиодов Sengo1 %1 при обнаружении целей, иначе %2 яркость 1-15 %3",
        "SENGO1_CAMERA_SET_AWB": "Установить режим баланса белого Sengo1 %1",
        "SENGO1_VISION_DETECTED": "Обнаружено",
        "SENGO1_VISION_DETECTED_1": "Обнаружено",
        "SENGO1_DETECTED_NUMBER": "Количество результатов",
        "SENGO1_VISION_RETURN": "вернуть",
        "SENGO1_VISION_RESULT": "результат",
        "SENGO1_GET_QRCODEVALUE": "строка результата",
        "SENGO1_COLOR": "цвет",
        "SENGO1_VISION_BLOCK": "блок",
        "SENGO1_SAVE_DATA": "сохранить данные как",
        "SENGO1_DEL_DATA": "удалить данные",
        
        // Vision type
        "SENGO1_VISION_VISIONCOLOR": "Цвет",
        "SENGO1_VISION_VISIONBLOB": "Blob",
        "SENGO1_VISION_VISIONBALL": "Мяч",
        "SENGO1_VISION_VISIONLINE": "Линия",
        "SENGO1_VISION_VISIONCARD": "Карта",
        "SENGO1_VISION_VISIONBODY": "Тело",
        "SENGO1_VISION_VISIONFACE": "Лицо",
        "SENGO1_VISION_VISIONQRCODE": "QrCode",
    
        // Color
        "SENGO1_COLOR_BLACK": "Черный",
        "SENGO1_COLOR_WHITE": "Белый",
        "SENGO1_COLOR_RED": "Красный",
        "SENGO1_COLOR_GREEN": "Зеленый",
        "SENGO1_COLOR_BLUE": "Синий",
        "SENGO1_COLOR_YELLOW": "Желтый",
        "SENGO1_COLOR_CYAN": "Циан",
        "SENGO1_COLOR_PURPLE": "Фиолетовый",
    
        // State Values
        "SENGO1_STATE_VALUE_X": "координата-x",
        "SENGO1_STATE_VALUE_Y": "координата-y",
        "SENGO1_STATE_VALUE_WIDTH": "ширина",
        "SENGO1_STATE_VALUE_HEIGHT": "высота",
        "SENGO1_STATE_VALUE_LABEL": "метка",
    
        // Color Values
        "SENGO1_STATE_VALUE_R": "значение CH красный",
        "SENGO1_STATE_VALUE_G": "значение CH зеленый",
        "SENGO1_STATE_VALUE_B": "значение CH синий",
    
        // Line Values
        "SENGO1_STATE_LINE_EX": "координата-x конечной точки",
        "SENGO1_STATE_LINE_EY": "координата-y конечной точки",
        "SENGO1_STATE_LINE_SX": "координата-x начальной точки",
        "SENGO1_STATE_LINE_SY": "координата-y начальной точки",
        "SENGO1_STATE_LINE_A": "угол наклона",
    
        // Ball Types
        "SENGO1_BALLTABLETENNIS": "Настольный теннис",
        "SENGO1_BALLTENNIS": "Теннис",
    
        // Card Types
        "SENGO1_CARD_FORWARD": "Вперед",
        "SENGO1_CARD_LEFT": "Влево",
        "SENGO1_CARD_RIGHT": "Вправо",
        "SENGO1_CARD_TURN_AROUND": "Развернуться",
        "SENGO1_CARD_PARK": "Парковка",
    
        // White Balance
        "SENGO1_AUTO": "Авто",
        "SENGO1_LOCK_AWB": "Заблокировать",
        "SENGO1_WHITE_LIGHT": "Белый свет",
        "SENGO1_YELLOW_LIGHT": "Желтый свет",
    
        // Detection messages
        "SENGO1_VISION_DETECTED_COUNT": "Sengo1 алгоритм %1 количество результатов",
        "SENGO1_VISION_GET_QR_VALUE": "Sengo1 алгоритм QrCode строка результата декодирования",
        "SENGO1_VISION_OBJ": "Sengo1 алгоритм %1 %2",
        "SENGO1_VISION_OBJ_COLOR": "Sengo1 алгоритм Цвет %1",
        "SENGO1_VISION_OBJ_LINE": "Sengo1 алгоритм Линия %1",
        "SENGO1_VISION_OBJ_QR": "Sengo1 алгоритм QrCode %1",
        "SENGO1_VISION_COLOR_DETECT": "Sengo1 алгоритм Цвет обнаружено %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "Sengo1 алгоритм Blob %1 блоб обнаружен",
        "SENGO1_VISION_CARD_DETECT": "Sengo1 алгоритм Карта обнаружена %1",
        "SENGO1_VISION_BALL_DETECT": "Sengo1 алгоритм Мяч обнаружен %1"
    });
    
    Object.assign(Blockly.ScratchMsgs.locales["zh-cn"], {
        "SENGO1_CATEGORY": "Sengo1视觉传感器",
        "SENGO1_SETUP": "设置模块",
        "SENGO1_RUN": "运行模块",
        "SENGO1_NAME": "  Sengo1  ",
        "SENGO1_BEGIN": "初始化   Sengo1   端口 %1 地址 %2",
        "SENGO1_SET_DEFAULT": "恢复默认参数",
        "SENGO1_VISION_SET_STATUS": "设置   Sengo1   %1 算法 %2",
        "SENGO1_VISION_SET_PARAM_NUM": "设置   Sengo1   算法 %1 参数组数量 %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "设置   Sengo1   色块检测   最小宽度 %1 最小高度 %2 颜色 %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "设置   Sengo1   颜色识别   中心横坐标 %1 中心纵坐标 %2 宽度 %3 高度 %4",
        "SENGO1_VISION_FACE_SET_PARAM": "设置   Sengo1   人脸识别   %1 编号 %2",
        "SENGO1_ENABLE": "开启",
        "SENGO1_DISABLE": "关闭",
        "SENGO1_LED_SET_COLOR": "设置   Sengo1   检测到目标时LED显示 %1 否则 %2 亮度(1~15) %3",
        "SENGO1_CAMERA_SET_AWB": "设置   Sengo1   白平衡模式 %1",
        "SENGO1_VISION_DETECTED": "检测到",
        "SENGO1_VISION_DETECTED_1": "识别到",
        "SENGO1_DETECTED_NUMBER": "返回的结果数量",
        "SENGO1_VISION_RETURN": "返回的",
        "SENGO1_VISION_RESULT": "结果",
        "SENGO1_GET_QRCODEVALUE": "返回的结果字符串",
        "SENGO1_COLOR": "颜色",
        "SENGO1_VISION_BLOCK": "色块",
        "SENGO1_SAVE_DATA": "保存数据并",
        "SENGO1_DEL_DATA": "删除数据",
        
        // 检测块完整消息
        "SENGO1_VISION_DETECTED_COUNT": "   Sengo1   %1 返回的结果数量",
        "SENGO1_VISION_GET_QR_VALUE": "   Sengo1   二维码   返回的结果字符串",
        "SENGO1_VISION_OBJ": "   Sengo1   %1 返回的 %2 ",
        "SENGO1_VISION_OBJ_COLOR": "   Sengo1   颜色识别   返回的 %1 ",
        "SENGO1_VISION_OBJ_LINE": "   Sengo1   线条检测   返回的 %1 ",
        "SENGO1_VISION_OBJ_QR": "   Sengo1   二维码   返回的 %1 ",
        "SENGO1_VISION_COLOR_DETECT": "   Sengo1   颜色识别   识别到 %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "   Sengo1   色块检测   检测到 %1 块",
        "SENGO1_VISION_CARD_DETECT": "   Sengo1   卡片识别   识别到 %1",
        "SENGO1_VISION_BALL_DETECT": "   Sengo1   球体识别   识别到 %1",
        
        // 视觉类型
        "SENGO1_VISION_VISIONCOLOR": "颜色识别",
        "SENGO1_VISION_VISIONBLOB": "色块检测",
        "SENGO1_VISION_VISIONBALL": "球体识别",
        "SENGO1_VISION_VISIONLINE": "线条检测",
        "SENGO1_VISION_VISIONCARD": "卡片识别",
        "SENGO1_VISION_VISIONBODY": "人体检测",
        "SENGO1_VISION_VISIONFACE": "人脸识别",
        "SENGO1_VISION_VISIONQRCODE": "二维码",

        // 颜色
        "SENGO1_COLOR_BLACK": "黑色",
        "SENGO1_COLOR_WHITE": "白色",
        "SENGO1_COLOR_RED": "红色",
        "SENGO1_COLOR_GREEN": "绿色",
        "SENGO1_COLOR_BLUE": "蓝色",
        "SENGO1_COLOR_YELLOW": "黄色",
        "SENGO1_COLOR_CYAN": "青色",
        "SENGO1_COLOR_PURPLE": "紫色",

        // 状态值
        "SENGO1_STATE_VALUE_X": "横坐标",
        "SENGO1_STATE_VALUE_Y": "纵坐标",
        "SENGO1_STATE_VALUE_WIDTH": "宽度",
        "SENGO1_STATE_VALUE_HEIGHT": "高度",
        "SENGO1_STATE_VALUE_LABEL": "标签",

        // 颜色值
        "SENGO1_STATE_VALUE_R": "红色分量值",
        "SENGO1_STATE_VALUE_G": "绿色分量值",
        "SENGO1_STATE_VALUE_B": "蓝色分量值",

        // 线条值
        "SENGO1_STATE_LINE_EX": "终点横坐标",
        "SENGO1_STATE_LINE_EY": "终点纵坐标",
        "SENGO1_STATE_LINE_SX": "起点横坐标",
        "SENGO1_STATE_LINE_SY": "起点纵坐标",
        "SENGO1_STATE_LINE_A": "倾斜角度",

        // 球类型
        "SENGO1_BALLTABLETENNIS": "乒乓球",
        "SENGO1_BALLTENNIS": "网球",

        // 卡片类型
        "SENGO1_CARD_FORWARD": "前进",
        "SENGO1_CARD_LEFT": "左转",
        "SENGO1_CARD_RIGHT": "右转",
        "SENGO1_CARD_TURN_AROUND": "掉头",
        "SENGO1_CARD_PARK": "停车",

        // 白平衡
        "SENGO1_AUTO": "自动",
        "SENGO1_LOCK_AWB": "锁定",
        "SENGO1_WHITE_LIGHT": "白光",
        "SENGO1_YELLOW_LIGHT": "黄光"
    });

    // 中文繁体翻译
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        "SENGO1_CATEGORY": "Sengo1視覺傳感器",
        "SENGO1_SETUP": "設置模塊",
        "SENGO1_RUN": "運行模塊",
        "SENGO1_NAME": "  Sengo1  ",
        "SENGO1_BEGIN": "初始化   Sengo1   端口 %1 地址 %2",
        "SENGO1_SET_DEFAULT": "恢復默認參數",
        "SENGO1_VISION_SET_STATUS": "設置   Sengo1   %1 算法 %2",
        "SENGO1_VISION_SET_PARAM_NUM": "設置   Sengo1   算法 %1 參數組數量 %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "設置   Sengo1   色塊檢測   最小寬度 %1 最小高度 %2 顏色 %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "設置   Sengo1   顏色識別   中心橫坐標 %1 中心縱坐標 %2 寬度 %3 高度 %4",
        "SENGO1_VISION_FACE_SET_PARAM": "設置   Sengo1   人臉識別   %1 編號 %2",
        "SENGO1_ENABLE": "開啟",
        "SENGO1_DISABLE": "關閉",
        "SENGO1_LED_SET_COLOR": "設置   Sengo1   檢測到目標時LED顯示 %1 否則 %2 亮度(1~15) %3",
        "SENGO1_CAMERA_SET_AWB": "設置   Sengo1   白平衡模式 %1",
        "SENGO1_VISION_DETECTED": "檢測到",
        "SENGO1_VISION_DETECTED_1": "識別到",
        "SENGO1_DETECTED_NUMBER": "返回的結果數量",
        "SENGO1_VISION_RETURN": "返回的",
        "SENGO1_VISION_RESULT": "結果",
        "SENGO1_GET_QRCODEVALUE": "返回的結果字符串",
        "SENGO1_COLOR": "顏色",
        "SENGO1_VISION_BLOCK": "色塊",
        "SENGO1_SAVE_DATA": "保存數據並",
        "SENGO1_DEL_DATA": "刪除數據",
        
        // 檢測塊完整消息
        "SENGO1_VISION_DETECTED_COUNT": "   Sengo1   %1 返回的結果數量",
        "SENGO1_VISION_GET_QR_VALUE": "   Sengo1   二維碼   返回的結果字符串",
        "SENGO1_VISION_OBJ": "   Sengo1   %1 返回的 %2 ",
        "SENGO1_VISION_OBJ_COLOR": "   Sengo1   顏色識別   返回的 %1 ",
        "SENGO1_VISION_OBJ_LINE": "   Sengo1   線條檢測   返回的 %1 ",
        "SENGO1_VISION_OBJ_QR": "   Sengo1   二維碼   返回的 %1 ",
        "SENGO1_VISION_COLOR_DETECT": "   Sengo1   顏色識別   識別到 %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "   Sengo1   色塊檢測   檢測到 %1 塊",
        "SENGO1_VISION_CARD_DETECT": "   Sengo1   卡片識別   識別到 %1",
        "SENGO1_VISION_BALL_DETECT": "   Sengo1   球體識別   識別到 %1",
        
        // 視覺類型
        "SENGO1_VISION_VISIONCOLOR": "顏色識別",
        "SENGO1_VISION_VISIONBLOB": "色塊檢測",
        "SENGO1_VISION_VISIONBALL": "球體識別",
        "SENGO1_VISION_VISIONLINE": "線條檢測",
        "SENGO1_VISION_VISIONCARD": "卡片識別",
        "SENGO1_VISION_VISIONBODY": "人體檢測",
        "SENGO1_VISION_VISIONFACE": "人臉識別",
        "SENGO1_VISION_VISIONQRCODE": "二維碼",

        // 顏色
        "SENGO1_COLOR_BLACK": "黑色",
        "SENGO1_COLOR_WHITE": "白色",
        "SENGO1_COLOR_RED": "紅色",
        "SENGO1_COLOR_GREEN": "綠色",
        "SENGO1_COLOR_BLUE": "藍色",
        "SENGO1_COLOR_YELLOW": "黃色",
        "SENGO1_COLOR_CYAN": "青色",
        "SENGO1_COLOR_PURPLE": "紫色",

        // 狀態值
        "SENGO1_STATE_VALUE_X": "橫坐標",
        "SENGO1_STATE_VALUE_Y": "縱坐標",
        "SENGO1_STATE_VALUE_WIDTH": "寬度",
        "SENGO1_STATE_VALUE_HEIGHT": "高度",
        "SENGO1_STATE_VALUE_LABEL": "標籤",

        // 顏色值
        "SENGO1_STATE_VALUE_R": "紅色分量值",
        "SENGO1_STATE_VALUE_G": "綠色分量值",
        "SENGO1_STATE_VALUE_B": "藍色分量值",

        // 線條值
        "SENGO1_STATE_LINE_EX": "終點橫坐標",
        "SENGO1_STATE_LINE_EY": "終點縱坐標",
        "SENGO1_STATE_LINE_SX": "起點橫坐標",
        "SENGO1_STATE_LINE_SY": "起點縱坐標",
        "SENGO1_STATE_LINE_A": "傾斜角度",

        // 球類型
        "SENGO1_BALLTABLETENNIS": "乒乓球",
        "SENGO1_BALLTENNIS": "網球",

        // 卡片類型
        "SENGO1_CARD_FORWARD": "前進",
        "SENGO1_CARD_LEFT": "左轉",
        "SENGO1_CARD_RIGHT": "右轉",
        "SENGO1_CARD_TURN_AROUND": "掉頭",
        "SENGO1_CARD_PARK": "停車",

        // 白平衡
        "SENGO1_AUTO": "自動",
        "SENGO1_LOCK_AWB": "鎖定",
        "SENGO1_WHITE_LIGHT": "白光",
        "SENGO1_YELLOW_LIGHT": "黃光"
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        "SENGO1_CATEGORY": "Sensore di Visione Sengo1",
        "SENGO1_SETUP": "Modulo di Configurazione",
        "SENGO1_RUN": "Esegui Modulo",
        "SENGO1_NAME": "Sengo1",
        "SENGO1_BEGIN": "Inizializza porta Sengo1 %1 indirizzo %2",
        "SENGO1_SET_DEFAULT": "Ripristina parametri predefiniti",
        "SENGO1_VISION_SET_STATUS": "Imposta Sengo1 %1 algoritmo %2",
        "SENGO1_VISION_SET_PARAM_NUM": "Imposta il numero di gruppi di parametri dell'algoritmo Sengo1 %1 %2",
        "SENGO1_VISION_BLOB_SET_PARAM": "Imposta Sengo1 algoritmo Blob larghezza minima %1 altezza minima %2 colore %3",
        "SENGO1_VISION_COLOR_SET_PARAM": "Imposta Sengo1 algoritmo Colore coordinata-x %1 coordinata-y %2 larghezza %3 altezza %4",
        "SENGO1_VISION_FACE_SET_PARAM": "Imposta Sengo1 algoritmo Viso %1 ID %2",
        "SENGO1_ENABLE": "eseguire",
        "SENGO1_DISABLE": "fermare",
        "SENGO1_LED_SET_COLOR": "Imposta il colore dei LED Sengo1 %1 quando vengono rilevati obiettivi, altrimenti %2 luminosità 1-15 %3",
        "SENGO1_CAMERA_SET_AWB": "Imposta la modalità bilanciamento del bianco Sengo1 %1",
        "SENGO1_VISION_DETECTED": "Rilevato",
        "SENGO1_VISION_DETECTED_1": "Rilevato",
        "SENGO1_DETECTED_NUMBER": "numero di risultati",
        "SENGO1_VISION_RETURN": "restituire",
        "SENGO1_VISION_RESULT": "risultato",
        "SENGO1_GET_QRCODEVALUE": "stringa di risultato",
        "SENGO1_COLOR": "colore",
        "SENGO1_VISION_BLOCK": "blocco",
        "SENGO1_SAVE_DATA": "salva dati come",
        "SENGO1_DEL_DATA": "elimina dati",
        
        // Vision type
        "SENGO1_VISION_VISIONCOLOR": "Colore",
        "SENGO1_VISION_VISIONBLOB": "Blob",
        "SENGO1_VISION_VISIONBALL": "Palla",
        "SENGO1_VISION_VISIONLINE": "Linea",
        "SENGO1_VISION_VISIONCARD": "Carta",
        "SENGO1_VISION_VISIONBODY": "Corpo",
        "SENGO1_VISION_VISIONFACE": "Viso",
        "SENGO1_VISION_VISIONQRCODE": "QrCode",
    
        // Color
        "SENGO1_COLOR_BLACK": "Nero",
        "SENGO1_COLOR_WHITE": "Bianco",
        "SENGO1_COLOR_RED": "Rosso",
        "SENGO1_COLOR_GREEN": "Verde",
        "SENGO1_COLOR_BLUE": "Blu",
        "SENGO1_COLOR_YELLOW": "Giallo",
        "SENGO1_COLOR_CYAN": "Ciano",
        "SENGO1_COLOR_PURPLE": "Viola",
    
        // State Values
        "SENGO1_STATE_VALUE_X": "coordinata-x",
        "SENGO1_STATE_VALUE_Y": "coordinata-y",
        "SENGO1_STATE_VALUE_WIDTH": "larghezza",
        "SENGO1_STATE_VALUE_HEIGHT": "altezza",
        "SENGO1_STATE_VALUE_LABEL": "etichetta",
    
        // Color Values
        "SENGO1_STATE_VALUE_R": "valore CH rosso",
        "SENGO1_STATE_VALUE_G": "valore CH verde",
        "SENGO1_STATE_VALUE_B": "valore CH blu",
    
        // Line Values
        "SENGO1_STATE_LINE_EX": "coordinata-x del punto finale",
        "SENGO1_STATE_LINE_EY": "coordinata-y del punto finale",
        "SENGO1_STATE_LINE_SX": "coordinata-x del punto iniziale",
        "SENGO1_STATE_LINE_SY": "coordinata-y del punto iniziale",
        "SENGO1_STATE_LINE_A": "angolo di inclinazione",
    
        // Ball Types
        "SENGO1_BALLTABLETENNIS": "Tennis da Tavolo",
        "SENGO1_BALLTENNIS": "Tennis",
    
        // Card Types
        "SENGO1_CARD_FORWARD": "Avanti",
        "SENGO1_CARD_LEFT": "Sinistra",
        "SENGO1_CARD_RIGHT": "Destra",
        "SENGO1_CARD_TURN_AROUND": "Girare",
        "SENGO1_CARD_PARK": "Parcheggiare",
    
        // White Balance
        "SENGO1_AUTO": "Automatico",
        "SENGO1_LOCK_AWB": "Bloccare",
        "SENGO1_WHITE_LIGHT": "Luce Bianca",
        "SENGO1_YELLOW_LIGHT": "Luce Gialla",
    
        // Detection messages
        "SENGO1_VISION_DETECTED_COUNT": "Sengo1 algoritmo %1 numero di risultati",
        "SENGO1_VISION_GET_QR_VALUE": "Sengo1 algoritmo QrCode stringa del risultato della decodifica",
        "SENGO1_VISION_OBJ": "Sengo1 algoritmo %1 %2",
        "SENGO1_VISION_OBJ_COLOR": "Sengo1 algoritmo Colore %1",
        "SENGO1_VISION_OBJ_LINE": "Sengo1 algoritmo Linea %1",
        "SENGO1_VISION_OBJ_QR": "Sengo1 algoritmo QrCode %1",
        "SENGO1_VISION_COLOR_DETECT": "Sengo1 algoritmo Colore rilevato %1",
        "SENGO1_VISION_CARD_BLOB_DETECT": "Sengo1 algoritmo Blob rilevato %1 blob",
        "SENGO1_VISION_CARD_DETECT": "Sengo1 algoritmo Carta riconosciuta %1",
        "SENGO1_VISION_BALL_DETECT": "Sengo1 algoritmo Palla riconosciuta %1"
    });

    return Blockly;
}

exports = addMsg; 