const matrix8X16 = formatMessage => ({
    name: formatMessage({
        id: 'matrix8X16',
        default: 'Matrix 8X16 ',
        description: 'Matrix 8X16 '
    }),
    extensionId: 'matrix8X16',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/8X16.png`,
    description: formatMessage({
        id: 'matrix.description',
        default: 'Matrix 8X16 ',
        description: 'Description of iic_matrix'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = matrix8X16;
