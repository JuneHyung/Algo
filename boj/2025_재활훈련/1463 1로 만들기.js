/**
 * 1463 1로 만들기
 * 정수 X에 사용할 수 있는 연산
 * 1. X가 3으로 나누어 떨어지면, 3으로 나눈다.
 * 2. X가 2로 나누어 떨어지면, 2로 나눈다.
 * 3. 1을 뺀다.
 * 
 * 연선 3개를 적절히 사용해 1을 만드려 한다. 연산을 사용하는 횟수의 최소값 구하기
 */
/**
 * n까지 배열을 만들어 각 idx수가 1을 만들 수 있는 배열 생성.
 * 1 → 0
 * 2 → 1 = 1
 * 3 → 1 = 1
 * 4 → 2 → 1 = 2
 * 5 → 4 → 2 → 1 = 3
 * 6 → 3 → 1 = 2
 * 7 → 6 → 3 → 1 = 3
 * 8 → 4 → 2 → 1 = 3  
 * 9 → 3 → 1 = 2
 * 10 → 9 → 3 → 1 = 3
 * ...
 * 
 * /2 또는 /3이 0이 안되면 이전꺼+1 (-1한경우)
 * /2 또는 /3이 0인 경우 -1한 경우와 최소값을 비교해서 저장.
 * 
 */
/**
 * 게시판 참고 - -1한것이 최소가 될 수 있다.
 * 먼저 -1한 다음 비교하는 것으로 수정.
 */

// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '642'
const N = Number(input);

const solution = (n)=>{
  const dp = Array.from({length:n+1},()=>0);

  dp[1] = 0;
  dp[2] = 1;
  
  for(let i=3; i<=n;i++){
    dp[i] = dp[i-1]+1;
    if(i%2===0) dp[i] = Math.min(dp[i], dp[i/2]+1);
    if(i%3===0) dp[i] = Math.min(dp[i], dp[i/3]+1);
  }

  return dp[n];
}

console.log(solution(N))