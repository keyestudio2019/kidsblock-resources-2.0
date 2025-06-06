/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MQTT_subscribe_plus:'creation MQTT Client and connect to server address %1 Agent so %2 client ID %3 username %4 password %5',
        MQTT_received_the_news:'When receiving the subject %1 message',
        MQTT_publish:'MQTT Send the message %1 to the topic %2'
    });

    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        MQTT_subscribe_plus:'MQTT-Client erstellen und mit Serveradresse %1 Agent verbinden, also %2 Client-ID %3 Benutzername %4 Passwort %5',
        MQTT_received_the_news:'Beim Empfang der Nachricht mit dem Betreff %1',
        MQTT_publish:'MQTT Sende die Nachricht %1 an das Thema %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        MQTT_subscribe_plus:'creación del Cliente MQTT y conexión a la dirección del servidor %1 Agente para que %2 ID de cliente %3 nombre de usuario %4 contraseña %5',
        MQTT_received_the_news:'Al recibir el asunto %1 mensaje',
        MQTT_publish:'MQTT Enviar el mensaje %1 al tema %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        MQTT_subscribe_plus: 'création du client MQTT et connexion à l"adresse du serveur %1 Agent donc %2 ID client %3 nom d"utilisateur %4 mot de passe %5',
        MQTT_received_the_news:'Lors de la réception du message sujet %1',
        MQTT_publish:'MQTT Envoyer le message %1 au sujet %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        MQTT_subscribe_plus:'MQTT クライアントを作成し、サーバー アドレス %1 エージェントに接続します。したがって %2 クライアント ID %3 ユーザー名 %4 パスワード %5',
        MQTT_received_the_news:'件名 %1 メッセージを受信したとき',
        MQTT_publish:'MQTT メッセージ %1 をトピック %2 に送信します'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        MQTT_subscribe_plus:'MQTT 클라이언트 생성 및 서버 주소 %1에 연결 에이전트 그래서 %2 클라이언트 ID %3 사용자 이름 %4 비밀번호 %5',
        MQTT_received_the_news:'제목 %1 메시지를 수신할 때',
        MQTT_publish:'MQTT 메시지 %1을(를) 주제 %2에 보내기'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        MQTT_subscribe_plus:'utwórz klienta MQTT i połącz się z serwerem o adresie %1 Agent, więc %2 identyfikator klienta %3 nazwa użytkownika %4 hasło %5',
        MQTT_received_the_news:'Po otrzymaniu wiadomości o temacie %1',
        MQTT_publish:'MQTT Wyślij wiadomość %1 do tematu %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        MQTT_subscribe_plus:'criação do cliente MQTT e conexão ao endereço do servidor %1 Agente para %2 ID do cliente %3 nome de usuário %4 senha %5',
        MQTT_received_the_news:'Ao receber a mensagem do assunto %1',
        MQTT_publish:'MQTT Envia a mensagem %1 para o tópico %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        MQTT_subscribe_plus:'создание MQTT-клиента и подключение к серверу с адресом агента %1, поэтому %2 идентификатор клиента %3 имя пользователя %4 пароль %5',
        MQTT_received_the_news:'При получении сообщения по теме %1',
        MQTT_publish:'MQTT Отправьте сообщение %1 в тему %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MQTT_subscribe_plus:'创建MQTT客户端并连接 服务器地址 %1 代理网口 %2 客户端ID %3 用户名 %4 密码 %5',
        MQTT_received_the_news:'当收到主题 %1 消息',
        MQTT_publish:'MQTT发送消息 %1 到主题 %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales["zh-tw"], {
        MQTT_subscribe_plus:'創建MQTT客戶端並連接 伺服器地址 %1 代理網口 %2 客戶端ID %3 用戶名 %4 密碼 %5',
        MQTT_received_the_news:'當收到主題 %1 消息',
        MQTT_publish:'MQTT發送消息 %1 到主題 %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        MQTT_subscribe_plus: 'Crea un client MQTT e connetti Indirizzo server %1 Porta proxy %2 ID client %3 Nome utente %4 Password %5',
        MQTT_received_the_news: 'Quando ricevi un messaggio dal tema %1',
        MQTT_publish: 'Invia messaggio MQTT %1 al tema %2',        
    });
    return Blockly;
}

exports = addMsg;
