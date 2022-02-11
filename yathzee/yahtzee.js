function roll(){
var die1 = document.getElementById("dice1");
var die2 = document.getElementById("dice2");
var die3 = document.getElementById("dice3");
var die4 = document.getElementById("dice4");
var die5 = document.getElementById("dice5");

var tot = document.getElementById("total");
var yat = document.getElementById("yahtzee");

var diceOne = Math.floor(Math.random()*6) + 1;
var diceTwo = Math.floor(Math.random()*6) + 1;
var diceThree = Math.floor(Math.random()*6) + 1;
var diceFour = Math.floor(Math.random()*6) + 1;
var diceFive = Math.floor(Math.random()*6) + 1;

var total = diceOne + diceTwo + diceThree + diceFour + diceFive;

if (diceOne===diceTwo && diceOne===diceThree && diceOne===diceFour&&diceThree===diceFive){
    yat.innerHTML = "YAHTZEE";
} else {
    yat.innerHTML = "";
}

die1.innerHTML = diceOne.toString();
die2.innerHTML = diceTwo.toString();
die3.innerHTML = diceThree.toString();
die4.innerHTML = diceFour.toString();
die5.innerHTML = diceFive.toString();



}

var count = 0;

function clicks(){
    count++;
    var button = document.getElementById("btn");
    var display = document.getElementById("displayCount");
    display.innerHTML = count;
}