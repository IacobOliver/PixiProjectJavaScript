
import { Enemy } from "./enemy.js";
import { ThreeSide } from "./figures/threeSide.js"
import { FourSide } from "./figures/fourSide.js";
import { FiveSide } from "./figures/fiveSide.js";
import { SixSide } from "./figures/sixSide.js";
import { Circle } from "./figures/circle.js";
import { Ellipse } from "./figures/Ellipse.js";
import { Star } from "./figures/star.js";

class Game {
    constructor() {
        // Initialize the Pixi Application
        this.app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x1099bb,
        });
        document.body.appendChild(this.app.view);
        this.enemies = [];
        this.timePassed = 0;

        this.threeSide = new ThreeSide(10, 100, 0xff0000, this.app)
        this.fourSide = new FourSide(100, 100, 0xff0000, this.app)
        this.fiveSide = new FiveSide(200, 100, 0xff0000, this.app)
        this.sixSdie = new SixSide(350, 100, 0xff0000, this.app)
        this.circle = new Circle(450, 350, 0xff0000, this.app)
        this.ellipse = new Ellipse(550, 400, 0xff0000, this.app)
        this.star = new Star(150, 450, 5, 0xff0000, this.app)
        this.shapes = [this.threeSide, this.fourSide, this.fiveSide, this.sixSdie, this.circle, this.ellipse, this.star];

        // Load assets and then run onAssetsLoaded
        PIXI.Assets.load([]).then(() => this.onAssetsLoaded()); // Add your asset URLs to the array
    }

    generateRandomShape(){
        let randomNumber = Math.floor(Math.random() * 7);
        
    }

    onAssetsLoaded() {
        // Start the game loop
        this.app.ticker.add(delta => this.gameLoop(delta));
    }

    gameLoop(delta) {
        this.timePassed += delta / 60;
      

        if (this.timePassed >= 1) {
            let randomIndex = Math.floor(Math.random() * this.shapes.length);
            let randomXPosition = Math.floor(Math.random() * this.app.screen.width);
            let randomShape = this.shapes[randomIndex];
            

            // Get the current sprite and its position
            let currentPosition = randomShape.getPosition();
            randomShape.setPosition(randomXPosition, currentPosition.y);


            this.app.stage.addChild(randomShape.getSprite())

            this.timePassed = 0;
        }

       
    }
}

export { Game };
