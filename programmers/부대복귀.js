function solution(n, roads, sources, destination){
  const board = Array.from({length:n+1}, ()=>[])
  for(let [a,b] of roads){
    board[a].push(b);
    board[b].push(a);
  }

  const visited = Array.from({length:n+1}, ()=> Infinity);
  const bfs = (destination) => {
    const q = [destination];
    visited[destination] = 0;
    while(q.length){
      const curIdx = q.shift();
      const target  = board[curIdx];
      for(let newIdx of target){
        if(visited[curIdx]+1 < visited[newIdx]){
          visited[newIdx] = visited[curIdx]+1;
          q.push(newIdx);
        }
      }
    }
  }
  bfs(destination);
  const answer = sources.map(v=>{
    if(visited[v]===Infinity) return -1;
    else return visited[v]
  })
  return answer;
}

// const n = 3;
const n = 3;
const roads = [[1,2],[2,3]];
// const roads = [[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]];
const sources = [2,3];
// const sources = [1,3, 5];
const destination = 1;
// const destination = 5;
console.log(solution(n, roads, sources, destination));