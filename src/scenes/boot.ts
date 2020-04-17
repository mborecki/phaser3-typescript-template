import * as Phaser from 'phaser';

export default class BootState extends Phaser.Scene {
    constructor(game: Phaser.Game) {
        super(null);

        // Why I have do this?
        this.game = game;
        this.sys.settings.key = 'bootScene';
    }

    preload() {
        this.load.setBaseURL('http://labs.phaser.io');
        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create() {
        this.game.scene.start('mainScene');
    }
}
