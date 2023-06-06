/**
 * 15650 N과 M (2)
 * 1~N 까지 배열로 M개의 중복이 없는 수열을 구하기.
 * 오름차순 정렬
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();
const input = '6 3'
const [N, M] = input.split(' ');

const getCombi = (arr, m) => {
  if(m===1)return arr.map(el=>[el]);
  const result = [];
  arr.forEach((fixed, idx, origin)=>{
    const rest = origin.slice(idx+1)
    const combi = getCombi(rest, m-1);
    const attach = combi.map(el=>[fixed, ...el])
    result.push(...attach)
  })
  return result;
}

const solution = (n, m) => {
  const arr = Array.from({length:n}, (_,idx)=>idx+1);
  const answer = getCombi(arr , m).map(el=>el.join(' '));
  return answer.join('\n')
}


console.log(solution(N, M));