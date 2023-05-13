/**
 * 2589 보물섬
 * 보물은 서로 간에 최단 거리로 이동하는데 있어 가장 긴 시간이 걸리는 육지 두곳에 묻혀있다.
 * 보물이 묻힌 두 곳 간의 최단 거리로 이동하는 시간을 구하는 프로그램 작성.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 7',
  'WLLWWWL',
  'LLLWLLL',
  'LWLWLWW',
  'LWLWLLL',
  'WLLWLWW',
]
const [N, M] = input.shift().split(' ').map(Number);
const BOARD = input.map(el=>el.split(''));

const inRange = (n, m, x, y) => x>=0 && y>=0 && x<n && y<m;

const solution = (n, m, board) =>{
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let answer = Number.MIN_SAFE_INTEGER;

  const bfs = (x, y) => {
    const q = [[x, y]];
    const visited = Array.from({length:n}, ()=>Array.from({length:m},()=>0));
    visited[x][y] = 1;
  
    while(q.length!==0){
      const [curX, curY] = q.shift();
      for(let k=0;k<4;k++){
        const nx = curX + dx[k];
        const ny = curY + dy[k];
        if(inRange(n, m, nx ,ny) && visited[nx][ny]===0 && board[nx][ny]==='L'){
          visited[nx][ny] = visited[curX][curY] +1;
          q.push([nx,ny]);
        }
      }
    }
    return Math.max(...visited.flat())
  }

  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(board[i][j]==='L'){
        answer = Math.max(answer, bfs(i,j))
      }
    }
  }
  return answer-1;
}

console.log(solution(N, M, BOARD))