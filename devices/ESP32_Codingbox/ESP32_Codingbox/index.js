const ESP32codingbox = formatMessage => ({
    name: 'ESP32 coding box',
    deviceId: 'codingbox_arduinoEsp32',
    manufactor: 'kidsbits',
    //leanMore: 'https://fks0001-keyestudio-esp32-core-board-scratch.readthedocs.io/en/latest/',
    iconURL: 'asset/esp32codingbox.jpg',
    description: formatMessage({
        id: 'ESP32codingbox.description',
        default: 'ESP32 coding box',
        description: 'Description for the ESP32 coding box'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/esp32codingbox_big.svg',
    connectionSmallIconURL: 'asset/esp32codingbox_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit','kidsbits'],
    deviceExtensions: ['codingbox_ESP32'],
    deviceExtensionsCompatible: 'arduinoEsp32',
    helpLink: 'https://fks0001-keyestudio-esp32-core-board-scratch.readthedocs.io/en/latest/'
});

module.exports = ESP32codingbox;
