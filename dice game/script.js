const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const result = document.getElementById("result");
const rollDice = document.getElementById("rollDice");

rollDice.addEventListener("click", function() {
    const player1Roll = Math.floor(Math.random() * 6) + 1;
    const player2Roll = Math.floor(Math.random() * 6) + 1;

    dice1.textContent = player1Roll;
    dice2.textContent = player2Roll;

    if (player1Roll > player2Roll) {
        result.textContent = "Player 1 Wins!";
    } else if (player2Roll > player1Roll) {
        result.textContent = "Player 2 Wins!";
    } else {
        result.textContent = "It's a Tie!";
    }
});
