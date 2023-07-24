/**
 * 14940 쉬운 최단거리
 * 모든 지점에 대해서 목표지점 까지 거리를 구하기.
 * 4방향으로만 움직일 수 있다.
 *
 * n과 m 주어진다.
 * 0은 갈수없는 땅, 1은 갈수 있는 땅, 2는 목표지점.
 * 2는 1개다.
 * 각 지점에서 목표지점까지의 거리를 출력.
 * 갈 수 있는 곳에서 도달 할 수 없는 곳은 -1출력
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ["2 2", "2 0", "0 0"];
const [N, M] = input.shift().split(" ").map(Number);
const BOARD = input.map((el) => el.split(" ").map(Number));

const solution = (n, m, board) => {
  const checked = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));
  // const visited = Array.from({length: n},()=>Array.from({length:m},()=>0));

  const getTargetPos = () => {
    let result = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 2) {
          result.push([i, j]);
          checked[i][j] = 0;
        }
        if (board[i][j] === 0) checked[i][j] = 0;
      }
    }
    return result;
  };

  const q = getTargetPos();

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < m;

  while (q.length !== 0) {
    const [curX, curY] = q.shift();
    for (let k = 0; k < 4; k++) {
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if (inRange(nx, ny) && checked[nx][ny] === -1) {
        checked[nx][ny] = checked[curX][curY] + 1;
        q.push([nx, ny]);
      }
    }
  }

  const answer = checked.map((el) => el.join(" ")).join("\n");
  return answer;
};

console.log(solution(N, M, BOARD));
