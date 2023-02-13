/**
 * 16398 행성 연결
 * 엠페러 윤석은 모든 행성을 연결하면서 플로우 관리 비용을 최소로 하려한다.
 * 모든 행성을 연결했을 때, 최소 플로우의 관리비용을 출력한다.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '3',
  '0 2 3',
  '2 0 1',
  '3 1 0',
]
const N = Number(input.shift())
const MAP = input.map(el => el.split(' ').map(Number));


class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }
  union(n1, n2) {
    const rootA = this.find(n1);
    const rootB = this.find(n2);
    if (rootA < rootB) this.parent[rootB] = rootA
    else this.parent[rootA] = rootB
  }
  find(node) {
    if (this.parent[node] === node) return node;
    this.parent[node] = this.find(this.parent[node]);
    return this.parent[node];
  }
  connect(n1, n2) {
    return this.find(n1) === this.find(n2);
  }
}

const solution = (n, board) => {
  let answer = 0;
  const disjointSet = new DisjointSet(n);
  const info = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      info.push([i, j, board[i][j]])
    }
  }
  info.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < info.length; i++) {
    const [from, to, val] = info[i];
    // console.log(from, to, val);
    if (!disjointSet.connect(from, to)) {
      disjointSet.union(from, to)
      answer += val;
    }
  }
  return answer;
}

console.log(solution(N, MAP))