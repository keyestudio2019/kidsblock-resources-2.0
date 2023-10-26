
const RGBcube = formatMessage => ({
    name: 'RGB LED cube',
    extensionId: 'RGBcube',
    version: '1.0.0',
    supportDevice: ['RGBcube_arduinoLeonardo'],
    author: 'keyestudio',
    description: formatMessage({
        id: 'RGBcube.description',
        default: 'RGB LED cube',
        description: 'RGB LED cube'
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

module.exports = RGBcube;
