const ESP32_servo270 = formatMessage => ({
    name: formatMessage({
        id: 'ESP32_servo270',
        default: 'ESP32 Servo 270',
        description: 'ESP32 Servo 270'
    }),
    extensionId: 'ESP32_servo270',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/servo.jpg`,
    description: formatMessage({
        id: 'ESP32_servo270.description',
        default: 'ESP32 Servo driver',
        description: 'Description of ESP32_servo 270'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://keyestudio.com'
});

module.exports = ESP32_servo270;
