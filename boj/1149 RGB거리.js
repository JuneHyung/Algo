/**
 * 1149 RGB거리
 * RGB거리에 집이 N개있다.
 * 집은 R, G, B중 하나의 색으로 칠해야한다.
 * 각 집을 칠하는 비용이 주어질때 아래 규칙을 만족하며, 모든 집을 칠하는 비용의 최소값을 구하자.
 * 
 * 1. 1번집의 색은 2번집과 같지 않아야한다.
 * 2. N번 집의 색은 N-1번 집의 색과 같지않아야한다.
 * i번 집의 색은 i-1, i+1번 집의 색과 같지 않아야 한다.
 * 첫줄에 집의 수 N
 * N개 줄에 각 집을 R, G, B로 칠하는 비용이 한 줄에 하나씩 주어진다.
 * 모든집을 칠하는 비용의 최소값을 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'26 40 83',
'49 60 57',
'13 89 99',
]
const N= Number(input.shift())
const COLORS = input.map(el=>el.split(' ').map(Number));

const solution = (n, colors) =>{
  const dp = Array.from({length:n+1},()=>Array.from({length:3},()=>0));
  dp[1] = colors[0];
  
  for(let i=2;i<=N;i++){
    dp[i][0] = colors[i-1][0]+Math.min(dp[i-1][1] ,dp[i-1][2])
    dp[i][1] = colors[i-1][1]+Math.min(dp[i-1][0] ,dp[i-1][2])
    dp[i][2] = colors[i-1][2]+Math.min(dp[i-1][0] ,dp[i-1][1])
    console.log(dp)
    console.log()
  }
  const answer = Math.min(...dp[n]);
  return answer;
}

console.log(solution(N, COLORS));