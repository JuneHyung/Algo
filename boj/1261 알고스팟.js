/**
 * 1261 알고스팟
 * NxM방 4방향이동 가능.
 * 1이면, 부수고갈 수 있다.
 * (1,1)에서 (n,m)까지 이동할때 부숴야할 벽을 최소화. 하려한다.
 * 최소값은?
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 2',
'0001',
'1000',
]
const [M, N] = input.shift().split(' ').map(Number)
const BOARD = input.map(el=>el.split('').map(Number));

const solution = (n, m, board) => {
  // console.log(n, m, board);
  const dx = [-1, 1, 0, 0]
  const dy = [0, 0, -1, 1]
  const inRange = (x, y) => x>=0 && y>=0 && x<n && y<m;
  const visited = Array.from({length:n},()=>Array.from({length:m},()=>false));  
  
  const q = [[0, 0, 0]];
  visited[0][0] = true;
  let answer = Number.MAX_SAFE_INTEGER;

  while(q.length!==0){
    const [curX, curY, cnt] = q.shift();
    console.log(curX, curY, cnt)
    if(curX===n-1 && curY === m-1){
      answer = Math.min(answer, cnt);
      break;
    }
    for(let k=0;k<4;k++){
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if(inRange(nx,ny)&& !visited[nx][ny]){
        visited[nx][ny] = true;
        if(board[nx][ny]===0) q.unshift([nx, ny, cnt])
        else if(board[nx][ny]===1) q.push([nx, ny, cnt+1])
      }
    }
  }
  return answer;
}
console.log(solution(N, M, BOARD))