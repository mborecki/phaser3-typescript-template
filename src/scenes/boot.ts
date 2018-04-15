import * as Phaser from 'phaser';

export default class BootState extends Phaser.Scene {
    constructor(game: Phaser.Game) {
        super(null);

        // Why I have do this?
        this.game = game;
        this.sys.settings.key = 'bootScene';
    }

    preload() {


        // Type definition force to set xhrConfig - probably bug.
        let xhrConfig : XHRSettingsObject = {
            responseType: 'blob',
            async: true,
            user: null,
            password: null,
            timeout: 60000,
            header: null,
            headerValue: null,
            overrideMimeType: null

        }

        this.load.setBaseURL('http://labs.phaser.io');
        this.load.image('sky', 'assets/skies/space3.png', xhrConfig);
        this.load.image('logo', 'assets/sprites/phaser3-logo.png', xhrConfig);
        this.load.image('red', 'assets/particles/red.png', xhrConfig);
    }

    create() {
        this.game.scene.start('mainScene');
    }
}
