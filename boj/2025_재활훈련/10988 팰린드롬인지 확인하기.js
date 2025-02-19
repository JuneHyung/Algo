/**
 * 10988 팰린드롬인지 확인하기
 * 팰린드롬은 앞으로 읽어도 뒤로 읽어도 똑같은 단어
 * 단어길이는 1보다크거나 같고, 100보다작거나같고 소문자로만이루어짐.
 * 팰린드롬이면 1 아니면 0
 */
// const fs = require('fs')
// const input= fs.readFileSync('/dev/stdin').toString().trim();
const input = `noon`;
const solution = (str)=>{
  const mid = Math.floor(str.length/2);
  const front = str.slice(0,mid);
  const back = [...str.slice(mid)].reverse().join('');

  const result = back.includes(front) ? 1 : 0
  return result ;
}

console.log(solution(input))
