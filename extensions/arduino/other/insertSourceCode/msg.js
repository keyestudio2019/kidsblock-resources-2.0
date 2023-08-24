/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        INSERTSOURCECODE_CATEGORY: 'Insert Source Code',
        INSERTSOURCECODE_COMMANDBLOCK: 'insert source code %1 %2',
        INSERTSOURCECODE_ESCAPE: 'escape newline',
        INSERTSOURCECODE_DONTESCAPE: 'don\'t escape newline',
        INSERTSOURCECODE_ROUNDBLOCK: 'insert source code %1',
        INSERTSOURCECODE_BOOLEANBLOCK: 'insert source code %1',
        INSERTSOURCECODE_INSERTININCLUDEAREA: 'insert source code %1 in include area %2',
        INSERTSOURCECODE_INSERTINDEFINEAREA: 'insert source code %1 in define area %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        INSERTSOURCECODE_CATEGORY: 'Quellcode einfügen',
        INSERTSOURCECODE_COMMANDBLOCK: 'Quellcode %1 %2 einfügen',
        INSERTSOURCECODE_ESCAPE: 'escape newline',
        INSERTSOURCECODE_DONTESCAPE: 'Neuzeile nicht entkommen',
        INSERTSOURCECODE_ROUNDBLOCK: 'Quellcode %1 einfügen',
        INSERTSOURCECODE_BOOLEANBLOCK: 'Quellcode %1 einfügen',
        INSERTSOURCECODE_INSERTININCLUDEAREA: 'Quellcode %1 in Include-Bereich %2 einfügen',
        INSERTSOURCECODE_INSERTINDEFINEAREA: 'Quellcode %1 in Definitionsbereich %2 einfügen'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        INSERTSOURCECODE_CATEGORY: 'Insertar código fuente',
        INSERTSOURCECODE_COMMANDBLOCK: 'insertar código fuente %1 %2',
        INSERTSOURCECODE_ESCAPE: 'nueva línea de escape',
        INSERTSOURCECODE_DONTESCAPE: 'no escapar de nueva línea',
        INSERTSOURCECODE_ROUNDBLOCK: 'insertar código fuente %1',
        INSERTSOURCECODE_BOOLEANBLOCK: 'insertar código fuente %1',
        INSERTSOURCECODE_INSERTININCLUDEAREA: 'insertar el código fuente %1 en el área de inclusión %2',
        INSERTSOURCECODE_INSERTINDEFINEAREA: 'insertar código fuente %1 en área definida %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        INSERTSOURCECODE_CATEGORY: 'Insérer le code source',
        INSERTSOURCECODE_COMMANDBLOCK: 'insérer le code source %1 %2',
        INSERTSOURCECODE_ESCAPE: 'échapper à la nouvelle ligne',
        INSERTSOURCECODE_DONTESCAPE: 'ne pas échapper à la nouvelle ligne',
        INSERTSOURCECODE_ROUNDBLOCK: 'insérer le code source %1',
        INSERTSOURCECODE_BOOLEANBLOCK: 'insérer le code source %1',
        INSERTSOURCECODE_INSERTININCLUDEAREA: 'insérer le code source %1 dans la zone d"inclusion %2',
        INSERTSOURCECODE_INSERTINDEFINEAREA: 'insérer le code source %1 dans la zone définie %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        INSERTSOURCECODE_CATEGORY: 'ソースコードを挿入',
        INSERTSOURCECODE_COMMANDBLOCK: 'ソース コード %1 %2 を挿入',
        INSERTSOURCECODE_ESCAPE: 'エスケープ改行',
        INSERTSOURCECODE_DONTESCAPE: '改行をエスケープしないでください',
        INSERTSOURCECODE_ROUNDBLOCK: 'ソース コード %1 を挿入',
        INSERTSOURCECODE_BOOLEANBLOCK: 'ソース コード %1 を挿入',
        INSERTSOURCECODE_INSERTININCLUDEAREA: 'ソース コード %1 をインクルード領域 %2 に挿入',
        INSERTSOURCECODE_INSERTINDEFINEAREA: '定義領域 %2 にソース コード %1 を挿入'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        INSERTSOURCECODE_CATEGORY: '소스 코드 삽입',
        INSERTSOURCECODE_COMMANDBLOCK: '소스 코드 %1 %2 삽입',
        INSERTSOURCECODE_ESCAPE: '새 줄 이스케이프',
        INSERTSOURCECODE_DONTESCAPE: '개행 문자를 이스케이프하지 않음',
        INSERTSOURCECODE_ROUNDBLOCK: '소스 코드 %1 삽입',
        INSERTSOURCECODE_BOOLEANBLOCK: '소스 코드 %1 삽입',
        INSERTSOURCECODE_INSERTININCLUDEAREA: '포함 영역 %2에 소스 코드 %1 삽입',
        INSERTSOURCECODE_INSERTINDEFINEAREA: '정의 영역 %2에 소스 코드 %1 삽입'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        INSERTSOURCECODE_CATEGORY: 'Wstaw kod źródłowy',
        INSERTSOURCECODE_COMMANDBLOCK: 'wstaw kod źródłowy %1 %2',
        INSERTSOURCECODE_ESCAPE: 'ucieczka od nowej linii',
        INSERTSOURCECODE_DONTESCAPE: 'nie zmieniaj nowej linii',
        INSERTSOURCECODE_ROUNDBLOCK: 'wstaw kod źródłowy %1',
        INSERTSOURCECODE_BOOLEANBLOCK: 'wstaw kod źródłowy %1',
        INSERTSOURCECODE_INSERTININCLUDEAREA: 'wstaw kod źródłowy %1 w obszarze %2',
        INSERTSOURCECODE_INSERTINDEFINEAREA: 'wstaw kod źródłowy %1 w zdefiniowanym obszarze %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        INSERTSOURCECODE_CATEGORY: 'Inserir código-fonte',
        INSERTSOURCECODE_COMMANDBLOCK: 'insira o código-fonte %1 %2',
        INSERTSOURCECODE_ESCAPE: 'escape nova linha',
        INSERTSOURCECODE_DONTESCAPE: 'não escape da nova linha',
        INSERTSOURCECODE_ROUNDBLOCK: 'insira o código-fonte %1',
        INSERTSOURCECODE_BOOLEANBLOCK: 'inserir código-fonte %1',
        INSERTSOURCECODE_INSERTININCLUDEAREA: 'insira o código-fonte %1 na área de inclusão %2',
        INSERTSOURCECODE_INSERTINDEFINEAREA: 'insira o código-fonte %1 na área de definição %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        INSERTSOURCECODE_CATEGORY: 'Вставить исходный код',
        INSERTSOURCECODE_COMMANDBLOCK: 'вставить исходный код %1 %2',
        INSERTSOURCECODE_ESCAPE: 'экранировать новую строку',
        INSERTSOURCECODE_DONTESCAPE: 'не экранировать новую строку',
        INSERTSOURCECODE_ROUNDBLOCK: 'вставить исходный код %1',
        INSERTSOURCECODE_BOOLEANBLOCK: 'вставить исходный код %1',
        INSERTSOURCECODE_INSERTININCLUDEAREA: 'вставить исходный код %1 во включаемую область %2',
        INSERTSOURCECODE_INSERTINDEFINEAREA: 'вставить исходный код %1 в определяемую область %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        INSERTSOURCECODE_CATEGORY: '插入源代碼',
        INSERTSOURCECODE_COMMANDBLOCK: '插入源代碼 %1 %2',
        INSERTSOURCECODE_ESCAPE: '轉譯換行符',
        INSERTSOURCECODE_DONTESCAPE: '不轉譯換行符',
        INSERTSOURCECODE_ROUNDBLOCK: '插入源代碼 %1',
        INSERTSOURCECODE_BOOLEANBLOCK: '插入源代碼 %1',
        INSERTSOURCECODE_INSERTININCLUDEAREA: '在引用區插入源代碼 %1 %2',
        INSERTSOURCECODE_INSERTINDEFINEAREA: '在定義區插入源代碼 %1 %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        INSERTSOURCECODE_CATEGORY: '插入源代码',
        INSERTSOURCECODE_COMMANDBLOCK: '插入源代码 %1 %2',
        INSERTSOURCECODE_ESCAPE: '转译换行符',
        INSERTSOURCECODE_DONTESCAPE: '不转译换行符',
        INSERTSOURCECODE_ROUNDBLOCK: '插入源代码 %1',
        INSERTSOURCECODE_BOOLEANBLOCK: '插入源代码 %1',
        INSERTSOURCECODE_INSERTININCLUDEAREA: '在引用区插入源代码 %1 %2',
        INSERTSOURCECODE_INSERTINDEFINEAREA: '在定义区插入源代码 %1 %2'
    });
    return Blockly;
}

exports = addMsg;
