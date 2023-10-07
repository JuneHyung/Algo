/**
 * 1254 펠린드롬 만들기 
 * 앞뒤로 똑같은 글자를 펠린드롬이라 한다.
 * 가능하면 가장 짧은 문자열을 만드려 한다.
 * 문자열 S가 주어진다.
 * 문자열 S에 0개이상의 문자를 뒤에 추가해 펠린드롬을 만드려 한다.
 * 
 * 1. 시간초과 - 문자종류를 만들어 하나씩 추가하며 팰린드롬인지 확인후 결과도출
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = 'abacaba';
const solution = ( STR ) => {
  let reversed = STR.split('').reverse().join('')
  if(reversed === STR) return reversed.length;

  for(let i=1;i<STR.length;i++){
    const origin = STR.split('').slice(i).join('');
    const reverse = STR.split('').slice(i).reverse().join('')
    if(origin===reverse) return STR.length+i;
  }
}
console.log(solution(input))