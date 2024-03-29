const KeyesPlus = formatMessage => ({
    name: 'Keyes Plus development board',
    deviceId: 'KeyesPlus_arduinoUno',
    manufactor: 'keyes',
    //leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/keyesplus.jpg',
    description: formatMessage({
        id: 'KeyesPlus.description',
        default: 'Keyes Plus',
        description: 'Description for the KeyesPlus device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/keyesplus_big.svg',
    connectionSmallIconURL: 'asset/keyesplus_small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['KeyesPlus'],
    deviceExtensionsCompatible: 'arduinoUno',
    //helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = KeyesPlus;
