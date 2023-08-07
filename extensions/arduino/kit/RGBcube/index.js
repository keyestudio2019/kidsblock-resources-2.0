const RGBcube = formatMessage => ({
    name: formatMessage({
        id: 'RGBcube',
        default: 'RGB LED cube',
        description: 'RGB LED cube'
    }),
    extensionId: 'RGBcube',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoLeonardo'],
    author: 'keyes',
    iconURL: `asset/RGBcube.png`,
    description: formatMessage({
        id: 'RGBcube.description',
        default: 'RGB LED cube',
        description: 'RGB LED cube'
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

module.exports = RGBcube;
