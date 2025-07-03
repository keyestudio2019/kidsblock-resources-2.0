const Sengo2 = formatMessage => ({
    name: formatMessage({
        id: 'Sengo2.name',
        default: 'Sengo2 AI module'
    }),
    extensionId: 'Sengo2',
    version: '0.1.2',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32'],
    author: 'keyes',
    iconURL: `assets/sengo2.jpg`,
    description: formatMessage({
        id: 'Sengo2.description',
        default: 'Mainstream AI vision module, supporting QR code and face recognition with built-in learning, in a block shell.',
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor', 'AI'],
    helpLink: 'https://tosee.readthedocs.io/zh/latest/'
});

module.exports = Sengo2; 