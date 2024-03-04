const kidsEsp = formatMessage => ({
    name: 'kidsIOT',
    deviceId: 'kidsEsp_arduinoEsp32',
    manufactor: 'kidsbits',
    //leanMore: 'https://www.keyestudio.com/products/2020-new-keyestudio-plus-development-board-with-type-c-interface-usb-cable-compatible-with-arduino-uno-r3',
    iconURL: 'asset/kidsEsp.jpg',
    description: formatMessage({
        id: 'kidsIOT.description',
        default: 'arduinoEsp32',
        description: 'Description for the arduinoEsp32 ESP32 device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/kidsesp_big.svg',
    connectionSmallIconURL: 'asset/kidsesp_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['kidsEsp_esp32'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://wiki.kidsbits.cc)'
});

module.exports = kidsEsp;
