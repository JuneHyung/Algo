function solution(a, edges) {
  let tree = [];
  makeTree(a, tree,edges);
  const stack = [[0, -1]];
  const visited = new Array(a.length).fill(false);
  // console.log(tree);
  var answer = 0n;
  while (stack.length != 0) {
    const [start, parent] = stack.pop();
    if (visited[start]) {
      a[parent] += a[start];
      answer += BigInt(Math.abs(a[start]));
      continue;
    }
    stack.push([start, parent]);
    visited[start] = true;
    tree[start].forEach((el) => {
      if (!visited[el]) stack.push([el, start]);
    })
    console.log(stack);
    console.log(visited);
    console.log(answer);
    console.log();
  }
  
  return a[0] ? -1 : answer;
}
function makeTree(a, tree,edges) {
  for (let i = 0; i < a.length; i++) {
    tree.push([]);
  }
  for (let i = 0; i < edges.length; i++) {
    tree[edges[i][0]].push(edges[i][1]);
    tree[edges[i][1]].push(edges[i][0]);
  }
}
let a =[0,1,0]
let edges = [[0,1],[1,2]]
console.log(solution(a, edges));