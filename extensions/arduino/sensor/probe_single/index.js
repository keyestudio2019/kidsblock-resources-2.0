const singleProbe = formatMessage => ({
    name: formatMessage({
        id: 'singleProbe.name',
        default: 'singleProbe detection module'
    }),
    extensionId: 'singleProbe',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/singleProbe.jpg`,
    description: formatMessage({
        id: 'singleProbe.description',
        default: 'singleProbe sensor switch.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'www.keyestudio.com'
});

module.exports = singleProbe;
