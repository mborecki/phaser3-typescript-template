module.exports = () => {
    return {
        baseOutputPath: './assets/generated/',
        baseInputPath: './sprites/',
        files: [
            {
                inputBase: '',

                outputPath: 'sprites/',
                filename: 'sprites',

                sprites: [
                    { name: 'test', path: 'test.jpg' },
                    { name: 'dot', path: 'dot.jpg' },
                ]
            }
        ]
    }
}
