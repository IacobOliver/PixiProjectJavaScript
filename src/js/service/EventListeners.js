import { gravityValue, setGravityValue, setShapesPerSecondValue, shapesPerSecondValue } from "../GlobalVariables.js"

// info tags
let shapesPerSecondTag = document.getElementById("shapesPerSecond");
let gravityValueTag = document.getElementById("gravityValue");

//button tags
let decreaseNumberOfShapesTag = document.getElementById("decreaseNumberOfShapes")
let increaseNumberOfShapesTag = document.getElementById("increaseNumberOfShapes")

let increaseGravityValueTag = document.getElementById("increaseGravityValue")
let decreaseGravityValueTag = document.getElementById("decreaseGravityValue")



function increaseShapePerSecond() {
    if (shapesPerSecondValue >= 1){
        console.log(shapesPerSecondValue)
        setShapesPerSecondValue(shapesPerSecondValue + 1)
        shapesPerSecondTag.innerText = "Shapes/s: " + shapesPerSecondValue
    }
}

function decreaseShapePerSecond() {
    setShapesPerSecondValue(shapesPerSecondValue - 1)
    shapesPerSecondTag.innerText = "Shapes/s: " + shapesPerSecondValue
}

function increaseGravityValue() {
    setGravityValue(gravityValue + 0.03)
    gravityValueTag.innerText = "Gravity : " + gravityValue.toFixed(4)
}

function decreaseGravityValue() {
    if (gravityValue > 0.03) {
        setGravityValue(gravityValue - 0.03)
        gravityValueTag.innerText = "Gravity : " + gravityValue.toFixed(4)
    }
}



//events
decreaseNumberOfShapesTag.addEventListener("click", decreaseShapePerSecond)
increaseNumberOfShapesTag.addEventListener("click", increaseShapePerSecond)

decreaseGravityValueTag.addEventListener("click", increaseGravityValue)
increaseGravityValueTag.addEventListener("click", decreaseGravityValue)