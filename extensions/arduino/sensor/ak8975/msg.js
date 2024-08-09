/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        AK8975_CATEGORY: 'AK8975 electronic compass',
        AK8975_INIT: 'Initialize AK8975 electronic compass',
        AK8975_READ: 'Read AK8975 %1 magnetic field strength',
        AK8975_DEGREE: 'Read the angle of AK8975 magnetic field direction',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        AK8975_CATEGORY: 'Elektronischer Kompass AK8975',
        AK8975_INIT: 'Elektronischen Kompass AK8975 initialisieren',
        AK8975_READ: 'AK8975 %1 Magnetfeldstärke lesen',
        AK8975_DEGREE: 'Lesen Sie den Winkel der Magnetfeldrichtung des AK8975',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        AK8975_CATEGORY: 'Brújula electrónica AK8975',
        AK8975_INIT: 'Inicializar brújula electrónica AK8975',
        AK8975_READ: 'Leer AK8975 %1 intensidad del campo magnético',
        AK8975_DEGREE: 'Leer el ángulo de dirección del campo magnético AK8975',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        AK8975_CATEGORY: 'Boussole électronique AK8975',
        AK8975_INIT: 'Initialiser la boussole électronique AK8975',
        AK8975_READ: 'Lire l"intensité du champ magnétique AK8975 %1',
        AK8975_DEGREE: 'Lire l"angle de la direction du champ magnétique AK8975',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        AK8975_CATEGORY: 'AK8975 電子コンパス',
        AK8975_INIT: 'AK8975電子コンパスの初期化',
        AK8975_READ: 'AK8975 %1 磁界強度を読み取る',
        AK8975_DEGREE: 'AK8975の磁界方向の角度を読み取る',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        AK8975_CATEGORY: 'AK8975 전자 나침반',
        AK8975_INIT: 'AK8975 전자 나침반 초기화',
        AK8975_READ: 'AK8975 %1 자기장 강도 읽기',
        AK8975_DEGREE: 'AK8975 자기장 방향의 각도 읽기',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        AK8975_CATEGORY: 'Kompas elektroniczny AK8975',
        AK8975_INIT: 'Zainicjuj kompas elektroniczny AK8975',
        AK8975_READ: 'Przeczytaj AK8975 %1 natężenie pola magnetycznego',
        AK8975_DEGREE: 'Odczytaj kąt kierunku pola magnetycznego AK8975',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        AK8975_CATEGORY: 'bússola eletrônica AK8975',
        AK8975_INIT: 'Inicializar bússola eletrônica AK8975',
        AK8975_READ: 'Ler AK8975 %1 intensidade do campo magnético',
        AK8975_DEGREE: 'Ler o ângulo da direção do campo magnético AK8975',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        AK8975_CATEGORY: 'Электронный компас AK8975',
        AK8975_INIT: 'Инициализировать электронный компас AK8975',
        AK8975_READ: 'Читать AK8975 %1 напряженность магнитного поля',
        AK8975_DEGREE: 'Читать угол направления магнитного поля AK8975',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        AK8975_CATEGORY: 'AK8975 電子羅盤',
        AK8975_INIT: '初始化 AK8975 電子羅盤',
        AK8975_READ: '讀取 AK8975 %1 磁場強度',
        AK8975_DEGREE: '讀取 AK8975磁場方向的角度',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        AK8975_CATEGORY: 'AK8975 电子罗盘',
        AK8975_INIT: '初始化 AK8975 电子罗盘',
        AK8975_READ: '读取 AK8975 %1 磁场强度',
        AK8975_DEGREE: '读取 AK8975磁场方向的角度',
    });
    return Blockly;
}

exports = addMsg;
