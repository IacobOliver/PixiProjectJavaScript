

class ThreeSide {
    constructor(x, y, color = 0xff0000, app) {
        // Store the graphics object as a property of the instance
        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(color);

        const side1 = Math.random() * 100 + 10;  
        const side2 = Math.random() * 100 + 10;  
        const side3 = Math.random() * 100 + 10;  

        // Draw the triangle with random side lengths
        this.graphics.moveTo(side1, side3);            // First vertex (origin)
        this.graphics.lineTo(side1, 0);        // Second vertex (random x, same y)
        this.graphics.lineTo(0, side2);        // Third vertex (same x, random y)
        this.graphics.lineTo(0, 0);            // Close the path to the first vertex

        // End the fill
        this.graphics.endFill();

        // Convert the Graphics object to a texture using the app's renderer
        this.texture = app.renderer.generateTexture(this.graphics);
        this.sprite = new PIXI.Sprite(this.texture);

        // Set the initial position of the triangle sprite
        this.sprite.x = x;
        this.sprite.y = y;
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
}

export { ThreeSide };
