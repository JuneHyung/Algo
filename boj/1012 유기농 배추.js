/**
 * 1012 유기농 배추
 * 서로 인접한 배추들의 갯수 세기
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '2',
  '10 8 17',
  '0 0',
  '1 0',
  '1 1',
  '4 2',
  '4 3',
  '4 5',
  '2 4',
  '3 4',
  '7 4',
  '8 4',
  '9 4',
  '7 5',
  '8 5',
  '9 5',
  '7 6',
  '8 6',
  '9 6',
  '10 10 1',
  '5 5',
]


const T = Number(input.shift());

const solution = (n, m, loc) => {
  const board = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
  const checked = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
  for (const [x, y] of loc) {
    board[x][y] = 1;
  }
  const inRange = (x, y) => {
    return x >= 0 && y >= 0 && x < n && y < m;
  }

  let cnt = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const bfs = (i, j) => {
    const q = [[i, j]];
    while (q.length !== 0) {
      const [curX, curY] = q.shift();
      checked[curX][curY] = true;

      for (let k = 0; k < 4; k++) {
        const nx = curX + dx[k];
        const ny = curY + dy[k];

        if (inRange(nx, ny) && board[nx][ny] === 1 && !checked[nx][ny]) {
          checked[nx][ny] = true;
          bfs(nx, ny);
        }
      }
    }

  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1 && !checked[i][j]) {
        bfs(i, j);
        cnt++;
      }
    }
  }

  return cnt;
}

for (let t = 0; t < T; t++) {
  const [N, M, K] = input.shift().split(' ').map(Number);
  const info = [];
  for (let i = 0; i < K; i++) info.push(input.shift().split(' ').map(Number));
  console.log(solution(N, M, info))

}