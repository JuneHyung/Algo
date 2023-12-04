/**
 * 16928 뱀과 사다리 게임
 * 주사위를 조작해 원하는 수가 나오게 만들 수 있다면, 최소 몇 번만에 도착할 수 있을까.
 * 넘어가면 이동 불가
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '3 7',
'32 62',
'42 68',
'12 98',
'95 13',
'97 25',
'93 37',
'79 27',
'75 19',
'49 47',
'67 17',
]
const [N, M] = input[0].split(' ').map(Number);
const GRAPH = Array.from({length:101},(_,i)=>i);
const INFO = input.slice(1).map(el=>el.split(' ').map(Number)).sort((a,b)=>{
    if(a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
    else return a[1] - b[1];
  })
for(const [a,b] of INFO)GRAPH[a] = b;
// const LADDERS = input.slice(1, N+1).map(el=>el.split(' ').map(Number)).sort((a,b)=>{
//   if(a[0] > b[0]) return 1;
//   else if (a[0] < b[0]) return -1;
//   else return a[1] - b[1];
// })
// const SNAKES = input.slice(N+1).map(el=>el.split(' ').map(Number)).sort((a,b)=>{
//   if(a[0] > b[0]) return 1;
//   else if (a[0] < b[0]) return -1;
//   else return a[1] - b[1];
// })

const solution = (n, m, graph) => {
  
  const visited = Array.from({length:101}, ()=>-1);
  const q = [];
  q.push(1);
  visited[1] = 0;

  while(q.length!==0){
    const cur = q.shift();
    for(let k=1;k<=6;k++){
      let next = cur + k;
      if(next >100) continue;
      next = graph[next];
      if(visited[next]<0){
        visited[next]=visited[cur]+1;
        q.push(next);
      }
    }
  }
  return visited[100];
}
// console.log(solution(N, M, LADDERS, SNAKES))
console.log(solution(N, M, GRAPH))