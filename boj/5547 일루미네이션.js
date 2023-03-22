/**
 * 5547 일루미네이션
 * 상근이는 벽면을 조명으로 장식하려한다.
 * 회색은 건물의 위치, 흰색은 건물이 없다.
 * 붉은 색 선으로 표시된 부분이 밖에서 보이는 벽이고, 이 벽에 조명을 장식할 것이다.
 * 벽의 총 길이는 64미터
 * 조명을 장식할 벽면의 길이 합을 구하는 프로그램 작성.
 * 
 * W와 H가 주어진다.
 * 건물이 있으면 1 없으면 0
 * 
 * 지도 가장 좌측위의 정육각형 좌표는 1,1
 * (x,y)의 오른쪽에 있는 정 육각형 좌표는 (x+1, y)
 * y가 홀수 일 때, 아래쪽에 있는 정육각형의 좌표는 (x, y+1)
 * y가 짝수 일 때, 오른쪽 아래에 있는 정육각형의 좌표는 (x, y+1)
 */
// const fs = require('fs')
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = [
  '8 5',
'0 1 1 1 0 1 1 1',
'0 1 0 0 1 1 0 0',
'1 0 0 1 1 1 1 1',
'0 1 0 1 1 0 1 0',
'0 1 1 0 1 1 0 0',
]
// const input = [
//   '8 4',
// '0 1 0 1 0 1 1 1',
// '0 1 1 0 0 1 0 0',
// '1 0 1 0 1 1 1 1',
// '0 1 1 0 1 0 1 0',
// ]
const [W, H] = input.shift().split(' ').map(Number)
const BOARD = Array.from({length: H+2}, ()=> Array.from({length: W+2},()=>0));
for(let i=1;i<=H;i++){
  const line = input.shift().split(' ').map(Number);
  // console.log(line);
  for(let j=1;j<=W;j++){
    BOARD[i][j] = line[j-1];
  }
}


const solution = (w, h, board) => {
  // console.log(board);
  const visited = Array.from({length: H+2}, ()=> Array.from({length: W+2},()=>false))
  const oddX = [-1, 0, 1, 1, 0, -1];
  const oddY = [0, -1, 0, 1, 1, 1];
  const evenX = [-1, 0, 1, 1, 0, -1];
  const evenY = [-1, -1, -1, 0, 1, 0];
  const inRange = (x, y) => x>=0 && y>=0 && x<=h+1 && y<=w+1;
  let answer = 0;
  const bfs = () =>{
    let q=[[0, 0]]
    visited[0][0] = true;
    while(q.length!==0){
      const [curX, curY] = q.pop();
      for(let k=0;k<6;k++){
        const nx = curX%2===0 ? curX + evenX[k] : curX + oddX[k];
        const ny = curX%2===0 ? curY + evenY[k] : curY + oddY[k];
        if(inRange(nx, ny)){
          if(board[nx][ny]===1) answer++;
          if(!visited[nx][ny] && board[nx][ny]===0){
            visited[nx][ny]=true;
            q.push([nx, ny])
          }
        }
      }
    }
  }
  bfs();
  return answer;

};

console.log(solution(W, H, BOARD))