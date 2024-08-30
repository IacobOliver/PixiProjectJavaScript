
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
        this.shapes = [];
        this.timePassed = 0;

        // Load assets and then run onAssetsLoaded
        PIXI.Assets.load([]).then(() => this.onAssetsLoaded()); // Add your asset URLs to the array
    }

    onAssetsLoaded() {
        // Start the game loop
        this.app.ticker.add(delta => this.gameLoop(delta));
    }

    gameLoop(delta) {
        this.shapeFactory.updateShapes(this.shapes); //for gravity
        this.timePassed += delta / 60;
    
        if (this.timePassed >= 1) {
            const randomShape = this.shapeFactory.createRandomShape()
            this.shapes.push(randomShape)
           
            this.app.stage.addChild(randomShape.getSprite())
            this.timePassed = 0;
        }

    }
}

export { Game };
