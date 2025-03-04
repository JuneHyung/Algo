/**
 * 4134 다음소수
 * 정수 n 이 주어졌을 때 n보다 크거나 같은 소수 중 가장 작은 소수 찾는 프로그램 작성
 * 첫 줄 테케개수
 * 각줄에 정수 n 주어짐.
 * 
 * n은 ~ 4x10^9
 * 
 * 각 테케에서 n보다 크거나 같은 소수 중 가장 작은 소수를 한줄에 하나씩 출력
 */

/** 메모리초과
 * 1. 최대값의 제곱까지 소수를 체크. (소수면 true, 아니면 false)
 * 2. n을 찾으면 해당 항목 다음 것을 리턴
 */
/** 시간초과
 * 1. 소수를 체크할때 답 도출하는 방식으로 변경
 * 2. 최대는 n의 제곱
 * 3. n을 지나치는지 체크 후 그다음 항목에서 소수이면 바로 리턴하도록 변경
 */
/** max를 제곱으로하다보니 결국 n 만큼 반복하면서 시간초과 나는 듯함
 * 1. 소수를 체크할 때 답을 도출 & set 제거. -> 체크만하도록 변경
 * 2. 체크만하면 앞의 숫자를 체크할 필요없을듯함. -> n+1부터 시작.
 * 3. 소수면 바로 리턴 아니면 +1
 */
/** 
 * 1. n이 1인경우 예외처리
 * 2. n보다 크거나 같은 소수 중 가장 작은 소수니 n도 포함임.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '1',
  '0',
]
const T = Number(input[0]);


const solution = (n) => {
  const isPrime = (max) => {
    if (max < 2) return false;

    const sqrt = Math.sqrt(max);
    for (let i = 2; i <= sqrt; i++) {
      if (max % i === 0) { return false; }
    }
    return true;
  }

  while (!isPrime(n)) {
    n++;
  }
  return n;
}

for (let t = 1; t <= T; t++) {
  let N = Number(input[t]);
  console.log(solution(N))
}