/**
 * 1325 효율적인 해킹
 * N개 컴퓨터로 이루어져 있다.
 * 한번의 해킹으로 여러개 컴퓨터 해킹이 가능하다.
 * 신뢰하는 관계와 신뢰하지 않는 관계가 있는데, A가 B를 신뢰하면 B해킹시 A도 해킹가능.
 * 신뢰관계가 주어졌을때 한 번에 가장 많은 컴퓨터를 해킹할 수 있는 컴퓨터의 번호를 출력.
 * 한 번에 가장 많은 컴퓨터를 해킹할 수 있는 컴퓨터의 번호를 오름차순 출력.
 * 시간초과
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '2 2',
'1 2',
'2 1',
]
const [N, M] = input.shift().split(' ').map(Number)
const INFO = input.map(el=>el.split(' ').map(Number));


const solution = (n, m, info) =>{
  const graph =Array.from({length:n+1},()=>[])
  for(const [a, b] of info) graph[a].push(b)
  console.log(graph);
  let max = 0;
  let answer =Array.from({length:n+1},()=>[])

  const dfs = (L, visited) => {
    visited[L] = true;
    for(const cur of graph[L]){
      if(!visited[cur]){
        answer[cur]++;
        dfs(cur, visited)
      }
    }
  }

  for(let i=1;i<=n;i++){
    const visited = Array.from({length:n+1},()=>false)
    dfs(i, visited)
  }
  max = Math.max(max, ...answer);

  let result = '';
  for(let i=1;i<=n;i++){
    if(max===answer[i]) result += `${i} `;
  }
  
  return result;
}

console.log(solution(N, M, INFO))