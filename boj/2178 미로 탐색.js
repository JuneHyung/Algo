/**
 * 2178 미로 탐색
 * 1이 이동가능, 0이 불가능
 * [1,1]에서 [N,M]이동 시 지나야 하는 최소 칸 수
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
/*
const input = ['4 6',
  '101111',
  '101010',
  '101011',
  '111011',]
  */
/*
const input = ['2 25',
'1011101110111011101110111',
'1110111011101110111011101'
];
*/
/*
const input = [
  '7 7',
  '1011111',
'1110001',
'1000001',
'1000001',
'1000001',
'1000001',
'1111111',
]
*/


const [N,M] = input[0].split(' ').map(el=>Number(el));
const board = Array.from({length: N+1}, ()=>Array.from({length:M+1}, ()=>0));
for(let i=1;i<=N;i++){
  const tmp = input[i].split('').map(el=>Number(el));
  for(let j=0;j<M;j++){
    board[i][j+1] = tmp[j];
  }
}
// console.log(board);

const solution = (N, M, board) => {
  const visited= Array.from({length: N+1}, ()=>Array.from({length:M+1}, ()=>false));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function inRange(nx, ny){
    if(nx>0&& ny>0 && nx<=N && ny<=M) return true;
    return false;
  }

  let answer = Number.MAX_SAFE_INTEGER;
  function bfs(x, y, cnt){
    const q = [[x, y, cnt]];
    visited[x][y] = true;
    while(q.length!==0){
      const [curX, curY, cnt] = q.shift();
      if(curX===N && curY===M) answer = Math.min(answer, cnt)
      for(let k=0;k<4;k++){
        const nx = curX + dx[k];
        const ny = curY + dy[k];
        if(inRange(nx, ny) && !visited[nx][ny] && board[nx][ny]===1){
          // console.log(`before : cnt : ${cnt}, curX: ${curX}, curY: ${curY}`)
          visited[nx][ny]=true;
          q.push([nx,ny, cnt+1]);
          // console.log(`after : cnt : ${cnt}, nx: ${nx}, curY: ${ny}`)
          // console.log();
        }
      }
    }
  }
  bfs(1,1,1);
  return answer;
}


console.log(solution(N,M,board));