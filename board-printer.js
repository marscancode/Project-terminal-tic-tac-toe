/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
    for (const row of board){
        for (let i=0; i<row.length; i++){
            if (row[i] === "_"){
                row[i] = " ";
            }
        }
        const joinedRow = "  " + row.join("  |  ") + "\n=================";
        console.log(joinedRow);
    }
}

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
    for (const row of board){
        for (const col of row){
            if (col === "_"){
                return false;
            }
        }
    }
    return true;
}
