const keybot = formatMessage => ({
    name: 'keybot',
    extensionId: 'keybot',
    version: '1.0.0',
    supportDevice: ['keybot_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'keybot.description',
        default: 'keybot',
        description: 'Description of keybot'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = keybot;
