/**
 * 2636 치즈
 * 공기에 닿으면 치즈는 녹는다.
 * 모두 녹아질 떄 까지 걸리는 시간과 다 녹기 직전 치즈 갯수 구하기.
 * 0이 없는 칸, 1이 치즈 칸
 * 
 * 남은 1의 갯수가 0될 때까지
 * bfs돌며 녹인 갯수를 리턴하여 이전 board의 갯수를 센다.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '13 12',
  '0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0',
  '0 0 0 0 0 0 0 1 1 0 0 0',
  '0 1 1 1 0 0 0 1 1 0 0 0',
  '0 1 1 1 1 1 1 0 0 0 0 0',
  '0 1 1 1 1 1 0 1 1 0 0 0',
  '0 1 1 1 1 0 0 1 1 0 0 0',
  '0 0 1 1 0 0 0 1 1 0 0 0',
  '0 0 1 1 1 1 1 1 1 0 0 0',
  '0 0 1 1 1 1 1 1 1 0 0 0',
  '0 0 1 1 1 1 1 1 1 0 0 0',
  '0 0 1 1 1 1 1 1 1 0 0 0',
  '0 0 0 0 0 0 0 0 0 0 0 0',
]


const [N, M] = input.shift().split(' ').map(Number);
const BOARD = input.map(el => el.split(' ').map(Number));

const checkRemain = (board) => {
  let result = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) result++;
    }
  }
  return result;
}



const solution = (n, m, board) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function bfs() {
    let melt = 0;
    const q = [[0, 0]]
    const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
    visited[0][0] = true;

    while (q.length !== 0) {
      const [curX, curY] = q.shift();

      for (let k = 0; k < 4; k++) {
        const nx = curX + dx[k];
        const ny = curY + dy[k];

        if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visited[nx][ny]) {
          visited[nx][ny] = true;
          if (board[curX][curY] === 0 && board[nx][ny] === 1) {
            board[nx][ny] = 0;
            melt++;
          } else {
            q.push([nx, ny]);
          }
        }
      }

    }

    return melt;
  }

  let remain = checkRemain(board);
  let cnt = 0;
  let day = 0;

  while (remain > 0) {
    cnt = bfs();
    remain = checkRemain(board);
    day++;
  }
  return `${day}\n${cnt}`
}


console.log(solution(N, M, BOARD));