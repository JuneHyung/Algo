/**
 * 1463 1로 만들기
 * X가 3으로 나눠떨어지면 3으로나눈다.
 * X가 2로 나눠떨어지면 2로 나눈다.
 * 1을 뺀다.
 */
// const fs = requir('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '10'
const N = Number(input)

const solution = (n) => {
  const dp = Array.from({length: n+1},()=>0);
  
  for(let i=2;i<=n;i++){
    dp[i] = dp[i-1] +1;
    if(i%2===0) dp[i] = Math.min(dp[i], dp[i/2]+1);
    if(i%3===0) dp[i] = Math.min(dp[i], dp[i/3]+1);
  }
  return dp[n];
}


console.log(solution(N))