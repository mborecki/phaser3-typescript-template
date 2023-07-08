# Phaser3 template w/ TypeScript and WebPack - WIP

A simple example using Phaser with TypeScript and WebPack.

# Specs

* Phaser 3.60.0

# Dependencies

For audio to work you need installed ffmped on your system.
Download from https://www.ffmpeg.org/download.html

# Problems/Issues

* `/src/scenes/*.ts` - I have to set `this.game` and `this.sys.settings.key` manualy because....

# How to use?

## Setup

```sh
yarn
```

## Developing

```sh
yarn start
```

### Sprites

Template uses:
* [free-tex-packer-core](https://www.npmjs.com/package/free-tex-packer-core) to merge sprites into attlases
* [imagemin](https://www.npmjs.com/package/imagemin) with [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) to minimalize file size.

1. Add files to `/sprites` folder
2. Edit `/sprites/spritesheets.config.js`
3. Load sprites into game in `preload()` in file `/src/scenes/boot.ts`
4. Build altlasses using: `yarn sprites`

### Audio
Template uses:
* [audiosprite](https://www.npmjs.com/package/audiosprite) to combine multiple audio files into one, and convert `*.wav` files into `mp3`,`ogg`.
* [howler](https://www.npmjs.com/package/howler) to play sounds

1. Add `.wav` files into `./audio` folder
2. Run `yarn audio`

Use:

```
import getAudioPlayer from "./audio"; // /src/audio.ts

(await getAudioPlayer()).play('blip');
```

## Build

```sh
yarn build
```
