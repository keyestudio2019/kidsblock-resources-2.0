const sharpIR = formatMessage => ({
    name: formatMessage({
        id: 'sharpIR.name',
        default: 'Sharp IR Sensor'
    }),
    extensionId: 'sharpIR',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/sharpIR.jpg`,
    description: formatMessage({
        id: 'sharpIR.description',
        default: 'Infrared distance sensor based on the principle of triangle ranging.'
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

module.exports = sharpIR;
