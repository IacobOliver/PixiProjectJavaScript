// Shape.js
import { shapes } from "../GlobalVariables.js";

class Shape {
    constructor(x, y, color = 0xff0000, app) {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate abstract class Shape directly");
        }
        this.app = app;
        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(color);
        this.drawShape();
        this.graphics.endFill();

        this.texture = app.renderer.generateTexture(this.graphics);
        this.sprite = new PIXI.Sprite(this.texture);
        this.sprite.x = x;
        this.sprite.y = y;

        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.sprite.on('pointerdown', this.handleClick.bind(this));
    }

    drawShape() {
        throw new Error("Method 'drawShape()' must be implemented.");
    }

    getArea() {
        throw new Error("Method 'getArea()' must be implemented.");
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
        };
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

export { Shape };
