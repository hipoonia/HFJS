var location1 = Math.floor(Math.random()*5);
var location2 = location1 + 1;
var location3 = location1 + 2;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6): ");

  if (guess<0 || guess>6) {
    alert("Please enter a valid cell number!");
  }

  else {

    guesses++;

    if (guess==location1) {
      hits++;
      location1 = -1;
      alert("HIT!");
    }
    else if (guess==location2) {
      hits++;
      location2 = -1;
      alert("HIT!");
    }
    else if (guess==location3) {
      hits++;
      location3 = -1;
      alert("HIT!");
    }
    else {
      alert("MISS");
    }
  }

  if (hits==3) {
    alert("You sunk my ship!");
    isSunk = true;
  }
}

var stats =  "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);
