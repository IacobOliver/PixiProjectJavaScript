import { Shape } from "./shape.js";

class Ellipse extends Shape {
    drawShape() {
        const width = Math.random() * 100 + 20;
        const height = Math.random() * 100 + 20;
        this.graphics.drawEllipse(0, 0, width, height);
    }
}

export { Ellipse };