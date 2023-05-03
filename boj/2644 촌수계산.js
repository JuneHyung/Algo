/**
 * 2644 촌수계산
 * 전체사람 수 n
 * 계산해야할 두사람의 번호
 * 관계수 m
 * 관계정보
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '9',
'7 3',
'7',
'1 2',
'1 3',
'2 7',
'2 8',
'2 9',
'4 5',
'4 6',
]
const N = Number(input.shift())
const [ST, ED] = input.shift().split(' ').map(Number)
const M = Number(input.shift())
const INFO = input.map(el=>el.split(' ').map(Number))

const solution = (n, m, st, ed, info) =>{
  const graph = Array.from({length:n+1},()=>[]);
  const visited =Array.from({length:n+1},()=>false);
  for(const [a,b] of info){
    graph[a].push(b)
    graph[b].push(a)
  }
  
  const q = [st];
  let cnt = 0;
  while(q.length!==0){
    cnt++;
    const len = q.length;
    for(let i=0;i<len;i++){
      const cur = q.shift();
      visited[cur] = true;
      for(const next of graph[cur]){
        if(!visited[next]){
          if(next===ed) return cnt;
          q.push(next);
        }
      }
    }
  }
  return -1;
}

console.log(solution(N, M, ST, ED, INFO))