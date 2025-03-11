/**
 * 10872 팩토리얼
 * 0보다 큰 N이 주어졌을때 N!출력
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = 0
const N = Number(input);

const solution = (N) => {
  let result = 1;

  for(let i=1;i<=N;i++){
    result*=i
  }

  return result;
}

console.log(solution(N))