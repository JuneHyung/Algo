/**
 * 11725 트리의 부모 찾기
 * 루트 없는 트리가 주어진다.
 * 트리루트를 1이라 정해졌을 떄, 각 노드의 부모를 구하는 프로그램을 작성하시오.
 * N과 트리상 연결된 두 정점이 주어진다.
 * 각 노드의 부모 노드 번호를 2번 부터 순서대로 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '7',
'1 6',
'6 3',
'3 5',
'4 1',
'2 4',
'4 7',
]
const N = Number(input.shift())
const INFO = input.map(el=> el.split(' ').map(Number));

const solution = (n, info) =>{
  const graph = Array.from({length:n+1}, ()=>[]);
  for(const [a,b] of info){
    graph[a].push(b);
    graph[b].push(a)
  }
// console.log(graph)
const visited = Array.from({length:n+1},()=>false);
const q = [1];
const parent = []

while(q.length!==0){
  const cur = q.shift();
  for(let node of graph[cur]){
    if(!visited[node]){
      visited[node] = true;
      parent[node] = cur;
      q.push(node);
    }
  }
}
const answer = parent.slice(2);
return answer.join('\n')
}

console.log(solution(N, INFO))