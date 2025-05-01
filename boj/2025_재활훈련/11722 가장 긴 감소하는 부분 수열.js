/**
* 11722 가장 긴 감소하는 부분 수열
* A가 주어졌을때 가장 긴 감소하는 부분수열 구하기.
* 수열 A = {10, 30, 10, 20, 20, 10} 인 경우에 가장 긴 감소하는 부분 수열은 A = {10, 30, 10, 20, 20, 10}  이고, 길이는 3
*/
/**
* 가장 긴 증가하는 부분 수열과 같은원리
*/
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = ["6", "10 30 10 20 20 10"];

const N = Number(input[0]);
const A = input[1].slice().split(" ").map(Number);

const solution = (n, a) => {
  const dp = Array.from({ length: n }, () => 1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (a[i] < a[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  console.log(dp);

  const result = Math.max(...dp);
  return result;
};

console.log(solution(N, A));
