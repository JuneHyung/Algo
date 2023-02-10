/**
 * 14503 로봇 청소기
 * 로봇 청소기 삼성 비스포크 제트 봇.
 * 
 * NxM 의 방
 * 바라보는 방향은 동, 서, 남, 북중 하나.
 * 로봇의 위치 r, c
 * r은 북쪽으로 부터 떨어진 칸의 개수
 * c는 서쪽으로 부터 떨어진 칸의 개수
 * 
 * 로봇 동작
 * 1. 현재 위치 청소
 * 2. 현재 방향을 기준으로 왼쪽방향부터 차례대로 탐색
 * 2-1. 왼쪽에 청소하지 않은 공간이 있다면, 그방향으로 회전한다음 한칸 전진 후 1번부터 진행
 * 2-2. 왼쪽에 청소할 공간이 없다면, 거방향으로 회전 후 2번으로 돌아감.
 * 2-3. 네 방향 모두 청소가 되있거나 벽인 경우, 바라보는 방향을 유지한 채 한 칸 후진하고 2번으로 돌아감.
 * 2-4. 네 방향 모두 청소가 되있거나 벽이면서, 뒤쪽 방향이 벽이라 후진도 할 수 없다면 작동을 멈춘다.
 * 이미 청소된 칸은 청소하지 않으며 벽을 통과할 수 없다.
 * 
 * 방향 d
 * 0 : 북
 * 1 : 동
 * 2 : 남
 * 3 : 서
 * 
 * 빈 칸은 0, 벽은 1
 * 지도의 첫 행, 마지막 행, 첫 열, 마지막 열에 있는 모든 칸은 벽이다.
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = [
  '11 10',
  '7 4 0',
  '1 1 1 1 1 1 1 1 1 1',
  '1 0 0 0 0 0 0 0 0 1',
  '1 0 0 0 1 1 1 1 0 1',
  '1 0 0 1 1 0 0 0 0 1',
  '1 0 1 1 0 0 0 0 0 1',
  '1 0 0 0 0 0 0 0 0 1',
  '1 0 0 0 0 0 0 1 0 1',
  '1 0 0 0 0 0 1 1 0 1',
  '1 0 0 0 0 0 1 1 0 1',
  '1 0 0 0 0 0 0 0 0 1',
  '1 1 1 1 1 1 1 1 1 1',
];
const [N, M] = input.shift().split(' ').map(Number);
const [R, C, D] = input.shift().split(' ').map(Number);
const MAP = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
const VISITED = Array.from({ length: N }, () => Array.from({ length: M }, () => false));
for (let i = 0; i < N; i++) {
  const line = input.shift().split(' ').map(Number)
  for (let j = 0; j < M; j++) {
    MAP[i][j] = line[j];
  }
}

const solution = (n, m, r, c, d, board, visited) => {
  // console.log(board);
  // * 로봇 동작
  // * 1. 현재 위치 청소
  // * 2. 현재 방향을 기준으로 왼쪽방향부터 차례대로 탐색
  // * 2-1. 왼쪽에 청소하지 않은 공간이 있다면, 그방향으로 회전한다음 한칸 전진 후 1번부터 진행
  // * 2-2. 왼쪽에 청소할 공간이 없다면, 그 방향으로 회전 후 2번으로 돌아감.
  // * 2-3. 네 방향 모두 청소가 되있거나 벽인 경우, 바라보는 방향을 유지한 채 한 칸 후진하고 2번으로 돌아감.
  // * 2-4. 네 방향 모두 청소가 되있거나 벽이면서, 뒤쪽 방향이 벽이라 후진도 할 수 없다면 작동을 멈춘다.
  // * 이미 청소된 칸은 청소하지 않으며 벽을 통과할 수 없다.

  // d = 북 동 남 서
  // const dx = [-1, 0, 1, 0];
  // const dy = [0, 1, 0, -1];

  const dlx = [0, -1, 0, 1];
  const dly = [-1, 0, 1, 0];
  const dbx = [1, 0, -1, 0];
  const dby = [0, -1, 0, 1];
  const dir = {
    0: 3,
    1: 0,
    2: 1,
    3: 2,
  }
  let [curX, curY] = [r, c];
  let answer = 0;
  let cleanCnt = 0;
  while (true) {
    if (!visited[curX][curY]) { // 현위치 청소
      visited[curX][curY] = true;
      board[curX][curY] = 2;
      answer++;
    }

    // 2
    const [nlx, nly] = [curX + dlx[d], curY + dly[d]];
    if (board[nlx][nly] === 0) {
      curX = nlx;
      curY = nly;
      cleanCnt = 0;
    } else { cleanCnt++; }
    d = dir[d];

    // 3
    if (cleanCnt === 4) {
      const [nbx, nby] = [curX + dbx[d], curY + dby[d]];
      if (board[nbx][nby] === 1) break;
      else {
        curX = nbx;
        curY = nby;
        cleanCnt = 0;
      }
    }
  }
  return answer;
}

console.log(solution(N, M, R, C, D, MAP, VISITED))