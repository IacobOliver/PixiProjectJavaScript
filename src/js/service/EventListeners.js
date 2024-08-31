import { setShapesPerSecondValue, shapesPerSecondValue } from "../GlobalVariables.js"


let shapesPerSecond = document.getElementById("shapesPerSecond");
let decreaseNumberOfShapes = document.getElementById("decreaseNumberOfShapes")
let increaseNumberOfShapes = document.getElementById("increaseNumberOfShapes")



function increaseShapePerSecond(){
    setShapesPerSecondValue(shapesPerSecondValue + 1)
     shapesPerSecond.innerText = "Shapes/s: " + shapesPerSecondValue
}

function decreaseShapePerSecond(){
    setShapesPerSecondValue(shapesPerSecondValue - 1)
    shapesPerSecond.innerText = "Shapes/s: " + shapesPerSecondValue
}

decreaseNumberOfShapes.addEventListener("click", decreaseShapePerSecond)
increaseNumberOfShapes.addEventListener("click", increaseShapePerSecond)