/**
 * 9461 파도반 수열
 * 주어진 N이 주어질 때 N번쨰 정삼각형 길이를 구하시오.
 */
const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);

const MAX = Math.max(...arr);

let dp = [1, 1, 1];

for (let i = 3; i <= MAX + 1; i++) {
  dp[i] = dp[i - 3] + dp[i - 2];
}

arr.forEach(v => { console.log(dp[v - 1]); });