const Arduino_TFT = formatMessage => ({
    name: formatMessage({
        id: 'Arduino_TFT.name',
        default: 'Arduino TFT Display',
        description: 'Arduino TFT Display'
    }),
    extensionId: 'arduinoArduino_TFT',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/Arduino_TFT.png`,
    description: formatMessage({
        id: 'Arduino_TFT.description',
        default: 'Arduino TFT Display',
        description: 'Arduino_TFT.description'
    }),
    featured: true,
    blocks: `blocks.js`,
    generator: `generator.js`,
    toolbox: `toolbox.js`,
    msg: `msg.js`,               
    library: 'lib',
    tags: ['display'],
    helpLink: 'http://keyestudio.com'
});

module.exports = Arduino_TFT;