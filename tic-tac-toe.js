/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/
// tic-tac-toe.js

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});

anotherGame = "Y";
while (anotherGame === "Y") {

let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    if (board[position] = " ") {
        board[position] = mark;
    } else {
        console.log ("That position is not empty")
    }
}

// TODO: print the game board as described at the top of this code skeleton
function printBoard() {
        console.log (board[1], "|", board[2], "|", board[3])
        console.log ("---------" )
        console.log (board[4], "|", board[5], "|", board[6] )
        console.log ("---------" )
        console.log (board[7], "|", board[8], "|", board[9])
}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
function validateMove(position)  {
    if (isNaN(position)){
        return false;
    } else if (position<1 || position > 9){
        return false
    } else if (board[position] !== " ") {
        return false 
    } else {
        return true
    }
}

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3],[4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    for (i=0; i<8; i++) {
        [a,b,c] = winCombinations[i] 
            if (board[a] == player && board[b] == player && board[c] == player){
                return true
            }
        }return false 
    } 

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull()  {
    for (i=1; i<=9; i++){
        if (board[i] == " ") {
            return false
        }
    } return true
}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
function playTurn(player) {
    printBoard(); 
    
    position = prompt ("Enter a number: ")

    if (validateMove(position)) {
        markBoard(position,player);

        if (checkWin(player)) {
            winnerIdentified = true;
            printBoard();
            console.log ("Congratulations! You Won!");
            return true;
        }

        if (checkFull()) {
            winnerIdentified = true ; 
            printBoard();
            console.log ("The game ends with a tie");
            return true;
        }

        return false 
        
    } else { 
        console.log("Invalid move");
        return false; 
    }
}

// entry point of the whole program

console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

let winnerIdentified = false
let currentTurnPlayer = 'X'

    while (!winnerIdentified){
        playTurn(currentTurnPlayer);
        // feel free to add logic here if needed, e.g. announcing winner or tie
        currentTurnPlayer = currentTurnPlayer === "X" ? "O" : "X";
    }
anotherGame = prompt ("Want to play another game? Y or N")

}

console.log ("Thank You for Playing!!")
    
// Bonus Point: Implement the feature for the user to restart the game after a tie or game over
