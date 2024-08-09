const beetle_wifi = formatMessage => ({
    name: formatMessage({
        id: 'beetle_wifi',
        default: 'Beetlebot wifi',
        description: 'Beetlebot wifi'
    }),
    extensionId: 'beetle_wifi',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/wifi_01.jpg`,
    description: formatMessage({
        id: 'beetle_wifi.description',
        default: 'wifi communication'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = beetle_wifi;
