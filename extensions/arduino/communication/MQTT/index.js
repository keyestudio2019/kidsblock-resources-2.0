const MQTT = formatMessage => ({
    name: formatMessage({
        id: 'MQTT.name',
        default: 'MQTT',
        description: 'MQTT'
    }),
    extensionId: 'MQTT',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32','arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/MQTT.png`,
    description: formatMessage({
        id: 'MQTT.description',
        default: '物联网开源app、小程序制作.',
        description: '通用MQTT连接'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'http://keyestudio.com'
});

module.exports = MQTT;
