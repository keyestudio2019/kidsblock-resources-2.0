const esp32dht = formatMessage => ({
    name: formatMessage({
        id: 'dht11 sensor',
        default: 'DHT sensor for ESP32'
    }),
    extensionId: 'esp32dht',
    version: '1.0.0',
    supportDevice: ['arduinoEsp32', 'arduinoEsp8266'],
    author: 'keyes',
    iconURL: `asset/dht.jpg`,
    description: formatMessage({
        id: 'esp32dht.description',
        default: 'DHT Temperature and humidity sensor module for ESP32'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['sensor'],
    helpLink: 'https://www.keyestudio.com/'
});

module.exports = esp32dht;
