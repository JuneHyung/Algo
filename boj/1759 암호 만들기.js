/**
 * 1759 암호만들기
 * 서로다른 L개 알파벳 소문자들로 최소 한개 모음과 최소 2개 자음으로 구성되있다.
 * C가지 종류의 문자로 만들 수 있는 모든 암호의 종류 작성.
 * 암호는 정렬된형태이다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 6',
'a t c i s w',
]
const [L, C] = input.shift().split(' ').map(Number)
const INFO = input.shift().split(' ')

const solution = (l, c, info) =>{
  const alp = ['a', 'e', 'i', 'o', 'u']
  info.sort()

  const getCombi = (arr, k) =>{
    if(k===1) return arr.map(el=>[el])
    const result = [];
    arr.forEach((fixed, idx, origin)=>{
      const rest = origin.slice(idx+1)
      const combi = getCombi(rest, k-1)
      const attach = combi.map(el=>{return [fixed, ...el]})
      result.push(...attach)
    })
    return result;
  }
  const combi = getCombi(info, l).map(el=>el.join(''));
  const notDupCombi = [...new Set(combi)];

  const checkAlp = (str) =>{
    let isAlp=0;
    let notAlp=0;
    for(let i=0;i<str.length;i++){
      const a= str[i];
      if(alp.includes(a)) isAlp++;
      else notAlp++;
    }
    return isAlp>=1 && notAlp>=2 ? true : false;

  }

  const answer = [];
  for(let i=0; i<notDupCombi.length;i++){
    const cur = notDupCombi[i];
    if(checkAlp(cur)) answer.push(cur);
    else continue;
  }

  return answer.join('\n');
}
console.log(solution(L, C, INFO))