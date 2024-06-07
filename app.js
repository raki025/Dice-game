var imagearray = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
];
var randomnum1 = Math.floor(Math.random() * imagearray.length);
var randomnum2 = Math.floor(Math.random() * imagearray.length);

if (randomnum1 > randomnum2) {
    document.getElementById("winner").innerHTML = "player1 wins"
} 
else if (randomnum1 < randomnum2) {
    document.getElementById("winner").innerHTML = "player2 wins"

}
else {
    document.getElementById("winner").innerHTML = "draw"
}

var imagesource1 = imagearray[randomnum1];
var imagesource2 = imagearray[randomnum2];

var image1 = document.getElementById("image1").setAttribute("src", imagesource1);
var image2 = document.getElementById("image2").setAttribute("src", imagesource2);
