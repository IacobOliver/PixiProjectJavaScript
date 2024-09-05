import { Shape } from "./shape.js";

class Circle extends Shape {
    drawShape() {
        const radius = Math.random() * 50 + 20; // Random radius between 20 and 70
        this.graphics.drawCircle(0, 0, radius);
    }

    getArea() {
        const sprite = this.getSprite()
        const width = sprite.width;
        return Math.PI * Math.pow(width/2, 2);
    }
}

export { Circle };