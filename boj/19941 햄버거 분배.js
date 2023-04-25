/**
 * 19941 햄버거 분배
 * 햄버거와 사람 배열이 주어질 때
 * 사람은 K거리 이하의 햄버거만 먹을 수 있다.
 * 가장 많이 먹을 수 있는 사람 수는?
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['10 10', 'HHHPPPHHHP'];
const [N, K] = input.shift().split(' ').map(Number);
const ARR = input.shift().split('');

const solution = (n, k, arr) => {
  const visited = Array.from({ length: n }, () => false);
  for (let i = 0; i < n; i++) {
    if (arr[i] === 'P') {
      const start = Math.max(0, i - k);
      const end = Math.min(n, i + k + 1);
      for (let j = start; j < end; j++) {
        if (arr[j] === 'H' && !visited[j]) {
          visited[j] = true;
          break;
        }
      }
    }
  }
  const answer = visited.filter((el) => el).length;
  return answer;
};

console.log(solution(N, K, ARR));
