/**
 * 12849 본대 산책
 * 캠퍼스를 본대, 정보과학관을 정보대라 부른다.
 * 딱 D분만 산책할 것이다. (D분일때 정보과학관에 도착해야한다.) 이때 가능한 경로 수를 구하자
 * 1. dfs -> 시간초과
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '10'
const D = Number(input)

const solution = (d) => {
  
  const dp = Array.from({length:d+1},()=>Array.from({length:8},()=>0));
  const DIV = 1e9+7;
  dp[0][0] = 1;
  for(let t=0;t<d;t++){
    dp[t+1][0] = (dp[t][1] + dp[t][3])%DIV
    dp[t+1][1] = (dp[t][0] + dp[t][2] + dp[t][3])%DIV
    dp[t+1][2] = (dp[t][1] + dp[t][3] + dp[t][4] + dp[t][5])%DIV
    dp[t+1][3] = (dp[t][0] + dp[t][1] + dp[t][2] + dp[t][5])%DIV
    dp[t+1][4] = (dp[t][2] + dp[t][5] + dp[t][6])%DIV
    dp[t+1][5] = (dp[t][2] + dp[t][3] + dp[t][4] + dp[t][7])%DIV
    dp[t+1][6] = (dp[t][4] + dp[t][7])%DIV
    dp[t+1][7] = (dp[t][5] + dp[t][6])%DIV
  }
  return dp[d][0];
}

console.log(solution(D));