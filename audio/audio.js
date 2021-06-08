var audiosprite = require('audiosprite')
const fs = require('fs');

var files = ['./audio/*.wav']
var opts = {
    output: './assets/generated/audio-album',
    format: 'howler2'
}

audiosprite(files, opts, function (err, obj) {
    if (err) return console.error(err)

    const json = JSON.stringify(obj, null, 2)
        .replace(/public\//g, '');

    fs.writeFileSync('./assets/generated/audio.json', json)
});
