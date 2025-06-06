/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: 'init pca9685 iic address %1',
        PCA9685_SETTOSERVOMODE: 'pca9685 set to servo mode',
        PCA9685_SETSERVOANGLE: 'pca9685 set channel %1 servo angle %2',
        PCA9685_SETALLSERVOANGLE: 'pca9685 set all servo angle %1',
        PCA9685_SETPWMFREQUENCY: 'pca9685 set pwm frequency %1',
        PCA9685_SETCHANNELPWM: 'pca9685 set channel %1 pwm value %2',
        PCA9685_SETALLCHANNELPWM: 'pca9685 set all channel pwm value %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: 'init pca9685 iic-Adresse %1',
        PCA9685_SETTOSERVOMODE: 'pca9685 auf Servomodus eingestellt',
        PCA9685_SETSERVOANGLE: 'pca9685 setze Kanal %1 Servowinkel %2',
        PCA9685_SETALLSERVOANGLE: 'pca9685 setzt alle Servowinkel %1',
        PCA9685_SETPWMFREQUENCY: 'pca9685 hat die PWM-Frequenz %1 eingestellt',
        PCA9685_SETCHANNELPWM: 'pca9685 hat Kanal %1 pwm-Wert %2 gesetzt',
        PCA9685_SETALLCHANNELPWM: 'pca9685 hat den pwm-Wert für alle Kanäle %1 gesetzt'
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: 'inicia la dirección iic pca9685 %1',
        PCA9685_SETTOSERVOMODE: 'pca9685 configurado en modo servo',
        PCA9685_SETSERVOANGLE: 'pca9685 establecer canal %1 servoángulo %2',
        PCA9685_SETALLSERVOANGLE: 'pca9685 establece todos los ángulos de servo %1',
        PCA9685_SETPWMFREQUENCY: 'pca9685 establece frecuencia pwm %1',
        PCA9685_SETCHANNELPWM: 'pca9685 establecer canal %1 valor pwm %2',
        PCA9685_SETALLCHANNELPWM: 'pca9685 establece el valor pwm de todos los canales %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: 'init pca9685 adresse iic %1',
        PCA9685_SETTOSERVOMODE: 'pca9685 réglé sur le mode servo',
        PCA9685_SETSERVOANGLE: 'pca9685 définit l angle d"asservissement du canal %1 %2',
        PCA9685_SETALLSERVOANGLE: 'pca9685 définit tous les angles de servo %1',
        PCA9685_SETPWMFREQUENCY: 'pca9685 définit la fréquence pwm %1',
        PCA9685_SETCHANNELPWM: 'pca9685 définit le canal %1 valeur pwm %2',
        PCA9685_SETALLCHANNELPWM: 'pca9685 définit la valeur pwm de tous les canaux %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: 'PCA9685 IIC アドレス %1 を初期化',
        PCA9685_SETTOSERVOMODE: 'PCA9685 をサーボ モードに設定',
        PCA9685_SETSERVOANGLE: 'pca9685 チャネル %1 サーボ角度 %2 を設定',
        PCA9685_SETALLSERVOANGLE: 'pca9685 はすべてのサーボ角度 %1 を設定',
        PCA9685_SETPWMFREQUENCY: 'pca9685 は pwm 周波数 %1 を設定',
        PCA9685_SETCANNELPWM: 'pca9685 チャンネル %1 の pwm 値 %2 を設定',
        PCA9685_SETALLCHANNELPWM: 'pca9685 はすべてのチャネルの pwm 値 %1 を設定します'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: 'pca9685 iic 주소 %1 초기화',
        PCA9685_SETTOSERVOMODE: 'pca9685가 서보 모드로 설정됨',
        PCA9685_SETSERVOANGLE: 'pca9685 채널 %1 서보 각도 %2 설정',
        PCA9685_SETALLSERVOANGLE: 'pca9685 모든 서보 각도 %1 설정',
        PCA9685_SETPWMFREQUENCY: 'pca9685는 PWM 주파수 %1을(를) 설정했습니다',
        PCA9685_SETCHANNELPWM: 'pca9685 채널 %1 PWM 값 %2을(를) 설정했습니다',
        PCA9685_SETALLCHANNELPWM: 'pca9685 모든 채널 PWM 값 %1 설정'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: 'początkowy adres pca9685 iic %1',
        PCA9685_SETTOSERVOMODE: 'pca9685 ustawiony na tryb serwo',
        PCA9685_SETSERVOANGLE: 'pca9685 ustaw kanał %1 kąt serwa %2',
        PCA9685_SETALLSERVOANGLE: 'pca9685 ustaw cały kąt serwa %1',
        PCA9685_SETPWMFREQUENCY: 'pca9685 ustaw częstotliwość pwm %1',
        PCA9685_SETCHANNELPWM: 'pca9685 ustaw kanał %1 wartość pwm %2',
        PCA9685_SETALLCHANNELPWM: 'pca9685 ustaw wartość pwm wszystkich kanałów %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        PCA9685_CATEGORIA: 'PCA9685',
        PCA9685_INIT: 'iniciar endereço pca9685 iic%1',
        PCA9685_SETTOSERVOMODE: 'pca9685 configurado para modo servo',
        PCA9685_SETSERVOANGLE: 'pca9685 ajusta canal %1 servo ângulo %2',
        PCA9685_SETALLSERVOANGLE: 'pca9685 define todos os ângulos do servo %1',
        PCA9685_SETPWMFREQUENCY: 'pca9685 define pwm frequência %1',
        PCA9685_SETCHANNELPWM: 'pca9685 define canal %1 pwm valor %2',
        PCA9685_SETALLCHANNELPWM: 'pca9685 define todos os valores pwm de canal %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: 'инициализировать pca9685 iic-адрес %1',
        PCA9685_SETTOSERVOMODE: 'pca9685 установлен в режим сервопривода',
        PCA9685_SETSERVOANGLE: 'pca9685 установить канал %1 угол сервопривода %2',
        PCA9685_SETALLSERVOANGLE: 'pca9685 установить все углы сервопривода %1',
        PCA9685_SETPWMFREQUENCY: 'pca9685 установил частоту ШИМ %1',
        PCA9685_SETCHANNELPWM: 'pca9685 установить канал %1 значение ШИМ %2',
        PCA9685_SETALLCHANNELPWM: 'pca9685 установил значение ШИМ для всех каналов %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: '初始化 pca9685 iic 地址 %1',
        PCA9685_SETTOSERVOMODE: 'pca9685 設置為舵機模式',
        PCA9685_SETSERVOANGLE: 'pca9685 設置通道 %1 舵機角度 %2',
        PCA9685_SETALLSERVOANGLE: 'pca9685 設置所有舵機角度 %1',
        PCA9685_SETPWMFREQUENCY: 'pca9685 設置 pwm 頻率 %1',
        PCA9685_SETCHANNELPWM: 'pca9685 設置通道 %1 pwm 值 %2',
        PCA9685_SETALLCHANNELPWM: 'pca9685 設置所有通道 pwm 值 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: '初始化 pca9685 iic 地址 %1',
        PCA9685_SETTOSERVOMODE: 'pca9685 设置为舵机模式',
        PCA9685_SETSERVOANGLE: 'pca9685 设置通道 %1 舵机角度 %2',
        PCA9685_SETALLSERVOANGLE: 'pca9685 设置所有舵机角度 %1',
        PCA9685_SETPWMFREQUENCY: 'pca9685 设置 pwm 频率 %1',
        PCA9685_SETCHANNELPWM: 'pca9685 设置通道 %1 pwm 值 %2',
        PCA9685_SETALLCHANNELPWM: 'pca9685 设置所有通道 pwm 值 %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        PCA9685_CATEGORY: 'PCA9685',  
        PCA9685_INIT: 'inizializza pca9685 indirizzo iic %1',  
        PCA9685_SETTOSERVOMODE: 'pca9685 impostato in modalità servo',  
        PCA9685_SETSERVOANGLE: 'pca9685 imposta angolo servo canale %1 %2',  
        PCA9685_SETALLSERVOANGLE: 'pca9685 imposta angolo di tutti i servi %1',  
        PCA9685_SETPWMFREQUENCY: 'pca9685 imposta frequenza pwm %1',  
        PCA9685_SETCHANNELPWM: 'pca9685 imposta valore pwm canale %1 %2',  
        PCA9685_SETALLCHANNELPWM: 'pca9685 imposta valore pwm di tutti i canali %1'
    });
    return Blockly;
}

exports = addMsg;
