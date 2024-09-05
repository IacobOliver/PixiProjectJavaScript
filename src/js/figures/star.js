import { Shape } from "./shape.js";

class Star extends Shape {
    drawShape() {
        const outerRadius = Math.random() * 50 + 20; // Random outer radius between 20 and 70
        const innerRadius = outerRadius / 2; // Inner radius is half of the outer radius
        const points = 5; // Fixed number of points
        const angleStep = Math.PI / points;

        this.graphics.moveTo(outerRadius, 0);

        for (let i = 1; i < points * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            this.graphics.lineTo(
                radius * Math.cos(angleStep * i),
                radius * Math.sin(angleStep * i)
            );
        }

        this.graphics.closePath();
    }
}

export { Star };