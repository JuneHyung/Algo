/**
 * 12865 N개 물건에 무게 W와 가치 V가 있다.
 * 최대 K만큼 무게를 담을 수 있는데 최대한 즐거운 여행을 위해 배낭에 넣을 수 있는 물건들의 가치 최대값을 구하자
 * 
 * 물품수 N과 버틸 무게 K
 * N개의 줄에 걸쳐 물건의 무게 W와 가치 V가 주어진다.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 7',
'6 13',
'4 8',
'3 6',
'5 12',
]
const [N, K] = input.shift().split(' ').map(Number)
const ARR = input.map(el => el.split(' ').map(Number));
ARR.unshift([0,0])
const solution = (n, k, info) => { 
  const dp = Array.from({length:n+1}, ()=>Array.from({length:k+1},()=>0));
  for (let i = 1; i <= n; i++){
    const [w, v] = info[i]
    for (let j = 1; j <= k; j++) { 
      dp[i][j] = w <= j ? Math.max(v + dp[i - 1][j - w], dp[i - 1][j]) : dp[i - 1][j];
    }
  }
  return dp[n][k];
}

console.log(solution(N, K, ARR))