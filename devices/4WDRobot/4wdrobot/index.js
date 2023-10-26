const BT4WDRobot = formatMessage => ({
    name: '4WD Robot',
    deviceId: '4WDRobot_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://ks0559ks0559fkeyestudio-4wd-bt-multi-purpose-car-v20-scratch.readthedocs.io/en/latest/',
    iconURL: 'asset/4wdrobot.jpg',
    description: formatMessage({
        id: '4WDRobot.description',
        default: '4WDRobot',
        description: 'Description for the 4WDRobot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/4wdrobot_big.svg',
    connectionSmallIconURL: 'asset/4wdrobot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['robot'],
    deviceExtensions: ['4WDRobot'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://ks0559ks0559fkeyestudio-4wd-bt-multi-purpose-car-v20-scratch.readthedocs.io/en/latest/'
});

module.exports = BT4WDRobot;
