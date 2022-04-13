class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // Add to existing scene
        this.points = pointValue; // Store pointValue
        this.moveSpeed = 3;       // Pixels per frame  
    }

    update(){
        // Move spaceship
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }

    // Position reset
    reset() {
        this.x = game.config.width;
    }
}

