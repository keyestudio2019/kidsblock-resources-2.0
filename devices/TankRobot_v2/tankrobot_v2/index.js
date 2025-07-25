const TankRobotv2 = formatMessage => ({
    name: 'Tank Robot v2.0',
    deviceId: 'TankRobotv2_arduinoUno',
    manufactor: 'keyes',
    leanMore: 'https://www.keyesrobot.cn/projects/KE0170/zh-cn/latest/',
    iconURL: 'asset/tankRobot.jpg',
    description: formatMessage({
        id: 'TankRobotv2.description',
        default: 'TankRobot v2.0',
        description: 'Description for the TankRobot v2.0 device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/tankrobot_big.svg',
    connectionSmallIconURL: 'asset/tankrobot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['robot'],
    deviceExtensions: ['TankRobotv2'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://www.keyesrobot.cn/projects/KE0170/zh-cn/latest/'
});

module.exports = TankRobotv2;
