/**
 * 14267 회사 문화 1
 * 상사가 칭찬을 하면, 직속 부하를 연쇄적으로 칭찬하는 문화가 있다.
 * 모든 직원들이 각자 얼마의 칭찬을 받았는지 출력
 * 칭찬 수치는 부하들에게 똑같이 칭찬함.
 * 
 * 첫 줄 : 직원수 n과 최초 칭찬횟수 m
 * n명의 직속상사번호가 주어진다.
 * 직속 상사의 번호는 자신의 번호보다 작으며 최종적으로 1번이 사장이다.
 * 1번은 상사가 없으니 -1이 된다.
 * 그 다음 m줄동안 칭찬받는 직원번호, 칭찬수치가 주어진다.
 * 1번부터 n번까지 칭찬을 ㅂ다은 정도를 출력하시오.
 * 
 * 1. 칭찬정보들을 반복하면서 자신의 하위까지 점수누적하게 dfs돌림. => 시간초과
 * 2. 부하직원들의 정보를 모아서 더해나가는 식으로.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 3',
  '-1 1 2 3 4',
  '2 2',
  '3 4',
  '5 6',
];
const [N, M] = input.shift().split(' ').map(Number)
const GRAPH = Array.from({ length: N+1 }, () => []); // 상사 받은거 줄 거
const SUPERIOR = input.shift().split(' ').map(Number)
const PRAISE = input.map(el => el.split(' ').map(Number))
for (let i = 1; i < N; i++) { 
  GRAPH[SUPERIOR[i]].push(i+1)
}

const solution = (n, m, graph, praise) => { 
  const result = Array.from({length: n+1},()=>0)
  for (let t = 0; t < m; t++) { 
    const [target, value] = praise[t];
    result[target] += value;
  }
  // console.log(graph)
  // console.log(result)  
  const dfs = (node, value) => { 
    result[node] += value;
    for (let i = 0; i < graph[node].length; i++) { 
      // console.log(result);
      dfs(graph[node][i], result[node])
    }
  }
  dfs(1, 0)
  let answer = '';
  for (let i = 1; i <=n; i++) { 
    answer += result[i] + ' ';
  }
  return answer;
}

console.log(solution(N, M, GRAPH, PRAISE))

