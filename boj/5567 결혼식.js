/**
 * 5567 결혼식
 * 동기 중 자신의 친구와 친구의 친구를 소개하기로 했다.
 * 동기생은N명 1~N까지. 상근이학번은 1이다.
 * 동기생들의 친구 관계르 ㄹ모두 조사한 리스트를 가지고있다.
 * 초대할 사람의 수를 구해라.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6',
'5',
'1 2',
'1 3',
'3 4',
'2 3',
'4 5',
]
const N = Number(input.shift())
const M = Number(input.shift())
const INFO = input.map(el=>el.split(' ').map(Number));
const GRAPH = Array.from({length:N+1},()=>[])
for(const [a,b] of INFO){
  GRAPH[a].push(b)
  GRAPH[b].push(a)
}
const solution = (n, m, graph) =>{
  let answer = 0;
  const visited = Array.from({length:n+1},()=> false)
  const q = [[1, 0]]
  visited[1] = true;

  while(q.length!==0){
    const [cur, depth] = q.shift();
    if(depth <=2) answer++;
    for(const next of graph[cur]){
      if(!visited[next]){
        visited[next] = true;
        q.push([next, depth+1]);
      }
    }
  }

  return answer-1;
}
console.log(solution(N, M, GRAPH))