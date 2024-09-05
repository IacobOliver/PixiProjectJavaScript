
import { occupiedGameArea, setTotalGameArea, shapes, shapesPerSecondValue, totalGameArea } from "./GlobalVariables.js";
import { calculateTotalArea, getRandomHexColor } from "./service/HelperFunction.js";
import { ShapeFactory } from "./service/ShapeFactory.js"

class Game {
    constructor() {
        const gameContainer = document.getElementById("game")
        this.app = new PIXI.Application({
            width: gameContainer.clientWidth,
            height: gameContainer.clientHeight,
            backgroundColor: 0x1099bb,
        });
        document.getElementById("game").appendChild(this.app.view);
        this.createbackground();

        this.shapeFactory = new ShapeFactory(this.app);
        this.timePassed = 0;

        setTotalGameArea(gameContainer.clientWidth * gameContainer.clientHeight);
        areaOccupied.innerHTML = "Area occupied: " + occupiedGameArea + "/" + totalGameArea + "px&sup2;"
        console.log(totalGameArea)
        PIXI.Assets.load([]).then(() => this.onAssetsLoaded());
    }

    createbackground() {
        this.background = new PIXI.Graphics();
        this.background.beginFill(0x000000); // Black color
        this.background.drawRect(0, 0, this.app.screen.width, this.app.screen.height);
        this.background.endFill();
        this.app.stage.addChildAt(this.background, 0);

        this.background.interactive = true;
        this.background.on('pointerdown', this.handleCanvasClick.bind(this));
    }

    onAssetsLoaded() {
        this.app.ticker.add(delta => this.gameLoop(delta));
    }

    gameLoop(delta) {
        this.shapeFactory.updateShapes(this.shapes); //for gravity
        this.timePassed += delta / 60;

        if (this.timePassed >= (1/shapesPerSecondValue)) {
            const randomShape = this.shapeFactory.createRandomShape()
            shapes.push(randomShape)
            shapeNumber.innerText = "Shape number : " + shapes.length
            areaOccupied.innerHTML = "Area occupied: " + calculateTotalArea(shapes) + "/" + totalGameArea + "px&sup2;"


            this.app.stage.addChild(randomShape.getSprite())
            this.timePassed = 0;
        }
    }

    handleCanvasClick(event) {
        const x = event.clientX - this.app.view.offsetLeft;
        const y = event.clientY - this.app.view.offsetTop;

        const args = [x, y, getRandomHexColor(), this.app]
        const newShape = this.shapeFactory.createShape(...args)
        shapes.push(newShape)
        shapeNumber.innerText = "Shape number : " + shapes.length

        this.app.stage.addChild(newShape.getSprite())
    }

}

export { Game };
