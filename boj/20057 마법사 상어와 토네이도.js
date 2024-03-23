/**
 * 마법사 상어와 토네이도
 * 
 * NxN격자로 나누어진 모래밭에서 토네이도 연습
 * 시전시 격자 가운데부터 이동이 시작.
 * 이동마다 일정 비율로 흩날림.
 * 소수점 아래는 버린다.
 * 토네이도 소멸 시 격자 빡으로 나간 모래의 양을 구하자.
 * 
 * N은 홀수, 가운데칸은 무조건 0
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '5',
  '0 0 0 0 0',
  '0 0 0 0 0',
  '0 100 0 0 0',
  '0 0 0 0 0',
  '0 0 0 0 0',
]
const N = Number(input[0])
const BOARD = input.slice(1).map(el => el.split(' ').map(Number));

const solution = (n, board) => {
  const mid = Math.floor(n / 2);

  // 좌 하 우 상
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  // 같은방향으로 2번수행 마다 길이 +1
  const dc = [1, 1, 2, 2];
  const dsx = [
    [-1, 1, -2, -1, 1, 2, -1, 1, 0],
    [-1, -1, 0, 0, 0, 0, 1, 1, 2],
    [1, -1, 2, 1, -1, -2, 1, -1, 0],
    [1, 1, 0, 0, 0, 0, -1, -1, -2],
  ]
  const dsy = [
    [1, 1, 0, 0, 0, 0, -1, -1, -2], [-1, 1, -2, -1, 1, 2, -1, 1, 0],
    [-1, -1, 0, 0, 0, 0, 1, 1, 2], [1, -1, 2, 1, -1, -2, 1, -1, 0]
  ]
  const sandRatio = [1, 1, 2, 7, 7, 2, 10, 10, 5];
  const outRange = (x, y) => x < 0 || y < 0 || x >= n || y >= n

  const moveSand = (x, y) => {
    let totalOutSand = 0;
    let cx = x;
    let cy = y;
    while (true) {
      for (let d = 0; d < 4; d++) {
        for (let mCnt = 0; mCnt < dc[d]; mCnt++) {
          // 현위치 이동
          let nx = cx + dx[d];
          let ny = cy + dy[d];

          if (outRange(nx, ny)) return totalOutSand;

          // 이동위치의 비율만큼 모래 뿌리기
          let sand = board[nx][ny];
          board[nx][ny] = 0;
          let spreadTotal = 0;

          for (let s = 0; s < 9; s++) {
            let sx = nx + dsx[d][s];
            let sy = ny + dsy[d][s];
            let spreadAmount = Math.floor((sand * sandRatio[s]) / 100)

            if (outRange(sx, sy)) totalOutSand += spreadAmount;
            else board[sx][sy] += spreadAmount;

            spreadTotal += spreadAmount;
          }


          // a 위치 채우기
          let ax = nx + dx[d];
          let ay = ny + dy[d];
          let aAmount = sand - spreadTotal;
          if (outRange(ax, ay)) totalOutSand += aAmount;
          else board[ax][ay] += aAmount;

          // 이동 위치를 현재위치로 업데이트
          cx = nx;
          cy = ny;
        }
      } // for(d)

      // 횟수 업데이트
      for (let i = 0; i < 4; i++) {
        dc[i] += 2;
      }
    }
  }

  const answer = moveSand(mid, mid);




  return answer
}

console.log(solution(N, BOARD))