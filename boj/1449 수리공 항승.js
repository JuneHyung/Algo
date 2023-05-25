/**
 * 1449 수리공항승
 * 파이프에서 물이 새는 곳은 신기하게도 가장 왼쪽에서 정수만큼 떨어진 거리만 물이 샌다.
 * 길이가 L인 테이프를 무한개 가지고있다.
 * 항상 물을 막을때 좌우 0.5만큼 간격을 줘야 물이 다시는 안샌다 생각한다.
 * 새는곳 위치와 테이프 길이 L이주어졌을 떄 필요한 테이프 최소 개수 구하기.
 * 새는곳 개수 N 과 길이 L이 주어진다.
 * 물이 새는곳이 주어진다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '4 2',
'1 2 100 101',
]
const [N, L] = input.shift().split(' ').map(Number);
const INFO = input.shift().split(' ').map(Number);
const solution =(n, l, info) =>{
  info.sort((a,b)=>a-b)
  
  let cnt = 0;
  let fix = 0;
  for(let i=0;i<n;i++){
    if(fix<info[i]){
      cnt+=1;
      fix = info[i] + L -1;
    }
  }
  return cnt;
}

console.log(solution(N, L, INFO))