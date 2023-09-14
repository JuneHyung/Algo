/**
 * 1932 정수 삼각형
 * 맨 위층 7부터 시작해 아래 있는 수 중 하나를 선택할 것이다. 
 * 합이 최대가 되느 ㄴ경로를 구하여라.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
'7',
'3 8',
'8 1 0',
'2 7 4 4',
'4 5 2 6 5',
]
const N = Number(input.shift())
const INFO = input.map(el=>el.split(' ').map(Number))

const solution = (n, info) =>{
  const dp = []
  info.forEach(el=>dp.push(el))
  console.log(dp)
  for(let i=1;i<n;i++){
    for(let j=0;j<=i;j++){
      if(j===0) prev = dp[i-1][j];
      else if (j===i) prev = dp[i-1][j-1];
      else prev = Math.max(dp[i-1][j-1], dp[i-1][j])
      dp[i][j] += prev;
    }
  }
  return Math.max(...dp[n-1])

}

console.log(solution(N, INFO))
