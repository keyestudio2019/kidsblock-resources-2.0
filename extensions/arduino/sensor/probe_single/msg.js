/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SINGLEPROBE_CATEGORY: 'single-probe patrol sensor',
        SINGLEPROBE_READ_STATE: 'White was detected by the single-probe patrol sensor in interface %1？',
        SINGLEPROBE_READ_VALUE: 'A state value of single-probe patrol sensor in interface %1？'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        SINGLEPROBE_CATEGORY: 'Einzelsonden-Patrouillensensor',
        SINGLEPROBE_READ_STATE: 'Weiß wurde vom Single-Probe-Patrol-Sensor in Schnittstelle %1 erkannt?',
        SINGLEPROBE_READ_VALUE: 'Ein Statuswert des Single-Probe-Patrol-Sensors in Schnittstelle %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        SINGLEPROBE_CATEGORY: 'sensor de patrulla de sonda única',
        SINGLEPROBE_READ_STATE: 'El sensor de patrulla de sonda única detectó blanco en la interfaz %1?',
        SINGLEPROBE_READ_VALUE: '¿Un valor de estado del sensor de patrulla de sonda única en la interfaz %1?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        SINGLEPROBE_CATEGORY: 'capteur de patrouille à sonde unique',
        SINGLEPROBE_READ_STATE: 'Le blanc a été détecté par le capteur de patrouille à sonde unique dans l"interface %1？',
        SINGLEPROBE_READ_VALUE: 'Une valeur d"état du capteur de patrouille à sonde unique dans l"interface %1？'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        SINGLEPROBE_CATEGORY: 'シングルプローブ パトロール センサー',
        SINGLEPROBE_READ_STATE: 'インターフェイス %1 のシングルプローブ パトロール センサーによって白が検出されました?',
        SINGLEPROBE_READ_VALUE: 'インターフェイス %1 のシングルプローブ パトロール センサーの状態値?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        SINGLEPROBE_CATEGORY: '단일 프로브 순찰 센서',
        SINGLEPROBE_READ_STATE: '인터페이스 %1의 단일 프로브 순찰 센서에 의해 흰색이 감지되었습니다.',
        SINGLEPROBE_READ_VALUE: '인터페이스 %1의 단일 프로브 순찰 센서의 상태 값입니까?'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        SINGLEPROBE_CATEGORY: 'czujnik patrolowy z jedną sondą',
        SINGLEPROBE_READ_STATE: 'Wykryto kolor biały przez czujnik patrolujący z pojedynczą sondą w interfejsie %1?',
        SINGLEPROBE_READ_VALUE: 'Wartość stanu czujnika patrolowego z pojedynczą sondą w interfejsie %1？'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        SINGLEPROBE_CATEGORY: 'sensor de patrulha de sonda única',
        SINGLEPROBE_READ_STATE: 'O branco foi detectado pelo sensor de patrulha de sonda única na interface %1？',
        SINGLEPROBE_READ_VALUE: 'Um valor de estado do sensor de patrulha de sonda única na interface %1？'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        SINGLEPROBE_CATEGORY: 'патрульный датчик с одним зондом',
        SINGLEPROBE_READ_STATE: 'Белый цвет был обнаружен датчиком патрулирования с одним зондом в интерфейсе %1？',
        SINGLEPROBE_READ_VALUE: 'Значение состояния патрульного датчика с одним зондом в интерфейсе %1？'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        SINGLEPROBE_CATEGORY: '單探頭尋線傳感器',
        SINGLEPROBE_READ_STATE: '接口%1單探頭巡線傳感器檢測到白色？ ',
        SINGLEPROBE_READ_VALUE: '接口%1單探頭巡線傳感器的狀態值'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SINGLEPROBE_CATEGORY: '单探头寻线传感器',
        SINGLEPROBE_READ_STATE: '接口%1单探头巡线传感器检测到白色？',
        SINGLEPROBE_READ_VALUE: '接口%1单探头巡线传感器的状态值'
    });
    return Blockly;
}

exports = addMsg;
