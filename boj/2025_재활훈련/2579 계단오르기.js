/**
 * 2579 계단 오르기
 * 시작점 부터 꼭대기 도착점까지 가는 게임이다.
 * 각 게단에 점수가있는데 밟으면 그 계단에 쓰인 점수를 얻게 딘다.
 * 
 * 규칙
 * 1. 계단은 한번에 1계단 또는 2계단씩 오를 수 있다.
 * 2. 연속된 3개의 계단을 밟으면 안된다.
 * 3. 마지막 도착 계단은 반드시 밟아야 한다.
 * 
 * 얻을 수 있는 점수의 최대값 구하기
 * 
 */
/**
 * 한칸 뛰는 경우, 2칸 뛰는 경우 갱신후 마지막에 최대값 비교
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
  '9',
  '3',
  '7'
]
const N = Number(input[0]);
// idx 햇갈려서 0 추가
const STAIRS = [0, ...input.slice(1).map(Number)]

const solution = (n, stairs) => {
  // dp[0][i] : i번에 2칸 뛰어 도착한 경우
  // dp[1][i] : i번에 1칸 뛰어 도착한 경우
  const dp = Array.from({ length: 2 }, () => Array.from({ length: n + 1 }, () => 0));

  dp[0][1] = stairs[1];

  dp[0][2] = stairs[2];
  dp[1][2] = dp[0][1] + stairs[2];


  for (let i = 3; i <= n; i++) {
    // 2칸뛰어 도착할때 : 2칸 뛰어 도착한 경우와 1칸뛰어 도착한 경우 중 최대값과 현재를 비교.
    dp[0][i] = Math.max(dp[0][i - 2], dp[1][i - 2]) + stairs[i];

    // 1칸뛰어 도착할때 : 이전 계단이 1칸 뛰어 도착한 경우 이번 계단도 1칸뛰면 3개 연속이니 2칸뛰어 도착한 경우만 생각.
    dp[1][i] = dp[0][i - 1] + stairs[i]
  }

  console.log(dp)
  const result = Math.max(dp[0][n], dp[1][n])
  return result;
}

console.log(solution(N, STAIRS));