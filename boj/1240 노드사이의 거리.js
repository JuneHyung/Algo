/**
 * 1240 노드사이의 거리
 * N개로 이루어진 트리가 주어지고 M개 두 노드쌍을 입력받을 때 두 노드 사이의 거리 출력
 * 첫줄 : N M
 * 다음 N-1개 줄에 트리 상에 연결된 두 점 사이의 거리가 주어짐.
 * 다음 M개의 노드 쌍이 주어짐.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 2',
  '2 1 2',
  '4 3 2',
  '1 4 3',
  '1 2',
  '3 2',
]
const [N, M] = input.shift().split(' ').map(Number)
const INFO = [];
for (let i = 0; i < N - 1; i++) INFO.push(input.shift().split(' ').map(Number))

const GRAPH = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }, () => 0))
const CONNECT = new Map();
for (let i = 1; i <= N; i++)CONNECT.set(i, []);
for (let i = 0; i < N - 1; i++) {
  const [a, b, w] = INFO[i];
  GRAPH[a][b] = w;
  GRAPH[b][a] = w;

  CONNECT.get(a).push(b);
  CONNECT.get(b).push(a);
}

const solution = (n, graph, node, connect) => {
  const visited = Array.from({ length: n + 1 }, () => false);
  let [start, end] = node;
  let sum = 0;
  const q = [[start, sum]];
  visited[start] = true;
  const bfs = () => {
    while (q.length !== 0) {
      const [curS, curW] = q.shift();
      const list = connect.get(curS);
      if (curS === end) return curW;
      for (let k = 0; k < list.length; k++) {
        const nextE = list[k];
        if (!visited[nextE]) {
          const nextW = curW + graph[curS][nextE];
          visited[nextE] = true;
          q.push([nextE, nextW]);
        }
      }
    }
  }

  const answer = bfs();
  return answer;
}

for (let t = 0; t < M; t++) {
  const NODE = input.shift().split(' ').map(Number)
  console.log(solution(N, GRAPH, NODE, CONNECT));
}