/**
 * 1181 단어정렬
 * 1.길이가 짧은거 부터
 * 2.길이가 같으면 사전순으로 
 * 중복은 지우고.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '13',
'but',
'i',
'wont',
'hesitate',
'no',
'more',
'no',
'more',
'it',
'cannot',
'wait',
'im',
'yours',
]
const N = Number(input.shift());

const solution = (n, list) =>{
  const notDuplicated = [...new Set(list)]
  console.log(notDuplicated)
  const answer = notDuplicated.sort((a,b)=> {
    if(a.length>b.length) return 1;
    else if(a.length<b.length) return -1;
    else if(a>b) return 1;
    else if(a<b) return -1;
    else return 0;
  });
  return answer.join('\n')
}

console.log(solution(N, input))