/**
 * 1316 그룹 단어 체커
 * 각 문자가 연속해서 나타나는 경우 연속된 문자.
 * aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4',
'aba',
'abab',
'abcabc',
'a',
]
const N = Number(input.shift())
const solution = (n, arr) => {
  let answer = 0;
  for(let i=0;i<n;i++){
    const visited = []
    const str = arr[i].split('');
    for(let j=0;j<str.length;j++){
      const c = str[j];
      if(!visited.includes(c)) visited.push(c)
      else if(visited.indexOf(c) !== visited.length-1 ){
        answer--;
        break;
      }
    }
    answer++;
  }
  return answer;
}

console.log(solution(N, input))

