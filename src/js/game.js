import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import {ThreeSide} from "./figures/threeSide.js"
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

        // Load assets and then run onAssetsLoaded
        PIXI.Assets.load([]).then(() => this.onAssetsLoaded()); // Add your asset URLs to the array
    }

    onAssetsLoaded() {
        // Create the player and add to the stage
        this.player = new Player();
        this.app.stage.addChild(this.player.sprite);

        const threeSide = new ThreeSide(10, 100 , 0xff0000, this.app )
        const fourSide = new FourSide(100, 100 , 0xff0000, this.app )
        const fiveSide = new FiveSide(200, 100 , 0xff0000, this.app )
        const sixSdie = new SixSide(350, 100 , 0xff0000, this.app )
        const circle = new Circle(450, 350 , 0xff0000, this.app )
        const ellipse = new Ellipse(550, 400 , 0xff0000, this.app )
        const star = new Star(150, 450 , 5,  0xff0000, this.app )

        // Create multiple enemies and add them to the stage
        for (let i = 0; i < 5; i++) {
            let enemy = new Enemy(800 + i * 100, Math.random() * 550);
            this.app.stage.addChild(enemy.sprite);
            this.enemies.push(enemy);
        }
        this.app.stage.addChild(threeSide.getSprite(), fourSide.getSprite(), fiveSide.getSprite(), sixSdie.getSprite(), circle.getSprite(), ellipse.getSprite(), star.getSprite())
        
        // Start the game loop
        this.app.ticker.add(delta => this.gameLoop(delta));
    }

    gameLoop(delta) {
        // Update player and enemies each frame
        this.enemies.forEach(enemy => enemy.move());
    }
}

export { Game };
