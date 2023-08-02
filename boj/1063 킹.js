/**
 * 1063 킹
 * 8*8 체스판이 있고, 킹의 현재 위치가 주어진다.
 * 체스판에서 말위치는 알파벳하나와 숫자 하나로 이루어진다.
 * 알파벳은 열, 숫자는 행이다.
 * 열은 가장 좌가 A 가장 우측이 H, 행은 가장아래가 1, 가장위가 8 즉, 가장 좌측아래가 a1
 *
 * 움직임
 * R : 우
 * L : 좌
 * B : 하
 * T : 상
 * RT : 우측 위 대각선
 * LT : 좌측 위 대각선
 * RB : 우측 아래 대각선
 * LB : 좌측 아래 대각선
 *
 * 체스판에는 돌이 하나 있는데 돌과 같은 곳으로 이동할 때는 돌을 킹이 움직인 방향과 같은 방향으로 한칸이동시킨다.
 *
 * 입력으로 킹이 어떻게 움직일지 주어진다.
 * 입력으로 주어진대로 움직여 킹이나 돌이 체스판 밖으로 나가면 그 이동은 건너뛰고 다음 이동한다.
 *
 * 킹위치, 돌위치, 움직인 횟수N (50이하 자연수)이 주어진다.
 * 그다음 어떻게 움직여야 하는지 주어진다.
 *
 * 첫줄에 킹의 위치, 둘째줄에 마지막 위치를 출력.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const input = ["A1 A2 5", "B", "L", "LB", "RB", "LT"];
const input = [
  'A1 A2 1',
'T',
];
const [KING_POS, STONE_POS, N] = input.shift().split(" ");
const INFO = input;

const ALPHA = ["A", "B", "C", "D", "E", "F", "G", "H"];
const dir = {
  R: [1, 0],
  L: [-1, 0],
  B: [0, -1],
  T: [0, 1],
  RT: [1, 1],
  LT: [-1, 1],
  RB: [1, -1],
  LB: [-1, -1],
};

const solution = (kingPos, stonePos, n, info) => {
  let [kx, ky] = kingPos.split("");
  let [sx, sy] = stonePos.split("");
  ky = Number(ky);
  sy = Number(sy);

  let king = [ALPHA.indexOf(kx)+1, ky];
  let stone = [ALPHA.indexOf(sx)+1, sy];

  const inRange = (x, y) => x > 0 && y > 0 && x <= 8 && y <= 8;

  for (let i = 0; i < n; i++) {
    const c = info[i];
    const nkx = king[0] + dir[c][0];
    const nky = king[1] + dir[c][1];
    if (inRange(nkx, nky)) {
      if (nkx === stone[0] && nky === stone[1]) {
        const nsx = stone[0] + dir[c][0];
        const nsy = stone[1] + dir[c][1];
        if (inRange(nsx, nsy)) {
          king = [nkx, nky];
          stone = [nsx, nsy];
        } else continue;
      } else king = [nkx, nky];
    } else  continue;
  } // for
  console.log(king, stone)
  const answer = [
    `${ALPHA[king[0]-1]}${king[1]}`,
    `${ALPHA[stone[0]-1]}${stone[1]}`
  ]
  return answer.join('\n')
};
console.log(solution(KING_POS, STONE_POS, Number(N), INFO));
