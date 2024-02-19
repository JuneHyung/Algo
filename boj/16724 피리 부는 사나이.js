/**
 * 16724 피리 부는 사나이
 * 피리를 불면, 정해진  UDLR중 한 방향으로 이동한다.
 * 더 이상 움직이기 힘들어하는 회원들을 지키기 위해 safe zone이라는 곳이 있다.
 * 예산이 넉넉치 않아 최소 개수의 safe zone을 만드려 한다.
 * 지도 어느 구역에 잇더라도 safe zone에 들어갈 수 있게 하는 safezone의 최소 개수를 구하여라.
 * 
 * 지도 행의 수 N, 열의 수 M
 * 지도가 주어진다.
 * 지도 밖으로 나가는 명령은 주어지지 않음.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '3 4',
// 'DLLL',
// 'DRLU',
// 'RRRU',
// ]
const input = [
  '10 10',
'RRLLLLLRRL',
'UDDDULLDUU',
'RLURDULRUD',
'DULULLURRD',
'RUUURUDUDL',
'ULRUULLLLU',
'RDLLDDRLDD',
'DLRUULLRDL',
'UUUUUDULLD',
'URUULLRRRU',
]
const [N, M] = input.shift().split(' ').map(Number)
const BOARD = input.map(line => line.split(''));

const solution = (n, m, board) => {

  const visited = Array.from({length:n},()=>Array.from({length:m},()=>0));
  let cnt = 0;
  const dirX = {
    'U': -1,
    'D': 1,
    'L': 0,
    'R': 0,
  }
  const dirY = {
    'U': 0,
    'D': 0,
    'L': -1,
    'R': 1,
  }

  const dfs = (x, y) => {
    visited[x][y] = 1;
    const dir = board[x][y];

    const nx = x+ dirX[dir];
    const ny = y+ dirY[dir];

    if(visited[nx][ny]===1){ cnt++;}
    else if(visited[nx][ny]===0) dfs(nx, ny);
    visited[x][y]=2;

  }

  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(visited[i][j]===0){
        dfs(i,j)
      }
    }
  }

  return cnt;
}

console.log(solution(N, M, BOARD));
