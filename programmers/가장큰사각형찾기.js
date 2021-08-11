function solution(board)
{
    let row_len = board[0].length;
    let col_len = board.length;
    let answer = 0;
    if (row_len < 2 || col_len < 2) return 1;
    for (let i = 1; i < col_len; i++) {
        for (let j = 1; j < row_len; j++) {
            if (board[i][j] > 0) {
                let min = Math.min(board[i - 1][j - 1], board[i][j - 1], board[i - 1][j])
                board[i][j] = min + 1;
            }
            answer = Math.max(board[i][j], answer);
        }
    }
    

    return answer*answer
}
let board = [[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]];
console.log(solution(board));