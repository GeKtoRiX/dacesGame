var player1 = Math.trunc((Math.random() * 6) + 1);
playerOneThrow(player1);
var player2 = Math.trunc((Math.random() * 6) + 1);
playerTwoThrow(player2);

if(player1 < player2){
  document.querySelector(".winner").innerHTML = "Player 2 win!";
}
else if(player1 > player2)
{
  document.querySelector(".winner").innerHTML = "Player 1 win!";
}
else{
  document.querySelector(".winner").innerHTML = "No one win!";
}

function reloadPage(){
  location.reload();
}

function playerOneThrow(player1) {

  function oneToFive() {
    document.querySelector(".dice").style.padding = "10 px";
    document.querySelector(".firstDice .dot").style.marginTop = "30px";
    document.querySelector(".firstDice .dot-1").style.marginRight = "25px";
    document.querySelector(".firstDice .dot-2").style.marginLeft = "25px";
    document.querySelector(".firstDice .dot-3").style.margin = "0px 50px";
    document.querySelector(".firstDice .dot-4").style.marginRight = "25px";
    document.querySelector(".firstDice .dot-4").style.marginTop = "0";
    document.querySelector(".firstDice .dot-5").style.marginLeft = "25px";
    document.querySelector(".firstDice .dot-5").style.marginTop = "0";
    document.querySelector(".firstDice .dot-6").style.display = "none";
  }

  if (player1 === 6) {
    return;
  } else if (player1 === 5) {
    oneToFive();
  } else if (player1 === 4) {
    oneToFive();
    document.querySelector(".firstDice .dot-3").style.visibility = "hidden";
    document.querySelector(".firstDice .dot-6").style.display = "none";
  } else if (player1 === 3) {
    oneToFive();
    document.querySelector(".firstDice .dot-2").style.visibility = "hidden";
    document.querySelector(".firstDice .dot-4").style.visibility = "hidden";
  } else if (player1 === 2) {
    oneToFive();
    document.querySelector(".firstDice .dot-3").style.visibility = "hidden";
    document.querySelector(".firstDice .dot-2").style.visibility = "hidden";
    document.querySelector(".firstDice .dot-4").style.visibility = "hidden";
  } else if (player1 === 1) {
    oneToFive();
    var oneTrow = document.querySelectorAll(".firstDice .dot-1, .firstDice .dot-2, .firstDice .dot-4, .firstDice .dot-5");
    for (var i = 0; i < oneTrow.length; i++) {
      oneTrow[i].style.visibility = "hidden";
    }
  }
}

function playerTwoThrow(player2) {

  function oneToFive() {
    document.querySelector(".dice").style.padding = "10 px";
    document.querySelector(".secondDice .dot").style.marginTop = "30px";
    document.querySelector(".secondDice .dot-1").style.marginRight = "25px";
    document.querySelector(".secondDice .dot-2").style.marginLeft = "25px";
    document.querySelector(".secondDice .dot-3").style.margin = "0px 50px";
    document.querySelector(".secondDice .dot-4").style.marginRight = "25px";
    document.querySelector(".secondDice .dot-4").style.marginTop = "0";
    document.querySelector(".secondDice .dot-5").style.marginLeft = "25px";
    document.querySelector(".secondDice .dot-5").style.marginTop = "0";
    document.querySelector(".secondDice .dot-6").style.display = "none";
  }

  if (player2 === 6) {
    return;
  } else if (player2 === 5) {
    oneToFive();
  } else if (player2 === 4) {
    oneToFive();
    document.querySelector(".secondDice .dot-3").style.visibility = "hidden";
    document.querySelector(".secondDice .dot-6").style.display = "none";
  } else if (player2 === 3) {
    oneToFive();
    document.querySelector(".secondDice .dot-2").style.visibility = "hidden";
    document.querySelector(".secondDice .dot-4").style.visibility = "hidden";
  } else if (player2 === 2) {
    oneToFive();
    document.querySelector(".secondDice .dot-3").style.visibility = "hidden";
    document.querySelector(".secondDice .dot-2").style.visibility = "hidden";
    document.querySelector(".secondDice .dot-4").style.visibility = "hidden";
  } else if (player2 === 1) {
    oneToFive();
    var oneTrow = document.querySelectorAll(".secondDice .dot-1, .secondDice .dot-2, .secondDice .dot-4, .secondDice .dot-5");
    for (var i = 0; i < oneTrow.length; i++) {
      oneTrow[i].style.visibility = "hidden";
    }
  }
}
