const cooperativeScheduler = formatMessage => ({
    name: formatMessage({
        id: 'cooperativeScheduler.name',
        default: 'Cooperative Scheduler'
    }),
    extensionId: 'cooperativeScheduler',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/cooperativeScheduler.jpg`,
    description: formatMessage({
        id: 'cooperativeScheduler.description',
        default: 'Allow Arduino run multiple tasks.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['other'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = cooperativeScheduler;
