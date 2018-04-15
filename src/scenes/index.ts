import BootScene from './boot';

export default class Scenes extends Phaser.Scenes.SceneManager {
    constructor(game: Phaser.Game) {
        super(game, BootScene);
    }
}
