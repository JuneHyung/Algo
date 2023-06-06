/**
 * 15649 N과 M (1)
 * 1~N까지 배열로 M개의 수열 출력
 */
// const fs =require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim()
const input = 
  '3 2'

const [N, M] = input.split(' ').map(Number);

const getPermu = (arr, m) => {
  if(m===1) return arr.map(el=>[el]);
  const result = [];
  arr.forEach((fixed, idx, origin)=>{
    const rest = [...origin.slice(0, idx), ...origin.slice(idx+1)];
    const permu = getPermu(rest, m-1);
    const attach = permu.map((el)=>[fixed, ...el]);
    result.push(...attach)
  })
  return result;
}
const solution = (n, m) =>{
  const arr = Array.from({length:n},(_,i)=>i+1);
  const answer = getPermu(arr , m).map(el=>el.join(' '));
  return answer.join('\n')
}

console.log(solution(N, M))