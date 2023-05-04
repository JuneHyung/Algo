/**
 * 1707 이분 그래프
 * 정점의 집합을 둘로 분할해 각 집합에 속한 정점끼리는 서로 인접할 수 있을 때  이분 그래프라 부른다.
 * 이분그래프인지 판별
 * 
 * 테케 수 K
 * 정점개수 V, 간선 개수 E
 * 정보
 * 
 * (같은 로직으로 풀었으나 시간초과나서 정답 첨부)
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const K = +input.shift();
const SET_A = 1;
const SET_B = 2;

const dfs = (start, graph, visited) => {
  visited[start] = SET_A;
  const stack = [start];
  while (stack.length) {
    const node = stack.pop();
    const curSet = visited[node];
    const nextSet = curSet === SET_A ? SET_B : SET_A;
    if (!graph[node]) {
      continue;
    }
    for (let i = 0; i < graph[node].length; i++) {
      const adjNode = graph[node][i];
      if (visited[adjNode] === curSet) {
        return false;
      }
      if (!visited[adjNode]) {
        visited[adjNode] = nextSet;
        stack.push(adjNode);
      }
    }
  }
  return true;
};

const output = Array(K).fill('YES');

for (let i = 0; i < K; i++) {
  const [V, E] = input.shift().split(' ').map(Number);
  const edges = input.splice(0, E).map(v => v.split(' ').map(Number));
  const graph = edges.reduce((acc, v) => {
    const from = v[0];
    const to = v[1];
    if (acc[from]) {
      acc[from].push(to);
    } else {
      acc[from] = [to];
    }
    if (acc[to]) {
      acc[to].push(from);
    } else {
      acc[to] = [from];
    }
    return acc;
  }, {});
  
  const visited = Array(V + 1).fill(0);
  for (let j = 1; j <= V; j++) {
    if (visited[j]) {
      continue;
    }
    if (!dfs(j, graph, visited)) {
      output[i] = 'NO';
      break;
    }
  }
}

console.log(output.join('\n'));