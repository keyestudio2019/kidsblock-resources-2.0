const EasyCoding = formatMessage => ({
    name: 'ESP32 Easy Coding Board',
    deviceId: 'EasyCoding_arduinoEsp32',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com/',
    iconURL: 'asset/EasyCoding.png',
    description: formatMessage({
        id: 'EasyCoding.description',
        default: 'EasyCoding',
        description: 'ESP32 Easy Coding Board  '
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/EasyCoding_big.svg',
    connectionSmallIconURL: 'asset/EasyCoding_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['EasyCoding'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = EasyCoding;
