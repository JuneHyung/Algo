/**
 * 2581 소수
 * M과 N이 주어질 때 M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들의 합과 최속값을 구하시오.
 * M은 N보다 작거나 같다.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2',
  '3'
]
const M = Number(input[0])
const N = Number(input[1])

const solution = (m, n) => {
  const primeNumberSet = new Set();

  for (let i = 2; i <= n; i++) {
    const sqrt = Math.sqrt(i);
    let isPrime = true;

    for (let j = 2; j <= sqrt; j++) {
      if (i % j === 0) { isPrime = false; break; }
    }

    if (isPrime) {
      if (primeNumberSet.has(i)) continue;
      else primeNumberSet.add(i);
    }
  }

  const primeNumberList = [...primeNumberSet].filter(el => el >= m);

  const sum = primeNumberList.reduce((a, c) => a + c, 0);
  const min = primeNumberList.sort((a, b) => a - b)[0];

  const result = [sum, min];
  return primeNumberList.length === 0 ? -1 : result.join('\n')
}

console.log(solution(M, N));