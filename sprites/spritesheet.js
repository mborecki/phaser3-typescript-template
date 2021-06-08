const fs = require('fs');
let Path = require("path");

// https://www.npmjs.com/package/free-tex-packer-core
let texturePacker = require("free-tex-packer-core");

const spritesheets = [
    {
        outputPath: './assets/generated/',
        filename: '_ph',
        sprites: [
            { name: 'test', path: './sprites/test.jpg' },
            { name: 'dot', path: './sprites/dot.jpg' },
        ]
    }
];

spritesheets.forEach(ss => {
    const images = ss.sprites.map((s) => {
        return {
            path: s.name,
            contents: fs.readFileSync(s.path)
        }
    });
    texturePacker(images, {
        exporter: 'Phaser3',
        textureName: ss.filename,
        packer: 'OptimalPacker',
        padding: 2,
        width: 2048,
        height: 2048,
        allowRotation: false, // Phaser3 nie obsługuje rotacji
        allowTrim: false
    }, (files, error) => {
        if (error) {
            console.error('Packaging failed', error);
        } else {
            for (let item of files) {
                console.log(item.name);
                fs.mkdirSync(ss.outputPath, { recursive: true })
                fs.writeFileSync(Path.join(ss.outputPath, item.name), item.buffer)
            }
        }
    })
});
