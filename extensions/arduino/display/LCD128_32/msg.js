/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LCD128_CATEGORY: 'LCD 128*32',
        LCD128_INIT: 'LCD 128*32 Init',
        LCD128_CURSOR: 'LCD 128*32 Sets the location row %1 column %2',
        LCD128_STRING: 'LCD 128*32 display string %1',
        LCD128_NUMBER: 'LCD 128*32 display data%1',
        LCD128_PIXEL: 'Point Coordinates X%1 Y%2',
        LCD128_C_PIXEL: 'Delete the point Coordinates X%1 Y%2',
        LCD128_CLEAR: 'LCD128*32 clear',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        LCD128_CATEGORY: 'LCD 128*32',
        LCD128_INIT: 'LCD 128*32 Init',
        LCD128_CURSOR: 'LCD 128*32 Legt die Position Zeile %1 Spalte %2 fest',
        LCD128_STRING: 'LCD 128*32 zeigt Zeichenfolge %1 an',
        LCD128_NUMBER: 'LCD 128*32 Anzeigedaten %1',
        LCD128_PIXEL: 'Punktkoordinaten X%1 Y%2',
        LCD128_C_PIXEL: 'Löschen Sie die Punktkoordinaten X%1 Y%2',
        LCD128_CLEAR: 'LCD128*32 löschen',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        LCD128_CATEGORÍA: 'LCD 128*32',
        LCD128_INIT: 'Iniciar LCD 128*32',
        LCD128_CURSOR: 'LCD 128*32 Establece la ubicación fila %1 columna %2',
        LCD128_STRING: 'LCD 128*32 cadena de visualización %1',
        LCD128_NUMBER: 'LCD 128*32 mostrar datos%1',
        LCD128_PIXEL: 'Coordenadas del punto X%1 Y%2',
        LCD128_C_PIXEL: 'Borrar las Coordenadas del punto X%1 Y%2',
        LCD128_CLEAR: 'LCD128*32 claro',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        LCD128_CATEGORY: 'LCD 128*32',
        LCD128_INIT: 'LCD 128*32 Init',
        LCD128_CURSOR: 'LCD 128*32 définit l"emplacement ligne %1 colonne %2',
        LCD128_STRING: 'Chaîne d"affichage LCD 128*32 %1',
        LCD128_NUMBER: 'LCD 128*32 affiche les données %1',
        LCD128_PIXEL: 'Coordonnées du point X%1 Y%2',
        LCD128_C_PIXEL: 'Supprimer le point Coordonnées X%1 Y%2',
        LCD128_CLEAR: 'LCD128*32 clair',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        LCD128_CATEGORY: 'LCD 128*32',
        LCD128_INIT: 'LCD 128*32 初期化',
        LCD128_CURSOR: 'LCD 128*32 行 %1 列 %2 の位置を設定します',
        LCD128_STRING: 'LCD 128*32 表示文字列 %1',
        LCD128_NUMBER: 'LCD 128*32 表示データ%1',
        LCD128_PIXEL: '点座標 X%1 Y%2',
        LCD128_C_PIXEL: '点座標 X%1 Y%2 を削除',
        LCD128_CLEAR: 'LCD128*32 クリア',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        LCD128_CATEGORY: 'LCD 128*32',
        LCD128_INIT: 'LCD 128*32 초기화',
        LCD128_CURSOR: 'LCD 128*32 위치 행 %1 열 %2 설정',
        LCD128_STRING: 'LCD 128*32 표시 문자열 %1',
        LCD128_NUMBER: 'LCD 128*32 디스플레이 데이터%1',
        LCD128_PIXEL: '포인트 좌표 X%1 Y%2',
        LCD128_C_PIXEL: '점 좌표 X%1 Y%2 삭제',
        LCD128_CLEAR: 'LCD128*32 클리어',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        LCD128_CATEGORY: 'LCD 128*32',
        LCD128_INIT: 'LCD 128*32 init',
        LCD128_CURSOR: 'LCD 128*32 Ustawia wiersz lokalizacji %1 kolumna %2',
        LCD128_STRING: 'Ciąg wyświetlacza LCD 128*32 %1',
        LCD128_NUMBER: 'Dane wyświetlacza LCD 128*32%1',
        LCD128_PIXEL: 'Współrzędne punktu X%1 Y%2',
        LCD128_C_PIXEL: 'Usuń współrzędne punktu X%1 Y%2',
        LCD128_CLEAR: 'LCD128*32 czysty',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        LCD128_CATEGORY: 'LCD 128*32',
        LCD128_INIT: 'LCD 128*32 Inicial',
        LCD128_CURSOR: 'LCD 128*32 Define a linha de localização %1 coluna %2',
        LCD128_STRING: 'LCD 128*32 string de exibição %1',
        LCD128_NUMBER: 'LCD 128*32 exibir dados%1',
        LCD128_PIXEL: 'Coordenadas do ponto X%1 Y%2',
        LCD128_C_PIXEL: 'Excluir as Coordenadas do ponto X%1 Y%2',
        LCD128_CLEAR: 'LCD128*32 claro',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        LCD128_CATEGORY: 'ЖК 128*32',
        LCD128_INIT: 'ЖК 128*32 инициализация',
        LCD128_CURSOR: 'LCD 128*32 Устанавливает строку местоположения %1 столбец %2',
        LCD128_STRING: 'ЖК-дисплей 128*32 отображает строку %1',
        LCD128_NUMBER: 'ЖК-дисплей 128 * 32 отображает данные%1',
        LCD128_PIXEL: 'Координаты точки X%1 Y%2',
        LCD128_C_PIXEL: 'Удалить координаты точки X%1 Y%2',
        LCD128_CLEAR: 'LCD128*32 очистить',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        LCD128_CATEGORY: '液晶顯示屏128*32',
        LCD128_INIT: '液晶顯示屏 初始化',
        LCD128_CURSOR: '液晶顯示屏 設置位置 第%1行 第%2列',
        LCD128_STRING: '液晶顯示屏顯示字符%1',
        LCD128_NUMBER: '液晶顯示屏顯示數值%1',
        LCD128_PIXEL: '畫點 坐標 X%1 Y%2',
        LCD128_C_PIXEL: '刪除點 坐標 X%1 Y%2',
        LCD128_CLEAR: '清屏',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LCD128_CATEGORY: '液晶显示屏128*32',
        LCD128_INIT: '液晶显示屏 初始化',
        LCD128_CURSOR: '液晶显示屏 设置位置 第%1行 第%2列',
        LCD128_STRING: '液晶显示屏显示字符%1',
        LCD128_NUMBER: '液晶显示屏显示数值%1',
        LCD128_PIXEL: '画点 坐标 X%1 Y%2',
        LCD128_C_PIXEL: '删除点 坐标 X%1 Y%2',
        LCD128_CLEAR: '清屏',
    });
    return Blockly;
}

exports = addMsg;
