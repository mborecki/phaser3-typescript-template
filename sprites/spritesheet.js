const fs = require('fs');
let Path = require("path");
const crypto = require("crypto");

// https://www.npmjs.com/package/free-tex-packer-core
let texturePacker = require("free-tex-packer-core");

const imagemin = import('imagemin');
const imageminPngquant = require('imagemin-pngquant');

const config = require('./spritesheets.config')();

const fileNames = new Map();
const filesWithHash = new Set();

const { baseOutputPath, baseInputPath } = config;

const packingPromises = config.files.map(sheetConfig => {

    const inputBase = sheetConfig.inputBase || '';
    const namePrefix = sheetConfig.namePrefix || '';
    const filename = sheetConfig.filename;
    const outputPath = sheetConfig.outputPath;
    const sprites = sheetConfig.sprites;

    const images = sprites.map((s) => {
        return {
            path: s.name,
            contents: fs.readFileSync(Path.join(baseInputPath, inputBase, s.path))
        }
    });
    return new Promise((resolve, reject) => {
        texturePacker(images, {
            exporter: 'Phaser3',
            textureName: filename,
            packer: 'OptimalPacker',
            padding: 2,
            width: 2048,
            height: 2048,
            detectIdentical: false,
            allowRotation: false,
            allowTrim: false
        }, (files, error) => {
            if (error) {
                console.error('Packaging failed', error);
                reject(error);
            } else {

                resolve(Promise.all(files.map(item => {
                    fs.mkdirSync(Path.join(baseOutputPath, outputPath), { recursive: true })

                    return imagemin.then((min) => {
                        return min.default.buffer(item.buffer, {
                            plugins: [imageminPngquant()]
                        }).then((data) => {
                            fileNames.set(filename, Path.join(outputPath, item.name.replace(/\.[^/.]+$/, "")));

                            return fs.promises.writeFile(Path.join(baseOutputPath, outputPath, item.name), data)
                        }).catch(error => {
                            console.log(error);
                        })
                    })
                })).then((x) => {
                    console.log('Spritesheet generated:', filename);
                }))
            }
        })
    })
});

Promise.all(packingPromises)
    .then(() => {

        fileNames.forEach((filepath, filename) => {

            console.log('TUTAJ!!!!!!', )

            const PNGFile = Path.join(baseOutputPath, filepath + '.png');
            const JSONFile = Path.join(baseOutputPath, filepath + '.json');

            const png = fs.readFileSync(PNGFile);
            const json = JSON.parse(fs.readFileSync(JSONFile));

            const hash = crypto.createHash('md5').update(png).digest('hex');

            json.textures.forEach((data) => {
                data.image = data.image.replace(/\.png$/, `.${hash}.png`)
            });
            fs.writeFileSync(JSONFile, JSON.stringify(json, null, 4))


            const newJSONfile = `${filepath}.${hash}.json`;
            const newPNGfile = `${filepath}.${hash}.png`;


            fs.renameSync(Path.join(baseOutputPath, filepath + '.png'), Path.join(baseOutputPath, newPNGfile));
            fs.renameSync(Path.join(baseOutputPath, filepath + '.json'), Path.join(baseOutputPath, newJSONfile));

            filesWithHash.add([filename, newPNGfile, newJSONfile])
        })

        console.log('Spritesheet list', Array.from(filesWithHash));

        fs.writeFileSync(Path.join('./src/sprites-index.json'), JSON.stringify(Array.from(filesWithHash)));
    })
