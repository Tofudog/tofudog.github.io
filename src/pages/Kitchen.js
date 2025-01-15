import apple from "../assets/images/food/apple.png";
import banana from "../assets/images/food/banana.png";

const FOODS = [apple, banana]
const IMAGE_DIMENSIONS = [120, 120];

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function grabFood() {
    let idx = getRandomNumber(FOODS.length);
    let curFood = document.getElementById("cur_food");
    curFood.src = FOODS[idx];
    curFood.width = IMAGE_DIMENSIONS[0]; curFood.height = IMAGE_DIMENSIONS[1];
}

function Kitchen() {
    return (
        <div>
            <h2>
                Grab whatever you want from the fridge
            </h2>
            <button onClick={grabFood}>Get Food</button>
            <br></br>
            <img id="cur_food"></img>
        </div>
    )
}


export default Kitchen;