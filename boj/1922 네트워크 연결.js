/**
 * 1922 네트워크 연결
 * a - b, b - c면 a - c다.
 * 각 컴퓨터를 연결하는데 비용이 주어졌을 때 모든 컴퓨터를 연결하는데 필요한 최소비용 출력.
 * 첫 줄 컴퓨터 수 N
 * 연결할 수 있는 선의 수 M
 * 모든 컴퓨터를 연결할 수 없는 경우는 없다.
 * 
 * Kruskal MST
 * 1. 그래프 간선들을 가중치의 오름차순 정렬
 * 2. 정렬된 리스트에서 순서대로 사이클을 형성하지 않는 간선 선택
 * 2-1. 가장 낮은 가중치를 먼저 선택.
 * 2-2. 사이클을 형성하는 간선을 제외
 * 3. 해당 간선을 현재 MST의 집합에 추가
 * 
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// 23
const input = [
  '6',
  '9',
  '1 2 5',
  '1 3 4',
  '2 3 2',
  '2 4 7',
  '3 4 6',
  '3 5 11',
  '4 5 3',
  '4 6 8',
  '5 6 8',
]
const N = Number(input.shift())
const M = Number(input.shift())
const INFO = input.map(el => el.split(' ').map(Number));

class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
  }

  union(n1, n2) {
    const rootA = this.find(n1);
    const rootB = this.find(n2);
    if (rootA < rootB) this.parent[rootB] = rootA;
    else this.parent[rootA] = rootB;
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


const solution = (n, m, info) => {
  info.sort((a, b) => a[2] - b[2]);
  let answer = 0;
  const disjointSet = new DisjointSet(n);
  for (let i = 0; i < info.length; i++) {
    const [from, to, val] = info[i];
    if (!disjointSet.connect(from, to)) {
      disjointSet.union(from, to);
      answer += val;
    }
  }
  return answer;
}


console.log(solution(N, M, INFO))