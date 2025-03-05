/**
 * 4948 베르트랑 공준
 * 임의 자연수 n에대해 n보다 크고 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담음
 * 10보다크고 20보다 작거나 같은 소수는 4개잇다.
 * n이 주어졌을 떄 n보다 크고 2n보다 작거나 같은 소수개수를 구하는 프로그램 작성
 * 
 * 각 테케는 n을 포함하는 한 줄로 이루어짐. (바로 테케 시작해서 0으로끝남)
 * 마지막입력에 0
 * 
 * 소수개수 리턴
 */
/**
 * 에라토스테네스체로 소수배열 구한 뒤 개수 세기
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '1',
  '10',
  '13',
  '100',
  '1000',
  '10000',
  '100000',
  '0',
]
const len = input.length;

const solution = (n) => {
  const max = 2 * n;
  const prime = Array.from({ length: max + 1 }, () => true);
  prime[0] = false;
  prime[1] = false;

  const sqrt = Math.sqrt(max);
  for (let i = 2; i <= sqrt; i++) {
    for (let j = i ** 2; j <= max; j += i) {
      if (j % i === 0) prime[j] = false;
    }
  }
  // console.log(prime)
  let cnt = 0;
  for (let i = n + 1; i <= max; i++) {
    if (prime[i] === true) cnt++;
  }
  return cnt;
}

for (const str of input) {
  const num = Number(str);
  if (num === 0) break;
  console.log(solution(num))
}