import { Ellipse } from "../figures/Ellipse.js";
import { Circle } from "../figures/circle.js";
import { FiveSide } from "../figures/fiveSide.js";
import { FourSide } from "../figures/fourSide.js";
import { SixSide } from "../figures/sixSide.js";
import { Star } from "../figures/star.js";
import { ThreeSide } from "../figures/threeSide.js";
import { gravity, shapes } from "../GlobalVariables.js";
import { getRandomHexColor } from "./HelperFunction.js";

export class ShapeFactory {
    constructor(app) {
        this.app = app;
        this.gravity = gravity
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

    getRandomShapeIndex(){
       return Math.floor(Math.random() * 7);
    }

    createRandomShape(){
        const randomXPosition = Math.floor(Math.random() * this.app.screen.width);
        const randomHexColor = getRandomHexColor();
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

    updateShapes() {
       
        shapes.forEach(shape => {
            if (shape.sprite) {
                // Apply gravity
                shape.velocityY += this.gravity;
                shape.setPosition(shape.getPosition().x, shape.getPosition().y + shape.velocityY);

                // Check for collision with the ground
                if (shape.getPosition().y > this.app.screen.height - shape.sprite.height + 300) {
                    shape.setPosition(shape.getPosition().x, this.app.screen.height - shape.sprite.height);
                    this.removeShape(shape)
                    shapeNumber.innerText = "Shape number : " + shapes.length
                }
            }
        });
    }

    removeShape(shape) {
        if (shape.sprite) {
            this.app.stage.removeChild(shape.sprite);
        }
        
        const index = shapes.indexOf(shape);
        if (index !== -1) {
            shapes.splice(index, 1);
        }
        
    }
}