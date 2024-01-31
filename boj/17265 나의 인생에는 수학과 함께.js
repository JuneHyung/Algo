/**
 * 나의 인생에는 수학과 함께
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
  '5 + 5 - 3',
  '* 3 - 1 -',
  '4 + 5 + 2',
  '- 2 * 3 -',
  '1 * 5 + 2',
]
const N = input[0];
const BOARD = input.slice(1).map(el => el.split(' '))

const solution = (n, board) => {
  const dx = [1, 0];
  const dy = [0, 1];
  const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

  const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < n;

  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  const dfs = (x, y, v) => {
    if (x === n - 1 && y === n - 1) {
      if(max < v) max = v;
      if(min > v) min = v;
      return;
    }
    else {
      const cur = board[x][y];
      visited[x][y] = true;
      for (let k = 0; k < 2; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (inRange(nx, ny) && !visited[nx][ny]) {
          const next = Number(board[nx][ny]);
          switch (cur) {
            case '+':
              dfs(nx, ny, v + next);
              break;
            case '-':
              dfs(nx, ny, v - next);
              break;
            case '*':
              dfs(nx, ny, v * next);
              break;
            default:
              dfs(nx, ny, v);
              break;
          }
        }
      }
      visited[x][y] = false;
    }
  }

  const cur = Number(board[0][0])
  dfs(0, 0, cur);

  return `${max} ${min}`
}
console.log(solution(N, BOARD))