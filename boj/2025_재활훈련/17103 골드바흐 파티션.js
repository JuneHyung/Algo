/**
 * 17103 골드바흐 파티션
 * 골드바흐씨의 추측 : 2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.
 * N을 두 소수의 합으로 나타내는 표현을 골드바흐 파티션이라 한다.
 * N이주어졌을 떄 골드바흐 파티션 개수 구하기.
 * 두 소수의 순서만 다른것은 같은 파티션이다.
 * 
 * 첫줄 : 테케 T가
 * 둘줄부터 정수 N이 주어진다.
 * 각 테케에 대한 골드바흐 파티션의 수를 구한다.
 */
/**
 * 1. 각 n에 대해서 n까지 소수를 구하기
 * 2. a를 정하고, b=n-a로 설정해 소수인지 체크 (n/2까지 반복)
 * 3. 둘다 소수이면 +1
 */
/**
 * 시간초과
 * 1. 테스트케이스의 최대값을 찾아 먼저 만들어 둔 후 에 파티션수 세도록 수정
 * 2. b가 1이되는 경우 체크
 * 3. 짝수인경우 continue하게 변경
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const input = [
  '5',
  '6',
  '8',
  '10',
  '12',
  '100',
]
const T = Number(input[0]);
const max = Math.max(...input.slice(1));
const prime = Array.from({ length: max + 1 }, () => true);
prime[0] = false, prime[1] = false;
const sqrt = Math.sqrt(max);
for (let i = 2; i <= sqrt; i++) {
  for (let j = i ** 2; j <= max; j += i) {
    if (j % i === 0) {
      prime[j] = false;
    }
  }
}

const solution = (n) => {
  let cnt = 0;
  for (i = 2; i <= Math.floor(n / 2); i++) { // 순서만 바뀐건 1개
    const a = i;
    const b = n - i;
    if (b === 1) continue;
    if (a % 2 === 0 || b % 2 === 0) continue; // 짝수는 소수가 아니다.
    if (prime[a] && prime[b]) cnt++;
  }
  return cnt;
}

for (let t = 1; t <= T; t++) {
  const num = (input[t])
  console.log(solution(num))
}