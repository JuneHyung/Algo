/**
 * 16437 양 구출 작전
 * N개 섬에 늑대와 양이 있다.
 * 
 * t : w- 늑대, s- 양
 * a : 마리수
 * p : 섬 연결 정보
 * 
 * 1마리 늑대는 1마리양만 먹음.
 * 1번 섬 까지 양이 몇마리 갈 수 있을지 출력
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const arr = input.map(el => el.split(' '))

const solution = (n, list) => {
  const graph = new Map();
  graph.set(1, 0);
  for (let i = 0; i < list.length; i++) {
    const [t, a, p] = list[i];
    graph.set(i + 2, [t, Number(a), Number(p)])
  }

  const visited = Array.from({ length: n + 1 }, () => false);

  for (let i = n; i > 1; i--) {
    let cur = i;
    let sheep = 0;
    const getCur = graph.get(i)
    if (getCur[0] === 'S' && !visited[i]) {
      while (true) {
        const [t, a, p] = graph.get(cur);
        if (!visited[cur]) sheep = t === 'S' ? sheep + a : sheep - a;
        if (sheep < 0) break;
        if (p === 1) {
          visited[cur] = true;
          graph.set(1, graph.get(1) + sheep)
          break;
        }
        cur = p;
      }
    }
  }
  const answer = graph.get(1);
  return answer;
}

console.log(solution(N, arr));