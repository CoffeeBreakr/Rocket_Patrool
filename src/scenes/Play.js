class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    preload() {
        // load sprites
        this.load.image('rocket','./assets/rocket.png');
        this.load.image('spaceship','./assets/enemy.png');
        this.load.image('starfield','./assets/background.png');
      }

    create() {
        // UI Background
        this.add.rectangle(0,borderUISize + borderPadding, game.config.width, borderUISize * 2, 0xB7B7A4).setOrigin(0,0);
        // place sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        // UI Borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0x6B705C).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x6B705C).setOrigin(0,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0x6B705C).setOrigin(0,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x6B705C).setOrigin(0,0);
        // add player/rocket
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);
    }

    
    update() {
        this.starfield.tilePositionX -= 4;
      }
}