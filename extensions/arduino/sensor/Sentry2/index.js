const Sentry2 = formatMessage => ({
    name: formatMessage({
        id: 'Sentry2.name',
        default: 'Sentry2 AI module'
    }),
    extensionId: 'Sentry2',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/icon.jpg`,
    description: formatMessage({
        id: 'Sentry2.description',
        default: 'Visual recognition AI camera base on K210'
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

module.exports = Sentry2;
