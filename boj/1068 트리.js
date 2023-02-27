/**
 * 1068 트리
 * 리프노드 - 자손이 없는 노드
 * 트리가 주어졌을 떄 노드 하나를 지울 것인데 남은 트리에서 리프 노드의 개수를 구하는 프로그램 작성.
 * 첫줄 : * 트리의 노드 갯수 N
 * 둘째줄 : 0~N-1까지 노드의 각 부모가 주어짐.
 * 없으면 -1로 주어진다.
 * 셋째줄 : 지울 노드가 주어진다.
 * 
 * 1. 0번이 루트가 아닐 수 있어 틀림.
 * 2. 0대신 arr에서 -1 찾아서 넣어줌. 2% 실패
 * 3. 지우는 노드가 root노드면 0리턴하게 수정.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = [
//   '5',
// '-1 0 0 1 1',
// '2',
// ]
const input = [
  '2',
'-1 0',
'0',
]
const N = Number(input.shift())
const ARR = input.shift().split(' ').map(Number)
const D = Number(input.shift())

const dfs = (d, n, graph) => {
  for (let i = 0; i < n; i++) { 
    if (graph[i].includes(d)) { 
      const idx = graph[i].indexOf(d);
      graph[i].splice(idx, 1);
      for (let j = 0; j < graph[d].length; j++) { 
        dfs(graph[d][j], n, graph);
      }
      break;
    }
  }
}

const getLeafNode = (node, graph) => {
  if (graph[node].length === 0) return 1;
  return graph[node].reduce((acc, cur)=> acc + getLeafNode(cur, graph), 0)
}

const solution = (n, arr, d) => {
  const root = arr.indexOf(-1)
  if (root === d) return 0;
  const graph = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) { 
    if(arr[i]!==-1) graph[arr[i]].push(i);
  }
  dfs(d, n, graph);
  
  const answer = getLeafNode(root, graph)
  // console.log(answer);
  return answer;
}

console.log(solution(N, ARR, D))