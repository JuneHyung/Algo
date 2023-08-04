/**
 * 24479 알고리즘 수업 - 깊이우선탐색1
 * N개 정점과 M개 간선으로 구성된 무방향 그래프가 주어진다.
 * 1~N번이고 모든 간선의 가중치는 1.
 * R에서 시작해 dfs로 방문하는 경우 방문순서 출력
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
const [N, M, R] = input.shift().split(' ').map(Number);
const ARR = input.map(el=>el.split(' ').map(Number))
const GRAPH = Array.from({length: N+1},()=>[]);

for(const [a, b] of ARR){
  GRAPH[a].push(b)
  GRAPH[b].push(a)
}

const solution = (n, m, r, graph) =>{
  const visited = Array.from({length:n+1},()=>false)
  graph.forEach((e)=> e.sort((a,b)=>a-b));
  let cnt = 1;
  const answer = Array.from({length:n},()=>0)
  
  const dfs = (v) =>{
    visited[v] = true;
    answer[v-1] = cnt++;
    for(let next of graph[v]){
      if(visited[next]) continue;
      dfs(next)
    }
  }

  dfs(r)

  return answer.join('\n');
}

console.log(solution(N, M, R, GRAPH))