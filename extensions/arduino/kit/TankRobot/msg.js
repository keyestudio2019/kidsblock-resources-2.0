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


        MOTOR130_CATEGORY: 'DC Motor',
        MOTOR130_DIGITAL: 'Motor INA#%1 State%2 INB#%3 State%4',
        MOTOR130_ANALOG: 'Motor INA#%1 State%2 INB#%3 analogWrite%4',
        KS_SERVO_CATEGORY: 'servo',
        KS_SERVO_ANGLE: 'servo PIN#%1 degree%2 delay%3',
        KS_SERVO_READ: 'servo PIN#%1 read degree',
        HC_SR04_CATEGORY: 'Ultrasonic',
        HC_SR04_READ_DISTANCE: 'HC-SR04 trig pin %1 echo pin %2 read distance %3',
        IR_CATEGORY: 'IR Remote',
        IR_INIT: 'IR remote init PIN#%1',
        IR_DATA: 'Received data',
        IR_READ: 'Read the data',
        IR_REFRESH: 'Refresh data',
        MATRIX8_16_CATEGORY: 'Matrix 8*16',
        MATRIX8_16_INIT: 'Init AiP1640 Matrix 8*16 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: 'Matrix8*16 %1 display%2',
        MATRIX8_16_FACE: 'Matrix8*16 display face%1',
        MATRIX8_16_PIEXL: 'HT16K33 Matrix X Axis%1 Y Axis%2 State%3',
        MATRIX8_16_REFRESH: 'HT16K33 Matrix refresh',
        MATRIX8_16_CLEAR: 'Matrix8*16 clear',
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


        MOTOR130_CATEGORY: 'Gleichstrommotor',
        MOTOR130_DIGITAL: 'Motor INA#%1 Status%2 INB#%3 Status%4',
        MOTOR130_ANALOG: 'Motor INA#%1 State%2 INB#%3 analogWrite%4',
        KS_SERVO_CATEGORY: 'Servo',
        KS_SERVO_ANGLE: 'Servo PIN#%1 Grad%2 Verzögerung%3',
        KS_SERVO_READ: 'Servo PIN#%1 Lesegrad',
        HC_SR04_CATEGORY: 'Ultraschall',
        HC_SR04_READ_DISTANCE: 'HC-SR04 Trig-Pin %1 Echo-Pin %2 Leseabstand %3',
        IR_CATEGORY: 'IR-Fernbedienung',
        IR_INIT: 'IR-Ferninitialisierungs-PIN#%1',
        IR_DATA: 'Empfangene Daten',
        IR_READ: 'Daten lesen',
        IR_REFRESH: 'Daten aktualisieren',
        MATRIX8_16_CATEGORY: 'Matrix 8*16',
        MATRIX8_16_INIT: 'Init AiP1640 Matrix 8*16 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: 'Matrix8*16 %1 Anzeige%2',
        MATRIX8_16_FACE: 'Matrix8*16 Anzeigefläche%1',
        MATRIX8_16_PIEXL: 'HT16K33 Matrix X-Achse%1 Y-Achse%2 Zustand%3',
        MATRIX8_16_REFRESH: 'HT16K33 Matrix-Aktualisierung',
        MATRIX8_16_CLEAR: 'Matrix8*16 löschen',
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


         MOTOR130_CATEGORY: 'Motor CC',
         MOTOR130_DIGITAL: 'Motor INA#%1 Estado%2 INB#%3 Estado%4',
         MOTOR130_ANALOG: 'Motor INA#%1 Estado%2 INB#%3 analogWrite%4',
         KS_SERVO_CATEGORY: 'servo',
         KS_SERVO_ANGLE: 'servo PIN#%1 grado%2 retraso%3',
         KS_SERVO_READ: 'servo PIN#%1 grado de lectura',
         HC_SR04_CATEGORY: 'Ultrasónico',
         HC_SR04_READ_DISTANCE: 'HC-SR04 pin de activación %1 pin de eco %2 distancia de lectura %3',
         IR_CATEGORY: 'Remoto IR',
         IR_INIT: 'PIN de inicio remoto IR#%1',
         IR_DATA: 'Datos recibidos',
         IR_READ: 'Leer los datos',
         IR_REFRESH: 'Actualizar datos',
         MATRIX8_16_CATEGORY: 'Matriz 8*16',
         MATRIX8_16_INIT: 'Iniciar Matriz AiP1640 8*16 SDA%1 SCL%2',
         MATRIX8_16_DISPLAY: 'Matriz8*16 %1 pantalla%2',
         MATRIX8_16_FACE: 'Matrix8*16 mostrar cara%1',
         MATRIX8_16_PIEXL: 'HT16K33 Matriz Eje X%1 Eje Y%2 Estado%3',
         MATRIX8_16_REFRESH: 'Actualización de matriz HT16K33',
         MATRIX8_16_CLEAR: 'Matrix8*16 claro',
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


         MOTOR130_CATEGORY: 'Moteur CC',
         MOTOR130_DIGITAL: 'Moteur INA#%1 État%2 INB#%3 État%4',
         MOTOR130_ANALOG: 'Moteur INA#%1 État%2 INB#%3 analogWrite%4',
         KS_SERVO_CATEGORY: 'servo',
         KS_SERVO_ANGLE: 'code PIN servo#%1 degré%2 retard%3',
         KS_SERVO_READ: 'servo PIN #%1 degré de lecture',
         HC_SR04_CATEGORY: 'Ultrasons',
         HC_SR04_READ_DISTANCE: 'broche de déclenchement HC-SR04 %1 broche d"écho %2 distance de lecture %3',
         IR_CATEGORY: 'Télécommande infrarouge',
         IR_INIT: 'PIN d"initialisation à distance IR#%1',
         IR_DATA: 'Données reçues',
         IR_READ: 'Lire les données',
         IR_REFRESH: 'Actualiser les données',
         MATRIX8_16_CATEGORY: 'Matrice 8*16',
         MATRIX8_16_INIT: 'Init AiP1640 Matrix 8*16 SDA%1 SCL%2',
         MATRIX8_16_DISPLAY: 'Matrice8*16 %1 affichage%2',
         MATRIX8_16_FACE: 'Visage d"affichage Matrix8*16%1',
         MATRIX8_16_PIEXL: 'HT16K33 Matrice Axe X%1 Axe Y%2 État%3',
         MATRIX8_16_REFRESH: 'Actualisation de la matrice HT16K33',
         MATRIX8_16_CLEAR: 'Matrice8*16 claire',
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


         MOTOR130_CATEGORY: 'DC モーター',
         MOTOR130_DIGITAL: 'モーター INA#%1 状態%2 INB#%3 状態%4',
         MOTOR130_ANALOG: 'モーター INA#%1 状態%2 INB#%3 アナログ書き込み%4',
         KS_SERVO_CATEGORY: 'サーボ',
         KS_SERVO_ANGLE: 'サーボ PIN#%1 度%2 遅延%3',
         KS_SERVO_READ: 'サーボPIN#%1読み取り度',
         HC_SR04_CATEGORY: '超音波',
         HC_SR04_READ_DISTANCE: 'HC-SR04 トリガー ピン %1 エコー ピン %2 読み取り距離 %3',
         IR_CATEGORY: 'IR リモコン',
         IR_INIT: 'IR リモート初期化 PIN#%1',
         IR_DATA: '受信データ',
         IR_READ: 'データを読み取る',
         IR_REFRESH: 'データを更新',
         MATRIX8_16_CATEGORY: 'マトリックス 8*16',
         MATRIX8_16_INIT: 'AiP1640 マトリックス 8*16 SDA%1 SCL%2 を初期化',
         MATRIX8_16_DISPLAY: 'Matrix8*16 %1 表示%2',
         MATRIX8_16_FACE: 'Matrix8*16 表示面%1',
         MATRIX8_16_PIEXL: 'HT16K33 マトリックス X 軸%1 Y 軸%2 状態%3',
         MATRIX8_16_REFRESH: 'HT16K33 マトリックス更新',
         MATRIX8_16_CLEAR: 'マトリックス 8*16 クリア',
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


         MOTOR130_CATEGORY: 'DC 모터',
         MOTOR130_DIGITAL: '모터 INA#%1 상태%2 INB#%3 상태%4',
         MOTOR130_ANALOG: '모터 INA#%1 상태%2 INB#%3 analogWrite%4',
         KS_SERVO_CATEGORY: '서보',
         KS_SERVO_ANGLE: '서보 PIN#%1도%2 지연%3',
         KS_SERVO_READ: '서보 PIN#%1 읽기 정도',
         HC_SR04_CATEGORY: '초음파',
         HC_SR04_READ_DISTANCE: 'HC-SR04 트리거 핀 %1 에코 핀 %2 읽기 거리 %3',
         IR_CATEGORY: 'IR 리모트',
         IR_INIT: 'IR 원격 초기화 PIN#%1',
         IR_DATA: '데이터 수신',
         IR_READ: '데이터 읽기',
         IR_REFRESH: '데이터 새로 고침',
         MATRIX8_16_CATEGORY: '행렬 8*16',
         MATRIX8_16_INIT: 'AiP1640 매트릭스 8*16 SDA%1 SCL%2 초기화',
         MATRIX8_16_DISPLAY: '매트릭스8*16 %1 디스플레이%2',
         MATRIX8_16_FACE: 'Matrix8*16 표시면%1',
         MATRIX8_16_PIEXL: 'HT16K33 매트릭스 X축%1 Y축%2 상태%3',
         MATRIX8_16_REFRESH: 'HT16K33 매트릭스 새로 고침',
         MATRIX8_16_CLEAR: '매트릭스8*16 클리어',
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


        MOTOR130_CATEGORY: 'Silnik prądu stałego',
        MOTOR130_DIGITAL: 'Silnik INA#%1 Stan%2 INB#%3 Stan%4',
        MOTOR130_ANALOG: 'Silnik INA#%1 Stan%2 INB#%3 analogWrite%4',
        KS_SERVO_CATEGORY: 'serwo',
        KS_SERVO_ANGLE: 'serwo PIN#%1 stopień%2 opóźnienie%3',
        KS_SERVO_READ: 'serwo PIN#%1 stopień odczytu',
        HC_SR04_CATEGORY: 'Ultradźwięki',
        HC_SR04_READ_DISTANCE: 'HC-SR04 pin wyzwalający %1 pin echa %2 odległość odczytu %3',
        IR_CATEGORY: 'Pilot na podczerwień',
        IR_INIT: 'PIN zdalnej inicjalizacji IR#%1',
        IR_DATA: 'Otrzymane dane',
        IR_READ: 'Odczytaj dane',
        IR_REFRESH: 'Odśwież dane',
        MATRIX8_16_CATEGORY: 'Matryca 8*16',
        MATRIX8_16_INIT: 'Inicjacja macierzy AiP1640 8*16 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: 'Matryca8*16 %1 wyświetlacz%2',
        MATRIX8_16_FACE: 'Matrix8*16 wyświetla twarz%1',
        MATRIX8_16_PIEXL: 'HT16K33 Macierz Oś X%1 Oś Y%2 Stan%3',
        MATRIX8_16_REFRESH: 'HT16K33 Odświeżenie macierzy',
        MATRIX8_16_CLEAR: 'Matryca8*16 wyczyść',
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


         MOTOR130_CATEGORY: 'Motor DC',
         MOTOR130_DIGITAL: 'Motor INA#%1 Estado%2 INB#%3 Estado%4',
         MOTOR130_ANALOG: 'Motor INA#%1 Estado%2 INB#%3 analogWrite%4',
         KS_SERVO_CATEGORY: 'servo',
         KS_SERVO_ANGLE: 'PIN do servo#%1 grau%2 atraso%3',
         KS_SERVO_READ: 'PIN do servo#%1 grau de leitura',
         HC_SR04_CATEGORY: 'Ultrassônico',
         HC_SR04_READ_DISTANCE: 'HC-SR04 pino de ativação %1 pino de eco %2 distância de leitura %3',
         IR_CATEGORY: 'IR Remoto',
         IR_INIT: 'PIN de inicialização remota IV#%1',
         IR_DATA: 'Dados recebidos',
         IR_READ: 'Ler os dados',
         IR_REFRESH: 'Atualizar dados',
         MATRIX8_16_CATEGORY: 'Matriz 8*16',
         MATRIX8_16_INIT: 'Iniciar AiP1640 Matrix 8*16 SDA%1 SCL%2',
         MATRIX8_16_DISPLAY: 'Matrix8*16 %1 display%2',
         MATRIX8_16_FACE: 'Matrix8*16 exibe a face%1',
         MATRIX8_16_PIEXL: 'HT16K33 Matriz X Eixo%1 Eixo Y%2 Estado%3',
         MATRIX8_16_REFRESH: 'Atualização da matriz HT16K33',
         MATRIX8_16_CLEAR: 'Matriz8*16 limpa',
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


         MOTOR130_CATEGORY: 'Двигатель постоянного тока',
         MOTOR130_DIGITAL: 'Двигатель INA#%1 Состояние%2 INB#%3 Состояние%4',
         MOTOR130_ANALOG: 'Motor INA#%1 State%2 INB#%3 AnalogWrite%4',
         KS_SERVO_CATEGORY: 'сервопривод',
         KS_SERVO_ANGLE: 'ПИН-код сервопривода №%1 градус%2 задержка%3',
         KS_SERVO_READ: 'сервопривод PIN#%1 степень чтения',
         HC_SR04_CATEGORY: 'Ультразвук',
         HC_SR04_READ_DISTANCE: 'HC-SR04 триггерный вывод %1 эхо-вывод %2 расстояние чтения %3',
         IR_CATEGORY: 'ИК-пульт',
         IR_INIT: 'ПИН-код инициализации ИК-пульта #%1',
         IR_DATA: 'Полученные данные',
         IR_READ: 'Прочитать данные',
         IR_REFRESH: 'Обновить данные',
         MATRIX8_16_CATEGORY: 'Матрица 8*16',
         MATRIX8_16_INIT: 'Инициировать матрицу AiP1640 8*16 SDA%1 SCL%2',
         MATRIX8_16_DISPLAY: 'Matrix8*16 %1 дисплей%2',
         MATRIX8_16_FACE: 'Matrix8*16 отображать лицо%1',
         MATRIX8_16_PIEXL: 'HT16K33 Matrix X Axis%1 Y Axis%2 State%3',
         MATRIX8_16_REFRESH: 'Обновление матрицы HT16K33',
         MATRIX8_16_CLEAR: 'Matrix8*16 очистить',
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

        MOTOR130_CATEGORY: '直流電機',
        MOTOR130_DIGITAL: '電機驅動 INA#%1 電平為%2 INB#%3 電平為%4',
        MOTOR130_ANALOG: '電機驅動 INA#%1 電平為%2 INB#%3 模擬輸出值%4',
        KS_SERVO_CATEGORY: '舵機',
        KS_SERVO_ANGLE: '舵機 引腳%1 角度%2 延時(毫秒)%3',
        KS_SERVO_READ: '舵機 引腳%1 讀取度數',
        HC_SR04_CATEGORY: '超聲波傳感器',
        HC_SR04_READ_DISTANCE: '超聲波傳感器 trig 引腳 %1 echo 引腳 %2 讀取距離 %3',
        IR_CATEGORY: '紅外接收',
        IR_INIT: '初始化紅外接收 引腳%1',
        IR_DATA: '接收到紅外遙控的數據',
        IR_READ: '讀取紅外接收數據',
        IR_REFRESH: '刷新紅外接收數據',
        MATRIX8_16_CATEGORY: '點陣8*16',
        MATRIX8_16_INIT: '初始化 點陣 8*16 AiP1640 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: '點陣8*16 %1 顯示%2',
        MATRIX8_16_FACE: '點陣8*16 顯示%1',
        MATRIX8_16_PIEXL: 'HT16K33 點陣顯示點 X軸%1 Y軸%2 電平為%3',
        MATRIX8_16_REFRESH: 'HT16K33點陣 刷新顯示',
        MATRIX8_16_CLEAR: '點陣8*16 清屏',
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

        MOTOR130_CATEGORY: '直流电机',
        MOTOR130_DIGITAL: '电机驱动 INA#%1 电平为%2 INB#%3 电平为%4',
        MOTOR130_ANALOG: '电机驱动 INA#%1 电平为%2 INB#%3 模拟输出值%4',
        KS_SERVO_CATEGORY: '舵机',
        KS_SERVO_ANGLE: '舵机 引脚%1 角度%2 延时(毫秒)%3',
        KS_SERVO_READ: '舵机 引脚%1 读取度数',
        HC_SR04_CATEGORY: '超声波传感器',
        HC_SR04_READ_DISTANCE: '超声波传感器 trig 引脚 %1 echo 引脚 %2 读取距离 %3',
        IR_CATEGORY: '红外接收',
        IR_INIT: '初始化红外接收 引脚%1',
        IR_DATA: '接收到红外遥控的数据',
        IR_READ: '读取红外接收数据',
        IR_REFRESH: '刷新红外接收数据',
        MATRIX8_16_CATEGORY: '点阵8*16',
        MATRIX8_16_INIT: '初始化 点阵 8*16 AiP1640 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: '点阵8*16 %1 显示%2',
        MATRIX8_16_FACE: '点阵8*16 显示%1',
        MATRIX8_16_PIEXL: 'HT16K33 点阵显示点 X轴%1 Y轴%2 电平为%3',
        MATRIX8_16_REFRESH: 'HT16K33点阵 刷新显示',
        MATRIX8_16_CLEAR: '点阵8*16 清屏',
    });
    return Blockly;
}

exports = addMsg;
