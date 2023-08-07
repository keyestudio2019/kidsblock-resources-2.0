const ESP_WEB_PRO = formatMessage => ({
    name: formatMessage({
        id: 'ESP_WEB_PRO.name',
        default: 'Web Page Editing PRO',
        description: 'webpage for ESP development board'
    }),
    extensionId: 'ESP_WEB_PRO',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32','arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/webpage.png`,
    description: formatMessage({
        id: 'ESP_WEB_PRO.description',
        default: 'Devices Controlling on Web Page.',
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

module.exports = ESP_WEB_PRO;
