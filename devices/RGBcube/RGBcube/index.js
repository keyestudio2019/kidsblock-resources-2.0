const RGBcube = formatMessage => ({
    name: 'RGB LED cube',
    deviceId: 'RGBcube_arduinoLeonardo',
    manufactor: 'keyes',
    //leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/RGBcube.jpg',
    description: formatMessage({
        id: 'RGBcube.description',
        default: 'RGB LED cube',
        description: 'Description for RGB LED cube'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/RGBcube_big.svg',
    connectionSmallIconURL: 'asset/RGBcube_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['RGBcube'],
    deviceExtensionsCompatible: 'arduinoLeonardo',
    //helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = RGBcube;
