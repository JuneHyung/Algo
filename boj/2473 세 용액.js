/**
 * 2473 세 용액
 * 3가지 용액을 혼합해 특성 값이 0에 가장 가까운 용액을 만들자.
 * 
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// -97, -2, 98
// const input = [
//   '5',
//   '-2 6 -97 -6 98',
// ]

// -6, -3, -2
const input = [
  '7',
  '-2 -3 -24 -6 98 100 61',
]

const N = Number(input.shift());
const LIST = input.shift().split(' ').map(Number)

const solution = (n, arr) => {
  arr.sort((a, b) => a - b);

  let min = Number.MAX_SAFE_INTEGER;
  let answer = [];
  for (let i = 0; i < n - 2; i++) {
    let lt = i;
    let mid = i + 1;
    let rt = n - 1;
    while (mid < rt) {
      const sum = arr[lt] + arr[mid] + arr[rt];
      if (Math.abs(sum) < min) {
        min = Math.abs(sum);
        answer = [arr[lt], arr[mid], arr[rt]];
      }
      sum < 0 ? mid++ : rt--;
    }
  }
  return answer.join(' ')
}
console.log(solution(N, LIST))