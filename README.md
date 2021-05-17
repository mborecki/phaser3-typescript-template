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
yarn
```

## Developing

```sh
yarn server
```

## Build

```sh
yarn build
```
