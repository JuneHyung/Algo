/**
 * 모든 노드는 서로 다른 x값을 가진다
 * 같은레벨에 있는 노드는 같은 y를 가진다
 * 자식노드의 y는 항상 부모보다 작다
 * 부모노드의 좌측은 x가 부모보다 작고, 우측은 z가 크다.
 * 노드들로 구성된 이진트리를 전위 순회, 후위 순회한 결과를 2차원 배열에 순서대로 담아 return
 */

/**
 * 전위 후위 배열생성
 * nodeinfo로 idx+1을 키로하는 배열 생성 필요!
 * y가 가장 큰 게 root node - 정렬 필요
 * 부모보다 x가 작으면 좌측 크면 우측.
 */

function solution(nodeinfo) {
  const preOrder = [];
  const postOrder = [];

  let graph = new Map();
  nodeinfo.forEach((el,idx) => { 
    graph.set(idx + 1, el);
  })
  graph = [...graph].sort((a, b) => b[1][1] === a[1][1] ? a[1][0] - b[1][0] : b[1][1] - a[1][1]);

  const dfs = (graph, preOrder, postOrder) => { 
    console.log(graph[0]);
    const [k, v] = graph[0];
    const [x, y] = v;
    const leftChild = [];
    const rightChild = [];

    for (let i = 1; i < graph.length; i++) { 
      const [targetK, targetV] = graph[i];
      const [targetX, targetY] = targetV;
      if (targetX < x) leftChild.push(graph[i]);
      else rightChild.push(graph[i])
    }

    preOrder.push(k);
    if (leftChild.length !== 0) dfs(leftChild, preOrder, postOrder); 
    if (rightChild.length !== 0) dfs(rightChild, preOrder, postOrder); 
    postOrder.push(k);
  }
  // console.log(graph);
  dfs(graph, preOrder, postOrder);
  const answer = [preOrder, postOrder];
  return answer;
}

const nodeinfo = [[5, 3], [11, 5], [13, 3], [3, 5], [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]]
console.log(solution(nodeinfo))