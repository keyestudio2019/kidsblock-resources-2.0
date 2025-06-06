/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        EIGHTDIGITDISPLAY_CATEGORY: '8-Digit Display',
        EIGHTDIGITDISPLAY_INIT: 'init 8-digit display pin DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: 'display number %1 decimal %2',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: 'set brightness %1',
        EIGHTDIGITDISPLAY_CLEAR: 'clear'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        EIGHTDIGITDISPLAY_CATEGORY: '8-stellige Anzeige',
        EIGHTDIGITDISPLAY_INIT: 'Init 8-stelliger Anzeige-Pin DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: 'Anzeigenummer %1 dezimal %2',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: 'Helligkeit %1 einstellen',
        EIGHTDIGITDISPLAY_CLEAR: 'clear'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        EIGHTDIGITDISPLAY_CATEGORY: 'Pantalla de 8 dígitos',
        EIGHTDIGITDISPLAY_INIT: 'iniciar pin de visualización de 8 dígitos DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: 'mostrar número %1 decimal %2',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: 'establecer brillo %1',
        OCHODIGITDISPLAY_CLEAR: 'borrar'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        EIGHTDIGITDISPLAY_CATEGORY: 'Pantalla de 8 dígitos',
        EIGHTDIGITDISPLAY_INIT: 'iniciar pin de visualización de 8 dígitos DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: 'mostrar número %1 decimal %2',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: 'establecer brillo %1',
        OCHODIGITDISPLAY_CLEAR: 'borrar'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        EIGHTDIGITDISPLAY_CATEGORY: '8 桁表示',
        EIGHTDIGITDISPLAY_INIT: '8 桁表示ピン DIN %1 CS %2 CLK %3 を初期化',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: '表示番号 %1 10 進数 %2',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: '明るさを設定 %1',
        EIGHTDIGITDISPLAY_CLEAR: 'クリア'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        EIGHTDIGITDISPLAY_CATEGORY: '8자리 디스플레이',
        EIGHTDIGITDISPLAY_INIT: '초기화 8자리 디스플레이 핀 DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: '디스플레이 번호 %1 십진수 %2',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: '밝기 %1 설정',
        EIGHTDIGITDISPLAY_CLEAR: '클리어'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        EIGHTDIGITDISPLAY_CATEGORY: '8-cyfrowy wyświetlacz',
        EIGHTDIGITDISPLAY_INIT: 'początkowy 8-cyfrowy pin wyświetlacza DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: 'wyświetl numer %1 dziesiętnie %2',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: 'ustaw jasność %1',
        EIGHTDIGITDISPLAY_CLEAR: 'wyczyść'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        EIGHTDIGITDISPLAY_CATEGORY: 'Exibição de 8 dígitos',
        EIGHTDIGITDISPLAY_INIT: 'iniciar pino de exibição de 8 dígitos DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: 'exibe número %1 decimal %2',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: 'definir brilho %1',
        EIGHTDIGITDISPLAY_CLEAR: 'claro'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        EIGHTDIGITDISPLAY_CATEGORY: '8-разрядный дисплей',
        EIGHTDIGITDISPLAY_INIT: 'инициировать 8-значный вывод дисплея DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: 'отображаемое число %1 десятичное %2',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: 'установить яркость%1',
        EIGHTDIGITDISPLAY_CLEAR: 'очистить'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        EIGHTDIGITDISPLAY_CATEGORY: '8位數碼管',
        EIGHTDIGITDISPLAY_INIT: '初始化 8位數碼管引腳 DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: '顯示數字 %1 保留小數點後 %2 位',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: '設置亮度 %1',
        EIGHTDIGITDISPLAY_CLEAR: '清空'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        EIGHTDIGITDISPLAY_CATEGORY: '8位数码管',
        EIGHTDIGITDISPLAY_INIT: '初始化 8位数码管引脚 DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: '显示数字 %1 保留小数点后 %2 位',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: '设置亮度 %1',
        EIGHTDIGITDISPLAY_CLEAR: '清空'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        EIGHTDIGITDISPLAY_CATEGORY: 'Display a 8 cifre',
        EIGHTDIGITDISPLAY_INIT: 'Inizializza display a 8 cifre Pin DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: 'Visualizza numero %1 Mantieni %2 decimali',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: 'Imposta luminosità %1',
        EIGHTDIGITDISPLAY_CLEAR: 'Pulisci',        
    });
    return Blockly;
}

exports = addMsg;
