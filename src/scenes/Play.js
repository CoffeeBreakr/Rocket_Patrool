class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    create() {
        //UI Background
        this.add.rectangle(0,borderUISize + borderPadding, game.config.width, borderUISize*2, 0xB7B7A4).setOrigin(0,0);
        //UI Borders
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0x6B705C).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0x6B705C).setOrigin(0,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0x6B705C).setOrigin(0,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0x6B705C).setOrigin(0,0);
    }
}