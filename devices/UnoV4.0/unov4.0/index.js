const unov4 = formatMessage => ({
    name: 'UNO development board',
    deviceId: 'unov4.0_arduinoUno',
    manufactor: 'keyestudio',
    //leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/uno.jpg',
    description: formatMessage({
        id: 'unov4.description',
        default: 'uno v4.0',
        description: 'Description for the uno v4.0 device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/unov4_big.svg',
    connectionSmallIconURL: 'asset/unov4_small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['unov4'],
    deviceExtensionsCompatible: 'arduinoUno',
    //helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = unov4;
