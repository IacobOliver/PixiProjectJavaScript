class Circle {
    constructor(x, y, color = 0xff0000, app) {
        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(color);

        const radius = Math.random() * 50 + 20;

        this.graphics.drawCircle(0, 0, radius);
        this.graphics.endFill();

        this.texture = app.renderer.generateTexture(this.graphics);
        this.sprite = new PIXI.Sprite(this.texture);
        this.sprite.x = x;
        this.sprite.y = y;

        this.velocityY = 0; // Initial vertical velocity
    }

    getSprite() {
        return this.sprite;
    }

    setPosition(x, y) {
        this.sprite.x = x;
        this.sprite.y = y;
    }

    rotate(angle) {
        this.sprite.rotation = angle;
    }

    fall() {
        this.velocityY += 0.98; // Apply gravity to the vertical velocity
        this.sprite.y += this.velocityY; // Update the y position based on velocity
        console.log("circle fall")
    }

    getPosition(){
        return {
            x : this.sprite.x,
            y : this.sprite.y
        }
    }
}

export { Circle };
