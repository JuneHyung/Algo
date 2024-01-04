/**
 * 2458 키 순서.js
 * 1~N까지 학생들에 대해 두 사람끼리 키를 비교한 결과를 보여주고 있다.
 * 자신의 키가 몇번째 인지 알 수 있는 학생들이 몇명인지 계산
 */

// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6 6',
'1 5',
'3 4',
'5 4',
'4 2',
'4 6',
'5 2',
]

const [N, M] = input.shift().split(' ').map(Number)
const INFO = input.map(el=>el.split(' ').map(Number))

const solution = (n, m, info) => {
  let answer = 0;
  const graph = Array.from({length:n+1},()=>Array.from({length:n+1},()=>0))
  
  for(const [a,b] of info){
    graph[a][b] = 1;
  }

  for(let k=1;k<=n;k++){
    for(let i=1;i<=n;i++){
      for(let j=1;j<=n;j++){
        if(graph[i][j]===1 || (graph[i][k]===1 && graph[k][j]===1)){
          graph[i][j] = 1;
        }
      }
    }
  }
  console.log(graph)

  for(let i=1;i<=n;i++){
    let cnt = 0;
    for(let j=1;j<=n;j++){
      if(i===j) continue;
      if(graph[i][j]===1 || graph[j][i]===1) cnt++;
    }
    if(cnt===n-1) answer++;
  }
  return answer;
}
console.log(solution(N, M, INFO))