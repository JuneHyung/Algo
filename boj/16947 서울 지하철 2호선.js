/**
 * 16947 서울 지하철 2호선
 * 순환선 사이 거리는 A와 순환선에 속하는 역 사이 거리중 최소값
 * 
 * 역의 갯수 N
 * 역과 역을 연결하는 정보가 주어진다.
 * 1~N번가지 주어졌을때 임의의 두 역 사이에 경로가 항상 존재하는 노선만 주어진다.
 * 1번역과 순환선 사이 거리, 2번역과 순환선사이거리, ... N번역과 순환선 사이 거리를 출력
 * 
 * 순환선 리스트를 구하고, 각 거리 구하는 방식.
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '6',
  '1 2',
  '3 4',
  '6 4',
  '2 3',
  '1 3',
  '3 5',
]
const N = Number(input.shift())
const INFO = input.map(el => el.split(' ').map(Number));

const isCircular = (cur, parent, start, visited, graph, circular) => { 
  visited[cur] = true;
  for (let v of graph[cur]) { 
    if (!visited[v]) { 
      if (isCircular(v, cur, start, visited, graph, circular)) {
        circular.push(v)
        return true;
      } 
    }else if (v !== parent && v === start) { 
      circular.push(v);
      return true;
    }
  }
  return false;
}

const bfs = (n, graph, circular, answer) => { 
  let q = [...circular];
  const visited = Array.from({ length: n + 1 }, () => false);
  for (let v of circular) visited[v] = true;

  while (q.length !== 0) { 
    const cur = q.shift();
    for (const v of graph[cur]) { 
      if (!visited[v]) { 
        q.push(v);
        visited[v] = true;
        answer[v-1] += answer[cur-1] + 1
      }
    }
  }
}

const solution = (n, info) => { 
  const graph = Array.from({ length: N + 1 }, () => [])
  for (const [a, b] of info) { 
    graph[a].push(b);
    graph[b].push(a);
  }
  const circular = [];
  let visited = Array.from({ length: n + 1 }, () => false);
  for (let i = 1; i <= n; i++) { 
    if (isCircular(i, -1, i, visited, graph, circular)) break;
    else visited = Array.from({ length: n + 1 }, () => false);
  }
  
  circular.sort((a, b) => a - b);
  const answer = Array.from({ length: n }, () => 0);
  bfs(n, graph, circular, answer)
  
  return answer.join(' ')
}

console.log(solution(N, INFO))