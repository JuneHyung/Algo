/**
 * 1806 부분합
 * 길이 N, 연속된 수들의 부분합이 S이상 되는 것 중 가장 짧은 프로그램
 * 그런 합이 불가능하다면 0 출력
 * 
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '10 15',
  '5 1 3 5 10 7 4 9 2 8',
]
const [N, S] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);

const solution = (n, s, list) => {
  let lt = 0;
  let rt = 0;
  let answer = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  while (lt <= rt) {
    if (sum >= s) {
      answer = Math.min(answer, rt - lt);
      sum -= list[lt]
      lt++;
    } else if (rt === n) break;
    else {
      sum += list[rt];
      rt++;
    }
  }
  if (answer === Number.MAX_SAFE_INTEGER) answer = 0;
  return answer;
}

console.log(solution(N, S, arr));