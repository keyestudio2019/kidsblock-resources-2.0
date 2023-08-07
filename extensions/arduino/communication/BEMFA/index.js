const BEMFA = formatMessage => ({
    name: formatMessage({
        id: 'BEMFA.name',
        default: '巴法云 BEMFA cloud',
        description: '巴法云BEMFA cloud IOT'
    }),
    extensionId: 'BEMFA',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/BEMFA.png`,
    description: formatMessage({
        id: 'BEMFA.description',
        default: '物联网开源app、小程序制作.',
        description: '巴法云 BEMFA cloud IOT'
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

module.exports = BEMFA;
