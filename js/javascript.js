var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".squares__square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector(".js-color-display");
var messageDisplay = document.querySelector(".js-message")
var header = document.querySelector(".header");
var resetButton = document.querySelector(".js-reset");
var easyButton = document.querySelector(".js-easy");
var hardButton = document.querySelector(".js-hard");

easyButton.addEventListener("click", function() {
    easyButton.classList.add("menu__button--selected");    
    hardButton.classList.remove("menu__button--selected"); 
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(i = 0;i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].classList.add("menu__button--none");
        }
    } 
});

hardButton.addEventListener("click", function() {
    hardButton.classList.add("menu__button--selected");    
    easyButton.classList.remove("menu__button--selected");
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(i = 0;i < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].classList.remove("menu__button--none");
    }     
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new color
    pickedColor = pickColor();
    //change colorDisplat to pickcolor
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for(i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = "#232323"
})
colorDisplay.textContent = pickedColor;

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