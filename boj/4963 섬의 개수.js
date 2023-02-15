/**
 * 4963 섬의 개수
 * 섬 개수 세기
 * 가로, 세로, 대각선으로 연결되면 연결되있는 것.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '1 1',
  '0',
  '2 2',
  '0 1',
  '1 0',
  '3 2',
  '1 1 1',
  '1 1 1',
  '5 4',
  '1 0 1 0 0',
  '1 0 0 0 0',
  '1 0 1 0 1',
  '1 0 0 1 0',
  '5 4',
  '1 1 1 0 1',
  '1 0 1 0 1',
  '1 0 1 0 1',
  '1 0 1 1 1',
  '5 5',
  '1 0 1 0 1',
  '0 0 0 0 0',
  '1 0 1 0 1',
  '0 0 0 0 0',
  '1 0 1 0 1',
  '0 0',
]




const solution = (w, h, board) => {
  // console.log(board);
  const visited = Array.from({ length: h }, () => Array.from({ length: w }, () => false));
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const inRange = (x, y) => {
    return x >= 0 && y >= 0 && x < h && y < w;
  }

  const dfs = (x, y) => {
    visited[x][y] = true;
    for (let k = 0; k < 8; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (inRange(nx, ny) && !visited[nx][ny] && board[nx][ny] === 1) {
        dfs(nx, ny)
      }
    }
  }

  let cnt = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (!visited[i][j] && board[i][j] === 1) {
        cnt++;
        dfs(i, j)
      }
    }
  }

  return cnt;
}


while (input.length !== 1) {
  const [W, H] = input.shift().split(' ').map(Number);
  const BOARD = Array.from({ length: H }, () => []);
  for (let i = 0; i < H; i++) {
    const line = input.shift().split(' ').map(Number);
    BOARD[i] = line;
  }
  console.log(solution(W, H, BOARD));
}