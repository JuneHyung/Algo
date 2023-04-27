/**
 * 3187 양치기 꿍
 * R,C, 목장
 * 울타리 영역안에 양이 늑대보다 더 많으면 늑대는 죽는다.
 * 그외는 늑대가 다 잡는다.
 * 남은 늑대와 양의 숫자를 구하자.
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6 6',
'...#..',
'.##v#.',
'#v.#.#',
'#.k#.#',
'.###.#',
'...###',
]

const [R, C] = input.shift().split(' ').map(Number);
const BOARD = input.map(el=>el.split(''));


const solution = (r, c, board) =>{
  console.log(board);
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const inRange = (x, y) => x<r && y<c && x>=0 && y>=0;
  const visited = Array.from({length:r}, ()=>Array.from({length:c},()=>false));
  // v 가 늑대 k가 양
  let wolf = 0;
  let sheep = 0;
  for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
    if(!visited[i][j] && board[i][j]!=='#'){
        let q = [[i,j]];
        visited[i][j] = true;
        let wCnt = 0;
        let sCnt = 0;
        while(q.length!==0){
          const [curX, curY] = q.shift();
          if(board[curX][curY] === 'v'){
            wCnt++;
          }else if(board[curX][curY]==='k'){
            sCnt++;
          }
          for(let k=0;k<4;k++){
            const nx = curX + dx[k];
            const ny = curY + dy[k];
            if(inRange(nx, ny) && !visited[nx][ny] && board[nx][ny]!=='#' ){
              visited[nx][ny]=true;
              q.push([nx,ny])
            }
          }
        }
        if(wCnt >= sCnt) wolf+= wCnt;
        else sheep += sCnt;
      }
    }
  }
  const answer = `${sheep} ${wolf}`;
  return answer;
}

console.log(solution(R, C, BOARD));