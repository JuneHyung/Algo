/**
 * 10815 숫자 카드
 * 숫자카드 N개, 정수 M개
 * line1 : N
 * line2 : 가지고 있는 카드
 * line3 : M
 * line4 : 체크할 카드
 * 
 * 체크할 카드가 가지고있는 카드에 있으면 1 아니면 0. 체크한 결과를 한 줄로 리턴.
 * N과 M은 50만
 * 숫자 카드는 -1천만보다 크거나 같고, 1천만보다 작거나 같다.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '5',
'6 3 2 10 -10',
'8',
'10 9 -5 2 3 4 5 -10',
];

const N = input[0];
const GET_CARDS = input[1].split(' ').map(Number);
const M = input[2];
const TARGET_CARDS = input[3].split(' ').map(Number);

const solution = (N, GET_CARDS, M, TARGET_CARDS) => {
  let result = '';
  
  const notDuplicated = new Set(GET_CARDS);
  
  for(const num of TARGET_CARDS){
    result += notDuplicated.has(num) ? `1 `: `0 `
  }

  return result.trim();
}

console.log(solution(N, GET_CARDS, M, TARGET_CARDS))