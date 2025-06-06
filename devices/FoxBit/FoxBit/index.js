const FoxBit = formatMessage => ({
    name: 'FoxBit Board',
    deviceId: 'FoxBit_arduinoEsp32',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com/',
    iconURL: 'asset/FoxBit.jpg',
    description: formatMessage({
        id: 'FoxBit.description',
        default: 'FoxBit',
        description: 'FoxBit Board  '
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/FoxBit_big.svg',
    connectionSmallIconURL: 'asset/FoxBit_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['FoxBit'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = FoxBit;
