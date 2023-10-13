/**
 * 11509 풍선 맞추기
 * 큰 방에 N개 풍선이 떠있다. 좌에서 우로 일렬로.
 * 화살을 좌에서 우로 쏜다.
 * 높이는 임의로 선택한다.
 * 선택된 높이 H에서 풍선을 맞출때 까지 좌에서 우로 이동한다.
 * 맞추면 풍선은 사라지고, 화살의 높이는 1 줄어든다.
 * 가능한 적은 화살로 모든 풍선을 터뜨리고 싶다.
 * 
 * 풍선 개수 N
 * 높이H의 정보가 주어진다.
 * 필요한 최소한의 개수를 출력.
 * 
 * 1. 시간초과
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'5 4 4 3 2',
]
const N = Number(input.shift())
const INFO = input.shift().split(' ').map(Number)

const solution = (n, info) => {
  let answer = 0;
  const arrows = Array.from({length:n+1},()=>0);
  for(let i of info) {
    if(arrows[i]>0){
      arrows[i]--; // 현재화살높이의 풍선 boom
      arrows[i-1]++; // 이전 높이로 세팅
    }else{
      answer++; // 화살추가.
      arrows[i-1]++; // 다음 높이는 1낮은 높이
    }
    console.log(arrows)
  }
  return answer;
}

console.log(solution(N, INFO))
/** 
[ 0, 0, 0, 0, 1, 0 ]
[ 0, 0, 0, 1, 0, 0 ]
[ 0, 0, 0, 2, 0, 0 ]
[ 0, 0, 1, 1, 0, 0 ]
[ 0, 1, 0, 1, 0, 0 ]
 */