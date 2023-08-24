/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        QH_DATABASE_CATEGORY:'NET MICRO DATABASE',
        QDP_network_microdatabase_initialization:'Network microdatabase initialization user %1 password %2',
        QDP_web_microdatabase_update_tags:'Network microdatabase updata tag key %1 value %2',
        QDP_web_microdatabase_delete_tags:'Network microdatabase delete tag key %1',
        QDP_web_microdatabase_get_tags:'Network microdatabase get tag key %1 value',
        QDP_web_microdatabase_count_tags:'Network microdatabase query tags count',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        QH_DATABASE_CATEGORY:'NET MICRO DATABASE',
        QDP_network_microdatabase_initialization:'Netzwerk-Mikrodatenbank-Initialisierungsbenutzer %1, Passwort %2',
        QDP_web_microdatabase_update_tags:'Netzwerk-Mikrodatenbank-Aktualisierungs-Tag-Schlüssel %1 Wert %2',
        QDP_web_microdatabase_delete_tags:'Netzwerk-Mikrodatenbank-Tagschlüssel %1 löschen',
        QDP_web_microdatabase_get_tags:'Netzwerk-Mikrodatenbank erhält Tag-Schlüssel %1-Wert',
        QDP_web_microdatabase_count_tags:'Anzahl der Netzwerk-Mikrodatenbank-Abfrage-Tags',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        QH_DATABASE_CATEGORY:'NET MICRO BASE DE DATOS',
        QDP_network_microdatabase_initialization:'Usuario de inicialización de microdatabase de red %1 contraseña %2',
        QDP_web_microdatabase_update_tags:'Clave de etiqueta de actualización de microdatabase de red %1 valor %2',
        QDP_web_microdatabase_delete_tags:'Clave de etiqueta de eliminación de microdatabase de red %1',
        QDP_web_microdatabase_get_tags:'La microdatabase de red obtiene la clave de etiqueta %1 valor',
        QDP_web_microdatabase_count_tags:'Recuento de etiquetas de consulta de microdatabase de red',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        QH_DATABASE_CATEGORY:'NET MICRO DATABASE',
        QDP_network_microdatabase_initialization:'Utilisateur d"initialisation de la microdatabase réseau %1 mot de passe %2',
        QDP_web_microdatabase_update_tags:'Clé de balise de mise à jour de la microdatabase réseau %1 valeur %2',
        QDP_web_microdatabase_delete_tags: 'Clé de balise de suppression de la microdatabase réseau %1',
        QDP_web_microdatabase_get_tags:'La microdatabase réseau obtient la valeur %1 de la clé de balise',
        QDP_web_microdatabase_count_tags:'Nombre de balises de requête de la microdatabase réseau',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        QH_DATABASE_CATEGORY:'ネットマイクロデータベース',
        QDP_network_microdatabase_initialization:'ネットワーク マイクロデータベース初期化ユーザー %1 パスワード %2',
        QDP_web_microdatabase_update_tags:'ネットワーク マイクロデータベース更新タグ キー %1 値 %2',
        QDP_web_microdatabase_delete_tags:'ネットワーク マイクロデータベース削除タグ キー %1',
        QDP_web_microdatabase_get_tags:'ネットワーク マイクロデータベースのタグ キー %1 値を取得',
        QDP_web_microdatabase_count_tags:'ネットワーク マイクロデータベース クエリ タグ数',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        QH_DATABASE_CATEGORY:'NET 마이크로 데이터베이스',
        QDP_network_microdatabase_initialization:'네트워크 마이크로데이터베이스 초기화 사용자 %1 비밀번호 %2',
        QDP_web_microdatabase_update_tags:'네트워크 마이크로데이터베이스 업데이트 태그 키 %1 값 %2',
        QDP_web_microdatabase_delete_tags:'네트워크 마이크로데이터베이스 삭제 태그 키 %1',
        QDP_web_microdatabase_get_tags:'네트워크 마이크로데이터베이스 태그 키 %1 값 가져오기',
        QDP_web_microdatabase_count_tags:'네트워크 마이크로데이터베이스 쿼리 태그 수',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        QH_DATABASE_CATEGORY:'NET MIKROBAZA DANYCH',
        QDP_network_microdatabase_initialization:'Inicjalizacja sieciowej mikrobazy danych użytkownik %1 hasło %2',
        QDP_web_microdatabase_update_tags:'Klucz tagu aktualizacji mikrobazy sieciowej %1 wartość %2',
        QDP_web_microdatabase_delete_tags:'Klucz znacznika usuwania mikrobazy sieciowej %1',
        QDP_web_microdatabase_get_tags:'Sieciowa mikrobaza danych pobierz klucz znacznika %1 wartość',
        QDP_web_microdatabase_count_tags:'Liczba tagów zapytań mikrobazy sieciowej',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        QH_DATABASE_CATEGORY:'NET MICRO BANCO DE DADOS',
        QDP_network_microdatabase_initialization:'Inicialização do microbanco de rede usuário %1 senha %2',
        QDP_web_microdatabase_update_tags:'Chave de tag de atualização de microdatabase de rede %1 valor %2',
        QDP_web_microdatabase_delete_tags:'Chave de tag de exclusão de microdatabase de rede %1',
        QDP_web_microdatabase_get_tags:'Microdatabase de rede obtém chave de tag %1 valor',
        QDP_web_microdatabase_count_tags:'Contagem de tags de consulta de microbanco de rede',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        QH_DATABASE_CATEGORY:'ЧИСТАЯ МИКРОБАЗА ДАННЫХ',
        QDP_network_microdatabase_initialization:'Пользователь инициализации сетевой микробазы данных %1 пароль %2',
        QDP_web_microdatabase_update_tags:'Ключ тега обновления сетевой микробазы данных %1, значение %2',
        QDP_web_microdatabase_delete_tags:'Ключ тега удаления сетевой микробазы данных %1',
        QDP_web_microdatabase_get_tags:'Сетевая микробаза данных получает ключ тега %1 значение',
        QDP_web_microdatabase_count_tags:'Счетчик тегов запроса сетевой микробазы данных',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        QH_DATABASE_CATEGORY:'網絡微數據庫',
        QDP_network_microdatabase_initialization:'網絡微數據庫 初始化 用戶名 %1 密碼 %2',
        QDP_web_microdatabase_update_tags:'網絡微數據庫 更新標籤 標籤名 %1 值 %2',
        QDP_web_microdatabase_delete_tags:'網絡微數據庫 刪除標籤 標籤名 %1',
        QDP_web_microdatabase_get_tags:'網絡微數據庫 獲取標籤 標籤名 %1 的值',
        QDP_web_microdatabase_count_tags:'網絡微數據庫 查詢標籤數',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        QH_DATABASE_CATEGORY:'网络微数据库',
        QDP_network_microdatabase_initialization:'网络微数据库 初始化 用户名 %1 密码 %2',
        QDP_web_microdatabase_update_tags:'网络微数据库 更新标签 标签名 %1 值 %2',
        QDP_web_microdatabase_delete_tags:'网络微数据库 删除标签 标签名 %1',
        QDP_web_microdatabase_get_tags:'网络微数据库 获取标签 标签名 %1 的值',
        QDP_web_microdatabase_count_tags:'网络微数据库 查询标签数',

    });
    return Blockly;
}

exports = addMsg;
