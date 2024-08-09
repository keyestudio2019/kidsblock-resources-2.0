const pir = formatMessage => ({
    name: formatMessage({
        id: 'PIR.name',
        default: '热释电红外运动传感器'
    }),
    extensionId: 'PIR',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/pir.jpg`,
    description: formatMessage({
        id: 'pir.description',
        default: 'pir sensor module.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['sensor'],
    helpLink: 'www.keyestudio.com'
});

module.exports = pir;
