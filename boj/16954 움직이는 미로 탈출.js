/**
 * 16954 움직이는 미로 탈출
 * 미로는8x8
 * 미로는 한칸씩 내려간다.
 * 욱제는 좌측 하단
 * 도착점은 우측 상단
 * 도착할 수 있다면 1 아니면 0을 출력.
 * .은 빈칸, #은 벽
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// const input = [
//   '........',
//   '........',
//   '........',
//   '........',
//   '........',
//   '.#######',
//   '#.......',
//   '........',
// ]
const input = [
  '........',
'........',
'........',
'........',
'........',
'#.......',
'.#......',
'.#......',
]

const INFO = input.map(el => el.split(''));
const BOARD = Array.from({length: 8}, ()=> Array.from({length:8},()=>Array.from({length: 8},() => '.')));
for(let i=0;i<8;i++){
  for(let j=0;j<8;j++){
    if(INFO[i][j]==='#') BOARD[0][i][j] = INFO[i][j];
  }
}

const solution = (board) => {
  const visited = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => false))

  const dx = [-1, -1, -1, 0, 1, 1, 1, 0, 0];
  const dy = [-1, 0, 1, 1, 1, 0, -1, -1, 0];

  
  const inRange = (x, y) => x >= 0 && y >= 0 && x < 8 && y < 8

  const moveWall = () =>{
    for(let sec = 1; sec < 8; sec++){
      for(let j=0;j<8;j++){
        for(let i=8-2; i>=0;i--){
          board[sec][i+1][j] = board[sec-1][i][j];
        }
      }
    }
  }

  const check = (x, y, sec) =>{
    if(x===0) return true;
    for(let i=x-1; i>=0; i--){
      if(board[sec][i][y]==='#') return false;
    }
    return true;
  }

  moveWall();
  const q = [[7,0,0]]
  let endFlag = false;
  while(q.length!==0){
    const [curX, curY, curSec] = q.shift();
    if(board[curSec >= 8 ? 7 : curSec][curX][curY]==='#') continue;
    if(check(curX, curY, curSec) || (curX===0 && curY===7)){
      endFlag = true;
      break;
    }
    if(curSec +1 >= 8 || board[curSec+1][curX][curY]!=='#') q.push([curX, curY, curSec+1])

    for(let k=0;k<8;k++){
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if(inRange(nx,ny) && board[curSec>=8 ? 7 : curSec][nx][ny]!=='#'){
        q.push([nx, ny, curSec+1])
      }
    }
  }

  return endFlag ? 1 : 0
}

console.log(solution(BOARD))