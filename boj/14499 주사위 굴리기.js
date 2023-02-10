/**
 * 14499 주사위 굴리기
 * NxM 지도. 우측이 동 위쪽이 북
 * r을 북에서부터 떨어진 칸의 수
 * c는 서에서 떨어진 칸의 수
 * 
 * 초기 주사위는 위가 1 우측이 3 나머지 0.
 * 주사위 좌표는 x y
 * 이동한 칸이 0이면 주사위 바닥 -> 칸
 * 이동한 칸이 0아니면 칸 -> 바닥, 칸은 0됨
 * 
 * 주사위 놓은 곳에 좌표와 이동시키는 명령이 주어졌을 떄 주사위가 이동했을때 마다 상단의 값을 구하는 프로그램 작성
 * 지도 바깥이동이 불가능하며 그런 경우 명령을 무시하고 출력도 하면 안됨.
 * 
 * 첫째줄 : 세로N, 가로M, 주사위 좌표 x, y ,  명령 수 K
 * 둘째 줄 : N개의 줄에 지도에 쓰인 수가 북에 남으로, 각 줄은 서에서 동 순으로 주어진다.
 * 주사위를 놓은 칸에 쓰인 수는 항상 0
 * 셋째 줄이동명령이 순서대로 주어진다.
 * 1 : 동
 * 2 : 서
 * 3 : 북
 * 4 : 남
 */

// const fs = require('fs')
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input = [
  '3 5 1 2 30',
  '6 7 3 1 4',
  '4 8 0 5 8',
  '1 2 9 6 2',
  '3 4 1 2 2 2 1 4 3 4 1 3 4 3 3 2 4 2 2 4 2 4 2 1 3 1 3 3 4 1',
]
const [N, M, X, Y, K] = input.shift().split(' ').map(Number);
const MAP = Array.from({ length: N }, () => []);
for (let i = 0; i < N; i++) {
  const line = input.shift().split(' ').map(Number);
  MAP[i] = line;
}
const ORDER = input.shift().split(' ').map(Number);
const solution = (n, m, x, y, k, board, order) => {
  const answer = [];

  const inRange = (x, y) => x >= 0 && y >= 0 && x < n && y < m;

  let dice = {
    back: 0,
    left: 0,
    bottom: 0,
    right: 0,
    front: 0,
    top: 0,
    x, y
  }
  // 동 서 북 남
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  for (let t = 0; t < k; t++) {
    // 이동한 칸이 0이면 주사위 바닥 -> 칸
    // 이동한 칸이 0아니면 칸 -> 바닥, 칸은 0됨
    const nx = dice.x + dx[order[t] - 1];
    const ny = dice.y + dy[order[t] - 1];
    if (inRange(nx, ny)) {
      switch (order[t]) {
        case 1: // 동
          const movedEast = {
            back: dice.back,
            left: dice.bottom,
            bottom: dice.right,
            right: dice.top,
            front: dice.front,
            top: dice.left,
            x: nx,
            y: ny
          }
          dice = movedEast
          break;
        case 2: // 서
          const movedWest = {
            back: dice.back,
            left: dice.top,
            bottom: dice.left,
            right: dice.bottom,
            front: dice.front,
            top: dice.right,
            x: nx,
            y: ny
          }
          dice = movedWest
          break;
        case 3: // 북
          const movedNorth = {
            back: dice.top,
            left: dice.left,
            bottom: dice.back,
            right: dice.right,
            front: dice.bottom,
            top: dice.front,
            x: nx,
            y: ny
          }
          dice = movedNorth
          break;
        case 4: // 남
          const movedSouth = {
            back: dice.bottom,
            left: dice.left,
            bottom: dice.front,
            right: dice.right,
            front: dice.top,
            top: dice.back,
            x: nx,
            y: ny
          }
          dice = movedSouth
          break;
      }
      if (board[nx][ny] === 0) {
        board[nx][ny] = dice.bottom;
      } else {
        dice.bottom = board[nx][ny];
        board[nx][ny] = 0;
      }
      answer.push(dice.top)
    } else continue;
  }
  return answer.join('\n')
}

console.log(solution(N, M, X, Y, K, MAP, ORDER));