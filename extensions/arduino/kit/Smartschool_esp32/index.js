const Smartschool_ESP32 = formatMessage => ({
    name: 'Smart school for ESP32',
    extensionId: 'Smartschool_ESP32',
    version: '1.0.0',
    supportDevice: ['Smartschool_arduinoEsp32'],
    author: 'keyestudio',
    description: formatMessage({
        id: 'SmartschoolESP32.description',
        default: 'Smart school kit for ESP32',
        description: 'Description of Smart school kit for ESP32'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    helpLink: 'https://wiki.keyestudio.com)'
});

module.exports = Smartschool_ESP32;
