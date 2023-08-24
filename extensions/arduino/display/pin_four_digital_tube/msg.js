/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {    
        PINFOURTUBE_CATEGORY: '4 Digital Tube',
        PINFOURTUBE_INIT: '4 Digital Tube Init a~dp:6~13 digits 1~4:2~5',
        PINFOURTUBE_STRING: '4 digital display data %1 Decimal point%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        PINFOURTUBE_CATEGORY: '4 Digital Tube',
        PINFOURTUBE_INIT: '4 Digital Tube Init a~dp:6~13 Ziffern 1~4:2~5',
        PINFOURTUBE_STRING: '4 digitale Anzeigedaten %1 Dezimalpunkt%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        PINFOOURTUBE_CATEGORY: '4 tubos digitales',
        PINFOOURTUBE_INIT: 'Inicio de 4 válvulas digitales a~dp:6~13 dígitos 1~4:2~5',
        PINFOOURTUBE_STRING: '4 datos de pantalla digital %1 Punto decimal%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        PINFOURTUBE_CATEGORY: '4 tubes numériques',
        PINFOURTUBE_INIT: '4 Digital Tube Init a~dp:6~13 chiffres 1~4:2~5',
        PINFOURTUBE_STRING: '4 données d"affichage numérique %1 Point décimal%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        PINFOURTUBE_CATEGORY: '4 デジタル チューブ',
        PINFOURTUBE_INIT: '4 デジタル チューブ初期化 a~dp:6~13 桁 1~4:2~5',
        PINFOURTUBE_STRING: '4 デジタル表示データ %1 小数点 %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        PINFOURTUBE_CATEGORY: '4 디지털 튜브',
        PINFOURTUBE_INIT: '4 디지털 튜브 초기화 a~dp:6~13 자리 1~4:2~5',
        PINFOURTUBE_STRING: '4 디지털 디스플레이 데이터 %1 소수점%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        PINFOURTUBE_CATEGORY: '4 cyfrowe tuby',
        PINFOURTUBE_INIT: '4 Digital Tube Init a~dp:6~13 cyfr 1~4:2~5',
        PINFOURTUBE_STRING: '4 dane wyświetlacza cyfrowego %1 Przecinek dziesiętny%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        PINFOURTUBE_CATEGORY: '4 tubos digitais',
        PINFOURTUBE_INIT: '4 Digital Tube Init a~dp:6~13 digits 1~4:2~5',
        PINFOURTUBE_STRING: '4 dados de exibição digital %1 Ponto decimal%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        PINFOURTUBE_CATEGORY: '4 цифровых трубки',
        PINFOURTUBE_INIT: '4 Digital Tube Init a~dp:6~13 цифр 1~4:2~5',
        PINFOURTUBE_STRING: '4 цифровых данных дисплея %1 десятичная точка%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        PINFOURTUBE_CATEGORY: '4位數碼管',
        PINFOURTUBE_INIT: '初始化4位數碼管 a~dp:6~13 位1~4:2~5',
        PINFOURTUBE_STRING: '數碼管數字%1 小數位數%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        PINFOURTUBE_CATEGORY: '4位数码管',
        PINFOURTUBE_INIT: '初始化4位数码管 a~dp:6~13 位1~4:2~5',
        PINFOURTUBE_STRING: '数码管数字%1 小数位数%2',
    });
    return Blockly;
}

exports = addMsg;
