const FrogRobot = formatMessage => ({
    name: 'Frog Robot',
    deviceId: 'FrogRobot_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0428.html',
    iconURL: 'asset/frogrobot.jpg',
    description: formatMessage({
        id: 'FrogRobot.description',
        default: 'Frog Robot',
        description: 'Description for the FrogRobot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/frogrobot_big.svg',
    connectionSmallIconURL: 'asset/frogrobot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['robot'],
    deviceExtensions: ['FrogRobot'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0428.html'
});

module.exports = FrogRobot;
