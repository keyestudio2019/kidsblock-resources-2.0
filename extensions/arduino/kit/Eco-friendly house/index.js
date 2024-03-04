const ECO = formatMessage => ({
    name: 'Eco-friendly house kit for arduino',
    extensionId: 'ECO',
    version: '1.0.0',
    supportDevice: ['ECO_arduinoUno'],
    author: 'keyestudio',
    description: formatMessage({
        id: 'ECO.description',
        default: 'Eco-friendly house kit',
        description: 'Description of Eco-friendly house kit for arduino'
    }),
    featured: true,
    hide: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    //helpLink: 'https://fks0002-keyestudio-nano-scratch.readthedocs.io/en/latest/)'
});

module.exports = ECO;
