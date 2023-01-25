/**
 * 11047 동전 0
 * 동전의 종류 N, 합이 K가되게
 * 동전 개수의 최소값 구하기
 * 
 * 큰수부터 K에서 몫만큼 빼기.
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = [
//   '10 4200',
//   '1',
//   '5',
//   '10',
//   '50',
//   '100',
//   '500',
//   '1000',
//   '5000',
//   '10000',
//   '50000',
// ]

const input = [
  '10 4790',
  '1',
  '5',
  '10',
  '50',
  '100',
  '500',
  '1000',
  '5000',
  '10000',
  '50000',
]
const [N, K] = input[0].split(' ').map(el => Number(el));
const coins = [];
for (i = 1; i < input.length; i++) coins.push(Number(input[i]));

const solution = (N, K, coins) => {
  let answer = 0;
  coins.sort((a, b) => b - a);
  for (let i = 0; i < N; i++) {
    const coin = coins[i];
    if (coin > K) continue;
    else {
      const cnt = Math.floor(K / coin);
      K -= cnt * coin;
      answer += cnt;
    }
  }

  return answer;
}


console.log(solution(N, K, coins));