/**
 * 1939 중량제한
 * 각 다리마다 중량제한이 있어 초과하면 다리가 무너진다
 * 한 번의 이동에서 옮길 수 있는 물품들의 중량의 최대값을 구하시오.
 * 
 * N, M주어진다.
 * 다리 정보가 주어지고, 두 섬사이 여러개 다리가 있을 수 있다.
 * 모든 다리는 양방향.
 * 
 * 1. 메모리초과
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 3',
'1 2 2',
'3 1 3',
'2 3 2',
'1 3',
]
const [N, M] = input.shift().split(' ').map(Number)
const INFO = input.splice(0,M).map(el=> el.split(' ').map(Number))
const FAC = input.shift().split(' ').map(Number)

const solution = (n, m, info, fac) =>{
  const graph = Array.from({length: n+1},()=>[]);
  let max = Number.MIN_SAFE_INTEGER;
  for(const [a,b,w] of info){
    graph[a].push([b,w]);
    graph[b].push([a,w]);
    if(w>max) max = w;
  }
  
  const [st, ed] = fac;
  const bfs = (n, graph, st, ed, mid) => {
    let visited = Array.from({length:n+1},()=>false);
    let q = [st];
    while(q.length!==0){
      let cur = q.shift();
      visited[cur] = true;
      if(cur===ed) return true;
      for(let k=0;k<graph[cur].length;k++){
        let [next, weight] = graph[cur][k];
        if(!visited[next] && mid<=weight){
          visited[next] = true;
          q.push(next);
        }
      }
    }
    return false;
  }
  const search=(n, graph, st, ed, max) =>{
    let lt = 1;
    let rt = max;

    while(lt<=rt){
      let mid = Math.floor((lt+rt)/2);
      if(bfs(n, graph, st, ed, mid)){ lt = mid+1}
      else rt=mid-1
    }
    return rt;
  }

  const answer = search(n, graph, st, ed, max)
  return answer;
  // console.log(graph)

  // const arr = [...graph[st][ed], ...graph[ed][st]];
  // const min = Math.min(...arr)
  // return min

}

console.log(solution(N, M, INFO, FAC))
