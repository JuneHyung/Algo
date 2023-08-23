/**
 * 가장 먼 노드
 * 1번 노드에서 가장 멀리 떨어진 노드 갯수 구하기.
 * 가장 멀리 떨어진 노드는 최단 경로로 이동해을 때 간선의 갯수가 가장 많은 노드
 * vertex = edge parameter
 */
const solution = (n, edge) =>{
  const visited = Array.from({length:n+1}, ()=>false);
  const lines= Array.from({length:n+1}, ()=>Infinity);
  const graph = Array.from({length:n+1},()=>[]);

  for(const [a, b ]of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }
  // console.log(grpah)

  const q = [[1, 0]]
  let max = 0;

  while(q.length!==0){
    const [cur, cnt] = q.shift();
    lines[cur] = Math.min(lines[cur], cnt);
    max = Math.max(lines[cur], max);

    for(const next of graph[cur]){
      if(!visited[next]){
        visited[next] = true;
        q.push([next, cnt+1])
      }
    }
  }

  const answer = lines.filter(el=>el===max).length;
  return answer;
}

const n =6;
const edge = 	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]
console.log(solution(n, edge))