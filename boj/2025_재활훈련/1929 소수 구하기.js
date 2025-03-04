/**
 * 1929 소수 구하기
 * M이상 N이하의 소수를 모두 출력하는 프로그램 작성
 * M과 N은 1~100만
 * M이상 N이하 소수가 하나 이상 있는 입력만 주어짐. 1<=M <= N <= 100만
 * 한 줄에 하나씩 증가하는 순서대로 소수 출력
 */
/**
 * 1부터 N까지중 큰것까지 소수를 구해서 리턴
 */
/**
 * 에라토스테네스의 체
 * 체로 수를 걸러낸다는 뜻. 배수를 제거하여 소수를 구하는 방법
 * 2부터 N까지 모든 숫자를 소수로 가정하고 시작
 * 2부터 시작해 특정 숫자의 배수들을 모두 제거
 * 남아 있는 수들이 모두 소수
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '3 16';
const [M, N] = input.split(' ').map(Number);

const solution = (m, n) => {
  const checkPrime = Array.from({ length: n + 1 }, () => true);
  checkPrime[0] = false;
  checkPrime[1] = false;

  const sqrt = Math.sqrt(n);
  for (let t = 2; t <= sqrt; t++) {
    for (let i = t ** 2; i <= n; i += t) {
      checkPrime[i] = false;
    }
  }

  const prime = [];
  for (let i = m; i <= n; i++) {
    if (checkPrime[i]) {
      prime.push(i)
    }
  }


  return prime.join('\n')
}

console.log(solution(M, N));

