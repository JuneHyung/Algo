/**
 * 21772 가희의 고구마 먹방
 * 가희는 1초마다 상하좌우 방향 중 한 방향으로 1번 이동하거나 이동하지 않고 그 자리에 머무를 수 있다.
 * 가희가 이동한 지점에 고구마가 있는 경우 고구마를 먹습니다.
 * 고구마를 먹으면 다시 그 자리에 고구마가 생기지는 않습니다.
 * T초만큼 이동 시 고구마를 최대한 많이 먹고 싶습니다. 최대 몇개 먹을 수 있을까요
 */
// const fs = require('fs')
// const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ["11 11 5", "........G..", "......S.#S.", "........#.S", "...........", "...........", ".##########", ".##########", "...........", "...........", "##########.", "..........."];
const [R, C, T] = input[0].split(" ").map(Number);
const BOARD = input.slice(1).map((el) => el.split(""));
const solution = (r, c, t, board) => {
  let answer = 0;
  const inRange = (x, y) => x >= 0 && y >= 0 && x < r && y < c;
  const dx = [-1, 1, 0, 0, 0];
  const dy = [0, 0, -1, 1, 0];

  const pos = [];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (board[i][j] === "G") {
        pos.push(...[i, j, t, 0]);
        break;
      }
    }
  }

  const dfs = ([x, y, t, cnt]) => {
    if (t === 0) {
      if (answer < cnt) answer = cnt;
      return;
    }

    for (let d = 0; d < 5; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];
      if (inRange(nx, ny) && board[nx][ny] !== "#") {
        if (board[nx][ny] === "S") {
          board[nx][ny] = ".";
          dfs([nx, ny, t - 1, cnt + 1]);
          board[nx][ny] = "S";
        } else {
          dfs([nx, ny, t - 1, cnt]);
        }
      }
    }
  };

  dfs(pos);
  return answer;
};

console.log(solution(R, C, T, BOARD));
