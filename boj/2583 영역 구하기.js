/**
 * 2583 영역 구하기
 * MxN크기 모눈종이가 있다.
 * K개 직사각형을 그릴 때, 내부를 제외한 나머지 부분이 몇개의 분리된 영역으로 나누어 진다.
 * 직사각형 내부를 제외한 나머지 부분이 몇개인지, 그리고 각 영역의 넓이가 얼마인지 오름차순으로 출력.
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['5 7 3', '0 2 4 4', '1 1 2 5', '4 0 6 2'];
const [M, N, K] = input.shift().split(' ').map(Number);
const BOARD = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));

for (let i = 0; i < K; i++) {
  const [x1, y1, x2, y2] = input.shift().split(' ').map(Number);
  for (let j = x1; j < x2; j++) {
    for (let k = y1; k < y2; k++) {
      BOARD[j][k] = 1;
    }
  }
}

const solution = (m, n, k, board) => {
  const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < m;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let area = 0;
  const width = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) {
        area++;
        let q = [[i, j]];
        let cnt = 1;
        board[i][j] = 2;

        while (q.length !== 0) {
          const [curX, curY] = q.shift();
          for (let k = 0; k < 4; k++) {
            const nx = curX + dx[k],
              ny = curY + dy[k];
            if (inRange(nx, ny) && board[nx][ny] === 0) {
              board[nx][ny] = 2;
              cnt++;
              q.push([nx, ny]);
            }
          }
        } // while
        width.push(cnt);
      }
    }
  }
  const answer = [area, [...width.sort((a, b) => a - b)].join(' ')];
  return answer.join('\n');
};

console.log(solution(M, N, K, BOARD));
