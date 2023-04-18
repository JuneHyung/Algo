/**
 * 1987 알파벳
 * 세로R 가로C칸의 보드에 대문자 알파벳이 하나씩 있다.
 * 말은 좌측상단에 있다.
 * 상하좌우로 인접한 4칸중 1칸으로 이동할 수 있는데 새로 이동한 칸에 적힌 알파벳은 지금까지
 * 나온 모든 칸의 알파벳과는 달라야한다.
 * 같은 알파벳이 적힌 칸을 두 번 지날수 없다.
 * 좌측상단에서 시작해 말이 최대 몇칸움직일수있는지 작성.
 * (좌측상단의 칸도 포함)
 */
// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = ['3 6', 'HFDFFB', 'AJHGDH', 'DGAGEH'];
// const input = [
//   '2 4',
// 'CAAB',
// 'ADCB',
// ]
const [R, C] = input.shift().split(' ').map(Number);
const BOARD = input.map((el) => el.split(''));

const inRange = (r, c, x, y) => x >= 0 && y >= 0 && x < r && y < c;

const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const solution = (r, c, board) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const visited = Array.from({ length: ALPHA.length }, () => false);
  let answer = 0;
  function dfs(cur, cnt) {
    const [curX, curY] = cur;
    answer = Math.max(answer, cnt);
    for (let k = 0; k < 4; k++) {
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if (inRange(r, c, nx, ny)) {
        const target = board[nx][ny];
        const idx = ALPHA.indexOf(target);
        if (!visited[idx]) {
          visited[idx] = true;
          dfs([nx, ny], cnt + 1);
          visited[idx] = false;
        }
      }
    }
  }

  const cur = board[0][0];
  const curIdx = ALPHA.indexOf(cur);
  visited[curIdx] = true;
  dfs([0, 0], 1);
  return answer;
};
console.log(solution(R, C, BOARD));
