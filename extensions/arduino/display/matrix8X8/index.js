const matrix_e = formatMessage => ({
    name: formatMessage({
        id: 'matrix_e',
        default: 'Matrix 8*8 ',
        description: 'Matrix 8*8 '
    }),
    extensionId: 'matrix_e',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/8X8.JPG`,
    description: formatMessage({
        id: 'matrix_e.description',
        default: 'Matrix 8*8 ',
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

module.exports = matrix_e;
