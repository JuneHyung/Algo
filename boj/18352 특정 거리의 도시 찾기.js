/**
 * 18352 특정 거리의 도시 찾기
 * 1~N도시까지 M개의 단방향 도로가 있다. 모든 거리는 거리가 1이다.
 * X로부터 출발해 도달할 수 있는 모든 도시 중 최단 거리가 정확히 K인 모든 됫들의 번호를 출력.
 * 출발도시X에서 출발도시X로 가는 최단 거리는 항상 0
 * 
 * 도시개수N, 도로개수 M, 거리정보K, 출발도시번호 X가 주어진다.
 * 단방향 도로정보가 주어진다.
 * 
 * 최단거리가 K인 모든 도시의 번호를 오름차순으로 출력.
 * 없으면 -1.
 */

// const fs= require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 3 2 1',
'1 2',
'1 3',
'1 4',
]

const [N, M, K, X] = input.shift().split(' ').map(Number);
const GRAPH = Array.from({length:N+1}, ()=>[])
const INFO = input.map(el=>el.split(' ').map(Number))

for(const [a,b] of INFO)GRAPH[a].push(b)

const solution = (n, m, k, x, graph) => {
  const answer = new Set();
  const visited = Array.from({length:n+1},()=>-1);

  const q = [x];
  visited[x] = 0;

  while(q.length!==0){
    const city = q.shift();
    if(visited[city]===k){ answer.add(city); continue;}
    for(const next of graph[city]){
      if(visited[next] === -1){
        q.push(next)
        visited[next] = visited[city] + 1;
      }
    }
  }
  return answer.size===0 ? -1 : [...answer].sort((a,b)=>a-b).join('\n');
}

console.log(solution(N,M,K,X,GRAPH))