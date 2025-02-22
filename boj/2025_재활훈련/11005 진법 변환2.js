/**
 * 11005 진법 변환2
 * 10진법의 수 N이 주어진다. B진법으로 바꿔서 출력하는 프로그램 작성
 * 10진법 넘어가는건 알파벳 표시
 * A: 10, B:11, ... Y:34, Z: 35
 * 첫 줄에 N과 B가 주어진다. 
 * B는 2~36
 * N은  10억보다 작거나 같다.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = `60466175 36`;
const [N, B] = input.split(' ').map(Number);

const solution = (n, b) => {
  // return N.toString(b).toUpperCase();
  let result = [];
  let num = n;
  const numStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  while (num > 0) {
    const mod = num % b;
    const quotient = Math.floor(num / b);

    result.push(numStr[mod]);
    num = quotient;
  }

  return result.reverse().join('');
}

console.log(solution(N, B));