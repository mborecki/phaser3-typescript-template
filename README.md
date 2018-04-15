# Phaser3 template w/ TypeScript and WebPack - WIP

A simple example using Phaser with TypeScript and WebPack.

# Specs

* Phaser 3.1.2

# Problems/Issues

* `/src/scenes/*.ts` - I have to set `this.game` and `this.sys.settings.key` manualy because....
* `/src/scenes/boot.ts#preload` - I have to set xhrConfig manualy because type definitions force me to do this.

# How to use?

## Setup

```sh
npm install
```

## Developing

```sh
npm run server
```

## Build

```sh
npm run build
```
