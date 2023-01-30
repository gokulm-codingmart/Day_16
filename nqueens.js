 var solveNQueens = function(n) {
    
    if(n === 1) return [["Q"]];

    let col = new Set();
    let pos = new Set();
    let neg = new Set();


    let res = [];
    
    let board = new Array(n).fill(".");
    for(let i=0;i<n;i++){
        board[i] = new Array(n).fill(".");
    }

    const isValid = (r,c) => !(col.has(c) || pos.has(r+c) || neg.has(r-c))

    const addQ = (r,c) => {
        col.add(c);
        pos.add(r+c);
        neg.add(r-c);
        board[r][c] = "Q";
    }

    const removeQ = (r,c) => {
        col.delete(c);
        pos.delete(r+c);
        neg.delete(r-c);
        board[r][c] = ".";
    }

        function recurse(row){

            //base case........

            if(row === n){
                res.push([...board].map((row) => row.join("")));
            }

                for(let col=0;col<n;col++){
                    if(isValid(row,col)){
                        
                        addQ(row,col);

                        recurse(row + 1);

                        removeQ(row,col);
                    }
                }
            }
    
    recurse(0);
    console.log(res);
};

let n = 4;
solveNQueens(n);
// console.log(n.length)






























// let board = Array.from(Array(n), () => new Array(n).fill("."));
// board[1,1] = "Q";
// console.log(board);
    // let board = Array.from(Array(n), () => new Array(n).fill("."));