const cube4 = formatMessage => ({
    name: '4*4*4 LED cube',
    deviceId: 'cube4_arduinoUno',
    manufactor: 'keyes',
    //leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/cube4.jpg',
    description: formatMessage({
        id: 'cube4.description',
        default: '4*4*4 LED cube',
        description: 'Description for 4*4*4 LED cube'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/cube4_big.svg',
    connectionSmallIconURL: 'asset/cube4_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['cube4'],
    deviceExtensionsCompatible: 'arduinoUno',
    //helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = cube4;
