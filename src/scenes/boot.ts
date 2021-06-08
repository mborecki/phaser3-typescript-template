import * as Phaser from 'phaser';

export default class BootState extends Phaser.Scene {
    constructor(game: Phaser.Game) {
        super(null);

        // Why I have do this?
        this.game = game;
        this.sys.settings.key = 'bootScene';
    }

    preload() {
        this.load.atlas('_ph', 'assets/generated/_ph.png', 'assets/generated/_ph.json');
    }

    create() {
        this.game.scene.start('mainScene');
    }
}
