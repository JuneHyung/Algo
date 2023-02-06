/**
 * 2606 바이러스
 * 연결된 모든 컴퓨터가 바이러스에 걸린다.
 * 
 * 네트워크 연결정보가 주어질 때 1번컴퓨터를 통해 바이러스에 걸리게될 컴퓨터의 수 구하기.
 * 주의!
 * 1번컴퓨터를 통해 바이러스에 걸리는 컴퓨터의 수이기 때문에 1번을 제외해야함.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '7',
  '6',
  '1 2',
  '2 3',
  '1 5',
  '5 2',
  '5 6',
  '4 7',
]
const N = Number(input.shift())
const M = Number(input.shift())
const connect = input.map(el => el.split(' ').map(Number));
const solution = (n, m, input) => {
  const graph = new Map();

  for (let i = 1; i <= n; i++) graph.set(i, []);
  for (const [a, b] of input) {
    graph.get(a).push(b)
    graph.get(b).push(a)
  }
  const visited = Array.from({ length: n + 1 }, () => false);
  let answer = 0;
  // console.log(graph);
  const dfs = (v) => {
    if (visited[v]) return;
    visited[v] = true;
    answer++;
    graph.get(v).forEach(el => {
      if (!visited[el]) dfs(el);
    })
  }

  dfs(1)
  // console.log(answer);
  return answer - 1;
}

console.log(solution(N, M, connect))