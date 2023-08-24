/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SD_CATEGORY: 'SD card',
        SD_INIT: 'init SD card PIN MOSI:11 MISO:12 CLK:13 CS: %1',
        SD_TYPE: 'SD type cs# %1',
        SD_LIST: 'list files in SD root cs# %1',
        SD_VAR: 'SD %1 cs# %2',
        SD_JUDGE: '%1 File Exist?',
        SD_DELETE: 'delete %1',
        SD_READ: 'read %1',
        SD_WRITE: 'write SD File %1 Data %2 NewLine %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        SD_CATEGORY: 'SD-Karte',
        SD_INIT: 'SD-Karten-PIN MOSI:11 MISO:12 CLK:13 CS: %1 initieren',
        SD_TYPE: 'SD-Typ cs# %1',
        SD_LIST: 'Dateien im SD-Root-CS# %1 auflisten',
        SD_VAR: 'SD %1 cs# %2',
        SD_JUDGE: '%1 Datei vorhanden?',
        SD_DELETE: '%1 löschen',
        SD_READ: '%1 lesen',
        SD_WRITE: 'SD-Datei %1 Daten %2 NewLine %3 schreiben',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        SD_CATEGORY: 'Tarjeta SD',
        SD_INIT: 'iniciar tarjeta SD PIN MOSI:11 MISO:12 CLK:13 CS: %1',
        SD_TYPE: 'SD tipo cs# %1',
        SD_LIST: 'listar archivos en SD root cs# %1',
        SD_VAR: 'SD %1 cs# %2',
        SD_JUDGE: '¿%1 archivo existe?',
        SD_DELETE: 'eliminar %1',
        SD_READ: 'leer %1',
        SD_WRITE: 'escribir archivo SD %1 Datos %2 NewLine %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        SD_CATEGORY: 'Carte SD',
        SD_INIT: 'initialisation du code PIN de la carte SD MOSI:11 MISO:12 CLK:13 CS: %1',
        SD_TYPE: 'SD type cs# %1',
        SD_LIST: 'liste les fichiers dans la racine SD cs# %1',
        SD_VAR: 'SD %1 cs# %2',
        SD_JUDGE: '%1 Fichier existe?',
        SD_DELETE: 'supprimer %1',
        SD_READ: 'lire %1',
        SD_WRITE: 'écrire le fichier SD %1 Data %2 NewLine %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        SD_CATEGORY: 'SD カード',
        SD_INIT: 'SD カードの初期化 PIN MOSI:11 MISO:12 CLK:13 CS: %1',
        SD_TYPE: 'SD タイプ cs# %1',
        SD_LIST: 'SD ルート cs# %1 内のファイルをリストします',
        SD_VAR: 'SD %1 cs# %2',
        SD_JUDGE: '%1 ファイルは存在しますか?',
        SD_DELETE: '%1 を削除',
        SD_READ: '%1 を読み取り',
        SD_WRITE: 'SD ファイル %1 データ %2 NewLine %3 を書き込みます',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        SD_CATEGORY: 'SD 카드',
        SD_INIT: 'SD 카드 PIN 초기화 MOSI:11 MISO:12 CLK:13 CS: %1',
        SD_TYPE: 'SD 유형 cs# %1',
        SD_LIST: 'SD 루트 cs# %1에 있는 파일 나열',
        SD_VAR: 'SD %1 cs# %2',
        SD_JUDGE: '%1 파일이 존재합니까?',
        SD_DELETE: '%1 삭제',
        SD_READ: '%1 읽기',
        SD_WRITE: 'SD 파일 %1 데이터 %2 NewLine %3 쓰기',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        SD_CATEGORY: 'Karta SD',
        SD_INIT: 'inicjalny PIN karty SD MOSI:11 MISO:12 CLK:13 CS: %1',
        SD_TYPE: 'SD typ cs# %1',
        SD_LIST: 'lista plików w katalogu głównym SD cs# %1',
        SD_VAR: 'SD %1 cs# %2',
        SD_JUDGE: '%1 plików istnieje?',
        SD_DELETE: 'usuń %1',
        SD_READ: 'odczyt %1',
        SD_WRITE: 'zapisz plik SD %1 Dane %2 NewLine %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        SD_CATEGORY: 'cartão SD',
        SD_INIT: 'iniciar PIN do cartão SD MOSI:11 MISO:12 CLK:13 CS: %1',
        SD_TYPE: 'SD tipo cs# %1',
        SD_LIST: 'listar arquivos em SD root cs# %1',
        SD_VAR: 'SD %1 cs# %2',
        SD_JUDGE: 'Arquivo %1 existe?',
        SD_DELETE: 'excluir %1',
        SD_READ: 'ler %1',
        SD_WRITE: 'escrever arquivo SD %1 Data %2 NewLine %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        SD_CATEGORY: 'SD-карта',
        SD_INIT: 'инициализировать PIN-код SD-карты MOSI:11 MISO:12 CLK:13 CS: %1',
        SD_TYPE: 'Тип SD cs# %1',
        SD_LIST: 'список файлов в корневом каталоге SD cs# %1',
        SD_VAR: 'SD %1 cs# %2',
        SD_JUDGE: '%1 Файл существует?',
        SD_DELETE: 'удалить %1',
        SD_READ: 'прочитано %1',
        SD_WRITE: 'записать SD-файл %1 Data %2 NewLine %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        SD_CATEGORY: 'SD卡',
        SD_INIT: '初始化 SD卡 引腳 MOSI:11 MISO:12 CLK:13 CS:%1',
        SD_TYPE: 'SD類型 cs引腳%1',
        SD_LIST: '列出SD根目錄文件 cs引腳%1',
        SD_VAR: '讀取SD%1 cs引腳%2',
        SD_JUDGE: '%1文件存在？ ',
        SD_DELETE: '刪除%1',
        SD_READ: '讀取%1',
        SD_WRITE: '寫入SD 文件%1 數據%2 換行%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SD_CATEGORY: 'SD卡',
        SD_INIT: '初始化 SD卡 引脚 MOSI:11 MISO:12 CLK:13 CS:%1',
        SD_TYPE: 'SD类型 cs引脚%1',
        SD_LIST: '列出SD根目录文件 cs引脚%1',
        SD_VAR: '读取SD%1 cs引脚%2',
        SD_JUDGE: '%1文件存在？',
        SD_DELETE: '删除%1',
        SD_READ: '读取%1',
        SD_WRITE: '写入SD 文件%1 数据%2 换行%3',
    });
    return Blockly;
}

exports = addMsg;
