/**
 * 4803 트리
 * 그래프는 정점과 간선으로 이루어져 있다. 
 * 트리는 사이클이 없는 연결 요소이다. 정점이 n개면 간선이 n-1개.
 * 처음에 정점개수n과 간선개수m이 주어진다.
 * 그다음 연결 정보가 주어진다.
 * 입력의 마지막엔 00이 주어진다.
 * 
 * 트리가 없으면 "No trees"
 * 1개면 There is one tree
 * T개면 A forest of T tress를 테스트케이스 번호와 함께 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6 3',
'1 2',
'2 3',
'3 4',
'6 5',
'1 2',
'2 3',
'3 4',
'4 5',
'5 6',
'6 6',
'1 2',
'2 3',
'1 3',
'4 5',
'5 6',
'6 4',
'0 0',
];


const solution = (N, M, graph) => {
  const visited = Array.from({length: N},()=>false);
  let result = 0;
  // console.log(graph)
  const dfs = (L, parent) => {
    visited[L] = true;
    for(let i=0;i<graph[L].length;i++){
      const cur = graph[L][i];
      if(cur===parent) continue;
      if(visited[cur]) return false;
      if (!dfs(cur, L)) return false;
    }
    return true;
  }

  for(let i=1;i<=N;i++){
    if(!visited[i]){
      if(dfs(i, 0)) result++;
    }
  }
  return result;
}

let t = 1;
let idx = 0;
while(true){
  const [N, M] = input[idx].split(' ').map(Number)
  
  if(N===0 && M===0) break;

  const graph = Array.from({length: N+1},()=>[])
  for(let i=0;i<M;i++){
    const [a,b] = input[idx+i+1].split(' ').map(Number);
    graph[a].push(b)
    graph[b].push(a)
  }
  const cnt = solution(N, M, graph);
  const answerMessage = cnt===0 ? 'No trees.' : cnt===1 ? 'There is one tree.' : `A forest of ${cnt} trees.`
  console.log(`Case ${t}: ${answerMessage}`);
  idx+=M+1;
  t++;
}