const TankRobotv2 = formatMessage => ({
    name: 'Tank Robot v2.0',
    extensionId: 'TankRobotv2',
    version: '1.0.0',
    supportDevice: ['TankRobotv2_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'TankRobotv2.description',
        default: 'TankRobot v2.0',
        description: 'Description of TankRobot v2.0'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://www.keyesrobot.cn/projects/KE0170/zh-cn/latest/'
});

module.exports = TankRobotv2;
