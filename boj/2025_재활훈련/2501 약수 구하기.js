/**
 * 2501 약수 구하기
 * p를 q로 나누었을떄 나머지가 0이되면 q는 p의 약수
 * 
 * N과 K가 주어졌을 때 N의 약수들 중 K번째로 작은 수를 출력하는 프로그램 작성.
 * N은 1~1만, K는 1~N이하
 * 
 * N약수 개수가 K보다 적어 없다면 0을 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '4 2';
const [N, K] = input.split(' ').map(Number);

const solution = (n, k) => {
  const sqrt = Math.sqrt(n);
  const divisorSet = new Set();
  console.log(sqrt)
  for (let i = 1; i <= sqrt; i++) {

    if (n % i === 0) {
      divisorSet.add(i);
      divisorSet.add(n / i);
    }
  }

  const sortedDivisorList = [...divisorSet].sort((a, b) => a - b);
  const len = sortedDivisorList.length;

  return len < k ? 0 : sortedDivisorList[k - 1];
}

console.log(solution(N, K));