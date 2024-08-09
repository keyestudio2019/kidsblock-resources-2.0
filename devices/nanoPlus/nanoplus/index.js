const NanoPlus = formatMessage => ({
    name: 'NANO development board',
    deviceId: 'NanoPlus_arduinoUno',
    manufactor: 'keyestudio',
    //leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/nano.jpg',
    description: formatMessage({
        id: 'NanoPlus.description',
        default: 'Nano Plus',
        description: 'Description for the Nano Plus device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/nano_big.svg',
    connectionSmallIconURL: 'asset/nano_small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['NanoPlus'],
    deviceExtensionsCompatible: 'arduinoUno',
   // helpLink: 'https://wiki.keyestudio.com/KS0486_Keyestudio_PLUS_Development_Board_(Black_And_Eco-friendly)'
});

module.exports = NanoPlus;
