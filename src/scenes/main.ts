import getAudioPlayer from "./audio";

export default class MainScene extends Phaser.Scene {

    private audio = getAudioPlayer();

    constructor() {
        super({});
    }

    create() {
        var particles = this.add.particles('sprites', 'dot');
        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
        var logo = this.physics.add.image(400, 100, 'sprites', 'test');
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
        emitter.startFollow(logo as any);

        logo.setInteractive();
        logo.on('pointerdown', async () => {
            const audio = await this.audio;
            audio.play('blip');
        })
    }
}
