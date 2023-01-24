/** 1260 DFS와 BFS */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const [N, M, V] = input[0].split(' ').map(el=>Number(el));
// const arr = [];
// for(let i=1;i<input.length;i++){
//   arr.push(input[i].split(' ').map(el=>Number(el)))
// }

const dfs = (graph, V, visited, result) => {
  visited[V] = true;
  result.push(V);
  for(let i=1;i<graph.length;i++){
    if(graph[V][i]===1 && !visited[i]) dfs(graph, i, visited, result)
  }
  return result;
}
const bfs = (graph, V, visited, result) =>{
  const q = [V];
  result.push(V);
  while(q.length!==0){
    const cur = q.shift();
    visited[cur] = true;
    for(let i=1;i<graph.length;i++){
      if(graph[cur][i]===1 && !visited[i]){
        visited[i] = true; 
        q.push(i);
        result.push(i);
      }
    }
  }
  return result;
}
const solution = (N, M, V, arr) =>{
  const graph = Array.from({length:N+1}, ()=>Array.from({length:N+1},()=>0));
  
  for(const [a, b] of arr){
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  // console.log(graph)
  const dfsVisited = Array.from({length:N+1}, ()=>false);
  const bfsVisited = Array.from({length:N+1}, ()=>false);
  
  const dfsResult = dfs(graph, V, dfsVisited, []);
  const bfsResult = bfs(graph, V, bfsVisited, []);

  // console.log(dfsResult.join(' '))
  // console.log(bfsResult.join(' '))
  return [dfsResult.join(' '), bfsResult.join(' ')].join('\n')
}

const [N, M, V] = [4, 5, 1];
const arr = [[1, 2], [1, 3], [1, 4], [2, 4], [3, 4]];
console.log(solution(N, M, V, arr));