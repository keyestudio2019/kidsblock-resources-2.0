/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ONETUBE_CATEGORY: '1 Digital Tube',
        ONEINIT: 'Init One digital tube PIN a~dp:2~9',
        ONETUBE_NUMBER: 'One digital_tube display data(0~9)%1 dot%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        ONETUBE_CATEGORY: '1 digitale Röhre',
        ONEINIT: 'Init One digital tube PIN a~dp:2~9',
        ONETUBE_NUMBER: 'Eine digitale_Röhre zeigt Daten an (0~9)%1 Punkt%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        ONETUBE_CATEGORY: '1 tubo digital',
        ONEINIT: 'Init One digital tube PIN a~dp:2~9',
        ONETUBE_NUMBER: 'Un tubo digital muestra datos (0~9)%1 punto%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        ONETUBE_CATEGORY: '1 tube numérique',
        ONEINIT: 'Init One tube numérique PIN a ~ dp: 2 ~ 9',
        ONETUBE_NUMBER: 'Un tube numérique affiche les données (0~9)%1 point%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        ONETUBE_CATEGORY: '1 デジタル チューブ',
        ONEINIT: 'Init One デジタル チューブ PIN a~dp:2~9',
        ONETUBE_NUMBER: '1 つのデジタルチューブ表示データ (0~9)%1 ドット%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        ONETUBE_CATEGORY: '디지털 튜브 1개',
        ONEINIT: 'Init One 디지털 튜브 PIN a~dp:2~9',
        ONETUBE_NUMBER: '하나의 digital_tube 디스플레이 데이터(0~9)%1 dot%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        ONETUBE_CATEGORY: '1 tuba cyfrowa',
        ONEINIT: 'Init One digital tube PIN a~dp:2~9',
        ONETUBE_NUMBER: 'Jedna cyfrowa rura wyświetlająca dane (0~9)%1 kropka%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        ONETUBE_CATEGORY: '1 tubo digital',
        ONEINIT: 'Iniciar um PIN de tubo digital a~dp:2~9',
        ONETUBE_NUMBER: 'Um tubo digital exibe dados (0~9)%1 ponto%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        ONETUBE_CATEGORY: '1 цифровая трубка',
        ONEINIT: 'Init One digital tube PIN a~dp:2~9',
        ONETUBE_NUMBER: 'Данные дисплея одной цифровой_трубки (0~9)%1 точка%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        ONETUBE_CATEGORY: '1位數碼管',
        ONEINIT: '初始化一位數碼管 引腳a~dp:2~9',
        ONETUBE_NUMBER: '一位數碼管顯示數字(0~9)%1 小數點%2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ONETUBE_CATEGORY: '1位数码管',
        ONEINIT: '初始化一位数码管 引脚a~dp:2~9',
        ONETUBE_NUMBER: '一位数码管显示数字(0~9)%1 小数点%2',
    });
    return Blockly;
}

exports = addMsg;
