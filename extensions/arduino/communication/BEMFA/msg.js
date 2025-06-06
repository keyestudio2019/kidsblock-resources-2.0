/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BEMFA_CATEGORY:'BEMFA cloud',
        tcp_device_cloud_subscription:'BEMFA IOT %1 auth %2 subject %3 %4 receive message %5',
        serialPrint:'Serial print  %1 %2',
        print:'print',
        println:'println',
        tcp_device_cloud_theme_push:'BEMFA IOT push %1 auth %2 subject %3 content %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        BEMFA_CATEGORY:'BEMFA-Cloud',
        tcp_device_cloud_subscription:'BEMFA IOT %1 Auth %2 Betreff %3 %4 Nachricht empfangen %5',
        serialPrint:'Seriendruck %1 %2',
        print:'print',
        println:'println',
        tcp_device_cloud_theme_push:'BEMFA IOT Push %1 Authentifizierung %2 Betreff %3 Inhalt %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        BEMFA_CATEGORY:'nube BEMFA',
        tcp_device_cloud_subscription:'BEMFA IOT %1 autenticación %2 asunto %3 %4 recibir mensaje %5',
        serialPrint:'Impresión serial %1 %2',
        print: 'imprimir',
        println:'imprimir',
        tcp_device_cloud_theme_push:'BEMFA IOT push %1 autenticación %2 asunto %3 contenido %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        BEMFA_CATEGORY:'Nuage BEMFA',
        tcp_device_cloud_subscription:'BEMFA IOT %1 auth %2 sujet %3 %4 reçoit le message %5',
        serialPrint:'Impression série %1 %2',
        print:'imprimer',
        println:'println',
        tcp_device_cloud_theme_push: 'BEMFA IOT push %1 auth %2 subject %3 content %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        BEMFA_CATEGORY:'BEMFA クラウド',
        tcp_device_cloud_subscription:'BEMFA IOT %1 認証 %2 件名 %3 %4 メッセージ %5 を受信',
        serialPrint:'シリアル印刷 %1 %2',
        print:'印刷',
        println:'println',
        tcp_device_cloud_theme_push:'BEMFA IOT プッシュ %1 認証 %2 件名 %3 コンテンツ %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        BEMFA_CATEGORY:'BEMFA 클라우드',
        tcp_device_cloud_subscription:'BEMFA IOT %1 인증 %2 제목 %3 %4 수신 메시지 %5',
        serialPrint:'시리얼 프린트 %1 %2',
        print:'인쇄',
        println:'프린트',
        tcp_device_cloud_theme_push:'BEMFA IOT 푸시 %1 인증 %2 제목 %3 콘텐츠 %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        BEMFA_CATEGORY:'BEMFA chmura',
        tcp_device_cloud_subscription:'BEMFA IOT %1 auth %2 temat %3 %4 odbierz wiadomość %5',
        serialPrint:'Wydruk seryjny %1%2',
        print: 'drukuj',
        println:'println',
        tcp_device_cloud_theme_push:'BEMFA IOT push %1 auth %2 temat %3 zawartość %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        BEMFA_CATEGORY:'nuvem BEMFA',
        tcp_device_cloud_subscription:'BEMFA IOT %1 auth %2 assunto %3 %4 receber mensagem %5',
        serialPrint:'Impressão serial %1 %2',
        print:'imprimir',
        println:'println',
        tcp_device_cloud_theme_push:'BEMFA IOT push %1 auth %2 assunto %3 conteúdo %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        BEMFA_CATEGORY:'Облако BEMFA',
        tcp_device_cloud_subscription: 'BEMFA IOT %1 auth %2 subject %3 %4 получает сообщение %5',
        serialPrint:'Последовательная печать %1 %2',
        print: 'печать',
        println:'println',
        tcp_device_cloud_theme_push: 'BEMFA IOT push %1 auth %2 subject %3 content %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        BEMFA_CATEGORY:'巴法雲',
        tcp_device_cloud_subscription:'巴法雲物聯網 %1 密鑰 %2 主題 %3 %4 收到消息 %5',
        serialPrint:'串口打印 %1 %2',
        print:'不換行',
        println:'換行',
        tcp_device_cloud_theme_push:'巴法雲物聯網 推送 %1 密鑰 %2 主題 %3 內容 %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BEMFA_CATEGORY:'巴法云',
        tcp_device_cloud_subscription:'巴法云物联网 %1 密钥 %2 主题 %3 %4 收到消息 %5',
        serialPrint:'串口打印 %1 %2',
        print:'不换行',
        println:'换行',
        tcp_device_cloud_theme_push:'巴法云物联网 推送 %1 密钥 %2 主题 %3 内容 %4'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        BEMFA_CATEGORY: 'Bafa Cloud',
        tcp_device_cloud_subscription: 'Bafa Cloud IoT %1 chiave %2 tema %3 %4 messaggio ricevuto %5',
        serialPrint: 'Stampa su porta seriale %1 %2',
        print: 'Senza andare a capo',
        println: 'Con andare a capo',
        tcp_device_cloud_theme_push: 'Bafa Cloud IoT invia %1 chiave %2 tema %3 contenuto %4',        
    });
    return Blockly;
}

exports = addMsg;
