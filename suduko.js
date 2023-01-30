function sudokuSolver(board) {
    let row = new Array(9).fill(0).map(() => new Array(9).fill(false));
    let col = new Array(9).fill(0).map(() => new Array(9).fill(false));
    let block = new Array(9).fill(0).map(() => new Array(9).fill(false));
    let emptySpaces = [];

    // Helper function to check if a given number can be placed in a given cell
    function canPlace(x, y, num) {
        let blockIndex = Math.floor(x / 3) * 3 + Math.floor(y / 3);
        return !row[x][num - 1] && !col[y][num - 1] && !block[blockIndex][num - 1];
    }
 
    // Helper function to mark a given number as placed in a given cell
    function placeNumber(x, y, num) {
        let blockIndex = Math.floor(x / 3) * 3 + Math.floor(y / 3);
        row[x][num - 1] = true;
        col[y][num - 1] = true;
        block[blockIndex][num - 1] = true;
        board[x][y] = num;
    }

    // Helper function to remove a given number as placed in a given cell
    function removeNumber(x, y, num) {
        let blockIndex = Math.floor(x / 3) * 3 + Math.floor(y / 3);
        row[x][num - 1] = false;
        col[y][num - 1] = false;
        block[blockIndex][num - 1] = false;
        board[x][y] = 0;
    }

    // Initialize the arrays to track the numbers that have been placed in each row, column, and block
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== 0) {
                let num = board[i][j];
                let blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                row[i][num - 1] = true;
                col[j][num - 1] = true;
                block[blockIndex][num - 1] = true;
            } else {
                emptySpaces.push([i, j]);
            }
        }
    }

    // Recursive function to solve the sudoku
    function solve() {
        if (emptySpaces.length === 0) return true;
        let curr = emptySpaces.pop();
        let x = curr[0];
        let y = curr[1];
        for (let num = 9; num >= 1; num--) {
            if (canPlace(x, y, num)) {
                placeNumber(x, y, num);
                if (solve()) return true;
                removeNumber(x, y, num);
            }
        }
        emptySpaces.push(curr);
        return false;
    }

    // Call the solve function to solve the sudoku
    solve();
}
console.log(sudokuSolver);
