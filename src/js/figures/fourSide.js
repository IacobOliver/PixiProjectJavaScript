

class FourSide {
    constructor(x, y, color = 0xff0000, app) {
        // Store the graphics object as a property of the instance
        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(color);

        const point1 = { x: Math.random() * 100, y: Math.random() * 100 }; 
        const point2 = { x: point1.x + Math.random() * 100, y: point1.y };  
        const point3 = { x: point2.x, y: point2.y + Math.random() * 100 }; 
        const point4 = { x: point1.x, y: point3.y };

        // Draw the quadrilateral using the four points
        this.graphics.moveTo(point1.x, point1.y);  // First vertex
        this.graphics.lineTo(point2.x, point2.y);  // Second vertex
        this.graphics.lineTo(point3.x, point3.y);  // Third vertex
        this.graphics.lineTo(point4.x, point4.y);  // Fourth vertex
        this.graphics.lineTo(point1.x, point1.y);  // Close the path back to the first vertex


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

export { FourSide };
