const EasyCoding = formatMessage => ({
    name: 'ESP32 Easy Coding Board',
    extensionId: 'EasyCoding',
    version: '1.0.0',
    supportDevice: ['EasyCoding_arduinoEsp32'],
    author: 'keyes',
    description: formatMessage({
        id: 'EasyCoding.description',
        default: 'EasyCoding',
        description: 'ESP32 Easy Coding Board'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = EasyCoding;
