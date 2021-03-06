var targetNumber = Math.floor(Math.random() * (102)) + 19;
var blue = Math.floor(Math.random() * (11)) + 1;
var green = Math.floor(Math.random() * (11)) + 1;
var red = Math.floor(Math.random() * (11)) + 1;
var yellow = Math.floor(Math.random() * (11)) + 1;
console.log(targetNumber);
console.log(blue);
console.log(green);
console.log(red);
console.log(yellow);

$("#targetScore").text(targetNumber);

var wins = 0;
var losses = 0;
var counter = 0;

$("#wins").text(wins);
$("#losses").text(losses);

function start() {
    counter = 0;
    $("#currentScore").text(counter);
    targetNumber = Math.floor(Math.random() * (102)) + 19;
    $("#targetScore").text(targetNumber);
    blue = Math.floor(Math.random() * (11)) + 1;
    green = Math.floor(Math.random() * (11)) + 1;
    red = Math.floor(Math.random() * (11)) + 1;
    yellow = Math.floor(Math.random() * (11)) + 1;
};

function winner() {
    wins++;
    $("#wins").text(wins);
    start();
}

function loser() {
    losses++;
    $("#losses").text(losses);
    start();
}

var blueCrystalImage = $("<img>");
blueCrystalImage.attr("src", "assets/images/blue.png");
blueCrystalImage.attr("data-bluevalue", blue);
$("#blueCrystal").append(blueCrystalImage);

$("#blueCrystal").on("click", function () {
    counter = counter + blue;
    console.log(counter);
    $("#currentScore").text(counter);
    if (counter === targetNumber) {
        winner();
    } else if (counter > targetNumber) {
        loser();
    }
});

var greenCrystalImage = $("<img>");
greenCrystalImage.attr("src", "assets/images/green.png");
greenCrystalImage.attr("data-greenvalue", green);
$("#greenCrystal").append(greenCrystalImage);

$("#greenCrystal").on("click", function () {
    counter = counter + green;
    console.log(counter);
    $("#currentScore").text(counter);
    if (counter === targetNumber) {
        winner();
    } else if (counter > targetNumber) {
        loser();
    }
});

var redCrystalImage = $("<img>");
redCrystalImage.attr("src", "assets/images/red.png");
redCrystalImage.attr("data-redvalue", red);
$("#redCrystal").append(redCrystalImage);

$("#redCrystal").on("click", function () {
    counter = counter + red;
    console.log(counter);
    $("#currentScore").text(counter);
    if (counter === targetNumber) {
        winner();
    } else if (counter > targetNumber) {
        loser();
    }
});

var yellowCrystalImage = $("<img>");
yellowCrystalImage.attr("src", "assets/images/yellow.png");
yellowCrystalImage.attr("data-bluevalue", yellow);
$("#yellowCrystal").append(yellowCrystalImage);

$("#yellowCrystal").on("click", function () {
    counter = counter + yellow;
    console.log(counter);
    $("#currentScore").text(counter);
    if (counter === targetNumber) {
        winner();
    } else if (counter > targetNumber) {
        loser();
    }
});
