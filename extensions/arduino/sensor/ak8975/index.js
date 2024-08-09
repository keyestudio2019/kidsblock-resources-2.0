const ak8975 = formatMessage => ({
    name: formatMessage({
        id: 'ak8975',
        default: 'ak8975电子罗盘传感器',
        description: 'ak8975电子罗盘传感器'
    }),
    extensionId: 'ak8975',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'kidsbits',
    iconURL: `asset/ak8975.jpg`,
    description: formatMessage({
        id: 'ak8975.description',
        default: 'ak8975 compass sensor',
        description: 'Description ak8975 compass sensor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://www.kidsbits.cc/'
});

module.exports = ak8975;
