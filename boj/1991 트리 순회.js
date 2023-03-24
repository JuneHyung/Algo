/**
 * 1991 트리 순회
 * 이진 트리를 입력받아 전위(preorder), 중위(inorder), 후위(postorder) 결과를 출력하자
 * 각 노드와 좌 우 노드가 차례로 입력됨.
 * 루트노드는 항상 A다
 * 없으면 .으로 표현.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '7',
'A B C',
'B D .',
'C E F',
'E . .',
'F . G',
'D . .',
'G . .',
]
const N = Number(input.shift())
const GRAPH = {};
for (const line of input) { 
  const [m, l, r] = line.split(' ')
  GRAPH[m] = [l, r];
}

const getTraversal = (L, graph, preOrder, inOrder, postOrder) => { 
  if (L==='.') return;
  const [left, right] = graph[L];
  preOrder.push(L);
  getTraversal(left, graph, preOrder,inOrder, postOrder);
  inOrder.push(L);
  getTraversal(right, graph, preOrder,inOrder, postOrder);
  postOrder.push(L);
}

const solution = (n, graph) => { 
  // console.log(graph);
  const preOrder = [];
  const inOrder = [];
  const postOrder = [];
  getTraversal('A', graph, preOrder, inOrder, postOrder)
  const answer = [preOrder.join(''), inOrder.join(''), postOrder.join('')].join('\n')
  return answer;
}

console.log(solution(N, GRAPH))