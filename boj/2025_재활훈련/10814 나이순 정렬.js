/**
 * 10814 나이순 정렬
 * 나이와 이름이 가입한 순서대로 주어진다.
 * 나이가 증가하는순, 같으면 먼저 가입한 사람이 앞에오는 순서로 정렬
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3',
'21 Junkyu',
'21 Dohyun',
'20 Sunyoung',
]
const N = Number(input[0]);
const Dictionary = input.slice(1).map(el=>el.split(' ')).map(([age, name], idx)=>([Number(age), name, idx ]))

const solution = (n, dictionary) => {
  const sorted = dictionary.sort((a, b)=>{
    const [aAge, aName, aIdx] = a;
    const [bAge, bName, bIdx] = b;
    if(aAge > bAge) return 1;
    else if(aAge < bAge) return -1;
    else if(aIdx > bIdx) return 1;
    else if(aIdx < bIdx) return -1;
    return 0;
  })
  const result = sorted.map(el=>[el[0], el[1]].join(' ')).join('\n')
  return result;
}

console.log(solution(N, Dictionary));
