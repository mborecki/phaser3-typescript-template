import * as Phaser from 'phaser';
import MainScene from './scenes/main';
import BootScene from './scenes/boot';

export default class App extends Phaser.Game {
    constructor() {
        super({
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            }
        });

        this.scene.add('bootScene', new BootScene('mainScene'), true);
        this.scene.add('mainScene', new MainScene());
    }
}
