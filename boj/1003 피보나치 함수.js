/**
 * 1003 피보나치 함수
 * N을 호출했을 때 0과 1이 각각 몇번 호출되는지 작성
 * N은 40보다 작거나 같은 자연수 또는 0
 * 
 * 재귀로 시도시 시간 초과
 * fibo[n-1] + a[n-2];
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2',
  '6',
  '22',
]
const T = Number(input.shift())

const solution = (n) => {
  const zero = [1, 0, 1];
  const one = [0, 1, 1];
  if (n === 0) return '1 0';
  else if (n === 1) return '0 1';
  else {
    for (let i = 2; i <= n; i++) {
      zero[i] = zero[i - 1] + zero[i - 2];
      one[i] = one[i - 1] + one[i - 2];
    }
    return `${zero[n]} ${one[n]}`;
  }
}


for (let t = 0; t < T; t++) {
  const N = Number(input.shift());
  console.log(solution(N));
}