/**
 * 10026 적록색약
 * 적록색약인사람은 R과 G차이를 모른다.
 * 적록색약인 사람이 봤을때와 아닌사람이 봤을때 구역의 수를 구하기.
 */
// const fs = require('fs);
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
  '20',
  'BBBBBRRRRRRRRRRRBBBB',
  'BBBBBRRRRRRRRRRRBBBB',
  'RBBBBBRRRRRRRRRRBBBB',
  'RRRBBBBRRRRRRRRRBBBB',
  'RRRBBBBRRRRRRRRRRBRB',
  'GRRBBBBRRRRRRRRRRBRR',
  'GGRRRRBBBRRRRRRRRBBB',
  'GGGRRRBBBRRRRRRRRBBB',
  'RRGGGGBBBRRRRRRRRBBB',
  'BBGGGGBBBBRRRRRRRBBB',
  'BBGGGGGBBBRRRRRRRBBB',
  'GBGGGGGBRRRRRRRRRBBB',
  'GGGGGGGGRRRRRRRRRBBB',
  'GGGGGGGGGRRRRRRRRBBB',
  'GGGGGGGGGGRRRRRRRBBB',
  'RRGGGGGGGGGGRRRRRRBB',
  'RRGGGGGGGGGGGGGGGRBB',
  'RRRGGGGGGGGGGGGGGRBB',
  'GGGGGGGBGGGGGGGGGGBB',
  'RRRRGGGGGGGGGGGGGGGG',
]
const N = Number(input.shift());
const board = input.map(arr => arr.split(''));

function bfs(n, q, origin, visited, color) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  // let queue = [[i, j]];
  while (q.length !== 0) {
    const [curX, curY] = q.shift();
    for (let k = 0; k < 4; k++) {
      const nx = curX + dx[k];
      const ny = curY + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
        if (!visited[nx][ny] && color.includes(origin[nx][ny])) {
          visited[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
    }
  }
}

function solution(n, board) {
  let notWeakVisited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  let weakVisited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  let notWeak = 0;
  let weak = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!notWeakVisited[i][j]) {
        notWeakVisited[i][j] = true;
        notWeak++;
        const color = board[i][j];
        bfs(n, [[i, j, board[i][j]]], board, notWeakVisited, color);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!weakVisited[i][j]) {
        weakVisited[i][j] = true;
        weak++;
        const color = board[i][j] === 'B' ? 'B' : 'RG';
        bfs(n, [[i, j]], board, weakVisited, color);
      }
    }
  }
  const answer = [notWeak, weak]
  return answer.join(' ');
}

console.log(solution(N, board));