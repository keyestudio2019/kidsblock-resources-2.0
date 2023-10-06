const ks_dht11 = formatMessage => ({
    name: formatMessage({
        id: 'ks_dht11',
        default: 'DHT11',
        description: 'DHT11'
    }),
    extensionId: 'ks_dht11',
    version: '1.0.0',
    supportDevice: ['arduinoUno', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560'],
    author: 'kidsblock',
    iconURL: `asset/dht.png`,
    description: formatMessage({
        id: 'ks_dht11.description',
        default: 'DHT11 temperature and humidity sensor',
        description: 'Description of dht11'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://openblockcc.gitee.io/wiki/'
});

module.exports = ks_dht11;
