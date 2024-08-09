const lcd_pin = formatMessage => ({
    name: formatMessage({
        id: 'lcd_pin.name',
        default: 'LCD1602 PIN'
    }),
    extensionId: 'lcd_pin',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/lcd.jpg`,
    description: formatMessage({
        id: 'lcd_pin.description',
        default: '1602 liquid crystal display.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['display'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = lcd_pin;
