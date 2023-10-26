const easyplugsuper = formatMessage => ({
    name: 'easy plug super kit',
    deviceId: 'easyplugsuperkit_arduinoUno',
    manufactor: 'keyestudio',
    leanMore: 'https://wiki.keyestudio.com/',
    iconURL: 'asset/easyplug_super.jpg',
    description: formatMessage({
        id: 'easyplugsuperkit.description',
        default: 'easy plug super kit',
        description: 'Description for the easy plug super kit'
    }),
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    defaultBaudRate: '9600',
    pnpidList: null, // Use default pnp list
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: 'asset/easyplug_big.svg',
    connectionSmallIconURL: 'asset/easyplug_small.svg',
    programMode: ['upload'],
    programLanguage: ['block', 'cpp'],
    tags: ['kit'],
    deviceExtensions: ['easyplugsuperkit'],
    deviceExtensionsCompatible: 'arduinoUno',
    helpLink: 'https://wiki.keyestudio.com/'
});

module.exports = easyplugsuper;
