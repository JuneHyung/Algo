/**
 * 7562 나이트의 이동
 * 나이트는 상하좌우를 제외한 8방이동을 한다
 * 나이트는 몇번 움직이면 이동할 수 있을지 구하기.
 * 
 * 각 testcase는 3줄로 이루어짐.
 * 첫째줄 : 체스판 한 변의 길이 l, 체스판은 lxl
 * 둘째줄 : 나이트 현재 칸
 * 셋째줄 : 이동하려는 칸.
 * 
 */
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '3',
  '8',
  '0 0',
  '7 0',
  '100',
  '0 0',
  '30 50',
  '10',
  '1 1',
  '1 1',
]
const T = Number(input.shift());



const solution = (L, start, end) => {
  const n = Number(L);
  const [startX, startY] = start.split(' ').map(el => Number(el));
  const [endX, endY] = end.split(' ').map(el => Number(el));
  console.log(startX, startY, endX, endY)
  const board = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  // const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

  board[startX][startY] = 1;

  const dx = [1, 2, 2, 1, -1, -2, -2, -1];
  const dy = [-2, -1, 1, 2, 2, 1, -1, -2];
  const q = [[startX, startY, 0]];
  let answer = Number.MAX_SAFE_INTEGER;
  const bfs = () => {
    while (q.length !== 0) {
      // console.log(q)
      const [curX, curY, cnt] = q.shift();
      if (curX === endX && curY === endY) {
        answer = Math.min(answer, cnt)
      }
      for (let k = 0; k < 8; k++) {
        const nx = curX + dx[k];
        const ny = curY + dy[k];
        if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          q.push([nx, ny, cnt + 1])
        }
      }
    }
  }
  bfs();
  return answer;
}

for (let t = 0; t < T; t++) {
  const [L, start, end] = input.splice(0, 3);
  console.log(solution(L, start, end))
}