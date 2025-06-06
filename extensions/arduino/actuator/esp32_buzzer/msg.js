/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BUZZER_CATEGORY: 'Passive buzzer',
        BUZZER_TONE_D: 'Tone PIN#%1 frequency%2 duration%3',
        BUZZER_MUSIC: 'Tone PIN#%1 play music%2',
        BUZZER_NOTONE: 'noTone%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        BUZZER_CATEGORY: 'Passiver Summer',
        BUZZER_TONE_D: 'Ton-PIN#%1 Häufigkeit%2 Dauer%3',
        BUZZER_MUSIC: 'Ton-PIN#%1 Musik abspielen%2',
        BUZZER_NOTONE: 'noTone%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        BUZZER_CATEGORY: 'Zumbador pasivo',
        BUZZER_TONE_D: 'Tono PIN#%1 frecuencia%2 duración%3',
        BUZZER_MUSIC: 'Tono PIN#%1 reproducir música%2',
        BUZZER_NOTONE: 'sin tono%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        BUZZER_CATEGORY: "Sonnerie passive",
        BUZZER_TONE_D: 'Tonalité PIN #%1 fréquence%2 durée%3',
        BUZZER_MUSIC: 'Tone PIN#%1 play music%2',
        BUZZER_NOTONE: 'pas de tonalité%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        BUZZER_CATEGORY: 'パッシブブザー',
        BUZZER_TONE_D: 'トーン PIN#%1 頻度%2 期間%3',
        BUZZER_MUSIC: 'トーン PIN#%1 音楽%2 を再生',
        BUZZER_NOTONE: 'noTone%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        BUZZER_CATEGORY: '패시브 버저',
        BUZZER_TONE_D: 'Tone PIN#%1 주파수%2 지속시간%3',
        BUZZER_MUSIC: 'Tone PIN#%1 음악 재생%2',
        BUZZER_NOTONE: '노톤%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        BUZZER_CATEGORY: 'Brzęczyk pasywny',
        BUZZER_TONE_D: 'Ton PIN#%1 częstotliwość%2 czas trwania%3',
        BUZZER_MUSIC: 'Ton PIN#%1 odtwarzanie muzyki%2',
        BUZZER_NOTONE: 'brak tonu%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        BUZZER_CATEGORY: 'Campainha passiva',
        BUZZER_TONE_D: 'Tom PIN#%1 frequência%2 duração%3',
        BUZZER_MUSIC: 'Tone PIN#%1 toca música%2',
        BUZZER_NOTONE: 'noTone%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        BUZZER_CATEGORY: 'Пассивный зуммер',
        BUZZER_TONE_D: 'Тональный PIN-код #%1, частота%2, продолжительность%3',
        BUZZER_MUSIC: 'Тон PIN#%1 для воспроизведения музыки%2',
        BUZZER_NOTONE: 'noTone%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        BUZZER_CATEGORY: '無源蜂鳴器',
        BUZZER_TONE_D: '播放聲音 引腳%1 頻率%2 節拍%3',
        BUZZER_MUSIC: '蜂鳴器 引腳%1 播放音樂%2',
        BUZZER_NOTONE: '結束聲音 引腳%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BUZZER_CATEGORY: '无源蜂鸣器',
        BUZZER_TONE_D: '播放声音 引脚%1 频率%2 节拍%3',
        BUZZER_MUSIC: '蜂鸣器 引脚%1 播放音乐%2',
        BUZZER_NOTONE: '结束声音 引脚%1',
    });
    Object.assign(Blockly.ScratchMsgs.locales['it'], {
        BUZZER_CATEGORY: 'Buzzer passivo',
        BUZZER_TONE_D: 'Riproduci suono Pin%1 frequenza%2 battito%3',
        BUZZER_MUSIC: 'Buzzer Pin%1 riproduci musica%2',
        BUZZER_NOTONE: 'Ferma suono Pin%1',        
    });
    return Blockly;
}

exports = addMsg;
