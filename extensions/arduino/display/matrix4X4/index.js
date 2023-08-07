const matrix4X4 = formatMessage => ({
    name: formatMessage({
        id: 'matrix4X4',
        default: 'Matrix 4X4 ',
        description: 'Matrix 4X4 '
    }),
    extensionId: 'matrix4X4',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoMini', 'arduinoLeonardo','arduinoMega2560', 'arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/4X4.JPG`,
    description: formatMessage({
        id: 'matrix4X4.description',
        default: 'Matrix 4X4 ',
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

module.exports = matrix4X4;
