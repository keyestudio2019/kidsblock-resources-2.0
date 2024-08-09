const Sentry = formatMessage => ({
    name: formatMessage({
        id: 'Sentry.name',
        default: 'Sentry Sensor'
    }),
    extensionId: 'Sentry',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/icon.jpg`,
    description: formatMessage({
        id: 'Sentry.description',
        default: 'Visual recognition AI camera.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    helpLink: 'https://www.keyestudio.com'
});

module.exports = Sentry;
