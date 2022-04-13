class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    preload() {
        // load sprites
        this.load.image('rocketship','./assets/rocket.png');
        this.load.image('spaceship','./assets/enemy.png');
        this.load.image('starfield','./assets/background.png');
        this.load.image('rocket','/assets/rocketP.png')
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
        //this.p1RocketShip = new RocketShip(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocketship').setOrigin(0.5, 0);
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);
        // add Spaceships
        this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'spaceship', 0, 30).setOrigin(0, 0);
        this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'spaceship', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'spaceship', 0, 10).setOrigin(0,0);
        //Define Keys
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    
    update() {
        this.starfield.tilePositionX -= 4;
        //Rocket Update
        this.p1Rocket.update();
        //this.p1RocketShip.update();
  
        //Spaceship Update
        this.ship01.update();
        this.ship02.update();
        this.ship03.update();
      }
}