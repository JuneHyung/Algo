/**
 * 2720 세탁소 사장 동혁
 * 리암은 거스름돈 주는걸 실수한다.
 * 
 * 거스름돈의 액수가 주어지면, 
 * 리암이 줘야할 쿼터(0.25달러), 다임(0.10달러), 니켈(0.05달러), 페니(0.01달러)
 * 의 개수를 구하는 프로그램 구하세요.
 * 
 * 거스름돈은 항상 5달러 이하.
 * 손님이 받는 동전 개수를 최소로 하려한다.
 * 1.24달러라면 손님은 4쿼터 2다임 0니켈 4페니
 * 
 * 첫줄 테케 T
 * 각 테케는 거스름돈 C를 나타내는 정수 하나로 이루어짐. C단위는 센트
 * 1달러는 100센트이고, C는 1~500
 * 
 * 쿼터 , 다임, 니켈, 페니 수를 공백으로 구분해 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
  '124',
  '25',
  '194',
]
const T = Number(input[0]);

const solution = (change) => {
  let dollars = change;

  const quarter = Math.floor(dollars / 25);
  dollars = dollars % 25;

  const dime = Math.floor(dollars / 10);
  dollars = dollars % 10;

  const nickel = Math.floor(dollars / 5);
  dollars = dollars % 5;

  const penny = dollars;

  const result = `${quarter} ${dime} ${nickel} ${penny}`;

  return result;
}

for (let t = 1; t <= T; t++) {
  const change = Number(input[t])
  console.log(solution(change))
}