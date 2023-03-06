/**
 * 7795 먹을 것인가 먹힐 것인가
 * A집합 B집합이 주어질 떄 A크기가 B보다 큰 쌍이 몇개나 있는지 구해보자.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '2',
'5 3',
'8 1 7 3 1',
'3 6 1',
'3 4',
'2 13 7',
'103 11 290 215',
]
const T = Number(input.shift())

const solution = (alen, blen, Aarr, Barr) => {
  Aarr.sort((a, b) => b - a);
  Barr.sort((a, b) => a - b);

  let alt = 0;
  let brt = blen - 1;
  let answer = 0;
  while (alt <= alen) {
    if (Aarr[alt] > Barr[brt]) {
      answer += brt + 1;
      brt = blen - 1;
      alt++;
    } else {
      brt--;
    }
    if (brt === -1) {
      brt = blen - 1;
      alt++;
    }
  }
  return answer;
}

for (let t = 0; t < T; t++) { 
  const [Alen, Blen] = input.shift().split(' ').map(Number)
  const AARR = input.shift().split(' ').map(Number);
  const BARR = input.shift().split(' ').map(Number);
  console.log(solution(Alen, Blen, AARR,BARR))
}