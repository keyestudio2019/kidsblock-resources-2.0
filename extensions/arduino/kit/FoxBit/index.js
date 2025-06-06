const FoxBit = formatMessage => ({
    name: 'FoxBit Board',
    extensionId: 'FoxBit',
    version: '1.0.0',
    supportDevice: ['FoxBit_arduinoEsp32'],
    author: 'keyes',
    description: formatMessage({
        id: 'FoxBit.description',
        default: 'FoxBit',
        description: 'FoxBit Board'
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

module.exports = FoxBit;
