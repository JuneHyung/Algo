/**
 * 14716 현수막
 * 현수막에 글자가 몇개인지 알아보는 프로그램을 만드려한다.
 * 글자인 부분이 1 아닌 부분이 0
 * 상하좌우대각선 인접해서 연결 되있다면 한 개 글자라 생각.
 */
// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '8 19',
'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
'0 0 0 1 0 0 0 1 0 0 0 1 0 1 1 1 1 1 0',
'0 0 1 0 1 0 0 1 1 0 0 1 0 0 0 1 0 0 0',
'0 1 0 0 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0',
'0 1 1 1 1 1 0 1 0 1 0 1 0 0 0 1 0 0 0',
'0 1 0 0 0 1 0 1 0 0 1 1 0 0 0 1 0 0 0',
'0 1 0 0 0 1 0 1 0 0 0 1 0 0 0 1 0 0 0',
'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
]
const [N, M] = input.shift().split(' ').map(Number)
const BOARD = input.map(el=>el.split(' ').map(Number))

const solution = (n,m, board) => {
  let answer = 0;
  
  const dx = [-1,-1,-1,0,1,1,1,0];
  const dy = [-1,0,1,1,1,0,-1,-1];
  
  const inRange=(x,y)=> x>=0 && y>=0 && x<n && y<m;

  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(board[i][j] === 1){
        const q = [[i, j]];

        while(q.length!==0){
          const [cx, cy] = q.shift();

          for(let k=0;k<8;k++){
            const nx = cx+dx[k];
          
            const ny = cy+dy[k];
            if(inRange(nx, ny) && board[nx][ny]===1){
              board[nx][ny] = 0;
              q.push([nx,ny]);
            }
          }
        }
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution(N, M, BOARD))
