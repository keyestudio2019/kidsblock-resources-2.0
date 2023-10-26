const ESP_WEB = formatMessage => ({
    name: formatMessage({
        id: 'ESP_WEB.name',
        default: '网页编辑 ESP webpage',
        description: 'webpage for ESP development board'
    }),
    extensionId: 'ESP_WEB',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32','arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/webpage.jpg`,
    description: formatMessage({
        id: 'ESP_WEB.description',
        default: '网页上控制设备的编程平台.',
        description: 'webpage for ESP development board'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://www.keyestudio.com'
});

module.exports = ESP_WEB;
