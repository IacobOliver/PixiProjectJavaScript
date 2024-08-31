import { shapes } from "../GlobalVariables.js";

class Star {
    constructor(x, y, color = 0xff0000, app) {
        this.app = app
        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(color);

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
        this.graphics.endFill();

        this.texture = app.renderer.generateTexture(this.graphics);
        this.sprite = new PIXI.Sprite(this.texture);
        this.sprite.x = x;
        this.sprite.y = y;

        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.sprite.on('pointerdown', this.handleClick.bind(this))
    }

    getSprite() {
        return this.sprite;
    }

    setPosition(x, y) {
        this.sprite.x = x;
        this.sprite.y = y;
    }

    rotate(angle) {
        this.sprite.rotation = angle;
    }

    getPosition() {
        return {
            x: this.sprite.x,
            y: this.sprite.y
        };
    }

    handleClick(event) {
        event.stopPropagation(); 
        if (this.sprite) {
            this.app.stage.removeChild(this.sprite);
        }
        
        // Remove shape from the shapes array
        const index = shapes.indexOf(this);
        if (index !== -1) {
            shapes.splice(index, 1);
        }
    }
}

export { Star };
