
import {ShapeFactory} from "./service/ShapeFactory.js"

class Game {
    constructor() {
        // Initialize the Pixi Application
        this.app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x1099bb,
        });
        document.body.appendChild(this.app.view);
        this.shapeFactory = new ShapeFactory(this.app);
        this.enemies = [];
        this.timePassed = 0;

        // Load assets and then run onAssetsLoaded
        PIXI.Assets.load([]).then(() => this.onAssetsLoaded()); // Add your asset URLs to the array
    }

    onAssetsLoaded() {
        // Start the game loop
        this.app.ticker.add(delta => this.gameLoop(delta));
    }

    gameLoop(delta) {
        this.timePassed += delta / 60;
      

        if (this.timePassed >= 1) {
            let randomXPosition = Math.floor(Math.random() * this.app.screen.width);

            
            let randomShape = this.shapeFactory.createRandomShape()
            
            // Get the current sprite and its position
            let currentPosition = randomShape.getPosition();
            randomShape.setPosition(randomXPosition, currentPosition.y);


            this.app.stage.addChild(randomShape.getSprite())

            this.timePassed = 0;
        }

       
    }
}

export { Game };
