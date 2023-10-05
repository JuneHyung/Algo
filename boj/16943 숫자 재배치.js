/**
 * 16943 숫자 재배치
 * 두 정수 A와 B가 있을 때, A에 포함된 숫자의 순서를 섞어 새로운 수 C를 만들려한다.
 * C는 A의 순열 중 하나가 되어야 한다.
 * C중 B보다 작으면서, 가장 큰 값을 구해보자. C는 0으로 시작해서 안된다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '1234 4100'
const [A, B] = input.split(' ').map(el=>el.split('').map(Number))
const solution = (a, b) =>{
  const target = Number(b.join(''))
  const getPermu = (arr, k) =>{
    if(k===1) return arr.map(el=>[el])
    const result = [];
    arr.forEach((fixed, idx, origin) => {
      const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)]
      const permu = getPermu(rest, k-1)
      const attach = permu.map(el=>[fixed,...el])
      result.push(...attach)
    })
    return result;
  }

  const c = getPermu(a, a.length).map(el=>el.join('')).filter(el=>el[0]!=='0').sort()
  let answer = -1;
  for(let i=0;i<c.length;i++){
    if(Number(c[i]) < target){ 
      answer = Number(c[i]);
    }
  }
  return answer;
}

console.log(solution(A, B))

