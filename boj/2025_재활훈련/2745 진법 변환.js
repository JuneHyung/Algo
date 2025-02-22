/**
 * 2745 진법 변환
 * B진법 수 N이 주어진다. 10진법으로 바꿔 출력하는 프로그램 작성
 * 10진법 넘어가는건 알파벳 표시
 * A: 10, B:11, ... Y:34, Z: 35
 * 첫 줄에 N과 B가 주어진다.
 * B는 2~36
 * B진법 수 N을 10진법으로 바꾸면 항상 10억보다 작거나 같다
 */

// 1 * 35 = 
// 36 * 35 = 1260
// 36*36 *35 = 45360
// 36*36*36 *35 = 1,632,960
// 36*36*36*36 *35 = 58,786,560

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = `ZZZZZ 36`;
const [str, num] = input.split(' ');
const solution = (str, num) => {
  // return parseInt(str, num)

  const numStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const len = str.length;
  const charList = str.split('');
  const reversedCharList = charList.reverse();

  let sum = 0;

  for (let i = 0; i < len; i++) {
    const char = reversedCharList[i];
    const idx = numStr.indexOf(char);

    sum += Math.pow(num, i) * idx;
    // if (i === 0) sum += idx;
    // else sum += Math.pow(num, i) * idx;
  }

  return sum;


}

console.log(solution(str, Number(num)))
