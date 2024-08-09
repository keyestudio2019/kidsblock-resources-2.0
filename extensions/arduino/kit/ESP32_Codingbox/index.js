const ESP32codingbox = formatMessage => ({
    name: 'ESP32 coding box',
    extensionId: 'codingbox_ESP32',
    version: '1.0.0',
    supportDevice: ['codingbox_arduinoEsp32'],
    author: 'kidsbits',
    description: formatMessage({
        id: 'ESP32codingbox.description',
        default: 'ESP32 coding box',
        description: 'Description for the ESP32 coding box'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    //helpLink: 'https://fks0001-keyestudio-esp32-core-board-scratch.readthedocs.io/en/latest/'
});

module.exports = ESP32codingbox;
