const Sentry1 = formatMessage => ({
    name: formatMessage({
        id: 'Sentry1.name',
        default: 'Sentry1 AI module'
    }),
    extensionId: 'Sentry1',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/icon.jpg`,
    description: formatMessage({
        id: 'Sentry1.description',
        default: 'Visual recognition AI camera base on ESP32'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor','AI'],
    helpLink: 'https://www.keyestudio.com'
});

module.exports = Sentry1;
