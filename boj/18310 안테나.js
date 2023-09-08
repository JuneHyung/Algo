/**
 * 18310 안테나
 * 일직선 상에 여러채 집이 있다.
 * 특정 위치 집에 1개의 안테나를 설치 할 것이다.
 * 안테나로 부터 모든 집까지 거리 총 합이 최소가 되도록 하려 한다.
 * 안테나는 집이 있는 곳에만 설치가 되고, 동일위치에 여러 집이 존재 가능하다.
 * 
 * 최소값과 idx갱신하며 정답도출 => 시간초과
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
'5 1 7 9',
]
const N = Number(input.shift())
const INFO = input.shift().split(' ').map(Number)
const solution = (n, info) => {
  info.sort((a,b)=>a-b)
  const answer = info[Math.floor((n-1)/2)]
  return answer
}
console.log(solution(N, INFO))
