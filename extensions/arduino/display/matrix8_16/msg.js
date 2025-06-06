/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MATRIX8_16_CATEGORY: 'Matrix 8*16',
        MATRIX8_16_INIT: 'Init AiP1640 Matrix 8*16 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: 'Martix %1 display %2 No%3image name%4',
        MATRIX8_16_FACE: 'Matrix display face%1',
        MATRIX8_16_PIEXL: ' Matrix X Axis%1 Y Axis%2 State%3',
        MATRIX8_16_REFRESH: ' Matrix refresh',
        MATRIX8_16_CLEAR: 'Matrix8*16 clear',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        MATRIX8_16_CATEGORY: 'Matrix 8*16',
        MATRIX8_16_INIT: 'Init AiP1640 Matrix 8*16 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: 'Matrix %1 Anzeige %2 Nr.%3 Bild name%4',
        MATRIX8_16_FACE: 'Matrix Anzeigefläche%1',
        MATRIX8_16_PIEXL: ' Matrix X-Achse%1 Y-Achse%2 Zustand%3',
        MATRIX8_16_REFRESH: ' Matrix-Aktualisierung',
        MATRIX8_16_CLEAR: 'Matrix8*16 löschen',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        MATRIX8_16_CATEGORY: 'Matriz 8*16',
        MATRIX8_16_INIT: 'Iniciar Matriz AiP1640 8*16 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: 'Matriz %1 visualización %2 No%3 nombre de imagen%4',
        MATRIX8_16_FACE: 'Matriz mostrar cara%1',
        MATRIX8_16_PIEXL: ' Matriz Eje X%1 Eje Y%2 Estado%3',
        MATRIX8_16_REFRESH: 'Actualización de matriz ',
        MATRIX8_16_CLEAR: 'Matriz8*16 claro',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        MATRIX8_16_CATEGORY: 'Matrice 8*16',
        MATRIX8_16_INIT: 'Init AiP1640 Matrice 8*16 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: 'Matrice %1 affichage %2 Non%3 nom de l"image%4',
        MATRIX8_16_FACE: 'Visage d"affichage Matrice%1',
        MATRIX8_16_PIEXL: ' Matrice Axe X%1 Axe Y%2 État%3',
        MATRIX8_16_REFRESH: 'Actualisation de la matrice ',
        MATRIX8_16_CLEAR: 'Matrice8*16 claire',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        MATRIX8_16_CATEGORY: 'マトリックス 8*16',
        MATRIX8_16_INIT: 'AiP1640 マトリックス 8*16 SDA%1 SCL%2 を初期化',
        MATRIX8_16_DISPLAY: 'マトリックス %1 表示 %2 No%3 画像名 %4',
        MATRIX8_16_FACE: 'マトリックス 表示面%1',
        MATRIX8_16_PIEXL: ' マトリックス X 軸%1 Y 軸%2 状態%3',
        MATRIX8_16_REFRESH: ' マトリックスリフレッシュ',
        MATRIX8_16_CLEAR: 'マトリックス 8*16 クリア',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        MATRIX8_16_CATEGORY: '매트릭스 8*16',
        MATRIX8_16_INIT: 'AiP1640 매트릭스 8*16 SDA%1 SCL%2 초기화',
        MATRIX8_16_DISPLAY: '매트릭스 %1디스플레이 %2번호%3이미지이름 %4',
        MATRIX8_16_FACE: '매트릭스 표시면%1',
        MATRIX8_16_PIEXL: ' 매트릭스 X축%1 Y축%2 상태%3',
        MATRIX8_16_REFRESH: ' 매트릭스 새로 고침',
        MATRIX8_16_CLEAR: '매트릭스 8*16 클리어',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        MATRIX8_16_CATEGORY: 'Matryca 8*16',
        MATRIX8_16_INIT: 'Inicjacja Matryca AiP1640 8*16 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: 'Matryca %1 wyświetlacz %2 Nie%3 nazwa obrazu%4',
        MATRIX8_16_FACE: 'Matryca wyświetla twarz%1',
        MATRIX8_16_PIEXL: ' Matryca Oś X%1 Oś Y%2 Stan%3',
        MATRIX8_16_REFRESH: ' Odświeżenie Matryca',
        MATRIX8_16_CLEAR: 'Matryca 8*16 wyczyść',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        MATRIX8_16_CATEGORY: 'Matriz 8*16',
        MATRIX8_16_INIT: 'Iniciar AiP1640 Matrix 8*16 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: 'Matriz %1 exibição %2 Não%3 nome da imagem%4',
        MATRIX8_16_FACE: 'Matrix8*16 exibe a face%1',
        MATRIX8_16_PIEXL: ' Matriz X Eixo%1 Eixo Y%2 Estado%3',
        MATRIX8_16_REFRESH: 'Atualização da matriz ',
        MATRIX8_16_CLEAR: 'Matriz8*16 limpa',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        MATRIX8_16_CATEGORY: 'Матрица 8*16',
        MATRIX8_16_INIT: 'Инициировать Матрица AiP1640 8*16 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: 'Матрица %1 отображение %2 №%3 имя изображения%4',
        MATRIX8_16_FACE: 'Матрица отображать лицо%1',
        MATRIX8_16_PIEXL: ' Матрица X Axis%1 Y Axis%2 State%3',
        MATRIX8_16_REFRESH: 'Обновление Матрица ',
        MATRIX8_16_CLEAR: 'Матрица 8*16 очистить',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        MATRIX8_16_CATEGORY: '點陣8*16',
        MATRIX8_16_INIT: '初始化 點陣 8*16 AiP1640 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: '點陣屏%1 顯示%2 第%3組圖案 名稱%4',
        MATRIX8_16_FACE: '點陣8*16 顯示%1',
        MATRIX8_16_PIEXL: ' 點陣顯示點 X軸%1 Y軸%2 電平為%3',
        MATRIX8_16_REFRESH: '點陣 刷新顯示',
        MATRIX8_16_CLEAR: '點陣8*16 清屏',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MATRIX8_16_CATEGORY: '点阵屏8*16',
        MATRIX8_16_INIT: '初始化 点阵屏 AiP1640 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: '点阵屏%1 显示%2 第%3组图案 名称%4',
        MATRIX8_16_FACE: '点阵 显示%1',
        MATRIX8_16_PIEXL: '点阵 显示点 X轴%1 Y轴%2 电平为%3',
        MATRIX8_16_REFRESH: '点阵 刷新显示',
        MATRIX8_16_CLEAR: '点阵8*16清屏',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        MATRIX8_16_CATEGORY: 'Display a matrice 8*16',
        MATRIX8_16_INIT: 'Inizializza display a matrice AiP1640 SDA%1 SCL%2',
        MATRIX8_16_DISPLAY: 'Display a matrice %1 visualizza %2 Gruppo %3 di immagini Nome %4',
        MATRIX8_16_FACE: 'Display matrice mostra %1',
        MATRIX8_16_PIEXL: 'Display matrice disegna punto su X %1 Y %2 livello %3',
        MATRIX8_16_REFRESH: 'Aggiorna display matrice',
        MATRIX8_16_CLEAR: 'Pulisci display matrice 8*16',        
    });
    return Blockly;
}

exports = addMsg;
