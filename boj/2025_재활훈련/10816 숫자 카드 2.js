/**
 * 10816 숫자 카드 2
 * N개 카드와 정수 M개가 주어졌을 떄 이 수가 적힌 숫자카드를 몇 개 가지고있는지 구하는 프로그램
 * 
 * 첫줄 : N은 1~50만 
 * 둘줄 : 숫자는 -1천만 ~ 1천만
 * 셋줄 : M은 1~50만
 * 넷줄 : 숫자는 -1천만 ~ 1천만
 * 
 * 각 수가 적힌 숫자카드를 상근씨가 몇개 가지고있는지 공백구분해서 출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '10',
'6 3 2 10 10 10 -10 -10 7 3',
'8',
'10 9 -5 2 3 4 5 -10',
]
const N = Number(input[0]);
const GET_CARDS = input[1].split(' ').map(Number);
const M = Number(input[2]);
const TARGET_CARDS = input[3].split(' ').map(Number);

const solution = (n, m, getCardList, targetCardList) => {
  const countMap = new Map(); // 가지고 있는 숫자카드 갯수 Map
  
  getCardList.forEach(num=>{
    const count = countMap.get(num);
    count!==undefined ? countMap.set(num, count+1) : countMap.set(num, 1);
  })
  
  const result = targetCardList.map(num => {
    const count = countMap.get(num);
    return count ? count : 0
  });
  return result.join(' ');
}

console.log(solution(N, M, GET_CARDS, TARGET_CARDS));