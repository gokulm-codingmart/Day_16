let matrix = [[7,6,5,3,4,5],
              [8,2,4,2,1,8],
              [5,4,3,5,6,7],
              [9,8,2,1,8,0],
              [6,0,1,4,3,1],
              [3,8,7,7,6,4]]

let x = matrix.length;
let y = matrix[0].length;

function find(matrix,i,j,dp){

    if (i < 0 || j < 0 || i >= x || j >= y) {
        return 0;
    }

    if(dp[i][j]!== -1){
        return dp[i][j];
    }

     let count = 0;

    if (i + 1 < x && matrix[i][j] < matrix[i + 1][j]) {
        count = Math.max(count, 1 + find(matrix, i + 1, j, dp));
    }

    if (j + 1 < y && matrix[i][j] < matrix[i][j + 1]) {
        count = Math.max(count, 1 + find(matrix, i, j + 1, dp));
    }

    if (i - 1 >= 0 && matrix[i][j] < matrix[i - 1][j]) {
        count = Math.max(count, 1 + find(matrix, i - 1, j, dp));
    }

    if (j - 1 >= 0 && matrix[i][j] < matrix[i][j - 1]) {
        count = Math.max(count, 1 + find(matrix, i, j - 1, dp));
    }

    dp[i][j] = count;

    return count;
}

function seq(matrix) {
    let dp = [];
    for (let i = 0; i < x; i++) {
        dp.push(Array(y).fill(-1));
    }

    let maxCount = 0;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            maxCount = Math.max(maxCount, find(matrix, i, j, dp));
        }
    }

    return maxCount;
}

console.log(seq(matrix))
