const l298n = formatMessage => ({
    name: formatMessage({
        id: 'l298n',
        default: 'L298N',
        description: 'L298N'
    }),
    extensionId: 'l298n',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/l298n.jpg`,
    description: formatMessage({
        id: 'l298n.description',
        default: 'Common high power dual motor drive module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = l298n;
