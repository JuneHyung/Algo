/**
 * 1149 RGB거리
 * N개 집이 있고, 거리는 선분으로 나타낼 수 있따. 1~N번 집이 순서대로 있따.
 * RGB중 1개로 색을 칠해야 한다.
 * 비용의 최소값을 구하자.
 * 
 * 1. 1번 집의 색은 2번 집의 색과 같지 않아야 한다.
 * 2. N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
 * 3. i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.
 * 
 * 첫줄 N
 * 둘줄부터 각 집을 R G B로 칠 하는 비용이 1부터 1줄씩 주어진다.
 */
/**
 * 첫번쨰 R G B에서 각각 시작 
 * 규칙에 맞게 값을 구한다음 최소값 리턴.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'26 40 83',
'49 60 57',
'13 89 99',
]
const N = Number(input[0]);
const INFO = input.slice(1).map(el=>el.split(' ').map(Number));

const solution = (n, info) => {
  const dp = Array.from({length:n+1},()=>Array.from({length:3},()=>0));
  
  const [r,g,b] = info[0];
  dp[1][0] = r;
  dp[1][1] = g;
  dp[1][2] = b;
  
  for(let i=2;i<=n;i++){
    dp[i][0] = info[i-1][0] + Math.min(dp[i-1][1], dp[i-1][2])
    dp[i][1] = info[i-1][1] + Math.min(dp[i-1][0], dp[i-1][2])
    dp[i][2] = info[i-1][2] + Math.min(dp[i-1][0], dp[i-1][1])
  }

  const min = Math.min(...dp[n])
  return min;

}

console.log(solution(N, INFO))