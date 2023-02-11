/**
 * 1697 숨바꼭질
 * 수빈이는 N, 동생은 K
 * 걸을땐 X-1, X+1
 * 순간이동은 2*X
 * 가장빠르게 동생놈잡는 방법.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const input = [5, 17]
const solution = (input) => {
  const [n, k] = input;
  const q = [[n, 0]];
  const visited = Array.from({ length: 100100 }, () => false);
  visited[n] = true;

  while (q.length !== 0) {
    const [cur, cnt] = q.shift();
    if (cur === k) return cnt;
    for (next of [cur - 1, cur + 1, cur * 2]) {
      if (!visited[next] && next >= 0 && next <= 100000) {
        visited[next] = true;
        q.push([next, cnt + 1])
      }
    }
  }
}

console.log(solution(input))