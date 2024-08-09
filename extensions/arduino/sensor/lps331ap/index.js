const lps331ap = formatMessage => ({
    name: formatMessage({
        id: 'lps331ap',
        default: 'lps331ap气压传感器',
        description: 'lps331ap气压传感器'
    }),
    extensionId: 'lps331ap',
    version: '1.0.0',
    type: 'arduino',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/lps331ap.jpg`,
    description: formatMessage({
        id: 'lps331ap.description',
        default: 'lps331ap baro pressure sensor',
        description: 'Description of lps331ap baro pressure sensor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = lps331ap;
