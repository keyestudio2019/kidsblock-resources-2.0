const Sengo1 = formatMessage => ({
    name: formatMessage({
        id: 'Sengo1.name',
        default: 'Sengo1 AI module'
    }),
    extensionId: 'Sengo1',
    version: '0.1.3',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32'],
    author: 'keyes',
    iconURL: `assets/sengo1.jpg`,
    description: formatMessage({
        id: 'Sengo1.description',
        default: 'Entry-level AI vision module, supports QR code and face recognition, with block shell'
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

module.exports = Sengo1; 