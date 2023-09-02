/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SOFTWARESERIAL_CATEGORY: 'software serial',
        SOFTWARESERIAL_BEGIN: 'software serial %1 RX pin %2 TX pin %3 begin baudrate %4',
        SOFTWARESERIAL_PRINT: 'software serial %1 print %2 %3',
        SOFTWARESERIAL_WARP: 'warp',
        SOFTWARESERIAL_NOWARP: 'no-warp',
        SOFTWARESERIAL_AVAILABLE: 'software serial %1 available data length',
        SOFTWARESERIAL_READABYTE: 'software serial %1 read a byte'
    });

    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        SOFTWARESERIAL_CATEGORY: 'Software-Seriennummer',
        SOFTWARESERIAL_BEGIN: 'Software seriell %1 RX-Pin %2 TX-Pin %3 Baudrate %4 beginnen',
        SOFTWARESERIAL_PRINT: 'Software-Seriennummer %1 druckt %2 %3',
        SOFTWARESERIAL_WARP: 'warp',
        SOFTWARESERIAL_NOWARP: 'no-warp',
        SOFTWARESERIAL_AVAILABLE: 'Software-Seriennummer %1 verfügbare Datenlänge',
        SOFTWARESERIAL_READABYTE: 'Software-Seriennummer %1 hat ein Byte gelesen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        SOFTWARESERIAL_CATEGORY: 'serie de software',
        SOFTWARESERIAL_BEGIN: 'software serie %1 pin RX %2 pin TX %3 velocidad de inicio %4',
        SOFTWARESERIAL_PRINT: 'software serie %1 imprimir %2 %3',
        SOFTWARESERIAL_WARP: 'deformar',
        SOFTWARESERIAL_NOWARP: 'sin deformación',
        SOFTWARESERIAL_AVAILABLE: 'software serial %1 longitud de datos disponible',
        SOFTWARESERIAL_READABYTE: 'software serial %1 leyó un byte'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        SOFTWARESERIAL_CATEGORY: 'logiciel série',
        SOFTWARESERIAL_BEGIN:'logiciel série %1 broche RX %2 broche TX %3 commence le débit en bauds %4',
        SOFTWARESERIAL_PRINT: 'logiciel série %1 impression %2 %3',
        SOFTWARESERIAL_WARP: 'déformation',
        SOFTWARESERIAL_NOWARP: 'sans déformation',
        SOFTWARESERIAL_AVAILABLE: 'logiciel série %1 longueur de données disponible',
        SOFTWARESERIAL_READABYTE: 'le logiciel série %1 lit un octet'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        SOFTWARESERIAL_CATEGORY: 'ソフトウェア シリアル',
        SOFTWARESERIAL_BEGIN: 'ソフトウェア シリアル %1 RX ピン %2 TX ピン %3 ボーレート %4 を開始',
        SOFTWARESERIAL_PRINT: 'ソフトウェア シリアル %1 印刷 %2 %3',
        SOFTWARESERIAL_WARP: 'ワープ',
        SOFTWARESERIAL_NOWARP: 'ワープなし',
        SOFTWARESERIAL_AVAILABLE: 'ソフトウェア シリアル %1 の利用可能なデータ長',
        SOFTWARESERIAL_READABYTE: 'ソフトウェア シリアル %1 がバイトを読み取りました'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        SOFTWARESERIAL_CATEGORY: '소프트웨어 시리얼',
        SOFTWARESERIAL_BEGIN: '소프트웨어 시리얼 %1 RX 핀 %2 TX 핀 %3 시작 전송 속도 %4',
        SOFTWARESERIAL_PRINT: '소프트웨어 시리얼 %1 인쇄 %2 %3',
        SOFTWARESERIAL_WARP: '워프',
        SOFTWARESERIAL_NOWARP: '워프 없음',
        SOFTWARESERIAL_AVAILABLE: '소프트웨어 시리얼 %1 사용 가능한 데이터 길이',
        SOFTWARESERIAL_READABYTE: '소프트웨어 시리얼 %1이(가) 바이트를 읽습니다'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        SOFTWARESERIAL_CATEGORY: 'numer seryjny oprogramowania',
        SOFTWARESERIAL_BEGIN: 'numer seryjny oprogramowania %1 pin RX %2 pin TX %3 początek szybkości transmisji %4',
        SOFTWARESERIAL_PRINT: 'numer seryjny oprogramowania %1 wydruk %2 %3',
        SOFTWARESERIAL_WARP: 'wypaczenie',
        SOFTWARESERIAL_NOWARP: 'bez zniekształceń',
        SOFTWARESERIAL_AVAILABLE: 'numer seryjny oprogramowania %1 dostępna długość danych',
        SOFTWARESERIAL_READABYTE: 'numer seryjny oprogramowania %1 odczytał bajt'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        SOFTWARESERIAL_CATEGORY: 'série do software',
        SOFTWARESERIAL_BEGIN: 'série de software %1 pino RX %2 pino TX %3 início da taxa de transmissão %4',
        SOFTWARESERIAL_PRINT: 'série de software %1 impressão %2 %3',
        SOFTWARESERIAL_WARP: 'distorção',
        SOFTWARESERIAL_NOWARP: 'sem distorção',
        SOFTWARESERIAL_AVAILABLE: 'série de software %1 comprimento de dados disponível',
        SOFTWARESERIAL_READABYTE: 'série de software %1 leu um byte'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        SOFTWARESERIAL_CATEGORY: 'серийный номер программного обеспечения',
        SOFTWARESERIAL_BEGIN: 'последовательный порт программного обеспечения %1, вывод RX %2, вывод TX %3, начало скорости передачи данных %4',
        SOFTWARESERIAL_PRINT: 'серийный номер программного обеспечения %1, печать %2 %3',
        SOFTWARESERIAL_WARP: 'деформация',
        SOFTWARESERIAL_NOWARP: 'без деформации',
        SOFTWARESERIAL_AVAILABLE: 'доступная длина данных серийного номера программного обеспечения %1',
        SOFTWARESERIAL_READABYTE: 'программный серийный номер %1 прочитал байт'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        SOFTWARESERIAL_CATEGORY: '軟件串口',
        SOFTWARESERIAL_BEGIN: '軟件串口 %1 RX 引腳 %2 TX 引腳 %3 開啟波特率 %4',
        SOFTWARESERIAL_PRINT: '軟件串口  %1 打印 %2 %3',
        SOFTWARESERIAL_WARP: '換行',
        SOFTWARESERIAL_NOWARP: '不換行',
        SOFTWARESERIAL_AVAILABLE: '軟件串口 %1 可用數據長度',
        SOFTWARESERIAL_READABYTE: '軟件串口 %1 讀取一個字節'
    });

    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SOFTWARESERIAL_CATEGORY: '软件串口',
        SOFTWARESERIAL_BEGIN: '软件串口 %1 RX 引脚 %2 TX 引脚 %3 开启波特率 %4',
        SOFTWARESERIAL_PRINT: '软件串口  %1 打印 %2 %3',
        SOFTWARESERIAL_WARP: '换行',
        SOFTWARESERIAL_NOWARP: '不换行',
        SOFTWARESERIAL_AVAILABLE: '软件串口 %1 可用数据长度',
        SOFTWARESERIAL_READABYTE: '软件串口 %1 读取一个字节'
    });
    return Blockly;
}

exports = addMsg;
