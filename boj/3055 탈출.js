/**
 * 3055 탈출
 * 고슴도치 한마리가 비버의 굴로 가능한 빨리 도망가 홍수를 피하려한다.
 * 빈곳은 '.' 물은 '*', 돌은 'X'
 * 비버의 굴은 'D', 고슴도치위치는 'S'
 * 상하좌우 이동가능.
 * 
 * 물이 있는 칸과 인접한 빈칸은 물이 차게된다.
 * 물과 고슴도치는 돌을 통과할 수 없고, 고슴이는 물로 이동 불가능하며, 물도 비버의 굴로 확장불가.
 * 
 * 고슴도치는 물이 찰 에정인 칸으로 이동 못한다.
 * 비버의 굴로 이동할 수 있는 가장 빠른시간 출력. 이동할 수 없으면 'KAKTUS'출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '3 3',
//   'D.*',
//   '...',
//   '.S.',
// ]
const input = [
  '3 3',
  '.SX',
  '.*D',
  '...',
]
const [R, C] = input[0].split(' ').map(Number);
const BOARD = input.slice(1).map(el => el.split(''));

const solution = (r, c, board) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const inRange = (x, y) => x >= 0 && y >= 0 && x < r && y < c;
  let D, S;
  let water = [];
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      const cur = board[i][j];
      switch(cur){
        case 'D':
          D = [i, j];
          break;
        case 'S':
          S = [i, j];
          break;
        case '*':
          water.push([i, j]);
          break;
        default: break;
      }
    }
  }

  const visited = Array.from({ length: r }, () => Array.from({ length: c }, () => false));

  const spreadWater = () => {
    const spread = [];
    for (const [x, y] of water) {
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (inRange(nx, ny) && board[nx][ny] === '.') {
          board[nx][ny] = '*';
          spread.push([nx, ny]); // water로 반복하기때문에 마지막에 추가
        }
      }
    }
    water.push(...spread)
  }

  const bfs = () => {
    const [Sx, Sy] = S;
    const [Dx, Dy] = D;
    const q = [[Sx, Sy, 0]];
    visited[Sx][Sy] = true;
    while (q.length !== 0) {
      const len = q.length;
      spreadWater();

      for (let t = 0; t < len; t++) {
        const [cx, cy, cnt] = q.shift();
        if (cx === Dx & cy === Dy) {
          return cnt;
        }
        for (let k = 0; k < 4; k++) {
          const nx = cx + dx[k];
          const ny = cy + dy[k];
          if (inRange(nx, ny) && !visited[nx][ny] && (board[nx][ny] !== '*' && board[nx][ny] !== 'X')) {
            visited[nx][ny] = true;
            q.push([nx, ny, cnt + 1]);
          }
        }
      }
    }
    return;
  }
  
  return bfs() || 'KAKTUS';
}

console.log(solution(R, C, BOARD));
