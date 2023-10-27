/**
 * 16174 점프왕 쩰리(Large)
 * 새로운 점프게임 조건
 * 1. 가로세로 칸수가 같은 정사각형 구역 내부에서만 움직일 수 있다. 외부로 나가면 바로 패배
 * 2. 출발점은 항상 좌측젤위
 * 3. 이동가능방향은 항상 우와 아래뿐.
 * 4. 가장 오른쪽 가장 아래 도달하면 젤리 승리로 끝남.
 * 5. 한번에 이동할 수 있는 칸 수는 현재 밟고있는 칸에 쓰여진 수만큼이다. 초과나 미만으로 이동 불가.
 * 
 * 종료지점의 값은 -1
 * 도착가능하면 'HaruHaru', 없으면 'Hing' 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'1 1 10',
'1 5 1',
'2 2 -1',
]
// const input = [
//   '3',
// '2 2 1',
// '2 2 2',
// '1 2 -1',
// ]
const N = Number(input.shift())
const BOARD = input.map(el=>el.split(' ').map(Number))
// // bfs
// const solution = (n, board) => {
//   const visited = Array.from({length:n},()=>Array.from({length: n},()=>false));
//   const q = [[0,0]];
//   visited[0][0] = true;

//   const dx = [0, 1];
//   const dy = [1, 0];
//   const inRange = (x, y) => x>=0 && y>=0 && x<n && y<n;

//   while(q.length!==0){
//     const [cx, cy] = q.shift();
//     if(board[cx][cy]===-1) return 'HaruHaru';
//     for(let k=0;k<2;k++){
//       const nx = cx + dx[k]*board[cx][cy];
//       const ny = cy + dy[k]*board[cx][cy];
//       if( inRange(nx,ny) && !visited[nx][ny]){
//         visited[nx][ny] = true;
//         q.push([nx, ny]);
//       }
//     }
//   }
//   return 'Hing';
// }

// dfs
const solution = (n, board) => {
  const visited = Array.from({length:n},()=>Array.from({length: n},()=>false));

  const dx = [0, 1];
  const dy = [1, 0];
  const inRange = (x, y) => x>=0 && y>=0 && x<n && y<n;
  let answer = false;
  
  const dfs = (cx, cy) => {
    visited[cx][cy] = true;
    if(answer) return;
    if(board[cx][cy]===-1){ answer = true; return;}
    
    for(let k=0;k<2;k++){
      const nx = cx + dx[k]*board[cx][cy];
      const ny = cy + dy[k]*board[cx][cy];
      if(inRange(nx, ny) && !visited[nx][ny]){
        dfs(nx, ny)
      }
    }
  }

  dfs(0,0)
  return answer ? 'HaruHaru' : 'Hing';
}
console.log(solution(N, BOARD))