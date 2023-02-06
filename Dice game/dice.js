var randomNumber1 = Math.floor(Math.random()* 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png
var randomImageSource = "image/" + randomDiceImage; //image/dice1.png-image/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()* 6) + 1; //1-6
var randomDiceImage = "dice" + randomNumber2 + ".png"; //dice1.png-dice6.png
var randomImageSource2 = "image/" + randomDiceImage; //image/dice1.png-image/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}

