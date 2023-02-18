/**
 * 2217 로프
 * k개 로프를 사용해 중량이 w인 물체를 들어올릴 때
 * 각 로프에는 모두 고르게 w/k만큼 중량이 걸린다.
 * 로프들을 이용해서 들어 올릴 수 있는 물체의 최대 중량 구하기.
 * 모든 로프를 사용할 필요는 없다.
 */

// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '2',
  '10',
  '15',
]
const N = Number(input.shift())
const LIST = input.map(Number);

const solution = (n, arr) =>{
  arr.sort((a,b)=>a-b);
  const weight = [];
  for(let i=0;i<n;i++) weight.push(arr[i]* (n-i));
  const answer = Math.max(...weight)
  return answer;
}

console.log(solution(N, LIST))