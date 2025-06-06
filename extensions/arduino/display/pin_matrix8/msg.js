/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MATRIX_PIN_CATEGORY: 'Matrix 8*8',
        MATRIX_PIN_INIT: 'Init Matrix 8*8 row:2~9 column:10~A3',
        MATRIX_PIN_NUMBER: 'Matrix 8*8 display%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        MATRIX_PIN_CATEGORY: 'Matrix 8*8',
        MATRIX_PIN_INIT: 'Matrix 8*8 Zeile:2~9 Spalte:10~A3 initialisieren',
        MATRIX_PIN_NUMBER: 'Matrix 8*8 Anzeige%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        MATRIX_PIN_CATEGORY: 'Matriz 8*8',
        MATRIX_PIN_INIT: 'Iniciar Matriz 8*8 fila:2~9 columna:10~A3',
        MATRIX_PIN_NUMBER: 'Matriz 8*8 pantalla%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        MATRIX_PIN_CATEGORY: 'Matrice 8*8',
        MATRIX_PIN_INIT: 'Init Matrix 8*8 row:2~9 column:10~A3',
        MATRIX_PIN_NUMBER: 'Matrice 8*8 display%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        MATRIX_PIN_CATEGORY: 'マトリックス 8*8',
        MATRIX_PIN_INIT: '行列 8*8 行:2~9 列:10~A3 を初期化',
        MATRIX_PIN_NUMBER: 'マトリックス 8*8 表示%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        MATRIX_PIN_CATEGORY: '매트릭스 8*8',
        MATRIX_PIN_INIT: '행렬 초기화 8*8 행:2~9 열:10~A3',
        MATRIX_PIN_NUMBER: '매트릭스 8*8 디스플레이%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        MATRIX_PIN_CATEGORY: 'Matryca 8*8',
        MATRIX_PIN_INIT: 'Macierz początkowa 8*8 rzędów: 2~9 kolumn: 10~A3',
        MATRIX_PIN_NUMBER: 'Matryca 8*8 wyświetla %1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        MATRIX_PIN_CATEGORY: 'Matriz 8*8',
        MATRIX_PIN_INIT: 'Iniciar Matriz 8*8 linha:2~9 coluna:10~A3',
        MATRIX_PIN_NUMBER: 'Matriz 8*8 exibição%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        MATRIX_PIN_CATEGORY: 'Матрица 8*8',
        MATRIX_PIN_INIT: 'Инициализировать матрицу 8*8 строк:2~9 столбцов:10~A3',
        MATRIX_PIN_NUMBER: 'Matrix 8*8 display%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        MATRIX_PIN_CATEGORY: '8*8點陣',
        MATRIX_PIN_INIT: '初始化 8*8點陣 行2~9 列10~A3',
        MATRIX_PIN_NUMBER: '點陣 顯示%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MATRIX_PIN_CATEGORY: '8*8点阵',
        MATRIX_PIN_INIT: '初始化 8*8点阵 行2~9 列10~A3',
        MATRIX_PIN_NUMBER: '点阵 显示%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        MATRIX_PIN_CATEGORY: 'Matrice 8*8',
        MATRIX_PIN_INIT: 'Inizializza matrice 8*8 righe 2~9 colonne 10~A3',
        MATRIX_PIN_NUMBER: 'Matrice mostra %1',        
    });
    return Blockly;
}

exports = addMsg;
