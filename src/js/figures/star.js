class Star {
    constructor(x, y, points = 5, color = 0xff0000, app) {
        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(color);

        const outerRadius = Math.random() * 50 + 20; // Random outer radius between 20 and 70
        const innerRadius = outerRadius / 2; // Inner radius is half of the outer radius
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

    fall(){
        this.sprite.y +=2
    }

    getPosition(){
        return {
            x : this.sprite.x,
            y : this.sprite.y
        }
    }
}

export { Star };
