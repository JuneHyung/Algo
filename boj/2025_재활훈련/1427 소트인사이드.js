/**
 * 1427 소트인사이드
 * 각 자리수를 내림차순으로 정렬
 * N은 10억보다 작거나 같은 자연수
 */
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = input;

const solution = (n) => {
  return n.split('').sort((a,b)=>b-a);
}

console.log(solution(N));

