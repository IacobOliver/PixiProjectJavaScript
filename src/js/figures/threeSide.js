import { shapes } from "../GlobalVariables.js";


class ThreeSide {
    constructor(x, y, color = 0xff0000, app) {
        this.app = app;
        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(color);

        const side1 = Math.random() * 100 + 10;
        const side2 = Math.random() * 100 + 10;
        const side3 = Math.random() * 100 + 10;

        // Draw the triangle with random side lengths
        this.graphics.moveTo(side1, side3);      
        this.graphics.lineTo(side1, 0);       
        this.graphics.lineTo(0, side2);       
        this.graphics.lineTo(0, 0); 

        // End the fill
        this.graphics.endFill();

        // Convert the Graphics object to a texture using the app's renderer
        this.texture = app.renderer.generateTexture(this.graphics);
        this.sprite = new PIXI.Sprite(this.texture);

        // Set the initial position of the triangle sprite
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

    getPosition() {
        return {
            x: this.sprite.x,
            y: this.sprite.y
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

export { ThreeSide };
