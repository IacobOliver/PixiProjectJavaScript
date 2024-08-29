class Player {
    constructor() {
        // Create a basic white square as the player
        this.sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
        this.sprite.width = 50;
        this.sprite.height = 50;
        this.sprite.x = 375;
        this.sprite.y = 275;

        // Make the player interactive
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        this.sprite.on('pointerdown', this.onClick.bind(this));
    }

    onClick() {
        // Move the player up when clicked
        this.sprite.y -= 10;
    }

    // Add methods for other player actions
}

export { Player };
