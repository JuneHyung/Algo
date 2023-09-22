/**
 * 11053 가장 긴 증가하는 부분 수열
 * 수열 A가 주어졌을 떄 가장 긴 증가하는 부분수열 구하는 프로그램 작성
 * 가장 긴 증가하는 부분 수열의 길이를 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6',
'10 20 10 30 20 50',
]
const N = Number(input.shift())
const ARR = input.shift().split(' ').map(Number)

const solution = (n, arr) => {
  const dp = Array.from({length:n},()=>0);
  for(let i=0;i<n;i++){
    let max = 0;
    for(let j=0;j<i;j++){
      if(arr[i]>arr[j] && dp[j] > max) max = dp[j]
    }
    dp[i] = max+1;
  }
  
  return Math.max(...dp)
}
console.log(solution(N, ARR))