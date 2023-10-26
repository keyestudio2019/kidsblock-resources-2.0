const BleMouse = formatMessage => ({
    name: formatMessage({
        id: 'BleMouse.name',
        default: 'BleMouse'
    }),
    extensionId: 'BleMouse',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32'],
    author: 'keyes',
    iconURL: `asset/BleMouse.jpg`,
    description: formatMessage({
        id: 'BleMouse.description',
        default: 'Bluetooth mouse for ESP32.'
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

module.exports = BleMouse;
