let answer = 0;
function solution(n) {
  for (let i = 1; i <= n; i++) {
    const board = new Array(n + 1).fill(0);
    board[1] = i;
    dfs(board, 1, n);
  }
  return answer;
}
function isValid(board, row) {
  for(let i = 1; i < row; i++) {
    if(board[i] === board[row]) return false;
    if(Math.abs(i-row) === Math.abs(board[i] - board[row])) return false;
  }
  return true;
}
function dfs(board, row, n) {
  if(n === row) answer++;
  else {
    for(let i = 1; i <= n; i++) {
      board[row+1] = i;
      if(isValid(board, row+1)) dfs(board, row+1, n);
    }
  }
}
let n = 4;
console.log(solution(n));