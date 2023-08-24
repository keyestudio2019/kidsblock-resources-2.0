/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: 'init mfrc522 pin CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: 'new card present?',
        MFRC522_READCARDSERIAL: 'mfrc522 successfully read card serial number?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 get card type name',
        MFRC522_GETCARDUID: 'mfrc522 get card UID',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1 to hex string',
        MFRC522_SETKEY: 'mfrc522 set secret key %1',
        MFRC522_VERIFICATIONKEY: 'mfrc522 verification block %1 key is correct?',
        MFRC522_READBLOCKDATA: 'mfrc522 read block %1',
        MFRC522_GETBLOCKDATA: 'mfrc522 block data (type %1)',
        MFRC522_DATATYPE_NUBMER: 'number',
        MFRC522_DATATYPE_STRING: 'string',
        MFRC522_GETBLOCKDATA_TOOLTIP: 'String length less than 16 byte.',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 write %1 to block %2 (type %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 write key %1 to sector %2',
        MFRC522_PRINTSECTORDATA: 'mfrc522 print sector %1 data',
        MFRC522_HALT: 'mfrc522 halt'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: 'init mfrc522 Pin CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: 'Neue Karte vorhanden?',
        MFRC522_READCARDSERIAL: 'mfrc522 hat die Seriennummer der Karte erfolgreich gelesen?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 Kartentypname abrufen',
        MFRC522_GETCARDUID: 'mfrc522 Karten-UID abrufen',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1 zu Hex-String',
        MFRC522_SETKEY: 'mfrc522 hat den geheimen Schlüssel %1 festgelegt',
        MFRC522_VERIFICATIONKEY: 'mfrc522-Verifizierungsblock-Schlüssel %1 ist korrekt?',
        MFRC522_READBLOCKDATA: 'mfrc522 liest Block %1',
        MFRC522_GETBLOCKDATA: 'mfrc522-Blockdaten (Typ %1)',
        MFRC522_DATATYPE_NUBMER: 'Nummer',
        MFRC522_DATATYPE_STRING: 'Zeichenfolge',
        MFRC522_GETBLOCKDATA_TOOLTIP: 'Stringlänge weniger als 16 Byte.',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 schreibt %1 in Block %2 (Typ %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 schreibe Schlüssel %1 in Sektor %2',
        MFRC522_PRINTSECTORDATA: 'mfrc522 druckt Sektor-%1-Daten',
        MFRC522_HALT: 'mfrc522 halt'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: 'iniciar mfrc522 pin CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: '¿nueva tarjeta presente?',
        MFRC522_READCARDSERIAL: '¿mfrc522 leyó correctamente el número de serie de la tarjeta?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 obtener el nombre del tipo de tarjeta',
        MFRC522_GETCARDUID: 'mfrc522 obtener UID de tarjeta',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1 a cadena hexadecimal',
        MFRC522_SETKEY: 'mfrc522 establecer clave secreta %1',
        MFRC522_VERIFICATIONKEY: '¿La clave %1 del bloque de verificación mfrc522 es correcta?',
        MFRC522_READBLOCKDATA: 'mfrc522 bloque de lectura %1',
        MFRC522_GETBLOCKDATA: 'datos de bloque mfrc522 (tipo %1)',
        MFRC522_DATATYPE_NUBMER: 'número',
        MFRC522_DATATYPE_STRING: 'cadena',
        MFRC522_GETBLOCKDATA_TOOLTIP: 'Longitud de cadena inferior a 16 bytes.',
        MFRC522_WRITBLOCKDATA: 'mfrc522 escribe %1 en el bloque %2 (tipo %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 escribe la clave %1 en el sector %2',
        MFRC522_PRINTSECTORDATA: 'mfrc522 sector de impresión %1 datos',
        MFRC522_HALT: 'detener mfrc522'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: 'init mfrc522 broche CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: 'nouvelle carte présente?',
        MFRC522_READCARDSERIAL: 'mfrc522 a lu avec succès le numéro de série de la carte?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 obtenir le nom du type de carte',
        MFRC522_GETCARDUID: 'mfrc522 obtenir l"UID de la carte',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1 en chaîne hexadécimale',
        MFRC522_SETKEY: 'mfrc522 définit la clé secrète %1',
        MFRC522_VERIFICATIONKEY: 'la clé du bloc de vérification mfrc522 %1 est correcte?',
        MFRC522_READBLOCKDATA: 'mfrc522 a lu le bloc %1',
        MFRC522_GETBLOCKDATA: 'données de bloc mfrc522 (type %1)',
        MFRC522_DATATYPE_NUBMER: 'numéro',
        MFRC522_DATATYPE_STRING: 'chaîne',
        MFRC522_GETBLOCKDATA_TOOLTIP: 'Longueur de chaîne inférieure à 16 octets.',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 écrit %1 dans le bloc %2 (type %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 écrit la clé %1 dans le secteur %2',
        MFRC522_PRINTSECTORDATA: 'mfrc522 secteur d"impression %1 données',
        MFRC522_HALT: 'arrêt mfrc522'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: 'mfrc522 ピン CS %1 RST %2 を初期化',
        MFRC522_ISNEWCARDPRESENT: '新しいカードはありますか?',
        MFRC522_READCARDSERIAL: 'mfrc522 はカードのシリアル番号を正常に読み取りましたか?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 カード タイプ名を取得',
        MFRC522_GETCARDUID: 'mfrc522 カード UID を取得',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1 を 16 進文字列に',
        MFRC522_SETKEY: 'mfrc522 秘密キー %1 を設定',
        MFRC522_VERIFICATIONKEY: 'mfrc522 検証ブロック %1 キーは正しいですか?',
        MFRC522_READBLOCKDATA: 'mfrc522 読み取りブロック %1',
        MFRC522_GETBLOCKDATA: 'mfrc522 ブロック データ (タイプ %1)',
        MFRC522_DATATYPE_NUBMER: '数値',
        MFRC522_DATATYPE_STRING: '文字列',
        MFRC522_GETBLOCKDATA_TOOLTIP: '文字列の長さが 16 バイト未満です。',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 %1 をブロック %2 に書き込みます (タイプ %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 キー %1 をセクター %2 に書き込みます',
        MFRC522_PRINTSECTORDATA: 'mfrc522 プリント セクター %1 データ',
        MFRC522_HALT: 'mfrc522 停止'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: '초기화 mfrc522 핀 CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: '새 카드가 있습니까?',
        MFRC522_READCARDSERIAL: 'mfrc522가 성공적으로 카드 일련 번호를 읽습니까?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 카드 유형 이름 가져오기',
        MFRC522_GETCARDUID: 'mfrc522 카드 UID 가져오기',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1을 16진수 문자열로',
        MFRC522_SETKEY: 'mfrc522 설정 비밀 키 %1',
        MFRC522_VERIFICATIONKEY: 'mfrc522 검증 블록 %1 키가 맞습니까?',
        MFRC522_READBLOCKDATA: 'mfrc522 읽기 블록 %1',
        MFRC522_GETBLOCKDATA: 'mfrc522 블록 데이터(유형 %1)',
        MFRC522_DATATYPE_NUBMER: '번호',
        MFRC522_DATATYPE_STRING: '문자열',
        MFRC522_GETBLOCKDATA_TOOLTIP: '문자열 길이가 16바이트 미만입니다.',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 쓰기 %1 블록 %2(유형 %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 섹터 %2에 키 %1 쓰기',
        MFRC522_PRINTSECTORDATA: 'mfrc522 인쇄 섹터 %1 데이터',
        MFRC522_HALT: 'mfrc522 정지'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: 'init mfrc522 pin CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: 'jest nowa karta?',
        MFRC522_READCARDSERIAL: 'mfrc522 pomyślnie odczytał numer seryjny karty?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 pobierz nazwę typu karty',
        MFRC522_GETCARDUID: 'mfrc522 pobierz UID karty',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522%1 na ciąg szesnastkowy',
        MFRC522_SETKEY: 'mfrc522 ustawił tajny klucz %1',
        MFRC522_VERIFICATIONKEY: 'blok weryfikacji mfrc522 klucz %1 jest poprawny?',
        MFRC522_READBLOCKDATA: 'mfrc522 odczytuje blok %1',
        MFRC522_GETBLOCKDATA: 'dane bloku mfrc522 (typ %1)',
        MFRC522_DATATYPE_NUBMER: 'liczba',
        MFRC522_DATATYPE_STRING: 'ciąg znaków',
        MFRC522_GETBLOCKDATA_TOOLTIP: 'Długość łańcucha mniejsza niż 16 bajtów.',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 zapisuje %1 do bloku %2 (typ %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 zapisuje klucz %1 do sektora %2',
        MFRC522_PRINTSECTORDATA: 'mfrc522 sektor drukowania %1 danych',
        MFRC522_HALT: 'zatrzymanie mfrc522'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        MFRC522_CATEGORIA: 'MFRC522',
        MFRC522_INIT: 'inicializar mfrc522 pino CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: 'novo cartão presente?',
        MFRC522_READCARDSERIAL: 'mfrc522 leu com sucesso o número de série do cartão?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 obter nome do tipo de cartão',
        MFRC522_GETCARDUID: 'mfrc522 obter cartão UID',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1 para string hexadecimal',
        MFRC522_SETKEY: 'mfrc522 definiu a chave secreta %1',
        MFRC522_VERIFICATIONKEY: 'mfrc522 bloco de verificação %1 chave está correto?',
        MFRC522_READBLOCKDATA: 'mfrc522 leu o bloco %1',
        MFRC522_GETBLOCKDATA: 'dados do bloco mfrc522 (tipo %1)',
        MFRC522_DATATYPE_NUBMER: 'número',
        MFRC522_DATATYPE_STRING: 'string',
        MFRC522_GETBLOCKDATA_TOOLTIP: 'Comprimento da string menor que 16 bytes.',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 escreve %1 no bloco %2 (tipo %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 escreve a chave %1 no setor %2',
        MFRC522_PRINTSECTORDATA: 'mfrc522 setor de impressão %1 dados',
        MFRC522_HALT: 'mfrc522 parada'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: 'инициировать контакт mfrc522 CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: 'присутствует новая карта?',
        MFRC522_READCARDSERIAL: 'mfrc522 успешно прочитал серийный номер карты?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 получить имя типа карты',
        MFRC522_GETCARDUID: 'mfrc522 получить UID карты',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1 в шестнадцатеричной строке',
        MFRC522_SETKEY: 'mfrc522 установил секретный ключ %1',
        MFRC522_VERIFICATIONKEY: 'mfrc522 блок проверки %1 ключ правильный?',
        MFRC522_READBLOCKDATA: 'mfrc522 прочитал блок %1',
        MFRC522_GETBLOCKDATA: 'данные блока mfrc522 (тип %1)',
        MFRC522_DATATYPE_NUBMER: 'число',
        MFRC522_DATATYPE_STRING: 'строка',
        MFRC522_GETBLOCKDATA_TOOLTIP: 'Длина строки менее 16 байт.',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 записывает %1 в блок %2 (тип %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 записывает ключ %1 в сектор %2',
        MFRC522_PRINTSECTORDATA: 'mfrc522 сектор печати %1 данных',
        MFRC522_HALT: 'mfrc522 остановлен'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: '初始化 mfrc522 引腳 CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: '是否有新卡?',
        MFRC522_READCARDSERIAL: 'mfrc522 成功讀取到卡序列號?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 獲取卡類型名稱',
        MFRC522_GETCARDUID: 'mfrc522 獲取卡 UID',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1 轉為16進製字符串',
        MFRC522_SETKEY: 'mfrc522 設置密鑰 %1',
        MFRC522_VERIFICATIONKEY: 'mfrc522 驗證塊 %1 密碼正確？ ',
        MFRC522_READBLOCKDATA: 'mfrc522 讀取塊 %1',
        MFRC522_GETBLOCKDATA: 'mfrc522 塊數據 (類型 %1)',
        MFRC522_DATATYPE_NUBMER: '數字',
        MFRC522_DATATYPE_STRING: '字符串',
        MFRC522_GETBLOCKDATA_TOOLTIP: '字符串長度小於 16 字節。 ',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 寫 %1 到塊 %2 (類型 %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 寫密碼 %1 到扇區 %2',
        MFRC522_PRINTSECTORDATA: 'mfrc522 打印扇區 %1 數據',
        MFRC522_HALT: 'mfrc522 掛起'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MFRC522_CATEGORY: 'MFRC522',
        MFRC522_INIT: '初始化 mfrc522 引脚 CS %1 RST %2',
        MFRC522_ISNEWCARDPRESENT: '是否有新卡?',
        MFRC522_READCARDSERIAL: 'mfrc522 成功读取到卡序列号?',
        MFRC522_GETCARDTYPENAME: 'mfrc522 获取卡类型名称',
        MFRC522_GETCARDUID: 'mfrc522 获取卡 UID',
        MFRC522_NUMBERTOHEXSTRING: 'mfrc522 %1 转为16进制字符串',
        MFRC522_SETKEY: 'mfrc522 设置密钥 %1',
        MFRC522_VERIFICATIONKEY: 'mfrc522 验证块 %1 密码正确？',
        MFRC522_READBLOCKDATA: 'mfrc522 读取块 %1',
        MFRC522_GETBLOCKDATA: 'mfrc522 块数据 (类型 %1)',
        MFRC522_DATATYPE_NUBMER: '数字',
        MFRC522_DATATYPE_STRING: '字符串',
        MFRC522_GETBLOCKDATA_TOOLTIP: '字符串长度小于 16 字节。',
        MFRC522_WRITEBLOCKDATA: 'mfrc522 写 %1 到块 %2 (类型 %3)',
        MFRC522_WRITEKEYTOSECTOR: 'mfrc522 写密码 %1 到扇区 %2',
        MFRC522_PRINTSECTORDATA: 'mfrc522 打印扇区 %1 数据',
        MFRC522_HALT: 'mfrc522 挂起'
    });
    return Blockly;
}

exports = addMsg;
