import { Shape } from "./shape.js";

class Star extends Shape {
    drawShape() {
        const outerRadius = Math.random() * 50 + 20; 
        const innerRadius = outerRadius / 2; 
        const points = 5;
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

}

export { Star };