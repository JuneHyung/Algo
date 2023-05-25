/**
 * 13164 행복 유치원
 * N명의 원생들을 키 순서대로 일렬로 줄 세우고 K개 조로 나누려 한다.
 * 각 조에는 적어도 한명 있어야 하며, 같은 조에 속한 원생들은 서로 인접해 있어야 한다.
 * 조별 인원 수 가 같을 필요는 없다.
 * 비용은 각 조에서 가장큰 원생과 작은 원생의 키 차이 만큼 든다.
 * K개 조에 대해 비용의 합을 최소로 하고 싶어한다.
 * 최소비용을 구하자.
 * 
 * 원생 수 N, 조 개수 K
 * 왼쪽 원생이 우측 원생보다 크지 않다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '7 3',
'1 3 5 6 10 11 16',
]
const [N, K] = input.shift().split(' ').map(Number)
const INFO = input.shift().split(' ').map(Number)

const solution = (n,k,info) =>{
  console.log(info);
  let answer= 0;
  const diff = Array.from({length:n},()=>0)
  for(let i=0;i<n-1;i++) diff[i] = info[i+1]-info[i];
  console.log(diff);
  diff.sort((a,b)=>a-b);
  for(let i=0;i<diff.length-(k-1);i++) answer += diff[i];
  return answer;
}
console.log(solution(N, K, INFO))