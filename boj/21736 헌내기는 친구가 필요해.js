/**
 * 21736 헌내기는ㅊ 친구가 필요해
 * N,M크기 캠퍼스에서 이동방법은 벽이아닌 상하좌우 이동이다.
 * 만날수 있는 살마의 수를 출력해보자.
 * O는 빈 공간, X는 벽, I는 도연이, P는 사람이다
 * I는 한번만 주어짐.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '3 5',
// 'OOOPO',
// 'OIOOX',
// 'OOOXP',
// ]
const input = [
  '3 3',
'IOX',
'OXP',
'XPP',
]
const [N, M] = input.shift().split(' ').map(Number)
const BOARD = input.map(el=>el.split(''));

const solution = (n, m, board) =>{
  const visited = Array.from({length: n}, ()=>Array.from({length: m},()=>false));
  const dx = [-1,1,0,0];
  const dy = [0,0,-1,1];
  const inRange = (x, y) => x>=0 && y>=0 && x<n && y<M;
  let answer = 0;
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(board[i][j]==='I'){
        const q = [[i,j,0]];
        visited[i][j] = true;
        while(q.length!==0){
          const [x, y, cnt] = q.shift();
          for(let k=0;k<4;k++){
            const nx = x + dx[k];
            const ny = y + dy[k];
            if(inRange(nx,ny) && !visited[nx][ny] && (board[nx][ny]!=='I' && board[nx][ny]!=='X')){
              visited[nx][ny] = true;
              q.push([nx,ny, cnt])
              if(board[nx][ny]==='P')answer++;
            }
          }
        }
      }
    }
  }
  return answer===0 ? 'TT' : answer;
}
console.log(solution(N, M, BOARD))