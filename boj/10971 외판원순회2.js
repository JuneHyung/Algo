/**
 * 10971 외판원순회2
 * TSP 문제.
 * 1부터 N까지 번호가 매겨져 있는 도시들이 있고, 도시들 사이 길이있다.(없을수도있다.)
 * 외판원이 한 도시에서 출발해 N개도시를 모두 거쳐 다시 원래 도시로 돌아오는 순회 여행 경로를 계획하려한다.
 * 한번 갔던 도시로는 갈 수 없다. (맨 마지막에 여행을 출발했던 도시로 돌아오는 것은 예외)
 * 
 * 가장 적은 비용을 들이는 여행 계획을 세우고자 한다.
 * W[i][j]는 i에서 j로 가기 위한 비용. 대칭적이지 않다.
 * W[i][i]는 항상 0. 갈수 없는 경우도 0
 * N과 비용행렬이 주어졌을때 가장 적은 비용을 들이는 외판원의 순회 여행 경로를 구하는 프로그램 작성
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const input = [
  '4',
'0 10 15 20',
'5 0 9 10',
'6 13 0 12',
'8 8 9 0',
]
const N = Number(input.shift());
const GRAPH = input.map(el=>el.split(' ').map(Number));

const solution = (n, graph) => {
  let min = Number.MAX_SAFE_INTEGER;
  const visited = Array.from({length: n},()=>false)
  const traveling = (depth, n, start, next, sum) => {
    if(depth===n && start===next){
      min = Math.min(min, sum);
      return;
    } 

    for(let i=0;i<n;i++){
      if(!visited[i] && graph[next][i] > 0){
        visited[i] = true;
        if(sum + graph[next][i] < min){
          traveling(depth+1, n, start, i, sum+graph[next][i]);
        }
        visited[i] = false;
      }
    }
  }

  for(let i=0;i<n;i++){
    traveling(0, n, i, i, 0)
  }

  return min
}

console.log(solution(N, GRAPH))