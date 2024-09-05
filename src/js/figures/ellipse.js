import { Shape } from "./shape.js";

class Ellipse extends Shape {
    drawShape() {
        const width = Math.random() * 100 + 20;
        const height = Math.random() * 100 + 20;
        this.graphics.drawEllipse(0, 0, width, height);
    }

    getArea() {
    console.log("Ellipse arrea")
       const sprite = this.getSprite()
       const width = sprite.width;
       const height = sprite.height
        return Math.PI * (width / 2) * (height / 2);
    }
}

export { Ellipse };