/** 
 * 11653 소인수분해
 * N이 주어졌을 떄 소인수분해하는 프로그램작성
 * N은 1~1천만
 * N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력.
 * N이 1인경우 아무것도 출력하지 않음.
*/
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '1';
const N = Number(input);

const solution = (n) => {
  if (n === 1) return ''; // 그냥 리턴하면 undefined 리턴.

  const result = [];
  let num = n;

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      num /= i;
      result.push(i);
    }
    if (num === 1) break;
  }

  return result.join('\n');
}

console.log(solution(N));