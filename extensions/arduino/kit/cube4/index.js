const cube4 = formatMessage => ({
    name: formatMessage({
        id: 'cube4',
        default: '4*4*4 LED cube',
        description: '4*4*4 LED cube'
    }),
    extensionId: 'cube4',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno'],
    author: 'keyes',
    iconURL: `asset/cube4.png`,
    description: formatMessage({
        id: 'cube4.description',
        default: 'LED cube4*4*4',
        description: 'LED cube4*4*4'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['kit'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = cube4;
