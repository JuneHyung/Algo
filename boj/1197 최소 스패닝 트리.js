/**
 * 1197 최소 스패닝 트리
 * 최소 스패닝 트리는, 주어진 그래프의 모든 정점들을 연결하는 부분 그래프 중에서 그 가중치의 합이 최소인 트리
 * 정점 개수 V, 간선개수 E
 * 간선의 정보 A, B, C - from, to, val
 * 최소 스패닝 트리의 가중치를 출력
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin')
const input = [
  '3 3',
  '1 2 1',
  '2 3 2',
  '1 3 3',
]
const [V, E] = input.shift().split(' ').map(Number)
const INFO = input.map(el => el.split(' ').map(Number));

class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
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
    return this.find(n1) === this.find(n2)
  }
}

const solution = (v, e, info) => {
  info.sort((a, b) => a[2] - b[2]);
  let answer = 0;
  const disjointSet = new DisjointSet(v);
  for (let i = 0; i < info.length; i++) {
    const [from, to, val] = info[i];

    if (!disjointSet.connect(from, to)) {
      disjointSet.union(from, to)
      answer += val
    }
  }
  return answer;
}

console.log(solution(V, E, INFO))