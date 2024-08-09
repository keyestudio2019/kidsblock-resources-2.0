const rgbLedStrip = formatMessage => ({
    name: formatMessage({
        id: 'rgbLedStrip.name',
        default: 'RGB LED Strip'
    }),
    extensionId: 'rgbLedStrip.name',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/rgbLedStrip.jpg`,
    description: formatMessage({
        id: 'rgbLedStrip.description',
        default: 'Single-wire-based RGB LED pixels and strip.'
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

module.exports = rgbLedStrip;
