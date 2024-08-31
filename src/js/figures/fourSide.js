import { shapes } from "../GlobalVariables.js";



class FourSide{
    constructor(x, y, color = 0xff0000, app) {
        this.app = app
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
        this.texture = app.renderer.generateTexture(this.graphics);
        this.sprite = new PIXI.Sprite(this.texture);
        this.sprite.x = x;
        this.sprite.y = y;

        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.sprite.on('pointerdown', this.handleClick.bind(this))
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

    getPosition(){
        return {
            x : this.sprite.x,
            y : this.sprite.y
        }
    }

    handleClick(event) {
        event.stopPropagation(); 
        if (this.sprite) {
            this.app.stage.removeChild(this.sprite);
        }
        
        // Remove shape from the shapes array
        const index = shapes.indexOf(this);
        if (index !== -1) {
            shapes.splice(index, 1);
        }
    }
}

export { FourSide };
