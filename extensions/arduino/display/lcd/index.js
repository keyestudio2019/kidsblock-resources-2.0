const lcd = formatMessage => ({
    name: formatMessage({
        id: 'lcd.name',
        default: 'LCD1602 IIC'
    }),
    extensionId: 'lcd',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/lcd.jpg`,
    description: formatMessage({
        id: 'lcd.description',
        default: '1602 liquid crystal display which based on I2C bus.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    //helpLink: 'https://www.keyestudio.com/'
});

module.exports = lcd;
