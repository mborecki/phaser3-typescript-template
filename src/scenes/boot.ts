import spritesheetConfig from '../sprites-index.json';

export default class BootState extends Phaser.Scene {
    constructor(private firstScene: string) {
        super({});
    }

    preload() {

        spritesheetConfig.forEach((files) => {
            console.log(files[0], '/assets/generated/' + files[1], '/assets/generated/' + files[2])
            this.load.atlas(files[0], '/assets/generated/' + files[1], '/assets/generated/' + files[2]);
        })

    }

    create() {
        this.game.scene.start(this.firstScene);
    }
}
