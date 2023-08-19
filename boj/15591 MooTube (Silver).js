/**
 * 15591 MooTube
 * 1~N까지 번호가 붙은 N개의 동영상을 올려놓았따.
 * 연관동영상 리스트르 만들기로 했다.
 * 두 동영상이 얼마나 가까운지 측정하는 단위인 USADO를 만들었다.
 * n-1개의 쌍을 골라 직접 USADO를 계산.
 * N-1개 쌍을 골라 어떤 동영상에서 다른 동영상으로 가는 경로가 반드시 하나 존재하도록 했다.
 * 임의의 두 쌍 사이 동영상의 USADO를 그 경로의 모든 연결들의 USADO중 최소값으로 하기로 했다.
 * 
 * USADO가 K이상인 모든 동영상이 추천되도록 할 것이다.
 * K를 적절한 값으로 결정하려한다.
 * K에 대한 추천 동영상의 개ㅜ를 묻는 질문여러개에 대답해주기 바란다.
 * 
 * N과 Q가 주어진다.
 * 두 동영상과 USADO가 한 줄에 하나씩 주어진다.
 * Q개줄에는 Q개 질문이 주어진다.
 * K라면 v를 보는 소들에게 몇개의 동영상이 추천되는지 묻는다는 뜻.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '4 3',
'1 2 3',
'2 3 2',
'2 4 4',
'1 2',
'4 1',
'3 1',
]
const [N, Q] = input.shift().split(' ').map(Number)
const INFO = input.slice(0, N-1).map(el=>el.split(' ').map(Number));
const GRAPH = Array.from({length:N+1},()=>[]);

for(const [p, q, r] of INFO){ 
  GRAPH[p].push([q, r]);
  GRAPH[q].push([p, r]);
}

const QUESTIONS = input.slice(N-1).map(el=>el.split(' ').map(Number));


const solution = (n, graph, k, v) => {
  const visited = Array.from({length: n+1}, ()=>false);
  const q = [[v, Infinity]]
  visited[v]=true;
  let cnt = 0;

  while(q.length!==0){
    let [cur, curV] = q.shift();
    for(let i=0;i<graph[cur].length;i++){
      const [next, value] = graph[cur][i];
      const nextUSADO = Math.min(curV, value);
      if(nextUSADO>=k && !visited[next]){
        cnt+=1;
        visited[next] = true;
        q.push([next, nextUSADO]);
      }  
    }
  }

  return cnt;
}

for(let t=0;t<Q;t++){
  const [k, v] = QUESTIONS[t]
  console.log(solution(N, GRAPH, k, v))
}