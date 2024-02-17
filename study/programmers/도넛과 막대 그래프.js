const solution = (edges) =>{
  const n = Math.max(...edges.flat(2))
  const graph = Array.from({length: n+1},()=>[]);

  for(const [a,b] of edges){
    graph[a].push(b)
  }
  console.log(graph)
}

const edges = [[2, 3], [4, 3], [1, 1], [2, 1]];
console.log(solution(edges))