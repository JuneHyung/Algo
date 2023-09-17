/**
 * 10974 모든 순열
 * 1~N까지 순열을 사전순으로 출력
 */
// const fs=require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = '3';
const N = Number(input);
const getPermu = (arr, k) =>{
  if(k===1) return arr.map(el=>[el])
  const result = [];
  arr.forEach((fixed, idx, origin) =>{
    const rest = [...origin.slice(0,idx), ...origin.slice(idx+1)];
    const permu = getPermu(rest, k-1);
    const attach = permu.map(el=>[fixed, ...el])
    result.push(...attach)
  })
  return result;
}
const solution = (n)=>{
  const arr = Array.from({length:n},(_,i)=>i+1)
  const permu = getPermu(arr, n);
  const answer = permu.map(el=>el.join(' ')).join('\n')
  return answer
}
console.log(solution(N))