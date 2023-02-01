console.log("Click on any cell to begin the Game!");

const text = document.getElementById("text");
const cells = document.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener("click", cellClicked));

let options = ["", "", "", "", "", "", "", "", ""];

const winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let player = 1;
let running = true;

function cellClicked() {
    const cellIndex = this.getAttribute("id");

    if (options[cellIndex] != "X" && options[cellIndex] != "O") {

        if (player == 1 && running) {
            options[cellIndex] = "X";
            this.textContent = "X";
            console.log(options);
            checkWinner();
            if (running) {
                player = 2;
                text.textContent = `Player ${player}'s turn...`;
                console.log(`Player ${player}'s turn`);
            }
        }
        else if (player == 2 && running) {
            options[cellIndex] = "O";
            this.textContent = "O";
            console.log(options);
            checkWinner();
            if (running) {
                player = 1;
                text.textContent = `Player ${player}'s turn...`;
                console.log(`Player ${player}'s turn`);
            }
        }
    }
}

function checkWinner() {
    for (let i = 0; i < winCondition.length; i++) {
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == cellB && cellB == cellC) {
            if (cellA != "" && cellB != "" && cellC != "") {
                text.textContent = "Player " + player + " Wins!";
                console.log("Player " + player + " Wins!");
                running = false;
            }
        }
        else if (!options.includes("")) {
            text.textContent = `It's a Draw!`;
            console.log(`It's a Draw!`);
            running = false;
        }
    }
}