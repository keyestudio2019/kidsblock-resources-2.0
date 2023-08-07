const FrogRobot = formatMessage => ({
    name: 'Frog Robot',
    extensionId: 'FrogRobot',
    version: '1.0.0',
    supportDevice: ['FrogRobot_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'FrogRobot.description',
        default: 'Frog Robot',
        description: 'Description of Frog Robot'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = FrogRobot;
