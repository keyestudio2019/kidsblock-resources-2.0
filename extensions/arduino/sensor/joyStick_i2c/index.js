const joyStick_i2c = formatMessage => ({
    name: formatMessage({
        id: 'joyStick_i2c',
        default: 'joyStick i2c module'
    }),
    extensionId: 'joyStick_i2c',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/joyStick_i2c.jpg`,
    description: formatMessage({
        id: 'joyStick_i2c.description',
        default: 'i2c joyStick module.'
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

module.exports = joyStick_i2c;
