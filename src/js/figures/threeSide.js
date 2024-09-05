import { polygonArea } from "../service/HelperFunction.js";
import { Shape } from "./shape.js";

class ThreeSide extends Shape {
    drawShape() {
        const side1 = Math.random() * 100 + 10;
        const side2 = Math.random() * 100 + 10;
        const side3 = Math.random() * 100 + 10;

        this.vertices = [
            { x: 0, y: 0 },
            { x: side1, y: 0 },
            { x: 0, y: side2 }
        ];

        this.graphics.moveTo(side1, side3);      
        this.graphics.lineTo(side1, 0);       
        this.graphics.lineTo(0, side2);       
        this.graphics.lineTo(0, 0); 
    }

    getArea() {
        console.log("three area")
        return polygonArea(this.vertices);
    }
}

export { ThreeSide };