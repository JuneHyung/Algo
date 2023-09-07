/**
 * 1476 날짜 계산
 * 나라에서는 3개수를 이용해 연도를 나타낸다.
 * E, S, M은 각각 다른 범위를가진다
 * E: 1~15, S: 1~28, M: 1~19
 * 1년지날때마다 3개수는 1씩 증가한다.
 * 범위를 넘어가면 1이됨.
 * 16은 1 16 16
 * 준규가 사는 나라에서 ESM이 몇년인지 구하라.
 * node.js 계속 메모리초과
 */
// const fs = require('fs')
// const input = fs.readFile('/dev/stdin').toString().trim()
const input = '1 2 3';
const INFO = input.split(' ').map(Number);

const solution = (info) => {
  let year = 0;
  const [e, s, m] = info;

  const isSame = () => (year-e)%15===0 && (year-s)%28===0 && (year-m)%19===0

  while(true){
    if(isSame()) break;
    year++;
  }

  return year;
}
console.log(solution(INFO));