/**
 * 27211 도넛 행성
 * 본인의 집 에서 도넛처럼 돌 수 있다.
 * 탐험할 수 있는 빈 구역의 수가 몇갠지 출력.
 * 0이 비어있는 공간.
 * 1이 숲
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5 6',
  '1 1 1 1 1 1',
  '1 0 0 0 1 1',
  '1 1 1 1 0 0',
  '1 1 1 1 0 0',
  '1 1 1 1 1 1',
]
const [N, M] = input.shift().split(' ').map(Number);
const MAP = input.map(line => line.split(' ').map(Number))

const solution = (n, m, board) => {

  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false))
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0 && !visited[i][j]) {
        cnt++;
        let q = [[i, j]]
        while (q.length !== 0) {
          let [curX, curY] = q.shift();
          for (let k = 0; k < 4; k++) {
            let nx = curX + dx[k];
            let ny = curY + dy[k];
            nx = nx === n ? 0 : nx === -1 ? n - 1 : nx;
            ny = ny === m ? 0 : ny === -1 ? m - 1 : ny;
            if (!visited[nx][ny] && board[nx][ny] === 0) {
              visited[nx][ny] = true;
              q.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return cnt;

}

console.log(solution(N, M, MAP))