/**
 * 1343 폴리오미노
 * AAAA와 BB 폴리오미노 두 종류로 .과 X로 이루어진 보드판을 덮으려한다.
 * .은 덮으면 안된다.
 * 첫 줄에 사전순으로 출력해보자.
 * 못덮으면 -1 출력
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim();
// const input = 'XXXXXX'
const input = 'XXXX....XXX.....XX'
const solution = (str) => {
  const arr = str.split('.')
  let flag = arr.filter(el=>el.length%2!==0).length > 0;
  if(flag) return -1;
  const answer = arr.map(word=>{
    word = word.replace(/XXXX/g, 'AAAA').replace(/XX/g, 'BB')
    return word;
  }).join('.')
  return answer
}

console.log(solution(input))