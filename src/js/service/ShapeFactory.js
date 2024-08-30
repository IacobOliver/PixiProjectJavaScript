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
        const randomYPosition = Math.floor(Math.random() * this.app.screen.height);
        const randomHexColor = this.getRandomHexColor();
        let args = [randomXPosition, randomXPosition, randomHexColor, this.app]
        return this.createShape(...args)
    }

    createShape(x, y, color = 0xff0000) {
        const args = [x, y, color, this.app]
        const type = this.shapeTypes[this.getRandomShapeIndex()];
        return new type(...args);
       
    }
}