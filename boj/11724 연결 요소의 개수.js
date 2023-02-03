/**
 * 11724 연결 요소의 개수
 * 방향 없는 그래프가 주어질 떄 연결 요소의 개수를 구하시오.
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const input = [
  '6 5',
  '1 2',
  '2 5',
  '5 1',
  '3 4',
  '4 6',
]


const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map(el => el.split(' ').map(Number));

const solution = (n, m, nodeList) => {
  const graph = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0))
  for (const node of nodeList) {
    const [a, b] = node
    graph[a][b] = 1;
    graph[b][a] = 1;
  }
  const visited = Array.from({ length: n }, () => false);
  let cnt = 0;
  const dfs = (v) => {
    if (visited[v]) return;
    visited[v] = true;
    for (let i = 1; i < N + 1; i++) {
      if (graph[v][i] === 1 && !visited[i]) {
        dfs(i);
      }
    } return;
  }

  for (let i = 1; i < N + 1; i++) {
    if (!visited[i]) {
      dfs(i);
      cnt++;
      // console.log(visited);
      // console.log(cnt);
    }
  }
  return cnt;

}


console.log(solution(N, M, arr));