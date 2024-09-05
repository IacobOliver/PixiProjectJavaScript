import { Shape } from "./shape.js";

class Star extends Shape {
    drawShape() {
        const outerRadius = Math.random() * 50 + 20; // Random outer radius between 20 and 70
        const innerRadius = outerRadius / 2; // Inner radius is half of the outer radius
        const points = 5; // Fixed number of points
        const angleStep = Math.PI / points;
        this.vertices = [];

        this.graphics.moveTo(outerRadius, 0);
        this.vertices.push({ x: outerRadius, y: 0 });

        for (let i = 1; i < points * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const x = radius * Math.cos(angleStep * i);
            const y = radius * Math.sin(angleStep * i);
            this.graphics.lineTo(x, y);
            this.vertices.push({ x, y });
        }

        this.graphics.closePath();
    }

    getArea() {
        console.log("star area")
        const numPoints = this.vertices.length;
        let area = 0;

        for (let i = 0; i < numPoints; i++) {
            const j = (i + 1) % numPoints;
            area += this.vertices[i].x * this.vertices[j].y;
            area -= this.vertices[j].x * this.vertices[i].y;
        }

        return Math.abs(area) / 2;
    }
}

export { Star };