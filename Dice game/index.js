function generateDiceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

function play() {
    var player1 = generateDiceRoll();
    var player2 = generateDiceRoll();

    document.querySelector(".img1").setAttribute("src", "images/dice"+player1+".png");
    document.querySelector(".img2").setAttribute("src", "images/dice"+player2+".png");

    var result = "";
    if(player1 > player2) {
        result = "player 1 won";
    }
    else if(player2 > player1) {
        result = "player 2 won";
    }
    else {
        result = "draw";
    }

    document.getElementsByTagName("h1")[0].innerHTML=result;
}

play();