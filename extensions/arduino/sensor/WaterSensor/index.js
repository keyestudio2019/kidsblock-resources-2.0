const WaterSensor = formatMessage => ({
    name: formatMessage({
        id: 'WaterSensor.name',
        default: 'Water level sensor'
    }),
    extensionId: 'WaterSensor',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/WaterSensor.jpg`,
    description: formatMessage({
        id: 'WaterSensor.description',
        default: 'A Water level sensor.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['sensor'],
    helpLink: 'www.keyestudio.com'
});

module.exports = WaterSensor;
