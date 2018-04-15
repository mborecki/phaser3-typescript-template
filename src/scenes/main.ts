export default class MainScene extends Phaser.Scene {
    constructor(game: Phaser.Game) {
        super(null);

        // Why I have do this?
        this.game = game;
        this.sys.settings.key = 'mainScene';
    }

    create() {
        this.add.image(400, 300, 'sky');
        var particles = this.add.particles('red');
        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
        var logo = this.physics.add.image(400, 100, 'logo');
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(1);
        emitter.startFollow(logo as any);
    }
}
