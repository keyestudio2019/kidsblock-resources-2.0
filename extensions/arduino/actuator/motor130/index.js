const motor130 = formatMessage => ({
    name: formatMessage({
        id: 'motor130',
        default: 'DC Motor',
        description: 'DC Motor'
    }),
    extensionId: 'motor130',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/motor130.jpg`,
    description: formatMessage({
        id: 'motor130.description',
        default: 'Driving DC motor',
        description: 'Description of motor130'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['actuator'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = motor130;
