/**
 * 9465 스티커
 * 문방구에서 2n개 스티커를 구매햇다.
 * 한장떼면 변을 공유하는 스티커는 모두 찢어져 사용x
 * 각 스티커에 점수를 매기고 합이 최대가 되게 스티커를 떼내려한다.
 * 뗄수있는 스티커의 점수의 최대값을 구하시오.
 * 2n개 스티커중 점수합이 최대가 되면서 서로 변을 공유하지 않는 스티커집합을 구해야한다.
 *
 */
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input =[
  '2',
'5',
'50 10 100 20 40',
'30 50 70 10 60',
'7',
'10 30 10 50 100 20 40',
'20 40 30 50 60 20 80',
]
const T = Number(input.shift());

const solution = (n, info) => {
  const dp = [];
  for(let i=0;i<=n;i++) dp.push([0,0])
  dp[1][0] = info[0][0];
  dp[1][1] = info[1][0];
  for(let i=2; i<=n;i++){
    dp[i][0] = Math.max(dp[i-1][1], dp[i-2][1]) + info[0][i-1];
    dp[i][1] = Math.max(dp[i-1][0], dp[i-2][0]) + info[1][i-1];
  }
  return Math.max(...dp[n])
}

for (let t = 0; t < T; t++) {
  const N = Number(input.shift());
  const INFO = input.splice(0, 2).map(el=>el.split(' ').map(Number));
  console.log(solution(N, INFO))
}
