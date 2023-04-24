/**
 * 2579 계단 오르기
 * 계단을 오르는데는 규칙이 있다.
 * 1. 계단은 한 번에 한 계단 또는 두 계단씩 오를 수 있다.
 * 2. 연속된 3개의 게단을 모두 밟아서는 안된다.
 * 시작점은 X
 * 마지막 도착계단은 반드시 밟아야 한다.
 * 얻을 수 있는 총 점수의 최대값을 구하자.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['6', '10', '20', '15', '25', '10', '20'];
const N = Number(input.shift());
const ARR = input.map(Number);
const solution = (n, arr) => {
  // console.log(arr);
  const dp = Array.from({ length: n }, () => 0);
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0] + arr[1], arr[1]);
  dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
  }

  return dp[n - 1];
};
console.log(solution(N, ARR));
