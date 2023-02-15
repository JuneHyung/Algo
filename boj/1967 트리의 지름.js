/**
 * 1967 트리의 지름
 * 트리는 사이클이 없는 무방향 그래프다.
 * 어떤 두 노드를 선택해도 둘 사이 경로가 항상 하나만 존재.
 * 트리의 지름은 트리에 존재하는 모든 경로들 중에서 가장 긴 것.
 * 루트가 있는 트리를 가중치가 있는 간선들로 줄 때 트리의 지름을 구하기.
 * 
 * 첫 번째 : 부모, 두 번째 자식, 세번째 가중치
 * 루트노드는 항상 1
 * 
 * 무작위 점에서 가장 멀리 있는 점을 구한 뒤, 그 점에서 한번 더 가장 멀리있는 점과의 거리가 트리의 지름.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '12',
  '1 2 3',
  '1 3 2',
  '2 4 5',
  '3 5 11',
  '3 6 9',
  '4 7 1',
  '4 8 7',
  '5 9 15',
  '5 10 4',
  '6 11 6',
  '6 12 10',
]

const N = Number(input.shift())
const MAP = input.map(el => el.split(' ').map(Number))


const solution = (n, info) => {
  const graph = Array.from({ length: n + 1 }, () => [])

  for (const [P, C, V] of info) {
    graph[P].push([C, V])
    graph[C].push([P, V])
  }
  // console.log(graph)

  // far의 상태를 계속 업데이트 시켜 far을 리턴
  // 1을 넣었을 때 가장 먼 node를 가지고, 해당 노드에서 가장 먼 노드를 다시 구한다.
  const getFarNode = (node) => {
    const visited = Array.from({ length: n + 1 }, () => false);
    const q = [[node, 0]];
    let far = { node: 0, dist: 0 };

    while (q.length !== 0) {
      const [curNode, curDist] = q.shift();
      if (visited[curNode]) continue;
      visited[curNode] = true;

      if (far.dist < curDist) far = { node: curNode, dist: curDist };
      for (const [nextNode, nextDist] of graph[curNode]) {
        q.push([nextNode, curDist + nextDist]);
      }
    }
    return far;
  }
  const farNode = getFarNode(1);
  const answer = getFarNode(farNode.node);
  return answer.dist;

}

console.log(solution(N, MAP))