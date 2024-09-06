import { polygonArea } from "../service/HelperFunction.js";
import { Shape } from "./shape.js";

class FourSide extends Shape {
    drawShape() {
        const point1 = { x: Math.random() * 100, y: Math.random() * 100 };
        const point2 = { x: point1.x + Math.random() * 100, y: point1.y };
        const point3 = { x: point2.x, y: point2.y + Math.random() * 100 };
        const point4 = { x: point1.x, y: point3.y };

        this.vertices = [point1, point2, point3, point4];

        this.graphics.moveTo(point1.x, point1.y);
        this.graphics.lineTo(point2.x, point2.y);
        this.graphics.lineTo(point3.x, point3.y);
        this.graphics.lineTo(point4.x, point4.y);
        this.graphics.lineTo(point1.x, point1.y);
    }
}

export { FourSide };