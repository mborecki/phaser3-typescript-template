import getAudioPlayer from "../audio";

export default class MainScene extends Phaser.Scene {

    private audio = getAudioPlayer();

    constructor() {
        super({});
    }

    create() {
        const  logo = this.physics.add.image(400, 100, 'sprites', 'test');


        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        logo.setInteractive();
        logo.on('pointerdown', async () => {
            const audio = await this.audio;
            audio.play('blip');
        })

        this.add.particles(0, 0 ,'sprites', {
        frame: 'dot',
            follow: logo,
            blendMode: 'ADD',
            scale: {start: 1, end: 0},
            speed: 100
        });
    }
}
