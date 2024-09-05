import { Shape } from "./shape.js";

class FiveSide extends Shape {
    drawShape() {
        const numSides = 5;
        const radius = Math.random() * 50 + 20; // Random radius between 20 and 70
        const angleStep = (Math.PI * 2) / numSides;

        this.graphics.moveTo(radius, 0);

        for (let i = 1; i < numSides; i++) {
            this.graphics.lineTo(
                radius * Math.cos(angleStep * i),
                radius * Math.sin(angleStep * i)
            );
        }

        this.graphics.closePath();
    }
}

export { FiveSide };