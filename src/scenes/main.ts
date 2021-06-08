export default class MainScene extends Phaser.Scene {
    constructor(game: Phaser.Game) {
        super(null);

        // Why I have do this?
        this.game = game;
        this.sys.settings.key = 'mainScene';
    }

    create() {
        var particles = this.add.particles('_ph', 'dot');
        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
        var logo = this.physics.add.image(400, 100, '_ph', 'test');
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
        emitter.startFollow(logo as any);
    }
}
