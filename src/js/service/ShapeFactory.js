import { Ellipse } from "../figures/Ellipse.js";
import { Circle } from "../figures/circle.js";
import { FiveSide } from "../figures/fiveSide.js";
import { FourSide } from "../figures/fourSide.js";
import { SixSide } from "../figures/sixSide.js";
import { Star } from "../figures/star.js";
import { ThreeSide } from "../figures/threeSide.js";

export class ShapeFactory {
    constructor(app) {
        this.app = app;
        this.gravity = 0.03; // Gravity value (pixels per frame)
        this.shapeTypes = [
            ThreeSide,
            FourSide,
            FiveSide,
            SixSide,
            Circle,
            Ellipse,
            Star,
        ];
    }

    getRandomHexColor() {
        const randomColor = Math.floor(Math.random() * 0xFFFFFF);
        return randomColor;
    }

    getRandomShapeIndex(){
       return Math.floor(Math.random() * 7);
    }

    createRandomShape(){
        const randomXPosition = Math.floor(Math.random() * this.app.screen.width);
        const randomHexColor = this.getRandomHexColor();
        let args = [randomXPosition, -100, randomHexColor, this.app]
        return this.createShape(...args)
    }

    createShape(x, y, color = 0xff0000) {
        const args = [x, y, color, this.app]
        const type = this.shapeTypes[this.getRandomShapeIndex()];
        const shape = new type(...args);
        shape.velocityY = 0; // Starting vertical velocity
        return shape
       
    }

    updateShapes(shapes) {
        if(!shapes) return;

        shapes.forEach(shape => {
            if (shape.sprite) {
                // Apply gravity
                shape.velocityY += this.gravity;
                shape.setPosition(shape.getPosition().x, shape.getPosition().y + shape.velocityY);

                // Check for collision with the ground
                if (shape.getPosition().y > this.app.screen.height - shape.sprite.height + 300) {
                    shape.setPosition(shape.getPosition().x, this.app.screen.height - shape.sprite.height);
                  
                    this.app.stage.removeChild(shape.sprite)
                }
            }
        });
    }
}