const KeyesSTEM = formatMessage => ({
    name: 'Keyes STEM development board',
    deviceId: 'KeyesSTEM_arduinoUno',
    manufactor: 'keyes',
    iconURL: 'asset/keyesSTEM.jpg',
    description: formatMessage({
        id: 'KeyesSTEM.description',
        default: 'Keyes STEM',
        description: 'Description for the Keyes STEM device'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/keyesSTEM_big.svg',
    connectionSmallIconURL: 'asset/keyesSTEM_small.svg',
    programMode: ['realtime', 'upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['arduino'],
    deviceExtensions: ['KeyesSTEM'],
    deviceExtensionsCompatible: 'arduinoUno',
});

module.exports = KeyesSTEM;
