/**
 * 24480 알고리즘 수업 - 깊이 우선 탐색 2
 * N개 정점과 M개 간서으로 구성된 무방향 그래프가 주어진다.
 * 1~N까지 모든 가중치는 1.
 * R에서 시작해 깊이 우선탐색으로 노드를 방문할때 노드 방문순서를 출력.
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, R] = input.shift().split(' ').map(Number);
const arr = input.map((v) => v.split(' ').map(Number));
const graph = [...Array(N + 1)].map(() => []);
const visited = Array(N).fill(0);
let depth = 1;

arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

graph.forEach((v) => v.sort((a, b) => b - a));

const dfs = (node) => {
  if (!visited[node - 1]) {
    visited[node - 1] = depth;
    depth++;
    for (const next of graph[node]) dfs(next);
  }
};

dfs(R);

console.log(visited.join('\n'));