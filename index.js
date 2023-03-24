var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomImage1 = "dice" + (randomNumber1) +".png"
var randomImageSource1 = "D:/Codes/Web Development/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/" + (randomImage1);

document.querySelector(".img1").setAttribute("src", randomImageSource1)
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImage2 = "dice" + (randomNumber2) + ".png";
var randomImageSource2 = "D:/Codes/Web Development/Dicee Challenge - Starting Files/Dicee Challenge - Starting Files/images/" + (randomImage2);
document.querySelector(".img2").setAttribute("src", randomImageSource2)

var x = document.querySelector("h1");
if(randomNumber1>randomNumber2){
    x.innerHTML = "Player 1 Wins!";
    
}
 else if(randomNumber1 < randomNumber2){
    x.innerHTML = "Player 2 Wins!";
}
else{
    x.innerHTML = "Draw!";
}

