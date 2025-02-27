/**
 * 1181 단어 정렬
 * 길이가 짧은거부터.
 * 길이 같으면 사전순
 * 중복된ㄷ 단어는 하나만 남기고 제거
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
const N = Number(input[0]);
const Dictionary = input.slice(1);

const solution = (n, dictionary) => {
  const notDuplicated = [...new Set(dictionary)];
  const sorted = notDuplicated.sort((a,b)=>{
    if(a.length > b.length) return 1;
    else if(a.length < b.length) return -1;
    else if(a>b) return 1;
    else if(a<b) return -1;
    else return 0;
  })

  return sorted.join('\n')
}

console.log(solution(N, Dictionary));
