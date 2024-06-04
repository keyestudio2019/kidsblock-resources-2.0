const KeyesSTEM = formatMessage => ({
    name: 'KeyesSTEM',
    extensionId: 'KeyesSTEM',
    version: '1.0.0',
    supportDevice: ['KeyesSTEM_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'KeyesSTEM.description',
        default: 'Keyes STEM',
        description: 'Description of Keyes STEM'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
});

module.exports = KeyesSTEM;
