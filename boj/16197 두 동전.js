/**
 * 16197 두 동전
 * 상하좌우 4개버튼, board는 NxM
 * 버튼누르면 두 동전이 버튼에 쓰인 방향으로 동시에 이동.
 * 
 * 동전이 이동하려는 칸이 벽이면 이동X
 * 칸이 없으면 떨어짐
 * 그외 한칸씩이동함.
 * 
 * 두 동전 중 하나만 떨어뜨리기 위해서 버튼을 최소 몇번 눌러야 하는지 구하기.
 * o : 동전
 * . : 빈칸
 * # : 벽
 * 동전 개수는 항상 2개
 * 만약, 둘중 하나만 떨어뜨릴 수 없거나, 두 동전을 떨어뜨릴 수 없거나, 버튼을 10번보다 많이 눌러야 한다면, -1을 출력한다. => 
 */

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// 1
// const input = [
//   '1 2',
//   'oo',
// ]

// 4 
// const input = [
//   '6 2',
//   '.#',
//   '.#',
//   '.#',
//   'o#',
//   'o#',
//   '##',
// ]

// -1
// const input = [
//   '5 3',
//   '###',
//   '.o.',
//   '###',
//   '.o.',
//   '###',
// ]

// 3
// const input = [
//   '5 3',
//   '###',
//   '.o.',
//   '#.#',
//   '.o.',
//   '###',
// ]

// -1
const input = [
  '13 2',
  '##',
  'o#',
  'o#',
  '.#',
  '.#',
  '.#',
  '.#',
  '.#',
  '.#',
  '.#',
  '.#',
  '.#',
  '.#',
]

const [N, M] = input.shift().split(' ').map(el => Number(el));
const arr = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
for (let i = 0; i < N; i++) {
  const t = input[i].split('')
  for (let j = 0; j < M; j++) {
    arr[i][j] = t[j];
  }
}

const solution = (n, m, board) => {
  let answer = Number.MAX_SAFE_INTEGER;
  const findLoc = () => {
    const result = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] === 'o') result.push([i, j])
      }
    }
    return result;
  }
  const loc = findLoc();

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const outRange = (x, y) => {
    return x < 0 || y < 0 || x >= n || y >= m;
  }

  const dfs = (cnt, aLoc, bLoc) => {
    const [caX, caY] = aLoc;
    const [cbX, cbY] = bLoc;
    if (cnt > 10) return;
    if (outRange(caX, caY) && outRange(cbX, cbY)) return;
    if (outRange(caX, caY) || outRange(cbX, cbY)) {
      // console.log(caX, caY, cbX, cbY, answer);
      // console.log();
      answer = Math.min(answer, cnt);
      return;
    }
    for (let k = 0; k < 4; k++) {
      let [naX, naY] = [caX + dx[k], caY + dy[k]];
      let [nbX, nbY] = [cbX + dx[k], cbY + dy[k]];

      if (board[naX] !== undefined && board[naX][naY] === '#') {
        naX = caX;
        naY = caY;
      }
      if (board[nbX] !== undefined && board[nbX][nbY] === '#') {
        nbX = cbX;
        nbY = cbY;
      }
      dfs(cnt + 1, [naX, naY], [nbX, nbY]);
    }
  }
  dfs(0, loc[0], loc[1])
  if (answer === Number.MAX_SAFE_INTEGER) return -1;
  return answer;
}

console.log(solution(N, M, arr));