const soilSensor = formatMessage => ({
    name: formatMessage({
        id: 'soilSensor.name',
        default: 'soil sensor'
    }),
    extensionId: 'soilSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/SoilSensor.jpg`,
    description: formatMessage({
        id: 'soilSensor.description',
        default: 'A soil sensor.'
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

module.exports = soilSensor;
