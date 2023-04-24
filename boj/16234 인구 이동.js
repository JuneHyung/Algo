/**
 * 16234 인구이동
 * NxN 땅이있고, 1x1개 칸으로 나누어져 있다.
 * A[r][c]명이 살고 있다.
 * 인구이동은 하루동안 다음처럼 진행되며, 더 이상 아래 방법에 의해 인구 이동이 없을때까지 지속된다.
 * 1. 국경선을 공유하는 두 나라의 인구 차이가 L명이상, R명 이하라면, 국경선을 연다ㅏ
 * 2. 열렸다면, 이동을 시작한다.
 * 3. 열려있으면 인접한 칸만 이용해 이동할 수 있고, 그 나라를 하루 동안은 연합이라 한다.
 * 4. 연합을 이루고 있는 각 칸의 인구수는 (연합인구수)/(연합이루는 칸의 개수)가 된다. (소수점 제외)
 * 5. 연합을 해체하고 모든 국경선을 닫는다.
 *
 * 첫 줄 : N L R
 * N개 줄에 각 나라의 인구 수가 주어진다.
 *
 * 인구이동이 며칠동안 발생하는지 구하는 프로그램 작성
 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, L, R] = input.shift().split(' ').map(Number);
const BOARD = input.map((el) => el.split(' ').map(Number));
const inRange = (n, nx, ny) => nx >= 0 && ny >= 0 && nx < n && ny < n;
const solution = (n, l, r, board) => {
  let answer = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  while (true) {
    let flag = false;
    const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
          let q = [[i, j]];
          let sum = board[i][j];
          let storage = [[i, j]];
          let city = 1;
          visited[i][j] = true;
          while (q.length !== 0) {
            const [curX, curY] = q.shift();
            for (let k = 0; k < 4; k++) {
              const nx = curX + dx[k];
              const ny = curY + dy[k];
              if (inRange(n, nx, ny)) {
                const diff = Math.abs(board[curX][curY] - board[nx][ny]);

                if (diff >= l && diff <= r && !visited[nx][ny]) {
                  visited[nx][ny] = true;
                  q.push([nx, ny]);
                  storage.push([nx, ny]);
                  city++;
                  sum += board[nx][ny];
                  flag = true;
                } // if(checking)
              } // if(inRange)
            }
          } // while
          const average = Math.floor(sum / city);
          for (const [x, y] of storage) {
            board[x][y] = average;
          }
        } // if(!visited)
      }
    }
    if (!flag) break;
    answer += 1;
  }
  return answer;
}; // solution
console.log(solution(N, L, R, BOARD));
