/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SHIFTDIGITDISPLAY_CATEGORY: 'Shift Digit Display',
        SHIFTDIGITDISPLAY_INIT: 'init shift digit display length %1 pin SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: 'shift digit display display number %1 decimal %2',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: 'shift digit display display string %1',
        SHIFTDIGITDISPLAY_SHOW: 'shift digit display show for %1 ms',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: 'This command will block the program,it is recommended to run for 1ms in each loop.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        SHIFTDIGITDISPLAY_CATEGORY: 'Shift Digit Display',
        SHIFTDIGITDISPLAY_INIT: 'Init-Shift-Ziffer-Anzeigelänge %1 Pin SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: 'Ziffernanzeige Anzeigenummer %1 dezimal %2 verschieben',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: 'Ziffernanzeige-Anzeigezeichenfolge %1 verschieben',
        SHIFTDIGITDISPLAY_SHOW: 'Ziffernanzeige für %1 ms verschieben',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: 'Dieser Befehl blockiert das Programm,Es wird empfohlen, in jeder Schleife 1 ms lang zu laufen.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        SHIFTDIGITDISPLAY_CATEGORY: 'Visualización de dígitos de desplazamiento',
        SHIFTDIGITDISPLAY_INIT: 'longitud de visualización de dígito de desplazamiento inicial %1 pin SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: 'desplazar visualización de dígitos número de visualización %1 decimal %2',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: 'desplazar la cadena de visualización de visualización de dígitos %1',
        SHIFTDIGITDISPLAY_SHOW: 'Mostrar visualización de dígitos de desplazamiento para %1 ms',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: 'Este comando bloqueará el programa,se recomienda ejecutar durante 1 ms en cada ciclo.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        SHIFTDIGITDISPLAY_CATEGORY: 'affichage des chiffres décalés',
        SHIFTDIGITDISPLAY_INIT: 'longueur d"affichage du chiffre de décalage d"initialisation %1 broche SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: 'décaler l"affichage des chiffres afficher le numéro %1 décimal %2',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: 'chaîne d"affichage d"affichage de chiffres décalés %1',
        SHIFTDIGITDISPLAY_SHOW: 'afficher l"affichage des chiffres décalés pendant %1 ms',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: 'Cette commande bloquera le programme,il est recommandé d"exécuter pendant 1 ms dans chaque boucle.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        SHIFTDIGITDISPLAY_CATEGORY: 'シフト桁表示',
         SHIFTDIGITDISPLAY_INIT: 'シフト桁表示長の初期化 %1 ピン SCLK %2 RCLK %3 DIO %4',
         SHIFTDIGITDISPLAY_DISPLAYNUMBER: 'シフト桁表示 表示番号 %1 10進数 %2',
         SHIFTDIGITDISPLAY_DISPLAYSTRING: 'シフト桁表示 表示文字列 %1',
         SHIFTDIGITDISPLAY_SHOW: 'シフト桁表示を %1 ミリ秒間表示',
         SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: 'このコマンドはプログラムをブロックします。各ループで 1 ミリ秒実行することをお勧めします。',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        SHIFTDIGITDISPLAY_CATEGORY: '시프트 숫자 표시',
         SHIFTDIGITDISPLAY_INIT: '초기 시프트 숫자 표시 길이 %1 핀 SCLK %2 RCLK %3 DIO %4',
         SHIFTDIGITDISPLAY_DISPLAYNUMBER: '시프트 숫자 디스플레이 디스플레이 번호 %1 십진수 %2',
         SHIFTDIGITDISPLAY_DISPLAYSTRING: '시프트 숫자 표시 표시 문자열 %1',
         SHIFTDIGITDISPLAY_SHOW: '%1ms 동안 자리 이동 표시 표시',
         SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: '이 명령은 프로그램을 차단합니다. 각 루프에서 1ms 동안 실행하는 것이 좋습니다.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        SHIFTDIGITDISPLAY_CATEGORY: 'Zmiana wyświetlania cyfry',
        SHIFTDIGITDISPLAY_INIT: 'początkowa długość wyświetlania cyfry przesunięcia %1 pin SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: 'zmiana cyfry wyświetlania numeru %1 dziesiętnie %2',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: 'zmiana cyfry wyświetlanego ciągu znaków %1',
        SHIFTDIGITDISPLAY_SHOW: 'zmiana wyświetlania cyfr przez %1 ms',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: 'To polecenie zablokuje program,zaleca się uruchamianie przez 1 ms w każdej pętli'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        SHIFTDIGITDISPLAY_CATEGORY: 'Exibição de dígitos de deslocamento',
        SHIFTDIGITDISPLAY_INIT: 'comprimento de exibição do dígito de deslocamento inicial %1 pino SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: 'deslocar o número de exibição do dígito %1 decimal %2',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: 'sequência de exibição de dígitos de mudança %1',
        SHIFTDIGITDISPLAY_SHOW: 'Mostrar display de dígitos por %1 ms',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: 'Este comando bloqueará o programa,recomenda-se rodar por 1ms em cada loop.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        SHIFTDIGITDISPLAY_CATEGORY: 'Отображение цифр сдвига',
        SHIFTDIGITDISPLAY_INIT: 'длина отображения цифры инициализации сдвига %1 вывод SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: 'сдвинуть цифровое отображаемое число %1 десятичное %2',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: 'сдвиг строки отображения цифр %1',
        SHIFTDIGITDISPLAY_SHOW: 'сдвиг отображения цифр на %1 мс',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: 'Эта команда заблокирует программу, рекомендуется работать в течение 1 мс в каждом цикле.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        SHIFTDIGITDISPLAY_CATEGORY: '移位數碼管',
        SHIFTDIGITDISPLAY_INIT: '初始化移位數碼管 長度 %1 引腳 SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: '移位數碼管顯示數字 %1 保留小數點後 %2 位',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: '移位數碼管顯示字符串 %1',
        SHIFTDIGITDISPLAY_SHOW: '移位數碼管顯示 %1 ms',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: '這條指令將會阻塞程序，推薦在每個循環中運行1ms.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SHIFTDIGITDISPLAY_CATEGORY: '移位数码管',
        SHIFTDIGITDISPLAY_INIT: '初始化移位数码管 长度 %1 引脚 SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: '移位数码管显示数字 %1 保留小数点后 %2 位',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: '移位数码管显示字符串 %1',
        SHIFTDIGITDISPLAY_SHOW: '移位数码管显示 %1 ms',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: '这条指令将会阻塞程序，推荐在每个循环中运行1ms.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        SHIFTDIGITDISPLAY_CATEGORY: 'Display a cifra spostata',
        SHIFTDIGITDISPLAY_INIT: 'Inizializza display a cifra spostata lunghezza %1 pin SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: 'Visualizza numero sul display a cifra spostata %1 con %2 cifre decimali',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: 'Visualizza stringa sul display a cifra spostata %1',
        SHIFTDIGITDISPLAY_SHOW: 'Mostra sul display a cifra spostata per %1 ms',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: 'Questo comando bloccherà il programma. Si consiglia di eseguirlo ogni 1 ms in ogni ciclo.'        
    });
    return Blockly;
}

exports = addMsg;
