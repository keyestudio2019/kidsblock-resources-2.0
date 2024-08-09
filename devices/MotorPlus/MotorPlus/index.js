const MotorPlus = formatMessage => ({
    name: 'Motor Plus development board',
    deviceId: 'MotorPlus_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://www.keyestudio.com/',
    iconURL: 'asset/motorplus.jpg',
    description: formatMessage({
        id: 'MotorPlus.description',
        default: 'Motor Plus',
        description: 'Description for the MotorPlus device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/motorplus_big.svg',
    connectionSmallIconURL: 'asset/motorplus_small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['MotorPlus'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = MotorPlus;
