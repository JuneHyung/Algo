const solution = (n, roads, sources, destination) => {
  var answer = [];
  const graph = Array.from({ length: n+1 }, () => []);
  const result = Array.from({ length: n+1 }, () => Infinity);
  
  for (const [a, b] of roads) { 
    graph[a].push(b);
    graph[b].push(a);
  }
  
  console.log(result);
  const BFS = (V) => {
    const q = [V];
    result[V] = 0;
    while (q.length > 0) { 
      const cur = q.shift();
      for (let target of graph[cur]) { 
        if (result[cur] + 1 < result[target]) { 
          result[target] = result[cur] + 1;
          q.push(target);
          console.log(result)
        }
      }
    }
  }
    
  BFS(destination);
  answer = sources.map(value=>result[value]===Infinity ? -1 : result[value])
  return answer;
}

// const n = 3;
// const roads = [[1, 2], [2, 3]];
// const sources = [2, 3];
// const destination = 1;

const n = 5;
const roads = [[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]];
const sources = [1, 3, 5]	;
const destination = 5;
console.log(solution(n, roads, sources, destination))// [1,2]