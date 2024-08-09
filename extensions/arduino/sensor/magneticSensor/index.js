const magneticSensor = formatMessage => ({
    name: formatMessage({
        id: 'magneticSensor.name',
        default: 'magneticSensor detection module'
    }),
    extensionId: 'magneticSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/magneticSensor.jpg`,
    description: formatMessage({
        id: 'magneticSensor.description',
        default: 'magneticSensor sensor switch.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'www.keyestudio.com'
});

module.exports = magneticSensor;
