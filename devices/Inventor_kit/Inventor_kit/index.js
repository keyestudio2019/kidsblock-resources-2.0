const Inventor = formatMessage => ({
    name: 'Inventor kit for arduino',
    deviceId: 'Inventor_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://fks0002-keyestudio-nano-scratch.readthedocs.io/en/latest/',
    iconURL: 'asset/Inventor.jpg',
    description: formatMessage({
        id: 'Inventor.description',
        default: 'Inventor Starter kit',
        description: 'Description for the Inventor Starter kit'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/inventor_big.svg',
    connectionSmallIconURL: 'asset/inventor_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['Inventor'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://fks0002-keyestudio-nano-scratch.readthedocs.io/en/latest//'
});

module.exports = Inventor;
