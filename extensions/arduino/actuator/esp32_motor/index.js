const esp32motor = formatMessage => ({
    name: formatMessage({
        id: 'esp32motor',
        default: 'DC Motor for esp32',
        description: 'DC Motor for esp32'
    }),
    extensionId: 'esp32motor',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/motor130.jpg`,
    description: formatMessage({
        id: 'esp32motor.description',
        default: 'Driving DC motor',
        description: 'Description of esp32motor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    tags: ['actuator'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = esp32motor;
