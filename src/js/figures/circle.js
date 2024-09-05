import { Shape } from "./shape.js";

class Circle extends Shape {
    drawShape() {
        const radius = Math.random() * 50 + 20; // Random radius between 20 and 70
        this.graphics.drawCircle(0, 0, radius);
    }
}

export { Circle };