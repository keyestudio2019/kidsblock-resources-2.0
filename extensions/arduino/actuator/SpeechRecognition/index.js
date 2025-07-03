/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
const SpeechRecognition = formatMessage => ({
    name: formatMessage({
        id: 'SpeechRecognition.name',
        default: ' Speech Recognition module'
    }),
    extensionId: 'SpeechRecognition',
    version: '1.0.0',
    supportDevice: ['arduinoUno','arduinoLeonardo','arduinoMega2560','arduinoEsp32','arduinoEsp8266'],
    author: 'keyestudio',
    iconURL: `asset/SpeechRecognition.jpg`,
    description: formatMessage({
        id: 'SpeechRecognition.description',
        default: ' Speech Recognition module.',
        description: 'Description of Speech Recognition'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    tags: ['AI'],
    helpLink: 'www.keyestudio.com'
});

module.exports = SpeechRecognition;
