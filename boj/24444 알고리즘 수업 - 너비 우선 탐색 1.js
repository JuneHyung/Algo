/**
 * 24444 알고리즘 수업 - 너비 우선 탐색 1
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 5 1',
'1 4',
'1 2',
'2 3',
'2 4',
'3 4',
]
const [N, M, R] = input.shift().split(' ').map(Number)
const INFO = input.map(el=>el.split(' ').map(Number));

const solution = (n, m, r, info) => {
  const graph = Array.from({length:n+1},()=> [])
  const visited = Array.from({length:n+1},()=> 0)
  const answer = Array.from({length:n},()=> 0);

  for(let i=0;i<m;i++){
    const [u, v] = info[i];
    graph[u].push(v)
    graph[v].push(u)
  }
  for(let i=0;i<n;i++){
    graph[i].sort((a,b)=>a-b)
  }
  const q = [r]
  visited[r] = 1;
  let step = 1;
  while(q.length!==0){
    const cur = q.shift();
    for (const next of graph[cur]) {
      if (!visited[next]) {
          q.push(next);
          step++;
          visited[next] = step;
      }
  }
  }

  return visited.slice(1).join('\n');
}
console.log(solution(N, M, R, INFO))