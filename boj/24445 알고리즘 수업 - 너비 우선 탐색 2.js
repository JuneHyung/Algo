/**
 * 24445 알고리즘 수업 - 너비 우선 탐색 2
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
const [N, M, R] = input[0].split(' ').map(Number)
const INFO = input.slice(1).map(el=>el.split(' ').map(Number));

const solution = (n, m, r, info) =>{
  const graph = Array.from({length:n+1},()=>[])
  for(const [a, b] of info){
    graph[a].push(b)
    graph[b].push(a)
  }
  
  graph.forEach(el=>el.sort((a,b)=>b-a))
  
  const answer = Array.from({length:n+1},()=>0)
    

  const bfs = (v) => {
    const q = [v];
    const visited = Array.from({length:n+1},()=>false)
    visited[v] = true;
    let order = 0;
    
    while(q.length!==0){
      const cur = q.shift();
      order++;
      answer[cur] = order;

      for(const next of graph[cur]){
        if(!visited[next]){
          visited[next] = true;
          q.push(next);
        }
      }
    }
  }

  bfs(r)
  return answer.slice(1).join('\n')
}
console.log(solution(N, M, R, INFO))