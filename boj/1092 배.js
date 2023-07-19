/**
 * 1092 배
 * 화물을 배에 실어야 한다.
 * 항구에는 N개의 크레인이 있고, 1분에 한개씩 박스를 옮김.
 * 모든 크레인은 동시에 움직인다.
 * 
 * 각 크레인은 무게제한이 있고, 무게제한보다 무거운 크레인은 못움직인다. 
 * 모든 박스를 배로 옮기는데 드는 시간의 최소값 구하기
 * 
 * 크레인의 수 N
 * 각 크레인의 무게제한
 * 박스수 M
 * 각 박스의 무게
 * 
 * 모든 박스를 배로 옮길 수 없으면 -1 출력
 * 
 * 1. 방문체크 하면서 비교 => 시간초과
 * 2. 방문체크 없이 배열자체에서 지우면서 반복진행 => 통과 ;
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2',
'19 20',
'7',
'14 12 16 19 16 1 5',
]
const N = Number(input.shift())
const CRANE_INFO = input.shift().split(' ').map(Number);
const M = Number(input.shift())
const BOX_INFO = input.shift().split(' ').map(Number);

const solution = (n, craneInfo, m, boxInfo) =>{
  craneInfo.sort((a,b)=>b-a)
  boxInfo.sort((a,b)=>b-a)
  
  if(craneInfo[0] < boxInfo[0]) return -1;
  
  let time = 0;
  let cnt =0;
  while(true){
    if(cnt===m) break;
    for(let i=0;i<n;i++){
      const crane = craneInfo[i];
      for(let j=0;j<m;j++){
        const box = boxInfo[j];
        if(crane>=box){
          boxInfo.splice(j,1);
          cnt++;
          break;
        }
      }
    }
    time++;
  }
  return time;
}

console.log(solution(N, CRANE_INFO, M, BOX_INFO))