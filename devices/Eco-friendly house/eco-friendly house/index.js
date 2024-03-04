const ECO = formatMessage => ({
    name: 'Eco-friendly house kit for arduino',
    deviceId: 'ECO_arduinoUno',
    manufactor: 'keyestudio',
    //leanMore: 'https://fks0002-keyestudio-nano-scratch.readthedocs.io/en/latest/',
    iconURL: 'asset/eco.jpg',
    description: formatMessage({
        id: 'ECO.description',
        default: 'Eco-friendly house kit',
        description: 'Description for the Eco-friendly house kit'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/eco_big.svg',
    connectionSmallIconURL: 'asset/eco_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['ECO'],
    deviceExtensionsCompatible: 'arduinoUno',
    //helpLink: 'https://fks0002-keyestudio-nano-scratch.readthedocs.io/en/latest//'
});

module.exports = ECO;
