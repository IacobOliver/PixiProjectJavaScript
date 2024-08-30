
// import { ThreeSide } from "./figures/threeSide.js"
// import { FourSide } from "./figures/fourSide.js";
// import { FiveSide } from "./figures/fiveSide.js";
// import { SixSide } from "./figures/sixSide.js";
// import { Circle } from "./figures/circle.js";
// import { Ellipse } from "./figures/Ellipse.js";
// import { Star } from "./figures/star.js";
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

            const randomInt = Math.floor(Math.random() * 7);
            let randomShape = this.shapeFactory.createShape(randomInt)
            
            // Get the current sprite and its position
            let currentPosition = randomShape.getPosition();
            randomShape.setPosition(randomXPosition, currentPosition.y);


            this.app.stage.addChild(randomShape.getSprite())

            this.timePassed = 0;
        }

       
    }
}

export { Game };
