
import { setTotalGameArea, shapes, shapesPerSecondValue, totalGameArea } from "./GlobalVariables.js";
import { getRandomHexColor } from "./service/HelperFunction.js";
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

        this.gridSize = 1;
        this.gridWidth = Math.ceil(this.app.screen.width / this.gridSize);
        this.gridHeight = Math.ceil(this.app.screen.height / this.gridSize);
        this.grid = Array.from({ length: this.gridHeight }, () => Array(this.gridWidth).fill(false));

        this.shapeFactory = new ShapeFactory(this.app);
        this.timePassed = 0;

        setTotalGameArea(gameContainer.clientWidth * gameContainer.clientHeight);
        PIXI.Assets.load([]).then(() => this.onAssetsLoaded());
    }

    createbackground() {
        this.background = new PIXI.Graphics();
        this.background.beginFill(0x000000);
        this.background.drawRect(0, 0, this.app.screen.width, this.app.screen.height);
        this.background.endFill();
        this.app.stage.addChildAt(this.background, 0);

        this.background.interactive = true;
        this.background.on('pointerdown', this.handleCanvasClick.bind(this));
    }

    updateGrid() {
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                this.grid[y][x] = false;
            }
        }

        shapes.forEach(shape => {
            const bounds = shape.getSprite().getBounds();
            for (let y = Math.max(0, Math.floor(bounds.y / this.gridSize)); y < Math.min(this.gridHeight, Math.ceil((bounds.y + bounds.height) / this.gridSize)); y++) {
                for (let x = Math.max(0, Math.floor(bounds.x / this.gridSize)); x < Math.min(this.gridWidth, Math.ceil((bounds.x + bounds.width) / this.gridSize)); x++) {
                    this.grid[y][x] = true;
                }
            }
        });
    }

    calculateOccupiedArea() {
        let occupied = 0;
        for (let y = 0; y < this.gridHeight; y++) {
            for (let x = 0; x < this.gridWidth; x++) {
                if (this.grid[y][x]) {
                    occupied++;
                }
            }
        }
        return occupied * this.gridSize * this.gridSize;
    }

    onAssetsLoaded() {
        this.app.ticker.add(delta => this.gameLoop(delta));
    }

    gameLoop(delta) {
        this.shapeFactory.updateShapes(this.shapes);
        this.updateGrid();
        const totalArea = this.calculateOccupiedArea();
        areaOccupied.innerHTML = `Area occupied: ${totalArea}/${totalGameArea}px²`;
        this.timePassed += delta / 60;

        if (this.timePassed >= (1/shapesPerSecondValue)) {
            const randomShape = this.shapeFactory.createRandomShape()
            shapes.push(randomShape)
            shapeNumber.innerText = "Shape number : " + shapes.length

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
