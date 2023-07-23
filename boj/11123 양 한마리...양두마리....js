/**
 * 11123 양한마리 양두마리
 * 테스트케이스 수T가 주어짐.
 * H W가 주어지고 그리드가 주어진닫.
 * #은 양 .은 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2',
'4 4',
'#.#.',
'.#.#',
'#.##',
'.#.#',
'3 5',
'###.#',
'..#..',
'#.###',
]
const T = Number(input.shift())


const solution = (h, w, board) =>{
  const dx = [-1,1,0,0]
  const dy = [0,0,-1,1]
  const inRange = (x, y) => x>=0 && y>=0 && x<h && y<w;
  const visited = Array.from({length: h},()=>Array.from({length: w},()=>false))
  let cnt = 0;
  for(let i=0;i<h;i++){
    for(let j=0;j<w;j++){
      if(board[i][j]==='#' && !visited[i][j]){
        visited[i][j] = true;
        cnt++;
        let q = [[i, j]]
        while(q.length!==0){
          const [curX, curY] = q.shift();
          for(let k=0;k<4;k++){
            const nx = curX + dx[k];
            const ny = curY + dy[k];
            if(inRange(nx,ny) && !visited[nx][ny] && board[nx][ny]==='#'){
              visited[nx][ny] = true;
              q.push([nx, ny])
            }
          }
        }
      }
    }
  }
  return cnt;
}

for(let t=0;t<T;t++){
  const [H, W] = input.shift().split(' ').map(Number);
  const BOARD = input.splice(0, H).map(el=>el.split(''))
  console.log(solution(H, W, BOARD))
}