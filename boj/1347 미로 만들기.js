/**
 * 1347 미로 만들기
 * 미로 안의 한 칸에 남쪽을 보며 서있다. 직사각형 격자 모양이며, 각칸은 이동하거나 벽이 있다.
 * 자신의 움직임을 모두 노트에 기록함. 모든 칸을 걸어다님.
 * 기록한 문자열로 지도를 출력한다.
 *
 * F는 한칸 움직인것. L과 R은 방향 전환.
 */

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const input = [
  '6',
'LFFRFF',
]
const N = Number(input[0]);
const COMMANDS = input[1].split("");

const solution = (n, commands) => {
  // N R S E
  const posList = [[0, 0, 2]];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  console.log(posList)
  for (const command of commands) {
    const [x, y, dir] = posList[posList.length - 1];

    if (command === "L") {
      const nextDir = dir - 1 < 0 ? 3 : dir - 1;
      posList.push([x, y, nextDir]);
    } else if (command === "R") {
      const nextDir = dir + 1 > 3 ? 0 : dir + 1;
      posList.push([x, y, nextDir]);
    } else {
      const nx = x + dx[dir];
      const ny = y + dy[dir];
      posList.push([nx, ny, dir]);
    }
  }

  const minX = Math.abs(Math.min(...posList.map((el) => el[0])));
  const minY = Math.abs(Math.min(...posList.map((el) => el[1])));
  const newList = posList.map((el) => [el[0] + minX, el[1] + minY, el[2]]);

  const maxX = Math.abs(Math.max(...newList.map((el) => el[0])));
  const maxY = Math.abs(Math.max(...newList.map((el) => el[1])));

  const board = Array.from({ length: maxX + 1 }, () => Array.from({ length: maxY + 1 }, () => "#"));

  for (let i = 0; i < newList.length; i++) {
    const [x, y, dir] = newList[i];
    if (board[x][y] === ".") continue;
    else board[x][y] = ".";
  }

  const answer = board.map((el) => el.join("")).join("\n");

  return answer;
};

console.log(solution(N, COMMANDS));
