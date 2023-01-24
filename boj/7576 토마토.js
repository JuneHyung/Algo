/**
 * 7576 토마토
 * N이 세로 M이 가로, N,M이 아니라 M,N으로 주어지는거 주의
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
  '6 4',
'0 0 0 0 0 0',
'0 0 0 0 0 0',
'0 0 0 0 0 0',
'0 0 0 0 0 1',
]


const [M, N]  = input[0].split(' ').map(el=>Number(el));
const board = Array.from({length:N+1}, ()=>Array.from({length:M+1},()=>0));
for(let i=1;i<input.length;i++){
  const tmp = input[i].split(' ').map(el=>Number(el));
  for(let j=0;j<tmp.length;j++){
    board[i][j+1] = tmp[j];
  }
}
// console.log(board)

const solution = (M, N, board) =>{
  const loc = []
  let cnt = M*N;
  const dx = [-1,1,0,0];
  const dy = [0,0,-1,1];
  const visited = Array.from({length:N+1}, ()=>Array.from({length:M+1},()=>false));
  for(let i=0;i<=N;i++){
    for(let j=0;j<=M;j++){
      if(i===0 || j===0) visited[i][j]=true;
      else if(board[i][j]===1){
        loc.push([i,j,0]);
        visited[i][j] = true;
        cnt--;
      }else if(board[i][j]===-1){
        visited[i][j]=true;
        cnt--;
      }
    }
  }

  const inRange = (x, y) => x>0 && y>0 && x<=N && y<=M

  let idx = 0;
  while(loc.length!==idx){
    const [curX, curY, day] = loc[idx];
    for(let k=0;k<4;k++){
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if(inRange(nx, ny) && !visited[nx][ny]){
        visited[nx][ny]=true;
        loc.push([nx,ny,day+1]);
        cnt--;
      }
    }
    idx++;    
    answer = day;
  }


  return cnt>0 ? -1 : answer;
}


console.log(solution(M, N, board))