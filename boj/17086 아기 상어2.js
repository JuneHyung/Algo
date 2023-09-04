/**
 * 17086 아기상어
 * 어떤 칸의 안전 거리는 그 칸과 가장 거리가 가까운 아기 상어와의 거리다.
 * 두 칸의 거리는 한 칸에서 다른 칸으로 가기위해 지나야하는 칸수다.
 * 8방향 가능
 * 0은 빈칸 1은 아기상어
 */
// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '5 4',
'0 0 1 0',
'0 0 0 0',
'1 0 0 0',
'0 0 0 0',
'0 0 0 1',
]
const [N, M] = input.shift().split(" ").map(Number);
const BOARD = input.map((el) => el.split(" ").map(Number));

const solution = (n, m, board) => {

  const dx = [-1,-1,-1,0,1,1,1,0];
  const dy = [-1,0,1,1,1,0,-1,-1];

  const inRange = (x, y) => x>=0 && y>=0 && x<n && y<m;

  const q = [];
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(board[i][j]===1) q.push([i,j])
    }
  }

  while(q.length!==0){
    const[curX, curY] = q.shift();
    for(let k=0;k<8;k++){
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if(inRange(nx,ny) && board[nx][ny]===0){
        board[nx][ny] = board[curX][curY]+1;
        q.push([nx,ny])
      }
    }
  }
  
  return Math.max(...board.flat())-1;
};
console.log(solution(N, M, BOARD));
