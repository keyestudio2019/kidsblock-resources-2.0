const esp32buzzer = formatMessage => ({
    name: formatMessage({
        id: 'esp32buzzer',
        default: 'esp32 Passive buzzer',
        description: 'esp32 Passive buzzer'
    }),
    extensionId: 'esp32buzzer',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/p_buzzer.jpg`,
    description: formatMessage({
        id: 'esp32buzzer.description',
        default: 'esp32 Passive buzzer',
        description: 'Description of esp32 buzzer'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['actuator'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = esp32buzzer;
