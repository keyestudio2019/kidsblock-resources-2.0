const eitghtTimesEightMatirxDisplay = formatMessage => ({
    name: formatMessage({
        id: 'eitghtTimesEightMatirxDisplay.name',
        default: '8x8 Matrix Display'
    }),
    extensionId: 'eitghtTimesEightMatirxDisplay',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/eitghtTimesEightMatirxDisplay.jpg`,
    description: formatMessage({
        id: 'eitghtTimesEightMatirxDisplay.description',
        default: '8x8 matrix display module based on MAX7219.'
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

module.exports = eitghtTimesEightMatirxDisplay;
