const Smartschool_ESP32 = formatMessage => ({
    name: 'Smart school for ESP32',
    deviceId: 'Smartschool_arduinoEsp32',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com/',
    iconURL: 'asset/smartschool.jpg',
    description: formatMessage({
        id: 'SmartschoolESP32.description',
        default: 'Smart school kit for ESP32',
        description: 'Description for the Smart school kit for ESP32'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/smartschool_big.svg',
    connectionSmallIconURL: 'asset/smartschool_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['Smartschool_ESP32'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = Smartschool_ESP32;
