/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 connect the wifi ssid %1 password %2',
        
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 verbindet WLAN-SSID %1, Passwort %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        KS8266_CATEGORÍA: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 conectar wifi ssid %1 contraseña %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 connecte le ssid wifi %1 mot de passe %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 Wi-Fi ssid %1 パスワード %2 に接続',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266은 Wi-Fi ssid %1 암호 %2 연결',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 połącz wifi ssid %1 hasło %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 conecte o wifi ssid %1 senha %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 подключите Wi-Fi ssid %1, пароль %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 連接wifi 名稱 %1 密碼 %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 连接wifi 名称 %1 密码 %2',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        KS8266_CATEGORY: 'esp8266_wifi',
        KS8266_INIT: 'ESP8266 Connessione WiFi Nome %1 Password %2',        
    });
    return Blockly;
}

exports = addMsg;
