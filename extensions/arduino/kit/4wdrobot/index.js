const BT4WDRobot = formatMessage => ({
    name: '4WD Robot',
    extensionId: '4WDRobot',
    version: '1.0.0',
    supportDevice: ['4WDRobot_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: '4WDRobot.description',
        default: '4WDRobot',
        description: 'Description of 4WDRobot'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://ks0559ks0559fkeyestudio-4wd-bt-multi-purpose-car-v20-scratch.readthedocs.io/en/latest/'
});

module.exports = BT4WDRobot;
