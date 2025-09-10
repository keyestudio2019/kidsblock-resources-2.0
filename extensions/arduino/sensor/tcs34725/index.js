const tcs34725 = formatMessage => ({
    name: formatMessage({
        id: 'tcs34725',
        default: 'tcs34725',
        description: 'tcs34725 color sensor'
    }),
    extensionId: 'tcs34725',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/tcs34725.jpg`,
    description: formatMessage({
        id: 'tcs34725.description',
        default: 'tcs34725 color sensor',
        description: 'Description of tcs34725 color sensor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = tcs34725;
