/**
 * 1978 소수 찾기
 * N개 수 중에서  소수가 몇갠지 찾아 출력.
 * N은 100이하 주어지는 수는 1천 이하
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '4',
  '1 3 5 7',
]
const N = Number(input[0]);
const numberList = input[1].split(' ').map(Number);

const solution = (n, numberList) => {
  let cnt = 0;
  for (const num of numberList) {
    if (num === 1) continue;

    const sqrt = Math.sqrt(num);
    let isPrime = true;

    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) { isPrime = false; break; }
    }

    if (isPrime) cnt++;
  }

  return cnt;
}

console.log(solution(N, numberList));