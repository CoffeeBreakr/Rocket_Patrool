class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    createImageBitmap() {
        this.add.text(20,20, "Rocket Patrol Play");
    }
}