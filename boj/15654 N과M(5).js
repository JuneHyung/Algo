/**
 * 15652 N과 M(5)
 * 1~N까지 자연수 중 M개를 고른 수열
 * N개자연수중 M개 고른 수열
 * N과 M 그리고 N개의 수가 주어진다.
 * 중복되는 수열을 출력하면 안된다.
 */
// const fs =require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 2',
'9 8 7 1',
]
const [N, M] = input.shift().split(' ').map(Number);
const ARR = input.shift().split(' ').map(Number).sort((a,b)=>a-b)

const getPermu = (arr, m) =>{
  const result = [];
  if(m===1) return arr.map(el=>[el])
  arr.forEach((fixed, idx, origin)=>{
    const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)]
    const permu = getPermu(rest, m-1)
    const attach = permu.map(el=>[fixed, ...el])
    result.push(...attach)
  })
  return result;
}
const solution = (n, m, arr) =>{
  const permu = getPermu(arr, m);
  const answer = permu.map(el=>el.join(' ')).join('\n')
  return answer
}

console.log(solution(N, M, ARR))