/**
 * 11060 점프 점프
 * 1xN미로에 갇혀있다. iq번째 칸의 수를 Ai라 했을 떄 Ai이하만큼 오른쪽으로 떨어진 칸으로 한 번에 점프할 수 있다.
 * 왼쪽끝에있고, 오른쪽 끝으로 가려한다.
 * 최소 몇 번 점프를 해야 갈 수 있는지 구하는 프로그램을 작성.
 * 갈 수 없으면 -1 출력.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '10',
'1 2 0 1 3 2 1 5 4 2',
]
const N = Number(input.shift());
const INFO = input.shift().split(' ').map(Number)

const solution = (n, info) =>{
  let cur = 0;
  const miro = Array.from({length: n},()=>-1);
  miro[cur] = 0;

  for(let i=0;i<n-1;i++){
    if(miro[cur]===-1) continue;
    const possible =info[i];
    for(let j=0;j<=possible;j++){
      if(i+j<n){ // miro범위
        if(miro[i+j]=== -1 || miro[i+j] > miro[i]+1){
          miro[i+j] = miro[i] + 1;
        }
      }
    }
  }
  return miro[n-1]
}
console.log(solution(N, INFO))