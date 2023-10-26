const easyplugsuper = formatMessage => ({
    name: 'easy plug super kit',
    extensionId: 'easyplugsuperkit',
    version: '1.0.0',
    supportDevice: ['easyplugsuperkit_arduinoUno'],
    author: 'keyes',
    description: formatMessage({
        id: 'easyplugsuperkit.description',
        default: 'easy plug super kit',
        description: 'Description of easy plug super kit'
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

module.exports = easyplugsuper;
