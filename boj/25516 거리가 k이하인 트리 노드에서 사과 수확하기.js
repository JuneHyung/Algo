/**
 * 25516 거리가 k이하인 트리노드에서 사과 수확하기
 * 
 * 정점이 n개, n-1개의 간선으로 구성된 트리 T가 있다. 모든 간선 길이는 1.
 * 트리 T의 각 정점에는 사과가 0개 또는 1개놓여있다.
 * 루트 노드에서 거리가 k이하인 노드에 있는 사과를 수확하려한다.
 * 수확할 수 있는 사과 개수를 출력.
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '8 2',
  '0 1',
  '0 2',
  '1 3',
  '1 4',
  '2 5',
  '2 6',
  '6 7',
  '1 0 0 1 0 1 0 1',
]
const [N, K] = input[0].split(' ').map(Number);
const INFO = input.slice(1, N).map(el=>el.split(' ').map(Number));
const CNT = input[input.length-1].split(' ').map(Number);
const solution = (n, k , info, cnt) => {
  const graph = Array.from({length: n+1},()=>[])
  for(const [a,b] of info){
    graph[a].push(b)
  }
  
  let answer = 0;
  const dfs = (L, len) => {
    if(len === k+1) return ;
    answer += cnt[L];
    
    for(const next of graph[L]){
      dfs(next, len+1)
    }
  }


  dfs(0,0);
  return answer;
}

console.log(solution(N, K, INFO, CNT));