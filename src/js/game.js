
import { shapes } from "./service/GlobalVariables.js";
import { getRandomHexColor } from "./service/HelperFunction.js";
import { ShapeFactory } from "./service/ShapeFactory.js"

class Game {
    constructor() {
        // Initialize the Pixi Application
        this.app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x1099bb,
        });
        document.body.appendChild(this.app.view);

       // Set up the stage to listen for pointer events
    //    this.app.stage.interactive = true;
    //    this.app.stage.on('pointerdown', this.handleCanvasClick.bind(this));
    this.app.view.addEventListener('click', this.handleCanvasClick.bind(this));

        this.shapeFactory = new ShapeFactory(this.app);
        this.timePassed = 0;

        PIXI.Assets.load([]).then(() => this.onAssetsLoaded());
    }

    onAssetsLoaded() {
        this.app.ticker.add(delta => this.gameLoop(delta));
    }

    gameLoop(delta) {
        this.shapeFactory.updateShapes(this.shapes); //for gravity
        this.timePassed += delta / 60;

        if (this.timePassed >= 1) {
            const randomShape = this.shapeFactory.createRandomShape()
            shapes.push(randomShape)

            this.app.stage.addChild(randomShape.getSprite())
            this.timePassed = 0;
        }
    }

    handleCanvasClick(event) {
        console.log(":heh")
        // const { x, y } = event.data.global;

        const x = event.clientX - this.app.view.offsetLeft;
        const y = event.clientY - this.app.view.offsetTop;

        console.log(`Canvas clicked at (${x}, ${y})`);
        console.log(event)

        const args = [x, y, getRandomHexColor(), this.app]
        const newShape = this.shapeFactory.createShape(...args)
       shapes.push(newShape)

        this.app.stage.addChild(newShape.getSprite())
    }

  

}

export { Game };
