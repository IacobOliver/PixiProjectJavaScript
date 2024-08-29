class SixSide {
    constructor(x, y, color = 0xff0000, app) {
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
}

export { SixSide };
