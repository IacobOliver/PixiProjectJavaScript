class Enemy {
    constructor(x, y) {
        // Create a basic red square as the enemy
        this.sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
        this.sprite.width = 40;
        this.sprite.height = 40;
        this.sprite.tint = 0xff0000; // Red color for enemy
        this.sprite.x = x;
        this.sprite.y = y;
    }

    move() {
        // Move enemy to the left each frame
        this.sprite.x -= 2;
    }
}

export { Enemy };
