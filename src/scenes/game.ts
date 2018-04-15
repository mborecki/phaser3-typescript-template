import * as Phaser from 'phaser';

export class GameState extends Phaser.Scene {

    init() { }
    preload() { }

    create() {
        this.add.sprite(100, 100, 'testImage');
    }

    render() {
    }
}
