const solution = (info, edges) =>{
  let answer = Number.MIN_SAFE_INTEGER;
  const n = info.length
  const graph = Array.from({length:n}, ()=>[])
  for(let [a,b] of edges) graph[a].push(b);
  console.log(graph)

  function DFS (cur, sheep, wolf, possible){
      const possibleList = [...possible];
      const curIdx = possibleList.indexOf(cur);

      info[cur]===0? sheep++ : wolf++;
      answer = Math.max(answer, sheep);
      if(sheep===wolf) return;

      possibleList.push(...graph[cur]);
      possibleList.splice(curIdx, 1);

      for(next of possibleList){
        DFS(next, sheep, wolf, possibleList)
      }
  }

  DFS(0, 0, 0, [0]);
  return answer;
}

const info = [0,0,1,1,1,0,1,0,1,0,1,1];
const edges = [[0,1],[1,2],[1,4],[0,8],[8,7],[9,10],[9,11],[4,3],[6,5],[4,6],[8,9]];
console.log(solution(info, edges));