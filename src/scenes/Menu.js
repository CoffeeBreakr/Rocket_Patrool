class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }

    createImageBitmap() {
        this.AbortController.add.text(20,20, "Rocket Patrol Menu");
    }
}