/**
 * 2161 카드1
 * N장 카드가 있다.
 * 1번 카드가 제일 위 N번 카드가 제일 아래인 상태로 순서대로 카드가 있다.
 * 1장남을때까지 반복.
 * 1. 제일 위 카드 버림
 * 2. 그다음 제일 위 카드를 제일 아래에 있는 카드 밑으로 옮김.
 * N이 주어졌을 때 버린 카드들을 순서대로 출력하고 남는 카드를 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '7'
const N = Number(input)

const solution = (n) => {
  const cards = Array.from({length: n},(_, idx)=>idx+1)
  
  const result = [];
  while(cards.length!==1){
    const rfirst = cards.shift();
    const cfirst = cards.shift();
    result.push(rfirst)
    cards.push(cfirst)
  }
  const answer = [...result, ...cards];
  return answer;
}

console.log(solution(N))