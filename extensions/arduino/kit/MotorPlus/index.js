const MotorPlus = formatMessage => ({
    name: 'MotorPlus',
    extensionId: 'MotorPlus',
    version: '1.0.0',
    supportDevice: ['MotorPlus_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'MotorPlus.description',
        default: 'MotorPlus',
        description: 'Description of MotorPlus'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = MotorPlus;
