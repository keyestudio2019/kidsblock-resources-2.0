/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS_VARIABLE_LABEL:'Variable Type',
        KS_variables_declare:'Declare %1 variable Type %2 Name %3 Assigned to %4',
        KS_variables_set:'Set %1 variable by %2',
        KS_variables_change:'Change %1 variable mode %2',
        KS_variables_value: 'variable %1',
        KS_variables_setString:'Set %1 String variable by %2',
        KS_global:'Global',
        KS_local:'Local',
        KS_MATH_INT: 'int',
        KS_MATH_LONG: 'long',
        KS_MATH_FLOAT: 'float',
        KS_MATH_BOOLEAN: 'boolean',
        KS_MATH_BYTE: 'byte',
        KS_MATH_CHAR: 'char',
        KS_MATH_STRING: 'string',
        KS_MATH_UNSIGNED_INT: 'unsigned int',
        KS_MATH_WORD: 'word',
        KS_MATH_UNSIGNED_LONG: 'unsigned long',
        KS_MATH_UNSIGNED_CHAR: 'unsigned char',
        KS_MATH_DOUBLE: 'double',

        KS_TEXT_LABEL:'TEXT',
        KS_char: 'char%1',
        KS_string: 'string%1',
        KS_data: '%1',

        KS_LOGIC_LABEL:'logic',
        KS_judge:'%1 %2 %3',
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: 'LED pin%1 out%2',
        LED_ANALOG: 'LED  %1 analogWrite%2 ',
        RELAY_CATEGORY: 'Relay',
        RELAY_STATE: 'relay pin%1 out%2',
        BUZZER_CATEGORY: 'Buzzer',
        BUZZER_TONE: 'Tone PIN#%1 frequency%2',
        BUZZER_TONE_D: 'Tone PIN#%1 frequency%2 duration%3',
        BUZZER_MUSIC: 'Tone PIN#%1 play music%2',
        BUZZER_NOTONE: 'NoTone%1',
        BUTTON_CATEGORY: 'Button',
        BUTTON_READ_STATE: 'Interface %1 button was be pushed？',
        BUTTON_READ_VALUE: 'The state value of button in interface %1',
        PIR_CATEGORY: 'PIR',
        PIR_READ_VALUE: 'Read interface %1 PIR motion sensor',
        LIGHTSENSOR_CATEGORY: 'Light',
        LIGHTSENSOR_READ_VALUE: 'read the value of light %1',
        GASSENSOR_CATEGORY: 'Gas',
        GASSENSOR_READ_VALUE: 'read the value of gas %1',
        STEAMSENSOR_CATEGORY: 'Steam',
        STEAMSENSOR_READ_VALUE: 'read the value of steam %1',
        SOILSENSOR_CATEGORY: 'Soil',
        SOILSENSOR_READ_VALUE: 'read the value of soil humidity%1',
        MOTOR130_CATEGORY: 'Fan',
        MOTOR130_DIGITAL: 'Fan Motor INA#%1 State%2 INB#%3 State%4',
        MOTOR130_ANALOG: 'Fan Motor INA#%1 State%2 INB#%3 analogWrite%4',
        KS_SERVO_CATEGORY: 'Servo',
        KS_SERVO_ANGLE: 'Servo PIN#%1 degree%2 delay%3',
        KS_SERVO_READ: 'Servo PIN#%1 read degree',
        LCD_CATEGORY: 'LCD',
        LCD_INIT: 'init lcd I2C address %1',
        LCD_SETCURSORPOSITION: 'set lcd cursor position x: %1 y: %2',
        LCD_PRINT: 'lcd print %1',
        LCD_CLEAR: 'clear lcd',
        LCD_SETBACKLIGHT: 'set lcd back light %1',
        LCD_SATE_ON: 'on',
        LCD_SATE_OFF: 'off',
        LCD_SETCURSORSTYLE: 'set lcd cursor %1 style %2',
        LCD_SATE_DISPLAY: 'display',
        LCD_SATE_HIDE: 'hide',
        LCD_STYLE_BLINK: 'blink',
        LCD_STYLE_NOBLINK: 'no-blink',
        BLE_SERIAL_CATEGORY: 'Read BLE data',
        BLE_DATA: 'Serial readString Until #',
   
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        KS_VARIABLE_LABEL:'Variablentyp',
        KS_variables_declare:'Deklarieren Sie %1 Variablentyp %2 Name %3 Zugewiesen an %4',
        KS_variables_set:'Variable %1 um %2 setzen',
        KS_variables_change:'Variablenmodus %1 %2 ändern',
        KS_variables_value: 'Variable %1',
        KS_variables_setString:'Setze %1 String-Variable um %2',
        KS_global:'Global',
        KS_local:'Lokal',
        KS_MATH_INT: 'int',
        KS_MATH_LONG: 'lang',
        KS_MATH_FLOAT: 'float',
        KS_MATH_BOOLEAN: 'boolean',
        KS_MATH_BYTE: 'Byte',
        KS_MATH_CHAR: 'char',
        KS_MATH_STRING: 'Zeichenfolge',
        KS_MATH_UNSIGNED_INT: 'unsigned int',
        KS_MATH_WORD: 'Wort',
        KS_MATH_UNSIGNED_LONG: 'unsigned long',
        KS_MATH_UNSIGNED_CHAR: 'unsigned char',
        KS_MATH_DOUBLE: 'double',

        KS_TEXT_LABEL:'TEXT',
        KS_char: 'char%1',
        KS_string: 'string%1',
        KS_data: '%1',

        KS_LOGIC_LABEL:'Logik',
        KS_judge:'%1 %2 %3',
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: 'LED-Pin%1 aus%2',
        LED_ANALOG: 'LED %1 analogWrite%2 ',
        RELAY_CATEGORY: 'Relais',
        RELAY_STATE: 'Relais-Pin%1 aus%2',
        BUZZER_CATEGORY: 'Summer',
        BUZZER_TONE: 'Ton-PIN#%1 Frequenz%2',
        BUZZER_TONE_D: 'Ton-PIN#%1 Häufigkeit%2 Dauer%3',
        BUZZER_MUSIC: 'Ton PIN#%1 Musik abspielen%2',
        BUZZER_NOTONE: 'NoTone%1',
        BUTTON_CATEGORY: 'Schaltfläche',
        BUTTON_READ_STATE: 'Schaltfläche %1 der Schnittstelle wurde gedrückt?',
        BUTTON_READ_VALUE: 'Der Statuswert der Schaltfläche in Schnittstelle %1',
        PIR_CATEGORY: 'PIR',
        PIR_READ_VALUE: 'Schnittstelle %1 PIR-Bewegungssensor lesen',
        LIGHTSENSOR_CATEGORY: 'Licht',
        LIGHTSENSOR_READ_VALUE: 'den Lichtwert %1 lesen',
        GASSENSOR_CATEGORY: 'Gas',
        GASSENSOR_READ_VALUE: 'den Wert von Gas %1 lesen',
        STEAMSENSOR_CATEGORY: 'Dampf',
        STEAMSENSOR_READ_VALUE: 'Den Wert von Dampf %1 lesen',
        SOILSENSOR_CATEGORY: 'Boden',
        SOILSENSOR_READ_VALUE: 'Wert der Bodenfeuchtigkeit %1 lesen',
        MOTOR130_CATEGORY: 'Lüfter',
        MOTOR130_DIGITAL: 'Lüftermotor INA#%1 Status%2 INB#%3 Status%4',
        MOTOR130_ANALOG: 'Lüftermotor INA#%1 State%2 INB#%3 analogWrite%4',
        KS_SERVO_CATEGORY: 'Servo',
        KS_SERVO_ANGLE: 'Servo PIN#%1 Grad%2 Verzögerung%3',
        KS_SERVO_READ: 'Servo PIN#%1 Lesegrad',
        LCD_CATEGORY: 'LCD',
        LCD_INIT: 'LCD-I2C-Adresse %1 initialisieren',
        LCD_SETCURSORPOSITION: 'LCD-Cursorposition x: %1 y: %2 festlegen',
        LCD_PRINT: 'LCD-Druck %1',
        LCD_CLEAR: 'LCD löschen',
        LCD_SETBACKLIGHT: 'LCD-Hintergrundbeleuchtung %1 einstellen',
        LCD_SATE_ON: 'ein',
        LCD_SATE_OFF: 'aus',
        LCD_SETCURSORSTYLE: 'Setze den LCD-Cursor %1 im Stil %2',
        LCD_SATE_DISPLAY: 'Anzeige',
        LCD_SATE_HIDE: 'verstecken',
        LCD_STYLE_BLINK: 'blinkt',
        LCD_STYLE_NOBLINK: 'kein Blinken',
        BLE_SERIAL_CATEGORY: 'BLE-Daten lesen',
        BLE_DATA: 'Serieller readString bis #',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        KS_VARIABLE_LABEL:'Tipo de variable',
        KS_variables_declare:'Declarar %1 variable Tipo %2 Nombre %3 Asignado a %4',
        KS_variables_set:'Establecer %1 variable por %2',
        KS_variables_change:'Cambiar %1 modo variable %2',
        KS_variables_value: 'variable %1',
        KS_variables_setString:'Establecer %1 variable de cadena por %2',
        KS_global:'Global',
        KS_local:'Local',
        KS_MATH_INT: 'int',
        KS_MATH_LONG: 'largo',
        KS_MATH_FLOAT: 'flotante',
        KS_MATH_BOOLEAN: 'booleano',
        KS_MATH_BYTE: 'byte',
        KS_MATH_CHAR: 'carácter',
        KS_MATH_STRING: 'cadena',
        KS_MATH_UNSIGNED_INT: 'int sin firmar',
        KS_MATH_WORD: 'palabra',
        KS_MATH_UNSIGNED_LONG: 'largo sin firmar',
        KS_MATH_UNSIGNED_CHAR: 'caracter sin firmar',
        KS_MATH_DOUBLE: 'doble',

        KS_TEXT_LABEL:'TEXTO',
        KS_char: 'char%1',
        KS_string: 'cadena%1',
        KS_data: '%1',

        KS_LOGIC_LABEL:'lógica',
        KS_judge:'%1 %2 %3',
        CATEGORÍA_LED: 'LED',
        LED_SET_LED_STATE: 'Pin de LED%1 fuera%2',
        LED_ANALOG: 'LED %1 escritura analógica%2 ',
        RELAY_CATEGORY: 'Relé',
        RELAY_STATE: 'pin de relé%1 fuera%2',
        BUZZER_CATEGORY: 'Zumbador',
        BUZZER_TONE: 'Tono PIN#%1 frecuencia%2',
        BUZZER_TONE_D: 'Tono PIN#%1 frecuencia%2 duración%3',
        BUZZER_MUSIC: 'Tono PIN#%1 reproducir música%2',
        BUZZER_NOTONE: 'Sin Tono%1',
        BUTTON_CATEGORY: 'Botón',
        BUTTON_READ_STATE: '¿Se presionó el botón de la interfaz %1?',
        BUTTON_READ_VALUE: 'El valor de estado del botón en la interfaz %1',
        PIR_CATEGORÍA: 'PIR',
        PIR_READ_VALUE: 'Interfaz de lectura %1 sensor de movimiento PIR',
        LIGHTSENSOR_CATEGORY: 'Luz',
        LIGHTSENSOR_READ_VALUE: 'leer el valor de la luz %1',
        GASSENSOR_CATEGORY: 'Gas',
        GASSENSOR_READ_VALUE: 'leer el valor del gas %1',
        STEAMSENSOR_CATEGORY: 'Vapor',
        STEAMSENSOR_READ_VALUE: 'leer el valor de vapor %1',
        SOILSENSOR_CATEGORY: 'Suelo',
        SOILSENSOR_READ_VALUE: 'leer el valor de la humedad del suelo%1',
        MOTOR130_CATEGORY: 'Ventilador',
        MOTOR130_DIGITAL: 'Motor Ventilador INA#%1 Estado%2 INB#%3 Estado%4',
        MOTOR130_ANALOG: 'Motor ventilador INA#%1 Estado%2 INB#%3 analogWrite%4',
        KS_SERVO_CATEGORY: 'Servo',
        KS_SERVO_ANGLE: 'Servo PIN#%1 grado%2 retraso%3',
        KS_SERVO_READ: 'Servo PIN#%1 grado de lectura',
        CATEGORÍA_LCD: 'LCD',
        LCD_INIT: 'iniciar dirección I2C lcd %1',
        LCD_SETCURSORPOSITION: 'establecer la posición del cursor LCD x: %1 y: %2',
        LCD_PRINT: 'imprimir LCD %1',
        LCD_CLEAR: 'borrar lcd',
        LCD_SETBACKLIGHT: 'establecer luz de fondo LCD %1',
        LCD_SATE_ON: 'encendido',
        LCD_SATE_OFF: 'apagado',
        LCD_SETCURSORSTYLE: 'establecer cursor lcd %1 estilo %2',
        LCD_SATE_DISPLAY: 'pantalla',
        LCD_SATE_HIDE: 'ocultar',
        LCD_STYLE_BLINK: 'parpadeo',
        LCD_STYLE_NOBLINK: 'sin parpadeo',
        BLE_SERIAL_CATEGORY: 'Leer datos BLE',
        BLE_DATA: 'Cadena de lectura serial hasta #',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        KS_VARIABLE_LABEL:'Type de variable',
         KS_variables_declare:'Déclarer %1 variable Type %2 Nom %3 Attribué à %4',
         KS_variables_set: 'Définir la variable %1 par %2',
         KS_variables_change:'Changer %1 mode variable %2',
         KS_variables_value: 'variable %1',
         KS_variables_setString: 'Définir la variable chaîne %1 par %2',
         KS_global:'Global',
         KS_local:'Local',
         KS_MATH_INT: 'entier',
         KS_MATH_LONG: 'long',
         KS_MATH_FLOAT: 'flottant',
         KS_MATH_BOOLEAN: 'booléen',
         KS_MATH_BYTE: 'octet',
         KS_MATH_CHAR: 'car',
         KS_MATH_STRING: 'chaîne',
         KS_MATH_UNSIGNED_INT: 'entier non signé',
         KS_MATH_WORD: 'mot',
         KS_MATH_UNSIGNED_LONG: 'long non signé',
         KS_MATH_UNSIGNED_CHAR: 'caractère non signé',
         KS_MATH_DOUBLE: 'doubler',

         KS_TEXT_LABEL:'TEXTE',
         KS_char: 'car%1',
         KS_string: 'chaîne%1',
         KS_data: '%1',

         KS_LOGIC_LABEL:'logique',
         KS_judge:'%1 %2 %3',
         LED_CATEGORY: 'DEL',
         LED_SET_LED_STATE: 'Broche LED%1 sortie%2',
         LED_ANALOG: 'LED %1 analogWrite%2 ',
         RELAY_CATEGORY: 'Relais',
         RELAY_STATE: 'broche relais%1 sortie%2',
         BUZZER_CATEGORY: "Sonnerie",
         BUZZER_TONE: 'Tonalité PIN #%1 fréquence%2',
         BUZZER_TONE_D: 'Tonalité PIN #%1 fréquence%2 durée%3',
         BUZZER_MUSIC: 'Tone PIN#%1 play music%2',
         BUZZER_NOTONE: 'Pas de tonalité%1',
         BUTTON_CATEGORY: 'Bouton',
         BUTTON_READ_STATE: 'Le bouton %1 de l"interface a été enfoncé?',
         BUTTON_READ_VALUE: 'La valeur d"état du bouton dans l"interface %1',
         PIR_CATEGORY: 'PIR',
         PIR_READ_VALUE: 'Lire l"interface %1 du capteur de mouvement PIR',
         LIGHTSENSOR_CATEGORY: "Lumière",
         LIGHTSENSOR_READ_VALUE: 'Lire la valeur de la lumière %1',
         GASSENSOR_CATEGORY: "Gaz",
         GASSENSOR_READ_VALUE: 'lecture de la valeur du gaz %1',
         STEAMSENSOR_CATEGORY: 'Vapeur',
         STEAMSENSOR_READ_VALUE: 'lire la valeur de la vapeur %1',
         SOILSENSOR_CATEGORY: 'Sol',
         SOILSENSOR_READ_VALUE: 'lire la valeur de l"humidité du sol%1',
         MOTOR130_CATEGORY: 'Ventilateur',
         MOTOR130_DIGITAL: 'Moteur de ventilateur INA#%1 État%2 INB#%3 État%4',
         MOTOR130_ANALOG: 'Ina du moteur de ventilateur#%1 État%2 INB#%3 analogWrite%4',
         KS_SERVO_CATEGORY: 'Servo',
         KS_SERVO_ANGLE: 'PIN servo#%1 degré%2 retard%3',
         KS_SERVO_READ: 'Servo PIN #%1 degré de lecture',
         LCD_CATEGORY: 'LCD',
         LCD_INIT: 'init lcd adresse I2C %1',
         LCD_SETCURSORPOSITION: 'définir la position du curseur lcd x: %1 y: %2',
         LCD_PRINT: 'impression LCD %1',
         LCD_CLEAR: 'effacer l"écran LCD',
         LCD_SETBACKLIGHT: 'régler le rétroéclairage LCD %1',
         LCD_SATE_ON: 'activé',
         LCD_SATE_OFF: 'désactivé',
         LCD_SETCURSORSTYLE: 'définir le curseur lcd %1 style %2',
         LCD_SATE_DISPLAY: 'affichage',
         LCD_SATE_HIDE: 'masquer',
         LCD_STYLE_BLINK: 'clignote',
         LCD_STYLE_NOBLINK: 'pas de clignotement',
         BLE_SERIAL_CATEGORY: 'Lire les données BLE',
         BLE_DATA: 'Lire la chaîne en série jusqu"à #',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        KS_VARIABLE_LABEL:'変数タイプ',
         KS_variables_declare:'%1 変数を宣言します。タイプ %2 名前 %3 を %4 に割り当てます',
         KS_variables_set:'%1 変数を %2 で設定',
         KS_variables_change:'%1 変数モード %2 を変更',
         KS_variables_value: '変数 %1',
         KS_variables_setString:'%1 文字列変数を %2 で設定',
         KS_global:'グローバル',
         KS_local:'ローカル',
         KS_MATH_INT: 'int',
         KS_MATH_LONG: '長い',
         KS_MATH_FLOAT: '浮動小数点',
         KS_MATH_BOOLEAN: 'ブール値',
         KS_MATH_BYTE: 'バイト',
         KS_MATH_CHAR: '文字',
         KS_MATH_STRING: '文字列',
         KS_MATH_UNSIGNED_INT: '符号なし整数',
         KS_MATH_WORD: '単語',
         KS_MATH_UNSIGNED_LONG: '符号なしロング',
         KS_MATH_UNSIGNED_CHAR: '符号なし文字',
         KS_MATH_DOUBLE: '倍精度',

         KS_TEXT_LABEL:'テキスト',
         KS_char: 'char%1',
         KS_string: 'string%1',
         KS_data: '%1',

         KS_LOGIC_LABEL:'ロジック',
         KS_judge:'%1 %2 %3',
         LED_CATEGORY: 'LED',
         LED_SET_LED_STATE: 'LED ピン %1 出力 %2',
         LED_ANALOG: 'LED %1 アナログ書き込み%2 ',
         RELAY_CATEGORY: 'リレー',
         RELAY_STATE: 'リレー ピン %1 出力 %2',
         BUZZER_CATEGORY: 'ブザー',
         BUZZER_TONE: 'トーン PIN#%1 頻度%2',
         BUZZER_TONE_D: 'トーン PIN#%1 頻度%2 期間%3',
         BUZZER_MUSIC: 'トーン PIN#%1 音楽%2 を再生',
         BUZZER_NOTONE: 'NoTone%1',
         BUTTON_CATEGORY: 'ボタン',
         BUTTON_READ_STATE: 'インターフェイス %1 ボタンが押されました?',
         BUTTON_READ_VALUE: 'インターフェイス %1 のボタンの状態値',
         PIR_CATEGORY: 'PIR',
         PIR_READ_VALUE: 'インターフェイス %1 PIR モーション センサーを読み取り',
         LIGHTSENSOR_CATEGORY: 'ライト',
         LIGHTSENSOR_READ_VALUE: 'ライト %1 の値を読み取ります',
         GASSENSOR_CATEGORY: 'ガス',
         GASSENSOR_READ_VALUE: 'ガス %1 の値を読み取ります',
         STEAMSENSOR_CATEGORY: 'スチーム',
         STEAMSENSOR_READ_VALUE: '蒸気 %1 の値を読み取ります',
         SOILSENSOR_CATEGORY: '土壌',
         SOILSENSOR_READ_VALUE: '土壌湿度%1の値を読み取ります',
         MOTOR130_CATEGORY: 'ファン',
         MOTOR130_DIGITAL: 'ファン モーター INA#%1 状態%2 INB#%3 状態%4',
         MOTOR130_ANALOG: 'ファン モーター INA#%1 状態%2 INB#%3 アナログ書き込み%4',
         KS_SERVO_CATEGORY: 'サーボ',
         KS_SERVO_ANGLE: 'サーボ PIN#%1 度%2 遅延%3',
         KS_SERVO_READ: 'サーボ PIN#%1 読み取り度',
         LCD_CATEGORY: 'LCD',
         LCD_INIT: '液晶 I2C アドレス %1 の初期化',
         LCD_SETCURSORPOSITION: 'LCD カーソル位置を設定 x: %1 y: %2',
         LCD_PRINT: '液晶印刷 %1',
         LCD_CLEAR: '液晶をクリア',
         LCD_SETBACKLIGHT: 'LCD バックライト %1 を設定',
         LCD_SATE_ON: 'オン',
         LCD_SATE_OFF: 'オフ',
         LCD_SETCURSORSTYLE: 'LCD カーソル %1 スタイル %2 を設定',
         LCD_SATE_DISPLAY: 'ディスプレイ',
         LCD_SATE_HIDE: '非表示',
         LCD_STYLE_BLINK: '点滅',
         LCD_STYLE_NOBLINK: 'まばたきなし',
         BLE_SERIAL_CATEGORY: 'BLE データの読み取り',
         BLE_DATA: '# までのシリアル readString',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        KS_VARIABLE_LABEL:'변수 유형',
         KS_variables_declare:'%1 변수 유형 %2 이름 %3 선언 %4에 할당됨',
         KS_variables_set:'%1 변수를 %2로 설정',
         KS_variables_change:'%1 변수 모드 %2 변경',
         KS_variables_value: '변수 %1',
         KS_variables_setString:'%1 문자열 변수를 %2로 설정',
         KS_global:'글로벌',
         KS_local:'로컬',
         KS_MATH_INT: '정수',
         KS_MATH_LONG: '긴',
         KS_MATH_FLOAT: '부동',
         KS_MATH_BOOLEAN: '부울',
         KS_MATH_BYTE: '바이트',
         KS_MATH_CHAR: '문자',
         KS_MATH_STRING: '문자열',
         KS_MATH_UNSIGNED_INT: '부호 없는 정수',
         KS_MATH_WORD: '단어',
         KS_MATH_UNSIGNED_LONG: '부호 없는 롱',
         KS_MATH_UNSIGNED_CHAR: '부호 없는 문자',
         KS_MATH_DOUBLE: '더블',

         KS_TEXT_LABEL:'텍스트',
         KS_char: '문자%1',
         KS_string: '문자열%1',
         KS_data: '%1',

         KS_LOGIC_LABEL:'논리',
         KS_judge:'%1 %2 %3',
         LED_CATEGORY: 'LED',
         LED_SET_LED_STATE: 'LED 핀%1 아웃%2',
         LED_ANALOG: 'LED %1 analogWrite%2 ',
         RELAY_CATEGORY: '릴레이',
         RELAY_STATE: '릴레이 핀%1 출력%2',
         BUZZER_CATEGORY: '부저',
         BUZZER_TONE: '톤 PIN#%1 주파수%2',
         BUZZER_TONE_D: 'Tone PIN#%1 주파수%2 지속시간%3',
         BUZZER_MUSIC: 'Tone PIN#%1 음악 재생%2',
         BUZZER_NOTONE: '노톤%1',
         BUTTON_CATEGORY: '버튼',
         BUTTON_READ_STATE: '인터페이스 %1 버튼이 눌렸습니까?',
         BUTTON_READ_VALUE: '인터페이스 %1에 있는 버튼의 상태 값',
         PIR_CATEGORY: '피르',
         PIR_READ_VALUE: '인터페이스 %1 읽기 PIR 모션 센서',
         LIGHTSENSOR_CATEGORY: '조명',
         LIGHTSENSOR_READ_VALUE: '라이트 %1의 값 읽기',
         GASSENSOR_CATEGORY: '가스',
         GASSENSOR_READ_VALUE: '가스 %1의 값 읽기',
         STEAMSENSOR_CATEGORY: '증기',
         STEAMSENSOR_READ_VALUE: '증기 %1의 값 읽기',
         SOILSENSOR_CATEGORY: '토양',
         SOILSENSOR_READ_VALUE: '토양 습도%1 값 읽기',
         MOTOR130_CATEGORY: '팬',
         MOTOR130_DIGITAL: '팬 모터 INA#%1 상태%2 INB#%3 상태%4',
         MOTOR130_ANALOG: '팬 모터 INA#%1 상태%2 INB#%3 analogWrite%4',
         KS_SERVO_CATEGORY: '서보',
         KS_SERVO_ANGLE: '서보 PIN#%1도%2 지연%3',
         KS_SERVO_READ: '서보 PIN#%1 읽기 정도',
         LCD_CATEGORY: 'LCD',
         LCD_INIT: '초기화 LCD I2C 주소 %1',
         LCD_SETCURSORPOSITION: 'LCD 커서 위치 설정 x: %1 y: %2',
         LCD_PRINT: 'LCD 인쇄 %1',
         LCD_CLEAR: 'LCD 지우기',
         LCD_SETBACKLIGHT: 'LCD 백라이트 %1 설정',
         LCD_SATE_ON: '켜짐',
         LCD_SATE_OFF: '꺼짐',
         LCD_SETCURSORSTYLE: 'LCD 커서 %1 스타일 %2 설정',
         LCD_SATE_DISPLAY: '디스플레이',
         LCD_SATE_HIDE: '숨기기',
         LCD_STYLE_BLINK: '깜박임',
         LCD_STYLE_NOBLINK: '깜박이지 않음',
         BLE_SERIAL_CATEGORY: 'BLE 데이터 읽기',
         BLE_DATA: '#까지 직렬 readString',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        KS_VARIABLE_LABEL:'Typ zmiennej',
        KS_variables_declare:'Deklaracja %1 zmiennej Typ %2 Nazwa %3 Przypisana do %4',
        KS_variables_set:'Ustaw zmienną %1 na %2',
        KS_variables_change:'Zmień tryb zmiennej %1 %2',
        KS_variables_value: 'zmienna %1',
        KS_variables_setString:'Ustaw zmienną łańcuchową %1 o %2',
        KS_global:'Globalny',
        KS_local:'Lokalny',
        KS_MATH_INT: 'int',
        KS_MATH_LONG: 'długi',
        KS_MATH_FLOAT: 'pływa',
        KS_MATH_BOOLEAN: 'wartość logiczna',
        KS_MATH_BYTE: 'bajt',
        KS_MATH_CHAR: 'znak',
        KS_MATH_STRING: 'ciąg znaków',
        KS_MATH_UNSIGNED_INT: 'bez znaku int',
        KS_MATH_WORD: 'słowo',
        KS_MATH_UNSIGNED_LONG: 'długi bez znaku',
        KS_MATH_UNSIGNED_CHAR: 'znak bez znaku',
        KS_MATH_DOUBLE: 'podwójne',

        KS_TEXT_LABEL:'TEKST',
        KS_char: 'znak%1',
        KS_string: 'ciąg%1',
        KS_data: '%1',

        KS_LOGIC_LABEL:'logika',
        KS_judge:'%1%2%3',
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: 'LED pin%1 out%2',
        LED_ANALOG: 'LED %1 analogWrite%2',
        RELAY_CATEGORY: 'Przekaźnik',
        RELAY_STATE: 'pin przekaźnika%1 out%2',
        BUZZER_CATEGORY: 'Brzęczyk',
        BUZZER_TONE: 'Ton PIN#%1 częstotliwość%2',
        BUZZER_TONE_D: 'Ton PIN#%1 częstotliwość%2 czas trwania%3',
        BUZZER_MUSIC: 'Ton PIN#%1 odtwarzanie muzyki%2',
        BUZZER_NOTONE: 'NoTone%1',
        BUTTON_CATEGORY: 'Przycisk',
        BUTTON_READ_STATE: 'Naciśnięto przycisk %1 interfejsu?',
        BUTTON_READ_VALUE: 'Wartość stanu przycisku w interfejsie %1',
        PIR_CATEGORY: 'PIR',
        PIR_READ_VALUE: 'Odczyt interfejsu %1 czujnika ruchu PIR',
        LIGHTSENSOR_CATEGORY: 'Światło',
        LIGHTSENSOR_READ_VALUE: 'odczytaj wartość światła %1',
        GASSENSOR_CATEGORY: 'Gaz',
        GASSENSOR_READ_VALUE: 'odczytaj wartość gazu %1',
        STEAMSENSOR_CATEGORY: 'Para',
        STEAMSENSOR_READ_VALUE: 'odczytaj wartość pary %1',
        SOILSENSOR_CATEGORY: 'Gleba',
        SOILSENSOR_READ_VALUE: 'odczytaj wartość wilgotności gleby%1',
        MOTOR130_CATEGORY: 'Wentylator',
        MOTOR130_DIGITAL: 'Silnik wentylatora INA#%1 Stan%2 INB#%3 Stan%4',
        MOTOR130_ANALOG: 'Silnik wentylatora INA#%1 Stan%2 INB#%3 analogWrite%4',
        KS_SERVO_CATEGORY: 'Serwo',
        KS_SERVO_ANGLE: 'Serwo PIN#%1 stopień%2 opóźnienie%3',
        KS_SERVO_READ: 'Serwo PIN#%1 stopień odczytu',
        LCD_CATEGORY: 'LCD',
        LCD_INIT: 'początkowy adres I2C lcd %1',
        LCD_SETCURSORPOSITION: 'ustaw pozycję kursora lcd x: %1 y: %2',
        LCD_PRINT: 'wydruk LCD %1',
        LCD_CLEAR: 'wyczyść wyświetlacz',
        LCD_SETBACKLIGHT: 'ustaw podświetlenie lcd %1',
        LCD_SATE_ON: 'włączone',
        LCD_SATE_OFF: 'wyłączony',
        LCD_SETCURSORSTYLE: 'ustaw styl kursora lcd %1 %2',
        LCD_SATE_DISPLAY: 'wyświetlacz',
        LCD_SATE_HIDE: 'ukryj',
        LCD_STYLE_BLINK: 'miga',
        LCD_STYLE_NOBLINK: 'brak mrugnięcia',
        BLE_SERIAL_CATEGORY: 'Odczyt danych BLE',
        BLE_DATA: 'Ciąg odczytu szeregowego do #',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        KS_VARIABLE_LABEL:'Tipo de variável',
         KS_variables_declare:'Declare %1 variável Tipo %2 Nome %3 Atribuído a %4',
         KS_variables_set:'Definir %1 variável por %2',
         KS_variables_change:'Alterar %1 modo de variável %2',
         KS_variables_value: 'variável %1',
         KS_variables_setString:'Definir variável de string %1 por %2',
         KS_global:'Global',
         KS_local:'Local',
         KS_MATH_INT: 'int',
         KS_MATH_LONG: 'longo',
         KS_MATH_FLOAT: 'flutuar',
         KS_MATH_BOOLEAN: 'booleano',
         KS_MATH_BYTE: 'byte',
         KS_MATH_CHAR: 'char',
         KS_MATH_STRING: 'string',
         KS_MATH_UNSIGNED_INT: 'int unsigned',
         KS_MATH_WORD: 'palavra',
         KS_MATH_UNSIGNED_LONG: 'não assinado longo',
         KS_MATH_UNSIGNED_CHAR: 'caractere não assinado',
         KS_MATH_DOUBLE: 'duplo',

         KS_TEXT_LABEL:'TEXT',
         KS_char: 'char%1',
         KS_string: 'string%1',
         KS_data: '%1',

         KS_LOGIC_LABEL:'lógica',
         KS_judge:'%1 %2 %3',
         LED_CATEGORY: 'LED',
         LED_SET_LED_STATE: 'LED pino%1 fora%2',
         LED_ANALOG: 'LED %1 analogWrite%2 ',
         RELAY_CATEGORY: 'Relé',
         RELAY_STATE: 'relé pino%1 fora%2',
         BUZZER_CATEGORY: 'Campainha',
         BUZZER_TONE: 'Tom PIN#%1 frequência%2',
         BUZZER_TONE_D: 'Tom PIN#%1 frequência%2 duração%3',
         BUZZER_MUSIC: 'Tone PIN#%1 toca música%2',
         BUZZER_NOTONE: 'NoTone%1',
         BUTTON_CATEGORY: 'Botão',
         BUTTON_READ_STATE: 'O botão %1 da interface foi pressionado？',
         BUTTON_READ_VALUE: 'O valor do estado do botão na interface %1',
         PIR_CATEGORY: 'PIR',
         PIR_READ_VALUE: 'Ler interface %1 sensor de movimento PIR',
         LIGHTSENSOR_CATEGORY: 'Luz',
         LIGHTSENSOR_READ_VALUE: 'leia o valor da luz %1',
         GASSENSOR_CATEGORY: 'Gás',
         GASSENSOR_READ_VALUE: 'leia o valor do gás %1',
         STEAMSENSOR_CATEGORY: 'Vapor',
         STEAMSENSOR_READ_VALUE: 'leia o valor do vapor %1',
         SOILSENSOR_CATEGORY: 'Solo',
         SOILSENSOR_READ_VALUE: 'leia o valor da umidade do solo%1',
         MOTOR130_CATEGORY: 'Ventilador',
         MOTOR130_DIGITAL: 'Motor Ventilador INA#%1 Estado%2 INB#%3 Estado%4',
         MOTOR130_ANALOG: 'Motor Ventilador INA#%1 Estado%2 INB#%3 analogWrite%4',
         KS_SERVO_CATEGORY: 'Servo',
         KS_SERVO_ANGLE: 'PIN do servo#%1 grau%2 atraso%3',
         KS_SERVO_READ: 'PIN do servo#%1 grau de leitura',
         LCD_CATEGORY: 'LCD',
         LCD_INIT: 'inicializar endereço LCD I2C %1',
         LCD_SETCURSORPOSITION: 'definir a posição do cursor lcd x: %1 y: %2',
         LCD_PRINT: 'impressão LCD %1',
         LCD_CLEAR: 'limpar lcd',
         LCD_SETBACKLIGHT: 'definir luz de fundo do LCD %1',
         LCD_SATE_ON: 'ligado',
         LCD_SATE_OFF: 'desligado',
         LCD_SETCURSORSTYLE: 'definir cursor lcd %1 estilo %2',
         LCD_SATE_DISPLAY: 'exibir',
         LCD_SATE_HIDE: 'ocultar',
         LCD_STYLE_BLINK: 'piscar',
         LCD_STYLE_NOBLINK: 'sem piscar',
         BLE_SERIAL_CATEGORY: 'Ler dados BLE',
         BLE_DATA: 'Serial readString Até #',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        KS_VARIABLE_LABEL: 'Тип переменной',
         KS_variables_declare:'Объявить переменную %1 Тип %2 Имя %3 Назначено %4',
         KS_variables_set:'Установить переменную %1 на %2',
         KS_variables_change:'Изменить режим переменной %1 %2',
         KS_variables_value: 'переменная %1',
         KS_variables_setString:'Установить %1 строковую переменную на %2',
         KS_global: 'Глобальный',
         KS_local: 'Местный',
         KS_MATH_INT: 'целое',
         KS_MATH_LONG: 'длинный',
         KS_MATH_FLOAT: 'плавающая',
         KS_MATH_BOOLEAN: 'логическое значение',
         KS_MATH_BYTE: 'байт',
         KS_MATH_CHAR: 'символ',
         KS_MATH_STRING: 'строка',
         KS_MATH_UNSIGNED_INT: 'целое число без знака',
         KS_MATH_WORD: 'слово',
         KS_MATH_UNSIGNED_LONG: 'длинное без знака',
         KS_MATH_UNSIGNED_CHAR: 'беззнаковый символ',
         KS_MATH_DOUBLE: 'двойной',

         KS_TEXT_LABEL:'ТЕКСТ',
         KS_char: 'символ%1',
         KS_string: 'строка%1',
         KS_data: '%1',

         KS_LOGIC_LABEL: 'логика',
         KS_judge:'%1 %2 %3',
         LED_CATEGORY: 'LED',
         LED_SET_LED_STATE: 'LED pin%1 out%2',
         LED_ANALOG: 'LED %1 AnalogWrite%2 ',
         RELAY_CATEGORY: 'Реле',
         RELAY_STATE: 'выход реле%1%2',
         BUZZER_CATEGORY: "зуммер",
         BUZZER_TONE: 'Тон PIN#%1, частота%2',
         BUZZER_TONE_D: 'Тональный PIN-код #%1, частота%2, продолжительность%3',
         BUZZER_MUSIC: 'Тон PIN#%1 для воспроизведения музыки%2',
         BUZZER_NOTONE: 'NoTone%1',
         BUTTON_CATEGORY: "Кнопка",
         BUTTON_READ_STATE: 'Кнопка интерфейса %1 была нажата？',
         BUTTON_READ_VALUE: 'Значение состояния кнопки в интерфейсе %1',
         PIR_CATEGORY: "ПИР",
         PIR_READ_VALUE: 'Чтение интерфейса %1 PIR датчика движения',
         LIGHTSENSOR_CATEGORY: 'Свет',
         LIGHTSENSOR_READ_VALUE: 'прочитать значение света %1',
         GASSENSOR_CATEGORY: "Газ",
         GASSENSOR_READ_VALUE: 'прочитать значение газа %1',
         STEAMSENSOR_CATEGORY: 'Пар',
         STEAMSENSOR_READ_VALUE: 'прочитать значение пара %1',
         SOILSENSOR_CATEGORY: 'Почва',
         SOILSENSOR_READ_VALUE: 'прочитать значение влажности почвы%1',
         MOTOR130_CATEGORY: 'Вентилятор',
         MOTOR130_DIGITAL: 'Двигатель вентилятора INA#%1, состояние%2 INB#%3, состояние%4',
         MOTOR130_ANALOG: 'Двигатель вентилятора INA#%1 State%2 INB#%3 AnalogWrite%4',
         KS_SERVO_CATEGORY: 'Сервопривод',
         KS_SERVO_ANGLE: 'ПИН-код сервопривода №%1 градус%2 задержка%3',
         KS_SERVO_READ: 'Сервопривод PIN#%1 градус чтения',
         LCD_CATEGORY: 'ЖК-дисплей',
         LCD_INIT: 'инициализировать ЖК-адрес I2C %1',
         LCD_SETCURSORPOSITION: 'установить позицию жидкокристаллического курсора x: %1 y: %2',
         LCD_PRINT: 'ЖК-печать %1',
         LCD_CLEAR: 'очистить ЖК-дисплей',
         LCD_SETBACKLIGHT: 'установить подсветку ЖК-дисплея %1',
         LCD_SATE_ON: 'вкл.',
         LCD_SATE_OFF: 'выкл.',
         LCD_SETCURSORSTYLE: 'установить ЖК-курсор %1 в стиле %2',
         LCD_SATE_DISPLAY: 'дисплей',
         LCD_SATE_HIDE: 'скрыть',
         LCD_STYLE_BLINK: 'мигать',
         LCD_STYLE_NOBLINK: 'не мигает',
         BLE_SERIAL_CATEGORY: 'Чтение данных BLE',
         BLE_DATA: 'Серийный readString до #',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        KS_VARIABLE_LABEL:'變量類型',
        KS_variables_declare:'聲明 %1 數字變量 類型 %2 名稱 %3 賦值為 %4',
        KS_variables_declare2:'聲明 %1 字符串變量 類型 %2 名稱 %3 賦值為 %4',
        KS_variables_set:'設置 %1 變量 為 %2',
        KS_variables_change:'設置 %1 變量 模式 %2',
        KS_variables_value: '變量 %1',
        KS_variables_setString:'設置 %1 字符串變量 為 %2',
        KS_global:'全局',
        KS_local:'局部',
        KS_MATH_INT: '整數',
        KS_MATH_LONG: '長整數',
        KS_MATH_FLOAT: '小數',
        KS_MATH_BOOLEAN: '布爾',
        KS_MATH_BYTE: '字節',
        KS_MATH_CHAR: '字符',
        KS_MATH_STRING: '字符串',
        KS_MATH_UNSIGNED_INT: '無符號整數',
        KS_MATH_WORD: '字',
        KS_MATH_UNSIGNED_LONG: '無符號長整數',
        KS_MATH_UNSIGNED_CHAR: '無符號字符',
        KS_MATH_DOUBLE: '雙精度浮點數',

        KS_TEXT_LABEL:'文本',
        KS_char: '\'%1\'',
        KS_string: '\"%1\"',
        KS_data: '%1',

        KS_LOGIC_LABEL:'邏輯',
        KS_judge:'%1 %2 %3',
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: 'LED 接口%1 輸出%2 ',
        LED_ANALOG: 'LED燈 %1 模擬輸出%2',
        RELAY_CATEGORY: '繼電器',
        RELAY_STATE: '繼電器 接口%1 輸出%2 ',
        BUZZER_CATEGORY: '無源蜂鳴器',
        BUZZER_TONE: '播放聲音 引腳%1 頻率%2',
        BUZZER_TONE_D: '播放聲音 引腳%1 頻率%2 節拍%3',
        BUZZER_MUSIC: '蜂鳴器 引腳%1 播放音樂%2',
        BUZZER_NOTONE: '結束聲音 引腳%1',
        BUTTON_CATEGORY: '按鍵開關',
        BUTTON_READ_STATE: '接口%1按鈕被按下？ ',
        BUTTON_READ_VALUE: '接口%1按鈕的狀態值',
        PIR_CATEGORY: '人體紅外傳感器',
        PIR_READ_VALUE: '讀取接口 %1 紅外熱釋電傳感器',
        LIGHTSENSOR_CATEGORY: '光線傳感器',
        LIGHTSENSOR_READ_VALUE: '讀取接口%1光線強度',
        GASSENSOR_CATEGORY: '氣體傳感器',
        GASSENSOR_READ_VALUE: '讀取接口%1煤氣濃度',
        STEAMSENSOR_CATEGORY: '雨水傳感器',
        STEAMSENSOR_READ_VALUE: '讀取接口%1雨水強度',
        SOILSENSOR_CATEGORY: '土壤濕度傳感器',
        SOILSENSOR_READ_VALUE: '讀取接口%1土壤濕度',
        MOTOR130_CATEGORY: '風扇模塊',
        MOTOR130_DIGITAL: '風扇模塊 INA#%1 電平為%2 INB#%3 電平為%4',
        MOTOR130_ANALOG: '風扇模塊 INA#%1 電平為%2 INB#%3 模擬輸出值%4',
        KS_SERVO_CATEGORY: '舵機',
        KS_SERVO_ANGLE: '舵機 引腳%1 角度%2 延時(毫秒)%3',
        KS_SERVO_READ: '舵機 引腳%1 讀取度數',
        LCD_CATEGORY: '1602顯示屏',
        LCD_INIT: '初始化 顯示屏 I2C 地址 %1',
        LCD_SETCURSORPOSITION: 'set 顯示屏 光標位置 x: %1 y: %2',
        LCD_PRINT: '顯示屏 打印 %1',
        LCD_CLEAR: '清空 顯示屏',
        LCD_SETBACKLIGHT: '設置 顯示屏 背光 %1',
        LCD_SATE_ON: '開',
        LCD_SATE_OFF: '關',
        LCD_SETCURSORSTYLE: '設置 顯示屏 光標 %1 樣式 %2',
        LCD_SATE_DISPLAY: '顯示',
        LCD_SATE_HIDE: '隱藏',
        LCD_STYLE_BLINK: '閃爍',
        LCD_STYLE_NOBLINK: '不閃爍',
        BLE_SERIAL_CATEGORY: '讀取藍牙信息',
        BLE_DATA: '接收藍牙信息 直到接收到#',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS_VARIABLE_LABEL:'变量类型',
        KS_variables_declare:'声明 %1 数字变量 类型 %2 名称 %3 赋值为 %4',
        KS_variables_declare2:'声明 %1 字符串变量 类型 %2 名称 %3 赋值为 %4',
        KS_variables_set:'设置 %1 变量 为 %2',
        KS_variables_change:'设置 %1 变量 模式 %2',
        KS_variables_value: '变量 %1',
        KS_variables_setString:'设置 %1 字符串变量 为 %2',
        KS_global:'全局',
        KS_local:'局部',
        KS_MATH_INT: '整数',
        KS_MATH_LONG: '长整数',
        KS_MATH_FLOAT: '小数',
        KS_MATH_BOOLEAN: '布尔',
        KS_MATH_BYTE: '字节',
        KS_MATH_CHAR: '字符',
        KS_MATH_STRING: '字符串',
        KS_MATH_UNSIGNED_INT: '无符号整数',
        KS_MATH_WORD: '字',
        KS_MATH_UNSIGNED_LONG: '无符号长整数',
        KS_MATH_UNSIGNED_CHAR: '无符号字符',
        KS_MATH_DOUBLE: '双精度浮点数',

        KS_TEXT_LABEL:'文本',
        KS_char: '\'%1\'',
        KS_string: '\"%1\"',
        KS_data: '%1',

        KS_LOGIC_LABEL:'逻辑',
        KS_judge:'%1 %2 %3',
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: 'LED 接口%1 输出%2 ',
        LED_ANALOG: 'LED灯 %1 模拟输出%2',
        RELAY_CATEGORY: '继电器',
        RELAY_STATE: '继电器 接口%1 输出%2 ',
        BUZZER_CATEGORY: '无源蜂鸣器',
        BUZZER_TONE: '播放声音 引脚%1 频率%2',
        BUZZER_TONE_D: '播放声音 引脚%1 频率%2 节拍%3',
        BUZZER_MUSIC: '蜂鸣器 引脚%1 播放音乐%2',
        BUZZER_NOTONE: '结束声音 引脚%1',
        BUTTON_CATEGORY: '按键开关',
        BUTTON_READ_STATE: '接口%1按钮被按下？',
        BUTTON_READ_VALUE: '接口%1按钮的状态值',
        PIR_CATEGORY: '人体红外传感器',
        PIR_READ_VALUE: '读取接口 %1 红外热释电传感器',
        LIGHTSENSOR_CATEGORY: '光线传感器',
        LIGHTSENSOR_READ_VALUE: '读取接口%1光线强度',
        GASSENSOR_CATEGORY: '气体传感器',
        GASSENSOR_READ_VALUE: '读取接口%1煤气浓度',
        STEAMSENSOR_CATEGORY: '雨水传感器',
        STEAMSENSOR_READ_VALUE: '读取接口%1雨水强度',
        SOILSENSOR_CATEGORY: '土壤湿度传感器',
        SOILSENSOR_READ_VALUE: '读取接口%1土壤湿度',
        MOTOR130_CATEGORY: '风扇模块',
        MOTOR130_DIGITAL: '风扇模块 INA#%1 电平为%2 INB#%3 电平为%4',
        MOTOR130_ANALOG: '风扇模块 INA#%1 电平为%2 INB#%3 模拟输出值%4',
        KS_SERVO_CATEGORY: '舵机',
        KS_SERVO_ANGLE: '舵机 引脚%1 角度%2 延时(毫秒)%3',
        KS_SERVO_READ: '舵机 引脚%1 读取度数',
        LCD_CATEGORY: '1602显示屏',
        LCD_INIT: '初始化 显示屏 I2C 地址 %1',
        LCD_SETCURSORPOSITION: 'set 显示屏 光标位置 x: %1 y: %2',
        LCD_PRINT: '显示屏 打印 %1',
        LCD_CLEAR: '清空 显示屏',
        LCD_SETBACKLIGHT: '设置 显示屏 背光 %1',
        LCD_SATE_ON: '开',
        LCD_SATE_OFF: '关',
        LCD_SETCURSORSTYLE: '设置 显示屏 光标 %1 样式 %2',
        LCD_SATE_DISPLAY: '显示',
        LCD_SATE_HIDE: '隐藏',
        LCD_STYLE_BLINK: '闪烁',
        LCD_STYLE_NOBLINK: '不闪烁',
        BLE_SERIAL_CATEGORY: '读取蓝牙信息',
        BLE_DATA: '接收蓝牙信息 直到接收到#',
        
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        KS_VARIABLE_LABEL: 'Tipo di variabile',
        KS_variables_declare: 'Dichiara variabile numerica %1 tipo %2 nome %3 valore %4',
        KS_variables_declare2: 'Dichiara variabile stringa %1 tipo %2 nome %3 valore %4',
        KS_variables_set: 'Imposta variabile %1 su %2',
        KS_variables_change: 'Imposta variabile %1 modalità %2',
        KS_variables_value: 'Variabile %1',
        KS_variables_setString: 'Imposta variabile stringa %1 su %2',
        KS_global: 'Globale',
        KS_local: 'Locale',
        KS_MATH_INT: 'Intero',
        KS_MATH_LONG: 'Intero lungo',
        KS_MATH_FLOAT: 'Decimale',
        KS_MATH_BOOLEAN: 'Booleano',
        KS_MATH_BYTE: 'Byte',
        KS_MATH_CHAR: 'Carattere',
        KS_MATH_STRING: 'Stringa',
        KS_MATH_UNSIGNED_INT: 'Intero senza segno',
        KS_MATH_WORD: 'Parola',
        KS_MATH_UNSIGNED_LONG: 'Intero lungo senza segno',
        KS_MATH_UNSIGNED_CHAR: 'Carattere senza segno',
        KS_MATH_DOUBLE: 'Numero in virgola mobile doppia precisione',
        KS_TEXT_LABEL: 'TESTO',  
        KS_char: 'carattere%1',  
        KS_string: 'stringa%1',  
        KS_data: '%1', 
        KS_LOGIC_LABEL: 'Logica',
        KS_judge: '%1 %2 %3',
        LED_CATEGORY: 'LED',
        LED_SET_LED_STATE: 'LED Interfaccia %1 Output %2',
        LED_ANALOG: 'LED %1 Uscita analogica %2',
        RELAY_CATEGORY: 'Relè',
        RELAY_STATE: 'Relè Interfaccia %1 Output %2',
        BUZZER_CATEGORY: 'Cicalino passivo',
        BUZZER_TONE: 'Suona il cicalino su Pin %1 con frequenza %2',
        BUZZER_TONE_D: 'Suona il cicalino su Pin %1 con frequenza %2 e battito %3',
        BUZZER_MUSIC: 'Cicalino su Pin %1 suona musica %2',
        BUZZER_NOTONE: 'Ferma il suono sul Pin %1', 
        BUTTON_CATEGORY: 'Interruttore a pulsante',
        BUTTON_READ_STATE: 'Il pulsante su interfaccia %1 è premuto?',
        BUTTON_READ_VALUE: 'Valore stato del pulsante su interfaccia %1',
        PIR_CATEGORY: 'Sensore infrarosso per movimento',
        PIR_READ_VALUE: 'Leggi valore sensore infrarosso termico su interfaccia %1',
        LIGHTSENSOR_CATEGORY: 'Sensore di luce',
        LIGHTSENSOR_READ_VALUE: 'Leggi intensità luce su interfaccia %1',
        GASSENSOR_CATEGORY: 'Sensore di gas',
        GASSENSOR_READ_VALUE: 'Leggi concentrazione di gas su interfaccia %1',
        STEAMSENSOR_CATEGORY: 'Sensore di pioggia',
        STEAMSENSOR_READ_VALUE: 'Leggi intensità pioggia su interfaccia %1',
        SOILSENSOR_CATEGORY: 'Sensore di umidità del suolo',
        SOILSENSOR_READ_VALUE: 'Leggi umidità del suolo su interfaccia %1',
        MOTOR130_CATEGORY: 'Modulo ventola',
        MOTOR130_DIGITAL: 'Modulo ventola INA#%1 Livello %2 INB#%3 Livello %4',
        MOTOR130_ANALOG: 'Modulo ventola INA#%1 Livello %2 INB#%3 Uscita analogica %4',
        KS_SERVO_CATEGORY: 'Servo',
        KS_SERVO_ANGLE: 'Servo Pin %1 angolo %2 ritardo (millisecondi) %3',
        KS_SERVO_READ: 'Leggi angolo del servo Pin %1',
        LCD_CATEGORY: 'Display 1602',
        LCD_INIT: 'Inizializza display I2C indirizzo %1',
        LCD_SETCURSORPOSITION: 'Imposta posizione del cursore sul display x: %1 y: %2',
        LCD_PRINT: 'Stampa sul display %1',
        LCD_CLEAR: 'Pulisci il display',
        LCD_SETBACKLIGHT: 'Imposta retroilluminazione display %1',
        LCD_SATE_ON: 'Accendi',
        LCD_SATE_OFF: 'Spegni',
        LCD_SETCURSORSTYLE: 'Imposta stile cursore sul display %1 tipo %2',
        LCD_SATE_DISPLAY: 'Visualizza',
        LCD_SATE_HIDE: 'Nascondi',
        LCD_STYLE_BLINK: 'Lampeggia',
        LCD_STYLE_NOBLINK: 'Non lampeggia',
        BLE_SERIAL_CATEGORY: 'Leggi informazioni Bluetooth',
        BLE_DATA: 'Ricevi informazioni Bluetooth fino a ricevere #'
        
    });
    return Blockly;
}

exports = addMsg;
