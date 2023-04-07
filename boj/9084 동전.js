/**
 * 9084 동전
 * 동전의 종류가 주어질 떄 주어진 금액을 만드는 방법을 세는 프로그램을 구하시오.
 * 
 * 테스트케이스 수 T
 * 동전 가지수 N
 * 동전금액 종류
 * 만들어야될 금액 M
 * 이 주어진다.
 * 각 케이스별 가지 수를 한 줄에 한 개씩 출력
 * 
 * 목표 금액까지 배열을 만들고,
 * 동전값 ~ 목표금액까지 돌면서 누적.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '3',
'2',
'1 2',
'1000',
'3',
'1 5 10',
'100',
'2',
'5 7',
'22',
]
const T = Number(input.shift())

const solution = (n, m, coins) => { 
  // console.log(coins)
  const money = Array.from({ length: m + 1 }, () => 0);
  money[0] = 1;
  for (let i = 0; i < n; i++) { 
    for (let j = coins[i]; j <= m; j++) { 
      money[j] += money[j - coins[i]]
      // console.log(money)
    }
  }
  return money[m];
}


for (let t = 0; t < T; t++) {
  const N = Number(input.shift())
  const COINS = input.shift().split(' ').map(Number)
  const M = Number(input.shift());

  console.log(solution(N, M, COINS))

}
