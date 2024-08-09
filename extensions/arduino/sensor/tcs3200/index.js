const tcs3200 = formatMessage => ({
    name: 'TCS3200',
    extensionId: 'tcs3200',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/tcs3200.jpg`,
    description: formatMessage({
        id: 'tcs3200.description',
        default: 'Color sensor module based on TCS3200.'
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

module.exports = tcs3200;
