/**
 * 16493 최대 페이지 수
 * 철수는 남은 기간동안 최대한 많은 페이지를 읽고 연체 없이 반납하고 싶다.
 * 빌린 책은 여러 챕터로 구성된 에세이집인데 챕터들은 서로 독립적.
 * 어느 챕터를 읽기 위해 다른 챕터를 먼저 읽어야 할 필요가 없다.
 * 남은 기간 N일과 각챕터당 그 챕터를 전부 읽는데 소요되는 일수와 페이지 수가 주어질 때
 * N일간 읽을 수 있는 최대 페이지 수를 구하는 프로그램을 작성.
 *
 * 첫째 줄에 N과 챕터 수 M이 주어짐.
 * 각 챕터당 읽는데 소요되는 일 수와 페이지 수가 주어짐.
 * 소요되는 일 수는 20보다 작거나 같은 자연수.
 * 페이지 수는 300보다 작거나 같음.
 *
 * 읽을 수 있는 최대 페이지 수를 출력
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['7 7', '3 10', '5 20', '1 10', '1 20', '2 15', '4 40', '2 200'];
// n은 남은일수, m은 챕터 수
const [N, M] = input.shift().split(' ').map(Number);
const INFO = input.map((el) => el.split(' ').map(Number));
const solution = (n, m, info) => {
  info.unshift([0, 0]);
  const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));

  for (let i = 1; i <= m; i++) {
    const [day, page] = info[i];
    for (let j = 1; j <= n; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j - day >= 0) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - day] + page);
      }
    }
  }
  return dp[m][n];
};
console.log(solution(N, M, INFO));
