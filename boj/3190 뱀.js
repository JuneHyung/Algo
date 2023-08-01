/**
 * 3190 뱀
 * 뱀이 사과를 먹으면 길이가 늘어난다.
 * 벽 또는 자기자신의 몸과 부딪히면 게임이 끝난다.
 * 보드의 상하좌우 끝에 벽이있고 뱀은 맨위 좌측에 위치하며, 길이는 1이다.
 * 처음 우측을 향한다.
 *
 * 매 초마다 다음 규칙을 따른다.
 * 1. 몸의 길이를 늘려 머리를 다음 칸에 위치 시킨다.
 * 2. 벽이나 자기자신의 몸과 부딪히면 게임 끝
 * 3. 만약 이동한 칸에 사과가 있으면 사과는 없어지고 꼬리는 움직이지 않음.
 * 4. 이동한칸에 사과가 없으면 몸길이를 줄여 꼬리가 위치한 칸을 비워준다. 몸길이는 변하지 않는다.
 *
 * 사과위치와 뱀의 이동 경로가 주어질 떄 이게임이 몇초에 끝날까?
 *
 * 보드 크기 N이 주어진다. (2 ~ 100)
 * 사과 개수 K가 주어진다. (0 ~ 100)
 *
 * K개 줄에 사과 위치가 주어진다.
 *
 * 뱀의 방향 변환 횟수 L 이주어진다.
 * X C : X초가 끝난 뒤에 C방향으로 이동.
 * X가 증가하는 순으로 주어진다.
 * L : 좌로 90도 회전
 * D : 우로 90도 회전
 * 
 * head좌표, tail좌표 두고 time이 info에 있는 시간이 되면, 방향 돌리기 시전.
 * tail을 줄이는 방법이 문제.
 * path배열을 head이동을 path에 담아두고, tail이 줄어들어야 하면, 가장 앞의 좌표가 tail좌표.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '10',
'5',
'1 5',
'1 3',
'1 2',
'1 6',
'1 7',
'4',
'8 D',
'10 D',
'11 D',
'13 L',
]

const N = Number(input.shift());
const K = Number(input.shift());
const BOARD = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));
for (let k = 0; k < K; k++) {
  const [x, y] = input.shift().split(" ").map(Number);
  BOARD[x - 1][y - 1] = 1;
}
BOARD[0][0] = 2;
const L = Number(input.shift());
const INFO = input.map((el) => el.split(" "));

const solution = (n, k, board, l, info) => {
  let head = [0, 0];
  let tail = [0, 0];

  // 우로 90도 회전하면 +1, 좌로 90도 회전하면 -1
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let dir = 0; 

  let checkTimeIdx = 0; // info배열에서 체크할 idx
  let time = 0;

  const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < n;

  const path = [];

  while (true) {
    const [hx, hy] = head; // head 좌표
    const [tx, ty] = tail; // tail 좌표

    const nhx = hx + dx[dir];
    const nhy = hy + dy[dir];
    if (!inRange(nhx, nhy)) break;
    else if (board[nhx][nhy] === 2) break;
    else {
      if (board[nhx][nhy] === 1) {
        board[nhx][nhy] = 2;
        path.push([nhx, nhy]);
        head = [nhx, nhy];
      } else if (board[nhx][nhy] === 0) {
        board[nhx][nhy] = 2;
        path.push([nhx, nhy]);
        head = [nhx, nhy];

        board[tx][ty] = 0;
        tail = path.shift();
      }
    }
    time++;

    if (checkTimeIdx < l) { // 뱀 이동 time check
      const [ct, nd] = info[checkTimeIdx];
      // console.log(ct, nd, time)
      if (time === Number(ct)) {
        dir = nd === "D" ? (dir + 1) % 4 : dir - 1 < 0 ? 3 : (dir - 1) % 4; 
        checkTimeIdx++;
      }
    }
  }

  return time+1;
};

console.log(solution(N, K, BOARD, L, INFO));
