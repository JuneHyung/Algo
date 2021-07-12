function solution(board, moves) {
    let basket = [];
    let answer = 0;
    for (var i = 0; i < moves.length; i++) {
        let idx = parseInt(moves[i]) - 1;
        for (var j = 0; j < board[idx].length; j++) {
            if (board[j][idx] != 0) {
                basket.push(board[j][idx]);
                board[j][idx] = 0;
                if (basket.length > 1 && basket[basket.length - 1] == basket[basket.length - 2]) {
                    basket.pop();
                    basket.pop();
                    answer+=2;
                 }
                
                break;
            }
        }
    }
    console.log(board);
    console.log(basket);

    return answer;
}

let board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
let moves = [1,5,3,5,1,2,1,4];
console.log(solution(board, moves));