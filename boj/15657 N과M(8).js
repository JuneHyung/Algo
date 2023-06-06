/**
 * 15657 N과 M(8)
 * 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램
 * N개 자연수중 N개 고른 수열
 * 같은수 여러번 가능
 * 고른 수열은 비 내림차순
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 2',
'9 8 7 1',
];
const [N, M]= input.shift().split(' ').map(Number)
const ARR = input.shift().split(' ').map(Number).sort((a,b)=>a-b)

const getPermu = (arr, m) =>{
  const result = [];
  if(m===1) return arr.map(el=>[el])
  arr.forEach((fixed, idx, origin)=>{
    const rest = origin.slice(idx);
    const permu = getPermu(rest, m-1);
    const attach = permu.map(el=>[fixed, ...el])
    result.push(...attach)
  })
  return result;
}

const solution = (n, m, arr) =>{
  const permu = getPermu(arr, m);
  const answer = permu.map(el=>el.join(' ')).join('\n');
  return answer;
}

console.log(solution(N, M, ARR))