import { shapes } from "../GlobalVariables.js";

class SixSide {
    constructor(x, y, color = 0xff0000, app) {
        this.app = app
        this.id = `shape-${Math.random().toString(36).substr(2, 9)}`;
        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(color);

        const numSides = 6;
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

    getPosition(){
        return {
            x : this.sprite.x,
            y : this.sprite.y
        }
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

export { SixSide };
