var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".squares__square");
var colorDisplay = document.querySelector(".js-color-display");
var messageDisplay = document.querySelector(".js-message")
var header = document.querySelector(".header");
var resetButton = document.querySelector(".js-reset");
var modeButtons = document.querySelectorAll(".js-mode");

init();

function init() {
    setupModeButtons();
    setupsquares();
    reset();
}

function setupModeButtons() {
    for(i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("menu__button--selected");
            modeButtons[1].classList.remove("menu__button--selected");
            this.classList.add("menu__button--selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6 ;
            reset();
        });
    }
}

function setupsquares() {
    for(i = 0; i < squares.length; i++) {
        //Initiele kleuren
        squares[i].style.backgroundColor = colors[i];
        //Voeg listener toe aan squares
        squares[i].addEventListener("click", function(){
            //get color square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColor(pickedColor);
                resetButton.textContent = "Play Again?";
                header.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}

function reset() {
    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new color
    pickedColor = pickColor();
    //change colorDisplat to pickcolor
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for(i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].classList.remove("menu__button--none")
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].classList.add("menu__button--none");
        }
    } 
    header.style.backgroundColor = "steelblue"
}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColor(color) {
    for(i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //generate an array
    var arr = [];
    //repeat num times
    for(i = 0; i < num; i++) {
        //add num colors to arra
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    // pick red between 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick green between 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick blue between 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}