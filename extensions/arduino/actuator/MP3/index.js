const MP3 = formatMessage => ({
    name: formatMessage({
        id: 'MP3',
        default: 'MP3 Module',
        description: 'MP3 Module'
    }),
    extensionId: 'MP3',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/MP3.jpg`,
    description: formatMessage({
        id: 'MP3.description',
        default: 'MP3 Module',
        description: 'Description of MP3 Module'
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

module.exports = MP3;
