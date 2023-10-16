/**
 * 마인크래프트
 * 땅의 높이를 똑같이 만드는 땅 고르기 작업을 해야한다.
 * N,M크기의 집터를 골랐다.
 * 
 * 1. 좌표(i,j)의 가장 위에 있는 블록을 제거하여 인벤토리에 넣는다.
 * 2. 인벤토리에서 블록 하나를 꺼내 좌표(i,j)의 가장 위에 있는 블록에 놓는다.
 * 
 * 1번 작업은 2초, 2번작업은 1초가걸린다.
 * 땅 고르기 작업에 걸리는 최소 시간과 그 경우 땅의 높이를 구하시오.
 * 집터 아래 빈공간은 없고, 밖에서 블록을 가져올 수 없다.
 * 작업 시작 시 인벤토리에 B개 블록이 있다.
 * 땅의 높이는 256을 초과할 수 없고, 음수가 될 수 없다.
 * 
 * N,M,B가 주어진다.
 * 정수로 땅의 높이가 나타나진다.
 * 땅을 고르는데 걸리는 시간과 땅의 높이를 출력. 답이 여러개라면 그 중 땅의 높이가 높은 것을 출력.
 * 
 * 다시풀어보기.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '1 3 2',
'5 3 3',
]

const [N, M, B] = input.shift().split(' ').map(Number);
const BOARD = input.map(el=>el.split(' ').map(Number))

const solution = (n, m, b, board) =>{
  let minTime = Number.MAX_SAFE_INTEGER;
  let maxHeight = 0;
  
  const heights =Array.from({length: 257},()=>0);
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      heights[board[i][j]]++;
    }
  }

  for(let h = 256; h>=0; h--){
    let bCnt = b;
    let time = 0;

    heights.forEach((v,i)=>{
      bCnt += (i - h) * v;
      if(h > i) {
        time += (h - i) * v;
      } else {
        time += (i - h) * 2 * v;
      }
    })

    if(minTime < time) break;
    if(bCnt < 0) continue;
    if(time < minTime) {
      minTime = time;
      maxHeight = h;
    }
  }
  

  return `${minTime} ${maxHeight}`;
}

console.log(solution(N, M, B, BOARD))