const eightDigitDisplay = formatMessage => ({
    name: formatMessage({
        id: 'eightDigitDisplay.name',
        default: '8-Digit Display'
    }),
    extensionId: 'eightDigitDisplay',
    version: '1.0.0',
   
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/eightDigitDisplay.jpg`,
    description: formatMessage({
        id: 'eightDigitDisplay.description',
        default: '8-digit display module based on MAX7219.'
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

module.exports = eightDigitDisplay;
