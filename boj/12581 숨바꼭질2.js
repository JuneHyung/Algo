/**
 * 12581 숨바꼭질2
 * 수빈이는 현재 점 N, 동생은 K
 * 수빈이는 걷거나 순간이동 가능.
 * 수빈이 위치가 X일떄 걸으면 1초후 X-1 또는 X+1로 이동.
 * 순간이동의 경우 2*X위치로 이동
 * 수빈이가 동생을 찾을 수 있는 가장 빠른시간이 몇초인지 구하는 프로그램 작성
 * 첫 줄에 가장 빠른 시간을 출력.
 * 둘째줄에 방법의 수를 출력.
 *
 * 1트 - 시간초과
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim()
const input = "5 17";
const [N, K] = input.split(" ").map(Number);

const solution = (n, k) => {
  const max = 200000;

  const way = Array.from({ length: max + 4 }, () => 0);
  const visited = Array.from({ length: max + 4 }, () => 0);
  const q = [n];
  visited[n] = 1;
  way[n] = 1;
  
  while (q.length !== 0) {
    const cur = q.shift();

    for (const next of [cur - 1, cur + 1, cur * 2]) {
      if (next >= 0 && next < max) {
        if (visited[next]===0) {
          q.push(next);
          visited[next] = visited[cur] + 1;
          way[next] += way[cur];
        } else if (visited[next] === visited[cur] + 1) {
          way[next] += way[cur];
        }
      }
    }
  }

  return visited[k] - 1 + "\n" + way[k];
};

console.log(solution(N, K));
