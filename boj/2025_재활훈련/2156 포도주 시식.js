/**
 * 2156 포도주 시식
 * 
 * 1. 포도주 잔을 선택하면 그 잔에 들어있는 포도주는 모두 마셔야 하고, 마신 후에는 원래 위치에 다시 놓아야 한다.
 * 2. 연속으로 놓여 있는 3잔을 모두 마실 수는 없다.
 * 
 * 될 수 있는 대로 많은 양의 포도주를 맛보기 위해서 어떤 포도주 잔을 선택할지 고민.
 * 1 ~n까지 번호가 붙은 n개 포도주 잔이 순서대로 테이블위에있고, 각 포도주잔에 있는 포도주 양이 주어졌을 때 
 * 가장 많은 양의 포도주를 마실수 있도록 도움
 * 
 * 첫 줄 포도주 잔 개수 n : 1~1만
 * 둘줄부터 포도주의 양 주어짐. 1000이하 음이아닌 정수
 */
/**
 * 마시는 경우, 안마시는 경우를 체크.
 * 최대 3개까지 마실 수 있으니 2차원배열 생성하여 마시는 포도주 양을 저장. 
 * [연속마신횟수][현재 마시는 포도주위치]
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '1',
  '17'
]
const N = Number(input[0])
const WineList = input.slice(1).map(Number);

// const solution = (n, wineList) => {
//   const drinkInfo = Array.from({ length: 3 }, () => Array.from({ length: n }, () => -1))

//   const dfs = (cur, len) => {
//     if (cur === n) return 0; // 마지막 까지 체크 완료
//     if (drinkInfo[len][cur] !== -1) return drinkInfo[len][cur];

//     let notDrink = dfs(cur + 1, 0); // 안 마시는 경우
//     let drink = 0;

//     if (len < 2) { // 3잔 이하면
//       drink = wineList[cur] + dfs(cur + 1, len + 1); // 마시는 경우
//     }

//     return drinkInfo[len][cur] = Math.max(notDrink, drink);
//   }

//   const result = dfs(0, 0);
//   return result;
// }

const solution = (n, wineList) => {
  if (n === 1) return wineList[0]
  if (n === 2) return wineList[0] + wineList[1]

  const dp = Array.from({ length: n }, () => 0);
  dp[0] = wineList[0];
  dp[1] = wineList[0] + wineList[1];
  dp[2] = Math.max(wineList[0] + wineList[1], wineList[0] + wineList[2], wineList[1] + wineList[2]);

  for (let i = 3; i < n; i++) {
    const cur = wineList[i];
    const prev = wineList[i - 1];

    const a = dp[i - 1]; // 현재 잔을 마시지 않는 경우
    const b = dp[i - 2] + cur; // 연속 1잔 [전전까지 최대값, 전X, 현O]
    const c = dp[i - 3] + prev + cur; //  연속 2잔 [전전전까지 최대값, 전전X, 전O, 현O]


    dp[i] = Math.max(a, b, c)
  }

  return dp[n - 1]

}

console.log(solution(N, WineList))