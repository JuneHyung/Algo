/**
 * 1439 뒤집기
 * 0과 1로만 문자열 S
 * S의 모든 문자를 같게 만들려 한다.
 * 최소 횟수는?
 */

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (str) => {
  let zero = str.replace(/1/g, ' ').split(' ').filter(el=>el!=='').length;
  let one = str.replace(/0/g, ' ').split(' ').filter(el=>el!=='').length;
  return Math.min(zero, one)  
}

console.log(solution(input))