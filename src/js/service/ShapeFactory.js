import { Ellipse } from "../figures/Ellipse.js";
import { Circle } from "../figures/circle.js";
import { FiveSide } from "../figures/fiveSide.js";
import { FourSide } from "../figures/fourSide.js";
import { SixSide } from "../figures/sixSide.js";
import { Star } from "../figures/star.js";
import { ThreeSide } from "../figures/threeSide.js";

export class ShapeFactory {
    constructor(app) {
        this.app = app;
        this.shapeConstructors = [
            { type: ThreeSide, args: [10, 100, 0xff0000, app] },
            { type: FourSide, args: [100, 100, 0xff0000, app] },
            { type: FiveSide, args: [200, 100, 0xff0000, app] },
            { type: SixSide, args: [350, 100, 0xff0000, app] },
            { type: Circle, args: [450, 350, 0xff0000, app] },
            { type: Ellipse, args: [550, 400, 0xff0000, app] },
            { type: Star, args: [150, 450, 5, 0xff0000, app] },
        ];
    }

    createShape(randomInt) {
        if (randomInt < 0 || randomInt >= this.shapeConstructors.length) {
            throw new Error('Invalid randomInt value');
        }
        const { type, args } = this.shapeConstructors[randomInt];
        return new type(...args);
    }
}