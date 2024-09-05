import { polygonArea } from "../service/HelperFunction.js";
import { Shape } from "./shape.js";

class SixSide extends Shape {
    drawShape() {
        const numSides = 6;
        const radius = Math.random() * 50 + 20;
        const angleStep = (Math.PI * 2) / numSides;
        this.vertices = [];

        this.graphics.moveTo(radius, 0);
        this.vertices.push({ x: radius, y: 0 });

        for (let i = 1; i < numSides; i++) {
            const x = radius * Math.cos(angleStep * i);
            const y = radius * Math.sin(angleStep * i);
            this.graphics.lineTo(x, y);
            this.vertices.push({ x, y });
        }

        this.graphics.closePath();
    }

    getArea() {
        return polygonArea(this.vertices);
    }
}

export { SixSide };