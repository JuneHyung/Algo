/**
 * 6118 숨바꼭질
 * 농장의 헛간들 중에 한곳에 숨어있다.
 * 헛간 개수는 N, 1부터샌다.
 * 수혀니가 1번부터 찾을거고, 모든 헛간은 양방향길이다.
 * 재서기의 냄새는 1번 헛간에서의 거리(지나야하는 길의 최소 개수)가 멀어질 수록 감소한다.
 * 냄새를 최대한 숨길 수 있는 헛간을 찾자.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6 7',
'3 6',
'4 3',
'3 2',
'1 3',
'1 2',
'2 4',
'5 2',
]
const [N, M] = input[0].split(' ').map(Number);
const INFO = input.slice(1).map(el=>el.split(' ').map(Number));

const solution = (n,m,info) => {
  const graph = Array.from({length: n+1},()=>[]);
  const num = Array.from({length: n+1},()=>Infinity);
  const visited = Array.from({length: n+1},()=>false);
  for(const [a, b] of info){
    graph[a].push(b);
    graph[b].push(a);
  }

  const q = [[1, 0]];
  visited[1] = true;
  while(q.length!==0){
    const [cur, cnt] = q.shift();
    num[cur] = Math.min(num[cur], cnt);

    for(const next of graph[cur]){
      if(!visited[next]){
        visited[next] = true;
        q.push([next, cnt+1]);
      }
    }
  }

  const max = Math.max(...num.slice(1));
  const same = num.filter(el=>el===max).length;

  for(let i=1;i<=n;i++){ 
    if(num[i]===max) return `${i} ${max} ${same}`;
  }
}
console.log(solution(N, M, INFO))