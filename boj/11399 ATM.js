/**
 * 11399 ATM
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const N = input[0];
// const money = input[1].split(' ').map(el=>Number(el));

const N = 5;
const money = [3, 1, 4, 3, 2];
const solution = (N, money) => {
  const sorted = money.sort((a, b) => a - b);
  const arr = Array.from({ length: money.length }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      arr[i] += sorted[j];
    }
  }

  const answer = arr.reduce((acc, cur) => acc + cur, 0);
  return answer;
}
console.log(solution(N, money));