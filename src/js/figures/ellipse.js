class Ellipse {
    constructor(x, y, color = 0xff0000, app) {
        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(color);

        const width = Math.random() * 100 + 30; // Random width between 30 and 130
        const height = Math.random() * 50 + 20; // Random height between 20 and 70

        this.graphics.drawEllipse(0, 0, width, height);
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

export { Ellipse };
