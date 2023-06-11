/**
 * 15663 N과 M(9)
 * 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램
 * N개 자연수중 M개 고른 수열
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 2',
'9 7 9 1',
];
const [N, M]= input.shift().split(' ').map(Number)
const ARR = input.shift().split(' ').map(Number).sort((a,b)=>a-b)

const getPermu = (arr, m) =>{
  const result = [];
  if(m===1) return arr.map(el=>[el])
  arr.forEach((fixed, idx, origin)=>{
    const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
    const permu = getPermu(rest, m-1);
    const attach = permu.map(el=>[fixed, ...el])
    result.push(...attach)
  })
  return result;
}

const solution = (n, m, arr) =>{
  const permu = getPermu(arr, m);
  const answer = [...new Set(permu.map(el=>el.join(' ')))].join('\n')
  return answer;
}

console.log(solution(N, M, ARR))