const AHT20 = formatMessage => ({
    name: formatMessage({
        id: 'AHT20',
        default: 'AHT20温湿度传感器',
        description: 'AHT20温湿度传感器'
    }),
    extensionId: 'AHT20',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/aht20.jpg`,
    description: formatMessage({
        id: 'AHT20.description',
        default: 'AHT20 Temperature and Humidity Sensor',
        description: 'Description of AHT20 Temperature and Humidity Sensor'
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

module.exports = AHT20;
