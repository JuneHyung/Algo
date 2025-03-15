/**
 * 10870 피보나치 수
 * 피보나치수는 0과 1로 시작한다.
 * 0번쨰 피보나치 수는 0, 1번째 피보나치 수는 1, 그다음은 앞의 두 피보나치 수의 합이다.
 * n = 20보다 작거나 같은 자연수 또는 0
 */

//  const fs =require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim()
const input = '10'
const N = Number(input)

const solution = (n) => {
  const fibo = [0,1];
  for(let i=2;i<=n;i++) fibo[i] = fibo[i-1] + fibo[i-2]
  return fibo[n]
}

console.log(solution(N))