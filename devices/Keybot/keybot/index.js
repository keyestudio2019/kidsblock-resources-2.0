const keybot = formatMessage => ({
    name: 'keybot',
    deviceId: 'keybot_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0464.html',
    iconURL: 'asset/keybot.JPG',
    description: formatMessage({
        id: 'keybot.description',
        default: 'keybot',
        description: 'Description for the keybot device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/keybot_big.svg',
    connectionSmallIconURL: 'asset/keybot_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['robot'],
    deviceExtensions: ['keybot'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://keyestudio-wiki.readthedocs.io/en/latest/docs/arduino/KS0464.html'
});

module.exports = keybot;
