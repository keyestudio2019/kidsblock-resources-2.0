const IR_send = formatMessage => ({
    name: formatMessage({
        id: 'IR_send.name',
        default: 'IR send',
        description: 'Name of IR_send'
    }),
    extensionId: 'IR_send',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560'],
    author: 'keyes',
    iconURL: `asset/ir_send.jpg`,
    description: formatMessage({
        id: 'IR_send.description',
        default: 'Infrared emission module',
        description: 'Infrared emission module'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['communication'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = IR_send;
