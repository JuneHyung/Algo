/**
 * 14621 나만 안되는 연애
 * 1. 사심 경로는 남초 대학교와 여초 대학교들을 연결하는 도로로만 이루어져 있다.
 * 2. 어떤 대학교에서든 모든 대학교로 이동이 가능한 경로이다.
 * 3. 경로의 길이는 최단 거리가 되어야 한다.
 * 
 * 사심경로 길이를 구하자.
 * 모든 학교를 연결하는 경로가 없을 경우 -1을 출력.
 * 정렬 잊지말자.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 7',
  'M W W W M',
  '1 2 12',
  '1 3 10',
  '4 2 5',
  '5 2 5',
  '2 5 10',
  '3 4 3',
  '5 4 7',
]
const [N, M] = input.shift().split(' ').map(Number)
const GLIST = input.shift().split(' ');
const INFO = input.map(el => el.split(' ').map(Number));


class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
  }
  union(n1, n2) {
    const rootA = this.find(n1)
    const rootB = this.find(n2)
    if (rootA < rootB) this.parent[rootB] = rootA
    else this.parent[rootA] = rootB
  }
  find(node) {
    if (this.parent[node] === node) return node;
    this.parent[node] = this.find(this.parent[node])
    return this.parent[node];
  }
  connect(n1, n2) {
    return this.find(n1) === this.find(n2)
  }
}

const solution = (n, m, gender, info) => {
  let answer = 0;
  info.sort((a, b) => a[2] - b[2]);
  const disjointSet = new DisjointSet(n)
  const visited = Array.from({ length: n }, () => false);
  for (let i = 0; i < m; i++) {
    const [from, to, val] = info[i];
    if (!disjointSet.connect(from, to) && gender[from - 1] !== gender[to - 1]) {
      disjointSet.union(from, to)
      visited[from - 1] = true;
      visited[to - 1] = true;
      answer += val;
    }
  }

  answer = visited.filter(el => el === true).length === n ? answer : -1;

  return answer;
}
console.log(solution(N, M, GLIST, INFO));