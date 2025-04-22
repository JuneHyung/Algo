/**
 * 11053 가장 긴 증가하는 부분 수열
 * 수열 A가 주어졌을 때 가장 긴 증가하는 부분 수열을 구하시오.
 * 10 20 10 30 20 50의 경우  10 20 30 50이 가장 긴 부분수열이며 길이는 4다.
 * 수열 A의 가장 긴 증가하는 부분 수열의 길이를 출력
 */

// const fs = require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['6', '10 20 10 30 20 50'];
const N = Number(input[0]);
const A = input[1].slice().split(' ').map(Number);

const solution = (n, a) => {
  const dp = Array.from({ length: n }, () => 0);
  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (a[i] > a[j]) max = Math.max(max, dp[j]);
    }
    dp[i] = max + 1;
  }
  const result = Math.max(...dp);
  return result;
};

console.log(solution(N, A));

/**
i=0 : dp[0] = 1;
i=1 : a[1] = 20 > 10이니 dp[0] + 1 = 2
i=2 : a[2]=10 이니까 앞에 a[j] < 10인 게 없음 => dp[2]=1
i=3 : a[3]=30 > 10, 20, 10 => max(max, dp[0], dp[1], dp[2]) 
i=4 : a[4]=20 > 10 => dp[4]=max(dp[0], dp[2])+1 = 2
i=5 : a[5]=50 > 10,20,10,30 => max(dp[0],dp[1],dp[2],dp[3],dp[4]) = 3 => dp[5]=4
 */
