startGame()

function startGame() {
		
    for (var i = 1; i <= 9; i = i + 1) {
        clearBox(i);
    }

    document.turn = "X";
    if (Math.random() < 0.5) {
        document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + " zaczyna");
}

function setMessage(msg) {
    document.getElementById("info").innerText = msg;
}

function nextMove(square) {
    if (document.winner != null) {
        setMessage(document.winner + " juz wygral gre.");
    } else if (square.innerText == "") {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setMessage("Pole jest juz zajete.");
    }
}

function switchTurn() {
    if (checkWin(document.turn)) {
        setMessage("Gratulacje: " + document.turn + " Wygrales!");
        document.winner = document.turn;
    } else if (document.turn == "X") {
        document.turn = "O";
        setMessage("Tura:  " + document.turn);
    } else {
        document.turn = "X";
        setMessage("Tura: " + document.turn);
    }
}

function checkWin(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) || 
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) || 
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById(number).innerText;
}

function clearBox(number) {
    document.getElementById(number).innerText = "";
}
