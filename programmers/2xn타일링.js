function solution(n) {
    let dp = Array(n).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i= 3; i <= n; i++) {
        let tmp = dp[i - 1] + dp[i - 2];
        dp[i] = tmp %1000000007;

    }
    var answer = dp[n];
    return answer;
}
let n = 4;
console.log(solution(n));