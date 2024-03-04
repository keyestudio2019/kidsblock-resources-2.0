const kidsEsp = formatMessage => ({
    name: 'kidsIOT',
    extensionId: 'kidsEsp_esp32',
    version: '1.0.0',
    supportDevice: ['kidsEsp_arduinoEsp32'],
    author: 'keyes',
    description: formatMessage({
        id: 'kidsIOT.description',
        default: 'kidsEsp ESP32',
        description: 'Description of kidsEsp'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.kidsbits.cc)'
});

module.exports = kidsEsp;
