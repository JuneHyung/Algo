/**
 * 15652 N과 M(4)
 * 1~N까지 자연수 중 M개를 고른 수열
 * 같은 수 여러번 가능
 * 비 내림차순
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = '4 2'
const [N, M] = input.split(' ').map(Number)

const getPermu = (arr, m) =>{
  const result = [];
  if(m===1) return arr.map(el=>[el])
  arr.forEach((fixed, idx, origin)=>{
    const rest = origin.slice(idx)
    const permu = getPermu(rest, m-1)
    const attach = permu.map(el=>[fixed, ...el])
    result.push(...attach)
  })
  return result;
}
const solution = (n, m) =>{
  const arr = Array.from({length: n}, (_,i)=>i+1);
  const permu = getPermu(arr, m);
  const answer = permu.map(el=>el.join(' ')).join('\n')
  return answer
}

console.log(solution(N, M))