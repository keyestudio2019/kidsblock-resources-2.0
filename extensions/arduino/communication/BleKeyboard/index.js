const BleKeyboard = formatMessage => ({
    name: formatMessage({
        id: 'BleKeyboard.name',
        default: 'BleKeyboard'
    }),
    extensionId: 'BleKeyboard',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/BleKeyboard.png`,
    description: formatMessage({
        id: 'BleKeyboard.description',
        default: '"Bluetooth keyboard for ESP32.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
    helpLink: 'http://keyestudio.com'
});

module.exports = BleKeyboard;
